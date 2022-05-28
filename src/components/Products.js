import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import axios from "axios";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import { AuthContext } from "../contexts/authContext";

const Products = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const API_URL = process.env.API_URL;
  const authState = useContext(AuthContext);

  useEffect(async () => {
    setLoading(true);

    try {
      const categoryId = params.id;
      const endpoint = categoryId ? "category/" + categoryId : "product";
      const res = await axios.get(
        `${API_URL}/${endpoint}`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        setCategory(res.data.category);
        if (categoryId) {
          setProducts(res.data.category.products);
        } else {
          setProducts(res.data.products);
        }
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const res = await axios.get(
        `${API_URL}/category`,
        getAxiosConfig(authState.token)
      );
      if (res.status === 200) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }, [params.id]);

  return (
    <>
      <h1 className="mt-8 text-3xl font-bold">
        Products - {category ? category.name : "All"}
      </h1>
      <div className="mt-4 flex">
        <div className="mr-4 min-w-max p-4">
          <div className="border p-4">
            <h2 className="text-xl">Categories</h2>
            <div className="mt-4 flex flex-col">
              <Link to="../products">All</Link>
              {categories.map((category) => (
                <Link key={category.name} to={`../products/${category.id}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex grow flex-row flex-wrap gap-4 p-4">
          {loading ? (
            <Loading />
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.details.id}
                id={product.details.id}
                name={product.details.name}
                price={product.details.price}
                description={product.details.description}
                imgURL={product.details.imageURL}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

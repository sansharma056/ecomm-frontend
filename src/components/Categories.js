import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const authState = useContext(AuthContext);
  const API_URL = process.env.API_URL;

  useEffect(async () => {
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
  }, []);

  return categories ? (
    <>
      <h1 className="mt-8 text-3xl font-bold">Categories</h1>

      <div className="mt-4 grid grid-cols-3 grid-rows-3 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            imgURL={category.imgURL}
            itemCount={category._count.products}
            slug={category.id}
          />
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Categories;

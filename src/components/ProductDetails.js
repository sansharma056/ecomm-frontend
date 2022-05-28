import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { handleQuantityChange } from "../utils/cart";
import { useParams } from "react-router-dom";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import { AuthContext } from "../contexts/authContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState(null);
  const API_URL = process.env.API_URL;
  const params = useParams();
  const authState = useContext(AuthContext);

  async function handleAddToCart() {
    try {
      const res = await axios.post(
        `${API_URL}/cart/add-item`,
        {
          quantity,
          productId: Number(params.id),
        },
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        toast("Added item to cart", {
          type: "success",
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/product/${params.id}`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        setProductDetails(res.data.product.details);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }, [params.id]);

  return !loading ? (
    <div className="mt-4 flex flex-col md:flex-row">
      <div className="h-120 bg-gray-100 md:w-1/2">
        <div className="flex flex-1 items-center justify-center">
          <img
            className="h-1/2"
            src={productDetails.imageURL}
            alt={`${productDetails.name}'s image`}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:px-8">
        <h1 className="leading-large text-5xl">{productDetails.name}</h1>
        <h2 className="my-8 text-2xl tracking-wide">
          ₹ {new Intl.NumberFormat("en-IN").format(productDetails.price)}
        </h2>
        <p className="leading-7 text-gray-600">{productDetails.description}</p>
        <div className="my-6">
          <div className="flex items-center">
            <div className="px-2 text-xs">QUANTITY</div>
            <button
              onClick={() =>
                handleQuantityChange(
                  "-",
                  productDetails.purchaseLimit,
                  quantity,
                  setQuantity
                )
              }
              className="pb-.5 h-10 w-10 cursor-pointer border text-center  text-xl hover:bg-indigo-500 hover:text-white focus:outline-none md:h-8 md:w-8 md:text-sm "
            >
              -
            </button>
            <p className="m-0 h-10 w-10 border-t border-b pt-2 text-center text-base md:h-8 md:w-8 md:pt-2 md:text-xs">
              {quantity}
            </p>
            <button
              onClick={() =>
                handleQuantityChange(
                  "+",
                  productDetails.purchaseLimit,
                  quantity,
                  setQuantity
                )
              }
              className=" pb-.5 h-10 w-10 cursor-pointer border text-center text-2xl hover:bg-indigo-500 hover:text-white focus:outline-none md:h-8 md:w-8 md:text-sm "
            >
              +
            </button>
            <button
              onClick={handleAddToCart}
              className="ml-2 w-full border-2 border-black py-4 px-12 text-sm font-bold font-semibold tracking-wider  hover:border-transparent hover:bg-indigo-500 hover:text-white"
            >
              <div>Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductDetails;

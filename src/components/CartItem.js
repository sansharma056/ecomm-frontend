import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import { handleQuantityChange } from "../utils/cart";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import { AuthContext } from "../contexts/authContext";
import Loading from "./Loading";

const CartItem = ({ productId, initialQuantity, cart, onDelete }) => {
  const API_URL = process.env.API_URL;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(initialQuantity);
  const authState = useContext(AuthContext);

  async function handleRemoveFromCart() {
    try {
      onDelete([...cart.filter((item) => item !== productId)]);

      await axios.delete(`${API_URL}/cart/remove-item`, {
        ...getAxiosConfig(authState.token),
        data: { productId },
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(async () => {
    setLoading(true);

    try {
      const res = await axios(
        `${API_URL}/product/${productId}`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        setProduct(res.data.product);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }, []);

  return !loading ? (
    <div className=" flex w-full items-center border-b py-4">
      <Link to={`../product/${productId}`}>
        <img
          className="w-32"
          src={product.details.imageURL}
          alt={`${product.details.name}'s image`}
        />
      </Link>
      <Link to={`../product/${productId}`}>
        <p className="ml-10 w-96">{product.details.name}</p>
      </Link>
      <div className="ml-16">
        <div className="flex items-center">
          <button
            onClick={() =>
              handleQuantityChange(
                "-",
                product.details.purchaseLimit,
                quantity,
                setQuantity
              )
            }
            className=" pb-.5 h-10 w-10 cursor-pointer border text-center  text-xl hover:bg-gray-900 hover:text-white focus:outline-none md:h-8 md:w-8 md:text-sm "
          >
            -
          </button>
          <p className=" m-0 h-10 w-10 border-t border-b pt-2 text-center text-base md:h-8 md:w-8 md:pt-2 md:text-xs">
            {quantity}
          </p>
          <button
            onClick={() =>
              handleQuantityChange(
                "+",
                product.details.purchaseLimit,
                quantity,
                setQuantity
              )
            }
            className=" pb-.5 h-10 w-10 cursor-pointer border text-center text-2xl hover:bg-gray-900 hover:text-white focus:outline-none md:h-8 md:w-8 md:text-sm "
          >
            +
          </button>
        </div>
      </div>
      <div className="ml-auto flex items-center">
        <p className="mr-4">
          ₹ {new Intl.NumberFormat("en-IN").format(product.details.price)}
        </p>
        <Link to="remove-item">
          <XIcon
            className="h-5 w-5"
            onClick={(event) => {
              event.preventDefault();
              handleRemoveFromCart();
            }}
          />
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default CartItem;

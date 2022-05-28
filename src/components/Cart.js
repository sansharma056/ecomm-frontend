import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import Loading from "./Loading";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import { AuthContext } from "../contexts/authContext";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const API_URL = process.env.API_URL;
  const authState = useContext(AuthContext);

  useEffect(async () => {
    try {
      const res = await axios(
        `${API_URL}/cart`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        setCart(res.data.items);
        setTotal(
          res.data.items.reduce(
            (prev, cur) => prev + cur.quantity * cur.product.details.price,
            0
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [cart]);

  return cart ? (
    <>
      <h1 className="mt-8 text-3xl font-bold">Cart</h1>
      <div className="mt-4 flex flex-col">
        {cart.length === 0 ? (
          <p>
            Your don&apos;t have any items in your cart. Look at some{" "}
            <Link className="underline" to="../products">
              products
            </Link>
            .
          </p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.productId}
              productId={item.productId}
              initialQuantity={item.quantity}
              cart={cart}
              onDelete={setCart}
            />
          ))
        )}
      </div>
      {cart.length > 0 ? (
        <>
          <div className="flex items-center justify-end p-4">
            <div className="flex justify-center">
              <p>Total</p>
              <p className="ml-10 font-bold">
                ₹ {new Intl.NumberFormat("en-IN").format(total)}
              </p>
            </div>
          </div>
          <Link className="flex items-center" to="../checkout">
            Checkout
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </>
      ) : null}
    </>
  ) : (
    <Loading />
  );
};

export default Cart;

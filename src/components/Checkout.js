import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import { AuthContext } from "../contexts/authContext";
import Loading from "./Loading";

const Checkout = () => {
  const API_URL = process.env.API_URL;

  const authState = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function handleSumbit() {
    setLoading(true);

    setLoading(false);
  }

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios(
        `${API_URL}/cart`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
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
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <h1 className="mt-8 text-3xl font-bold">Checkout</h1>
      <Link className="mt-4 flex items-center" to="../cart">
        <ArrowLeftIcon className="mr-2 h-5 w-5" /> Edit Cart
      </Link>

      <div className="mt-8 flex justify-between border-t py-8">
        <div className="mr-4">
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Cardholder name"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Card Number"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Street"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="City"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="State"
          />
          <input
            type="text"
            className="focus:shadow-outline mt-2 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Pin Code"
          />
        </div>
        <div className="w-96">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ {total}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p>Shipping</p>
            <p>FREE SHIPPING</p>
          </div>
          <div className="mt-2 flex justify-between bg-gray-200 p-2">
            <p>Total</p>
            <p className="font-semibold">₹ {total}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex max-w-fit items-center">
        <input
          type="submit"
          onClick={handleSumbit}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          value="Order"
        />
        {loading ? <RefreshIcon className="ml-2 h-5 w-5 animate-spin" /> : null}
      </div>
    </>
  );
};

export default Checkout;

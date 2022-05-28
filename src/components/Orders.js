import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import Loading from "./Loading";
import OrderCard from "./OrderCard";

const Orders = () => {
  const API_URL = process.env.API_URL;

  const authState = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios(
        `${API_URL}/order`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        setOrders(res.data.orders);
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
      <h1 className="mt-8 text-3xl font-bold">Orders</h1>
      <div className="mt-4 flex flex-col items-center space-y-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            purchasedAt={order.purchasedAt}
            orderLines={order.orderLines}
            orderStatus={order.orderStatus}
            address={order.address}
          />
        ))}
      </div>
    </>
  );
};

export default Orders;

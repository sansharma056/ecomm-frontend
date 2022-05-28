import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CashIcon,
  HomeIcon,
  LogoutIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Home = () => {
  const authState = useContext(AuthContext);
  if (!authState.token) {
    return <Navigate to="/login" />;
  }

  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />

      <nav className="mt-10 flex p-2">
        <Link to="/" className="mr-8">
          <div className="flex items-center">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </div>
        </Link>
        <Link to="/products" className="mr-8">
          <div className="flex items-center">
            <ShoppingBagIcon className="mr-2 h-5 w-5" />
            Products
          </div>
        </Link>
        <Link to="/orders" className="mr-8">
          <div className="flex items-center">
            <CashIcon className="mr-2 h-5 w-5" />
            Orders
          </div>
        </Link>
        <Link to="/account" className="mr-8">
          <div className="flex items-center">
            <UserIcon className="mr-2 h-5 w-5" />
            Account
          </div>
        </Link>
        <Link to="cart">
          <div className="flex items-center">
            <ShoppingCartIcon className="mr-2 h-5 w-5" />
            Cart
          </div>
        </Link>
        <Link
          to="/signout"
          className="ml-auto"
          onClick={(event) => {
            event.preventDefault();
            authState.signout();
            navigate("login");
          }}
        >
          <div className="flex items-center">
            <LogoutIcon className="mr-2 h-5 w-5" />
            Sign Out
          </div>
        </Link>
      </nav>

      <div className="flex grow flex-col">
        <Outlet />
      </div>

      <div className="mt-8 flex shrink justify-center p-8">
        Copyright © 2022 Canteen Stores Departments. All rights reserved.
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

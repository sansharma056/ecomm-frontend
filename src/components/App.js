import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Cart from "./Cart";
import Categories from "./Categories";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Register from "./Register";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function signin(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function signout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, signin, signout }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Categories />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

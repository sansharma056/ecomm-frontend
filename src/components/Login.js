import { RefreshIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Header from "./Header";

const Login = () => {
  const API_URL = process.env.API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const authState = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(API_URL + "/signin", {
        name: username,
        password,
      });

      authState.signin(res.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
        setUsername("");
        setPassword("");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />

      <div className="h-100 mx-auto mt-40 grow">
        <form className="h-2/6 max-w-md rounded-lg border p-4 shadow-md">
          <h2 className="text-xl font-bold">Sign in to your account</h2>

          {errorMessage.length > 0 ? (
            <div
              className="border-1 mt-2 cursor-pointer rounded-md border-red-500 bg-red-100 p-2"
              onClick={() => setErrorMessage("")}
            >
              {errorMessage}
            </div>
          ) : null}

          <input
            className="relative mt-6 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <input
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <div className="mt-4 flex items-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              value="Sign In"
            />
            {loading ? (
              <RefreshIcon className="ml-2 h-5 w-5 animate-spin" />
            ) : null}
          </div>
          <p className="mt-4 text-sm">
            Not a member? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

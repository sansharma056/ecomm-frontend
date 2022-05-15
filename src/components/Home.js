import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Home = () => {
  const authState = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <h1>Home</h1>;
};

export default Home;

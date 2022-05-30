import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { getAxiosConfig } from "../utils/getAxiosConfig";
import Loading from "./Loading";

const Account = () => {
  const API_URL = process.env.API_URL;
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const authState = useContext(AuthContext);

  function formatDate(str) {
    return new Date(str).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  useEffect(async () => {
    setLoading(true);

    try {
      const res = await axios(
        `${API_URL}/user/me`,
        getAxiosConfig(authState.token)
      );

      if (res.status === 200) {
        console.log(res.data.user);
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, []);
  return isLoading ? (
    Loading
  ) : (
    <>
      <h1 className="mt-8 text-3xl font-bold">Account</h1>
      <div className="mt-4 flex flex-col space-y-4">
        <div className="w-64  border p-4">
          <div>
            <h3 className="font-semibold">Name</h3>
            <p>
              {user.details.firstName} {user.details.lastName}
            </p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Date of Birth</h3>
            <p>{formatDate(user.details.dateOfBirth)}</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Email</h3>
            <p>{user.details.email}</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Mobile Number</h3>
            <p>{user.details.mobileNumber}</p>
          </div>
        </div>

        <div className="w-64 border p-4">
          <div>
            <h3 className="font-semibold">Date of Enrollment</h3>
            <p>{formatDate(user.details.dateOfEnrollment)}</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Employment Status</h3>
            <p>{user.details.employmentStatus}</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Entitlement Category</h3>
            <p className="capitalize">
              {user.details.entitlementCategory.toLowerCase()}
            </p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Organization</h3>
            <p className="capitalize">
              {user.details.organization.replace("_", " ").toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

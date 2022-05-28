import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const API_URL = process.env.API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfEnrollment, setDateOfEnrollment] = useState("");
  const [ppoNumber, setPpoNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, SetMobileNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [entitlementCategory, setEntitlementCategory] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/signup`, {
        name: username,
        password,
        details: {
          firstName,
          lastName,
          dateOfBirth: new Date(dateOfBirth).toISOString(),
          dateOfEnrollment: new Date(dateOfEnrollment).toISOString(),
          ppoNumber,
          panNumber,
          email,
          mobileNumber,
          organization,
          employmentStatus: employmentStatus,
          entitlementCategory: entitlementCategory,
        },
      });

      if (res.status === 200) {
        navigate("../login");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />

      <div className="h-100 mx-auto mt-8 grow">
        <form className="mt-8 flex h-2/6 flex-col rounded-lg border p-4 shadow-md ">
          <h2 className="text-xl font-bold">Register</h2>
          <p className="mt-2 text-xs font-semibold tracking-wide text-red-600">
            Canteen card holders are requested not to use service number /
            service particulars like rank etc while filling up the Sign up
            request and check out forms. Your login/AFD Demand will be
            rejected/cancelled if service particulars are used.
          </p>

          <div className="mt-8 flex">
            <label className=" mr-2 flex flex-1 items-center">
              <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Username
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ml-2 w-full w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>
            <label className="ml-8 mr-2 flex flex-1 items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                First Name
              </span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>
            <label className="ml-8 flex flex-1 items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Last Name
              </span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>
          </div>

          <div className="mt-8 flex items-center">
            <label className="flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Mobile Number
              </span>
              <input
                type="text"
                name="cardId"
                value={mobileNumber}
                onChange={(e) => SetMobileNumber(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="(10 digit Numeric)"
              />
            </label>

            <label className="ml-4 block flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Pan No.
              </span>
              <input
                type="text"
                name="cardId"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500  sm:text-sm"
              />
            </label>
          </div>

          <div className="mt-8 flex">
            <label className="flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Employement Status
              </span>

              <select
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value="SERVICEMEN">Servicemen</option>
                <option value="ESM">ESM</option>
                <option value="SERVING_DEFENCE_CIVILIANS">
                  Serving Defence Civilians
                </option>
                <option value="ON_DEPUTATION">On Deputation</option>
              </select>
            </label>

            <label className="ml-4 flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Organization
              </span>

              <select
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3  py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value="ARMY">Army</option>
                <option value="AIR_FORCE">Air Force</option>
                <option value="NAVY">Navy</option>
                <option value="COAST_GUARD">Coast Guard</option>
                <option value="GREF">GREF</option>
                <option value="OTHER_UNIFORMED_ORGS">
                  Other Uniformed Organisations
                </option>
                <option value="DEFENCE_CIVILIANS">Defence Civilians</option>
              </select>
            </label>
          </div>

          <div className="mt-8 flex items-center">
            <label className="flex grow items-center">
              <span className="mr-4 min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Date of Birth
              </span>

              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>

            <label className="ml-4 flex grow items-center">
              <span className="mr-4 min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Date of Enrollment
              </span>
              <input
                type="date"
                value={dateOfEnrollment}
                onChange={(e) => setDateOfEnrollment(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>
          </div>

          <div className="mt-8 flex items-center">
            <label className="flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>

            <label className="ml-4 flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>
          </div>

          <div className="mt-8 flex items-center">
            <label className="flex grow items-center">
              <span className="min-w-fit text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                PPO/Discharge No.(ESM)
              </span>
              <input
                type="number"
                name="cardId"
                value={ppoNumber}
                onChange={(e) => setPpoNumber(e.target.value)}
                className="ml-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </label>

            <label className="ml-4 flex grow items-center">
              <span className="min-w-fit  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Entitlement Category
              </span>

              <select
                value={entitlementCategory}
                onChange={(e) => setEntitlementCategory(e.target.value)}
                className=" ml-2 w-full rounded-md border border-slate-300 bg-white px-3  py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm "
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value="OFFICERS">Officers (Pay level 10-18)</option>
                <option value="JCO">JCO (Pay level 7-9)</option>
                <option value="OR">OR (Pay level 3A-6)</option>
              </select>
            </label>
          </div>

          <div className="mt-8 flex items-center"></div>

          <input
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="group relative mt-8 flex w-32 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            value="Sign up"
          />

          <p className="mt-4 text-sm">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

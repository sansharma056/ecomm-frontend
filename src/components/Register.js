const Register = () => {
  return (
    <div className="flex min-h-screen content-center justify-center self-center">
      <div className="w-8/12 max-w-3xl rounded-lg border p-4 shadow-md">
        <div className="mx-auto bg-gray-100">
          <h2 className="text-center text-xl">Register</h2>
        </div>
        <div className="mt-6 bg-gray-100 text-center">
          <p className=" text-xs  text-red-600	">
            Canteen card holders are requested not to use service number /
            service particulars like rank etc while filling up the Sign up
            request and check out forms. Your login/AFD Demand will be
            rejected/cancelled if service particulars are used.
          </p>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Name
            </span>
            <input
              type="number"
              name="name"
              placeholder="(Only alphabets allowed)"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label class="block">
            <span class="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Card Id
            </span>
            <input
              type="number"
              name="cardId"
              class="mt-1 mb-2   ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="(19 digit Alphanumeric)"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Chip number on bill
            </span>
            <input
              type="number"
              name="cardId"
              class="mt-1 mb-2  ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="(16 digit Numeric)"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Mobile Number
            </span>
            <input
              type="number"
              name="cardId"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="(10 digit Numeric)"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Employement Status
            </span>

            <select className="mt-1 ml-4 mb-2 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm ">
              <option value="Select">Select</option>
              <option value="Servicemen">Servicemen</option>
              <option value="ESM">ESM</option>
              <option value="ESM">Serving Defence Civilians</option>
              <option value="ESM">On Deputation</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Organization
            </span>

            <select className="mt-1 ml-4 mb-2 w-1/2 rounded-md border border-slate-300 bg-white px-3  py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm ">
              <option value="Select">Select</option>
              <option value="Servicemen">Army</option>
              <option value="ESM">Airforce</option>
              <option value="ESM">Navy</option>
              <option value="ESM">Coast Guard</option>
              <option value="ESM">Defence Civilians</option>
            </select>
          </label>

          <label className="block">
            <span className="mr-4 text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Date of Birth
            </span>

            <input
              type="date"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="mr-4 text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Date of Enrollment/Commissioning
            </span>
            <input
              type="date"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="mr-4 text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Date of retirement{" "}
            </span>
            <input
              type="date"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="mr-4 text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Entitlement Category
            </span>

            <select className="mt-1 ml-4 mb-2 w-1/2 rounded-md border border-slate-300 bg-white px-3  py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm ">
              <option value="">Select</option>
              <option value="Select">Officers (Pay level 10-18)</option>
              <option value="Servicemen">JCO (Pay level 7-9)</option>
              <option value="ESM">OR (Pay level 3A-6)</option>
            </select>
          </label>

          <label class="block">
            <span class="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              PPO/Discharge No.(ESM)
            </span>
            <input
              type="number"
              name="cardId"
              class="mt-1 mb-2   ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label class="block">
            <span class="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Pan No.
            </span>
            <input
              type="number"
              name="cardId"
              class="mt-1 mb-2   ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500  sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Username
            </span>
            <input
              type="namae"
              name="usernamae"
              placeholder=""
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Email
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Confirm Email
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Password
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Confirm Password
            </span>
            <input
              type="password"
              name="password"
              class="mt-1 mb-2 ml-4 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </label>

          <label className="block">
            <button>Submit</button>
          </label>

          <div />
        </div>
      </div>
    </div>
  );
};

export default Register;

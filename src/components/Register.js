const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-8/12 max-w-3xl rounded-lg border p-4 shadow-md">
        <h2 className="text-xl">Signup</h2>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </div>
    </div>
  );
};

export default Register;

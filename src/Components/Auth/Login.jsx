import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    // It will reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20  ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" text-white  outline-none  bg-tranparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            placeholder="Enter Your email"
          />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-4  text-white outline-none  bg-tranparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            placeholder="Enter Your password"
          />
          <button className=" text-white border-none outline-none  bg-emerald-600 py-3 px-25 mt-7 text-xl rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

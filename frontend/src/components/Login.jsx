import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log("data", data);
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div
        className="max-w-sm border shadow bg-white mx-auto p-8"
        style={{
          padding: "15px",
          border: "none",
        }}
      >
        <h2
          className="text-2xl font-semibold pt-5"
          style={{
            paddingTop: "10px",
          }}
        >
          Please Login
        </h2>

        <form
          onSubmit={handleLogin}
          className=" flex flex-col space-y-5 gap-5 max-w-sm mx-auto pt-8"
        >
          <input
            type="text "
            name="email"
            id="email"
            placeholder="Email Address "
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            style={{
              padding: "10px 7px",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password "
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            style={{
              padding: "10px 7px",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />

          {message && <p className="text-red-500">{message}</p>}
          <button
            type="submit"
            className="w-full mt-5 bg-red-400 text-white
             hover:bg-indigo-500 font-medium rounded-md"
            style={{
              padding: "7px",
            }}
          >
            Login
          </button>
        </form>
        <p
          className="my-5 italic text-sm text-center"
          style={{
            marginTop: "7px",
          }}
        >
          Don't have an account yet{" "}
          <Link
            to={"/register"}
            className="text-red-700 px-1 underline"
            style={{
              textDecoration: "underline",
            }}
          >
            Register{" "}
          </Link>{" "}
          here.
        </p>
      </div>
    </section>
  );
};

export default Login;

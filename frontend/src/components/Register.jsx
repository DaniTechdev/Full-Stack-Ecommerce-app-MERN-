import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const naavigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    try {
      await registerUser(data).unwrap();

      alert("Registeration successfulyy");
      naavigate("/login");
    } catch (error) {
      setMessage("Registeration failed");
    }
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
          Please Register
        </h2>

        <form
          onSubmit={handleRegister}
          className=" flex flex-col space-y-5 gap-5 max-w-sm mx-auto pt-8"
        >
          <input
            type="text "
            name="username"
            id="username"
            placeholder="Username "
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            style={{
              padding: "10px 7px",
            }}
            onChange={(e) => setUsername(e.target.value)}
          />

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
            Register
          </button>
        </form>
        <p
          className="my-5 italic text-sm text-center"
          style={{
            marginTop: "7px",
          }}
        >
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-red-700 px-1 underline"
            style={{
              textDecoration: "underline",
            }}
          >
            Please login{" "}
          </Link>{" "}
          here.
        </p>
      </div>
    </section>
  );
};

export default Register;

// src/Signup.js
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSignup } from "../hooks/useSignup";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signup, isLoading, error } = useSignup();
  const validationSchema = object().shape({
    username: string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: string()
      .required("Email is required")
      .email("Invalid email address"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const handleCloseModal = () => {
    navigate(location.state?.from || "/");
  };
  const onSubmit = async (data) => {
    const { username, email, password } = data;
    await signup(username, email, password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="relative max-w-2xl p-10 h-[670px] rounded-3xl bg-lightbrown">
        <h1 className="text-2xl font-bold text-center text-green">
          Create an Account
        </h1>
        <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 w-[425px]">
            <label className="block text-sm text-gray">Username</label>
            <input
              id="username"
              type="text"
              className={`w-full p-3 mt-2 border border-[#DADADA] rounded focus:outline-none placeholder-green ${
                errors.username && "border-red-600 border-2"
              }`}
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-xs italic text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block text-sm text-gray">Email address</label>
            <input
              id="email"
              type="email"
              className={`w-full p-3 mt-2 border-[#DADADA] border-2 focus:outline-none rounded placeholder-green ${
                errors.email && "border-red-600 "
              }`}
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500">
                {errors.email.message}
              </p>
            )}
            {error && <div>{error}</div>}
          </div>
          <div className="mb-5">
            <label className="block text-sm text-gray" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`w-full p-3 mt-2 border-[#DADADA] focus:outline-none border-2 rounded placeholder-green ${
                errors.password && "border-red-600 "
              }`}
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs italic text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-3 mt-4 text-white rounded cursor-pointer bg-green ${
              isLoading && "bg-slate-600"
            }`}
          >
            Sign Up
          </button>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray after:border-t after:flex-1 after:border-gray">
            <p className="mx-3 text-center">Or</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full gap-3 p-3 mt-4 bg-white rounded"
          >
            <FcGoogle /> Continue with Google
          </button>
          <p className="mt-4 text-center text-gray">
            Already have an account?{" "}
            <span className="cursor-pointer text-green">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <button
            type="button"
            className="absolute text-2xl text-green right-4 top-4"
            onClick={handleCloseModal}
          >
            <IoMdCloseCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

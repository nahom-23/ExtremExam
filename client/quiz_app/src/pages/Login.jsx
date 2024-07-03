// src/Login.js
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  const validationSchema = object().shape({
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
    const { email, password } = data;
    await login(email, password);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="relative max-w-2xl p-10 rounded-3xl bg-lightbrown">
          <h1 className="text-2xl font-bold text-center text-green">
            Login to your Account
          </h1>
          <p className="mb-2 text-center text-green">
            with your registered Email Address
          </p>
          <form className="my-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 w-[425px]">
              <label className="block text-sm text-gray">Email address</label>
              <input
                type="email"
                className={`w-full p-3 mt-2  focus:outline-none border-2 border-[#DADADA] rounded placeholder-green ${
                  errors.email && "border-red-600"
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
              <label className="block text-sm text-gray">Enter password</label>
              <input
                type="password"
                className={`w-full p-3 my-2  focus:outline-none border-2 border-[#DADADA] rounded placeholder-green ${
                  errors.password && "border-red-600"
                }`}
                placeholder="Enter password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500">
                  {errors.password.message}
                </p>
              )}
              <button
                disabled={isLoading}
                type="submit"
                className={`w-full p-3 mt-4 text-white rounded cursor-pointer bg-green ${
                  isLoading && "bg-slate-600"
                }`}
              >
                Login
              </button>
              <p className="mt-2 text-gray">Forgot password?</p>
              <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray after:border-t after:flex-1 after:border-gray">
                <p className="mx-3 text-center">Or</p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-3 p-3 mt-4 bg-white rounded"
              >
                <FcGoogle /> Continue with Google
              </button>
              <p className="mt-4 text-center text-gray">
                Don't have an account?{" "}
                <span className="cursor-pointer text-green">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
              <button
                type="button"
                className="absolute text-2xl text-green right-4 top-4"
                onClick={handleCloseModal}
              >
                <IoMdCloseCircle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const loginInfo = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-4xl text-green-500">Welcome To Offer.com</h1>
        <form
          onSubmit={handleSubmit(loginInfo)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div>
              <h1 className="text-2xl text-slate-700 font-semibold mb-4">
                Login
              </h1>
              <h2>
                New to Org Offer?{" "}
                <Link to="/register" className="underline text-blue-700">
                  Create Account
                </Link>
              </h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

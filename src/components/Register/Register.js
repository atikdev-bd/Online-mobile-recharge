import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

    const registerInfo = (data) => {
      console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-4xl text-green-500">Welcome To Offer.com</h1>
        <form
          onSubmit={handleSubmit(registerInfo)}
          className="card flex-shrink-0 shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div>
              <h1 className="text-2xl text-slate-700 font-semibold mb-4">
                Register
              </h1>
              <h2>
                Have an Account?{" "}
                <Link to="/login" className="underline text-blue-700">
                  Login Now
                </Link>
              </h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Full name"
                className="input input-bordered rounded-sm"
              />
            </div>
            <div className="lg:flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered rounded-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile</span>
                </label>
                <input
                  {...register("mobile")}
                  name="mobile"
                  type="number"
                  placeholder="Mobile"
                  className="input input-bordered rounded-sm"
                />
              </div>
            </div>
            <div className="lg:flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered rounded-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input
                  {...register("pin")}
                  name="pin"
                  type="number"
                  placeholder="Pin"
                  className="input input-bordered rounded-sm"
                />
              </div>
            </div>
            <div className="form-control w-full lg:w-6/12">
              <label className="label">
                <span className="label-text text-green-500 font-medium">
                  Select account type
                </span>
              </label>
              <select
                {...register("users")}
                className="select select-bordered rounded-sm w-full max-w-xs"
              >
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <h2 className="mt-10">Terms and Condition</h2>

            <div className="flex gap-1">
              <h2>
                <input type="checkbox" className="checkbox checkbox-sm mt-1" />
              </h2>
              <h2>
                I agree to workupjobs{" "}
                <span className="text-indigo-600">Terms of Service</span> and{" "}
                <span className="text-indigo-600">Privacy Policy.</span>
              </h2>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-4xl text-green-500">Welcome To Offer.com</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <h1 className="text-2xl text-slate-700 font-semibold mb-4">
                Register
              </h1>
              <h2>
                Have an Account?{" "}
                <Link to="/login" className="underline text-blue-700">
                  Login here
                </Link>
              </h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered rounded-sm"
              />
            </div>
            <div className="lg:flex gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  type="text"
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
                  type="text"
                  placeholder="Password"
                  className="input input-bordered rounded-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input
                  type="text"
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
              <select className="select select-bordered rounded-sm w-full max-w-xs">
                <option>Personal</option>
                <option>Business</option>
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
        </div>
      </div>
    </div>
  );
};

export default Register;

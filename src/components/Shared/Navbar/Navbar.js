import React, { useContext } from "react";
import { Link } from "react-router-dom";
import simIcon from "../../../Assets/titleIcon/icons8-sim-card-64.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import profileIcon from "../../../Assets/otherIcon/icons8-male-user-50.png";
import Header from "../../Header/Header";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-base-300 flex justify-between">
        <img src={simIcon} alt="" />
        <a className="btn btn-ghost normal-case text-xl">Offer.com</a>
        <div className="flex-1 hidden lg:block">
          <div className="flex gap-5 ml-10">
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="login">Login</Link>
            </div>
            <div>
              <Link to="register">Register</Link>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full fixed">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="user-photo" />
                ) : (
                  <img src={profileIcon} alt="user-icon" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>

              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;

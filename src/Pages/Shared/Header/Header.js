import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  // Log out handle
  const handleLogOut = () => {
    LogOut().then().catch();
  };

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/myReview">My reviews</Link>
                  </li>
                  <li>
                    <Link to="/addService">Add service</Link>
                  </li>
                  <li>
                    <Link>
                      <button onClick={handleLogOut}>LogOut</button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img className="w-10 h-10 md:ml-12" src={logo} alt="" />
          <Link className="btn btn-ghost normal-case text-xl">
            Improve Your Knowledge
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 md:mr-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/myReview">My reviews</Link>
                </li>
                <li>
                  <Link to="/addService">Add service</Link>
                </li>
                <li>
                  <Link>
                    <button onClick={handleLogOut}>LogOut</button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

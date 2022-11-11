import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/images/ITHelp.png'
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const { CreateUserWithEmailAndPassword } = useContext(AuthContext);
  // Dynamic Register
  useTitle('Register')

  // For Register handler
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const date = form.date.value;
    console.log(fullName, email, password, date);
    CreateUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-28 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img className="h-screen w-full" src={img} alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-3xl font-bold title-font mb-5 text-center">
              Register as a Volunteer
            </h2>
            <form onSubmit={handleSignUp} action="">
              <div className="relative mb-4">
                <label className="leading-7 text-md font-bold text-gray-600">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  type="text"
                  id="full-name"
                  name="fullName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-md font-bold text-gray-600">
                  Username or Email
                </label>
                <input
                  placeholder="Enter your name or Email"
                  type="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-md font-bold text-gray-600">
                  Password
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-md font-bold text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 w-full hover:scale-105 duration-300">
                Register
              </button>
            </form>
            <div className="mt-3 flex justify-between items-center font-bold text-xl text-[#1169ec]">
              <p>have an account?</p>
              <Link to="/login">
                <button className="py-2 px-10 bg-green-400 border rounded-xl hover:scale-110 duration-300 text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

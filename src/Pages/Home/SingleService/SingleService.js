import React from "react";
import { FaMoneyCheckAlt, FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const SingleService = ({ service }) => {
  // console.log(service)
  const { _id, title, image, rating, price, description } = service;

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {/* React - Photo - Viewer */}
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              className="lg:h-48 md:h-full w-full object-cover object-center"
              src={image}
              style={{ backgroundColor: "red" }}
              alt="blog"
            />
          </PhotoView>
        </PhotoProvider>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">
            {description.length >= 250 ? (
              <>{description.slice(0, 250)}...</>
            ) : (
              <>{description}</>
            )}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/service/${_id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              <button className="btn btn-accent">
                View Details
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              ></svg>
              <FaStar className="w-5 h-5 text-yellow-400" /> <span className="ml-2">{rating}</span>
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              ></svg>
              <FaMoneyCheckAlt /> <span className="ml-2">${price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Home Services API
  useEffect(() => {
    fetch("https://improve-your-knowledge-server-site.vercel.app/homeServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
        // console.log(data);
      });
  }, [loading]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-16">
          <h1 className="sm:text-xl text-2xl font-medium title-font text-gray-900 mb-4">
            My Services
          </h1>
          <p className="text-5xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            What I Do?
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <SingleService
              service={service}
              key={service._id}
            ></SingleService>
          ))}
          <Link className="mx-auto" to="/services">
            <button className="mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;

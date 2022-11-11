import { FaMoneyCheckAlt, FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ReviewSecton from "../../MyReview/ReviewSecton";

const DetailService = () => {
  const service = useLoaderData();
  // Dynamic Title
  useTitle('Service')
  
  // console.log(service);
  const { title, description, image, price, rating } = service;


  return (
    <div className="mt-20 mb-10">
      <section className="text-gray-600 body-font bg-slate-300">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Click Photo Full Viewer */}
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                className="lg:h-48 md:h-full w-96 object-cover object-center"
                src={image}
                style={{ backgroundColor: "red" }}
                alt="blog"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed">{description}</p>
            <div>
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
                <FaStar className="w-5 h-5 text-yellow-400" />{" "}
                <span className="ml-2">{rating}</span>
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
      </section>
      <div>
        <div>
          <ReviewSecton></ReviewSecton>
        </div>
      </div>
    </div>
  );
};

export default DetailService;

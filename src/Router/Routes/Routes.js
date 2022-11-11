import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ReviewSecton from "../../Pages/MyReview/ReviewSecton";
import Services from "../../Pages/Services/Services";
import DetailService from "../../Pages/Shared/DetailService/DetailService";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "service/:id",
        element: <DetailService></DetailService>,
        loader: ({ params }) => fetch(`https://improve-your-knowledge-server-site.vercel.app/service/${params.id}`)
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>
      },
      {
        path: "reviewSesction/:id",
        element: <ReviewSecton></ReviewSecton>,
        loader: ({ params }) => fetch(`https://improve-your-knowledge-server-site.vercel.app/service/${params.id}`)
      },
      {
        path: "checkOut/:id",
        element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
        loader: ({ params }) => fetch(`https://improve-your-knowledge-server-site.vercel.app/service/${params.id}`)
      },
      {
        path: "/addService",
        element: <PrivateRouter><AddService></AddService></PrivateRouter>
      },
    ],
  },
]);
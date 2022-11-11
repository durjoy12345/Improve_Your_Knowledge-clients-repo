import React from "react";
import { Link } from "react-router-dom";
import banner from '../../../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-slate-500 mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="md:w-2/5 w-full h-screen rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-full">
          <h1 className="text-5xl font-extrabold">Develop Your Skill!</h1>
          <p className="py-6 text-3xl font-semibold">
            If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.
          </p>
          <p className="text-xl pb-10 font-semibold">Knowledge is food for thought, and while food is perishable, thoughts persist. Teachers feed the whole world, many times over.</p>
          <p className="text-xl font-bold text-center mb-5"> - Chinese Proverb</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

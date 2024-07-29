import React from "react";
import { GiOnTarget } from "react-icons/gi";
import { FaPersonBooth } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

const Aboutevision = () => {
  return (
    <>
      <div className="bg-blue-100 flex items-center justify-center flex-col my-2">
        <h1 className="text-4xl font-bold blue-600 my-4">About Us</h1>
        <h1 className="text-2xl font-gilroy">
          We bring the right people together to challenge established thinking
          and
        </h1>
        <h1 className="text-2xl font-gilroy">drive transformation.</h1>
     
      <div className="flex gap-10 items-flex justify-center">
        <div className="border-2 border-black hover:border-blue-800 h-60 w-72 rounded-md my-4">
          <h1 className="text-6xl font-bold text-blue-400">
            <GiOnTarget />
          </h1>
          <h1 className="text-2xl font-bold relative bottom-8 left-16">
            Our Mission
          </h1>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl  ">
              We align agency owners with candidates to streamline recuritment
              process.
            </h1>
            <button className="text-white px-16 py-4 rounded-full m-2 bg-blue-600">
              Click
            </button>
          </div>
        </div>

        <div className="border-2 border-black hover:border-blue-800  h-60 w-72 rounded-md my-4">
          <h1 className="text-6xl font-bold text-blue-400">
            <FaPersonBooth />
          </h1>
          <h1 className="text-2xl font-bold relative bottom-8 left-16">
            Our Vision
          </h1>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl  ">
              Our cohesive team transforms recruitment for agencies and
              candidates
            </h1>
            <button className="text-white bg-blue-600 px-16 py-4 rounded-full m-2">
              Click
            </button>
          </div>
        </div>

        <div className="border-2 border-black hover:border-blue-800  h-60 w-72 rounded-md my-4">
          <h1 className="text-6xl font-bold text-blue-400">
            <FaMapLocationDot />
          </h1>
          <h1 className="text-2xl font-bold relative bottom-8 left-16">
            Our Client
          </h1>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl  ">
              8+ Countries, where we have clients. Rare welcomes you too.
            </h1>
            <button className="text-white bg-blue-600 px-16 py-4 rounded-full m-2">
              Click
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Aboutevision;
"use client";

import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const FirstPortfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/assets/projects/basic-portfolio.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">My first Portfolio</h2>
          <h3>HTML/CSS </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>project</p>
          <h2>Overview</h2>
          <p>write something here : what i have learn in this project</p>
          <button
            className="px-8 py-2 mt-4 mr-8"
            src="https://github.com/arpantripathi1/movie_streaming_ui/tree/master"
          >
            Demo
          </button>
          <Link
            href={
              "https://github.com/arpantripathi1/movie_streaming_ui/tree/master"
            }
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span1 shadow-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-start">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-start">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-start">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              {/* <p className="text-gray-600 py-2 flex items-start">
                <RiRadioButtonFill className="pr-1" />
                Material UI
              </p> */}
              {/* <p className="text-gray-600 py-2 flex items-start">
                <RiRadioButtonFill className="pr-1" />
                Axios library
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <Link href="/projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default FirstPortfolio;

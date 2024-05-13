import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from 'next/link';

const SubHome = () => {
  return (
    <div id="subHome" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hiii, I Am <span className="text-[#5651e5]">Arpan</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a front end web developer specializing in building (and
            ocassonally designing) exceptional digital experiences. Currently,
            i&apos;m focussed on building responsive front-end web applications
            while learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://www.linkedin.com/in/arpan-tripathi1">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://www.github.com/arpantripathi1">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="contact">
                    <AiOutlineMail />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="/contact">
                  <BsFillPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHome
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav , setNav] = useState(true);
    const [navShadow , setNavShadow] = useState(false); //shadow while scroll

    const handleNavButtonClick =() => {
        setNav(!nav);
    }

    useEffect(()=>{
      const handleShadow = () => {
        if(window.scroll >= 90){
          setNavShadow(true);
        }else{
          setNavShadow(true);
        }
      }
      window.addEventListener('scroll' , handleShadow) ;
    },[])

  return (
    <div
      className={
        navShadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {nav ? (
        <div className="flex justify-between items-center w-full px-2 2xl:px-16">
          <Image
            src="/assets/assets/portfolio.png"
            alt="/"
            width="200"
            height="168"
          />
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">HOME</li>
              </Link>
              <Link href="/about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  ABOUT
                </li>
              </Link>
              <Link href="/skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  SKILLS
                </li>
              </Link>
              <Link href="/projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  PROJECTS
                </li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  CONTACT
                </li>
              </Link>
            </ul>
            <div
              onClick={handleNavButtonClick}
              className="md:hidden cursor-pointer"
            >
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      ) : (
        //    making background black blur when side navbar opens
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          {/* side slide navbar  */}
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700">
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/assets/assets/portfolio.png"
                  alt="/"
                  width="87"
                  height="35"
                />
                <div
                  onClick={handleNavButtonClick}
                  className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <h6 className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build something legendary together
                </h6>
              </div>
              <div className="py-4 flex flex-col">
                <ul>
                  <Link href="/">
                    <li onClick={() => setNav(true)} className="py-4 text-sm">
                      HOME
                    </li>
                  </Link>
                  <Link href="about">
                    <li onClick={() => setNav(true)} className="py-4 text-sm">
                      ABOUT
                    </li>
                  </Link>
                  <Link href="skills">
                    <li onClick={() => setNav(true)} className="py-4 text-sm">
                      SKILLS
                    </li>
                  </Link>
                  <Link href="projects">
                    <li onClick={() => setNav(true)} className="py-4 text-sm">
                      PROJECTS
                    </li>
                  </Link>
                  <Link href="contact">
                    <li onClick={() => setNav(true)} className="py-4 text-sm">
                      CONTACT
                    </li>
                  </Link>
                </ul>
                <div className="pt-20">
                  <p className="uppercase tracking-widest text-[#5615e5]">
                    Let&apos;s connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


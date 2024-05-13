"use client"
import React from 'react'
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from 'next/link';
import { ValidationError, useForm } from '@formspree/react';

const Page = () => {
   const [state, handleSubmit] = useForm("xpzgylrz");

   if (state.succeeded) {
     return <p className='flex justify-center align-center'>Thanks for your submission!</p>;
   }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5615e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left  */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/assets/contact.jpg"
                  alt="/"
                  width="400"
                  height="500"
                />
              </div>
              <div className="py-2">
                <h2>Arpan Tripathi</h2>
                <p>Front End Developer</p>
                <p className="py-4">
                  I am available for freelance or full time positions. contact
                  me & let&apos;s build together
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
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

          {/* right  */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-100 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="username"
                      autoComplete="off"
                      required
                    />
                    <ValidationError
                      prefix="name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone-no"
                      autoComplete="off"
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                    <ValidationError
                      prefix="phone"
                      field="phone"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    name="mail"
                    autoComplete="off"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    autoComplete="off"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                  <ValidationError
                    prefix="subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    autoComplete="off"
                    required
                  />
                  <ValidationError
                    prefix="message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/contact">
            <div className="flex justify-center py-12">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page
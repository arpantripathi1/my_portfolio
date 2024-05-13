// import Image from "next/legacy/image";
// import Image from "next/image";

import Link from "next/link";


export default function About(){
    return (
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1200px] m-auto md:grid grid-cols-3 gap-8 relative mt-5">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              {" "}
              Hello! I&apos;m Arpan, a passionate frontend developer with a love
              for crafting beautiful and functional user interfaces. I thrive on
              turning creative ideas into interactive and engaging web
              experiences.
            </p>
            <h2 className="py-4">Why I Code</h2>
            <p className="py-2 text-gray-600">
              My journey in the world of web development began with a simple
              curiosity. I wanted to understand how the websites I visited every
              day worked. Little did I know that this curiosity would lead me to
              a fulfilling career in frontend development.
            </p>
            <h2 className="py-4">What I Do</h2>
            <p className="py-2 text-gray-600">
              I specialize in bringing designs to life with HTML, CSS, and
              JavaScript. From responsive layouts that look amazing on any
              device to interactive features that captivate users, I&apos;m
              dedicated to building web solutions that not only meet but exceed
              expectations.
            </p>
            <h2 className="py-4">My Approach</h2>
            <p className="py-2 text-gray-600">
              In the fast-paced world of web development, adaptability and
              continuous learning are key. I stay up-to-date with the latest
              trends, tools, and best practices to deliver cutting-edge
              solutions. My code is clean, maintainable, and optimized for
              performance.
            </p>
            <h2 className="py-4">Collaboration Matters</h2>
            <p className="py-2 text-gray-600">
              I believe that great things are achieved through collaboration. I
              enjoy working closely with designers, backend developers, and
              project stakeholders to transform concepts into reality. Effective
              communication and teamwork are at the core of my approach.
            </p>
            <h2 className="py-4">What Drives Me</h2>
            <p className="py-2 text-gray-600">
              {" "}
              What drives me as a developer is the ability to make a positive
              impact on people&apos;s lives through technology. Whether
              it&apos;s creating an intuitive user interface, optimizing website
              speed, or solving a complex problem, I&apos;m fueled by the
              opportunity to make the digital world better, one line of code at
              a time.
            </p>
            <Link href="/projects">
            <p className="py-2 text-gray-600 underline cursor-pointer mb-7 mt-3">
              Check out my some of the projects
            </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center sticky top-20 p-4 hover:scale-105 ease-in duration-300">
            <img
              className="rounded-xl"
              src="/assets/assets/about.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    );
}
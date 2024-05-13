import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-9 pt-9">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-9 pt-9">
          Skills
        </p>
        <h2 className="py-4 mt-8">What I Can Do</h2>
        <h5 className="mt-6">
          I have expertise in front end development,along with that I contain
          all the knowledge of Backend Developer.It means I can work as a
          FullStack Developer
        </h5>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            src="/assets/assets/skills/html.png"
            alt="html"
            skill="HTML"
          />
          <SkillCard
            src="/assets/assets/skills/css.png"
            alt="css"
            skill="CSS"
          />
          <SkillCard
            src="/assets/assets/skills/javascript.png"
            alt="js"
            skill="JAVASCRIPT"
          />
          <SkillCard
            src="/assets/assets/skills/react.png"
            alt="html"
            skill="REACT"
          />
          <SkillCard
            src="/assets/assets/skills/nextjs.png"
            alt="nextjs"
            skill="NEXT"
          />
          <SkillCard
            src="/assets/assets/skills/redux1.png"
            alt="redux"
            skill="Redux"
          />
          <SkillCard
            src="/assets/assets/skills/bootstrap_logo.jpg"
            alt="bootstrap"
            skill="BOOTSTRAP"
          />
          <SkillCard
            src="/assets/assets/skills/tailwind.png"
            alt="tailwind"
            skill="tailwind"
          />
          <SkillCard
            src="/assets/assets/skills/materialUI.png"
            alt="material"
            skill="MaterialUI"
          />
          <SkillCard
            src="/assets/assets/skills/git.png"
            alt="git"
            skill="Git"
          />
          <SkillCard
            src="/assets/assets/skills/github1.png"
            alt="github"
            skill="Github"
          />
          <SkillCard
            src="/assets/assets/skills/node.png"
            alt="nodejs"
            skill="NodeJS"
          />
          <SkillCard
            src="/assets/assets/skills/mongo.png"
            alt="mongo"
            skill="MongoDB"
          />
          <SkillCard
            src="/assets/assets/skills/express1.png"
            alt="express"
            skill="ExpressJS"
          />

          {/* 
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/css.png"
                  alt="css"
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/javascript.png"
                  alt="js"
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/react.png"
                  alt="react"
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/nextjs.png"
                  alt="nextjs"
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/tailwind.png"
                  alt=""
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/bootstrap_logo.jpg"
                  alt=""
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/assets/skills/github1.png"
                  alt=""
                  width="65"
                  height="65"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

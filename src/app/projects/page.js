import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
const page = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            src="/assets/assets/projects/movies_UI.png"
            alt="/"
            projectName="Movies streaming"
            tech="React"
            href="projects/moviestream"
          />
            <ProjectCard
              src="/assets/assets/projects/restaurant.png"
              alt="/"
              projectName="Restaurant"
              tech="HTML CSS"
              href="projects/restaurant"
            />
          <ProjectCard
            src="/assets/assets/projects/tindog.png"
            alt="/"
            projectName="Dog Meet"
            tech="HTML CSS"
            href="projects/dogmeet"
          />
          <ProjectCard
            src="/assets/assets/projects/basic-portfolio.png"
            alt="/"
            projectName="My First Portfolio"
            tech="React"
            href="projects/firstportfolio"
          />
          <ProjectCard
            src="/assets/assets/projects/drum_kit.png"
            alt="/"
            projectName="Drum kit"
            tech="React"
            href="projects/drumkit"
          />
          <ProjectCard
            src="/assets/assets/projects/dice.png"
            alt="/"
            projectName="dice play"
            tech="React"
            href="projects/diceplay"
          />
        </div>
      </div>
    </div>
  );
}

export default page
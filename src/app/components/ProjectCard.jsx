import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({src , alt , projectName , href}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={src}
        alt={alt}
        width="600"
        height="500"
      />
      <div className="hidden group-hover:block absolute top-50% left-50% translate-x-[-50%] translate-y-[-30%]">
        <h3 className="text-2xl p-3 text-white tracking-wider text-center md:text-lg">
          {projectName}
        </h3>
        <Link href={href}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer md:px-2">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard
// src/components/ProjectCard.tsx
import Image from "next/image";
import projects from "../const/projects";

interface ProjectProps {
  id: string;
  techs: string;
  detail: string;
  link: {
    live?: string;
    github?: string;
  };
  hasImage?: boolean;
  isSmall?: boolean;
  image: string | any; // Allow StaticImageData
}

const ProjectCard: React.FC<ProjectProps> = ({
  id,
  techs,
  detail,
  link,
  isSmall,
  hasImage,
  image
}) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="border-[1px] text-[#ABB2BF] hover:scale-105 transition duration-300 ease-out">
        {hasImage && image && (
          <Image
            src={image}
            alt="Project Image"
            className="w-full h-48 sm:h-52 object-cover"
          />
        )}
        <p className="py-2 px-3 border-[1px] border-x-0 text-sm sm:text-base">{techs}</p>
        <div className="px-3 py-3 sm:py-4">
          <h1 className="text-white text-lg sm:text-xl mb-3 font-medium">{id}</h1>
          <p className="text-sm sm:text-base mb-4">{detail}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between">
            {link.live && (
              <button className="px-3 py-1 border-[1px] border-green-400 hover:bg-green-400 hover:text-black transition-colors text-sm">
                <a href={link.live} target="_blank" rel="noopener noreferrer">Live Demo &harr;</a>
              </button>
            )}
            {link.github && (
              <button className="px-3 py-1 border-[1px] border-green-400 hover:bg-green-400 hover:text-black transition-colors text-sm">
                <a href={link.github} target="_blank" rel="noopener noreferrer">Github &harr;</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
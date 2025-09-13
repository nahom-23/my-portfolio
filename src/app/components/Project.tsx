// src/components/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import projects from "../const/projects";
import AnimatedWrapper from "./AnimatedWrapper";

const Project: React.FC = () => {
  // Show first 6 projects as samples on home page
  const sampleProjects = projects.slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-4 py-24 lg:py-32 text-white">
      <AnimatedWrapper delay={200} direction="up" duration={0.8}>
        <div className="flex flex-row justify-between items-center mb-8 lg:mb-12">
          <h3 className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-medium after:border-[1px] after:border-green-400 after:w-32 sm:after:w-48 lg:after:w-64 after:ml-3 sm:after:ml-5">
            <span className="text-green-400">#</span>projects
          </h3>
          <p className="font-medium">
            <Link href="/projects" className="hover:text-green-400 transition-colors text-lg">
              View All →
            </Link>
          </p>
        </div>
      </AnimatedWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mt-8 lg:mt-12">
        {sampleProjects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={300 + index * 150} direction="up" duration={0.8}>
            <div>
              <ProjectCard
                id={project.id}
                techs={project.techs.join(" ")}
                detail="A detailed description of the project..."
                link={project.links}
                hasImage={project.hasImage}
                image={project.image || null}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default Project;
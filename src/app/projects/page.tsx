'use client';

import React, { useState } from 'react';
import ProjectCard from "../components/ProjectCard";
import projects from "../const/projects";
import AnimatedWrapper from "../components/AnimatedWrapper";
import Link from "next/link";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'big' | 'medium' | 'small'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.size === activeFilter);

  const bigProjects = projects.filter(project => project.size === 'big');
  const mediumProjects = projects.filter(project => project.size === 'medium');
  const smallProjects = projects.filter(project => project.size === 'small');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
        {/* Header */}
        <AnimatedWrapper delay={100} direction="up" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">My</span>{" "}
              <span className="text-[#26FF9A]">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my portfolio of projects, from large-scale applications to smaller utilities and tools.
            </p>
          </div>
        </AnimatedWrapper>

        {/* Filter Buttons */}
        <AnimatedWrapper delay={200} direction="up" duration={0.8}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'all'
                  ? 'bg-[#26FF9A] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('big')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'big'
                  ? 'bg-[#26FF9A] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              Big Projects ({bigProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('medium')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'medium'
                  ? 'bg-[#26FF9A] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              Medium Projects ({mediumProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter('small')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'small'
                  ? 'bg-[#26FF9A] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              Small Projects ({smallProjects.length})
            </button>
          </div>
        </AnimatedWrapper>

        {/* All Projects Grid */}
        {activeFilter === 'all' && (
          <>
            {/* Big Projects Section */}
            <AnimatedWrapper delay={300} direction="up" duration={0.8}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-[#26FF9A] border-b border-[#26FF9A]/30 pb-2">
                  Big Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {bigProjects.map((project, index) => (
                    <AnimatedWrapper key={project.id} delay={400 + index * 150} direction="up" duration={0.8}>
                      <ProjectCard
                        id={project.id}
                        techs={project.techs.join(" ")}
                        detail={project.description}
                        link={project.links}
                        hasImage={project.hasImage}
                        image={project.image || ""}
                      />
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Medium Projects Section */}
            <AnimatedWrapper delay={500} direction="up" duration={0.8}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-[#26FF9A] border-b border-[#26FF9A]/30 pb-2">
                  Medium Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediumProjects.map((project, index) => (
                    <AnimatedWrapper key={project.id} delay={600 + index * 150} direction="up" duration={0.8}>
                      <ProjectCard
                        id={project.id}
                        techs={project.techs.join(" ")}
                        detail={project.description}
                        link={project.links}
                        hasImage={project.hasImage}
                        image={project.image || ""}
                      />
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            {/* Small Projects Section */}
            <AnimatedWrapper delay={700} direction="up" duration={0.8}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-[#26FF9A] border-b border-[#26FF9A]/30 pb-2">
                  Small Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {smallProjects.map((project, index) => (
                    <AnimatedWrapper key={project.id} delay={800 + index * 150} direction="up" duration={0.8}>
                      <ProjectCard
                        id={project.id}
                        techs={project.techs.join(" ")}
                        detail={project.description}
                        link={project.links}
                        hasImage={project.hasImage}
                        image={project.image || ""}
                      />
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          </>
        )}

        {/* Filtered Projects Grid */}
        {activeFilter !== 'all' && (
          <AnimatedWrapper delay={300} direction="up" duration={0.8}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <AnimatedWrapper key={project.id} delay={400 + index * 150} direction="up" duration={0.8}>
                  <ProjectCard
                    id={project.id}
                    techs={project.techs.join(" ")}
                    detail={project.description}
                    link={project.links}
                    hasImage={project.hasImage}
                    image={project.image || ""}
                  />
                </AnimatedWrapper>
              ))}
            </div>
          </AnimatedWrapper>
        )}

        {/* Back to Home */}
        <AnimatedWrapper delay={900} direction="up" duration={0.8}>
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#26FF9A] text-[#26FF9A] hover:bg-[#26FF9A] hover:text-black transition-all duration-300 rounded-lg"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default ProjectsPage;
import React from "react";
import Skillcard from "./Skillcard";
import OverView from "./OverView";
import AnimatedWrapper from "./AnimatedWrapper";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-white py-24 lg:py-32">
      <AnimatedWrapper delay={200} direction="up" duration={0.8}>
        <div className="mb-8 lg:mb-12">
          <h3 className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-medium after:border-[1px] after:border-green-400 after:w-32 sm:after:w-48 lg:after:w-64 after:ml-3 sm:after:ml-5">
            <span className="text-green-400">#</span>Skills
          </h3>
        </div>
      </AnimatedWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-8 lg:mt-12">
        <AnimatedWrapper delay={300} direction="up" duration={0.8}>
          <Skillcard description="Languages" detail="html python css Node TypeScript Odoo JavaScript " />
        </AnimatedWrapper>
        <AnimatedWrapper delay={450} direction="up" duration={0.8}>
          <Skillcard description="Other" detail="Git Taiga Notion" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={600} direction="up" duration={0.8}>
          <Skillcard description="Frameworks" detail="Express.js React Flask Vue Tailwind Material UI  " />
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper delay={750} direction="up" duration={0.8}>
        <OverView />
      </AnimatedWrapper>
    </div>
  );
};

export default Skills;

'use client';

// src/components/Hero.tsx
import hero from "../../../public/Image.svg";
import Image from "next/image";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import AdvancedTypewriter from "./AdvancedTypewriter";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Mobile/Medium Design - Centered Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center">
        {/* 3D Avatar - Centered */}
        <AnimatedWrapper delay={200} direction="up" duration={0.8}>
          <div className="mb-8">
            <Image
              src={hero}
              alt="Nahom"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl"
              priority
            />
          </div>
        </AnimatedWrapper>

        {/* Multi-line Headline with Typewriter - Centered */}
        <AnimatedWrapper delay={400} direction="up" duration={0.8}>
          <div className="text-center mb-6 max-w-xs sm:max-w-sm">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              <AdvancedTypewriter
                lines={[
                  "Nahom is a Full-Stack",
                  "developer and",
                  "Odoo",
                  "developer"
                ]}
                speed={100}
                delay={600}
                className="text-white"
                cursorColor="#26FF9A"
                lineDelay={200}
              />
            </h1>
          </div>
        </AnimatedWrapper>

        {/* Descriptive Paragraph - Centered */}
        <AnimatedWrapper delay={600} direction="up" duration={0.8}>
          <p className="text-gray-400 text-center mb-8 max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed px-2">
            He crafts responsive websites where technologies meet creativity
          </p>
        </AnimatedWrapper>

        {/* Status Indicator - Centered */}
        <AnimatedWrapper delay={800} direction="up" duration={0.8}>
          <div className="border border-white/20 rounded-lg px-4 sm:px-5 py-3 sm:py-4 flex items-center space-x-3 bg-white/5 backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#26FF9A] rounded-sm flex-shrink-0"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-gray-400 text-sm">Currently working on</span>
              <span className="text-white font-semibold text-sm">Portfolio</span>
            </div>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Desktop Design - Side by Side Layout */}
      <div className="hidden lg:flex max-w-6xl mx-auto w-full justify-around items-center">
        <div className="max-w-xl space-y-6">
          <AnimatedWrapper delay={300} direction="left" duration={1.0}>
            <h2 className="text-4xl lg:text-5xl font-medium text-green-400">
              <AdvancedTypewriter
                lines={["Nahom is full-stack and odoo developer"]}
                speed={70}
                delay={500}
                className="text-green-400"
                cursorColor="#26FF9A"
              />
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper delay={500} direction="left" duration={1.0}>
            <p className="text-gray-400 mt-3 text-lg">
              I build interactive websites using modern technologies to crafts
              responsive websites where technologies meet creativity
            </p>
          </AnimatedWrapper>
          <AnimatedWrapper delay={700} direction="left" duration={1.0}>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <Link href="/contact">
                <button className="border-green-500 border-2 px-6 py-2 hover:bg-green-700 transition-colors">
                  Contact Me!!
                </button>
              </Link>
              <button
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="border-white border-2 px-6 py-2 hover:bg-white hover:text-black transition-colors"
              >
                Download CV
              </button>
            </div>
          </AnimatedWrapper>
        </div>
        <div className="flex flex-col items-center">
          <AnimatedWrapper delay={400} direction="right" duration={1.0}>
            <Image
              src={hero}
              alt="Nahom"
              className="w-72 h-80 lg:w-80 lg:h-88 rounded-full"
            />
          </AnimatedWrapper>
          <AnimatedWrapper delay={600} direction="right" duration={1.0}>
            <div className="flex items-center border-2 border-gray-400 px-4 py-2 mt-4">
              <div className="w-4 h-4 bg-green-500 border-[#C778DD] border-2 mr-2"></div>
              <div>Currently working on MERN stack</div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;

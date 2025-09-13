// src/components/About.tsx
import AnimatedWrapper from "../components/AnimatedWrapper";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 lg:py-32 text-white min-h-screen">
      <AnimatedWrapper delay={200} direction="up" duration={0.8}>
        <div className="mb-8 lg:mb-12">
          <h3 className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-medium after:border-[1px] after:border-green-400 after:w-32 sm:after:w-48 lg:after:w-64 after:ml-3 sm:after:ml-5">
            <span className="text-green-400">#</span>About
            Me          </h3>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper delay={400} direction="up" duration={0.8}>
        <div className="max-w-4xl">
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            Hi, I&apos;m Nahom Birhanu
            <br /><br />
            I&apos;m a Full-Stack and Odoo Developer based in Addis Ababa. I build responsive web apps and business solutions using modern technologies. With a strong focus on clean design and functionality, I help clients turn ideas into real products. Always learning. Always building.
          </p>
        </div>
      </AnimatedWrapper>

      {/* Back to Home */}
      <AnimatedWrapper delay={600} direction="up" duration={0.8}>
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#26FF9A] text-[#26FF9A] hover:bg-[#26FF9A] hover:text-black transition-all duration-300 rounded-lg"
          >
            <span>← Back to Home</span>
          </Link>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default About;

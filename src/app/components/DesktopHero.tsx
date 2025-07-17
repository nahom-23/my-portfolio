// src/components/DesktopHero.tsx
import hero from "../../../public/Image.svg";
import Image from "next/image";

const DesktopHero: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto min-h-screen px-4 text-white flex flex-col items-center justify-center">
            {/* 3D Avatar - Centered */}
            <div className="mb-12">
                <Image
                    src={hero}
                    alt="Nahom"
                    className="w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl"
                    priority
                />
            </div>

            {/* Multi-line Headline */}
            <div className="text-center mb-8 max-w-2xl">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="text-white">Nahom is a web</span>
                    <br />
                    <span className="text-white">designer and</span>
                    <br />
                    <span className="text-[#26FF9A]">front-end</span>
                    <br />
                    <span className="text-[#26FF9A]">developer</span>
                </h1>
            </div>

            {/* Descriptive Paragraph */}
            <p className="text-gray-400 text-center mb-10 max-w-lg text-lg leading-relaxed">
                He crafts responsive websites where technologies meet creativity
            </p>

            {/* Status Indicator */}
            <div className="border border-white/20 rounded-lg px-6 py-4 flex items-center space-x-4 bg-white/5 backdrop-blur-sm">
                <div className="w-4 h-4 bg-[#26FF9A] rounded-sm flex-shrink-0"></div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Currently working on</span>
                    <span className="text-white font-semibold">Portfolio</span>
                </div>
            </div>
        </section>
    );
};

export default DesktopHero; 
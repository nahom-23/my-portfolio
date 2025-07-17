import React from "react";
import Counter from "./Counter";

const OverView = () => {
  return (
    <div>
      <div className="mt-16">
        <h3 className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-medium after:border-[1px] after:border-green-400 after:w-32 sm:after:w-48 lg:after:w-64 after:ml-3 sm:after:ml-5">
          <span className="text-green-400">#</span>Overview
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-between my-8 sm:my-12 gap-4 sm:gap-8 lg:gap-32">
        <div className="flex-1 border-[1px] text-center py-8 sm:py-12 px-3">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            <Counter
              end={1}
              duration={1500}
              delay={500}
              className="text-white"
            />
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">Clients</p>
        </div>
        <div className="flex-1 border-[1px] text-center py-8">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            <Counter
              end={20}
              duration={2000}
              delay={800}
              className="text-white"
            />
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">Projects</p>
        </div>
        <div className="flex-1 sm:flex-2 border-[1px] text-center py-8">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            <Counter
              end={1000}
              duration={2500}
              delay={1100}
              suffix="+"
              className="text-white"
            />
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">working hours</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;

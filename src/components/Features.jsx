import React from 'react';
import { features } from '../constants';

const Features = () => {
  return (
    <div>
      <h2 className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-xl lg:text-2xl text-center uppercase tracking-tight">
        Features
      </h2>

      <div className="space-y-10 mt-10">
        <div>
          <h1 className="text-4xl text-center lg:text-7xl ">
            Easily Build{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
              Your Code
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap mt-10 ">
          {features.map((feat, ind) => (
            <div className="flex w-1/3 max-sm:w-1/2 lg:w-1/3 gap-4 mt-20">
              <h1 className="text-xl text-orange-600">{feat.icon}</h1>
              <div className="flex flex-col gap-6">
                <h3 className="text-lg lg:text-2xl">{feat.text}</h3>
                <p className="text-neutral-700 text-md lg:text-md ">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

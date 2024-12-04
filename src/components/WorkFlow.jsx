import React from 'react';
import code from '../assets/code.jpg';
import { checklistItems } from '../constants';
import { Check, CheckCircle, CheckIcon } from 'lucide-react';

const WorkFlow = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-4xl text-center">
        Accelerate Your
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
          {' '}
          Coding Workflow
        </span>
      </h1>
      <div className="mt-10 flex justify-center gap-8 flex-col lg:flex-row">
        <img src={code} className=" mx-auto lg:w-1/2"></img>
        <div className="flex flex-col justify-center items-center">
          {checklistItems.map((check, ind) => (
            <div className="flex gap-2">
              <CheckCircle />
              <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-lg lg:text-xl">{check.title}</h1>
                <p className="text-sm text-neutral-700">{check.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

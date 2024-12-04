import React from 'react';
import { pricingOptions } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-center bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text tracking-tight">
        Pricing
      </h1>
      <div className="flex gap-6 flex-col lg:flex-row justify-center items-center mt-10">
        {pricingOptions.map((price, ind) => (
          <div className="w-full sm:w-1/2 border border-white px-6 py-10 rounded-md space-y-20">
            <h3 className="text-xl lg:text-2xl tracking-tight">
              {price.title}
              {price.title == 'Pro' && (
                <span className="text-sm bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                  {' '}
                  ( Most Popular)
                </span>
              )}
            </h3>
            <h2 className="text-2xl lg:text-3xl">
              {price.price}
              <span className="text-sm text-neutral-400">/Month</span>
            </h2>

            <div className="flex flex-col gap-8 ">
              {price.features.map((fea) => (
                <div className="flex gap-6">
                  <CheckCircle2 />
                  <h1>{fea}</h1>
                </div>
              ))}
            </div>
            <button className="border border-white rounded-md w-full p-2 hover:bg-gradient-to-r from-orange-500 to-orange-700 duration-500 ease-in-out">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

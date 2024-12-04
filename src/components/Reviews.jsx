import React from 'react';
import { testimonials } from '../constants';

const Reviews = () => {
  return (
    <div className="tracking-wide">
      <h1 className="text-3xl text-center tracking-tight mb-10">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((rev, ind) => (
          <div className="bg-neutral-900 p-10 w-full  rounded-lg ">
            <p>{rev.text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-6 items-center">
              <img src={rev.image} className="w-20 h-20 rounded-full"></img>
              <div>
                <h1 className="text-xl tracking-tight">{rev.user}</h1>

                <p className="text-sm text-neutral-700 italic">{rev.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

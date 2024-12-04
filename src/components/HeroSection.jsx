import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-6xl max-sm:text-4xl lg:text-8xl text-center">
        VirtualR build tool{' '}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
          {' '}
          for developers
        </span>
      </h1>
      <p className="mt-6 text-lg lg:text-xl  p-10 lg:p-12 max-sm:text-justify text-neutral-600">
        our AI development team is dedicated to creating intelligent solutions
        that empower businesses and enhance user experiences. We specialize in
        harnessing the power of machine learning, natural language processing,
        and computer vision to build robust applications tailored to meet the
        unique needs of our clients. Our commitment to excellence drives us to
        stay ahead of industry trends, ensuring that we deliver cutting-edge
        solutions that not only solve complex problems but also unlock new
        opportunities for growth.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        <button className="p-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md ">
          Start Here
        </button>
        <button className="border border-white p-2 rounded-md ">
          Documentation
        </button>
      </div>

      <div className="flex mt-10 justify-center items-center  gap-4 flex-col lg:flex-row">
        <video
          autoPlay
          loop
          muted
          src={video2}
          className="border border-orange-500 w-1/2 rounded-md"
        ></video>
        <video
          autoPlay
          loop
          muted
          src={video1}
          className="border border-orange-500 w-1/2 rounded-md"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;

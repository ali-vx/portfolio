import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#212529]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FD413C]'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Muhammad Ali,
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#A6A7A9]'>
          Developer and UI/UX Designer.
        </h2>
        <p className='text-[#A6A7A9] py-4 max-w-[700px]'>
          I’m a software Engineer specializing in React,Flutter and  UI/UX Design to deliver exceptional experiences for Web and Mobile with a heavy emphasis on Design and User Experience.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FD413C] hover:border-[#FD413C]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

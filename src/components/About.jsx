import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full pb-48 bg-[#212529] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FD413C]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-gray-300' >Hi! My name is Ali, nice to meet you.</p>
            </div>
            <div>
              <p className='text-[#A6A7A9]'>I'm a graduate of Software Engineering from International Islamic University, Islamabad.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

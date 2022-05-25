import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full py-48 bg-[#212529] text-white'>
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
              <p className='text-[#A6A7A9] text-about'>I’m a software Engineer graduate from the <a className='text-[#FD413C]' target="_blank" rel="noopener noreferrer" href='https://iiu.edu.pk/'>International Islamic University</a>, Islamabad specializing in Front End Web Development and UI/UX Design.</p>
              <p className='text-[#A6A7A9] text-about'>The tools and technologies I have worked with are mostly related to web design and development such as JavaScript, React, Redux, Bootstrap, Tailwind CSS, Flutter, Firebase and Figma among others.</p>
              <p className='text-[#A6A7A9] text-about'>I have a strong passion for learning new things, and I am always looking to improve my skills.</p>   
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

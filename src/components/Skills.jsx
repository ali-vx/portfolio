import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Figma from '../assets/figma.png';
import Photoshop from '../assets/photoshop.png';
import AdobeXd from '../assets/adobexd.png';
import illustrator from '../assets/illustrator.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#212529] text-gray-300 pb-10'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#FD413C] '>Skills</p>
              <p className='py-4'>These are some of the technologies I've worked with.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AdobeXd} alt="HTML icon" />
                  <p className='my-4'>Adobe XD</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Figma} alt="HTML icon" />
                  <p className='my-4'>Figma</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={illustrator} alt="HTML icon" />
                  <p className='my-4'>illustrator</p>
              </div>
              <div className='bg-[#2A2E32] pt-8 shadow-md shadow-[#040c1685] rounded-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Photoshop} alt="HTML icon" />
                  <p className='my-4'>Photoshop</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;

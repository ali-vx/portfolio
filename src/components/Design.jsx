import React from 'react';
import Img1 from '../assets/1.webp'
import Img2 from '../assets/2.webp'
import Img3 from '../assets/3.webp'
import Img4 from '../assets/4.webp'
import Img5 from '../assets/5.webp'
import Img6 from '../assets/6.webp'

const Design = () => {
  return (
    <div name='design' className='w-full md:h-screen text-gray-300 bg-[#212529] py-20 md:my-40'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FD413C]'>
            Design Projects
          </p>
          <p className='py-6'>Check out some of my UI/UX design projects</p>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-5 py-2 mx-auto lg:pt-18 lg:px-18">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img1} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img2} />
                  </div>
                  <div class="w-full p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img3} />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img4} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img5} />
                  </div>
                  <div class="w-1/2 p-1 md:p-2 hover:scale-105 duration-500">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src={Img6} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <a target="_blank" rel="noopener noreferrer" href='https://flic.kr/s/aHBqjzPgG4' className='see-more-btn text-white group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#FD413C] hover:border-[#FD413C]'>
            See More
          </a>
      </div>
    </div>
  );
};

export default Design;

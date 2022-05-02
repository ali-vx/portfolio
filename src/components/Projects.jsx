import React from 'react';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#212529] py-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FD413C]'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            className="bg-MovieImg hover:bg-MovieImgHover hover:scale-105 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div abc"
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Movies App
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" rel="noopener noreferrer" href='https://ali-vx.github.io/react-movies-database/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/ali-vx/react-movies-database'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='bg-WordleImg hover:bg-WordleImgHover hover:scale-105 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Flutter Wordle Clone
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/ali-vx/wordle_app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            className='bg-WikiImg hover:bg-WikiImgHover hover:scale-105 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Wiki Search
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" rel="noopener noreferrer" href='https://ali-vx.github.io/react-wiki-search/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/ali-vx/react-wiki-search'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='bg-ChatImg hover:bg-ChatImgHover hover:scale-105 duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Firebase Chat App
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" rel="noopener noreferrer" href='https://chat-app-613cb.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

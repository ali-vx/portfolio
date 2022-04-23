import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#212529] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/78c17d13-5c1c-456d-bd1c-65ed7a3014f3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FD413C] text-white'>Contact</p>
                <p className='text-[#A6A7A9] py-4'>Submit the form below or shoot me an email - amuhammad161@gmail.com</p>
            </div>
            <input className='text-[#A6A7A9] rounded-md bg-[#2A2E32] p-2' type="text" placeholder='Name' name='name' />
            <input className='text-[#A6A7A9] rounded-md my-4 p-2 bg-[#2A2E32]' type="email" placeholder='Email' name='email' />
            <textarea style={{resize: 'none'}} className='text-[#A6A7A9] rounded-md bg-[#2A2E32] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#FD413C] hover:border-[#FD413C] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div>
      <div className='text-center mb-8 px-4'>
        <h2 className='text-2xl font-bold mb-2'>Newsletter</h2>
        <p className='text-lg'>Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let&apos;s stay updated!</p>
        <div className='mt-4 flex flex-col sm:flex-row justify-center'>
          <input 
            type='email' 
            placeholder='Email...' 
            className='px-4 py-2 rounded-l-lg border-[1px] border-black text-black mb-4 sm:mb-0 sm:mr-2'
          />
          <button className='bg-black text-white px-4 py-2 rounded-r-lg'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='bg-black text-white py-10'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <div className='flex justify-center space-x-4 mt-4'>
              <a href="https://github.com/Aleeze123" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-white hover:text-gray-500 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-white hover:text-gray-500 transition duration-300" />
              </a>
            </div>
          </div>

          <div className='text-center'>
            <p className='mb-2'>&copy; The World Travel Guy 2025</p>
            <p className='text-sm'>
              <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> •
              <a href="/terms-of-use" className='hover:underline ml-2'>Terms Of Use</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

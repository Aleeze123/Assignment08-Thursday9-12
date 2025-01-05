import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-12 mt-16">
      <div className="md:w-1/2 mt-8 md:mt-0 md:pr-12">
        <div className="flex items-center justify-center mb-8">
          <div className="w-1/4 border-b-2 border-gray-300"></div>
          <h1 className="text-5xl font-bold mx-4 text-center">ABOUT</h1>
          <div className="w-1/4 border-b-2 border-gray-300"></div>
        </div>
        <div className="text-center text-gray-700">
          <p className="text-2xl mb-6">Welcome to the World Travel Guy Blog!</p>
          <p className="text-lg mb-6">
            Join us as we explore the most beautiful destinations, share exciting travel tips, and uncover hidden gems from around the globe. Our blog is your ultimate guide to world travel, offering valuable insights and inspiration for your next adventure.
          </p>
          <p className="text-lg">
            Whether you&apos;re a seasoned traveler or just starting your journey, the World Travel Guy Blog has something for everyone. Let&apos;s embark on this incredible journey together!
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/About.png"
          alt="About Us"
          width={700}
          height={700}
          className="rounded-lg w-full object-cover"
        />
      </div>
    </div>
  );
}

export default About;

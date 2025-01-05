import React from 'react';
import Link from 'next/link';
import Blog from "@/app/Blogs/page";
const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/img.jpeg)' }}>
        <div className="absolute top-0 left-0 w-full h-full z-[1]"></div>
        <div className="relative z-10 text-center text-white pt-24 px-4 sm:pt-32 md:pt-40 lg:pt-48">
          <div className=" p-6 sm:p-8 md:p-10 lg:p-12 ">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 ">
              EXPLORE DREAM DISCOVER
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans drop-shadow-lg mb-6">
              This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe.
            </p>
            <div className="flex justify-center">
              <Link href="./Blogs" legacyBehavior>
                <a className="relative inline-block  border-2 border-white text-white py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg md:text-xl font-semibold bg-black  transition duration-300">
                  <span className="absolute inset-0 w-full h-full  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
                    START EXPLORING
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section id="blog-section" className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <Blog/>
        </div>
      </section>
    </div>
  );
};

export default Home;


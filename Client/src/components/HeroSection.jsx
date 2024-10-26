import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='text-center bg-gradient-to-r from-blue-100 to-purple-100 py-10 mt-10'>
      <div className='flex flex-col gap-6 my-3 max-w-3xl mx-auto px-4 mt-5'>
        {/* Badge */}
        <span className='mx-auto px-6 py-3 rounded-full bg-[#FFE8E4] text-[#F83002] font-semibold text-sm mb-6'>
          No.1 Job Hunt Website
        </span>

        {/* Main Heading */}
        <h2 className='text-5xl font-extrabold leading-tight '>
          Search, <span className='text-[#F83002]'>Apply </span>& <br />
          Get Your <span className='text-[#6A38C2]'>Dream Job</span>
        </h2>

        {/* Subtitle */}
        <p className='text-lg mt-5 text-gray-600 font-medium max-w-xl mx-auto'>
          Start your journey to a rewarding career with our top job listings and career guidance. Find your dream job today!
        </p>

        {/* Search Bar */}
        <div className='flex w-full  mt-5 sm:w-[60%] md:w-[50%] shadow-lg bg-white border border-gray-200 pl-4 rounded-full items-center gap-4 mx-auto'>
          <input
            type='text'
            placeholder='Find Your Dream Jobs...'
            className='outline-none border-none w-full py-2 px-4 text-gray-800 rounded-full focus:ring-2 focus:ring-[#6A38C2]'
          />
          <Button className='rounded-full bg-[#6A38C2] hover:bg-[#5B2DA6] text-white transition-all duration-300 ease-in-out p-2'>
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

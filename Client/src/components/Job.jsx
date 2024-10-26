import { Button } from '@mui/material';
import { Bookmark } from 'lucide-react';
import React from 'react';
import { Avatar, AvatarImage } from './ui/avatar';


const Job = () => {
    return (
        <div className='p-5 rounded-xl cursor-pointer shadow-md bg-gray-50 border border-gray-300 hover:shadow-xl transition-all duration-300'>
            {/* Job Posting Header */}
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>Posted 2 days ago</p>
                <Button className='rounded-full p-1' size='small' variant='outlined'>
                    <Bookmark className='text-blue-500' />
                </Button>
            </div>

            {/* Company Info */}
            <div className='flex items-center gap-4 my-4'>
                <Avatar className='w-14 h-14 border border-blue-300'>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzPFGyg8JCSEJwPbZmGPbAjkvmaK6DMrxPg&s" />
                </Avatar>
                <div>
                    <p className='text-lg font-medium text-gray-800'>Company Name</p>
                    <p className='text-sm text-gray-500'>Front-end Developer</p>
                </div>
            </div>

            {/* Job Details */}
            <div className='flex items-center gap-3 text-sm text-gray-600'>
                <p className='bg-blue-100 text-sm text-blue-700 px-2 py-1 rounded-full'>Remote</p>
                <p className='bg-green-100 text-sm text-center text-green-700 px-2 py-1 rounded-full'>Full-time</p>
                <p className='bg-yellow-100 text-sm text-center text-yellow-700 px-2 py-1 rounded-full'>$60k - $80k/year</p>
            </div>

            {/* Job Description */}
            <p className='text-sm text-gray-700 mt-4'>
                Join our team as a Front-end Developer to build high-quality, responsive web applications using modern technologies and best practices.
            </p>
            <div className='flex items-center gap-4 mt-4'>
    {/* Details Button */}
    <Button
        variant='outlined'
        className='relative border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg overflow-hidden transition-all duration-300 ease-out hover:from-pink-500 hover:to-purple-500 hover:text-gray-900 hover:shadow-xl'
    >
        <span className='z-10 relative'>Details</span>
        <span className='absolute inset-0 bg-white opacity-10 rounded-full'></span>
    </Button>

    {/* Save For Later Button */}
    <Button
        className='relative px-6 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white rounded-full shadow-lg overflow-hidden hover:shadow-2xl hover:from-[#feb47b] hover:to-[#ff7e5f] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
    >
        <span className='z-10 relative'>Save For Later</span>
        <span className='absolute inset-0 bg-white opacity-5 rounded-full'></span>
    </Button>
</div>

        </div>
    );
};

export default Job;

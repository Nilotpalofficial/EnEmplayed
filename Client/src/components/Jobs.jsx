import React from 'react'
import Navbar from './shared/Nevbar'
import FilterCard from './FilterCard';
import Job from './Job';

const Jobs = () => {
    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-20'>
                <div className='flex gap-5'>
                    {/* Sidebar for filter */}
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    {
                        jobsArray.length === 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[80vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        jobsArray.map((item, index) => (
                                            <div key={index}>
                                                <Job />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs;

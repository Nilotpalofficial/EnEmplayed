import React from 'react';
import LatestJobsCard from './LatestJobsCard';

const LatestJobs = () => {
    const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Corrected the typo from "rerdamJobs" to "randomJobs"

    return (
        <div className="bg-gray-50 py-20"> {/* Full-width light background with vertical padding */}
            <div className="max-w-7xl mx-auto px-5"> {/* Center content with max width */}
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center mb-6">
                    <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
                </h1>
                
                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {randomJobs.slice(0, 6).map((item, index) => (
                        <LatestJobsCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestJobs;

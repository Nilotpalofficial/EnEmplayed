import { Badge } from '@/components/ui/badge';
import React from 'react';

const LatestJobsCard = () => {
    return (
        <div className="p-6 mt-10 rounded-xl shadow-lg bg-gradient-to-r from-blue-50 to-white border border-blue-200 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
            {/* Company Information */}
            <div className="mb-3">
                <h1 className="font-semibold text-xl text-gray-800">Company Name</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>

            {/* Job Title */}
            <div className="mb-4">
                <h2 className="font-bold text-lg text-gray-800 mb-2">Job Title</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Brief job description or tagline goes here to give more information.
                </p>
            </div>

            {/* Badges */}
            <div className="flex items-center mt-4 gap-3">
                <Badge variant="ghost" className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                    12 positions
                </Badge>
                <Badge variant="ghost" className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                    Part Time
                </Badge>
                <Badge variant="ghost" className="bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full">
                    12 LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobsCard;

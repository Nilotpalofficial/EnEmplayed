import React from 'react';
import Navbar from '../shared/Nevbar';
import { Avatar, AvatarImage } from './avatar';
import { Badge } from './badge';
import AppliedJobs from './AppliedJobs';

const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];
const Profile = () => {
  const isResume = true;

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-20 p-8">
        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzPFGyg8JCSEJwPbZmGPbAjkvmaK6DMrxPg&s" alt="profile" />
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">Your Name</h1>
            <p className="text-gray-600">Software Developer | MERN Stack Enthusiast</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">About Me</h2>
          <p className="text-gray-700 mt-2">
            I am a passionate developer with a keen interest in building full-stack applications using the MERN stack. I love coding, solving complex problems, and continuously learning new technologies.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Skills</h2>
          <div className="flex items-center gap-1 my-2">
            {skills.length !== 0 ? skills.map((item, index) => (
              <Badge className="bg-blue-500 cursor-pointer" key={index}>{item}</Badge>
            )) : <span>NA</span>}
          </div>
        </div>

        {/* Resume Information Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Resume</h2>
          <div className="flex items-center gap-1 my-2">
            {isResume ? <a target="_blank" rel="noopener noreferrer" href="http://youtube.com" className="text-blue-500 hover:underline cursor-pointer">My Resume</a> : <span>NA</span>}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Contact Information</h2>
          <p className="text-gray-700 mt-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700 mt-2"><strong>Email:</strong> your.email@example.com</p>
        </div>
      </div>

      {/* Applied Jobs Section with Margin */}
      <div className="max-w-4xl mx-auto bg-white">
        <h1 className="text-xl font-semibold">Applied Jobs</h1>
        <AppliedJobs />
      </div>
    </div>
  );
}

export default Profile;

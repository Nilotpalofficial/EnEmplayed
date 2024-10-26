import React from 'react';
import Navbar from './shared/Nevbar';

const AboutUs = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen py-10">
    <Navbar/>
      {/* Hero Section */}
      <section className="bg-white text-center py-16 mb-10 shadow-md">
        <h1 className="text-5xl font-bold text-gray-900">Who We Are</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We are a passionate team committed to building innovative solutions that empower individuals and organizations worldwide.
        </p>
        <div className="mt-8">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/13/08/14/teamwork-2499638_1280.jpg"
            alt="Team at work"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-100 py-16 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Journey</h2>
        <p className="text-gray-600 mt-4 text-center max-w-3xl mx-auto leading-relaxed">
          Founded in 2015, our company started with a mission to revolutionize the way people interact with technology. From a small
          team in a co-working space to a global enterprise, we’ve grown exponentially, driven by our core values of integrity,
          innovation, and customer success.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 mb-10 shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {/* Value 1 */}
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Pushing the boundaries of technology to create impactful solutions that make a difference.
            </p>
          </div>
          {/* Value 2 */}
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Customer-Centricity</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We strive to exceed their expectations.
            </p>
          </div>
          {/* Value 3 */}
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and that great ideas come from diverse minds working together.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 justify-center text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <div className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/06/06/00/50/smoker-798992_1280.jpg"
              alt="Team member"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Mr Nilotpal Roy</h4>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
              alt="Team member"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-medium text-gray-800">Mr Subhankar Nayak</h4>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

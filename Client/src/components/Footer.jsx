import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">UnEmployeD</h2>
                        <p className="text-gray-600">
                            UnEmployeD is a leading platform for job seekers and recruiters. We help students and professionals find the best opportunities and connect with top companies.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-gray-800 transition-colors duration-300">Home</a></li>
                            <li><a href="/AboutUs" className="hover:text-gray-800 transition-colors duration-300">About Us</a></li>
                            <li><a href="/jobs" className="hover:text-gray-800 transition-colors duration-300">Jobs</a></li>
                            <li><a href="/contact" className="hover:text-gray-800 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <p className="mb-4">Stay connected with us on social media!</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <Facebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-blue-400 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <Twitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-pink-500 hover:bg-pink-400 hover:text-white transition-colors duration-300">
                                <Instagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t border-gray-300 pt-5 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} UnEmployeD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

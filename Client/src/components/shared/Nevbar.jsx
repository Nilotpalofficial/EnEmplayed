import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'; // Adjust import path if needed
import { Avatar, AvatarImage } from '../ui/avatar'; // Adjust import path if needed
import { Button } from '../ui/button';
import { LogOut, User2, Menu, X } from 'lucide-react'; // Added Menu and X for icons
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const {user} =useSelector(store=>store.auth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='bg-white fixed top-0 left-0 w-full z-50 shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 md:px-0'>
                <div>
                    <h1 className='text-2xl font-bold'>Un<span className='text-[#F83002]'>EmployeD</span></h1>
                </div>
                {/* Mobile Menu Toggle Button */}
                <button className="md:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
                </button>
                <div className={`flex items-center gap-8 mr-10 ${isMobileMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg' : 'hidden md:flex'}`}>
                    <ul className='flex flex-col md:flex-row font-medium items-center gap-5'>
                        {/* Added hover effect with text and underline */}
                        <li className="relative group">
                            <Link to="/" className="hover:text-[#F83002] transition-colors duration-300">
                                Home
                            </Link>
                            {/* Underline */}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F83002] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </li>
                        <li className="relative group">
                            <Link to="/jobs" className="hover:text-[#F83002] transition-colors duration-300">
                                Jobs
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F83002] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </li>
                        <li className="relative group">
                            <Link to="/browser" className="hover:text-[#F83002] transition-colors duration-300">
                                Browser
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F83002] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#683AC2] hover:bg-[#442483]">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className=''>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4>Nilotpal Roy</h4>
                                                <p className='text-sm text-muted-foreground'>I am a Fachers And lerner</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                            </div>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link">Log Out</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;

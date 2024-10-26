import React, { useState } from 'react';
import { Label } from '../ui/label'; 
import { Input } from '../ui/input'; 
import { RadioGroup } from '../ui/radio-group'; 
import { Button } from '../ui/button'; 
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { toast } from 'sonner'; 
import { USER_API_END_POINT } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';


function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: null,
    });
    const {loading} =useSelector(store=>store.auth);
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const changeEventHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandle = (e) => {
        setInput({ ...input, file: e.target.files?.[0] || null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            if (res?.data?.success) {
                navigate("/login");
                toast.success(res.data.message);
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }finally{
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center relative">
            
            <Link to="/" className="fixed top-6 left-6 bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md font-semibold shadow-md">
                Home
            </Link>

            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={handleSubmit} className='w-full max-w-md bg-white shadow-xl rounded-lg p-8 my-10'>
                    <h1 className='font-bold text-2xl text-center text-gray-800 mb-6 '>Sign Up</h1>
                    
                    {/* Full Name */}
                    <div className='my-2'>
                        <Label className="text-gray-700">Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname || ""}
                            name="fullname"
                            onChange={changeEventHandle}
                            placeholder='Enter Your Name'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Email */}
                    <div className='my-2'>
                        <Label className="text-gray-700">Email</Label>
                        <Input
                            type="email"
                            value={input.email || ""}
                            name="email"
                            onChange={changeEventHandle}
                            placeholder='Enter Your Email Id'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Phone Number */}
                    <div className='my-2'>
                        <Label className="text-gray-700">Phone Number</Label>
                        <Input
                            type="number"
                            value={input.phoneNumber || ""}
                            name="phoneNumber"
                            onChange={changeEventHandle}
                            placeholder='Enter Your Phone Number'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Password */}
                    <div className='my-2'>
                        <Label className="text-gray-700">Password</Label>
                        <Input
                            type="password"
                            value={input.password || ""}
                            name="password"
                            onChange={changeEventHandle}
                            placeholder='Enter Your Password'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Role Selection */}
                    <div className='flex items-center justify-between mt-4'>
                        <RadioGroup className="flex items-center gap-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandle}
                                    className="cursor-pointer"
                                />
                                <Label className="text-gray-700" htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandle}
                                    className="cursor-pointer"
                                />
                                <Label className="text-gray-700" htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        
                        {/* File Upload */}
                        <div className='flex items-center gap-2'>
                            <Label className="text-gray-700">Profile</Label>
                            <Input
                                accept='image/*'
                                type='file'
                                onChange={changeFileHandle}
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button type='submit' className='w-full my-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6 transition-all duration-300 ease-in-out'>
                            Signup
                        </Button>
                    }
                    
                    {/* Login Link */}
                    <span className='text-sm text-center block mt-4'>
                        Already have an account? <Link to='/login' className='text-blue-600 hover:text-blue-800'>Login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Signup;

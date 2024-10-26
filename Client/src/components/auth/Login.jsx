import React, { useState } from 'react';
import { Label } from '../ui/label'; // Import Label component
import { Input } from '../ui/input'; // Import Input component
import { RadioGroup } from '../ui/radio-group'; // Import RadioGroup component
import { Button } from '../ui/button'; // Import Button component
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';


function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error("Login failed. Please try again.");
        } finally {
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
                    <h1 className='font-bold text-2xl text-center text-gray-800 mb-6'>Login</h1>

                    <div className='my-4'>
                        <Label className="text-gray-700">Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandle}
                            placeholder='Enter Your Email'
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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

                    {/* Role Selection Radio Buttons */}
                    <div className='mt-4'>
                        <Label className="text-gray-700">Role</Label>
                        <RadioGroup className="flex items-center gap-4 mt-2">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandle}
                                    className="cursor-pointer"
                                />
                                <Label className="text-gray-700">Student</Label>
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
                                <Label className="text-gray-700">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button type='submit' className='w-full my-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6 transition-all duration-300 ease-in-out'>
                            Login
                        </Button>
                    }



                    <span className='text-sm text-center block mt-4'>
                        Don't have an account? <Link to='/signup' className='text-blue-600 hover:text-blue-800'>Sign Up</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Login;

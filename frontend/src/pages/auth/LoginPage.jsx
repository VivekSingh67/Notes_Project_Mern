import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = axios.post("http://localhost:3000/api/auth/login", {
            email,
            password
        }, { withCredentials: true })

        navigate('/notes')
    }
    return (
        <div className="min-h-screen bg-[#222831] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-[#393E46] rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Login Account
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none text-white"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button className="w-full bg-[#DFD0B8] text-[#393E46] font-semibold py-3 rounded-lg transition">
                                Login
                            </button>
                        </div>
                    </form>


                    <p className="text-center text-sm text-white mt-6">
                        Don't have an account?{' '}
                        <a href="/register" className="text-[#DFD0B8] font-medium hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import { BASE_URL } from '../../config/Config';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        if (form.password !== form.confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/api/create/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phoneNumber: form.phone,
                    location: form.location,
                    password: form.password
                })
            });

            if (response.ok) {
                const message = await response.text();
                setMessage(message);
                navigate('/login'); // Navigate on success
            } else {
                const errorMessage = await response.text();
                setMessage('Error creating user: ' + errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error creating user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        {/* Name Input */}
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block w-full px-3 py-2 border rounded-t-md text-gray-900"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="block w-full px-3 py-2 border text-gray-900"
                                placeholder="Email address"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Phone Input */}
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="block w-full px-3 py-2 border text-gray-900"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Location Input */}
                        <div className="mt-2">
                            <input
                                id="location"
                                name="location"
                                type="text"
                                required
                                className="block w-full px-3 py-2 border text-gray-900"
                                placeholder="Location"
                                value={form.location}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Password Input */}
                        <div className="relative mt-2">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="block w-full px-3 py-2 border text-gray-900"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                        {/* Confirm Password Input */}
                        <div className="relative mt-2">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                                className="block w-full px-3 py-2 border text-gray-900"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                    </div>

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="flex justify-center mt-4">
                            <CircularProgress />
                        </div>
                    )}

                    {/* Message Display */}
                    {message && (
                        <Typography variant="body2" color={message.includes('Error') ? 'error' : 'primary'} align="center" className="mt-4">
                            {message}
                        </Typography>
                    )}

                    <div className="mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 ${loading ? 'opacity-50' : ''}`}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
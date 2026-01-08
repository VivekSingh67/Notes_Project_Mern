import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NotesForm() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const response = axios.post("http://localhost:3000/api/notes/create-note", {
            title,
            description
        }, { withCredentials: true })

        console.log(response.data)


        

        navigate('/notes')

    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <button onClick={() => window.history.back()}
                        className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-lg mb-6"
                    >
                        <i className="ri-arrow-left-line"></i> Back
                    </button>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Add New Note</h1>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-3">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name='title'
                                    placeholder="Enter note title..."
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-3">
                                    Description
                                </label>
                                <textarea
                                    name='description'
                                    placeholder="Enter note description..."
                                    rows="8"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors resize-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    className="flex-1 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Save Note
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
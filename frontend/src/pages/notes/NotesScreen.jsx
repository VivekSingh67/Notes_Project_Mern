import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function NotesApp() {
  const [notesData, setNotesData] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get('http://localhost:3000/api/notes/notes-data', {
        withCredentials: true
      })
      setNotesData(res.data.notes)
    }

    fetchNotes()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Notes</h1>
          <Link to="/notesform" className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
            + Add Note
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Yellow Note Card */}
          {notesData.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-yellow-300 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between shadow-lg hover:transform hover:-translate-y-2 transition-transform relative"
              >
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {items.title}
                </h2>

                {/* Description */}
                <p className="text-base text-gray-800 flex-1">
                  {items.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div className="text-gray-700 text-sm">
                    {new Date(items.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/notesformedit/${items._id}`} className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg hover:bg-gray-800 transition-colors">
                      <i className="ri-pencil-fill"></i>
                    </Link>
                    <Link to={`/notesformedit/${items._id}`} className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg hover:bg-red-600 transition-colors">
                      <i className="ri-delete-bin-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}


        </div>
      </div>
    </div>
  );
}
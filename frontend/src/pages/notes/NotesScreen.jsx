import React from 'react';
import { Link } from 'react-router-dom';
export default function NotesApp() {
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
          <div className="bg-yellow-300 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between shadow-lg hover:transform hover:-translate-y-2 transition-transform relative">
            <div className="text-xl font-semibold leading-snug text-gray-800">
              The beginning of screenless design: UI jobs to be taken over by Solution Architect
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="text-gray-700 text-sm">May 21, 2020</div>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg hover:bg-gray-800 transition-colors">
                  <i class="ri-pencil-fill"></i>
                </button>
                <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-red-600 transition-colors">
                  <i class="ri-delete-bin-fill"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Orange Note Card with Star */}
          <div className="bg-orange-300 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between shadow-lg hover:transform hover:-translate-y-2 transition-transform relative">
            <button className="absolute top-4 right-4 w-10 h-10 bg-black rounded-full flex items-center justify-center text-yellow-400 text-lg">
              <i class="ri-star-s-line"></i>
            </button>
            <div className="text-xl font-semibold leading-snug text-gray-800 pr-12">
              13 Things You Should Give Up If You Want To Be a Successful UX Designer
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="text-gray-700 text-sm">May 25, 2020</div>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg hover:bg-gray-800 transition-colors">
                  <i class="ri-pencil-fill"></i>
                </button>
                <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-red-600 transition-colors">
                  <i class="ri-delete-bin-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
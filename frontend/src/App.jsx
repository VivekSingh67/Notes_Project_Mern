import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import NotesForm from './pages/notes/NotesForm';
import NotesScreen from './pages/notes/NotesScreen';
import NotesFormEdit from './pages/notes/NotesFormEdit';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={ <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notes" element={<NotesScreen />} />
        <Route path="/notesform" element={<NotesForm />} />
        <Route path="/notesformedit/:id" element={<NotesFormEdit />} />
      </Routes>

      {/* 🔥 Toast container (only once) */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App
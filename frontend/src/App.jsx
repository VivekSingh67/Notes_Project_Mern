import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage'
import LoginPage from './pages/auth/LoginPage'
import NotesForm from './pages/notes/NotesForm';
import NotesScreen from './pages/notes/NotesScreen';
import NotesFormEdit from './pages/notes/NotesFormEdit';

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
    </BrowserRouter>
  )
}

export default App
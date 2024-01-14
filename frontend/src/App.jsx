import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/Home.jsx';
import AdminPage from './pages/AdminPage.jsx';
import AdminData from './pages/AdminData.jsx';
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element = {< Home />} />
    <Route path="/login" element = {< Login />} />
      <Route path="/adminpage" element = {< AdminPage />} />
      <Route path="/admindata" element = {< AdminData />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
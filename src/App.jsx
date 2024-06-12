// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ResetPasswordForm from './components/ResetPasswordForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  )
}

export default App

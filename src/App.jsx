import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainComponent from './components/MainComponent';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  )
}

export default App

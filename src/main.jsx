import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import LandingPageApp from './landingPage/App'
// import React from 'react';
// import Typed from 'react-typed';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPageApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import LandingPageApp from './landingPage/LandingPageApp';
import PageTemplate from './PageTemplate';
import Portofolio from './portofolioPage/Portofolio';
import ScrollToTop from './portofolioPage/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path='/' element={<PageTemplate />}>
          <Route index element={<LandingPageApp />} />
          <Route path='portofolio' element={<Portofolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
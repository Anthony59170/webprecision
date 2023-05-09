import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/App';
import reportWebVitals from './tools/reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
            <Routes>
                  <Route exact path="/" element={<Home />} />
                  {/* <Route exact path="/location/:id" element={<Location />} />
                  <Route exact path="/About" element={<About />} />
                  <Route exact path="*" element={<NotFound />} /> */}
            </Routes>
      </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CorporateLayout from './layouts/CorporateLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';

function App() {
    return (
        <Routes>
            <Route path="/" element={<CorporateLayout />}>
                <Route index element={<Home />} />
                <Route path="solutions" element={<Services />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="brochure" element={<Brochure />} />
            </Route>
        </Routes>
    );
}

export default App;

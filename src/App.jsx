import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import PartnersPage from './pages/PartnersPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/industries" element={<IndustriesPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

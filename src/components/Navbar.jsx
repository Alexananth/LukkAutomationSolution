import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Products', path: '/products' },
  { title: 'Solutions', path: '/solutions' },
  { title: 'Industries', path: '/industries' },
  { title: 'Partners', path: '/partners' },
  { title: 'Careers', path: '/careers' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-milky-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-primary-accent" />
          <span className="text-xl font-bold text-text-color">Lukk Automation</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-primary-accent'
                    : 'text-text-color hover:text-primary-accent'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-text-color" /> : <Menu className="w-6 h-6 text-text-color" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-milky-white absolute w-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-semibold text-lg transition-colors duration-300 ${
                      isActive
                        ? 'text-primary-accent'
                        : 'text-text-color hover:text-primary-accent'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

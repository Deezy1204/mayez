import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Users, Trophy, Play, Star, MapPin, Clock } from 'lucide-react';
import Home from './components/Home';
import Tournaments from './components/Tournaments';
import Live from './components/Live';
import News from './components/News';

// Navigation Component
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'HOME', 'NEWS', 'TOURNAMENTS', 'CALENDAR', 'LIVE', 
    'PLAYERS', 'RULES', 'HISTORY', 'ABOUT'
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex align-items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div 
              className="text-white font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              MAYEZ<span className="text-red-500">TOURNAMENT</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 align-items-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item.toLowerCase()}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* Login/Register Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LOGIN
                </button>
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <ChevronDown className={`h-6 w-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item.toLowerCase()}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  LOGIN
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  REGISTER
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/live" element={<Live />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/players" element={<Players />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
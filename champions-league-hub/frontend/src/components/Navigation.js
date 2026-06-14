import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-champions-dark border-b border-champions-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-champions-blue">⚽</span>
              <span className="text-champions-gold">CL</span>
            </div>
            <span className="hidden md:inline text-sm">Champions League</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/" className="hover:text-champions-gold transition-colors">
                Bosh Sahifa
              </Link>
            </li>
            <li>
              <Link to="/past-matches" className="hover:text-champions-gold transition-colors">
                O'tgan O'yinlar
              </Link>
            </li>
            <li>
              <Link to="/upcoming-matches" className="hover:text-champions-gold transition-colors">
                Kelgusi O'yinlar
              </Link>
            </li>
            <li>
              <Link to="/facts" className="hover:text-champions-gold transition-colors">
                Faktlar
              </Link>
            </li>
            <li>
              <Link to="/expert-opinions" className="hover:text-champions-gold transition-colors">
                Expert Fikrlari
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-champions-gold"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li>
              <Link 
                to="/" 
                className="block py-2 hover:text-champions-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bosh Sahifa
              </Link>
            </li>
            <li>
              <Link 
                to="/past-matches" 
                className="block py-2 hover:text-champions-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                O'tgan O'yinlar
              </Link>
            </li>
            <li>
              <Link 
                to="/upcoming-matches" 
                className="block py-2 hover:text-champions-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kelgusi O'yinlar
              </Link>
            </li>
            <li>
              <Link 
                to="/facts" 
                className="block py-2 hover:text-champions-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Faktlar
              </Link>
            </li>
            <li>
              <Link 
                to="/expert-opinions" 
                className="block py-2 hover:text-champions-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Expert Fikrlari
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

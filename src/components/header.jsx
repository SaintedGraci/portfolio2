import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-slate-950/90 backdrop-blur-md border-b border-lime-400/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter cursor-pointer">
          <span className="text-lime-400">Sainted.</span>Graci<span className="text-pink-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-lime-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-6 py-2 rounded-full border-2 border-pink-500 text-pink-500 text-sm font-bold uppercase tracking-tighter hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
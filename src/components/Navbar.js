import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Impact', path: '/mission-pillars' },
    { name: 'Approach', path: '/why-approach' },
    { name: 'Inclusive Growth', path: '/inclusive-growth' },
    { name: 'Blog', path: '/blog' },
    { name: 'Awards', path: '/recognition' },
    { name: 'Join Us', path: '/join-contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ zIndex: isOpen ? 9997 : 50 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unique Asymmetric Magazine-Style Layout */}
        <div className={`hidden lg:block transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Top Row: Logo Left + Primary Nav Right */}
          <div className="flex items-center justify-between mb-3">
            {/* Logo with Tagline */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <img
                  src="/images/1000%20Women.svg"
                  alt="1000Women logo"
                  className={`transition-all duration-300 w-auto ${scrolled ? 'h-12' : 'h-20'}`}
                />
                <div className="border-l-2 border-orange-primary pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-bold text-orange-primary tracking-wide">EMPOWERING</p>
                  <p className="text-xs text-gray-600">Women in Tourism</p>
                </div>
              </motion.div>
            </Link>

            {/* Primary CTA */}
            <Link to="/join-contact">
              <motion.button
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative ${scrolled ? 'px-6 py-2 text-sm' : 'px-8 py-3'} bg-gradient-orange text-white font-bold rounded-full shadow-xl overflow-hidden group`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Movement
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </span>
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
            </Link>
          </div>

          {/* Bottom Row: Full-Width Navigation Bar with Dividers */}
          <div className={`flex items-center justify-between border-t-2 border-b-2 border-gray-100 ${scrolled ? 'py-1' : 'py-2'}`}>
            <nav className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <Link
                    to={link.path}
                    className="relative group px-4 py-2"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-orange-primary'
                          : 'text-gray-600 group-hover:text-orange-primary'
                      }`}
                    >
                      {link.name}
                    </motion.span>
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-200 origin-left"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="w-px h-4 bg-gray-200"></div>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Right Side Info */}
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-xs font-semibold text-orange-primary tracking-widest"
            >
              WHERE WOMEN RISE
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Unique Circular Menu Button */}
        <div className={`flex lg:hidden justify-between items-center transition-all duration-300 ${scrolled ? 'h-12' : 'h-20'}`}>
          <Link to="/" className="flex items-center group">
            <img src="/images/1000%20Women.svg" alt="1000Women logo" className={`${scrolled ? 'h-12' : 'h-16'} w-auto`} />
          </Link>

          {/* Unique Circular Menu Button with Icon Morphing */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full bg-gradient-orange shadow-lg flex items-center justify-center focus:outline-none overflow-hidden"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
            {/* Ripple effect */}
            <motion.div
              animate={isOpen ? { scale: [1, 1.5], opacity: [0.5, 0] } : {}}
              transition={{ duration: 0.6, repeat: isOpen ? Infinity : 0 }}
              className="absolute inset-0 bg-white rounded-full"
            />
          </motion.button>
        </div>
      </div>
    </nav>

      {/* Mobile Navigation - Unique Card-Style Slide-Up Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm"
              style={{ zIndex: 9998 }}
            />
            
            {/* Slide-up Panel */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] shadow-2xl overflow-hidden"
              style={{ zIndex: 9999, maxHeight: "85vh" }}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
              </div>

              {/* Logo at top */}
              <div className="flex justify-center py-4 border-b border-gray-200">
                <img src="/images/1000%20Women.svg" alt="1000Women" className="h-16 w-auto" />
              </div>

              {/* Menu Items as Cards */}
              <div className="px-6 py-6 space-y-3 overflow-auto" style={{ maxHeight: "calc(85vh - 140px)" }}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, type: "spring" }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <motion.div
                        whileTap={{ scale: 0.97 }}
                        className={`relative overflow-hidden rounded-2xl p-5 transition-all ${
                          isActive(link.path)
                            ? 'bg-gradient-orange text-white shadow-lg'
                            : 'bg-gradient-to-br from-orange-50 to-gray-50 text-gray-800 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">{link.name}</span>
                          <motion.svg
                            animate={{ x: isActive(link.path) ? [0, 5, 0] : 0 }}
                            transition={{ duration: 1.5, repeat: isActive(link.path) ? Infinity : 0 }}
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </div>
                        {isActive(link.path) && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="absolute bottom-0 left-0 h-1 bg-white/40"
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA Button with Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navLinks.length * 0.08 + 0.1 }}
                  className="pt-4"
                >
                  <Link to="/join-contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full relative overflow-hidden px-8 py-5 bg-gradient-to-r from-orange-primary via-orange-500 to-orange-secondary text-white font-extrabold rounded-2xl shadow-2xl text-lg flex items-center justify-center gap-3"
                    >
                      <span>Join the Movement</span>
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl"
                      >
                        ✨
                      </motion.span>
                      {/* Shimmer effect */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Bottom spacing */}
                <div className="h-4"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    // Simulate async request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEmail('');
      // auto-hide success after a few seconds
      setTimeout(() => setSubmitted(false), 3500);
    }, 900);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-primary rounded-full"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CTA Band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-orange-100 to-orange-50 py-12 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            1000Women is a movement, not a moment.
          </motion.p>
          <Link to="/join-contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Join the Movement ✨
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Main Footer Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Desktop: 4 Columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/1000%20Women.svg" alt="1000Women logo" className="h-32 w-auto" />
            </div>
            <p className="text-sm font-semibold text-orange-primary italic mb-4">
              Where Women Rise; Tourism Thrives
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Empowering 1,000 women to rise with confidence, skills, income, leadership, and community within tourism.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Mission & Pillars', path: '/mission-pillars' },
                { name: 'Our Approach', path: '/why-approach' },
                { name: 'Inclusive Growth', path: '/inclusive-growth' },
                { name: 'Join the Movement', path: '/join-contact' },
                { name: 'Blog', path: '/blog' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-orange-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Get Involved</h4>
            <ul className="space-y-3 mb-6">
              {[
                'Women in Tourism',
                'Partners & Organizations',
                'Mentors & Allies',
                'Programs & Impact',
              ].map((item, i) => (
                <li key={i}>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/join-contact"
              className="inline-flex items-center text-orange-primary font-semibold hover:text-orange-secondary transition-colors text-sm group"
            >
              Become a Partner
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>

          {/* Column 4: Contact & Connect */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contact & Connect</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-600 flex items-center text-sm">
                <span className="mr-2">📍</span>
                Sri Lanka / Global Initiative
              </p>
              <p className="text-gray-600 flex items-center text-sm">
                <span className="mr-2">📞</span>
                +94 777 725 339
              </p>
              <p className="text-gray-600 flex items-center text-sm">
                <span className="mr-2">📧</span>
                hello@1000women.lk
              </p>
            </div>

            {/* Social Icons - Minimal Line Style */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/1000women__?igsh=d2VraXo3cDZoOXRi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/company/1000women-sri-lanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.facebook.com/share/1G1MsduFdW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack with Accordions */}
        <div className="md:hidden space-y-6 mb-12">
          {/* Brand Section - Always Visible */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/1000%20Women.svg" alt="1000Women logo" className="h-28 w-auto" />
            </div>
            <p className="text-sm font-semibold text-orange-primary italic">
              Where Women Rise; Tourism Thrives
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Empowering 1,000 women to rise with confidence, skills, income, leadership, and community within tourism.
            </p>
            <Link to="/join-contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-orange text-white font-bold rounded-full shadow-md text-base"
              >
                Join the Movement ✨
              </motion.button>
            </Link>
          </div>

          {/* Quick Links - Accordion */}
          <div className="border-t border-gray-300 pt-4">
            <button
              onClick={() => toggleAccordion('quick')}
              className="flex justify-between items-center w-full text-left"
            >
              <h4 className="text-lg font-bold text-gray-800">Quick Links</h4>
              <span className="text-2xl text-gray-600">{openAccordion === 'quick' ? '−' : '+'}</span>
            </button>
            {openAccordion === 'quick' && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-4 space-y-3"
              >
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Our Mission & Pillars', path: '/mission-pillars' },
                  { name: 'Our Approach', path: '/why-approach' },
                  { name: 'Inclusive Growth', path: '/inclusive-growth' },
                  { name: 'Join the Movement', path: '/join-contact' },
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-gray-600 hover:text-orange-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Get Involved - Accordion */}
          <div className="border-t border-gray-300 pt-4">
            <button
              onClick={() => toggleAccordion('involved')}
              className="flex justify-between items-center w-full text-left"
            >
              <h4 className="text-lg font-bold text-gray-800">Get Involved</h4>
              <span className="text-2xl text-gray-600">{openAccordion === 'involved' ? '−' : '+'}</span>
            </button>
            {openAccordion === 'involved' && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-4 space-y-3"
              >
                {[
                  'Women in Tourism',
                  'Partners & Organizations',
                  'Mentors & Allies',
                  'Programs & Impact',
                ].map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm">{item}</li>
                ))}
                <li className="pt-2">
                  <Link to="/join-contact" className="text-orange-primary font-semibold text-sm">
                    Become a Partner →
                  </Link>
                </li>
              </motion.ul>
            )}
          </div>

          {/* Contact Info - Always Visible */}
          <div className="border-t border-gray-300 pt-4 space-y-3">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contact & Connect</h4>
            <p className="text-gray-600 flex items-center text-sm">
              <span className="mr-2">📍</span>
              Sri Lanka / Global Initiative
            </p>
            <p className="text-gray-600 flex items-center text-sm">
              <span className="mr-2">📞</span>
              +94 777 725 339
            </p>
            <p className="text-gray-600 flex items-center text-sm">
              <span className="mr-2">📧</span>
              hello@1000women.lk
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/1000women__?igsh=d2VraXo3cDZoOXRi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/1000women-sri-lanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/share/1G1MsduFdW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gray-400 hover:border-orange-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 rounded-3xl shadow-xl mb-12 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-orange opacity-10 rounded-full"
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              📧
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Stay Connected with 1000Women
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Get the latest updates, stories, and opportunities delivered to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-orange-200 focus:border-orange-primary focus:outline-none text-lg"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitting}
                className={`px-10 py-4 text-white font-bold rounded-full shadow-lg transition-all text-lg whitespace-nowrap ${submitting ? 'bg-gray-400' : 'bg-gradient-orange hover:shadow-xl'}`}
              >
                {submitting ? 'Sending...' : 'Subscribe ✨'}
              </motion.button>
            </form>

            <div className="mt-4">
              {!submitted && (
                <p className="text-sm text-gray-500">Join our community and never miss an update</p>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-green-50 text-green-700 font-semibold shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Thanks — you're subscribed!</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} 1000Women. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-orange-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-orange-primary transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

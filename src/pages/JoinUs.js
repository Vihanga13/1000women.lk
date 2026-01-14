import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', role: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-orange text-white py-20 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Women joining together"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Join the Movement
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-2xl text-gray-700 leading-relaxed font-semibold mb-8">
              <span className="text-orange-primary font-bold">1000Women</span> is a movement, not a moment.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We invite:
            </p>
          </motion.div>

          {/* Invitation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'Women',
                description: 'Seeking opportunity and growth in tourism',
                icon: '👩',
              },
              {
                title: 'Partners',
                description: 'Industry partners and organizations',
                icon: '🤝',
              },
              {
                title: 'Sponsors',
                description: 'Sponsor Her Journey - Support individual women',
                icon: '💝',
              },
              {
                title: 'Allies',
                description: 'Mentors, advocates and allies',
                icon: '💪',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-orange text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-lg">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              To join hands in shaping a tourism industry that thrives because women rise.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Women empowerment"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-16"
          >
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              Founder's Message
            </h2>
            <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-8 text-center border-l-4 border-orange-primary pl-6">
              "When women are empowered with confidence, skills, income, leadership and community, tourism doesn't just grow—it thrives with purpose."
            </blockquote>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-primary mb-2">
                Lashika Vithanage
              </p>
              <p className="text-lg text-gray-600">Founder | 1000Women</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Her Journey Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              💝
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Sponsor Her Journey
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Make a direct impact by sponsoring an individual woman's journey to empowerment in tourism. 
              Your support provides skills training, mentorship, and opportunities that transform lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🎓',
                title: 'Skills Training',
                description: 'Fund professional training and certification programs',
              },
              {
                icon: '👥',
                title: 'Personal Mentorship',
                description: 'Connect with and guide a woman on her career path',
              },
              {
                icon: '🚀',
                title: 'Launch Support',
                description: 'Help her start or grow her tourism business',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-orange text-white rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
            />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Become a Personal Sponsor Today
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Your contribution creates lasting change. Choose to sponsor a woman's journey and watch her thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Learn More About Sponsorship
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Sponsor Now ✨
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-8 text-center">
              Get Involved
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Fill out the form below and we'll get in touch with you soon.
            </p>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    I want to join as:
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="woman">A woman seeking opportunities</option>
                    <option value="partner">An industry partner</option>
                    <option value="sponsor">A personal sponsor (Sponsor Her Journey)</option>
                    <option value="mentor">A mentor</option>
                    <option value="ally">An ally/supporter</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="Tell us more about your interest..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-orange text-white py-4 rounded-xl text-xl font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>

              {/* Social Connect - small */}
              <div className="mt-8 flex flex-col items-center">
                <p className="text-gray-700 mb-3">Connect with us</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.instagram.com/1000women__?igsh=d2VraXo3cDZoOXRi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-orange-primary flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.linkedin.com/company/1000women-sri-lanka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-orange-primary flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" strokeWidth="2"/>
                      <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://www.facebook.com/share/1G1MsduFdW/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-orange-primary flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

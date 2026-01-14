import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Recognition = () => {
  const [selectedYear, setSelectedYear] = useState('2026');

  const years = ['2026', '2025', 'All Time'];

  const awards = [
    {
      id: 1,
      name: 'Amara Wijesinghe',
      title: 'Tourism Entrepreneur of the Year',
      achievement: 'Launched successful eco-tourism business empowering 15 local women',
      location: 'Galle, Sri Lanka',
      year: '2026',
      image: '/images/win_result.webp',
      quote: '1000Women gave me the confidence to turn my dream into reality.',
      impact: '15 women employed, 50+ families impacted',
    },
    {
      id: 2,
      name: 'Nishani Fernando',
      title: 'Community Leadership Award',
      achievement: 'Led community-based tourism project benefiting entire village',
      location: 'Kandy, Sri Lanka',
      year: '2026',
      image: '/images/win%20(2)_result.webp',
      quote: 'Through this journey, I found my voice and became a leader.',
      impact: 'Village tourism revenue increased by 200%',
    },
    {
      id: 3,
      name: 'Dilini Perera',
      title: 'Skills Excellence Award',
      achievement: 'Completed all 5 pillars training and mentored 20 women',
      location: 'Colombo, Sri Lanka',
      year: '2025',
      image: '/images/win%20(3)_result.webp',
      quote: 'The skills I learned opened doors I never knew existed.',
      impact: '20 women mentored, 100% employment rate',
    },
    {
      id: 4,
      name: 'Sanduni Silva',
      title: 'Innovation in Tourism Award',
      achievement: 'Created digital platform connecting rural homestays with tourists',
      location: 'Ella, Sri Lanka',
      year: '2025',
      image: '/images/win%20(4)_result.webp',
      quote: 'Technology and tradition can work together beautifully.',
      impact: '50+ homestays connected, $100K+ in bookings',
    },
    {
      id: 5,
      name: 'Kumari Jayawardena',
      title: 'Lifetime Achievement Award',
      achievement: '30 years in tourism, now training next generation',
      location: 'Anuradhapura, Sri Lanka',
      year: '2025',
      image: '/images/win%20(5)_result.webp',
      quote: 'Seeing young women succeed is my greatest achievement.',
      impact: '100+ women trained over 3 decades',
    },
    {
      id: 6,
      name: 'Thilini Rathnayake',
      title: 'Rising Star Award',
      achievement: 'From participant to program coordinator in just 1 year',
      location: 'Negombo, Sri Lanka',
      year: '2026',
      image: '/images/win%20(6)_result.webp',
      quote: 'I came to learn, now I help others learn too.',
      impact: 'Coordinates programs for 30+ participants',
    },
  ];

  const filteredAwards = selectedYear === 'All Time' 
    ? awards 
    : awards.filter(award => award.year === selectedYear);

  return (
    <div className="min-h-screen bg-white pt-20 relative overflow-x-hidden">
      <BackgroundAnimation />
      
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-orange text-white py-32 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Recognition%20%26%20Awards%20hero_result.webp"
            alt="Recognition & Awards header"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-8xl mb-6"
          >
            🏆
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            Recognition & Awards
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            Celebrating Successful Women Who Inspire
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Shining a Light on Success
            </h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed">
              These remarkable women have transformed their lives through dedication, courage, and the support of the 1000Women community. Their stories inspire the next generation of women leaders in tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {years.map((year, index) => (
              <motion.button
                key={year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-gradient-orange text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-primary'
                }`}
              >
                {year}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Award Winners Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <motion.article
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group"
              >
                {/* Award Badge */}
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-orange text-white p-3 rounded-full shadow-lg"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {award.location}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-primary rounded-full font-semibold">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {award.name}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-gradient-orange text-white text-sm font-bold rounded-full">
                      {award.title}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {award.achievement}
                  </p>

                  {/* Quote */}
                  <div className="bg-orange-50 p-4 rounded-xl mb-4 border-l-4 border-orange-primary">
                    <p className="text-gray-700 italic text-sm">
                      "{award.quote}"
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-orange-primary mb-2">Impact:</h4>
                    <p className="text-sm text-gray-600">{award.impact}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No awards message */}
          {filteredAwards.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No awards for this year yet</h3>
              <p className="text-gray-500">Stay tuned for upcoming recognitions!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Nomination CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-orange text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"
            />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                ⭐
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Know Someone Inspiring?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Nominate an exceptional woman for recognition in our upcoming awards
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-orange-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Submit Nomination ✨
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Recognition;

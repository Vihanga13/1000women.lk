import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const categories = ['All', 'Stories', 'Impact', 'Tourism', 'Leadership', 'Events'];

  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Women Through Tourism: A Journey Begins',
      excerpt: 'Discover how 1000Women is transforming lives through sustainable tourism initiatives and community development.',
      category: 'Stories',
      date: 'January 5, 2026',
      image: '/images/blog_result.webp',
      readTime: '5 min read',
      author: 'Team 1000Women',
      content: `
        <h2>The Beginning of a Movement</h2>
        <p>Tourism is more than just an industry it's a bridge between cultures, a source of livelihoods, and a platform for empowerment. At 1000Women, we believe that when women rise in tourism, entire communities thrive.</p>
        
        <h3>Our Vision</h3>
        <p>We started with a simple yet powerful vision: to empower 1,000 women across tourism destinations through structured training, mentorship, and community support. Each woman represents not just an individual success story, but a ripple effect of positive change.</p>
        
        <h3>The Impact So Far</h3>
        <p>In our first year, we've already seen incredible transformations. Women who started with little confidence are now running their own tourism businesses, leading community initiatives, and mentoring others. Their stories fuel our commitment to reach even more women.</p>
        
        <h3>What Makes Us Different</h3>
        <p>Our approach is holistic, focusing on five interconnected pillars: Confidence, Skills, Income, Leadership, and Community. We don't just provide training we create a support ecosystem where women can truly flourish.</p>
        
        <blockquote>"When women succeed in tourism, they don't just change their own lives they transform their families, communities, and the industry itself." - 1000Women Founder</blockquote>
        
        <h3>Join the Journey</h3>
        <p>Whether you're a woman looking to grow in tourism, a partner organization, or a supporter of our mission, there's a place for you in the 1000Women movement. Together, we can create a more inclusive, sustainable, and empowering tourism industry.</p>
      `,
    },
    {
      id: 2,
      title: 'Building Confidence: The First Pillar of Change',
      excerpt: 'Learn how we help women discover their voice and build unshakeable confidence in the tourism industry.',
      category: 'Impact',
      date: 'December 28, 2025',
      image: '/images/blog%20(2)_result.webp',
      readTime: '4 min read',
      author: 'Team 1000Women',
      content: `
        <h2>Confidence: The Foundation of Empowerment</h2>
        <p>Confidence isn't something you're born with it's something you build. At 1000Women, we've witnessed countless transformations as women discover their inner strength and professional identity.</p>
        
        <h3>Why Confidence Matters</h3>
        <p>In the tourism industry, confidence is everything. It's what allows a woman to approach tourists with warmth, negotiate fair prices, lead a team, or start her own business. Without confidence, even the most skilled individual can hold back.</p>
        
        <h3>Our Approach to Building Confidence</h3>
        <p>We use a multi-faceted approach including group workshops, one-on-one mentoring, role-playing exercises, and real-world practice opportunities. Women learn to speak up, present their ideas, and believe in their capabilities.</p>
        
        <h3>Real Stories, Real Impact</h3>
        <p>Amara, one of our participants, shared: "I used to hide in the back during meetings. Now I lead them." Her journey from silence to leadership exemplifies the power of confidence-building.</p>
        
        <h3>The Ripple Effect</h3>
        <p>When one woman gains confidence, it inspires others. We've seen this ripple effect in action confident women become role models, mentors, and advocates for change in their communities.</p>
      `,
    },
    {
      id: 3,
      title: 'Skills That Open Doors: Training for Success',
      excerpt: 'Explore our comprehensive skill development programs designed to create opportunities in tourism.',
      category: 'Tourism',
      date: 'December 20, 2025',
      image: '/images/blog%20(3)_result.webp',
      readTime: '6 min read',
      author: 'Team 1000Women',
      content: `
        <h2>Skills: The Currency of Opportunity</h2>
        <p>In today's competitive tourism industry, skills are what separate dreamers from achievers. Our comprehensive training programs equip women with the practical abilities they need to succeed.</p>
        
        <h3>Our Training Portfolio</h3>
        <ul>
          <li><strong>Service Excellence:</strong> Customer service, hospitality standards, and guest relations</li>
          <li><strong>Digital Literacy:</strong> Social media marketing, online booking systems, and digital communication</li>
          <li><strong>Business Management:</strong> Financial planning, operations, and strategic thinking</li>
          <li><strong>Communication Skills:</strong> Languages, presentation skills, and cross-cultural communication</li>
          <li><strong>Leadership Development:</strong> Team management, decision-making, and conflict resolution</li>
        </ul>
        
        <h3>Hands-On Learning</h3>
        <p>We believe in learning by doing. Our programs include internships, field trips to successful tourism businesses, and practical projects that allow women to apply their new skills immediately.</p>
        
        <h3>Certification and Recognition</h3>
        <p>All participants receive formal certification upon completion of our programs, giving them recognized credentials that boost their employability and credibility in the industry.</p>
        
        <h3>Continuous Learning</h3>
        <p>Skills development doesn't stop after initial training. We offer ongoing workshops, webinars, and advanced courses to help women stay current with industry trends and continue growing.</p>
      `,
    },
    {
      id: 4,
      title: 'Women as Leaders: Changing the Tourism Landscape',
      excerpt: 'Meet the inspiring women who are leading the way and transforming their communities through tourism.',
      category: 'Leadership',
      date: 'December 15, 2025',
      image: '/images/blog%20(4)_result.webp',
      readTime: '7 min read',
      author: 'Team 1000Women',
      content: `
        <h2>Leadership: Rising to the Challenge</h2>
        <p>True empowerment means creating leaders, not just followers. The women in our program are proving that leadership isn't about titles oklkit's about taking initiative, inspiring others, and driving positive change.</p>
        
        <h3>Profiles in Leadership</h3>
        <p><strong>Nishani's Story:</strong> From a quiet participant to leading a community tourism initiative that's transformed her entire village. She now employs 15 women and has increased village tourism revenue by 200%.</p>
        
        <p><strong>Dilini's Journey:</strong> After completing all five pillars of training, she became a mentor to 20 other women. Her approach combines technical skills with emotional support, creating a nurturing learning environment.</p>
        
        <h3>What Makes a Leader?</h3>
        <p>Through our leadership development program, we've identified key traits that successful women leaders in tourism share: resilience, empathy, strategic thinking, and a commitment to lifting others as they rise.</p>
        
        <h3>Leadership in Action</h3>
        <p>Our leaders don't just manage they innovate. They're creating new tourism products, establishing cooperatives, advocating for policy changes, and mentoring the next generation of women in tourism.</p>
        
        <h3>The Future is Female Leadership</h3>
        <p>As more women take on leadership roles in tourism, we're seeing a shift toward more inclusive, sustainable, and community-centered approaches to tourism development. This is the future we're building together.</p>
      `,
    },
    {
      id: 5,
      title: 'Community Tourism: Creating Sustainable Livelihoods',
      excerpt: 'How community-based tourism initiatives are providing sustainable income for 1000 women.',
      category: 'Tourism',
      date: 'December 10, 2025',
      image: '/images/blog%20(5)_result.webp',
      readTime: '5 min read',
      author: 'Team 1000Women',
      content: `
        <h2>Community Tourism: Power of Collective Action</h2>
        <p>When tourism development is community-led and community-owned, everyone benefits. Our community tourism initiatives are creating sustainable livelihoods while preserving cultural heritage and natural resources.</p>
        
        <h3>The Community Tourism Model</h3>
        <p>Community-based tourism puts local people in control of tourism development in their area. Women play central roles as homestay hosts, cultural guides, artisan producers, and decision-makers in community tourism enterprises.</p>
        
        <h3>Success Stories</h3>
        <p>In Kandy, a women's cooperative now operates a successful village tourism circuit that includes homestays, cooking classes, and nature walks. The women earn fair incomes while maintaining control over how tourism develops in their community.</p>
        
        <h3>Environmental and Cultural Preservation</h3>
        <p>Community tourism done right preserves rather than exploits. Our participants are trained in sustainable tourism practices that protect the environment and celebrate cultural traditions authentically.</p>
        
        <h3>Economic Impact</h3>
        <p>Unlike conventional tourism where profits often leave the community, community tourism keeps money circulating locally. Women invest their earnings in education, healthcare, and improving their homes and businesses.</p>
        
        <h3>Scaling Up</h3>
        <p>We're working to connect community tourism initiatives with responsible tour operators and create networks where communities can learn from each other's experiences. The goal: sustainable livelihoods for all 1000 women.</p>
      `,
    },
    {
      id: 6,
      title: 'Our First Workshop: A Milestone Celebration',
      excerpt: 'Celebrating the success of our inaugural training workshop and the incredible women who participated.',
      category: 'Events',
      date: 'December 5, 2025',
      image: '/images/blog%20(6)_result.webp',
      readTime: '4 min read',
      author: 'Team 1000Women',
      content: `
        <h2>A Historic Beginning</h2>
        <p>Every movement has a beginning. For 1000Women, that beginning was our inaugural workshop three transformative days that brought together 50 women from across Sri Lanka to learn, connect, and dream together.</p>
        
        <h3>The Workshop Experience</h3>
        <p>Over three intensive days, participants engaged in confidence-building exercises, skills training, group activities, and inspiring talks from successful women in tourism. The energy and enthusiasm were palpable from day one.</p>
        
        <h3>Participant Voices</h3>
        <blockquote>"I came to this workshop uncertain about my future. I'm leaving with a business plan and the confidence to make it happen." - Kumari, Workshop Participant</blockquote>
        
        <blockquote>"Meeting other women who share my dreams and challenges has been life-changing. We've formed a support network that will last beyond this workshop." - Sanduni, Workshop Participant</blockquote>
        
        <h3>Key Highlights</h3>
        <ul>
          <li>50 women participated from 15 different districts</li>
          <li>12 expert trainers and mentors contributed their time</li>
          <li>100% of participants reported increased confidence</li>
          <li>85% developed concrete action plans for their tourism ventures</li>
          <li>40+ new business ideas generated</li>
        </ul>
        
        <h3>What's Next</h3>
        <p>This workshop was just the beginning. Participants are now part of an ongoing mentorship program, with access to resources, networking opportunities, and continued training. We're tracking their progress and celebrating every milestone.</p>
        
        <h3>Looking Ahead</h3>
        <p>Inspired by the success of this first workshop, we're planning quarterly training sessions across different regions. Our goal: reach all 1000 women with the same transformative experience.</p>
      `,
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            src="/images/bloghero_result.webp"
            alt="Blog header"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 80 + 30,
                height: Math.random() * 80 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
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
            📖
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            Stories, Insights & Impact
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-orange text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl md:text-6xl font-bold text-gradient mb-6"
            >
              Latest Stories
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedBlog(post)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-orange text-white text-sm font-bold rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      By {post.author}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-orange-primary font-bold flex items-center"
                    >
                      Read More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No posts in this category yet</h3>
              <p className="text-gray-500">Check back soon for new content!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
            />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                ✨
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Never Miss an Update
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for the latest stories and insights
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-10 py-4 bg-white text-orange-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedBlog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedBlog(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 10000 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-primary hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-gradient-orange text-white text-sm font-bold rounded-full shadow-lg">
                  {selectedBlog.category}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <span>By {selectedBlog.author}</span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-288px)]">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-li:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-orange-primary prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-800 prose-strong:text-orange-primary"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              {/* Finish Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-primary to-orange-secondary text-white rounded-full font-semibold shadow-md"
                >
                  Finish
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;

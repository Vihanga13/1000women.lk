import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-orange-secondary to-orange-primary py-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Guidelines for using our services
          </motion.p>
        </div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-orange-primary font-semibold">Terms of Use</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8"
        >
          <div className="text-sm text-gray-500 mb-6">
            <strong>Last Updated:</strong> January 8, 2026
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to 1000Women. These Terms of Use ("Terms") govern your access to and use of our website, programs, services, and content (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission and Services</h2>
            <p className="text-gray-600 leading-relaxed">
              1000Women is dedicated to empowering women in the tourism industry through training, mentorship, networking, and advocacy. Our Services include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Educational programs and skill development workshops</li>
              <li>Mentorship and networking opportunities</li>
              <li>Career advancement resources and job placement support</li>
              <li>Community building and advocacy initiatives</li>
              <li>Access to our online platform and resources</li>
              <li>Events, conferences, and recognition programs</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Eligibility and Registration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eligibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Account Registration</h3>
                <p className="text-gray-600 leading-relaxed">
                  To access certain features of our Services, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 pl-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">User Conduct and Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              When using our Services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights and dignity of other users</li>
              <li>Use the Services only for lawful purposes</li>
              <li>Provide accurate information in applications and forms</li>
              <li>Maintain professional and respectful communication</li>
              <li>Protect confidential information shared within the community</li>
              <li>Give proper attribution when sharing content or ideas</li>
            </ul>
            
            <div className="bg-orange-50 border-l-4 border-orange-primary p-4 mt-4">
              <p className="text-gray-700 font-semibold mb-2">You agree NOT to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                <li>Harass, discriminate against, or abuse other users</li>
                <li>Post false, misleading, or defamatory content</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute spam, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Scrape or copy content without permission</li>
                <li>Use the Services for commercial purposes without authorization</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality on our website and within our Services, including but not limited to text, graphics, logos, images, videos, software, and training materials, are owned by 1000Women or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  You may access and use our content for personal, non-commercial purposes only. You may not copy, modify, distribute, sell, or create derivative works without our express written permission.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">User Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you submit content to our Services (such as testimonials, forum posts, or application materials), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display that content for the purpose of operating and promoting our Services.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  You retain ownership of your content but represent that you have all necessary rights to grant this license and that your content does not violate any third-party rights.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Program Participation</h2>
            <p className="text-gray-600 leading-relaxed">
              Participation in our programs and services is subject to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li><strong>Application and Selection:</strong> Meeting eligibility criteria and completing the application process</li>
              <li><strong>Attendance and Engagement:</strong> Active participation and meeting attendance requirements</li>
              <li><strong>Confidentiality:</strong> Respecting confidential information shared within the program</li>
              <li><strong>Code of Conduct:</strong> Adhering to program-specific rules and professional standards</li>
              <li><strong>Feedback and Evaluation:</strong> Participating in assessments and providing feedback</li>
              <li><strong>Non-Guarantee:</strong> Understanding that participation does not guarantee employment or specific outcomes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Payment and Donations</h2>
            <p className="text-gray-600 leading-relaxed">
              Some Services may require payment or donations:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>All fees are stated in the applicable currency and are subject to change with notice</li>
              <li>Payment must be made through authorized payment methods</li>
              <li>Donations are voluntary and may be tax-deductible (consult your tax advisor)</li>
              <li>Refund policies vary by program and will be clearly communicated</li>
              <li>We reserve the right to refuse or cancel services for non-payment</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Third-Party Services and Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Services may contain links to third-party websites, services, or resources. We do not endorse and are not responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>The content, accuracy, or opinions expressed on third-party sites</li>
              <li>Privacy practices of external websites</li>
              <li>Products or services offered by third parties</li>
              <li>Any damages or losses caused by your use of third-party services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your use of third-party services is at your own risk and subject to their terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Disclaimers and Limitations of Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Service "As Is"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Guarantee of Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  While we strive to provide high-quality programs and support, we do not guarantee:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 pl-4">
                  <li>Employment or career advancement outcomes</li>
                  <li>Specific skill acquisition or certification results</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Complete accuracy or reliability of content</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, 1000Women and its directors, officers, employees, and partners shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 pl-4">
                  <li>Indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or opportunities</li>
                  <li>Damages arising from your use or inability to use the Services</li>
                  <li>Damages exceeding the amount you paid to us in the past 12 months</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless 1000Women and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Content you submit or share</li>
              <li>Your conduct in connection with the Services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Harm to other users or our reputation</li>
              <li>Non-payment of fees</li>
              <li>Any other reason at our sole discretion</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You may terminate your account at any time by contacting us. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to conflict of law principles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dispute Resolution Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the event of any dispute, we encourage you to first contact us to seek an informal resolution. If we cannot resolve the dispute informally, the dispute shall be resolved through binding arbitration in accordance with the Arbitration Act of Sri Lanka.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time to reflect changes in our Services, legal requirements, or business practices. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Posting the updated Terms on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notifications for significant changes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your continued use of the Services after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">General Provisions</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and 1000Women</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent; we may assign them at any time</li>
              <li><strong>No Third-Party Beneficiaries:</strong> These Terms do not create any third-party beneficiary rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about these Terms or need to report a violation, please contact us:
            </p>
            <div className="bg-orange-50 rounded-xl p-6 space-y-3">
              <p className="text-gray-700">
                <strong className="text-orange-primary">1000Women</strong>
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📍</span>
                Sri Lanka / Global Initiative
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📞</span>
                +94 777 725 339
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:hello@1000women.lk" className="text-orange-primary hover:text-orange-secondary font-semibold">
                  hello@1000women.lk
                </a>
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-500 text-center">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </div>
        </motion.div>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;

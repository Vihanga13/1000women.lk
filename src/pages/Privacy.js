import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-orange-primary to-orange-secondary py-20 px-4 overflow-hidden"
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Your privacy matters to us
          </motion.p>
        </div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-orange-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-orange-primary font-semibold">Privacy Policy</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to 1000Women ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our programs and services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect several types of information from and about users of our website and services:
            </p>
            
            <div className="space-y-4 pl-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Information that identifies you as an individual, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 pl-4">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Professional information (job title, organization, work experience)</li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>Educational background and qualifications</li>
                  <li>Payment and financial information (for donations or program fees)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Usage Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Information about how you use our website and services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2 pl-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Click patterns and navigation paths</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Providing and managing our programs and services</li>
              <li>Communicating with you about updates, opportunities, and events</li>
              <li>Processing applications and registrations</li>
              <li>Facilitating donations and sponsorships</li>
              <li>Analyzing and improving our programs and website</li>
              <li>Sending newsletters and promotional materials (with your consent)</li>
              <li>Responding to inquiries and providing customer support</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and security threats</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li><strong>Partners and Collaborators:</strong> With tourism organizations, training providers, and other partners involved in delivering our programs (with appropriate safeguards)</li>
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., email delivery, payment processing, website hosting)</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our users and the public</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li>Encryption of sensitive data</li>
              <li>Secure server infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Rights and Choices</h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Portability:</strong> Request transfer of your information to another organization</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:hello@1000women.lk" className="text-orange-primary hover:text-orange-secondary font-semibold">hello@1000women.lk</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We take appropriate measures to ensure your information receives adequate protection.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              Thank you for trusting 1000Women with your information. Together, we are building a more inclusive and empowered tourism industry.
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

export default Privacy;

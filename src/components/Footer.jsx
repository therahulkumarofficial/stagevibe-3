import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-indigo-900 via-purple-900 to-pink-800 text-white py-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-[100px]" />
        <div className="absolute top-0 homeright-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
              Fresher's Party 2024
            </h3>
            <p className="text-indigo-200">Celebrating new beginnings!</p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Agenda', 'Photos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-indigo-200 hover:text-pink-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-pink-300">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {[Facebook, Instagram, Twitter, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-indigo-200 hover:text-pink-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-indigo-300/20 text-center">
          <p className="text-indigo-200">
            © {currentYear} Nalanda College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
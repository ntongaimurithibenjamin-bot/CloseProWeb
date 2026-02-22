import React from 'react';
import { Link } from 'react-router-dom'; 
import Ig from '../assets/ig.png'
import X from '../assets/x.png'
import Fb from '../assets/fb.png'
import L from '../assets/linked.png'
import Phn from '../assets/phn.gif'
import Gmail from '../assets/gmail.png'

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-blue-300 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-purple-400 mb-4">ClosePro</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Empowering real estate agents with premium tools for trust, verification, growth, and success.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/BenjaminMurithiNtongai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-purple-500 hover:text-purple-300"
              aria-label="Follow us on Facebook"
            >
              <img src={Fb} className='h-10 w-auto' />
            </a>
            <a
              href="https://twitter.com/closeproapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-purple-500 hover:text-purple-300"
              aria-label="Follow us on Twitter"
            >
              
              <img src={X} className='h-10 w-auto' />
              
            </a>
            <a
              href="https://linkedin.com/company/closepro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-purple-500 hover:text-purple-300"
              aria-label="Follow us on LinkedIn"
            >
              <img src={L} className='h-10 w-auto' />
            </a>
            <a
              href="https://instagram.com/closeproapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-purple-500 hover:text-purple-300"
              aria-label="Follow us on Instagram"
            >
              <img src={Ig} className='h-10 w-auto' />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listings"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                to="/agents"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/verification"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Property Verification
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Market Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Client Management
              </Link>
            </li>
            <li>
              <Link
                to="/growth"
                className="text-gray-300 hover:text-purple-400 text-sm transition-colors"
              >
                Growth Tools
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-3">
            <a
              href="tel:+254743035677"
              className="flex items-center text-gray-300 hover:text-purple-400 text-sm transition-colors"
            >
              <img src={Phn} className='h-8 w-auto rounded-2xl mr-3 ' />
              +254 743 035 677
            </a>
            <a
              href="mailto:support@closepro.com?subject=Inquiry about ClosePro App&body=Hello ClosePro Team,"
              className="flex items-center text-gray-300 hover:text-purple-400 text-sm transition-colors"
            >
              <img src={Gmail} className='h-10 w-auto' />
              support@closepro.com
            </a>
            <p className="text-sm">Nairobi, Kenya</p>
            <p className="text-sm">Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Copyright and Legal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 ClosePro Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link
            to="/privacy"
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-purple-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/cookies"
            className="hover:text-purple-400 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
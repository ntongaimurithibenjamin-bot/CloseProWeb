import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to related pages
import Footer from '../components/footer';
import Cl from '../assets/cl.png'
import  Man from '../assets/icons8-management.gif'
import  Grow from '../assets/icons8-growth.gif'
import Ver from '../assets/ver.png'

const Services = () => {
  // Static service data; extend with dynamic content via API if needed
  const services = [
    {
      id: 1,
      title: 'Property Verification',
      description: 'Ensure authenticity and compliance with comprehensive property checks, including title deeds and legal status verification.',
      icon: Man, // Emoji placeholder; replace with SVG icons
      link: '/verification', // Sub-route or external demo
      features: ['Title Deed Validation', 'Legal Compliance Audit', 'Fraud Detection'],
    },
    {
      id: 2,
      title: 'Market Analytics',
      description: 'Access real-time market insights, trend analysis, and predictive data to inform strategic real estate decisions.',
      icon: '📊',
      link: '/analytics',
      features: ['Price Trend Reports', 'Neighborhood Insights', 'Investment Forecasting'],
    },
    {
      id: 3,
      title: 'Client Management',
      description: 'Streamline client relationships with CRM tools tailored for real estate agents, including lead tracking and communication automation.',
      icon: '👥',
      link: '/clients',
      features: ['Lead Pipeline Management', 'Automated Follow-Ups', 'Client Portal Access'],
    },
    {
      id: 4,
      title: 'Growth Tools',
      description: 'Drive business expansion with marketing automation, lead generation, and performance analytics designed for agent success.',
      icon: '📈',
      link: '/growth',
      features: ['Marketing Campaign Builder', 'Lead Generation Widgets', 'ROI Tracking Dashboard'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how ClosePro empowers real estate agents with premium tools for trust, verification, growth, and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                 <img
                  src={services.icon}
                  alt={services.title}
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-500">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-flex items-center text-purple-600 hover:text-purple-500 font-medium text-sm transition-colors"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Real Estate Practice?</h2>
          <p className="text-purple-100 mb-6">Join thousands of agents using ClosePro to close deals faster.</p>
          <Link
            to="/pricing"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation to individual listing details
import Appt from '../assets/appt.png';
import Appt1 from '../assets/appt1.png'
import Appt2 from '../assets/appt2.png'
import Footer from '../components/footer';


const Listings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Static sample data; replace with API fetch in production
  const listings = [
    {
      id: 1,
      title: 'Modern Apartment in Westlands',
      price: '$250,000',
      location: 'Westlands, Nairobi',
      beds: 2,
      baths: 1,
      sqft: 850,
      image: Appt, // Placeholder image
      description: 'Spacious 2-bedroom unit with city views and amenities.',
    },
    {
      id: 2,
      title: 'Luxury Villa in Karen',
      price: '$1,200,000',
      location: 'Karen, Nairobi',
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: Appt1,
      description: 'Elegant 4-bedroom villa on a private plot with pool.',
    },
    {
      id: 3,
      title: 'Cozy Townhouse in Kilimani',
      price: '$180,000',
      location: 'Kilimani, Nairobi',
      beds: 3,
      baths: 2,
      sqft: 1200,
      image: Appt2,
      description: 'Affordable 3-bedroom townhouse near shopping centers.',
    },
    // Add more listings as needed
  ];

  // Filter listings based on search term
  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pink-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Listings</h1>
        <p className="text-gray-600 mb-6">Discover premium real estate opportunities in Nairobi and beyond.</p>
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by title or location..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            to="/advanced-search"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Advanced Search
          </Link>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <Link key={listing.id} to={`/listing/${listing.id}`} className="block"> {/* Link to detail page */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{listing.title}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-1">{listing.price}</p>
                  <p className="text-sm text-gray-500 mb-4">{listing.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{listing.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{listing.beds} Beds</span>
                    <span>{listing.baths} Baths</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No listings found. Try adjusting your search.</p>
          </div>
        )}
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Listings;
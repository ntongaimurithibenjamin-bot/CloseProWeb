import React from 'react';
import { Link } from 'react-router-dom'; // Import for navigation
import Logo from '../assets/favicon-real.png';
import Acc from '../assets/account.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-20 mt-20 mb-22 bg-fuchsia-800 p-4 shadow-lg"> 
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="ClosePro Logo" className="h-13 w-auto" /> 
        <h1 className="font-mono text-2xl text-white"> 
          Close<strong className="text-blue-300">Pro</strong> 
        </h1>
      </div>

      <div className="hidden md:flex items-center space-x-6"> 
        <Link to="/vision" className="text-gray-300 hover:text-emerald-300 text-sm font-medium transition-colors">Vision</Link>
        <Link to="/agents" className="text-gray-300 hover:text-emerald-300 text-sm font-medium transition-colors">Get Agents</Link>
        <Link to="/team" className="text-gray-300 hover:text-emerald-300 text-sm font-medium transition-colors">Team</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/signIn" className="flex items-center space-x-2 hover:text-emerald-300 transition-colors"> 
          <img src={Acc} alt="Account Icon" className="h-6 w-auto" /> 
          <span className="text-blue-300 font-bold font-sans text-sm">Sign In</span> 
        </Link>
        <Link to="/get-started"> 
          <button className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white font-bold font-sans px-4 py-2 rounded-lg shadow-md transition-colors">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
 
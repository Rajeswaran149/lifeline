import React from 'react';

function Footer() {
  return (
    <footer className="hidden md:flex justify-center items-center bg-red-500 text-white py-3 rounded-md w-full relative bottom-0 m-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className='m-1'>&copy; Copyright 2024 our Company</p>
        <div className="flex space-x-4">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          {/* Social media icons */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
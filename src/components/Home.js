/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = ['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'];

 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Lines and Dots */}
          <defs>
            <style>
              {`
                .line { stroke: #e5e7eb; stroke-width: 1; fill: none; opacity: 0.5; }
                .dot { fill: #9ca3af; opacity: 0.6; }
                .animate-line1 { animation: moveLine1 20s linear infinite; }
                .animate-line2 { animation: moveLine2 25s linear infinite; }
                .animate-dot { animation: moveDot 15s ease-in-out infinite; }
                
                @keyframes moveLine1 {
                  0%, 100% { transform: translateX(0) translateY(0); }
                  50% { transform: translateX(50px) translateY(-30px); }
                }
                
                @keyframes moveLine2 {
                  0%, 100% { transform: translateX(0) translateY(0); }
                  50% { transform: translateX(-30px) translateY(50px); }
                }
                
                @keyframes moveDot {
                  0%, 100% { transform: translateY(0); opacity: 0.6; }
                  50% { transform: translateY(-20px); opacity: 0.8; }
                }
              `}
            </style>
          </defs>
          
          {/* Network Lines */}
          <g className="animate-line1">
            <line x1="100" y1="200" x2="300" y2="100" className="line" />
            <line x1="300" y1="100" x2="500" y2="150" className="line" />
            <line x1="500" y1="150" x2="700" y2="80" className="line" />
          </g>
          
          <g className="animate-line2">
            <line x1="150" y1="400" x2="350" y2="300" className="line" />
            <line x1="350" y1="300" x2="550" y2="350" className="line" />
            <line x1="550" y1="350" x2="750" y2="280" className="line" />
          </g>
          
          {/* Animated Dots */}
          <circle cx="100" cy="200" r="4" className="dot animate-dot" />
          <circle cx="300" cy="100" r="3" className="dot animate-dot" style={{animationDelay: '2s'}} />
          <circle cx="500" cy="150" r="3" className="dot animate-dot" style={{animationDelay: '4s'}} />
          <circle cx="700" cy="80" r="4" className="dot animate-dot" style={{animationDelay: '6s'}} />
          
          <circle cx="150" cy="400" r="3" className="dot animate-dot" style={{animationDelay: '1s'}} />
          <circle cx="350" cy="300" r="4" className="dot animate-dot" style={{animationDelay: '3s'}} />
          <circle cx="550" cy="350" r="3" className="dot animate-dot" style={{animationDelay: '5s'}} />
          <circle cx="750" cy="280" r="4" className="dot animate-dot" style={{animationDelay: '7s'}} />
          
          {/* Additional network elements */}
          <circle cx="800" cy="600" r="3" className="dot animate-dot" style={{animationDelay: '8s'}} />
          <circle cx="200" cy="700" r="4" className="dot animate-dot" style={{animationDelay: '9s'}} />
          <circle cx="600" cy="500" r="3" className="dot animate-dot" style={{animationDelay: '10s'}} />
        </svg>
      </div>

      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D </span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Dennis</h1>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation using react-scroll */}
<nav className="hidden md:flex space-x-8">
  {menuItems.map((item) => (
    // eslint-disable-next-line react/jsx-no-undef
    <Link
      key={item}
      to={item.toLowerCase()}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass="active"
      className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
    >
      {item}
    </Link>
  ))}
</nav>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
             {menuItems.map((item) => (
  // eslint-disable-next-line react/jsx-no-undef
  <Link
    key={item}
    to={item.toLowerCase()}
    smooth={true}
    duration={500}
    spy={true}
    offset={-80}
    activeClass="active"
    onClick={() => setIsMenuOpen(false)}
    className="block w-full text-left py-2 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  >
    {item}
  </Link>
))}

            </div>                           
          </div>
        )}
      </header>





 <main className="relative z-10 pt-20">
  {/* Hero Section */}
  <section className="relative z-10 py-20 px-6 md:px-12 bg-white">
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      
      {/* Left Content */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          I'm Dennis <span className="text-orange-500">musa</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 leading-snug">
          I Am Into <span className="text-red-600 font-semibold">Web Development</span>
        </p>

        {/* Social Links - Centered under the text */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <a href="https://www.linkedin.com/feed/" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition duration-300" title="LinkedIn">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="https://github.com/dennismusa" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition duration-300" title="GitHub">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://github.com/dennismusa" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition duration-300" title="Twitter">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://github.com/dennismusa" className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition duration-300" title="Telegram">
            <i className="fab fa-telegram-plane text-xl"></i>
          </a>
          <a href="https://github.com/dennismusa" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition duration-300" title="Instagram">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://github.com/dennismusa" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition duration-300" title="Portfolio">
            <i className="fas fa-code text-xl"></i>
          </a>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/images/profile.png"
          alt="Dennis Musa"
          className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] object-cover rounded-full border-[10px] border-white shadow-2xl hover:scale-105 transform transition duration-300"
        />
      </div>
    </div>
  </section>
</main>


            {/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-black">👤</span> About <span className="text-purple-600">Me</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <img
          src="/profile.png" // <-- Replace with your actual image path
          alt="My Profile"
          className="w-80 h-80 object-cover rounded-full shadow-xl"
        />
      </div>

      {/* Right Side - About Text */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate web developer with expertise in modern JavaScript frameworks and technologies.
          I love creating user-friendly applications that solve real-world problems and bring ideas to life through code.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          With a strong foundation in both front-end and back-end development, I enjoy the entire process of
          building web applications - from concept and design to deployment and maintenance.
        </p>
        <p className="text-lg text-gray-600">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
          or sharing knowledge with the developer community.
        </p>
      </div>
    </div>
  </div>
  
</section>


       

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
              <p className="text-lg text-gray-600">Technologies and tools I work with</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git', 'MongoDB', 'Express.js'].map((skill) => (
                <div key={skill} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="font-semibold text-gray-900">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">Let's work together on your next project</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-sm md:text-base">
      &copy; 2025 <span className="font-semibold">Dennis Musa</span>. All rights reserved.
    </p>

    <div className="mt-4 flex justify-center gap-6">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>
      </footer>
    </div>
  );
};

export default Home;
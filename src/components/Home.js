/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profile from "./Images/profile.png"; // ✅ make sure it's in src/components/Images/profile.png

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Skills', 'Education', 'projects', 'Experience', 'Contact'];
   // eslint-disable-next-line no-unused-vars
  // const [repos] = useState([]);
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-sans">
      {/* ===== Fixed Header ===== */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                D
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Dennis</h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-600"
                  className="cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
            <div className="px-6 py-3 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===== Hero Section ===== */}
      <main className="relative z-10 pt-28">
        <section className="relative py-20 px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Dennis Musa</span>
              </h1>
              <p className="text-xl text-gray-700">
                A passionate <span className="font-semibold text-red-500">Web Developer</span> crafting
                modern & scalable digital experiences.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <a href="https://www.linkedin.com/feed/" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a href="https://github.com/dennismusa" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="https://twitter.com/dennismusa" className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="https://telegram.com/dennismusa" className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fab fa-telegram-plane text-lg"></i>
                </a>
                <a href="https://instagram.com/dennismusa" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="/" className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition transform shadow-md">
                  <i className="fas fa-code text-lg"></i>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 blur-3xl group-hover:opacity-60 transition"></div>
                <img
                  src={profile}
                  alt="Dennis Musa"
                  className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-8 border-white shadow-2xl group-hover:scale-105 transition transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>


            {/* About Section */}


{/* About Section */}
<section id="about" className="py-20 bg-[#7382AD]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1D347A] mb-4">
        <span className="text-black">👤</span> About{" "}
        <span className="text-[#7382AD]">Me</span>
      </h2>
      <div className="w-24 h-1 bg-[#C7B7B3] mx-auto rounded-full"></div>
    </div>

    {/* Grid Layout */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Profile Image */}
      <div className="flex justify-center">
        <img
          src={profile}
          alt="My Profile"
          className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-[#C7B7B3] hover:scale-105 transform transition duration-300"
        />
      </div>

      {/* Right Side - About Text */}
      <div className="bg-white p-8 rounded-xl shadow-md border-l-8 border-[#1D347A]">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I'm a passionate{" "}
          <span className="text-[#1D347A] font-semibold">Web Developer</span>{" "}
          with expertise in modern JavaScript frameworks and technologies.  
          I love creating{" "}
          <span className="text-[#7382AD]">user-friendly</span> applications
          that solve real-world problems and bring ideas to life through code.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          With a strong foundation in both{" "}
          <span className="text-[#1D347A]">front-end</span> and{" "}
          <span className="text-[#1D347A]">back-end</span> development,  
          I enjoy the entire process of building web applications — from
          concept and design to deployment and maintenance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies,
          contributing to
          <span className="text-[#7382AD]"> open-source projects</span>, or
          sharing knowledge with the developer community.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="py-20 bg-[#F2ECE8]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-[#1D347A] mb-4">Technical Skills</h2>
    <p className="text-lg text-gray-700">A glimpse into my toolbox of technologies and skills.</p>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      
      {/* Frontend Development */}
      <div className="bg-[#1D347A] text-white p-8 rounded-xl shadow-lg border border-[#C7B7B3] text-left">
        <h3 className="text-2xl font-semibold mb-6">🎨 Frontend Development</h3>
        <ul className="space-y-3">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
        </ul>
      </div>

      {/* Backend Development */}
      <div className="bg-[#1D347A] text-white p-8 rounded-xl shadow-lg border border-[#C7B7B3] text-left">
        <h3 className="text-2xl font-semibold mb-6">⚙️ Backend Development</h3>
        <ul className="space-y-3">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      {/* DevOps & Tools */}
      <div className="bg-[#7382AD] text-white p-8 rounded-xl shadow-lg border border-[#C7B7B3] text-left">
        <h3 className="text-2xl font-semibold mb-6">🛠 DevOps & Tools</h3>
        <ul className="space-y-3">
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Azure DevOps</li>
          <li>AWS</li>
        </ul>
      </div>

      {/* Data & Analytics */}
      <div className="bg-[#7382AD] text-white p-8 rounded-xl shadow-lg border border-[#C7B7B3] text-left">
        <h3 className="text-2xl font-semibold mb-6">📊 Data & Analytics</h3>
        <ul className="space-y-3">
          <li>Elasticsearch</li>
          <li>Kibana</li>
          <li>KQL (Kibana Query Language)</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* Education Section */}
<section id="education" className="py-20 bg-[#7382AD]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-[#1D347A] mb-12">
      🎓 Education
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Degree */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-[#1D347A]">
          Bachelor’s Degree in Software Development
        </h3>
        <p className="text-gray-600 mt-2">
          Zetech University
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Completed
        </p>
      </div>

      {/* Diploma */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-[#1D347A]">
          Diploma in Software Development
        </h3>
        <p className="text-gray-600 mt-2">
          Zetech University
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Completed
        </p>
      </div>

      {/* High School */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-[#1D347A]">
          Kenya Certificate of Secondary Education (KCSE)
        </h3>
        <p className="text-gray-600 mt-2">
          High School Education
        </p>
      </div>

    </div>
  </div>
</section>



{/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#1D347A] mb-14">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* 1. NCDO Website */}
      <div className="bg-[#F2ECE8] rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#7382AD]">
            NCDO Website
          </h3>

          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            React
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-6">
          Official NCDO website project built using modern web technologies.
        </p>

        <div className="flex items-center justify-between">
          <a
            href="https://github.com/dennismusa/ncdo-website"
            target="_blank"
            rel="noreferrer"
            className="text-[#1D347A] font-semibold hover:text-blue-600"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* 2. Smart Farm */}
      <div className="bg-[#F2ECE8] rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#7382AD]">
            Smart Farm System
          </h3>

          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            IoT / Web
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-6">
          Smart farming system designed to improve agricultural monitoring and efficiency.
        </p>

        <div className="flex items-center justify-between">
          <a
            href="https://github.com/dennismusa/smartfarm"
            target="_blank"
            rel="noreferrer"
            className="text-[#1D347A] font-semibold hover:text-blue-600"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* 3. Hospital Analysis */}
      <div className="bg-[#F2ECE8] rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#7382AD]">
            Hospital Analysis System
          </h3>

          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            Data / Analytics
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-6">
          Data analysis system for hospital insights and decision-making support.
        </p>

        <div className="flex items-center justify-between">
          <a
            href="https://github.com/dennismusa/hosptal-analysis"
            target="_blank"
            rel="noreferrer"
            className="text-[#1D347A] font-semibold hover:text-blue-600"
          >
            View Project →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>




{/* Experience Section */}
<section id="experience" className="py-20 bg-[#F2ECE8]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-[#1D347A] mb-12">
      🚀 Experience
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-[#1D347A]">
          Web Development Projects
        </h3>
        <p className="text-gray-700">
          Worked on academic, freelance, and personal projects including an obituary management
          platform and a personal portfolio website.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-[#1D347A]">Skills</h3>
        <p className="text-gray-700">
          Proficient in HTML, CSS, JavaScript, React, Node.js, MySQL, TailwindCSS, and Git version
          control.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-[#7382AD] mb-4">
        📩 Get In Touch
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
    </div>

    <div className="flex flex-col md:flex-row md:gap-12 justify-center items-start">
      
      {/* Contact Info */}
      <div className="mb-10 md:mb-0 md:w-1/3 bg-[#F9F9F9] shadow-lg rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#1D347A] mb-6">Contact Info</h3>
        <p className="text-gray-700 mb-4"><strong>Email:</strong> dennismusa58@gmail.com</p>
        <p className="text-gray-700 mb-4"><strong>Phone:</strong> +254 793878019</p>
        <p className="text-gray-700"><strong>Location:</strong> Nairobi, Kenya</p>
      </div>

      {/* Contact Form */}
      <div className="md:w-2/3 bg-[#F9F9F9] shadow-lg rounded-xl p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D347A] focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D347A] focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D347A] focus:border-transparent transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1D347A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7382AD] transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

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
      <a href="https://github.com/dennismusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/dennismusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://twitter.com/dennismusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-xl" title="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>
      </footer>
    </div>
  );
};

export default Home;
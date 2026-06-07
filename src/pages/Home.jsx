import { PROFILE } from "../constants";
import { RiArrowRightUpLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiDownloadLine } from "@remixicon/react";
import NewDanishImage from "../assets/NewDanish.jpg";
import NutriScanVideo from "../assets/Nutri.mp4";
import CodeSwapVideo from "../assets/CodeSwap.mp4";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [stats, setStats] = useState({ projects: 0, skills: 0, experience: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Animate counters
    const intervals = [];
    intervals.push(
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          projects: prev.projects < 9 ? prev.projects + 1 : 9
        }));
      }, 80)
    );
    intervals.push(
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          skills: prev.skills < 22 ? prev.skills + 1 : 22
        }));
      }, 50)
    );
    intervals.push(
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          experience: prev.experience < 2 ? prev.experience + 0.5 : 2
        }));
      }, 150)
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6 bg-gradient-to-br from-gray-950 via-slate-900 to-black px-4 py-16 relative overflow-hidden">
      {/* Enhanced animated background elements with dark accent */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-32 right-5 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_2px)] [background-size:24px_24px] opacity-10"></div>
      
      {/* Floating particles with enhanced aesthetics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-gray-600 to-slate-600 opacity-10"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${Math.floor(Math.random() * 3) + 1} ${Math.random() * 15 + 10}s infinite ease-in-out`
            }}
          ></div>
        ))}
      </div>
      
      <div className="mt-8 lg:mt-16 text-center z-10 max-w-4xl w-full">
        {/* Profile image with outer appearance effect */}
        <div className="relative inline-block group mb-12">
          {/* Outer glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-slate-700 to-gray-700 rounded-full blur-xl opacity-30"></div>
          
          {/* Main container with outer appearance effect */}
          <div className="relative z-10 w-52 h-52 md:w-60 md:h-60 rounded-full mx-auto">
            {/* Outer shadow layers for depth */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-10 bg-slate-900/40 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gray-800/60 rounded-full blur-xl"></div>
            
            {/* Image container with neumorphism effect - appears to come out */}
            <div className="relative rounded-full border-8 border-gray-800/50 shadow-neumorphism-profile overflow-hidden transform translate-y-[-10px]">
              {/* Custom hexagonal background pattern */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 via-gray-600/5 to-slate-800/10"></div>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(64, 74, 100, 0.1) 20%, rgba(64, 74, 100, 0.1) 25%, transparent 25%, transparent 35%, rgba(64, 74, 100, 0.1) 35%, rgba(64, 74, 100, 0.1) 40%, transparent 40%),
                                    radial-gradient(circle at center, rgba(64, 74, 100, 0.2) 5%, transparent 5%)`,
                  backgroundSize: '50px 50px, 20px 20px'
                }}></div>
              </div>
              <img
                src={NewDanishImage}
                alt={PROFILE.name}
                className="w-full h-full object-cover relative z-20 mix-blend-multiply"
              />
              <div className="absolute inset-0 rounded-full border-8 border-gray-700/20"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced name with sophisticated typography and neumorphism - Positioned just above the role */}
        <div className="relative mt-8 mb-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-slate-200 to-gray-300 animate-fade-in text-center whitespace-nowrap">
            {PROFILE.name}
          </h1>
        </div>
        
        {/* Enhanced role with refined styling - Positioned just below the name */}
        <div className="relative mt-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400 animate-fade-in animation-delay-500">
            {PROFILE.role}
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full"></div>
        </div>
        
        {/* Enhanced subheading with neumorphism - Positioned just below the role */}
        <div className="relative max-w-3xl px-6 py-4 rounded-2xl bg-gray-800/40 dark:bg-slate-800/60 backdrop-blur-lg border border-gray-700/50 dark:border-slate-600/50 shadow-neumorphism mb-8 mt-6 animate-fade-in animation-delay-700 mx-auto">
          <p className="text-left text-lg md:text-xl text-gray-200 dark:text-slate-100 font-medium">
            {PROFILE.subheading}
          </p>
        </div>
        
        {/* Enhanced CTA buttons with neumorphism */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 mt-6 animate-fade-in animation-delay-900">
          <a
            href="/Danish Nawaz_Webdev_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-600 hover:to-gray-700 text-white font-bold text-lg shadow-neumorphism-button hover:shadow-neumorphism-button-hover transform hover:-translate-y-1 transition-all duration-300 group border border-slate-600/50 relative overflow-hidden"
          >
            {/* Animated background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <RiDownloadLine className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:-rotate-12 relative z-10" />
            <span className="relative z-10">Download Resume</span>
            <RiArrowRightUpLine className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all relative z-10 group-hover:translate-x-1" />
          </a>
          <Link 
            to="/contact" 
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-slate-600 hover:border-slate-500 text-slate-200 hover:text-slate-100 font-bold text-lg shadow-neumorphism-button hover:shadow-neumorphism-button-hover transform hover:-translate-y-1 transition-all duration-300 group bg-gray-900/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-gray-800/80 dark:hover:bg-slate-800/80 relative overflow-hidden"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 via-slate-500/20 to-slate-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get In Touch</span>
            <RiArrowRightUpLine className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all relative z-10 group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4 mb-14">
          <a 
            href="https://github.com/DAlgoSculptor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-gray-300 dark:text-slate-300 hover:text-slate-100 dark:hover:text-white transform hover:-translate-y-1"
          >
            <RiGithubLine className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/danish-nawaz-475654254/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-gray-300 dark:text-slate-300 hover:text-slate-100 dark:hover:text-white transform hover:-translate-y-1"
          >
            <RiLinkedinLine className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/DanishNawaz0009" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-gray-300 dark:text-slate-300 hover:text-slate-100 dark:hover:text-white transform hover:-translate-y-1"
          >
            <RiTwitterXLine className="w-6 h-6" />
          </a>
        </div>
        
        {/* Interactive Stats Section */}
        <div className="mt-8 mb-12 grid grid-cols-3 gap-6 max-w-2xl w-full animate-fade-in animation-delay-1100">
          {/* <div className="p-6 bg-gray-800/50 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
              {stats.projects}+
            </div>
            <p className="text-gray-400 dark:text-slate-400 mt-2 text-sm font-medium">Projects Built</p>
          </div> */}
          {/* <div className="p-6 bg-gray-800/50 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-500 transition-all duration-300">
              {stats.skills}+
            </div>
            <p className="text-gray-400 dark:text-slate-400 mt-2 text-sm font-medium">Skills Mastered</p>
          </div> */}
          {/* <div className="p-6 bg-gray-800/50 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text group-hover:from-emerald-400 group-hover:to-green-500 transition-all duration-300">
              {stats.experience.toFixed(1)}+
            </div>
            <p className="text-gray-400 dark:text-slate-400 mt-2 text-sm font-medium">Years Experience</p>
          </div> */}
        </div>
        
        <div className="mt-12 mb-16 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl w-full animate-fade-in animation-delay-1300">
          <Link to="/projects" className="p-6 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-center group transform hover:-translate-y-2 relative overflow-hidden">
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-slate-700 dark:from-gray-700/50 dark:to-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-gray-600 group-hover:to-slate-600 dark:group-hover:from-gray-600/60 dark:group-hover:to-slate-600/60 transition-all duration-300 shadow-neumorphism-inner group-hover:scale-110">
                <svg className="w-7 h-7 text-slate-200 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-100 dark:text-white group-hover:text-slate-200 dark:group-hover:text-slate-100 transition-colors duration-300">Projects</h3>
              <p className="text-sm text-gray-400 dark:text-slate-400 mt-2">View my work</p>
            </div>
          </Link>
          <Link to="/skills" className="p-6 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-center group transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-slate-700 dark:from-gray-700/50 dark:to-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-gray-600 group-hover:to-slate-600 dark:group-hover:from-gray-600/60 dark:group-hover:to-slate-600/60 transition-all duration-300 shadow-neumorphism-inner">
              <svg className="w-7 h-7 text-slate-200 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 dark:text-white group-hover:text-slate-200 dark:group-hover:text-slate-100 transition-colors duration-300">Skills</h3>
            <p className="text-sm text-gray-400 dark:text-slate-400 mt-2">Technical expertise</p>
          </Link>
          <Link to="/experience" className="p-6 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-center group transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-slate-700 dark:from-gray-700/50 dark:to-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-gray-600 group-hover:to-slate-600 dark:group-hover:from-gray-600/60 dark:group-hover:to-slate-600/60 transition-all duration-300 shadow-neumorphism-inner">
              <svg className="w-7 h-7 text-slate-200 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 dark:text-white group-hover:text-slate-200 dark:group-hover:text-slate-100 transition-colors duration-300">Experience</h3>
            <p className="text-sm text-gray-400 dark:text-slate-400 mt-2">Professional journey</p>
          </Link>
          <Link to="/education" className="p-6 bg-gray-800/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 dark:border-slate-700/50 shadow-neumorphism-card hover:shadow-neumorphism-card-hover transition-all duration-300 text-center group transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-slate-700 dark:from-gray-700/50 dark:to-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-gray-600 group-hover:to-slate-600 dark:group-hover:from-gray-600/60 dark:group-hover:to-slate-600/60 transition-all duration-300 shadow-neumorphism-inner">
              <svg className="w-7 h-7 text-slate-200 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 dark:text-white group-hover:text-slate-200 dark:group-hover:text-slate-100 transition-colors duration-300">Education</h3>
            <p className="text-sm text-gray-400 dark:text-slate-400 mt-2">Academic background</p>
          </Link>
        </div>
        
        {/* Device Mockups Section - Positioned at the very bottom */}
        <div className="relative mt-20 mb-16 flex justify-center items-center gap-8 flex-wrap z-10 w-full px-4 animate-fade-in animation-delay-1500">
          {/* NutriScan iPhone Mockup */}
          <div className="relative flex flex-col items-center group cursor-pointer">
            <div className="w-40 h-80 bg-black rounded-3xl p-2 shadow-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transform group-hover:scale-105">
              <div className="w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden relative">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
                
                {/* iPhone Screen Content */}
                <div className="h-full w-full flex items-center justify-center p-0 m-0">
                  <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
                    <video 
                      src={NutriScanVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-200 dark:text-gray-100 group-hover:text-blue-400 transition-colors duration-300">NutriScan</h3>
              <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">AI Food Analysis</p>
            </div>
          </div>
          
          {/* NotesApp iPhone Mockup */}
          <div className="relative flex flex-col items-center group cursor-pointer">
            <div className="w-40 h-80 bg-black rounded-3xl p-2 shadow-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
              <div className="w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden relative">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
                
                {/* iPhone Screen Content */}
                <div className="pt-8 h-full flex flex-col items-center justify-center p-4">
                  <div className="bg-gradient-to-r from-slate-600 to-gray-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-md mb-1">NotesApp</h3>
                  <p className="text-slate-300 text-xs text-center">Smart note-taking</p>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-200 dark:text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">NotesApp</h3>
              <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">Task Manager</p>
            </div>
          </div>
          
          {/* CodeSwap iPhone Mockup */}
          <div className="relative flex flex-col items-center">
            <div className="w-40 h-80 bg-black rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden relative">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
                
                {/* CodeSwap Screen Content */}
                <div className="h-full w-full flex items-center justify-center p-0 m-0">
                  <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
                    <video 
                      src={CodeSwapVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-200 dark:text-gray-100">CodeSwap</h3>
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full p-3 shadow-neumorphism border-4 border-gray-900 dark:border-slate-800">
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Custom animations and neumorphism styles */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 12s infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        
        .animation-delay-1300 {
          animation-delay: 1.3s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Floating particle animations */
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 20px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 15px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -20px); }
        }
        
        /* Neumorphism styles */
        .shadow-neumorphism {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), 
                      -8px -8px 16px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism {
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3), 
                      -8px -8px 16px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-profile {
          box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15), 
                      -15px -15px 30px rgba(255, 255, 255, 0.8),
                      inset 5px 5px 10px rgba(0, 0, 0, 0.1),
                      inset -5px -5px 10px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-profile {
          box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3), 
                      -15px -15px 30px rgba(255, 255, 255, 0.05),
                      inset 5px 5px 10px rgba(0, 0, 0, 0.2),
                      inset -5px -5px 10px rgba(255, 255, 255, 0.03);
        }
        
        .shadow-neumorphism-button {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), 
                      -6px -6px 12px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-button {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), 
                      -6px -6px 12px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-button-hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-button-hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3), 
                      -4px -4px 8px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), 
                      -10px -10px 20px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), 
                      -10px -10px 20px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-card-hover {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), 
                      -6px -6px 12px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card-hover {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), 
                      -6px -6px 12px rgba(255, 255, 255, 0.05);
        }
        
        .shadow-neumorphism-inner {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-inner {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.3), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

export default Home;
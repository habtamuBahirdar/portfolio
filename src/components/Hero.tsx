import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-green-600">Habtamu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
            A fast-learning Information System Engineer proficientin
Laravel and WordPress, adept at swiftly mastering new
technologies to develop secure e-commerce platforms.
Combines 3+ years of freelance agility and digital
innovation to deliver adaptive, client-centric solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-green-600 font-medium rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/habtamuBahirdar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/habtamu-eth/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:habtamu.ayeneweth@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-6 border-white shadow-xl">
                <img 
                  src="src\pp.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-yellow-600 text-white p-2 rounded-full">
                  <code className="text-sm font-mono">{'<coder/>'}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowDown size={20} className="text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
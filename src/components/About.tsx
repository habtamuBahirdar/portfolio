import React from 'react';
import { Code, Globe, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Code size={24} className="text-green-600" />,
      title: 'Clean Code',
      description: 'I write clean, maintainable code following best practices and industry standards.'
    },
    {
      icon: <Globe size={24} className="text-yellow-600" />,
      title: 'Responsive Design',
      description: 'I create websites that look great on all devices, from mobile phones to desktop computers.'
    },
    {
      icon: <Lightbulb size={24} className="text-red-600" />,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex problems and finding elegant solutions.'
    },
    {
      icon: <Users size={24} className="text-green-600" />,
      title: 'Team Player',
      description: 'I thrive in collaborative environments and enjoy working with cross-functional teams.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a strong foundation in both front-end and back-end technologies.
            My journey in software development started 5 years ago, and I've been building digital experiences ever since.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Developer working" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-bold">5+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              I started my career as a front-end developer, focusing on creating beautiful and intuitive user interfaces.
              Over time, I expanded my skills to include back-end development, database management, and cloud services.
            </p>
            <p className="text-gray-600 mb-8">
              I'm passionate about creating software that solves real-world problems and delivers exceptional user experiences.
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1">{quality.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{quality.title}</h4>
                    <p className="text-sm text-gray-600">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
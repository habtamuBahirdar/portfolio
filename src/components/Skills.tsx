import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'PHP', level: 70 },
    { name: 'Wordpress', level: 85 },
    { name: 'Laravel', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 20 },
    { name: 'GraphQL', level: 70 },
  ];

  const otherSkills = [
    'Git/GitHub',
    'Digital Marketing',
    'Photoshop',
    'Vidoe Editing',
    'SEO',
    'UI/UX Design',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${index % 3 === 0 ? 'bg-green-600' : index % 3 === 1 ? 'bg-yellow-600' : 'bg-red-600'}`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${index % 3 === 0 ? 'bg-green-600' : index % 3 === 1 ? 'bg-yellow-600' : 'bg-red-600'}`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
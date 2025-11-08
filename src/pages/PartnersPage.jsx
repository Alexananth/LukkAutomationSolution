import React from 'react';

const partners = [
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=InnovateCorp',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=TechGiant',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=RoboSys',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=AI-Driven',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=ConnectX',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=Global Systems',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=FutureMech',
  'https://via.placeholder.com/200x80/E2DBCF/333333?text=LogicWorks',
];

const PartnersPage = () => {
  return (
    <div className="bg-milky-white py-8 md:py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-primary-accent mb-12">Collaborating with Global Innovators</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <img 
                src={partner} 
                alt={`Partner logo ${index + 1}`} 
                className="mx-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;

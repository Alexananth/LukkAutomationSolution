import React from 'react';

const industries = [
  { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1582923028402-43135219938d?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Energy', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Logistics & Warehousing', image: 'https://images.unsplash.com/photo-1586528116311-069241518858?q=80&w=1920&auto=format&fit=crop' },
  { name: 'Automotive', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1920&auto=format&fit=crop' },
];

const IndustriesPage = () => {
  return (
    <div className="py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Industries We Serve</h1>
      <div className="px-6">
        <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory">
          {industries.map((industry, index) => (
            <div key={index} className="snap-center flex-shrink-0 w-4/5 md:w-2/5 relative h-80 rounded-large overflow-hidden">
              <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="bg-primary-accent/80 p-3 rounded-large inline-block">
                  <h2 className="text-xl md:text-2xl font-bold text-white">{industry.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-500">Scroll to explore &rarr;</p>
      </div>
    </div>
  );
};

export default IndustriesPage;

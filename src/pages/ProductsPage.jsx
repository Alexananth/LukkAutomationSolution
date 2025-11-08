import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  { name: 'RoboArm-7X', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=RoboArm-7X', details: 'High-precision 7-axis robotic arm for complex assembly tasks.' },
  { name: 'SmartConveyor-Pro', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=SmartConveyor', details: 'AI-powered conveyor system with automated sorting capabilities.' },
  { name: 'VisionInspect-AI', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=VisionInspect', details: 'Advanced visual inspection system using deep learning for quality control.' },
  { name: 'AGV-FleetMaster', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=AGV-FleetMaster', details: 'Autonomous Guided Vehicle fleet management for warehouse logistics.' },
  { name: 'WeldBot-3000', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=WeldBot-3000', details: 'Robust and reliable robotic welder for heavy industrial applications.' },
  { name: 'Palletizer-Plus', image: 'https://via.placeholder.com/400x300/75C4C4/FFFFFF?text=Palletizer-Plus', details: 'Automated palletizing solution to increase end-of-line efficiency.' },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-milky-white border-2 border-primary-accent rounded-large overflow-hidden shadow-sm transition-all duration-300"
            whileHover={{ backgroundColor: '#E2FDFE', transform: 'translateY(-5px)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-text-color mb-4">{product.details}</p>
              <button className="font-semibold text-primary-accent">Learn More &rarr;</button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-20">
        <Link to="/contact">
          <motion.button
            className="px-12 py-4 bg-primary-accent text-white font-bold text-xl rounded-large shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: '#B0FCFE', color: '#333333' }}
            whileTap={{ scale: 0.95 }}
          >
            Build My Bot
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;

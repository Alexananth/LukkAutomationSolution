import React from 'react';
import { motion } from 'framer-motion';

const openings = [
  { title: 'Robotics Engineer', location: 'Singapore', type: 'Full-time' },
  { title: 'AI/ML Specialist', location: 'Remote', type: 'Full-time' },
  { title: 'Automation Technician', location: 'Singapore', type: 'Contract' },
];

const CareersPage = () => {
  return (
    <div className="bg-milky-white-alt min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Join Our Team</h1>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          We're looking for passionate innovators to help us build the future of automation. Explore our open positions and find your place at Lukk.
        </p>

        <div className="bg-milky-white rounded-large shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary-accent mb-6">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-large p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.location} &bull; {job.type}</p>
                </div>
                <motion.button
                  className="mt-4 md:mt-0 px-6 py-2 bg-primary-accent text-white font-semibold rounded-large shadow-md"
                  whileHover={{ scale: 1.05, backgroundColor: '#B0FCFE', color: '#333333' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

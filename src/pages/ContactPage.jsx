import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <div className="lg:w-2/3 bg-milky-white p-8 rounded-large shadow-lg border border-soft-highlight">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-large focus:ring-2 focus:ring-primary-accent focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-large focus:ring-2 focus:ring-primary-accent focus:outline-none" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows="6" className="w-full p-3 border border-gray-300 rounded-large focus:ring-2 focus:ring-primary-accent focus:outline-none"></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-primary-accent text-white font-bold rounded-large shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: '#B0FCFE', color: '#333333' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
        {/* Info & Map */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-soft-highlight/50 p-6 rounded-large">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-primary-accent" /><span>+65 1234 5678</span></div>
              <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-primary-accent" /><span>contact@lukk.com.sg</span></div>
              <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-primary-accent" /><span>123 Industrial Park, Singapore</span></div>
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded-large overflow-hidden">
            {/* Replace with a real map embed */}
            <img src="https://via.placeholder.com/600x400/E2DBCF/333333?text=Map+Embed" alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

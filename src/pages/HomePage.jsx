import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Bot, Settings, BrainCircuit, Factory, Zap, Utensils, Truck } from 'lucide-react';

const coreSolutions = [
  { icon: <Bot className="w-12 h-12 mx-auto text-primary-accent" />, title: 'Robotics Integration' },
  { icon: <Settings className="w-12 h-12 mx-auto text-primary-accent" />, title: 'Smart Control Systems' },
  { icon: <Cpu className="w-12 h-12 mx-auto text-primary-accent" />, title: 'IoT Monitoring' },
  { icon: <BrainCircuit className="w-12 h-12 mx-auto text-primary-accent" />, title: 'AI & Predictive Maintenance' },
];

const industries = [
    { icon: <Factory className="w-10 h-10 mx-auto text-primary-accent" />, name: 'Manufacturing' },
    { icon: <Zap className="w-10 h-10 mx-auto text-primary-accent" />, name: 'Energy' },
    { icon: <Utensils className="w-10 h-10 mx-auto text-primary-accent" />, name: 'Food & Beverage' },
    { icon: <Truck className="w-10 h-10 mx-auto text-primary-accent" />, name: 'Logistics' },
];

const partners = [
    'https://via.placeholder.com/150x60/E2DBCF/333333?text=InnovateCorp',
    'https://via.placeholder.com/150x60/E2DBCF/333333?text=TechGiant',
    'https://via.placeholder.com/150x60/E2DBCF/333333?text=RoboSys',
    'https://via.placeholder.com/150x60/E2DBCF/333333?text=AI-Driven',
    'https://via.placeholder.com/150x60/E2DBCF/333333?text=ConnectX',
];

const HomePage = () => {
  return (
    <div className="bg-milky-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://i.ibb.co/67X3xfS/lukk-automation-preview.png"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-in-a-factory-4386-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <motion.div
          className="relative z-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Empowering the Future of Industrial Automation
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">Lukk Automation Solution Pte Ltd</p>
          <Link to="/products">
            <motion.button
              className="mt-8 px-8 py-3 bg-primary-accent text-white font-bold rounded-large shadow-lg transition-transform transform"
              whileHover={{ scale: 1.05, backgroundColor: '#B0FCFE', color: '#333333' }}
              whileTap={{ scale: 0.95 }}
            >
              Build My Bot
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-milky-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-text-color mb-4">Your Partner in Progress</h2>
              <p className="max-w-3xl mx-auto text-lg mb-8">
                  At Lukk, we're dedicated to revolutionizing industries through intelligent automation. We combine cutting-edge technology with deep expertise to deliver solutions that drive efficiency, productivity, and growth.
              </p>
              <Link to="/about">
                  <motion.button
                      className="px-6 py-2 border-2 border-primary-accent text-primary-accent font-semibold rounded-large transition-colors"
                      whileHover={{ backgroundColor: '#E2FDFE' }}
                  >
                      Learn More About Us
                  </motion.button>
              </Link>
          </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-hover-effect/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-color mb-12">Our Core Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-milky-white p-8 rounded-large shadow-md border border-soft-highlight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {solution.icon}
                <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-milky-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-text-color mb-12">Industries We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {industries.map((industry, index) => (
                      <div key={index} className="p-6 rounded-large border border-transparent hover:border-soft-highlight hover:bg-white hover:shadow-lg transition-all">
                          {industry.icon}
                          <p className="mt-2 font-semibold">{industry.name}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Technology Partners */}
      <section className="py-20 bg-milky-white-alt">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-text-color mb-12">Collaborating with Global Innovators</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {partners.map((partner, index) => (
                      <img key={index} src={partner} alt={`Partner logo ${index + 1}`} className="h-10 md:h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                  ))}
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soft-highlight">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-text-color mb-4">Let's Stay Connected</h2>
              <p className="max-w-2xl mx-auto text-lg mb-8">
                  Have a project in mind or want to learn more? Our team is ready to help you on your automation journey.
              </p>
              <Link to="/contact">
                  <motion.button
                      className="px-8 py-3 bg-primary-accent text-white font-bold rounded-large shadow-lg"
                      whileHover={{ scale: 1.05, backgroundColor: '#B0FCFE', color: '#333333' }}
                      whileTap={{ scale: 0.95 }}
                  >
                      Contact Us
                  </motion.button>
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;

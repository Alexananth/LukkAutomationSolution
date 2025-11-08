import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Bot, Settings, BrainCircuit } from 'lucide-react';

const coreSolutions = [
  { 
    icon: <Bot />, 
    title: 'Robotics Integration', 
    image: 'https://images.unsplash.com/photo-1567443024551-f315b39ab14d?q=80&w=1974&auto=format&fit=crop' 
  },
  { 
    icon: <Settings />, 
    title: 'Smart Control Systems', 
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop' 
  },
  { 
    icon: <Cpu />, 
    title: 'IoT Monitoring', 
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    icon: <BrainCircuit />, 
    title: 'AI & Predictive Maintenance', 
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop' 
  },
];

const industries = [
    { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Energy', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1628045388135-5b8d56a6a7b7?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Logistics', image: 'https://images.unsplash.com/photo-1577412642220-56d7e366d2f3?q=80&w=2070&auto=format&fit=crop' },
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
    <>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Empowering the Future of Industrial Automation
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-light">Lukk Automation Solution Pte Ltd</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products">
                <motion.button
                  className="px-8 py-3 bg-primary-accent text-white font-bold rounded-large shadow-lg transition-transform transform w-full sm:w-auto"
                  whileHover={{ scale: 1.05, backgroundColor: '#B0FCFE', color: '#333333' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Build My Bot
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Us Summary */}
        <section className="py-12 md:py-20 bg-milky-white">
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
        <section className="py-12 md:py-20 bg-hover-effect/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-text-color mb-12">Our Core Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-large overflow-hidden shadow-lg group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={solution.image} alt={solution.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 flex items-center gap-3">
                    {React.cloneElement(solution.icon, { className: "w-8 h-8 text-secondary-accent flex-shrink-0" })}
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-12 md:py-20 bg-milky-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-text-color mb-12">Industries We Serve</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="relative rounded-large overflow-hidden shadow-md group h-56">
                            <img src={industry.image} alt={industry.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <p className="text-white text-2xl font-bold text-center">{industry.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Technology Partners */}
        <section className="py-12 md:py-20 bg-milky-white-alt">
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
        <section className="py-12 md:py-20 bg-soft-highlight">
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
    </>
  );
};

export default HomePage;

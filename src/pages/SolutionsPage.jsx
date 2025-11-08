import React from 'react';
import { Bot, Settings, Cpu, BrainCircuit } from 'lucide-react';

const solutions = [
  { icon: <Bot className="w-16 h-16 text-primary-accent" />, title: 'Robotics Integration', description: 'Seamlessly integrate advanced robotics into your existing workflows for enhanced productivity and precision. From collaborative bots to heavy-duty industrial arms, we provide end-to-end solutions.' },
  { icon: <Settings className="w-16 h-16 text-primary-accent" />, title: 'Smart Control Systems', description: 'Centralize and optimize your operations with our intelligent control systems. Gain real-time visibility and control over your entire production line through intuitive dashboards and powerful automation logic.' },
  { icon: <Cpu className="w-16 h-16 text-primary-accent" />, title: 'IoT Monitoring', description: 'Leverage the power of the Internet of Things to monitor equipment health, track assets, and optimize energy consumption. Our IoT platforms provide actionable insights from your machine data.' },
  { icon: <BrainCircuit className="w-16 h-16 text-primary-accent" />, title: 'Predictive Maintenance', description: 'Minimize downtime and reduce maintenance costs with our AI-driven predictive maintenance solutions. Our algorithms analyze sensor data to predict potential failures before they happen.' },
];

const SolutionsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Core Solutions</h1>
      <div className="space-y-12">
        {solutions.map((solution, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8 p-8 bg-hover-effect/50 rounded-large shadow-sm">
            <div className="flex-shrink-0 bg-milky-white p-6 rounded-full shadow-md">
              {solution.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-color mb-2">{solution.title}</h2>
              <p className="text-lg">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;

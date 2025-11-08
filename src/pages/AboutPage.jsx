import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-8 md:py-12">
      <div className="bg-gradient-to-r from-secondary-accent to-hover-effect p-8 md:p-12 rounded-large text-center mb-12">
        <h1 className="text-4xl font-bold text-text-color">About Lukk Automation</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-soft-highlight p-6 rounded-large">
          <h2 className="text-2xl font-bold text-primary-accent mb-4">Our Mission</h2>
          <p>To empower industries with intelligent, reliable, and scalable automation solutions that drive progress and innovation.</p>
        </div>
        <div className="bg-soft-highlight p-6 rounded-large">
          <h2 className="text-2xl font-bold text-primary-accent mb-4">Our Vision</h2>
          <p>To be a global leader in industrial automation, creating a future where human potential is amplified by robotic precision.</p>
        </div>
        <div className="bg-soft-highlight p-6 rounded-large">
          <h2 className="text-2xl font-bold text-primary-accent mb-4">Our Values</h2>
          <p>Innovation, Integrity, Collaboration, and Customer-Centricity are the pillars of our company and guide every decision we make.</p>
        </div>
      </div>
      <div className="bg-milky-white p-6 rounded-large">
        <h2 className="text-3xl font-bold text-primary-accent mb-4">A Note from Our Founder</h2>
        <p className="text-lg">"We started Lukk with a simple belief: technology should serve humanity. Our journey is about more than just building bots; it's about building a smarter, more efficient, and more sustainable future for everyone. We are excited to partner with you on this path."</p>
      </div>
    </div>
  );
};

export default AboutPage;

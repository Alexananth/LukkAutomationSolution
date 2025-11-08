import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { icon: <Twitter className="w-6 h-6" />, href: '#' },
    { icon: <Linkedin className="w-6 h-6" />, href: '#' },
    { icon: <Facebook className="w-6 h-6" />, href: '#' },
  ];

  return (
    <footer className="bg-primary-accent text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">Lukk Automation Solution</span>
            </Link>
            <p className="mt-2 text-sm">Empowering the Future of Industrial Automation.</p>
          </div>
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="transition-colors duration-300 hover:text-secondary-accent"
                aria-label={`Follow us on ${social.icon.type.displayName}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className="my-6 border-secondary-accent/50" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lukk Automation Solution Pte Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" }
  ];

  const companyInfo = {
    logo: "LOGO",
    email: "contact@example.com",
    phone: "+1 (234) 567-8900",
    address: "123 Business Street, Tech City, TC 12345"
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold hover:scale-105 transition-transform">
              {companyInfo.logo}
            </h2>
            <p className="text-gray-200">{companyInfo.address}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="hover:text-yellow-300 transition-transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <Mail className="w-5 h-5" /> {companyInfo.email}
              </p>
              <p className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <Phone className="w-5 h-5" /> {companyInfo.phone}
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="w-full p-3 rounded bg-white/10 backdrop-blur-sm outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="absolute right-2 top-2 bg-yellow-400 text-gray-900 p-1 rounded hover:bg-yellow-300 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

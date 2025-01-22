import React from "react";
import { socialLinks } from "../constants/index"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gold-300 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gold-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gold-400 transition">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-gold-300 mb-4">Contact Us</h3>
          <p className="text-sm">
            📍 Andean St, Upper Marlboro, MD, USA
          </p>
          <p className="text-sm">
            📍 Ikoyi, Lagos, Nigeria
          </p>
          <p className="mt-2 text-sm">📞 +1 (832)-703-9124</p>
          <p className="mt-2 text-sm">📞 +234 9153274095</p>
          <p className="mt-2 text-sm">✉ info@ariscreationz.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold text-gold-300 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition flex items-center gap-2"
              >
                <i className={social.icon}></i>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-purple-700 mt-8 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Ariscreationz. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { Heart, Building, PartyPopper, Calendar, Home } from "lucide-react";
import {services} from "../constants/index"

const Services = () => {
  return (
          <section id='services' className="max-w-screen-xl mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-8">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            From grand celebrations to intimate gatherings, we make every moment
            extraordinary.
            </p>
      
            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center space-y-3"
                >
                  <span className="text-6xl md:text-7xl text-purple-700">{service.icon}</span>
                  <h3 className="text-2xl font-semibold text-purple-900 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-md">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      };

export default Services
import React from "react";
import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-purple-900 mb-10 tracking-wide">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`p-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between ${
              index % 2 === 0
                ? "border-t-4 border-purple-300"
                : "border-t-4 border-gold-300"
            }`}
          >
            <p className="text-gray-700 italic leading-relaxed mb-6 relative">
              <span className="absolute text-purple-300 text-5xl -top-2 -left-4 opacity-20">
                “
              </span>
              "{testimonial.review}"
              <span className="absolute text-purple-300 text-5xl -bottom-2 -right-4 opacity-20">
                ”
              </span>
            </p>
            <div className="mt-auto">
              <h3 className="text-lg font-bold text-purple-900 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gold-400 font-medium">
                {testimonial.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;



// action="https://formspree.io/f/xnnqkrlk"

 // action="https://formspree.io/f/mrbbzqzg"
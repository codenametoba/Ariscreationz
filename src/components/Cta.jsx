import React from "react";

const Cta = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 bg-gray-50 text-center rounded-lg shadow-lg"
    >
      <h2 className="text-5xl font-bold text-purple-900 mb-6 tracking-wide">
        Let’s Bring Your Vision to Life
      </h2>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
        Ready to make your event unforgettable? Whether it’s a wedding, birthday, or corporate event, we’re here to make it happen. Take the first step and connect with us today.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#contact"
          className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition shadow-md"
        >
          Get in Touch
        </a>
        <a
          href="#services"
          className="border border-purple-700 text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-purple-100 transition shadow-md"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Cta;

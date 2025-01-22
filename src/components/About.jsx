import React from 'react';
import {motion} from 'framer-motion';


const About = () => {
  return (
    <section id='about' className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Section: Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Start hidden and slide in
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <img
          src="/IMG_7129.JPG"
          alt="About Us"
          className="w-full max-w-md lg:max-w-full rounded-3xl shadow-lg"
        />
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900">
          About ArisCreationz
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="text-purple-700 font-semibold">ArisCreationz</span>, we specialize in turning dreams into reality. 
          With years of experience in event planning, we’ve mastered the art of creating seamless, 
          memorable, and stress-free experiences for our clients.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether it's an intimate gathering or a grand celebration, our team combines creativity, 
          precision, and passion to bring your vision to life. Your moments matter, and we’re here 
          to make them extraordinary.
        </p>
        <div className="mt-6">
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="inline-block cursor-pointer text-purple-700 font-semibold text-xl  hover:text-gold-400 transition-all"
          >
            <a href='#contact'>Lets's Create Something Unforgettable Together →</a>
            </motion.div>
        </div>
        </motion.div>
    </section>

  )
}

export default About
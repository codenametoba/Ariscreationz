import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Convert form data to a JSON object
    const data = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      budget: form.budget.value,
      eventDate: form.eventDate.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mrbbzqzg", {
        // action: "https://formspree.io/f/mrbbzqzg",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form submitted successfully:", response);
        setStatus("SUCCESS");
        form.reset();
      } else {
        console.error("Form submission error:", response);
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white rounded-lg shadow-2xl"
    >
      <h2 className="text-5xl font-bold mb-8 tracking-wide">Get in Touch</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
        Ready to plan your perfect event? A consultation fee is required for
        tailored planning and decor services. Not sure about your needs yet? No
        problem—just fill out the form below and we'll guide you every step of
        the way!
      </p>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white text-purple-900 p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
          <form
            action="https://formspree.io/f/mrbbzqzg"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Full Name */}
            <div className="flex flex-col text-left">
              <label htmlFor="fullName" className="font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col text-left">
              <label htmlFor="phone" className="font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Address */}
            <div className="flex flex-col text-left">
              <label htmlFor="address" className="font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Budget */}
            <div className="flex flex-col text-left">
              <label htmlFor="budget" className="font-semibold mb-2">
                Budget
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="Enter your budget"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Event Date */}
            <div className="flex flex-col text-left">
              <label htmlFor="eventDate" className="font-semibold mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
            {/* Message */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us more about your event..."
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              ></textarea>
            </div>
            {/* Success and Error Messages */}
            {status === "SUCCESS" && (
              <p className="text-green-500 font-semibold">
                Thanks for your message! We'll get back to you soon.
              </p>
            )}
            {status === "ERROR" && (
              <p className="text-red-500 font-semibold">
                Oops! Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Payment Section */}
        <div className="w-full lg:w-1/3 bg-white text-purple-900 p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Consultation Fees</h3>
          <p className="text-sm mb-8">
            Choose one of our consultation options. Payments ensure a tailored
            and dedicated service.
          </p>
          <div className="space-y-6">
            {/* Coordination Fee */}
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h4 className="text-lg font-medium mb-3">
                Coordination Services
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pay in Naira</span>
                <a
                  href="https://square.link/u/i9kWKkLq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
                >
                  Pay ₦45,000
                </a>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">Pay in USD</span>
                <a
                  href="https://square.link/u/GwGLTkqN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-300 text-purple-900 py-2 px-4 rounded-lg hover:bg-gold-400 transition"
                >
                  Pay $25
                </a>
              </div>
            </div>

            {/* planning fee */}
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h4 className="text-lg font-medium mb-3">planning Services</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pay in Naira</span>
                <a
                  href="https://paystack.com/buy/ariscreationz-planning-consultation"
                  //           href="https://square.link/u/GwGLTkqN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
                >
                  Pay ₦45,000
                </a>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">Pay in USD</span>
                <a
                  href="https://square.link/u/GwGLTkqN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-300 text-purple-900 py-2 px-4 rounded-lg hover:bg-gold-400 transition"
                >
                  Pay $25
                </a>
              </div>
            </div>

            {/* Decor Fee */}
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h4 className="text-lg font-medium mb-3">Decor Services</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pay in Naira</span>
                <a
                  href="https://paystack.com/buy/ariscreationz-decor-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
                >
                  Pay ₦150,000
                </a>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">Pay in USD</span>
                <a
                  href="https://checkout.square.site/merchant/MLY0SVTZEK45S/checkout/WI7EP2I4HG6R4RXB4ICRFVRR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-300 text-purple-900 py-2 px-4 rounded-lg hover:bg-gold-400 transition"
                >
                  Pay $100
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

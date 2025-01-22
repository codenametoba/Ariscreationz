import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "How far in advance should I book your services?",
      answer:
        "How far in advance should I book your services? Honestly, the earlier, the better! Here’s the breakdown: For Coordination, at least a month to work our magic. For Decor, we need 3 months to make your vision come to life. For Full Planning, 6 months is ideal. That said, we’ve planned a whole wedding in less than 10 days before and still delivered! So while we love having time to finesse every details, if you’re on a tight timeline, just holler. We thrive under (reasonable) pressure!",
    },
    {
      id: 2,
      question: "What types of events do you specialize in?",
      answer:
        "We specialize in celebrations that are unforgettable, fabulous, and full of good vibes! From dreamy weddings (intimate or grand) to epic birthday parties, stylish corporate events, and even fun family gatherings, we’ve got you covered.Think luxe, think unique, think stress-free—we make it happen. Basically, if it’s worth celebrating, ARISCREATIONZ is here to make sure it’s the talk of the town (for all the right reasons).",
    },
    {
      id: 3,
      question: "Do you offer Destination Event /Wedding Planning?",
      answer:
        "Yes, we offer a comprehensive Destination Event /Wedding package starting at ₦11.8 million for clients in Nigeria and $11,000 for US. This includes all the services in our Full-Time Planning package, excluding travel expenses.How do you handle international vendors and logistics?We work closely with trusted vendors and suppliers, both locally and internationally, to ensure seamless coordination and execution of your destination event/wedding.",
    },
    {
      id: 4,
      question: "Can you work within a specific budget?",
      answer:
        "Of course! Our starting prices are there to guide you, but if you’ve got a specific budget in mind, let’s talk. Schedule a meeting, and we’ll see if we can make your vision work within your numbers. We’re all about creativity—whether it’s with decor ideas or budgets—so don’t hesitate to reach out. Who knows? We might just make magic happen together! 😉",
    },
    {
      id: 5,
      question: "What is your cancellation policy?",
      answer:
        "We understand that plans can change, and we’re here to make the process as smooth as possible. Here’s how our cancellation policy works: You have 48 hours after making your deposit to cancel and receive a full refund.After 48 hours, refunds depend on how far in advance the cancellation is made and the amount of work already completed. These details are outlined in your contract.If your event is rescheduled within 6 months of the original date, your payments may be applied toward the new date, subject to availability.Please note that consultation fees are non-refundable but will go toward your booking if you decide to move forward with us.",
    },
    {
      id: 6,
      question: "What services does ARISCREATIONZ Projects offer?",
      answer:
        "We provide a wide range of event planning and styling services, including Full-Time Planning, Luxe Decor and Styling, Day-of Coordination, Month-of Coordination, Small Intimate Weddings, and Destination Wedding Planning. Additional services such as Save-the-Date/Pre-Wedding Shoot Planning are also available.",
    },
    {
      id: 7,
      question: "What does the Full-Time Planning package include?",
      answer:
        "Our Full-Time Planning package is an all-inclusive service covering every aspect of your event, including vendor management, budget allocation, timeline creation, decor design, and on-site coordination on the event day.",
    },
    {
      id: 8,
      question: "Do you create custom decor designs?",
      answer:
        "Yes, we specialize in crafting custom decor designs tailored to your vision, theme, and color palette.",
    },
    {
      id: 9,
      question: "Are mood boards included in the consultation?",
      answer:
        "Mood boards are available as an additional service for clients who wish to visualize their event concept in detail.",
    },
    {
      id: 10,
      question: "Can I reschedule my event?",
      answer:
        "Yes, you may reschedule your event within 6 months of the original date. Please contact us for availability and rescheduling terms.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center">
      <h2 className="text-4xl font-extrabold text-purple-900 mb-8 tracking-wide">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
        Here are answers to some of the most common questions we get. If you have more, feel free to contact us!
      </p>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left p-4 flex justify-between items-center font-semibold text-purple-900 hover:text-gold-400 transition duration-300"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {openId === faq.id ? "-" : "+"}
              </span>
            </button>
            {openId === faq.id && (
              <div className="p-4 bg-white border-t border-gray-200 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;




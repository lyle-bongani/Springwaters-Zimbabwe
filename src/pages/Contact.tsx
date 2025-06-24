import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-4 flex flex-col items-center min-h-[80vh] mt-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Contact Us</h1>
      <p className="text-lg text-[#4169e1] text-center mb-10 max-w-xl">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
      <form className="w-full max-w-lg flex flex-col gap-6 bg-white/80 p-8 rounded-2xl shadow-md">
        <div>
          <label className="block text-[#0a2259] font-semibold mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169e1]" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-[#0a2259] font-semibold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169e1]" placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-[#0a2259] font-semibold mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169e1]" rows={5} placeholder="How can we help you?" />
        </div>
        <button type="submit" className="bg-[#4169e1] text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 
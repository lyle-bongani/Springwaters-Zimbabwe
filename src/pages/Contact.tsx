import React from 'react';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => (
  <>
    <Helmet>
      <title>Contact Springwaters Zimbabwe | Water Experts - Boreholes, Irrigation, Bulk Water</title>
      <meta name="description" content="Contact Springwaters for expert water solutions in Zimbabwe. Phone, email, WhatsApp, address, and a quick contact form for boreholes, irrigation, and bulk water delivery." />
      <meta name="keywords" content="contact Springwaters Zimbabwe, borehole drilling, irrigation, bulk water, water solutions" />
    </Helmet>
    {/* Hero Section */}
    <section id="about-section" className="w-full bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-500 min-h-[70vh] px-4 text-white text-center pt-[10vh] flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact Springwaters Zimbabwe</h1>
      <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto">Get in Touch with Zimbabwe's Water Experts. Whether you need a new borehole, irrigation system, or bulk water delivery, the Springwaters team is ready to assist you. Contact us today for reliable and efficient water solutions.</p>
    </section>

    {/* Contact Info Grid */}
    <section id="mission-section" className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-[#4169e1] mb-4">We're Here to Help You</h2>
          <p className="mb-4 text-[#0a2259]">At Springwaters, we believe in clear and open communication. Our dedicated team is available to answer your questions, provide expert advice, and offer customized quotes for your water projects anywhere in Zimbabwe. Choose the contact method that is most convenient for you.</p>
          <div className="mb-6">
            <h3 className="font-semibold text-[#4169e1] mb-2">Phone Numbers:</h3>
            <ul className="space-y-1 text-[#0a2259]">
              <li><span className="font-bold">Mobile (WhatsApp):</span> <a href="tel:+263772284402" className="hover:underline">+263 77 228 4402</a></li>
              <li><span className="font-bold">Mobile:</span> <a href="tel:+263712439344" className="hover:underline">+263 71 243 9344</a></li>
              <li><span className="font-bold">Office Landline:</span> <a href="tel:+263242861836" className="hover:underline">+263 24 286 1836</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[#4169e1] mb-2">Email Address:</h3>
            <a href="mailto:sales@springwaterszim.co.zw" className="text-[#0a2259] hover:underline">sales@springwaterszim.co.zw</a>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[#4169e1] mb-2">Physical & Postal Address:</h3>
            <p className="text-[#0a2259]">Business Address: 12 Larkrise Road, Borrowdale, Harare, Zimbabwe</p>
            <p className="text-[#0a2259]">Postal Address: P O BOX BW 1643, Borrowdale, Harare, Zimbabwe</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[#4169e1] mb-2">WhatsApp:</h3>
            <ul className="space-y-1 text-[#0a2259]">
              <li><span className="font-bold">Munesu Tsiga:</span> <a href="https://wa.me/263772284402" className="hover:underline">+263 772 284 402</a></li>
              <li><span className="font-bold">Dazzy Tumbu:</span> <a href="https://wa.me/263712423333" className="hover:underline">+263 712 423 333</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-[#4169e1] mb-2">Operating Hours:</h3>
            <ul className="text-[#0a2259]">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM (by appointment)</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
            <iframe
              title="Springwaters Location Map"
              src="https://www.google.com/maps?q=12+Larkrise+Road,+Borrowdale,+Harare,+Zimbabwe&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Contact Form */}
          <ContactMailtoForm />
        </div>
      </div>
    </section>
    {/* Footer CTA */}
    <section id="why-choose-section" className="w-full py-12 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-500 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Connect with Springwaters</h2>
      <p className="mb-4 text-lg md:text-xl max-w-2xl mx-auto">We look forward to hearing from you and helping you achieve reliable water access in Zimbabwe!</p>
    </section>
  </>
);

// Mailto form component
const ContactMailtoForm: React.FC = () => {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:sales@springwaterszim.co.zw?subject=${encodeURIComponent(form.subject || 'Springwaters Contact Form')}` +
      `&body=${encodeURIComponent(
        `Full Name: ${form.name}\n` +
        `Phone Number: ${form.phone}\n` +
        (form.email ? `Email: ${form.email}\n` : '') +
        (form.location ? `Location: ${form.location}\n` : '') +
        `\nMessage:\n${form.message}`
      )}`;
    window.location.href = mailto;
  };

  return (
    <form className="bg-blue-50 rounded-xl p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold text-[#4169e1] mb-2">Send Us a Message</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[#0a2259] font-semibold mb-1">Full Name</label>
          <input type="text" name="name" required placeholder="Your Full Name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1]" />
              </div>
              <div className="flex-1">
                <label className="block text-[#0a2259] font-semibold mb-1">Phone Number</label>
          <input type="tel" name="phone" required placeholder="e.g., +263 771 234 567" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1]" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[#0a2259] font-semibold mb-1">Email Address (Optional)</label>
          <input type="email" name="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1]" />
              </div>
              <div className="flex-1">
                <label className="block text-[#0a2259] font-semibold mb-1">Your Location (Optional)</label>
          <input type="text" name="location" placeholder="e.g., Borrowdale, Harare" value={form.location} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1]" />
              </div>
        </div>
        <div>
              <label className="block text-[#0a2259] font-semibold mb-1">Subject (Optional)</label>
        <input type="text" name="subject" placeholder="e.g., Borehole Drilling Inquiry" value={form.subject} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1]" />
        </div>
        <div>
              <label className="block text-[#0a2259] font-semibold mb-1">Your Message</label>
        <textarea name="message" required placeholder="Tell us about your water needs..." value={form.message} onChange={handleChange} className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#4169e1] min-h-[100px]" />
            </div>
            <button type="submit" className="mt-2 bg-[#4169e1] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition text-lg">Send Message</button>
          </form>
  );
};

export default Contact; 
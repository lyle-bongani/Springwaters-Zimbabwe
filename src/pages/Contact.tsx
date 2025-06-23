import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const Contact = () => (
    <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-8">Contact Us</h1>
            <form className="bg-gray-50 p-6 rounded shadow mb-8 space-y-4">
                <div>
                    <label className="block text-black-grey mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-black-grey mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@email.com" />
                </div>
                <div>
                    <label className="block text-black-grey mb-1">Message</label>
                    <textarea className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows={5} placeholder="How can we help you?" />
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-black-grey transition">Send Message</button>
            </form>
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary mb-2">Contact Information</h2>
                <p className="text-black-grey">Phone: +263 77 123 4567</p>
                <p className="text-black-grey">Email: info@springwaters.co.zw</p>
                <p className="text-black-grey">Address: 123 Waterway, Harare, Zimbabwe</p>
            </div>
            <div className="bg-gray-100 h-64 rounded flex items-center justify-center text-black-grey">
                [Map Placeholder]
            </div>
        </main>
        <Footer />
    </div>
);

export default Contact; 
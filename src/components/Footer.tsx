import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-[#4169e1] py-10 px-4 md:px-20 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-28 mb-3" />
                    <span className="font-bold text-lg tracking-wide">Springwaters</span>
                    <span className="text-blue-700 text-sm mt-1">Zimbabwe's Trusted Water Experts</span>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <span className="font-semibold mb-2">Quick Links</span>
                    <Link to="/" className="text-blue-700 hover:text-[#4169e1] transition mb-1">Home</Link>
                    <Link to="/about" className="text-blue-700 hover:text-[#4169e1] transition mb-1">About</Link>
                    <Link to="/process" className="text-blue-700 hover:text-[#4169e1] transition mb-1">Our Process</Link>
                    <Link to="/water-services" className="text-blue-700 hover:text-[#4169e1] transition mb-1">Water Services</Link>
                    <Link to="/contact" className="text-blue-700 hover:text-[#4169e1] transition">Contact</Link>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end">
                    <span className="font-semibold mb-2">Contact</span>
                    <span className="text-blue-700 text-sm">Harare, Zimbabwe</span>
                    <a href="tel:+263772284402" className="text-blue-700 hover:text-[#4169e1] transition text-sm">+263 77 228 4402</a>
                    <a href="mailto:sales@springwaterszim.co.zw" className="text-blue-700 hover:text-[#4169e1] transition text-sm">sales@springwaterszim.co.zw</a>
                </div>
            </div>
            <div className="border-t border-blue-200 mt-8 pt-6 text-center text-blue-700 text-xs">
                &copy; {new Date().getFullYear()} Springwaters. All rights reserved.
                <span className="mx-2">&middot;</span>
                <a href="/privacy-policy" className="hover:underline hover:text-[#4169e1] transition">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer; 
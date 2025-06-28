import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-[#4169e1] py-10 px-4 md:px-20 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-56 mb-3" />
                    <div className="flex flex-row gap-4 mt-2">
                        <a href="https://www.instagram.com/springwatersboreholedrilling?utm_source=ig_web_button_share_sheet&igsh=ejdseGI1b3J6cm5t" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            {React.createElement(FaInstagram as any, { className: "text-2xl text-[#4169e1] hover:text-pink-500 transition" })}
                        </a>
                        <a href="https://www.facebook.com/springwaterszim/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            {React.createElement(FaFacebook as any, { className: "text-2xl text-[#4169e1] hover:text-blue-600 transition" })}
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <span className="font-semibold mb-2">Quick Links</span>
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
                &copy; {new Date().getFullYear()} Springwaters.
                <span className="mx-2">&middot;</span>
                <a href="/privacy-policy" className="hover:underline hover:text-[#4169e1] transition">Privacy Policy</a>
                <span className="mx-2">&middot;</span>
                <a href="/site-map" className="hover:underline hover:text-[#4169e1] transition">Site Map</a>
                <span className="mx-2">&middot;</span>
                <a href="https://www.spemedia.co.zm" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#4169e1] transition">speMEDIA Site Design</a>
            </div>
        </footer>
    );
};

export default Footer; 
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="hero-section" className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden rounded-3xl m-4">
            {/* Background Image */}
            <img
                src={process.env.PUBLIC_URL + '/images/pics/title-image.jpg'}
                alt="hero background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1, opacity: 0.85 }}
            />
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg leading-tight">
                    Unlock Reliable Water Access Across Zimbabwe
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white drop-shadow">
                    Springwaters Zimbabwe: Borehole Drilling, Irrigation & Water Solutions
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="inline-block bg-white text-primary font-semibold px-10 py-4 rounded shadow hover:bg-black-grey hover:text-white transition-colors duration-200 text-lg"
                    >
                        Contact Us
                    </a>
                    <a
                        href="https://wa.me/263771234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-10 py-4 rounded shadow hover:bg-green-600 transition-colors duration-200 text-lg"
                        aria-label="Chat on WhatsApp"
                    >
                        {React.createElement(FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>, { className: 'text-2xl' })} WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="relative flex items-center min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/pics/hero3.jpeg')" }}>
            {/* Blue overlay for contrast */}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start text-left w-full max-w-3xl px-8 py-20 mt-10 md:mt-56 ml-[5vw]">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                    Unlock Reliable Water Access Across Zimbabwe
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-white mb-10 drop-shadow">
                    Springwaters Zimbabwe: Borehole Drilling, Irrigation & Water Solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none">
                    <a
                        href="tel:263771234567"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg justify-center w-full sm:w-auto"
                    >
                        {React.createElement(FiPhone as React.FC<React.SVGProps<SVGSVGElement>>, { className: 'text-2xl' })} Call Us
                    </a>
                    <a
                        href="https://wa.me/263772284402"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg hover:bg-green-600 justify-center w-full sm:w-auto"
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
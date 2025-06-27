import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton: React.FC = () => (
    <a
        href="https://wa.me/263772284402"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 flex items-center group"
        aria-label="Chat with us on WhatsApp"
    >
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 px-4 py-2 rounded shadow-lg mr-3 text-base font-semibold whitespace-nowrap">
            Need Help? Chat with us
        </span>
        <span className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-4xl transition-all duration-200">
            {React.createElement(FaWhatsapp as React.JSXElementConstructor<any>, { size: 40 })}
        </span>
    </a>
);

export default WhatsAppFloatingButton; 
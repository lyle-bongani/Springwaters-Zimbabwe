import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    FaSearch,
    FaTint,
    FaShieldAlt,
    FaVial,
    FaCogs,
    FaWarehouse,
    FaFish,
    FaSync,
    FaWrench,
    FaArrowCircleDown
} from 'react-icons/fa';

const boreholeServices = [
    {
        title: 'Borehole Siting',
        to: '/water-services/borehole-siting',
        Icon: FaSearch,
        desc: 'Expert groundwater surveys for optimal borehole placement.'
    },
    {
        title: 'Borehole Drilling',
        to: '/water-services/borehole-drilling',
        Icon: FaTint,
        desc: 'Professional drilling for reliable water access.'
    },
    {
        title: 'Borehole Casing',
        to: '/water-services/borehole-casing',
        Icon: FaShieldAlt,
        desc: 'Protect your borehole and ensure water purity.'
    },
    {
        title: 'Water Quality Testing',
        to: '/water-services/water-quality-testing',
        Icon: FaVial,
        desc: 'Comprehensive water analysis for safety and suitability.'
    },
    {
        title: 'Water Pump Installation',
        to: '/water-services/water-pump-installation',
        Icon: FaCogs,
        desc: 'Efficient pump installation for optimal water flow.'
    },
    {
        title: 'Water Tank Installation',
        to: '/water-services/water-tank-installation',
        Icon: FaWarehouse,
        desc: 'Secure water storage solutions for every need.'
    },
    {
        title: 'Borehole Fishing',
        to: '/water-services/borehole-fishing',
        Icon: FaFish,
        desc: 'Removal of obstructions and lost equipment from wells.'
    },
    {
        title: 'Borehole Flushing',
        to: '/water-services/borehole-flushing',
        Icon: FaSync,
        desc: 'Thorough cleaning to restore water quality and flow.'
    },
    {
        title: 'Borehole Rehabilitation',
        to: '/water-services/borehole-rehabilitation',
        Icon: FaWrench,
        desc: 'Restore and maintain borehole performance.'
    },
    {
        title: 'Borehole Deepening',
        to: '/water-services/borehole-deepening',
        Icon: FaArrowCircleDown,
        desc: 'Increase water yield by deepening existing boreholes.'
    },
];

const boreholeImages = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.07.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.03.44.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.03.43.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.03.42 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.03.42.jpeg',
];

const BoreholeServices: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Services Zimbabwe | Drilling, Siting, Pump Installation</title>
            <meta name="description" content="Explore all Borehole Services by Springwaters: siting, drilling, casing, fishing, flushing, rehabilitation, deepening, water quality testing, pump & tank installation. Serving all Zimbabwe." />
            <meta name="keywords" content="borehole services, drilling, siting, casing, water testing, pump installation, Zimbabwe" />
        </Helmet>
        {/* Top Banner */}
        <div id="about-section" className="relative w-full h-[220px] md:h-[320px] flex items-end justify-center mb-10 overflow-hidden shadow-lg">
            <img
                src="/images/pics/WhatsApp Image 2025-06-25 at 18.03.44.jpeg"
                alt="Borehole Services Banner"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-8 text-center">Borehole Services</h1>
        </div>
        <section id="mission-section" className="py-10 px-4 max-w-6xl mx-auto">
            {/* Existing summary paragraph */}
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl mx-auto">All the essential borehole services you need for reliable, clean water in Zimbabwe.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {boreholeServices.map(({ Icon, title, desc, to }, idx) => (
                    <Link
                        to={to}
                        key={idx}
                        className="relative flex flex-col items-center text-center px-6 py-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 group overflow-hidden"
                    >
                        {/* Service Number Badge */}
                        <span className="absolute top-4 left-4 bg-[#4169e1] text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20">{`0${idx + 1}`}</span>
                        {React.createElement(Icon as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-4xl text-[#4169e1] mb-3 group-hover:scale-110 transition-transform z-10" })}
                        <h2 className="text-xl font-bold text-[#0a2259] mb-2 z-10">{title}</h2>
                        <p className="text-[#0a2259] text-base mb-2 font-medium z-10">{desc}</p>
                        <span className="text-[#4169e1] font-semibold mt-2 z-10">Learn More &rarr;</span>
                    </Link>
                ))}
            </div>
            {/* Improved Intro Content Below Cards */}
            <div id="values-section" className="max-w-4xl mx-auto mt-16">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#4169e1] mb-4 text-center">Expert Borehole Services for Reliable Water Access in Zimbabwe</h2>
                <p className="text-lg text-[#0a2259] text-center mb-6 max-w-2xl mx-auto">Springwaters provides comprehensive borehole drilling, installation, and maintenance solutions across Zimbabwe, ensuring sustainable water access for your home, farm, or business.</p>
                <h3 className="text-xl font-bold text-[#4169e1] mb-2 mt-8">Your Trusted Partner for Water Security</h3>
                <p className="text-base text-[#0a2259] mb-6">In Zimbabwe, consistent access to clean water is essential. Springwaters specializes in delivering dependable borehole solutions tailored to your unique needs and local geological conditions. Our over 15 years of experience, combined with advanced technology and a dedicated team, make us the preferred choice for those seeking long-term water independence.</p>
                <h3 id="why-choose-section" className="text-xl font-bold text-[#4169e1] mb-2 mt-8">Our Comprehensive Borehole Service Spectrum</h3>
                <p className="text-base text-[#0a2259] mb-6">From initial geological surveys to the final drop of water, we manage every aspect of your borehole project with precision and expertise. Our services ensure efficiency, compliance, and lasting reliability.</p>
            </div>
        </section>
    </>
);

export default BoreholeServices; 
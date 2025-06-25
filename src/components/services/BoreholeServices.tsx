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

const BoreholeServices: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Services Zimbabwe | Drilling, Siting, Pump Installation</title>
            <meta name="description" content="Explore all Borehole Services by Springwaters: siting, drilling, casing, fishing, flushing, rehabilitation, deepening, water quality testing, pump & tank installation. Serving all Zimbabwe." />
            <meta name="keywords" content="borehole services, drilling, siting, casing, water testing, pump installation, Zimbabwe" />
        </Helmet>
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Borehole Services</h1>
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl mx-auto">All the essential borehole services you need for reliable, clean water in Zimbabwe.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {boreholeServices.map(({ Icon, title, desc, to }, idx) => (
                    <Link to={to} key={idx} className="flex flex-col items-center text-center px-6 py-8 bg-blue-50 rounded-2xl shadow hover:shadow-lg hover:bg-blue-100 transition group">
                        {React.createElement(Icon as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-4xl text-[#4169e1] mb-3 group-hover:scale-110 transition-transform" })}
                        <h2 className="text-xl font-bold text-[#0a2259] mb-2">{title}</h2>
                        <p className="text-[#0a2259] text-base mb-2 font-medium">{desc}</p>
                        <span className="text-[#4169e1] font-semibold mt-2">Learn More &rarr;</span>
                    </Link>
                ))}
            </div>
        </section>
    </>
);

export default BoreholeServices; 
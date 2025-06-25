import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaWater,
    FaSeedling,
    FaTruck,
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

const mainServices = [
    {
        Icon: FaWater,
        title: 'Borehole Services',
        desc: 'Drilling, siting, casing, pump installation, and more.',
        to: '/water-services/borehole',
    },
    {
        Icon: FaSeedling,
        title: 'Irrigation Systems',
        desc: 'Design, setup, and repair for farms, gardens, and commercial sites.',
        to: '/water-services/irrigation',
    },
    {
        Icon: FaTruck,
        title: 'Bulk Water Delivery',
        desc: 'Reliable water supply for homes, businesses, and events.',
        to: '/water-services/bulk-water-delivery',
    },
];

const individualServices = [
    { title: 'Borehole Siting', to: '/water-services/borehole-siting', Icon: FaSearch, desc: 'Groundwater surveys for optimal borehole placement.' },
    { title: 'Borehole Drilling', to: '/water-services/borehole-drilling', Icon: FaTint, desc: 'Professional drilling for reliable water access.' },
    { title: 'Borehole Casing', to: '/water-services/borehole-casing', Icon: FaShieldAlt, desc: 'Protect your borehole and ensure water purity.' },
    { title: 'Water Quality Testing', to: '/water-services/water-quality-testing', Icon: FaVial, desc: 'Comprehensive water analysis for safety and suitability.' },
    { title: 'Water Pump Installation', to: '/water-services/water-pump-installation', Icon: FaCogs, desc: 'Efficient pump installation for optimal water flow.' },
    { title: 'Water Tank Installation', to: '/water-services/water-tank-installation', Icon: FaWarehouse, desc: 'Secure water storage solutions for every need.' },
    { title: 'Borehole Fishing', to: '/water-services/borehole-fishing', Icon: FaFish, desc: 'Removal of obstructions and lost equipment from wells.' },
    { title: 'Borehole Flushing', to: '/water-services/borehole-flushing', Icon: FaSync, desc: 'Thorough cleaning to restore water quality and flow.' },
    { title: 'Borehole Rehabilitation', to: '/water-services/borehole-rehabilitation', Icon: FaWrench, desc: 'Restore and maintain borehole performance.' },
    { title: 'Borehole Deepening', to: '/water-services/borehole-deepening', Icon: FaArrowCircleDown, desc: 'Increase water yield by deepening existing boreholes.' },
];

const WaterServices: React.FC = () => {
    return (
        <>
            {/* Hero Banner */}
            <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center mb-12 rounded-3xl overflow-hidden shadow-lg">
                <img
                    src="/images/pics/title-image.jpg"
                    alt="Water Services Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#4169e1]/70" />
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-3 text-center">Our Water Services</h1>
                    <p className="text-lg md:text-xl font-medium text-center max-w-2xl mx-auto drop-shadow">Comprehensive water solutions for homes, farms, and businesses across Zimbabwe.</p>
                </div>
            </div>

            {/* Main Service Categories */}
            <section className="w-full max-w-6xl mx-auto mb-16 px-4">
                <h2 className="text-2xl font-bold text-[#4169e1] mb-2 text-center">Featured Services</h2>
                <p className="text-center text-[#0a2259] mb-8 opacity-80">Our most popular and essential water solutions for homes, farms, and businesses.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {mainServices.map(({ Icon, ...service }, idx) => (
                        <Link
                            to={service.to}
                            key={idx}
                            className="flex flex-col items-center text-center px-6 py-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-50 transition group border border-blue-100 hover:-translate-y-1"
                        >
                            {React.createElement(Icon as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-5xl text-[#4169e1] mb-4 group-hover:scale-110 transition-transform" })}
                            <h2 className="text-2xl font-bold text-[#0a2259] mb-2 group-hover:text-[#4169e1] transition-colors">{service.title}</h2>
                            <p className="text-[#0a2259] text-base mb-2 opacity-80 font-medium">{service.desc}</p>
                            <span className="text-[#4169e1] font-semibold mt-2 group-hover:underline">Learn More &rarr;</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* All Services Grid */}
            <section className="w-full max-w-6xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-[#4169e1] mb-6 text-center">All Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {individualServices.map(({ Icon, title, desc, to }, idx) => (
                        <Link
                            to={to}
                            key={idx}
                            className="flex flex-col items-center text-center px-6 py-8 bg-blue-50 rounded-2xl shadow hover:shadow-lg hover:bg-blue-100 transition group"
                        >
                            {React.createElement(Icon as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-3xl text-[#4169e1] mb-3 group-hover:scale-110 transition-transform" })}
                            <h4 className="text-lg font-bold text-[#0a2259] mb-1 group-hover:text-[#4169e1] transition-colors">{title}</h4>
                            <p className="text-[#0a2259] text-sm opacity-80 mb-1 font-medium">{desc}</p>
                            <span className="text-[#4169e1] font-semibold mt-2 group-hover:underline text-sm">Learn More &rarr;</span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WaterServices; 
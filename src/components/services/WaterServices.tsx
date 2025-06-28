import React, { useState } from 'react';
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
    FaArrowCircleDown,
    FaTimes
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
    const [search, setSearch] = useState('');
    const filteredServices = individualServices.filter(s =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.desc.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            {/* Hero Banner */}
            <div id="about-section" className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center mb-12 overflow-hidden shadow-lg pt-[15vh] rounded-b-3xl">
                <img
                    src="/images/pics/WhatsApp Image 2025-06-25 at 18.03.44.jpeg"
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
            <section id="mission-section" className="w-full max-w-6xl mx-auto mb-16 px-4">
                <h2 className="text-2xl font-bold text-[#4169e1] mb-2 text-center">Featured Services</h2>
                <p className="text-center text-[#0a2259] mb-8 opacity-80">Our most popular and essential water solutions for homes, farms, and businesses.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {mainServices.map(({ Icon, ...service }, idx) => {
                        // Pick a local image for each main service (now removed)
                    return (
                            <Link
                                to={service.to}
                                key={idx}
                                className="relative flex flex-col items-center text-center px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 group overflow-hidden"
                                style={{ minHeight: '260px', maxWidth: '340px', margin: '0 auto' }}
                            >
                                {/* Service Number Badge */}
                                <span className="absolute top-4 left-4 bg-[#4169e1] text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20">{`0${idx + 1}`}</span>
                                {React.createElement(Icon as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-5xl text-[#4169e1] mb-4 group-hover:scale-110 transition-transform z-10" })}
                                <h2 className="text-2xl font-bold text-[#0a2259] mb-2 group-hover:text-[#4169e1] transition-colors z-10">{service.title}</h2>
                                <p className="text-[#0a2259] text-base mb-2 opacity-80 font-medium z-10">{service.desc}</p>
                                <span className="text-[#4169e1] font-semibold mt-2 group-hover:underline text-sm z-10">Learn More &rarr;</span>
                            </Link>
                    );
                })}
            </div>
        </section>

            {/* All Services Grid */}
            <section id="values-section" className="w-full max-w-6xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-[#4169e1] mb-6 text-center">All Our Services</h3>
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-md">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4169e1] text-lg pointer-events-none">
                            {React.createElement(FaSearch as React.FC<React.SVGProps<SVGSVGElement>>)}
                        </span>
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search services..."
                            className="w-full pl-12 pr-10 py-3 bg-blue-50 border-2 border-blue-100 rounded-lg shadow focus:outline-none focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/30 text-lg transition-all duration-200"
                        />
                        {search && (
                            <button
                                type="button"
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4169e1] text-lg focus:outline-none"
                                aria-label="Clear search"
                            >
                                {React.createElement(FaTimes as React.FC<React.SVGProps<SVGSVGElement>>)}
                            </button>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredServices.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500 text-lg py-12">No services found.</div>
                    ) : (
                        filteredServices.map(({ Icon, title, desc, to }, idx) => (
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
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default WaterServices; 
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    FaSeedling,
    FaCogs,
    FaWarehouse,
    FaVial,
    FaWrench
} from 'react-icons/fa';

const irrigationServices = [
    {
        title: 'Irrigation System Design',
        to: '/water-services/irrigation-design',
        Icon: FaSeedling,
        desc: 'Custom irrigation layouts for farms, gardens, and commercial sites.'
    },
    {
        title: 'Irrigation Setup & Installation',
        to: '/water-services/irrigation-setup',
        Icon: FaCogs,
        desc: 'Professional installation of drip, sprinkler, and surface irrigation.'
    },
    {
        title: 'Irrigation System Repair',
        to: '/water-services/irrigation-repair',
        Icon: FaWrench,
        desc: 'Fast, reliable repairs to keep your irrigation running smoothly.'
    },
    {
        title: 'Water Quality Testing',
        to: '/water-services/water-quality-testing',
        Icon: FaVial,
        desc: 'Ensure your irrigation water is safe and suitable for crops.'
    },
    {
        title: 'Water Pump Installation',
        to: '/water-services/water-pump-installation',
        Icon: FaCogs,
        desc: 'Efficient pump solutions for irrigation systems.'
    },
    {
        title: 'Water Tank Installation',
        to: '/water-services/water-tank-installation',
        Icon: FaWarehouse,
        desc: 'Reliable water storage for uninterrupted irrigation.'
    },
];

const IrrigationServices: React.FC = () => (
    <>
        <Helmet>
            <title>Irrigation Systems Zimbabwe | Design, Setup, Repair</title>
            <meta name="description" content="Explore all Irrigation System services by Springwaters: design, setup, repair, water quality testing, pump & tank installation. Serving farms, gardens, and commercial sites across Zimbabwe." />
            <meta name="keywords" content="irrigation systems, design, setup, repair, water testing, pump installation, Zimbabwe" />
        </Helmet>
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Irrigation Systems</h1>
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl mx-auto">All the essential irrigation services for efficient, sustainable water use in Zimbabwe.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {irrigationServices.map(({ Icon, title, desc, to }, idx) => (
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

export default IrrigationServices; 
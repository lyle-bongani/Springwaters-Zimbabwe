import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    FaTruck,
    FaWarehouse,
    FaVial,
    FaCogs
} from 'react-icons/fa';

const bulkWaterServices = [
    {
        title: 'Bulk Water Delivery',
        to: '/water-services/bulk-water-delivery',
        Icon: FaTruck,
        desc: 'Fast, reliable delivery of clean water for homes, businesses, and events.'
    },
    {
        title: 'Water Tank Installation',
        to: '/water-services/water-tank-installation',
        Icon: FaWarehouse,
        desc: 'Expert installation of water tanks for safe, large-volume storage.'
    },
    {
        title: 'Water Quality Testing',
        to: '/water-services/water-quality-testing',
        Icon: FaVial,
        desc: 'Ensure delivered water meets safety and quality standards.'
    },
    {
        title: 'Water Pump Installation',
        to: '/water-services/water-pump-installation',
        Icon: FaCogs,
        desc: 'Pump solutions for efficient water transfer and supply.'
    },
];

const BulkWaterDelivery: React.FC = () => (
    <>
        <Helmet>
            <title>Bulk Water Delivery Zimbabwe | Fast, Reliable Water Supply</title>
            <meta name="description" content="Explore all Bulk Water Delivery services by Springwaters: water delivery, tank installation, water quality testing, pump installation. Serving homes, businesses, and events across Zimbabwe." />
            <meta name="keywords" content="bulk water delivery, water tank installation, water testing, pump installation, Zimbabwe" />
        </Helmet>
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Bulk Water Delivery</h1>
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl mx-auto">Essential services for fast, safe, and reliable bulk water supply in Zimbabwe.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {bulkWaterServices.map(({ Icon, title, desc, to }, idx) => (
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

export default BulkWaterDelivery; 
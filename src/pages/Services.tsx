import React from 'react';
import { FaWater, FaSeedling, FaTruck, FaTools } from 'react-icons/fa';

const services = [
    {
        icon: FaWater,
        title: 'Borehole Drilling & Installation',
        desc: 'Expert siting, robust casing, and efficient pump installations for reliable groundwater access.'
    },
    {
        icon: FaSeedling,
        title: 'Irrigation Systems & Design',
        desc: 'Custom irrigation solutions to maximize agricultural productivity and water efficiency.'
    },
    {
        icon: FaTruck,
        title: 'Bulk Water Supply & Delivery',
        desc: 'Clean water delivered directly to your site, available in various volumes for any need.'
    },
    {
        icon: FaTools,
        title: 'Borehole Maintenance',
        desc: 'Professional maintenance, repairs, and rehabilitation to keep your water system running smoothly.'
    },
];

const WaterServices: React.FC = () => {
    return (
        <section className="bg-white pt-32 pb-16 px-4 flex flex-col items-center min-h-[60vh] mt-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Our Water Services</h1>
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl">Comprehensive water solutions for homes, farms, and businesses across Zimbabwe.</p>
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
                {services.map((service, idx) => {
                    const Icon = service.icon as React.FC<React.SVGProps<SVGSVGElement>>;
                    return (
                        <div key={idx} className="flex flex-col items-center text-center px-4">
                            <Icon className="text-3xl text-[#4169e1] mb-2" />
                            <h2 className="text-xl font-bold text-[#0a2259] mb-2">{service.title}</h2>
                            <p className="text-[#0a2259] text-base">{service.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WaterServices; 
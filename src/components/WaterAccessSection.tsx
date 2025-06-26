import React from 'react';
import { FaTools, FaTint, FaWarehouse, FaHammer } from 'react-icons/fa';

const services = [
    {
        title: 'Borehole Drilling & Installation',
        description:
            'Access reliable groundwater with our expert borehole drilling services in Zimbabwe. We provide precise siting, robust casing, and efficient pump installations (solar, electric, manual) for a consistent water supply.',
        icon: FaTools({ className: 'text-4xl text-blue-700 mb-4' }),
    },
    {
        title: 'Irrigation Systems & Design',
        description:
            'Maximize your agricultural yields and manage water efficiently with our custom irrigation system design and setup in Zimbabwe. We offer both manual and automated irrigation solutions for farms and gardens.',
        icon: FaTint({ className: 'text-4xl text-blue-700 mb-4' }),
    },
    {
        title: 'Bulk Water Supply & Delivery',
        description:
            'For immediate and convenient water needs, our bulk water delivery service in Zimbabwe brings clean water directly to your doorstep. Available in volumes from 2,000L to 20,000L for any requirement.',
        icon: FaWarehouse({ className: 'text-4xl text-blue-700 mb-4' }),
    },
    {
        title: 'Borehole Maintenance',
        description:
            'Ensure the longevity and optimal performance of your existing borehole with our professional maintenance, repairs, and rehabilitation services. We keep your water well run',
        icon: FaHammer({ className: 'text-4xl text-blue-700 mb-4' }),
    },
];

const WaterAccessSection = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-20 flex flex-col items-center justify-center">
            {/* New Intro Section: Two-column layout */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:gap-x-20 gap-y-12 mb-16">
                {/* Left: Text */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        Your Foundation for Water Independence in Zimbabwe
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 font-medium">
                        Springwaters, a wholly Zimbabwean-owned company established in 2008, specializes in delivering high-quality, sustainable water solutions across Zimbabwe. Recognizing that reliable water access is essential for daily life, agriculture, and business, Springwaters leverages deep local expertise and an understanding of Zimbabwe's unique water challenges.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 font-medium">
                        The company is dedicated to empowering communities and clients with long-term water independence through innovative solutions, comprehensive services, and a highly experienced team. Their commitment is to provide durable, efficient, and tailored water access for homes, farms, and businesses throughout the nation.
                    </p>
                </div>
                {/* Right: Large Image */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/images/pics/WhatsApp Image 2025-06-25 at 18.03.43.jpeg"
                        alt="Water Independence"
                        className="w-full max-w-xl h-[28rem] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
            {/* Service Cards */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">
                Our Core Water Services for Zimbabwe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white border-2 border-[#4169e1] rounded-2xl p-8 flex flex-col items-center shadow hover:shadow-lg transition"
                    >
                        {service.icon}
                        <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">{service.title}</h3>
                        <p className="text-gray-700 text-center text-base font-medium">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WaterAccessSection; 
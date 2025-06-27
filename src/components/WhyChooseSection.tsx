import React, { useState } from 'react';
import { FaMedal, FaHandsHelping, FaMoneyBillWave, FaMicrochip, FaUserShield, FaLeaf } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Reason {
    title: string;
    description: string;
    icon: IconType;
}

const reasons: Reason[] = [
    {
        title: 'Proven Expertise & Experience',
        description:
            'With over 15 years in the field, our team, led by industry veterans like Munesu Tsiga, brings unparalleled experience to every project. From precise borehole siting to complex irrigation designs and pump installations, our deep knowledge ensures optimal results. We are the borehole contractors you can rely on.',
        icon: FaMedal,
    },
    {
        title: 'Comprehensive Water Solutions',
        description:
            'We offer a full spectrum of water services in Zimbabwe, meaning you only need one trusted partner. From the initial survey and drilling to pump installation, irrigation setup, and ongoing maintenance, we provide end-to-end solutions.',
        icon: FaHandsHelping,
    },
    {
        title: 'Transparent & Affordable Pricing',
        description:
            'Experience clear, upfront costing with our competitive borehole prices in Zimbabwe. For clients in Harare, we cover travel costs, and for areas outside Harare, fuel costs are precisely calculated and communicated upfront.',
        icon: FaMoneyBillWave,
    },
    {
        title: 'Cutting-Edge Technology',
        description:
            'We invest in modern geophysical equipment for accurate groundwater surveys and advanced drilling rigs for efficient water well boring. This commitment to technology ensures precise and effective water extraction.',
        icon: FaMicrochip,
    },
    {
        title: 'Customer-Centric Approach & Trustworthiness',
        description:
            'Your satisfaction is our ultimate priority. We listen attentively to your requirements, provide tailored advice, and deliver solutions that fit your specific needs and budget. Our relationships are built on transparency, reliability, and genuine peace of mind.',
        icon: FaUserShield,
    },
    {
        title: 'Sustainability Focus',
        description:
            'We are committed to environmentally responsible practices. We offer eco-friendly options like solar pump installations and efficient irrigation designs to minimize environmental impact and promote long-term water conservation.',
        icon: FaLeaf,
    },
];

const WhyChooseSection = () => {
    const [current, setCurrent] = useState(0);

    // Carousel navigation handlers
    const prevCard = () => setCurrent((prev) => (prev === 0 ? reasons.length - 1 : prev - 1));
    const nextCard = () => setCurrent((prev) => (prev === reasons.length - 1 ? 0 : prev + 1));

    return (
        <section id="why-choose-section" className="w-full bg-[#4169e1] py-20 px-4 md:px-20 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Navy Blur Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vw] max-w-4xl max-h-[32rem] bg-blue-900 opacity-60 blur-3xl rounded-full z-0" />
            <div className="max-w-4xl w-full text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Why Choose Springwaters: Your Trusted Water Experts
                </h2>
                <p className="text-lg text-blue-100 mb-2 font-medium">
                    Choosing Springwaters means partnering with a team that prioritizes your water security and satisfaction. Here's why clients across Zimbabwe trust us for their water needs:
                </p>
            </div>
            {/* Mobile Carousel */}
            <div className="w-full max-w-xs mx-auto block md:hidden relative z-10">
                <div className="transition-all duration-300">
                    <div className="bg-white border-2 border-[#4169e1] rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition min-h-[260px] flex flex-col justify-between">
                        {(() => {
                            const Icon = reasons[current].icon; return (
                                <span className="mb-3 text-3xl text-[#4169e1] flex items-center justify-center">
                                    {Icon && React.createElement(Icon as React.JSXElementConstructor<any>, { size: 32 })}
                                </span>
                            );
                        })()}
                        <h3 className="text-xl font-bold text-[#4169e1] mb-3">{reasons[current].title}</h3>
                        <p className="text-gray-700 text-base font-medium">{reasons[current].description}</p>
                    </div>
                </div>
                {/* Carousel Controls */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={prevCard}
                        className="bg-[#4169e1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-800 transition"
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>
                    <div className="text-white font-semibold">
                        {current + 1} / {reasons.length}
                    </div>
                    <button
                        onClick={nextCard}
                        className="bg-[#4169e1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-800 transition"
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full relative z-10">
                {reasons.map((reason, idx) => (
                    <div
                        key={idx}
                        className="bg-white border-2 border-[#4169e1] rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition"
                    >
                        {(() => {
                            const Icon = reason.icon; return (
                                <span className="mb-3 text-3xl text-[#4169e1] flex items-center justify-center">
                                    {Icon && React.createElement(Icon as React.JSXElementConstructor<any>, { size: 32 })}
                                </span>
                            );
                        })()}
                        <h3 className="text-xl font-bold text-[#4169e1] mb-3">{reason.title}</h3>
                        <p className="text-gray-700 text-base font-medium">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseSection; 
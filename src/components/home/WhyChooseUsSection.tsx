import React from 'react';

const points = [
    {
        title: 'Proven Expertise & Experience',
        desc: 'With over 15 years in the field, our team, led by industry veterans like Munesu Tsiga, brings unparalleled experience to every project.'
    },
    {
        title: 'Comprehensive Water Solutions',
        desc: 'We offer a full spectrum of water services in Zimbabwe, meaning you only need one trusted partner.'
    },
    {
        title: 'Efficiency & Speed',
        desc: 'We pride ourselves on swift and efficient service delivery.'
    },
    {
        title: 'Transparent & Affordable Pricing',
        desc: 'Experience clear, upfront costing with our competitive borehole prices in Zimbabwe.'
    },
    {
        title: 'Cutting-Edge Technology',
        desc: 'We invest in modern geophysical equipment and advanced drilling rigs.'
    },
    {
        title: 'Customer-Centric Approach & Trustworthiness',
        desc: 'Your satisfaction is our ultimate priority.'
    },
    {
        title: 'Sustainability Focus',
        desc: 'We are committed to environmentally responsible practices.'
    },
];

const WhyChooseUsSection = () => (
    <section id="why-choose-section" className="py-16 px-4 bg-primary text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Springwaters: Your Trusted Water Experts</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-lg">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-green-300">&#10003;</span>
                    <div>
                        <span className="font-semibold">{point.title}:</span> {point.desc}
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default WhyChooseUsSection; 
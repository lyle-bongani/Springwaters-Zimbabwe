import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSearch, FaTools, FaArrowDown, FaCogs, FaTint, FaClipboardCheck } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
];

const processSteps = [
    {
        icon: FaSearch,
        title: 'Initial Assessment',
        desc: 'Our technicians first assess the current condition of your borehole, its original depth, and the geological profile to determine the feasibility and optimal depth for deepening. This may involve downhole camera inspections.',
        img: processImgs[0],
    },
    {
        icon: FaTools,
        title: 'Specialized Equipment',
        desc: 'We use specialized drilling equipment designed for working within existing borehole casings, ensuring precision and minimizing disruption to the well\'s integrity.',
        img: processImgs[1],
    },
    {
        icon: FaArrowDown,
        title: 'Controlled Drilling',
        desc: 'The drilling process is carefully controlled to extend the borehole to the targeted deeper aquifer. Our experienced drillers monitor conditions closely to ensure a safe and efficient operation.',
    },
    {
        icon: FaCogs,
        title: 'Casing & Development',
        desc: 'Once the desired depth is reached, additional casing and screens may be installed to secure the new section of the borehole and prevent sediment ingress. The well is then developed to ensure clear water flow.',
    },
    {
        icon: FaClipboardCheck,
        title: 'Pump Testing & Water Quality Check',
        desc: 'After deepening, a new pump test is conducted to measure the increased yield and flow rate. Water quality may also be re-tested to ensure suitability for your intended use.',
    },
];

const whyChoose = [
    {
        title: 'Cost-Effective Alternative',
        desc: 'Often more affordable and less disruptive than drilling a completely new borehole.',
    },
    {
        title: 'Increased Water Output',
        desc: 'Directly addresses reduced yield by accessing deeper, more reliable water sources.',
    },
    {
        title: 'Experienced Operators',
        desc: 'Our technicians have specific expertise in complex borehole extension techniques.',
    },
    {
        title: 'Minimal Disruption',
        desc: 'The process typically causes less disturbance to your property compared to new drilling.',
    },
    {
        title: 'Sustainable Solution',
        desc: 'Revitalizes existing infrastructure, promoting long-term water security.',
    },
];

const BoreholeDeepening: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Deepening Zimbabwe | Springwaters - Well Deepening Experts</title>
            <meta name="description" content="Increase your water yield with Springwaters expert borehole deepening in Zimbabwe. We safely deepen existing wells for improved water access." />
            <meta name="keywords" content="borehole deepening Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={heroImg}
                alt="Borehole Deepening Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Expert Borehole Deepening: Increasing Your Water Output in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides professional borehole deepening services in Zimbabwe, extending the depth of your existing water well to access lower water tables and significantly increase your water supply, revitalizing underperforming or dry boreholes. Deepening is a cost-effective, sustainable solution for long-term water security.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section id="mission-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">A Sustainable Solution for Declining Water Levels</h2>
                    <p className="text-lg text-[#0a2259] mb-4">Fluctuations in rainfall patterns, increased demand, or natural geological shifts can sometimes lead to a noticeable drop in the water table level. This often results in reduced water output from your existing borehole, or in severe cases, can even render your well completely dry.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Such a situation can be a significant setback, impacting domestic, agricultural, and commercial operations relying on that water source.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Instead of embarking on the costly and time-consuming process of drilling a brand-new borehole, borehole extension offers a highly effective and economical alternative. Springwaters specializes in expertly deepening existing boreholes, meticulously tapping into deeper, more consistent aquifers.</p>
                    <p className="text-lg text-[#0a2259] mb-4">This strategic intervention helps to revitalize your water supply, providing a sustainable and reliable solution for long-term water security.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={processImgs[0]}
                        alt="Deepening Value"
                        className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Deepening Process Section */}
        <section id="values-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Precise Borehole Deepening Process
                </h2>
                <div className="flex flex-col gap-12">
                    {processSteps.map((step, idx) => (
                        <div key={step.title} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                            {step.img && (
                                <div className="flex-1 w-full max-w-md mx-auto">
                                    <img src={step.img} alt={step.title} className="w-full h-[220px] md:h-[260px] object-cover object-center rounded-xl shadow-lg" />
                                </div>
                            )}
                            <div className="flex-1 w-full text-center md:text-left">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                        {React.createElement(step.icon as React.FC<React.SVGProps<SVGSVGElement>>)}
                                    </span>
                                    <span className="text-xl md:text-2xl font-bold text-[#4169e1]">{step.title}</span>
                                </div>
                                <p className="text-lg text-[#0a2259]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Why Choose Springwaters for Borehole Deepening in Zimbabwe?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {whyChoose.map((item) => (
                        <div key={item.title} className="flex items-start gap-4">
                            {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                            <div>
                                <span className="font-bold text-[#4169e1]">{item.title}:</span>
                                <span className="block text-[#0a2259]"> {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section id="newsletter-section" className="w-full py-16 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-400 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Your Borehole Losing Its Flow?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't let a dwindling water supply become a crisis. Contact Springwaters today for expert borehole deepening services in Zimbabwe. Let us help you revitalize your borehole and secure a bountiful water future.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request Deepening Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Water Expert</a>
            </div>
        </section>
    </>
);

export default BoreholeDeepening; 
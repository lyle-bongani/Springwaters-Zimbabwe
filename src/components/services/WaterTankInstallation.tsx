import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSearch, FaCogs, FaTools, FaLayerGroup, FaTint, FaClipboardCheck, FaArrowCircleUp } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.03.42.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.03.43.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
];

const processSteps = [
    {
        icon: FaSearch,
        title: 'Site Assessment & Planning',
        desc: 'Our team evaluates your property to determine the best location for your water tank, considering factors like elevation, foundation stability, and proximity to your water source and distribution points.',
        img: processImgs[0],
    },
    {
        icon: FaLayerGroup,
        title: 'Tank Type Recommendation',
        desc: 'We guide you in selecting the ideal water tank, whether it\'s a ground-level tank for larger volumes and pump longevity, or an elevated tank on a stand for gravity-fed distribution. We consider material, capacity, and budget.',
        img: processImgs[1],
    },
    {
        icon: FaCogs,
        title: 'Foundation Preparation',
        desc: 'Proper foundation is critical for tank stability. We ensure a level, solid base capable of supporting the full weight of the water-filled tank.',
    },
    {
        icon: FaTools,
        title: 'Secure Installation',
        desc: 'Our experienced technicians meticulously install the water tank, ensuring all connections for inflow, outflow, and overflow are correctly fitted and sealed to prevent leaks.',
    },
    {
        icon: FaTint,
        title: 'Integration with Water System',
        desc: 'We seamlessly connect your new water tank to your borehole pump (if applicable) and your property\'s plumbing system, ensuring efficient filling and distribution.',
    },
    {
        icon: FaClipboardCheck,
        title: 'Testing & Handover',
        desc: 'After installation, we conduct thorough testing to verify proper functionality and provide you with guidance on maintenance.',
    },
];

const whyChoose = [
    {
        title: 'Reliable Storage',
        desc: 'Ensure a consistent water supply, even during shortages or power outages.',
    },
    {
        title: 'Expert Advice',
        desc: 'We help you choose the right tank type and size for your specific needs and budget.',
    },
    {
        title: 'Durable Installations',
        desc: 'High-quality materials and professional techniques ensure long-lasting storage solutions.',
    },
    {
        title: 'Pump Protection',
        desc: 'Ground-level tanks can extend the lifespan of your borehole pump by reducing continuous operation.',
    },
    {
        title: 'Seamless Integration',
        desc: 'Our installations are designed to work perfectly with your borehole and existing plumbing.',
    },
];

const WaterTankInstallation: React.FC = () => (
    <>
        <Helmet>
            <title>Water Tank Installation Zimbabwe | Springwaters - Reliable Storage Solutions</title>
            <meta name="description" content="Professional water tank installation in Zimbabwe by Springwaters. Secure, durable storage for borehole and municipal water supply." />
            <meta name="keywords" content="water tank installation Zimbabwe, water storage Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={heroImg}
                alt="Water Tank Installation Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Water Tank Installation Services in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides professional water tank installation services across Zimbabwe, offering reliable and durable water storage solutions that complement your borehole or municipal supply for uninterrupted access. The right tank, expertly installed, is essential for consistent supply and peace of mind.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section id="mission-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Essential Storage for Uninterrupted Water Access</h2>
                    <p className="text-lg text-[#0a2259] mb-4">A robust water storage solution is absolutely crucial for ensuring a consistent and reliable water supply, particularly in Zimbabwean areas prone to water rationing, unpredictable municipal pressure, or seasonal droughts.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Without adequate storage, even a productive borehole might struggle to meet peak demand or provide continuous access during power outages.</p>
                    <p className="text-lg text-[#0a2259] mb-4">This makes the strategic placement and professional installation of a water tank an indispensable component of any effective water management system.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Installing a water tank allows you to efficiently capture and store water extracted from your borehole or other sources, providing a vital buffer during dry periods or times of high consumption.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Springwaters offers expert guidance and precise installation for a wide range of tank types and sizes, carefully selected to ensure optimal capacity, seamless integration with your existing water system, and long-term durability on your Zimbabwean property.</p>
                    <p className="text-lg text-[#0a2259] mb-4">We ensure your investment provides uninterrupted access and peace of mind.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={processImgs[0]}
                        alt="Tank Installation Value"
                        className="w-full max-w-md md:max-w-lg h-[220px] md:h-[340px] rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Tank Installation Process Section */}
        <section id="values-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Professional Water Tank Installation Process
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
                    Why Choose Springwaters for Water Tank Installation in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Water Supply with Expert Tank Installation!</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't let water scarcity disrupt your life or operations. Contact Springwaters today for expert water tank installation services in Zimbabwe. Invest in reliable water storage for peace of mind.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Tank Installation Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Water Storage Expert</a>
            </div>
        </section>
    </>
);

export default WaterTankInstallation; 
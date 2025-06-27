import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSearch, FaCogs, FaBolt, FaSolarPanel, FaHandHoldingWater, FaTint, FaTools, FaClipboardCheck } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg',
];

const processSteps = [
    {
        icon: FaSearch,
        title: 'Site and Borehole Assessment',
        desc: 'We evaluate your borehole\'s yield, depth, and water quality (if tested) to recommend the most suitable pump type and size.',
        img: processImgs[0],
    },
    {
        icon: FaCogs,
        title: 'Pump Type Selection',
        desc: 'We guide you through the best options for your requirements: Submersible Pumps (efficient, quiet, for urban/private setups), Bushpumps (robust, manual, for rural/community use), Solar Pumps (eco-friendly, off-grid), Electric Pumps (reliable grid power).',
        img: processImgs[1],
    },
    {
        icon: FaTools,
        title: 'Professional Installation',
        desc: 'Our certified technicians meticulously install the chosen pump, ensuring correct depth, secure connections, and proper alignment within the borehole.',
    },
    {
        icon: FaBolt,
        title: 'Piping & Electrical Connections',
        desc: 'We handle all necessary piping, electrical wiring, and control panel installations, adhering to strict safety standards.',
    },
    {
        icon: FaClipboardCheck,
        title: 'System Testing & Calibration',
        desc: 'After installation, we conduct thorough testing to ensure the pump operates at optimal efficiency, delivering the expected flow rate and pressure.',
    },
    {
        icon: FaHandHoldingWater,
        title: 'Client Handover & Guidance',
        desc: 'We provide clear instructions on pump operation and basic maintenance to help you maximize its lifespan.',
    },
];

const whyChoose = [
    {
        title: 'Expert Selection',
        desc: 'We help you choose the ideal pump based on your borehole\'s specific characteristics and your water demands.',
    },
    {
        title: 'Certified Technicians',
        desc: 'Our installers are highly trained and experienced, ensuring safe and reliable installation.',
    },
    {
        title: 'Diverse Options',
        desc: 'Access to a wide range of pump types, including energy-efficient solar solutions.',
    },
    {
        title: 'Seamless Integration',
        desc: 'We ensure your pump integrates perfectly with your borehole and any existing water systems.',
    },
    {
        title: 'Long-Term Reliability',
        desc: 'Quality installation and proper setup contribute to the extended lifespan of your pump.',
    },
];

const WaterPumpInstallation: React.FC = () => (
    <>
        <Helmet>
            <title>Water Pump Installation Zimbabwe | Springwaters - Borehole Pump Experts</title>
            <meta name="description" content="Professional water pump installation in Zimbabwe by Springwaters. We install submersible, solar, bushpump & electric pumps for reliable water supply." />
            <meta name="keywords" content="water pump installation Zimbabwe, borehole pump Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={heroImg}
                alt="Water Pump Installation Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Efficient Water Pump Installation for Your Borehole in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides professional water pump installation services in Zimbabwe, ensuring seamless and efficient water extraction from your borehole for reliable domestic, commercial, or agricultural supply. The right pump, expertly installed, is crucial for optimizing water delivery, energy efficiency, and system longevity.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section id="mission-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Powering Your Water Access with the Right Pump</h2>
                    <p className="text-lg text-[#0a2259] mb-4">A well-drilled borehole, while providing access to vital groundwater, is only as effective as the pump that brings that water to the surface. Therefore, selecting and installing the correct borehole pump is not merely a technical step; it is crucial for optimizing water delivery, ensuring energy efficiency, and guaranteeing the overall longevity of your entire water system. An improperly chosen or installed pump can lead to inefficiencies, frequent breakdowns, and increased operational costs.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Understanding this critical link, Springwaters offers expert guidance and professional installation services for a wide range of pump types. We meticulously tailor our recommendations and solutions to your specific water needs, the unique characteristics of your borehole, and the prevailing conditions of your Zimbabwean property.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Our goal is to provide a pumping solution that is not only effective but also sustainable and reliable for years to come.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={processImgs[0]}
                        alt="Pump Installation Value"
                        className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Pump Installation Process Section */}
        <section id="values-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Comprehensive Water Pump Installation Process
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
                    Why Choose Springwaters for Water Pump Installation in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Power Your Water Supply with Springwaters!</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Ensure efficient and reliable water delivery from your borehole. Contact Springwaters today for expert water pump installation services in Zimbabwe. Let us provide the perfect pumping solution for your property.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Pump Installation Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Pump Specialist</a>
            </div>
        </section>
    </>
);

export default WaterPumpInstallation; 
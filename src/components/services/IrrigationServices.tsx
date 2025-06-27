import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSeedling, FaCogs, FaTools, FaWrench, FaTint, FaLeaf } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.07.jpeg';
const valueImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg';

const services = [
    {
        icon: FaSeedling,
        title: 'Irrigation Design',
        desc: 'Custom irrigation systems tailored to your environment, soil, plant needs, and water source. We design efficient plans for drip, sprinkler, and manual setups, ensuring optimal water distribution and minimal waste.'
    },
    {
        icon: FaCogs,
        title: 'Irrigation Setup',
        desc: 'Professional installation of all irrigation types, from complex automated systems for large farms to simpler setups for home gardens. We use high-quality components and meticulous techniques for durability and efficiency.'
    },
    {
        icon: FaWrench,
        title: 'Irrigation Repairs & Maintenance',
        desc: 'Comprehensive inspection, repair, and maintenance services to address leaks, blockages, pump issues, and system malfunctions. We keep your water flowing efficiently, protecting your investment and your plants.'
    },
];

const whyChoose = [
    { title: 'Water Efficiency Focus', desc: 'Designs aimed at conserving water and reducing operational costs.' },
    { title: 'Tailored Solutions', desc: 'Systems designed specifically for your unique property and water source.' },
    { title: 'Experienced Technicians', desc: 'Our team has vast experience with various irrigation technologies and applications in Zimbabwe.' },
    { title: 'Quality Components', desc: 'We use durable, high-performance materials for lasting reliability.' },
    { title: 'Integrated Approach', desc: 'Seamless integration with borehole installations for a complete water solution.' },
];

const IrrigationServices: React.FC = () => (
    <>
        <Helmet>
            <title>Irrigation Services Zimbabwe | Springwaters - Efficient Water Solutions</title>
            <meta name="description" content="Springwaters delivers expert irrigation services in Zimbabwe. Custom design, installation, and maintenance for farms, businesses, and gardens. Maximize water efficiency and yields." />
            <meta name="keywords" content="irrigation Zimbabwe, irrigation design, irrigation installation, irrigation maintenance, water efficiency" />
        </Helmet>
        {/* Hero Section */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={heroImg}
                alt="Irrigation Services Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Expert Borehole Services for Reliable Water Access in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters delivers intelligent irrigation solutions across Zimbabwe, maximizing water efficiency and promoting thriving landscapes for agriculture, commercial properties, and residential gardens.</p>
                <a href="/contact" className="inline-block bg-[#4169e1] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition text-lg">Contact Us</a>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section id="mission-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Optimize Your Water Usage for Better Yields</h2>
                    <p className="text-lg text-[#0a2259] mb-4">In a country where water management is key to productivity, a well-designed and installed irrigation system is invaluable. Springwaters provides comprehensive irrigation services, integrating seamlessly with your existing water sources, including boreholes, to deliver water precisely where and when it is needed. Our solutions are designed to be sustainable, cost-effective, and robust enough for Zimbabwean conditions.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={valueImg}
                        alt="Irrigation Value"
                        className="w-full max-w-md md:max-w-lg h-[220px] md:h-[340px] rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Service Spectrum Section */}
        <section id="values-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-8 text-center">Our Specialized Irrigation Services</h2>
                <div className="flex flex-col gap-10">
                    {/* Irrigation Design */}
                    <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-[#4169e1] mb-2 flex items-center gap-2">
                            <span className="inline-block">{React.createElement(FaSeedling as React.FC<React.SVGProps<SVGSVGElement>>, { className: "inline text-2xl" })}</span>
                            Irrigation Design: Customized for Your Needs
                        </h3>
                        <p className="text-[#0a2259] mb-2">Every landscape and crop has unique water requirements. Our expert team designs custom irrigation systems tailored to your specific environment, soil type, plant needs, and water source. We create efficient plans for drip irrigation, sprinkler systems, and manual setups, ensuring optimal water distribution and minimal waste.</p>
                        <a href="#" className="text-[#4169e1] font-semibold hover:underline">Learn More About Irrigation Design</a>
                    </div>
                    {/* Irrigation Setup */}
                    <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-[#4169e1] mb-2 flex items-center gap-2">
                            <span className="inline-block">{React.createElement(FaCogs as React.FC<React.SVGProps<SVGSVGElement>>, { className: "inline text-2xl" })}</span>
                            Irrigation Setup: Professional Installation
                        </h3>
                        <p className="text-[#0a2259] mb-2">A flawless installation is key to an effective irrigation system. Our skilled technicians execute professional installations of all irrigation types, from complex automated systems for large farms to simpler setups for home gardens. We use high-quality components and meticulous techniques to ensure durability and efficiency.</p>
                        <a href="#" className="text-[#4169e1] font-semibold hover:underline">Explore Irrigation Setup</a>
                    </div>
                    {/* Irrigation Repairs & Maintenance */}
                    <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-[#4169e1] mb-2 flex items-center gap-2">
                            <span className="inline-block">{React.createElement(FaWrench as React.FC<React.SVGProps<SVGSVGElement>>, { className: "inline text-2xl" })}</span>
                            Irrigation Repairs & Maintenance: Keeping Your System Optimal
                        </h3>
                        <p className="text-[#0a2259] mb-2">To ensure the longevity and peak performance of your irrigation system, regular maintenance and timely repairs are crucial. Springwaters offers comprehensive inspection, repair, and maintenance services to address leaks, blockages, pump issues, and system malfunctions. We keep your water flowing efficiently, protecting your investment and your plants.</p>
                        <a href="#" className="text-[#4169e1] font-semibold hover:underline">Irrigation Repairs & Maintenance</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Provided Content Section */}
        <section id="team-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#4169e1] mb-4 text-center">Efficient Irrigation Systems for Growth in Zimbabwe</h2>
                <p className="text-lg text-[#0a2259] text-center mb-6 max-w-2xl mx-auto">Springwaters delivers intelligent irrigation solutions across Zimbabwe, maximizing water efficiency and promoting thriving landscapes for agriculture, commercial properties, and residential gardens.</p>
                <h3 className="text-xl font-bold text-[#4169e1] mb-2 mt-8">Optimize Your Water Usage for Better Yields</h3>
                <p className="text-base text-[#0a2259] mb-6">In a country where water management is key to productivity, a well-designed and installed irrigation system is invaluable. Springwaters provides comprehensive irrigation services, integrating seamlessly with your existing water sources, including boreholes, to deliver water precisely where and when it is needed. Our solutions are designed to be sustainable, cost-effective, and robust enough for Zimbabwean conditions.</p>
                <h3 className="text-xl font-bold text-[#4169e1] mb-2 mt-8">Our Comprehensive Irrigation Service Spectrum</h3>
                <p className="text-base text-[#0a2259] mb-6">From initial planning to ongoing support, we offer a full suite of irrigation services, ensuring your system performs optimally and sustainably.</p>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Why Choose Springwaters for Your Irrigation Project?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow with Efficient Water?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Contact Springwaters today to discuss your irrigation needs in Zimbabwe and receive a customized solution designed for success. We are dedicated to helping you achieve optimal water management.</p>
            <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Contact Us</a>
        </section>
    </>
);

export default IrrigationServices; 
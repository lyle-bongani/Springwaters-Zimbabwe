import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaTruck, FaClock, FaTint, FaMapMarkerAlt, FaMoneyBillWave, FaHome, FaBuilding, FaTractor, FaUsers, FaSwimmingPool } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg';
const valueImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg';

const features = [
    { icon: FaTruck, title: 'Flexible Volumes', desc: 'We deliver water in various quantities, typically ranging from 2,000 litres up to 20,000 litres per delivery, to suit residential, commercial, or large-scale project requirements.' },
    { icon: FaClock, title: 'Prompt Delivery', desc: 'Our dedicated logistics ensure timely delivery, helping you mitigate water shortages and keep your operations running smoothly.' },
    { icon: FaTint, title: 'Clean Water', desc: 'We source and deliver clean water, suitable for a variety of uses including domestic, construction, and agricultural applications.' },
    { icon: FaMapMarkerAlt, title: 'Wide Service Area', desc: 'Serving Harare and surrounding areas, as well as various other locations across Zimbabwe depending on the scale of your need.' },
    { icon: FaMoneyBillWave, title: 'Competitive Pricing', desc: 'We offer transparent and affordable pricing for our bulk water services.' },
];

const useCases = [
    { icon: FaHome, title: 'Residential Homes', desc: 'Bridging gaps during water rationing or for garden watering.' },
    { icon: FaBuilding, title: 'Construction Sites', desc: 'Essential for mixing concrete, dust suppression, and worker amenities.' },
    { icon: FaBuilding, title: 'Commercial Properties', desc: 'Ensuring business continuity during municipal water supply interruptions.' },
    { icon: FaTractor, title: 'Farms & Agriculture', desc: 'Supplementing irrigation or livestock watering needs.' },
    { icon: FaUsers, title: 'Events & Functions', desc: 'Providing a convenient water source for large gatherings.' },
    { icon: FaSwimmingPool, title: 'Swimming Pools & Tanks', desc: 'Fast and efficient filling of new or existing pools and storage tanks.' },
];

const whyChoose = [
    { title: 'Reliability', desc: 'We pride ourselves on consistent and timely deliveries.' },
    { title: 'Quality', desc: 'Clean water delivered with adherence to hygiene standards.' },
    { title: 'Efficiency', desc: 'Our fleet is ready to respond to your urgent water needs.' },
    { title: 'Local Understanding', desc: 'Deep knowledge of Zimbabwean logistics and client requirements.' },
];

const BulkWaterDelivery: React.FC = () => (
    <>
        <Helmet>
            <title>Bulk Water Delivery Zimbabwe | Springwaters - Fast, Clean, Reliable Supply</title>
            <meta name="description" content="Springwaters provides fast, clean, and efficient bulk water delivery across Zimbabwe. Flexible volumes, prompt service, and hygienic water for homes, businesses, and projects." />
            <meta name="keywords" content="bulk water delivery Zimbabwe, water supply Zimbabwe, water tanker Harare" />
        </Helmet>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImg}
                alt="Bulk Water Delivery Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Reliable Bulk Water Delivery Across Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Fast, clean, and efficient bulk water supply—delivered directly to your location, whenever you need it. Springwaters is your trusted partner for urgent and planned water needs across Zimbabwe.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Fast, Clean, and Reliable Bulk Water Delivery</h2>
                    <p className="text-lg text-[#0a2259] mb-4">Springwaters delivers bulk water directly to your location—fast, clean, and efficiently. Whether you need water for your home, business, construction site, farm, or event, our dedicated fleet ensures you get the water you need, when you need it.</p>
                    <ul className="list-disc pl-6 text-[#0a2259] mb-4">
                        <li>Flexible volumes: 2,000L to 20,000L per delivery</li>
                        <li>Prompt, hygienic, and reliable service</li>
                        <li>Serving Harare and locations across Zimbabwe</li>
                        <li>Ideal for emergencies, projects, and planned supply</li>
                    </ul>
                    <p className="text-base text-[#4169e1] font-semibold">Experience peace of mind with Springwaters—your trusted partner for on-demand water supply.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={valueImg}
                        alt="Bulk Water Delivery Value"
                        className="w-full max-w-md md:max-w-lg h-[220px] md:h-[340px] rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-8 text-center">Key Features of Our Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f) => (
                        <div key={f.title} className="flex items-start gap-4 bg-blue-50 rounded-xl p-6 shadow-sm">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                {React.createElement(f.icon as React.FC<React.SVGProps<SVGSVGElement>>)}
                            </span>
                            <div>
                                <span className="font-bold text-[#4169e1] text-lg">{f.title}</span>
                                <p className="text-[#0a2259]">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-8 text-center">Bulk Water Ideal for:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((u) => (
                        <div key={u.title} className="flex items-start gap-4 bg-blue-50 rounded-xl p-6 shadow-sm">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                {React.createElement(u.icon as React.FC<React.SVGProps<SVGSVGElement>>)}
                            </span>
                            <div>
                                <span className="font-bold text-[#4169e1] text-lg">{u.title}</span>
                                <p className="text-[#0a2259]">{u.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Why Choose Springwaters for Bulk Water Delivery?
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
        <section className="w-full py-16 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-400 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Water Delivered Fast?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Contact Springwaters today to arrange your bulk water delivery in Zimbabwe. Our team is ready to provide immediate solutions for your water supply challenges.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Order Bulk Water Now</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to Our Team</a>
            </div>
        </section>
    </>
);

export default BulkWaterDelivery; 
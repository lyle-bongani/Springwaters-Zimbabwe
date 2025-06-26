import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaCogs, FaHardHat, FaChartLine, FaTruck, FaClipboardList } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.03.44.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.07.jpeg',
];

const processSteps = [
    {
        icon: FaClipboardList,
        title: 'Pre-Drilling Assessment',
        desc: 'Following a precise borehole siting report, our team conducts a final site assessment to prepare for drilling operations.',
        img: processImgs[0],
    },
    {
        icon: FaTruck,
        title: 'Modern Drilling Rigs',
        desc: 'We deploy state-of-the-art truck-mounted drilling rigs, capable of handling various terrains and geological formations found in Zimbabwe. These rigs utilize either rotary or percussive drilling methods, selected based on the ground conditions for optimal efficiency.',
        img: processImgs[1],
    },
    {
        icon: FaChartLine,
        title: 'Depth Expertise',
        desc: 'Our capabilities extend to drilling depths ranging from 40m up to 250m, and even deeper to 450m for specialized projects or areas with very low water tables. Deeper boreholes are often recommended in regions with surface pollution, as the soil acts as a natural filtration medium.',
        img: processImgs[2],
    },
    {
        icon: FaHardHat,
        title: 'Experienced Drillers',
        desc: 'Our drilling teams are comprised of highly experienced and certified professionals who prioritize safety and precision throughout the entire boring process.',
    },
    {
        icon: FaCogs,
        title: 'Efficient Operation',
        desc: 'We strive for efficient project completion, minimizing disruption to your property while ensuring the highest standards of workmanship.',
    },
];

const whyChoose = [
    {
        title: 'Proven Experience',
        desc: 'Over 15 years of successful borehole drilling projects in Zimbabwe, handling diverse geological challenges.',
    },
    {
        title: 'Advanced Equipment',
        desc: 'Investment in modern, well-maintained drilling rigs ensures efficiency and reliability.',
    },
    {
        title: 'Safety First',
        desc: 'Strict adherence to safety protocols for all on-site operations.',
    },
    {
        title: 'Depth Versatility',
        desc: 'Capable of drilling to various depths to meet specific water table requirements.',
    },
    {
        title: 'Transparent Process',
        desc: 'Clear communication and professional execution from start to finish.',
    },
];

const BoreholeDrilling: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Drilling Zimbabwe | Springwaters - Expert Water Well Drilling</title>
            <meta name="description" content="Professional borehole drilling in Zimbabwe by Springwaters. We offer reliable water well boring up to 450m deep for homes, farms & industries. Get a quote!" />
            <meta name="keywords" content="borehole drilling Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImg}
                alt="Borehole Drilling Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Expert Borehole Drilling for Reliable Water Access in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters specializes in professional borehole drilling across Zimbabwe, providing efficient and sustainable access to underground water sources for residential, commercial, and agricultural clients. A successful borehole begins with expert drilling and a deep understanding of Zimbabwe's diverse geology.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Your Foundation for Water Independence</h2>
                    <p className="text-lg text-[#0a2259] mb-2">A successful borehole begins with expert drilling. At Springwaters, we understand the diverse geological conditions throughout Zimbabwe and employ advanced techniques to ensure a high-yielding and durable water well.</p>
                    <p className="text-lg text-[#0a2259] mb-2">Our commitment to quality, safety, and efficiency makes us the trusted choice for your water well boring needs.</p>
                </div>
                <div className="flex-1 w-full max-w-md mx-auto">
                    <img src={processImgs[0]} alt="Drilling Value" className="w-full h-[240px] object-cover object-center rounded-xl shadow-lg" />
                </div>
            </div>
        </section>

        {/* Drilling Process Section */}
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Professional Borehole Drilling Process
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
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Why Choose Springwaters for Borehole Drilling in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Access Your Own Water Source?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Invest in a reliable water future with Springwaters. Contact us today to discuss your borehole drilling project in Zimbabwe and receive a detailed, no-obligation quote. Let us help you achieve water independence.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Drilling Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to Our Drilling Experts</a>
            </div>
        </section>
    </>
);

export default BoreholeDrilling; 
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaShieldAlt, FaFilter, FaWater, FaTools, FaCogs } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
];

const processSteps = [
    {
        icon: FaShieldAlt,
        title: 'Material Selection',
        desc: 'We use high-quality, durable casing materials suitable for the specific geological conditions and water chemistry in Zimbabwe. Options are chosen for their strength and resistance to corrosion.',
        img: processImgs[0],
    },
    {
        icon: FaTools,
        title: 'Vertical Pipe Installation',
        desc: 'The casing pipe is carefully lowered into the drilled shaft, creating a stable and permanent conduit for water extraction.',
        img: processImgs[1],
    },
    {
        icon: FaFilter,
        title: 'Well Screen Placement',
        desc: 'Strategically placed well screens (perforated sections of the casing) allow water to enter the borehole while preventing sand, gravel, and other sediments from being drawn into your pump and water supply.',
    },
    {
        icon: FaWater,
        title: 'Annular Seal',
        desc: 'The space between the casing and the borehole wall (the annulus) is properly sealed, typically with a grout or bentonite clay, to prevent surface water runoff and shallow contaminants from seeping into the deeper aquifer.',
    },
    {
        icon: FaCogs,
        title: 'Pump Protection',
        desc: 'By effectively isolating the water source from the surrounding earth, the casing protects your submersible pump from abrasive particles, significantly extending its operational life.',
    },
];

const whyChoose = [
    {
        title: 'Structural Integrity',
        desc: 'We ensure your borehole remains stable and functional, preventing costly collapses.',
    },
    {
        title: 'Water Purity',
        desc: 'Our casing methods effectively prevent surface contaminants from entering your drinking or irrigation water.',
    },
    {
        title: 'Pump Longevity',
        desc: 'Protecting your pump from sediment means fewer repairs and a longer lifespan for your equipment.',
    },
    {
        title: 'Quality Materials',
        desc: 'We use only durable, high-grade casing materials designed for Zimbabwean conditions.',
    },
    {
        title: 'Experienced Installation',
        desc: 'Our technicians have the expertise to ensure precise and secure casing installation.',
    },
];

const BoreholeCasing: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Casing Zimbabwe | Springwaters - Well Protection & Purity</title>
            <meta name="description" content="Ensure borehole longevity & water purity with Springwaters expert borehole casing services in Zimbabwe. Prevent collapse & contamination." />
            <meta name="keywords" content="borehole casing Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImg}
                alt="Borehole Casing Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Essential Borehole Casing for Durability and Water Purity in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides expert borehole casing services in Zimbabwe, reinforcing your well shaft to prevent collapse, block surface contaminants, and protect your pumping equipment for a long-lasting, clean water supply. Proper casing is the unseen guardian of your water source, ensuring structural integrity and water purity for years to come.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">The Unseen Guardian of Your Water Source</h2>
                    <p className="text-lg text-[#0a2259] mb-2">After drilling, proper borehole casing is a critical step that ensures the structural integrity and long-term functionality of your water well. It involves installing a robust vertical pipe and well screens that act as a protective barrier, preventing the borehole from caving in and safeguarding your water from external impurities.</p>
                    <p className="text-lg text-[#0a2259] mb-2">This process is fundamental to securing a reliable and hygienic water supply for years to come.</p>
                </div>
                <div className="flex-1 w-full max-w-md mx-auto">
                    <img src={processImgs[0]} alt="Casing Value" className="w-full h-[240px] object-cover object-center rounded-xl shadow-lg" />
                </div>
            </div>
        </section>

        {/* Casing Process Section */}
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Meticulous Borehole Casing Process
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
                    Why Springwaters for Borehole Casing in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Water Source for the Future</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Ensure the longevity and purity of your borehole with Springwaters expert borehole casing services in Zimbabwe. Contact us today for a consultation and protect your valuable water investment.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Casing Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to Our Experts</a>
            </div>
        </section>
    </>
);

export default BoreholeCasing; 
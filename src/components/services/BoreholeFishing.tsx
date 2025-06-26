import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSearch, FaTools, FaHandHoldingWater, FaCamera, FaArrowCircleUp } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.03.43.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg',
];

const processSteps = [
    {
        icon: FaCamera,
        title: 'Diagnosis and Assessment',
        desc: 'We first assess the situation, often using downhole cameras, to identify the type of object, its size, and its exact location within the borehole. This crucial step informs our retrieval strategy.',
        img: processImgs[0],
    },
    {
        icon: FaTools,
        title: 'Specialized Tool Selection',
        desc: 'Based on the assessment, our technicians select the most appropriate borehole retrieval tools. Our arsenal includes: Junk Baskets (for collecting smaller debris), Milling Tools (to grind down larger, unretrievable objects), Cutting Tools (for severing stuck pipes or cables), External Catch Tools (to latch onto the outside of objects), and Internal Catch Tools (to grip objects from the inside).',
        img: processImgs[1],
    },
    {
        icon: FaArrowCircleUp,
        title: 'Careful Retrieval',
        desc: 'The selected tools are carefully lowered into the borehole. Our experienced operators use precision and patience to manipulate the tools, ensuring the object is securely gripped and slowly brought to the surface, minimizing the risk of further complications.',
    },
    {
        icon: FaSearch,
        title: 'Post-Retrieval Inspection',
        desc: 'After the object is retrieved, we inspect the borehole for any remaining debris or damage to ensure it is clear and ready for optimal operation.',
    },
];

const whyChoose = [
    {
        title: 'Specialized Expertise',
        desc: 'Our technicians are highly trained in complex borehole retrieval operations.',
    },
    {
        title: 'Advanced Tooling',
        desc: 'Access to a wide range of specialized fishing tools for various obstruction types.',
    },
    {
        title: 'Damage Prevention',
        desc: 'We prioritize safe retrieval methods to protect your borehole casing and pump.',
    },
    {
        title: 'Restored Functionality',
        desc: 'Our goal is to quickly and effectively restore your borehole\'s full water flow.',
    },
    {
        title: 'Cost-Effective Solution',
        desc: 'Often a more economical solution than drilling a new borehole.',
    },
];

const BoreholeFishing: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Fishing Zimbabwe | Springwaters - Obstruction Removal</title>
            <meta name="description" content="Expert borehole fishing in Zimbabwe by Springwaters. We safely retrieve fallen objects & clear obstructions from your well to restore water flow." />
            <meta name="keywords" content="borehole fishing Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImg}
                alt="Borehole Fishing Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Expert Borehole Fishing: Retrieving Obstructions for Restored Water Flow in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides specialized borehole fishing services in Zimbabwe, expertly retrieving fallen objects and clearing obstructions from your water well to restore optimal functionality and consistent water supply. Our experienced team uses advanced tools to restore your water flow quickly and safely.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">When Your Borehole Needs a Helping Hand</h2>
                    <p className="text-lg text-[#0a2259] mb-2">Accidental drops of tools, pump components, or even geological debris can obstruct your borehole shaft, leading to reduced water flow or complete pump failure. This can be a frustrating and costly problem, immediately impacting your access to vital water. Such obstructions can prevent your pump from operating correctly, cause damage to the well casing, or simply block the flow of water from the aquifer.</p>
                    <p className="text-lg text-[#0a2259] mb-2">Springwaters offers precise and efficient borehole obstruction removal services, utilizing specialized tools and experienced technicians to safely retrieve foreign objects without causing further damage to your valuable water source.</p>
                    <p className="text-lg text-[#0a2259] mb-2">Our expertise in diagnosing and resolving these complex issues ensures that your borehole can quickly return to full, reliable operation, saving you from the expense and inconvenience of drilling a new well.</p>
                </div>
                <div className="flex-1 w-full max-w-md mx-auto">
                    <img src={processImgs[0]} alt="Fishing Value" className="w-full h-[240px] object-cover object-center rounded-xl shadow-lg" />
                </div>
            </div>
        </section>

        {/* Fishing Process Section */}
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Meticulous Borehole Fishing Process
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
                    Why Choose Springwaters for Borehole Fishing in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Has Your Borehole Lost Its Flow?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">If your borehole is obstructed or experiencing reduced performance due to fallen objects, don't delay. Contact Springwaters today for expert borehole fishing services in Zimbabwe. Let us restore your reliable water supply.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request Fishing Service</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to an Expert</a>
            </div>
        </section>
    </>
);

export default BoreholeFishing; 
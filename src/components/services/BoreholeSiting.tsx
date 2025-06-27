import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa';

const infoBlocks = [
    {
        img: '/images/pics/WhatsApp Image 2025-06-25 at 18.03.42.jpeg',
        alt: 'Borehole Siting Field Team',
        headline: 'On-Site Expertise',
        text: 'Our experienced team conducts thorough site assessments, ensuring every borehole is positioned for maximum water yield and sustainability.'
    },
    {
        img: '/images/pics/borehole-sitting.png',
        alt: 'Borehole Siting Diagram',
        headline: 'Advanced Geophysical Methods',
        text: 'We use state-of-the-art geophysical equipment and proven scientific methods to locate the best groundwater sources beneath your property.'
    },
    {
        img: '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
        alt: 'Surveying for Water',
        headline: 'Comprehensive Groundwater Surveys',
        text: 'Our surveys analyze subsurface conditions, identifying aquifers and avoiding dry or contaminated zones for reliable, clean water.'
    },
    {
        img: '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg',
        alt: 'Borehole Siting Success',
        headline: 'Proven Results Across Zimbabwe',
        text: 'Springwaters has a track record of successful borehole siting projects, helping communities and businesses secure dependable water supplies.'
    },
];

const BoreholeSiting: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Siting Zimbabwe | Springwaters - Groundwater Survey Experts</title>
            <meta name="description" content="Maximize borehole success with Springwaters expert borehole siting services in Zimbabwe. We use advanced geophysical equipment for accurate groundwater surveys." />
            <meta name="keywords" content="borehole siting Zimbabwe" />
        </Helmet>
        {/* Hero Section - Full Width Image with Overlay */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={infoBlocks[0].img}
                alt={infoBlocks[0].alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Precision Borehole Siting for Optimal Water Yield in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides expert borehole siting services, utilizing advanced geophysical equipment and experienced hydrogeologists to pinpoint the most viable locations for successful water well drilling across Zimbabwe. Accurate siting is the critical first step to a reliable, long-lasting water supply—minimizing risk and maximizing yield.</p>
            </div>
        </section>

        {/* Alternating Image + Info Blocks */}
        <section id="mission-section" className="w-full flex flex-col gap-12 py-12 px-4 bg-white">
            {infoBlocks.map((block, idx) => (
                <div key={block.img} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 max-w-6xl mx-auto`}>
                    <div className="flex-1 w-full">
                        <img src={block.img} alt={block.alt} className="w-full h-[240px] md:h-[340px] object-cover object-center rounded-xl shadow-lg" />
                    </div>
                    <div className="flex-1 w-full text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">{block.headline}</h2>
                        <p className="text-lg text-[#0a2259] mb-2">{block.text}</p>
                    </div>
                </div>
            ))}
        </section>

        {/* Process Section - Modern, Visual, No Cards */}
        <section id="values-section" className="w-full py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    {React.createElement(FaMapMarkerAlt as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1] text-4xl" })}
                    Our Expert Borehole Siting Process
                </h2>
                <div className="flex flex-col md:flex-row md:gap-8">
                    <ol className="flex-1 space-y-8 md:space-y-10">
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">1</span>
                            <div>
                                <span className="font-bold text-[#4169e1]">Initial Consultation:</span>
                                <span className="block text-[#0a2259]"> We begin by understanding your water needs, property layout, and any existing geological information.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">2</span>
                            <div>
                                <span className="font-bold text-[#4169e1]">Geophysical Survey:</span>
                                <span className="block text-[#0a2259]"> Our qualified hydrogeologists deploy modern geophysical equipment to conduct detailed subsurface investigations, including resistivity surveys to map underground formations, identify aquifers, and detect geological structures where water is likely to accumulate.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">3</span>
                            <div>
                                <span className="font-bold text-[#4169e1]">Groundwater Assessment:</span>
                                <span className="block text-[#0a2259]"> We analyze data to identify areas where two or more underground streams or fissures meet, often indicating a higher water table and better potential for sustained water flow.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">4</span>
                            <div>
                                <span className="font-bold text-[#4169e1]">Pollutant Avoidance:</span>
                                <span className="block text-[#0a2259]"> We ensure the proposed borehole location is sufficiently far from potential contaminants such as sewage disposal sites, septic tanks, or other sources of pollution, safeguarding the purity of your water.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">5</span>
                            <div>
                                <span className="font-bold text-[#4169e1]">Site Marking & Reporting:</span>
                                <span className="block text-[#0a2259]"> Once the ideal location is determined, we clearly mark the drilling spot. You receive a detailed siting report, which includes our findings, recommended drilling depth, and often assists with the ZINWA (Zimbabwe National Water Authority) Authority to Drill Permit application.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section - Modern, Visual, No Cards */}
        <section id="why-choose-section" className="w-full py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    {React.createElement(FaRegFileAlt as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1] text-4xl" })}
                    Why Choose Springwaters for Borehole Siting in Zimbabwe?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-start gap-4">
                        {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                        <div>
                            <span className="font-bold text-[#4169e1]">Unmatched Expertise:</span>
                            <span className="block text-[#0a2259]"> Our team comprises seasoned hydrogeologists with deep understanding of Zimbabwe's diverse geological formations.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                        <div>
                            <span className="font-bold text-[#4169e1]">Advanced Technology:</span>
                            <span className="block text-[#0a2259]"> We invest in the latest groundwater survey equipment for highly accurate and reliable results.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                        <div>
                            <span className="font-bold text-[#4169e1]">Risk Reduction:</span>
                            <span className="block text-[#0a2259]"> Our precise siting significantly reduces the chances of drilling a dry or low-yielding borehole, protecting your investment.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                        <div>
                            <span className="font-bold text-[#4169e1]">Water Purity Focus:</span>
                            <span className="block text-[#0a2259]"> We prioritize locating sites that offer the cleanest possible water, away from contaminants.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 md:col-span-2">
                        {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                        <div>
                            <span className="font-bold text-[#4169e1]">Compliance Assistance:</span>
                            <span className="block text-[#0a2259]"> Our detailed reports aid in the necessary regulatory approvals, including ZINWA permits.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section - Full Width */}
        <section id="newsletter-section" className="w-full py-16 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-400 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Ideal Water Source?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't leave your borehole drilling to chance. Let Springwaters' specialists identify the perfect location for your reliable and sustainable water supply.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Siting Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Hydrogeologist</a>
            </div>
        </section>
    </>
);

export default BoreholeSiting; 
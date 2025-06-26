import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaWater, FaShower, FaTrashRestore, FaShieldAlt, FaArrowUp } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.07.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
];

const processSteps = [
    {
        icon: FaWater,
        title: 'Initial Assessment',
        desc: 'We assess the level of sedimentation and the borehole\'s current performance to determine the best flushing strategy.',
        img: processImgs[0],
    },
    {
        icon: FaShower,
        title: 'High-Pressure Jetting',
        desc: 'Our technicians utilize specialized high-pressure water hoses to jet water into the borehole shaft. This powerful stream dislodges accumulated silt, sand, and other fine particles from the casing and the aquifer\'s formation.',
        img: processImgs[1],
    },
    {
        icon: FaTrashRestore,
        title: 'Sediment Removal',
        desc: 'The dislodged sediment is then brought to the surface and safely discharged away from your water source, ensuring it doesn\'t re-enter the well. This process is repeated until the water runs clear.',
    },
    {
        icon: FaShieldAlt,
        title: 'Pump Protection',
        desc: 'By removing abrasive particles, flushing directly protects your submersible pump from premature wear, reducing the likelihood of costly repairs or replacements.',
    },
    {
        icon: FaArrowUp,
        title: 'Improved Water Quality & Flow',
        desc: 'A clean borehole means clearer water and often an improved flow rate, as obstructions to water ingress are removed.',
    },
];

const whyChoose = [
    {
        title: 'Enhanced Water Purity',
        desc: 'Significantly reduces turbidity and improves the aesthetic quality of your water.',
    },
    {
        title: 'Extended Pump Lifespan',
        desc: 'Protects your valuable pumping equipment from abrasive sediment, saving you money on repairs.',
    },
    {
        title: 'Optimized Flow Rate',
        desc: 'Clears blockages within the well, potentially increasing your borehole\'s water output.',
    },
    {
        title: 'Experienced Technicians',
        desc: 'Our team has the expertise and equipment to perform thorough and safe flushing.',
    },
    {
        title: 'Preventative Maintenance',
        desc: 'A proactive step to avoid more severe borehole problems in the future.',
    },
];

const BoreholeFlushing: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Flushing Zimbabwe | Springwaters - Well Cleaning Services</title>
            <meta name="description" content="Improve water quality & pump life with Springwaters borehole flushing in Zimbabwe. Expert well cleaning to remove silt & sediment." />
            <meta name="keywords" content="borehole flushing Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImg}
                alt="Borehole Flushing Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Professional Borehole Flushing for Clearer Water & Longer Pump Life in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides expert borehole flushing services in Zimbabwe, effectively removing accumulated silt, sand, and sediment to improve water quality, prevent pump damage, and restore optimal well performance. Regular flushing is essential for water clarity, pump protection, and reliable supply.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Maintaining the Purity and Efficiency of Your Borehole</h2>
                    <p className="text-lg text-[#0a2259] mb-2">Over time, boreholes can accumulate fine particles like silt and sand, especially in certain geological areas common in Zimbabwe. This gradual buildup of sediment can lead to noticeable issues such as cloudy water, a significant reduction in flow rates, and critically, can cause abrasive wear and tear on your submersible pump. This wear can significantly shorten its lifespan and lead to costly repairs or premature replacement.</p>
                    <p className="text-lg text-[#0a2259] mb-2">Regular well cleaning through flushing is therefore a vital and proactive maintenance step. It ensures that your borehole continues to deliver clean, clear water efficiently and reliably, preventing the detrimental effects of sediment accumulation and preserving the integrity and performance of your entire water extraction system.</p>
                </div>
                <div className="flex-1 w-full max-w-md mx-auto">
                    <img src={processImgs[0]} alt="Flushing Value" className="w-full h-[240px] object-cover object-center rounded-xl shadow-lg" />
                </div>
            </div>
        </section>

        {/* Flushing Process Section */}
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Effective Borehole Flushing Process
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
                    Why Choose Springwaters for Borehole Flushing in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Restore Your Borehole's Clarity and Performance!</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't let sediment compromise your water supply. Contact Springwaters today for professional borehole flushing services in Zimbabwe. Invest in the health and longevity of your borehole.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request Flushing Service</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Maintenance Expert</a>
            </div>
        </section>
    </>
);

export default BoreholeFlushing; 
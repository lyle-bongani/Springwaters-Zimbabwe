import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaSearch, FaBroom, FaShower, FaFlask, FaArrowUp, FaTools, FaClipboardCheck } from 'react-icons/fa';

const heroImg = '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg';
const processImgs = [
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
    '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
];

const processSteps = [
    {
        icon: FaSearch,
        title: 'Thorough Diagnosis',
        desc: 'We begin with a detailed inspection, often using downhole cameras, to identify the root cause of the problem – whether it\'s sediment buildup, mineral scaling, bacterial growth, casing damage, or other issues.',
        img: processImgs[0],
    },
    {
        icon: FaBroom,
        title: 'Mechanical Brushing',
        desc: 'To physically remove encrustations and blockages from the casing and screen.',
        img: processImgs[1],
    },
    {
        icon: FaShower,
        title: 'High-Pressure Jetting/Flushing',
        desc: 'To dislodge and remove accumulated silt and sediment from the borehole shaft and surrounding aquifer.',
    },
    {
        icon: FaFlask,
        title: 'Chemical Treatment',
        desc: 'Application of specialized chemicals to dissolve mineral buildup (e.g., iron, manganese) or break down bacterial slimes (biofouling) that can clog well screens.',
    },
    {
        icon: FaArrowUp,
        title: 'Airlifting',
        desc: 'A powerful method using compressed air to lift water and dislodged debris from the well.',
    },
    {
        icon: FaTools,
        title: 'Repair & Restoration',
        desc: 'If casing damage or other structural issues are identified, we perform necessary repairs, such as re-casing sections or sealing leaks, to restore the well\'s integrity.',
    },
    {
        icon: FaClipboardCheck,
        title: 'Pump Testing & Water Quality Verification',
        desc: 'After rehabilitation, we conduct pump tests to verify improved yield and flow rate. Water quality testing is also performed to ensure the water meets desired standards for its intended use.',
    },
    {
        icon: FaCheckCircle,
        title: 'Preventative Advice',
        desc: 'We provide recommendations for ongoing maintenance to prevent future issues and maximize the lifespan of your revitalized borehole.',
    },
];

const whyChoose = [
    {
        title: 'Cost-Effective',
        desc: 'Often a more economical solution than drilling a brand-new borehole.',
    },
    {
        title: 'Expert Diagnosis',
        desc: 'Our experienced technicians accurately identify the cause of borehole issues.',
    },
    {
        title: 'Tailored Solutions',
        desc: 'We apply specific rehabilitation techniques suited to your borehole\'s unique problems.',
    },
    {
        title: 'Improved Performance',
        desc: 'Restore water yield, clarity, and overall efficiency of your well.',
    },
    {
        title: 'Environmental Benefit',
        desc: 'Utilizes existing infrastructure, reducing the environmental footprint of new drilling.',
    },
];

const BoreholeRehabilitation: React.FC = () => (
    <>
        <Helmet>
            <title>Borehole Rehabilitation Zimbabwe | Springwaters - Well Restoration</title>
            <meta name="description" content="Restore your borehole's performance with Springwaters expert borehole rehabilitation in Zimbabwe. We clean, repair & revitalize wells affected by pollution or yield issues." />
            <meta name="keywords" content="borehole rehabilitation Zimbabwe" />
        </Helmet>
        {/* Hero Section */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={heroImg}
                alt="Borehole Rehabilitation Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">Expert Borehole Rehabilitation: Restoring Your Water Well's Performance in Zimbabwe</h1>
                <p className="text-lg md:text-2xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides comprehensive borehole rehabilitation services in Zimbabwe, cleaning, repairing, and revitalizing underperforming or contaminated boreholes to restore optimal water quality and yield, often avoiding the need for new drilling. Restore your water supply and extend the life of your well with our expert solutions.</p>
            </div>
        </section>

        {/* Value Proposition Section */}
        <section id="mission-section" className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">Revitalizing Your Existing Water Investment</h2>
                    <p className="text-lg text-[#0a2259] mb-4">While boreholes are generally robust and designed for longevity, various factors can lead to a decline in their performance over time. These issues can include groundwater pollution, the accumulation of mineral encrustation (like iron or manganese deposits), biofouling from bacterial growth, or even structural problems such as casing damage or shifts due to seismic activity.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Such challenges can manifest as reduced water output, cloudy or discolored water, and recurring pump issues, impacting your reliable water supply.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Borehole well restoration is a specialized and highly effective process specifically designed to address these complex problems. By meticulously diagnosing the root cause and applying targeted solutions, we can significantly extend the lifespan of your existing water source and ensure it continues to provide clean, reliable water for your needs.</p>
                    <p className="text-lg text-[#0a2259] mb-4">Springwaters offers cost-effective and efficient solutions to bring your borehole back to life, often proving to be a more sustainable and economical alternative to drilling a brand-new well.</p>
                </div>
                <div className="flex-1 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={processImgs[0]}
                        alt="Rehabilitation Value"
                        className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Rehabilitation Process Section */}
        <section id="values-section" className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center flex items-center justify-center gap-3">
                    Our Comprehensive Borehole Rehabilitation Process
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
                    Why Choose Springwaters for Borehole Rehabilitation in Zimbabwe?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Your Borehole Underperforming?</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't abandon your existing water source. Contact Springwaters today for expert borehole rehabilitation services in Zimbabwe. Let us restore your well to its full potential and secure your reliable water supply.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request Rehabilitation Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Well Restoration Expert</a>
            </div>
        </section>
    </>
);

export default BoreholeRehabilitation; 
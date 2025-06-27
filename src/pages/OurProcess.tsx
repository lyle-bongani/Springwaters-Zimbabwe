import React from 'react';
import { FaRegComments, FaClipboardList, FaTools, FaVial, FaPumpSoap, FaHandshake, FaWater } from 'react-icons/fa';
import Header from '../components/Header';

const steps = [
    {
        icon: FaRegComments,
        title: 'Initial Consultation & Site Assessment',
        desc: 'We start by understanding your specific water needs, property characteristics, and budget. Our expert team then conducts a preliminary site assessment, often including a geophysical survey, to identify the most promising locations for groundwater and plan the optimal solution.'
    },
    {
        icon: FaClipboardList,
        title: 'Permitting & Project Planning',
        desc: 'Once a viable site is identified, we assist you with all necessary regulatory applications, including obtaining the ZINWA Authority to Drill Permit. Simultaneously, we develop a detailed project blueprint, outlining the scope, timeline, and resources required for your tailored water solution.'
    },
    {
        icon: FaTools,
        title: 'Borehole Drilling & Well Construction',
        desc: 'Our skilled drillers deploy modern rigs to expertly bore the well to the determined depth. This step includes the crucial installation of high-quality casing and well screens, ensuring the structural integrity of the borehole and protecting your water source from contamination.'
    },
    {
        icon: FaVial,
        title: 'Well Development & Water Quality Testing',
        desc: 'After drilling, we develop the well to maximize its yield and remove any drilling residue. This is followed by comprehensive water quality testing to assess potability, minerality, and pH. This analysis guides decisions on filtration needs and ensures your water is safe and suitable for its intended use.'
    },
    {
        icon: FaPumpSoap,
        title: 'Pump & Storage System Installation',
        desc: 'We then professionally install the appropriate water pump (e.g., solar, electric, manual) and integrate it with your chosen water storage solution, such as ground-level or elevated tanks. All necessary piping and electrical connections are meticulously set up for efficient water delivery.'
    },
    {
        icon: FaHandshake,
        title: 'System Handover & Ongoing Support',
        desc: 'Upon completion, we conduct thorough system testing to ensure everything operates perfectly. We provide you with a comprehensive handover, including guidance on system operation and basic maintenance. Our commitment extends beyond installation, with ongoing support and maintenance services available to ensure your water system\'s long-term reliability.'
    },
];

const OurProcess: React.FC = () => (
    <>
        <Header forceBlackLinks={true} />
        <main className="w-full bg-white min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section id="about-section" className="relative w-full bg-gradient-to-br from-[#e3f0ff] to-[#f5f8ff] py-24 px-4 text-center flex flex-col items-center justify-center overflow-hidden">
                {/* Decorative SVG */}
                <svg className="absolute left-0 top-0 w-full h-32 md:h-48 text-[#4169e1]/10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" /></svg>
                <span className="inline-flex items-center gap-2 bg-[#4169e1]/10 text-[#4169e1] font-semibold px-4 py-2 rounded-full mb-4 z-10 text-base md:text-lg">{FaWater({ className: "text-xl" })} Our Proven Process</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#4169e1] mb-4 drop-shadow-sm z-10">How We Deliver Water Security</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a2259] mb-6 z-10">A 6-Step Journey to Reliable Water Solutions</h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#0a2259] mb-8 font-medium z-10">
                    From concept to consistent flow, our structured approach ensures every Springwaters project is executed with precision, expertise, and transparency.
                </p>
                <p className="max-w-2xl mx-auto text-base md:text-lg text-[#4169e1] z-10">
                    Discover how we guide you every step of the way, guaranteeing your satisfaction and long-term water access.
                </p>
            </section>

            {/* Decorative SVG wave at the top */}
            <section id="mission-section" className="w-full bg-white pt-0 pb-20 px-4 flex flex-col items-center relative overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-24 md:h-32 text-[#4169e1]/10 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" /></svg>
                <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20 mt-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">1</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">Initial Consultation & Site Assessment</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">We start by understanding your specific water needs, property characteristics, and budget. Our expert team then conducts a preliminary site assessment, often including a geophysical survey, to identify the most promising locations for groundwater and plan the optimal solution.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">2</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">Permitting & Project Planning</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">Once a viable site is identified, we assist you with all necessary regulatory applications, including obtaining the ZINWA Authority to Drill Permit. Simultaneously, we develop a detailed project blueprint, outlining the scope, timeline, and resources required for your tailored water solution.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">3</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">Borehole Drilling & Well Construction</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">Our skilled drillers deploy modern rigs to expertly bore the well to the determined depth. This step includes the crucial installation of high-quality casing and well screens, ensuring the structural integrity of the borehole and protecting your water source from contamination.</p>
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">4</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">Well Development & Water Quality Testing</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">After drilling, we develop the well to maximize its yield and remove any drilling residue. This is followed by comprehensive water quality testing to assess potability, minerality, and pH. This analysis guides decisions on filtration needs and ensures your water is safe and suitable for its intended use.</p>
                    </div>
                    {/* Step 5 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">5</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">Pump & Storage System Installation</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">We then professionally install the appropriate water pump (e.g., solar, electric, manual) and integrate it with your chosen water storage solution, such as ground-level or elevated tanks. All necessary piping and electrical connections are meticulously set up for efficient water delivery.</p>
                    </div>
                    {/* Step 6 */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-5xl font-extrabold text-[#4169e1] shadow-lg rounded-full bg-white ring-4 ring-[#4169e1]/10 p-2">6</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#4169e1]">System Handover & Ongoing Support</h3>
                        </div>
                        <p className="text-[#0a2259] text-lg md:text-xl font-light max-w-2xl">Upon completion, we conduct thorough system testing to ensure everything operates perfectly. We provide you with a comprehensive handover, including guidance on system operation and basic maintenance. Our commitment extends beyond installation, with ongoing support and maintenance services available to ensure your water system's long-term reliability.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="why-choose-section" className="relative w-full py-20 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-400 text-white text-center overflow-hidden">
                {/* Decorative SVG */}
                <svg className="absolute bottom-0 left-0 w-full h-32 md:h-48 text-blue-300/20" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,133.3C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
                <div className="relative z-10 flex flex-col items-center">
                    {FaWater({ className: "text-5xl mb-4 text-blue-100 drop-shadow" })}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Water Future?</h2>
                    <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Contact Springwaters today to start your project or learn more about our proven process for reliable water solutions in Zimbabwe.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-100 hover:text-blue-900 transition text-lg text-center">{FaHandshake({ className: "text-2xl" })} Start Your Project</a>
                        <a href="#steps" className="inline-flex items-center gap-2 bg-blue-100 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-white hover:text-[#4169e1] transition text-lg text-center">{FaClipboardList({ className: "text-2xl" })} Learn More About Our Process</a>
                    </div>
                </div>
            </section>
        </main>
    </>
);

export default OurProcess; 
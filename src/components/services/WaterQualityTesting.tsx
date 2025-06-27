import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaVial, FaClipboardList, FaFlask, FaFileAlt, FaUserMd } from 'react-icons/fa';

const WaterQualityTesting: React.FC = () => (
    <>
        <Helmet>
            <title>Water Quality Testing Zimbabwe | Springwaters - Safe Borehole Water</title>
            <meta name="description" content="Ensure safe & suitable water with Springwaters expert water quality testing in Zimbabwe. Comprehensive analysis for drinking, industrial & agricultural use." />
            <meta name="keywords" content="water quality testing Zimbabwe" />
        </Helmet>
        {/* Hero/Intro Section with Background Image */}
        <section id="about-section" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-[15vh]">
            <img
                src={process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg'}
                alt="Water Quality Testing Hero"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4169e1]/80 via-[#4169e1]/60 to-transparent" />
            <div className="relative z-10 text-center w-full px-4 pt-24 md:pt-40">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">Expert Water Quality Testing for Safe & Suitable Water in Zimbabwe</h1>
                <p className="text-lg md:text-xl text-white font-medium drop-shadow mb-6 max-w-2xl mx-auto">Springwaters provides comprehensive water quality testing services for boreholes across Zimbabwe, ensuring your water is safe for consumption and perfectly suited for its intended domestic, industrial, or agricultural application.</p>
            </div>
        </section>
        {/* Value Section */}
        <section id="mission-section" className="bg-white py-8 px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-4">The Essential Step for Peace of Mind and Optimal Use</h2>
            <p className="text-lg text-[#0a2259] mb-2">Understanding the composition of your borehole water is paramount. Detailed water analysis confirms potability, reveals minerality, pH, and any contaminants—crucial for safe use and system longevity.</p>
            <p className="text-lg text-[#0a2259] mb-2">This knowledge guides casing, filtration, and pump choices, and ensures your water is perfect for its intended use. Springwaters empowers you to utilize your borehole water safely and efficiently.</p>
        </section>
        {/* Process Section */}
        <section id="values-section" className="bg-white py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-8 text-center flex items-center justify-center gap-2">
                {React.createElement(FaClipboardList as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1] text-3xl" })}
                Our Comprehensive Water Quality Testing Process
            </h2>
            <ol className="space-y-8">
                <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">1</span>
                    <div>
                        <span className="font-bold text-[#4169e1]">Professional Sampling:</span>
                        <span className="block text-[#0a2259]"> Our technicians collect water samples using sterile techniques after initial pump testing, ensuring a truly representative sample.</span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">2</span>
                    <div>
                        <span className="font-bold text-[#4169e1]">Laboratory Analysis:</span>
                        <span className="block text-[#0a2259]"> Samples are sent to accredited labs for thorough analysis, including:</span>
                        <ul className="list-disc pl-6 text-[#0a2259] mt-2">
                            <li>Bacteriological: E. coli, coliforms</li>
                            <li>Physical: pH, turbidity, conductivity, TDS</li>
                            <li>Chemical: Minerals, heavy metals, nitrates, etc.</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">3</span>
                    <div>
                        <span className="font-bold text-[#4169e1]">Detailed Reporting:</span>
                        <span className="block text-[#0a2259]"> You receive a comprehensive report outlining results, indicating if the water meets drinking standards or is suitable for your needs.</span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4169e1] text-white flex items-center justify-center text-xl font-bold shadow-lg">4</span>
                    <div>
                        <span className="font-bold text-[#4169e1]">Expert Recommendations:</span>
                        <span className="block text-[#0a2259]"> Our specialists provide tailored advice on treatment, filtration, or borehole setup adjustments to optimize your water quality.</span>
                    </div>
                </li>
            </ol>
        </section>
        {/* Why Choose Us Section */}
        <section id="why-choose-section" className="bg-white py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-8 text-center flex items-center justify-center gap-2">
                {React.createElement(FaFileAlt as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1] text-3xl" })}
                Why Choose Springwaters for Water Quality Testing in Zimbabwe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                    {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                    <div>
                        <span className="font-bold text-[#4169e1]">Health & Safety Assurance:</span>
                        <span className="block text-[#0a2259]"> We help confirm your water is safe for drinking and domestic use, protecting your family or employees.</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                    <div>
                        <span className="font-bold text-[#4169e1]">Informed Decisions:</span>
                        <span className="block text-[#0a2259]"> Our detailed reports guide decisions on casing, pump selection, and filtration needs, optimizing your borehole system.</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                    <div>
                        <span className="font-bold text-[#4169e1]">Application Suitability:</span>
                        <span className="block text-[#0a2259]"> We assess water for specific uses, ensuring it meets the requirements for agriculture, irrigation, or industrial processes.</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                    <div>
                        <span className="font-bold text-[#4169e1]">Compliance Support:</span>
                        <span className="block text-[#0a2259]"> Our testing adheres to relevant Zimbabwean standards, providing official documentation for your records.</span>
                    </div>
                </div>
                <div className="flex items-start gap-4 md:col-span-2">
                    {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, { className: "mt-1 text-green-500 text-2xl" })}
                    <div>
                        <span className="font-bold text-[#4169e1]">Experienced Guidance:</span>
                        <span className="block text-[#0a2259]"> Our team offers clear explanations of results and practical solutions for any water quality concerns.</span>
                    </div>
                </div>
            </div>
        </section>
        {/* Call to Action Section */}
        <section id="newsletter-section" className="w-full py-16 px-4 bg-[#4169e1] bg-gradient-to-br from-[#4169e1] to-blue-400 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ensure Your Water is Pure and Perfect for Your Needs!</h2>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">Don't leave your water quality to chance. Contact Springwaters today for expert water quality testing services in Zimbabwe. Gain the insights you need for safe, reliable, and optimally utilized borehole water.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="/contact" className="inline-block bg-white text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-100 transition text-lg">Request a Water Test Quote</a>
                <a href="/contact" className="inline-block bg-white border border-[#4169e1] hover:bg-blue-50 text-[#4169e1] font-semibold px-10 py-4 rounded-lg shadow transition text-lg">Speak to a Water Specialist</a>
            </div>
        </section>
    </>
);

export default WaterQualityTesting; 
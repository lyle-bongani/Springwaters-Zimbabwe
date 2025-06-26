import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const AboutUsSection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-20 bg-white">
            {/* Left: Overlapping Images and Stat Card with Light Blue BG */}
            <div className="relative flex-1 flex justify-center items-center mb-10 md:mb-0 min-w-[340px] max-w-md">
                {/* Light Blue Background Shape */}
                <div className="absolute -top-6 -left-6 w-80 h-80 bg-[#e3f0ff] rounded-3xl z-0" style={{ filter: 'blur(2px)' }} />
                {/* Main Image */}
                <img
                    src={process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg'}
                    alt="Consultant"
                    className="w-72 h-72 object-cover rounded-2xl shadow-xl relative z-10"
                />
                {/* Stat Card - Royal Blue */}
                <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-[#4169e1] text-white px-8 py-6 rounded-xl shadow-lg flex flex-col items-center text-lg min-w-[170px] z-20">
                    <span className="text-3xl font-bold">680</span>
                    <span className="text-base font-semibold">Business Trust Us</span>
                </div>
                {/* Overlapping Small Image */}
                <img
                    src={process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg'}
                    alt="Business Woman"
                    className="w-32 h-36 object-cover rounded-xl shadow-lg absolute right-[-24px] bottom-[-24px] border-4 border-white z-20"
                />
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 max-w-xl md:pl-16">
                <div className="text-xs font-semibold tracking-widest text-[#4169e1] mb-2 flex items-center">
                    <span className="mr-2">ABOUT US</span>
                    <span className="w-8 h-1 bg-[#4169e1] rounded-full inline-block"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4169e1] mb-6 leading-tight">
                    We Are Business Consultants Dedicated To Driving Your Success
                </h2>
                <p className="text-gray-700 mb-6 text-lg md:text-xl font-medium">
                    At Springwaters, we are your trusted partner for comprehensive water solutions, committed to ensuring sustainable and clean water access throughout Zimbabwe.
                </p>
                <p className="text-gray-700 mb-6 text-lg md:text-xl font-medium">
                    Our expertise spans from initial site assessment to complete system installation, addressing the diverse needs of our clients.
                </p>
                <p className="text-gray-700 mb-6 text-lg md:text-xl font-medium">
                    Whether you require expert borehole drilling for a new water source, efficient irrigation systems to boost agricultural productivity, or dependable bulk water supply for immediate needs.
                </p>
                <p className="text-gray-700 mb-10 text-lg md:text-xl font-medium">
                    Springwaters delivers tailored solutions for homes, farms, and businesses across the nation.
                </p>
                <div className="flex items-center mb-6">
                    {FaRegCalendarAlt({ className: "text-[#4169e1] text-2xl mr-3" })}
                    <div>
                        <div className="font-bold text-[#4169e1]">15 Years Of Experience</div>
                        <div className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <button className="bg-[#4169e1] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition flex items-center gap-2">
                    Learn More <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
};

export default AboutUsSection; 
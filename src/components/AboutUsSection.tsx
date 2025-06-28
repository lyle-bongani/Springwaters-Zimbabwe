import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-10 px-2 sm:py-14 sm:px-4 md:px-10 lg:px-20 bg-white">
            {/* Left: Overlapping Images and Stat Card with Light Blue BG */}
            <div className="relative flex-1 flex justify-center items-center mb-8 md:mb-0 min-w-[220px] max-w-xs sm:max-w-sm md:max-w-md">
                {/* Light Blue Background Shape */}
                <div className="absolute -top-4 -left-4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#e3f0ff] rounded-3xl z-0" style={{ filter: 'blur(2px)' }} />
                {/* Main Image */}
                <img
                    src={process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10 (1).jpeg'}
                    alt="Consultant"
                    className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl relative z-10"
                />
                {/* Stat Card - Royal Blue */}
                <div className="absolute left-[-12px] sm:left-[-24px] md:left-[-32px] top-1/2 -translate-y-1/2 bg-[#4169e1] text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-xl shadow-lg flex flex-col items-center text-base sm:text-lg min-w-[110px] sm:min-w-[140px] md:min-w-[170px] z-20">
                    <span className="text-2xl sm:text-3xl font-bold">680</span>
                    <span className="text-xs sm:text-base font-semibold">Business Trust Us</span>
                </div>
                {/* Overlapping Small Image */}
                <img
                    src={process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09 (1).jpeg'}
                    alt="Business Woman"
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-36 object-cover rounded-xl shadow-lg absolute right-[-10px] sm:right-[-16px] md:right-[-24px] bottom-[-10px] sm:bottom-[-16px] md:bottom-[-24px] border-4 border-white z-20"
                />
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 max-w-xl md:pl-8 lg:pl-16">
                <div className="text-xs font-semibold tracking-widest text-[#4169e1] mb-2 flex items-center">
                    <span className="mr-2">ABOUT US</span>
                    <span className="w-8 h-1 bg-[#4169e1] rounded-full inline-block"></span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4169e1] mb-4 sm:mb-6 leading-tight">
                    We Are Business Consultants Dedicated To Driving Your Success
                </h2>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium">
                    At Springwaters, we are dedicated specialists in delivering innovative water solutions designed to empower your success. Our mission is to provide sustainable and reliable water access across Zimbabwe, supporting communities, agriculture, and businesses with unmatched professionalism.
                </p>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium">
                    With a comprehensive approach, we manage every stage—from thorough site evaluations to seamless system installations—ensuring each project meets the unique requirements of our clients.
                </p>
                <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium">
                    Whether you need advanced borehole drilling, modern irrigation systems to enhance productivity, or secure bulk water supply for urgent demands, Springwaters is your trusted partner.
                </p>
                <p className="text-gray-700 mb-6 sm:mb-10 text-base sm:text-lg md:text-xl font-medium">
                    We pride ourselves on delivering customized solutions for households, farms, and enterprises nationwide, setting the standard for quality and dependability in the water industry.
                </p>
                <div className="flex items-center mb-4 sm:mb-6">
                    {FaRegCalendarAlt({ className: "text-[#4169e1] text-xl sm:text-2xl mr-2 sm:mr-3" })}
                    <div>
                        <div className="font-bold text-[#4169e1] text-sm sm:text-base">15 Years of Expertise</div>
                        <div className="text-gray-500 text-xs sm:text-sm">Benefit from our extensive industry experience and trusted service in delivering high-quality water solutions.</div>
                    </div>
                </div>
                <Link to="/about" className="inline-block bg-[#4169e1] hover:bg-blue-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow transition text-sm sm:text-base">
                    <span className="flex items-center gap-2">Learn More <span className="text-base sm:text-lg">→</span></span>
                </Link>
            </div>
        </section>
    );
};

export default AboutUsSection; 
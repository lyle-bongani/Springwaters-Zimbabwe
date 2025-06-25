import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVisionSection: React.FC = () => {
    return (
        <section id="mission-section" className="w-full bg-white px-4 py-2 flex flex-col items-center mt-40">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 md:gap-24 justify-center items-stretch">
                {/* Mission */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4169e1]/10 mb-6">
                        {React.createElement(FaBullseye as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-3xl text-[#4169e1]" })}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] text-center drop-shadow-sm">Our Mission</h2>
                    <p className="text-[#0a2259] text-lg md:text-xl leading-relaxed font-medium">
                        To deliver accessible, clean, and affordable water to every Zimbabwean who needs it, fostering sustainable development and improved quality of life.
                    </p>
                </div>
                {/* Vision */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4169e1]/10 mb-6">
                        {React.createElement(FaEye as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-3xl text-[#4169e1]" })}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] text-center drop-shadow-sm">Our Vision</h2>
                    <p className="text-[#0a2259] text-lg md:text-xl leading-relaxed font-medium">
                        To be the leading and most trusted provider of comprehensive borehole and irrigation solutions in Zimbabwe and the Southern African region, recognized for our innovation, integrity, and exceptional service.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection; 
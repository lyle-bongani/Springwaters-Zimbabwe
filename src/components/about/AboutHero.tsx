import React from 'react';

const AboutHero: React.FC = () => {
    return (
        <section id="about-section" className="bg-white pt-32 pb-56 px-0 flex flex-col items-center min-h-[80vh] mt-16 relative">
            <h1 className="text-5xl font-extrabold text-center mb-2 text-[#4169e1] drop-shadow-sm">Pioneering Water Solutions Since 2008</h1>
            <p className="text-2xl text-[#4169e1] text-center mb-8 font-light font-medium">Empowering Zimbabwe with reliable, clean, and sustainable water resources since 2008.</p>
            <div className="relative w-screen flex justify-center">
                <img
                    src="/images/pics/WhatsApp Image 2025-06-25 at 18.03.44.jpeg"
                    alt="Springwaters team at work"
                    className="w-screen h-[50vh] rounded-3xl shadow-2xl object-cover"
                />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 text-center space-y-4 md:space-y-6 border border-white/40">
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium">Springdrill (Private) Limited, trading as Springwaters, was officially incorporated on 8th April 2008 in Harare, Zimbabwe (Registration Number 10630/2008).</p>
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium">From our inception, our vision has been clear: to empower Zimbabwean communities, industries, and farms with reliable, clean, and sustainable water resources.</p>
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium">As a wholly Zimbabwean-owned company, we take immense pride in contributing directly to the nation's development and well-being.</p>
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium">Our deep understanding of local hydrology, environmental conditions, and community needs sets us apart.</p>
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium">We are more than just contractors; we are partners in ensuring water security for generations to come.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero; 
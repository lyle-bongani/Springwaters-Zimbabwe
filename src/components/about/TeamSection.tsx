import React, { useState, useEffect } from 'react';

const team = [
    {
        name: 'Munesu Tsiga',
        title: 'Managing Director',
        desc: `As the Managing Director, Munesu Tsiga leads our Technical (Operations) Department. With vast hands-on experience in the field of borehole drilling and water management, Munesu has a proven track record from working with various prominent companies in this sector. His deep understanding of hydrological surveys, drilling intricacies, and system installations is fundamental to our operational excellence and the quality of every project.`,
    },
    {
        name: 'Dazzy Tumbu',
        title: 'Finance & Administration',
        desc: `Dazzy Tumbu oversees our Finance and Administration, bringing over 20 years of extensive experience in financial management and corporate administration. Having worked with esteemed companies such as Wade Adams, Construction Associates (Private) Limited, Lonrho Constructions, and Waterfalls Construction, Dazzy ensures our operational stability, financial transparency, and smooth administrative processes, building trust with our clients and partners.`,
    },
    {
        name: 'Tinashe Winini',
        title: 'Marketing & Sales Manager',
        desc: `Tinashe Winini spearheads our Marketing and Sales Department. His profound experience in the water solutions market and keen understanding of client needs have been instrumental in securing numerous large-scale projects and building strong relationships across Zimbabwe. Tinashe is dedicated to ensuring our clients are always up-to-date with the latest technologies and best solutions.`,
    },
];

const TeamSection: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Optional: auto-advance carousel every 6s on mobile
    useEffect(() => {
        if (!isMobile) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === team.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [isMobile]);

    const prevCard = () => setCurrent((prev) => (prev === 0 ? team.length - 1 : prev - 1));
    const nextCard = () => setCurrent((prev) => (prev === team.length - 1 ? 0 : prev + 1));

    return (
        <section id="team-section" className="w-full bg-gradient-to-b from-blue-50 to-white px-2 sm:px-4 md:px-8 py-16 sm:py-20 md:py-24 flex flex-col items-center mt-16 md:mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-3 sm:mb-4 text-center drop-shadow-sm">The Experts Behind Springwaters</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#0a2259] text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl font-medium">At the heart of Springwaters is a team of highly experienced and qualified professionals who bring unparalleled expertise to every project. Our collective knowledge in hydrogeology, drilling engineering, irrigation design, and project management ensures that you receive the best possible solution.</p>
            {/* Mobile Carousel */}
            <div className="block md:hidden w-full max-w-xs mx-auto relative">
                <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-5 border-t-4 border-[#4169e1] hover:shadow-2xl transition-all duration-200 min-h-[320px] w-full">
                        <span className="text-base sm:text-lg md:text-xl font-bold text-[#4169e1] mb-1 text-center uppercase tracking-wide">{team[current].name}</span>
                        <span className="text-xs sm:text-base font-semibold text-[#0a2259] mb-2 sm:mb-3 text-center italic">{team[current].title}</span>
                        <span className="text-xs sm:text-sm md:text-base font-medium text-[#0a2259] text-center leading-relaxed">{team[current].desc}</span>
                    </div>
                </div>
                {/* Carousel Controls */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={prevCard}
                        className="bg-[#4169e1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-800 transition"
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>
                    <div className="flex gap-2">
                        {team.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full focus:outline-none border-none ${current === idx ? 'bg-[#4169e1]' : 'bg-blue-200'} transition`}
                                aria-label={`Go to slide ${idx + 1}`}
                                style={{ boxShadow: 'none', border: 'none', padding: 0 }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextCard}
                        className="bg-[#4169e1] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-800 transition"
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid w-full max-w-6xl grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 md:gap-10 mb-8 md:mb-10">
                {team.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-5 sm:p-7 md:p-8 border-t-4 border-[#4169e1] hover:shadow-2xl transition-all duration-200 min-h-[320px] w-full">
                        <span className="text-base sm:text-lg md:text-xl font-bold text-[#4169e1] mb-1 text-center uppercase tracking-wide">{member.name}</span>
                        <span className="text-xs sm:text-base font-semibold text-[#0a2259] mb-2 sm:mb-3 text-center italic">{member.title}</span>
                        <span className="text-xs sm:text-sm md:text-base font-medium text-[#0a2259] text-center leading-relaxed">{member.desc}</span>
                    </div>
                ))}
            </div>
            <p className="text-[#0a2259] text-sm sm:text-base md:text-lg text-center max-w-3xl font-medium mt-6 md:mt-8">
                <span className="font-bold">Our Skilled Workforce:</span> Beyond our leadership, our team of fifteen dedicated professionals includes highly trained technicians, artisans, foremen, and support staff, all committed to delivering excellence on site and behind the scenes. We continuously invest in training to maintain our high standards of expertise and safety.
            </p>
        </section>
    );
};

export default TeamSection; 
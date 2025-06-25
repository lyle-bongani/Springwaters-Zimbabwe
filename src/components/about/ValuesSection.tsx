import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const values = [
    {
        name: 'Integrity',
        desc: 'Operating with honesty and transparency in all our dealings.'
    },
    {
        name: 'Excellence',
        desc: 'Committed to delivering the highest quality workmanship and durable solutions.'
    },
    {
        name: 'Customer Focus',
        desc: 'Prioritizing client needs and striving for complete satisfaction.'
    },
    {
        name: 'Sustainability',
        desc: 'Promoting environmentally responsible practices in water resource management.'
    },
    {
        name: 'Innovation',
        desc: 'Embracing new technologies and methods to enhance our services.'
    },
];

const cardStyles = [
    'bg-white text-[#4169e1] rotate-[-2deg] shadow-lg',
    'bg-[#4169e1] text-white rotate-[2deg] shadow-xl',
    'bg-white text-[#4169e1] rotate-[-1deg] shadow-lg',
    'bg-white text-[#4169e1] rotate-[1deg] shadow-lg',
    'bg-[#4169e1] text-white rotate-[-2deg] shadow-xl',
];

const cardOffsets = [
    'mt-0',
    'mt-8',
    'mt-4',
    'mt-12',
    'mt-6',
];

const ValuesSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    // Detect mobile (smaller than 768px)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-advance carousel every 5 seconds on mobile
    useEffect(() => {
        if (!isMobile) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === values.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [isMobile]);

    return (
        <section id="values-section" className="w-full bg-white px-4 py-24 flex flex-col items-center mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-12 text-center drop-shadow-sm">Our Values</h2>
            {/* Custom carousel for mobile */}
            <div className="block md:hidden w-full max-w-xs mx-auto relative">
                <div className="w-full flex justify-center">
                    <div
                        className={`flex flex-col items-start rounded-3xl p-8 w-72 min-h-[200px] ${cardStyles[current % cardStyles.length]} transition-all`}
                        style={{ zIndex: 10 + current }}
                    >
                        <span className="mb-4">
                            {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, {
                                className: `text-2xl ${cardStyles[current % cardStyles.length].includes('text-white') ? 'text-white' : 'text-[#4169e1]'} opacity-80`
                            })}
                        </span>
                        <span className="text-xl md:text-2xl font-bold mb-2 font-sans" style={{ lineHeight: 1.1 }}>{values[current].name}</span>
                        <span className="text-base md:text-lg font-medium opacity-90 font-sans">{values[current].desc}</span>
                    </div>
                </div>
                {/* Dots navigation only */}
                <div className="flex justify-center gap-2 mt-6">
                    {values.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full focus:outline-none border-none ${current === idx ? 'bg-[#4169e1]' : 'bg-blue-200'} transition`}
                            aria-label={`Go to slide ${idx + 1}`}
                            style={{ boxShadow: 'none', border: 'none', padding: 0 }}
                        />
                    ))}
                </div>
            </div>
            {/* Flex row for desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
                {values.map((value, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-start rounded-3xl p-8 w-72 md:w-80 min-h-[200px] ${cardStyles[idx % cardStyles.length]} ${cardOffsets[idx % cardOffsets.length]} transition-all`}
                        style={{ zIndex: 10 + idx }}
                    >
                        <span className="mb-4">
                            {React.createElement(FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>, {
                                className: `text-2xl ${cardStyles[idx % cardStyles.length].includes('text-white') ? 'text-white' : 'text-[#4169e1]'} opacity-80`
                            })}
                        </span>
                        <span className="text-xl md:text-2xl font-bold mb-2 font-sans" style={{ lineHeight: 1.1 }}>{value.name}</span>
                        <span className="text-base md:text-lg font-medium opacity-90 font-sans">{value.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection; 
import React, { useEffect, useRef, useState } from 'react';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { gsap } from 'gsap';

const images = [
    process.env.PUBLIC_URL + '/images/pics/title-image.jpg',
    process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-05-10 at 16.43.52.jpeg',
    process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-05-31 at 20.01.34.jpeg',
];

const features = [
    {
        title: 'Expert Borehole Drilling',
        desc: 'Precision siting, robust casing, and efficient pump installations for reliable water.',
        icon: <WaterDropIcon fontSize="large" className="text-primary" />,
    },
    {
        title: 'Irrigation Solutions',
        desc: 'Custom irrigation systems to maximize your agricultural productivity.',
        icon: <AgricultureIcon fontSize="large" className="text-primary" />,
    },
    {
        title: 'Bulk Water Delivery',
        desc: 'Clean water delivered to your doorstep, fast and convenient.',
        icon: <LocalShippingIcon fontSize="large" className="text-primary" />,
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        imageRefs.current.forEach((img, idx) => {
            if (img) {
                gsap.to(img, {
                    opacity: idx === current ? 1 : 0,
                    duration: 1.2,
                    ease: 'power2.inOut',
                });
            }
        });
    }, [current]);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-start bg-black overflow-hidden rounded-3xl m-4">
            {/* Background Images */}
            {images.map((img, idx) => (
                <img
                    key={img}
                    ref={el => { imageRefs.current[idx] = el; }}
                    src={img}
                    alt="hero background"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: idx === current ? 1 : 0 }}
                />
            ))}
            {/* Main Content */}
            <div className="relative z-10 flex flex-col justify-center h-full pl-16 pt-20 pb-40 max-w-2xl">
                <span className="inline-block bg-white/80 text-black-grey px-4 py-1 rounded-full mb-6 text-sm font-semibold shadow">Water Solutions</span>
                <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg leading-tight">
                    Unlock Reliable Water Access<br />Across Zimbabwe
                </h1>
                <p className="text-lg mb-8 text-white drop-shadow">
                    At Springwaters, we are your trusted partner for comprehensive water solutions, committed to ensuring sustainable and clean water access throughout Zimbabwe.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded shadow hover:bg-black-grey hover:text-white transition-colors duration-200"
                >
                    Get a Free Quote
                </a>
            </div>
            {/* Right Info Card */}
            <div className="absolute top-10 right-10 z-20 bg-white/90 rounded-2xl shadow-lg px-6 py-4 text-black-grey text-right max-w-xs">
                <div className="font-semibold text-sm mb-1">Borehole Technology</div>
                <div className="text-xs">From Springwaters</div>
            </div>
            {/* Feature Cards Row */}
            <div className="absolute left-1/2 bottom-[-60px] -translate-x-1/2 flex gap-6 z-30">
                <div className="flex bg-white rounded-3xl shadow-lg px-8 py-6 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center w-56"
                        >
                            <div className="mb-2">{f.icon}</div>
                            <div className="font-bold text-black-grey mb-1 text-center">{f.title}</div>
                            <div className="text-black-grey text-sm text-center">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero; 
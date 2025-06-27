import React from 'react';

const testimonials = [
    {
        name: 'Bishop Pride Sibiya',
        role: 'Glory Ministries Bishop',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-05-10 at 16.42.35.jpeg',
        quote: 'Finding a reliable borehole drilling company can be tough, but Springwaters made the entire process stress-free. Their team was incredibly knowledgeable and professional.'
    },
    {
        name: 'Sarah Hamusi',
        role: 'Lodge Owner, Hwange',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-05-10 at 16.43.52.jpeg',
        quote: 'We needed a borehole drilled quickly and efficiently for our new lodge, and Springwaters delivered! The borehole produces excellent water flow.'
    },
    {
        name: 'Thandiwe Moyo',
        role: 'Community Project Manager, Gwanda',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-05-31 at 20.01.34.jpeg',
        quote: 'Springwaters went above and beyond to ensure our new borehole would provide clean water for the entire village. Their commitment to sustainable practices impressed us greatly.'
    },
];

const TestimonialsSection = () => (
    <section id="values-section" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-black-grey">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded shadow text-center flex flex-col items-center">
                    <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary" />
                    <p className="italic text-black-grey mb-4">"{t.quote}"</p>
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-sm text-black-grey">{t.role}</div>
                </div>
            ))}
        </div>
    </section>
);

export default TestimonialsSection; 
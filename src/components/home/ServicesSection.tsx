import React from 'react';

const services = [
    {
        title: 'Borehole Drilling & Installation',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.10.jpeg',
        desc: 'Access reliable groundwater with our expert borehole drilling services in Zimbabwe. We provide precise siting, robust casing, and efficient pump installations (solar, electric, manual) for a consistent water supply.'
    },
    {
        title: 'Irrigation Systems & Design',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.09.jpeg',
        desc: 'Maximize your agricultural yields and manage water efficiently with our custom irrigation system design and setup in Zimbabwe. We offer both manual and automated irrigation solutions for farms and gardens.'
    },
    {
        title: 'Bulk Water Supply & Delivery',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.08.jpeg',
        desc: 'For immediate and convenient water needs, our bulk water delivery service in Zimbabwe brings clean water directly to your doorstep. Available in volumes from 2,000L to 20,000L for any requirement.'
    },
    {
        title: 'Borehole Maintenance',
        img: process.env.PUBLIC_URL + '/images/pics/WhatsApp Image 2025-06-25 at 18.12.07.jpeg',
        desc: 'Ensure the longevity and optimal performance of your existing borehole with our professional maintenance, repairs, and rehabilitation services. We keep your water well running smoothly.'
    },
];

const ServicesSection = () => (
    <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-black-grey">Our Core Water Services for Zimbabwe</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded shadow text-center flex flex-col items-center">
                    <img src={service.img} alt={service.title} className="mx-auto mb-4 h-20 object-contain rounded" />
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-black-grey text-sm">{service.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ServicesSection; 
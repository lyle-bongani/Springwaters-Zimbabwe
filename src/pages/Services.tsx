import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const services = [
    {
        title: 'Borehole Drilling & Installation',
        desc: 'Access reliable groundwater with our expert borehole drilling services in Zimbabwe. We provide precise siting, robust casing, and efficient pump installations (solar, electric, manual) for a consistent water supply.'
    },
    {
        title: 'Irrigation Systems & Design',
        desc: 'Maximize your agricultural yields and manage water efficiently with our custom irrigation system design and setup in Zimbabwe. We offer both manual and automated irrigation solutions for farms and gardens.'
    },
    {
        title: 'Bulk Water Supply & Delivery',
        desc: 'For immediate and convenient water needs, our bulk water delivery service in Zimbabwe brings clean water directly to your doorstep. Available in volumes from 2,000L to 20,000L for any requirement.'
    },
    {
        title: 'Borehole Maintenance',
        desc: 'Ensure the longevity and optimal performance of your existing borehole with our professional maintenance, repairs, and rehabilitation services. We keep your water well running smoothly.'
    },
];

const Services = () => (
    <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-8">Our Services</h1>
            <div className="space-y-8">
                {services.map((service, idx) => (
                    <section key={idx} className="bg-gray-50 p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-primary mb-2">{service.title}</h2>
                        <p className="text-black-grey">{service.desc}</p>
                    </section>
                ))}
            </div>
        </main>
        <Footer />
    </div>
);

export default Services; 
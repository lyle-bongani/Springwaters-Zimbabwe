import React from 'react';

const clientLogos = [
    '/images/clients/client1.png',
    '/images/clients/client2.png',
    '/images/clients/client3.png',
    '/images/clients/client4.png',
    '/images/clients/client5.png',
    '/images/clients/client6.png',
];

const OurClients: React.FC = () => {
    return (
        <section className="bg-white pt-32 pb-16 px-4 flex flex-col items-center min-h-[60vh] mt-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#4169e1]">Our Clients</h1>
            <p className="text-lg text-[#4169e1] text-center mb-10 max-w-2xl">We are proud to have partnered with a diverse range of clients across Zimbabwe, delivering reliable water solutions for homes, businesses, and communities.</p>
            <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
                {clientLogos.map((logo, idx) => (
                    <img
                        key={idx}
                        src={logo}
                        alt={`Client ${idx + 1}`}
                        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition rounded-xl bg-white/80 shadow"
                    />
                ))}
            </div>
        </section>
    );
};

export default OurClients; 
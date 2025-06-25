import React from 'react';

const AdvantageSection: React.FC = () => {
    return (
        <section id="why-choose-section" className="w-full bg-[#4169e1] px-4 py-24 flex flex-col items-center mt-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center drop-shadow-sm">Your Advantage with Springwaters: Beyond Just Water</h2>
            <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl font-medium">Choosing Springwaters means choosing a partner committed to your long-term water security.</p>
            <div className="w-full max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                    <div className="w-2 h-16 rounded-full bg-[#4169e1] mx-auto mb-6" />
                    <p className="text-[#0a2259] text-lg md:text-xl font-medium leading-relaxed">
                        Springwaters combines unmatched local expertise with a deep understanding of Zimbabwe's unique water challenges. We provide end-to-end borehole and water solutions using advanced equipment, ensuring efficient and reliable results. Our client-focused approach emphasizes transparency and tailored solutions, while our commitment to quality and sustainability guarantees long-lasting, eco-friendly water systems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdvantageSection; 
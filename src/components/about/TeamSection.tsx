import React from 'react';

const team = [
    {
        name: 'Munesu Tsiga',
        title: 'Managing Director',
        desc: `As the Managing Director, Munesu Tsiga leads our Technical (Operations) Department. With vast hands-on experience in the field of borehole drilling and water management, Munesu has a proven track record from working with various prominent companies in this sector. His deep understanding of hydrological surveys, drilling intricacies, and system installations is fundamental to our operational excellence and the quality of every project.`
    },
    {
        name: 'Dazzy Tumbu',
        title: 'Finance & Administration',
        desc: `Dazzy Tumbu oversees our Finance and Administration, bringing over 20 years of extensive experience in financial management and corporate administration. Having worked with esteemed companies such as Wade Adams, Construction Associates (Private) Limited, Lonrho Constructions, and Waterfalls Construction, Dazzy ensures our operational stability, financial transparency, and smooth administrative processes, building trust with our clients and partners.`
    },
    {
        name: 'Tinashe Winini',
        title: 'Marketing & Sales Manager',
        desc: `Tinashe Winini spearheads our Marketing and Sales Department. His profound experience in the water solutions market and keen understanding of client needs have been instrumental in securing numerous large-scale projects and building strong relationships across Zimbabwe. Tinashe is dedicated to ensuring our clients are always up-to-date with the latest technologies and best solutions.`
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="w-full bg-white px-4 py-24 flex flex-col items-center mt-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-6 text-center drop-shadow-sm">The Experts Behind Springwaters</h2>
            <p className="text-xl text-[#0a2259] text-center mb-12 max-w-3xl font-medium">At the heart of Springwaters is a team of highly experienced and qualified professionals who bring unparalleled expertise to every project. Our collective knowledge in hydrogeology, drilling engineering, irrigation design, and project management ensures that you receive the best possible solution.</p>
            <div className="max-w-4xl w-full flex flex-col gap-12 mb-10">
                {team.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-2xl md:text-3xl font-bold text-[#4169e1] mb-1">{member.name}</span>
                        <span className="text-lg font-semibold text-[#0a2259] mb-2">{member.title}</span>
                        <span className="text-[#0a2259] text-base md:text-lg font-medium max-w-3xl">{member.desc}</span>
                    </div>
                ))}
            </div>
            <p className="text-[#0a2259] text-lg md:text-xl text-center max-w-3xl font-medium mt-8">
                <span className="font-bold">Our Skilled Workforce:</span> Beyond our leadership, our team of fifteen dedicated professionals includes highly trained technicians, artisans, foremen, and support staff, all committed to delivering excellence on site and behind the scenes. We continuously invest in training to maintain our high standards of expertise and safety.
            </p>
        </section>
    );
};

export default TeamSection; 
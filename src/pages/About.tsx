import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/about/AboutHero';
import MissionVisionSection from '../components/about/MissionVisionSection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import AdvantageSection from '../components/about/AdvantageSection';
import NewsletterSection from '../components/NewsletterSection';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Mr. Mudyariwa',
        location: 'Ballantyne Park',
        company: 'Ballantyne Park Project',
        quote: 'Springwaters delivered exceptional service at Ballantyne Park. Their team was professional and efficient, providing a reliable water solution that truly met our needs. Highly recommend their expertise for any borehole project.',
    },
    {
        name: 'Mazvita Shumba',
        location: 'Avondale',
        company: 'Avondale Success',
        quote: 'We are very pleased with the work Springwaters did for us in Avondale. The process was smooth, and the outcome was exactly what we hoped for. Their dedication to quality water access is evident in every step.',
    },
    {
        name: 'Mr. Kapumha',
        location: 'UMC Properties',
        company: 'UMC Water',
        quote: 'Springwaters proved to be a reliable partner for UMC Properties. Their team handled our project with great professionalism, ensuring a steady and consistent water supply. We appreciate their commitment to excellent service.',
    },
    {
        name: 'Mr. Brendon',
        location: 'Croco Properties',
        company: 'Croco Solution',
        quote: 'Croco Properties had a fantastic experience with Springwaters. Their efficiency and expertise in water solutions were impressive. We now have a dependable water source, thanks to their dedicated and skilled team.',
    },
];

const About: React.FC = () => {
    return (
        <>
            <Header forceBlackLinks={true} />
            <AboutHero />
            <MissionVisionSection />
            <ValuesSection />
            <TeamSection />
            <AdvantageSection />
            {/* Testimonials Section */}
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#4169e1] mb-10 text-center">What Our Zimbabwean Clients Say: Trust Built on Water</h2>
                    <p className="text-lg text-[#0a2259] mb-12 text-center max-w-2xl mx-auto">Hear directly from satisfied homeowners, farmers, and businesses across Zimbabwe who have experienced the Springwaters difference in reliable water solutions.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-[#f5f8ff] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>{FaStar({ className: "text-yellow-400 text-xl" })}</span>
                                    ))}
                                </div>
                                <div className="font-bold text-[#4169e1] text-lg mb-1">{t.company}</div>
                                <p className="italic text-[#0a2259] mb-4 text-sm">"{t.quote}"</p>
                                <div className="font-semibold text-[#4169e1]">- {t.name}, {t.location}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <NewsletterSection />
        </>
    );
};

export default About; 
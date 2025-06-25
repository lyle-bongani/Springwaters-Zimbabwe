 import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionVisionSection from '../components/about/MissionVisionSection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import AdvantageSection from '../components/about/AdvantageSection';

const About: React.FC = () => {
    return (
        <>
            <AboutHero />
            <MissionVisionSection />
            <ValuesSection />
            <TeamSection />
            <AdvantageSection />
        </>
    );
};

export default About; 
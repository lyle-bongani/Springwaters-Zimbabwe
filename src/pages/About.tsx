import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const About = () => (
    <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6">About Springwaters Zimbabwe</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                <p className="text-black-grey mb-4">Founded in 2008, Springdrill (Private) Limited, trading as Springwaters, has been at the forefront of delivering high-quality water solutions in Zimbabwe. As a wholly Zimbabwean-owned company, our deep understanding of local geological conditions, environmental factors, and community needs sets us apart.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-black-grey mb-4">To empower communities, farms, and businesses across Zimbabwe with sustainable, reliable, and clean water solutions through innovation, expertise, and a customer-centric approach.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="text-black-grey mb-4">To be Zimbabwe's leading provider of comprehensive water solutions, recognized for our integrity, quality, and commitment to water independence for all.</p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                <p className="text-black-grey mb-4">Led by industry veterans like Munesu Tsiga, our team brings over 15 years of experience in borehole drilling, irrigation, and water system design. We are passionate about delivering the best results for every client.</p>
            </section>
        </main>
        <Footer />
    </div>
);

export default About; 
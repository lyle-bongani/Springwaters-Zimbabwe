import React from 'react';

const services = [
    'Borehole Siting',
    'Borehole Drilling',
    'Borehole Casing',
    'Water Quality Testing',
    'Water Pump Installation',
    'Water Tank Installation',
    'Borehole Fishing',
    'Borehole Flushing',
    'Borehole Rehabilitation',
    'Borehole Deepening',
    'Irrigation Services',
    'Bulk Water Delivery',
];

const mainSections = [
    { label: 'HOME', black: true },
    { label: 'About', link: '/about' },
    { label: 'Our Process', link: '/process' },
    { label: 'Water Services', link: '/water-services', children: services },
    { label: 'Contact', link: '/contact' },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Site Map', link: '/site-map' },
];

interface NodeProps {
    children: React.ReactNode;
    black?: boolean;
    className?: string;
    [key: string]: any;
}

const Node = ({ children, black = false, className = '', ...props }: NodeProps) => (
    <div
        className={`rounded-xl px-4 py-2 text-center font-semibold shadow border select-none whitespace-nowrap transition-colors duration-150 ${black ? 'bg-black text-white border-black' : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-50 hover:border-blue-400'} ${className}`}
        {...props}
    >
        {children}
    </div>
);

const SiteMap = () => (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center py-8 px-1 bg-gray-50" style={{ paddingTop: '15vh' }}>
        <h1 className="text-2xl font-bold text-blue-600 mb-8 text-center">Site Map</h1>
        <div className="w-full max-w-md mx-auto flex flex-row justify-center relative">
            {/* Vertical spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2 z-0" style={{ minHeight: '100%' }} />
            <div className="flex flex-col gap-6 w-full z-10">
                {mainSections.map((section, idx) => (
                    <div key={section.label} className="flex flex-row items-center relative">
                        {/* Main node on the spine */}
                        <div className="flex flex-col items-center" style={{ minWidth: 0 }}>
                            <Node black={section.black} className="w-40 mx-auto" >
                                {section.link ? (
                                    <a href={section.link} className="block w-full h-full text-inherit">{section.label}</a>
                                ) : (
                                    section.label
                                )}
                            </Node>
                        </div>
                        {/* Children (white nodes) with horizontal connector */}
                        {section.children && (
                            <div className="flex flex-col ml-6 gap-2">
                                {section.children.map((child: string) => (
                                    <div key={child} className="flex flex-row items-center">
                                        <div className="w-6 h-0.5 bg-blue-200" />
                                        <Node className="text-sm px-3 py-1 ml-2 w-fit">
                                            {child}
                                        </Node>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SiteMap; 
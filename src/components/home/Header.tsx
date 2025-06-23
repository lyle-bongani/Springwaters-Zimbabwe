import React from 'react';

const Header = () => (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img
                src={process.env.PUBLIC_URL + '/images/logo/SpringWater_Borehole Drilling Harare Zimbabwe Logo Icon.png'}
                alt="SpringWater Borehole Drilling Logo"
                className="h-10 w-10 object-contain"
            />
            <span className="text-black-grey text-xl font-bold">SpringWater Borehole Drilling</span>
        </div>
        <nav>
            <ul className="flex gap-6">
                <li><a href="#home" className="text-primary hover:underline font-medium">Home</a></li>
                <li><a href="#about" className="text-black-grey hover:text-primary font-medium">About</a></li>
            </ul>
        </nav>
    </header>
);

export default Header; 
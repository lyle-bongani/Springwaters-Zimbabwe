import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";
import { FiMenu, FiX } from "react-icons/fi";
import { createPortal } from "react-dom";
import { Link, useLocation } from 'react-router-dom';
import {
    FaWater,
    FaSeedling,
    FaTruck,
    FaSearch,
    FaTint,
    FaShieldAlt,
    FaVial,
    FaCogs,
    FaWarehouse,
    FaFish,
    FaSync,
    FaWrench,
    FaArrowCircleDown
} from 'react-icons/fa';

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

// Section IDs and their background types
const sectionBgMap = [
    { id: "hero-section", bg: "transparent" },
    { id: "about-section", bg: "white" },
    { id: "mission-section", bg: "white" },
    { id: "values-section", bg: "white" },
    { id: "team-section", bg: "royal" },
    { id: "services-section", bg: "white" },
    { id: "water-access-section", bg: "white" },
    { id: "why-choose-section", bg: "royal" },
    { id: "newsletter-section", bg: "white" },
    { id: "footer-section", bg: "white" },
];

const Header = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isFloating, setIsFloating] = useState(false);
    const [headerBg, setHeaderBg] = useState("transparent");
    const audioElementRef = useRef<HTMLAudioElement>(null);
    const navContainerRef = useRef<HTMLDivElement>(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownContainerRef = useRef<HTMLLIElement>(null);

    const location = useLocation();

    // Intersection Observer for sections
    useEffect(() => {
        const handleSectionChange = () => {
            let found = false;
            for (let i = 0; i < sectionBgMap.length; i++) {
                const section = document.getElementById(sectionBgMap[i].id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Section is in view if its top is <= header height and its bottom is > header height
                    if (rect.top <= 80 && rect.bottom > 80) {
                        if (sectionBgMap[i].bg === "royal") {
                            setHeaderBg("white");
                        } else if (sectionBgMap[i].bg === "white") {
                            setHeaderBg("royal");
                        } else {
                            setHeaderBg("transparent");
                        }
                        found = true;
                        break;
                    }
                }
            }
            if (!found) setHeaderBg("transparent");
        };
        window.addEventListener("scroll", handleSectionChange, { passive: true });
        handleSectionChange();
        return () => window.removeEventListener("scroll", handleSectionChange);
    }, []);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current?.play();
        } else {
            audioElementRef.current?.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            setIsFloating(false);
            navContainerRef.current?.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            setIsFloating(true);
            navContainerRef.current?.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            setIsFloating(true);
            navContainerRef.current?.classList.add("floating-nav");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    // Close on Escape key
    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [mobileMenuOpen]);

    // Close dropdown on outside click
    useEffect(() => {
        if (!servicesDropdownOpen) return;
        function handleClick(e: MouseEvent) {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(e.target as Node)) {
                setServicesDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [servicesDropdownOpen]);

    return (
        <>
            <div
                ref={navContainerRef}
                className="fixed left-1/2 top-4 z-50" style={{ height: '10vh', minHeight: '80px', width: '85vw', transform: 'translateX(-50%)' }}
            >
                <header className="absolute top-1/2 w-full -translate-y-1/2" style={{ height: '100%' }}>
                    <nav
                        className={clsx(
                            "flex size-full items-center justify-between p-4 rounded-2xl transition-colors duration-300",
                            headerBg === "white"
                                ? "bg-white shadow-lg"
                                : headerBg === "royal"
                                    ? "bg-[#4169e1]"
                                    : "bg-transparent"
                        )}
                    >
                        <div className="flex items-center gap-7 w-full justify-between">
                            {/* Logo logic: use header-logo.webp when headerBg is white, otherwise use white logo */}
                            {headerBg === "white" ? (
                                <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-32" />
                            ) : (
                                <img src="/images/logo/SpringWater_Borehole Drilling Harare Zimbabwe Logo white.webp" alt="Springwaters Logo" className="w-32" />
                            )}
                            {/* Desktop Nav */}
                            <nav className="flex-1 justify-end items-center hidden md:flex">
                                <ul className="flex space-x-10">
                                    <li><Link to="/" className="font-semibold text-blue-500 border-r border-gray-200 pr-8">Home</Link></li>
                                    <li><Link to="/about" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">About</Link></li>
                                    <li><Link to="/process" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">Our Process</Link></li>
                                    <li className="relative" ref={dropdownContainerRef}>
                                        <div className="flex items-center border-r border-gray-200 pr-8">
                                            <Link
                                                to="/water-services"
                                                className="font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                                                style={{ userSelect: 'none' }}
                                                tabIndex={0}
                                            >
                                                Water Services
                                            </Link>
                                            <button
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded={servicesDropdownOpen}
                                                aria-controls="services-dropdown-menu"
                                                className="ml-1 p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors hover:bg-blue-50"
                                                onClick={() => setServicesDropdownOpen((open) => !open)}
                                                tabIndex={0}
                                                style={{ verticalAlign: 'middle' }}
                                            >
                                                <svg className={clsx("w-5 h-5 transition-transform", servicesDropdownOpen && "rotate-180")}
                                                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        {/* Dropdown */}
                                        <div
                                            id="services-dropdown-menu"
                                            ref={dropdownRef}
                                            className={clsx(
                                                "absolute left-0 top-full min-w-[380px] bg-white shadow-2xl rounded-2xl z-50 mt-3 py-6 px-8 flex flex-col gap-3 border border-blue-100 transition-all duration-300",
                                                servicesDropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                                            )}
                                            style={{ boxShadow: '0 8px 32px 0 rgba(65,105,225,0.15)' }}
                                            role="menu"
                                            aria-label="Water Services"
                                        >
                                            <div className="font-bold text-[#4169e1] text-base mb-2 flex items-center gap-2">
                                                {React.createElement(FaWater as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-xl text-[#4169e1]" })} Main Categories
                                            </div>
                                            <ul className="mb-2 grid grid-cols-1 gap-1">
                                                <li><Link to="/water-services/borehole" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaWater as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Services</Link></li>
                                                <li><Link to="/water-services/irrigation" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaSeedling as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Irrigation Systems</Link></li>
                                                <li><Link to="/water-services/bulk-water-delivery" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaTruck as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Bulk Water Delivery</Link></li>
                                            </ul>
                                            <div className="font-bold text-[#4169e1] text-base mb-2 mt-2 flex items-center gap-2">{React.createElement(FaSearch as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-xl text-[#4169e1]" })} All Services</div>
                                            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                                                <li><Link to="/water-services/borehole-siting" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaSearch as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Siting</Link></li>
                                                <li><Link to="/water-services/borehole-drilling" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaTint as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Drilling</Link></li>
                                                <li><Link to="/water-services/borehole-casing" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaShieldAlt as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Casing</Link></li>
                                                <li><Link to="/water-services/water-quality-testing" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaVial as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Water Quality Testing</Link></li>
                                                <li><Link to="/water-services/water-pump-installation" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaCogs as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Water Pump Installation</Link></li>
                                                <li><Link to="/water-services/water-tank-installation" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaWarehouse as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Water Tank Installation</Link></li>
                                                <li><Link to="/water-services/borehole-fishing" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaFish as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Fishing</Link></li>
                                                <li><Link to="/water-services/borehole-flushing" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaSync as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Flushing</Link></li>
                                                <li><Link to="/water-services/borehole-rehabilitation" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaWrench as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Rehabilitation</Link></li>
                                                <li><Link to="/water-services/borehole-deepening" className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition" onClick={() => setServicesDropdownOpen(false)}>{React.createElement(FaArrowCircleDown as React.FC<React.SVGProps<SVGSVGElement>>, { className: "text-[#4169e1]" })} Borehole Deepening</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/contact" className="font-semibold text-gray-900">Contact</Link></li>
                                </ul>
                            </nav>
                            {/* Hamburger Icon for Mobile */}
                            <button
                                className={clsx(
                                    "md:hidden ml-auto text-3xl text-blue-900 focus:outline-none relative w-10 h-10 flex flex-col justify-center items-center group",
                                    mobileMenuOpen && "z-50"
                                )}
                                onClick={() => setMobileMenuOpen((open) => !open)}
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {/* Animated Hamburger/X */}
                                <span className={clsx(
                                    "block absolute h-0.5 w-8 bg-blue-900 rounded transition-all duration-300",
                                    mobileMenuOpen ? "rotate-45 top-5" : "-translate-y-2"
                                )}></span>
                                <span className={clsx(
                                    "block absolute h-0.5 w-8 bg-blue-900 rounded transition-all duration-300",
                                    mobileMenuOpen ? "opacity-0" : ""
                                )}></span>
                                <span className={clsx(
                                    "block absolute h-0.5 w-8 bg-blue-900 rounded transition-all duration-300",
                                    mobileMenuOpen ? "-rotate-45 -top-5" : "translate-y-2"
                                )}></span>
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
            {/* Mobile Side Drawer rendered in a portal */}
            {mobileMenuOpen && typeof window !== 'undefined' && createPortal(
                <div
                    className="fixed top-0 left-0 w-full h-full bg-white z-[9999] shadow-2xl md:hidden animate-slide-in-left"
                    tabIndex={-1}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Logo at top: always header-logo.webp on /about */}
                    <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-28 mb-8 mt-8 ml-6" />
                    {/* Close button (X) */}
                    <button
                        className="absolute top-6 right-6 text-3xl text-blue-900 focus:outline-none"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        {FiX({})}
                    </button>
                    <nav className="flex flex-col gap-4 mt-4 ml-6">
                        <Link to="/" className="font-semibold text-blue-500 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link to="/process" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Our Process</Link>
                        <Link to="/water-services" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Water Services</Link>
                        <Link to="/contact" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>,
                document.body
            )}
        </>
    );
};

export default Header; 
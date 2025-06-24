import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";
import { FiMenu, FiX } from "react-icons/fi";
import { createPortal } from "react-dom";
import { Link, useLocation } from 'react-router-dom';

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

// Section IDs and their background types
const sectionBgMap = [
    { id: "hero-section", bg: "transparent" },
    { id: "about-section", bg: "white" },
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
                            {/* Logo logic: use header-logo.webp on /about, otherwise use existing logic */}
                            {location.pathname === "/about" ? (
                                <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-32" />
                            ) : headerBg === "white" ? (
                                <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-32" />
                            ) : (
                                <img src="/images/logo/SpringWater_Borehole Drilling Harare Zimbabwe Logo white.webp" alt="Springwaters Logo" className="w-32" />
                            )}
                            {/* Desktop Nav */}
                            <nav className="flex-1 justify-end items-center hidden md:flex">
                                <ul className="flex space-x-10">
                                    <li><Link to="/" className="font-semibold text-blue-500 border-r border-gray-200 pr-8">Home</Link></li>
                                    <li><Link to="/about" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">About</Link></li>
                                    <li><Link to="/water-services" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">Water Services</Link></li>
                                    <li><Link to="/clients" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">Our Clients</Link></li>
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
                        <Link to="/water-services" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Water Services</Link>
                        <Link to="/clients" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Our Clients</Link>
                        <Link to="/contact" className="font-semibold text-gray-900 text-xl py-2 hover:bg-blue-50 rounded pl-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>,
                document.body
            )}
        </>
    );
};

export default Header; 
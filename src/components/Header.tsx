import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import clsx from "clsx";

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

    return (
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
                        {headerBg === "white" ? (
                            <img src="/images/logo/header-logo.webp" alt="Springwaters Logo" className="w-32" />
                        ) : (
                            <img src="/images/logo/SpringWater_Borehole Drilling Harare Zimbabwe Logo white.webp" alt="Springwaters Logo" className="w-32" />
                        )}
                        <nav className="flex-1 flex justify-end items-center">
                            <ul className="flex space-x-10">
                                <li><a href="#home" className="font-semibold text-blue-500 border-r border-gray-200 pr-8">Home</a></li>
                                <li><a href="#about" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">About</a></li>
                                <li><a href="#water-services" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">Water Services</a></li>
                                <li><a href="#clients" className="font-semibold text-gray-900 border-r border-gray-200 pr-8">Our Clients</a></li>
                                <li><a href="#contact" className="font-semibold text-gray-900">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header; 
"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Your Page Content */}


            {/* Scroll To Top Button */}
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`
                    fixed bottom-6 right-6 z-[9999]
                    flex h-12 w-12 items-center justify-center
                    rounded-full
                    bg-[#20235A]
                    text-white
                    shadow-lg
                    transition-all duration-300
                    hover:bg-[#D2B87C]
                    hover:text-[#20235A]
                    hover:-translate-y-1
                    ${showScrollTop
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "translate-y-4 opacity-0 pointer-events-none"
                    }
                `}
            >
                <ArrowUp
                    size={20}
                    strokeWidth={2}
                />
            </button>
        </>
    );
};

export default ScrollToTop;
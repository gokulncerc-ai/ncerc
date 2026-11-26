"use client";

import React, { useEffect, useState } from "react";

const CtaButtons = () => {
    const [showCta, setShowCta] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowCta(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                fixed bottom-7 left-6 z-[9999]
                flex flex-col gap-3
                transition-all duration-500
                ${showCta
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-4 opacity-0 pointer-events-none"
                }
            `}
        >
            {/* =====================================================
                WHATSAPP CTA
            ===================================================== */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full
                    bg-[#25D366]
                    text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    sm:h-14 sm:w-14
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    aria-hidden="true"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

                    <path d="M20.52 3.449A11.82 11.82 0 0 0 12.076 0C5.525 0 .198 5.327.198 11.876c0 2.096.547 4.142 1.588 5.95L.13 24l6.327-1.66a11.9 11.9 0 0 0 5.614 1.43h.005c6.548 0 11.875-5.327 11.875-11.876a11.83 11.83 0 0 0-3.431-8.445zM12.076 21.77h-.004a9.88 9.88 0 0 1-5.034-1.378l-.361-.214-3.755.985 1.002-3.658-.235-.375a9.86 9.86 0 0 1-1.514-5.254c0-5.44 4.43-9.87 9.875-9.87a9.82 9.82 0 0 1 6.993 2.899 9.82 9.82 0 0 1 2.897 6.995c-.003 5.444-4.433 9.87-9.864 9.87z" />
                </svg>
            </a>

            {/* =====================================================
                PHONE CTA
            ===================================================== */}
            <a
                href="tel:+919876543210"
                aria-label="Call us"
                className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full
                    bg-[#20235A]
                    text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#D2B87C]
                    hover:text-[#20235A]
                    hover:shadow-xl
                    sm:h-14 sm:w-14
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.92v3a2 2 0 0 1-2.18 2
                        19.79 19.79 0 0 1-8.63-3.07
                        19.5 19.5 0 0 1-6-6
                        19.79 19.79 0 0 1-3.07-8.67
                        A2 2 0 0 1 4.11 2h3
                        a2 2 0 0 1 2 1.72
                        12.84 12.84 0 0 0 .7 2.81
                        2 2 0 0 1-.45 2.11L8.09 9.91
                        a16 16 0 0 0 6 6l1.27-1.27
                        a2 2 0 0 1 2.11-.45
                        12.84 12.84 0 0 0 2.81.7
                        A2 2 0 0 1 22 16.92z"
                    />
                </svg>
            </a>
        </div>
    );
};
export default CtaButtons;
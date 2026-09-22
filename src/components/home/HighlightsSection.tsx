"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { BookOpen, Building2, GraduationCap, Landmark, Users } from "lucide-react";

const stats = [
    { icon: Landmark, value: "7", label: "Affiliated\nUniversities" },
    { icon: Users, value: "30000+", label: "Students" },
    { icon: BookOpen, value: "180+", label: "Courses" },
    { icon: GraduationCap, value: "3 Lakh+", label: "Alumni" },
];

const institutionsStat = { icon: Building2, value: "24+", label: "Institutions" };

/**
 * Animated Number Counter Component
 * Triggers counting animation when `trigger` becomes true.
 */
function AnimatedCounter({ rawValue, trigger }: { rawValue: string; trigger: boolean }) {
    const [count, setCount] = useState(0);

    // Parse out numeric component vs suffix/prefix text (e.g. "30000+" -> number: 30000, suffix: "+")
    const numericMatch = rawValue.match(/[\d,]+/);
    const targetNumber = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : 0;

    // Extract text around the number (e.g., " Lakh+" from "3 Lakh+")
    const prefix = rawValue.substring(0, rawValue.indexOf(numericMatch?.[0] || ""));
    const suffix = rawValue.substring((rawValue.indexOf(numericMatch?.[0] || "") + (numericMatch?.[0].length || 0)));

    useEffect(() => {
        if (!trigger || targetNumber === 0) return;

        let startTimestamp: number | null = null;
        const duration = 2000; // Animation duration in ms (2 seconds)

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing function for smooth slowdown near the end (easeOutQuad)
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCount(Math.floor(easeProgress * targetNumber));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(targetNumber);
            }
        };

        const animId = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(animId);
    }, [trigger, targetNumber]);

    if (!numericMatch) return <span>{rawValue}</span>;

    return (
        <span>
            {prefix}
            {trigger ? count.toLocaleString() : 0}
            {suffix}
        </span>
    );
}

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-slate-100 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${className}`}
        >
            {/* Folded-corner accent, bottom-left */}
            <span
                aria-hidden
                className="absolute bottom-0 left-0 h-4 w-4 bg-amber-500/80"
                style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            />
            {children}
        </div>
    );
}

export default function HighlightsSection({ image }: { image: StaticImageData }) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger animation once
                }
            },
            { threshold: 0.25 } // Trigger when 25% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate -mt-10 overflow-hidden bg-[#FAFCFF] pb-20 pt-0 sm:-mt-14 lg:-mt-20 lg:pb-28"
        >
            {/* Top-right dotted grid pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-6 top-6 hidden h-32 w-32 lg:block"
                style={{
                    backgroundImage: "radial-gradient(#d9a441 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    opacity: 0.35,
                }}
            />

            {/* Right side faint circuit line SVG backdrop */}
            <svg
                aria-hidden
                viewBox="0 0 500 500"
                className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-1/2 text-amber-500/15 lg:block"
                fill="none"
            >
                <path
                    d="M 100 450 H 300 L 400 350 V 150 L 450 100 H 500"
                    stroke="currentColor"
                    strokeWidth="1"
                />
                <path
                    d="M 200 500 V 400 L 350 250 H 480"
                    stroke="currentColor"
                    strokeWidth="1"
                />
                <circle cx="300" cy="450" r="3" fill="currentColor" />
                <circle cx="400" cy="350" r="3" fill="currentColor" />
                <circle cx="350" cy="250" r="3" fill="currentColor" />
            </svg>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Left Column: Heading + Copy + Bottom Left Image Bleed */}
                    <div className="flex flex-col justify-between lg:col-span-5">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                                    Highlights of NCERC
                                </span>
                            </div>

                            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.15] text-navy-950 sm:text-5xl">
                                Building Excellence.
                                <br />
                                Creating Impact
                                <span className="text-amber-500">.</span>
                            </h2>

                            <div className="my-6 h-0.5 w-12 bg-amber-500" />

                            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                                NCERC stands out as a premier educational institution due to its
                                unwavering commitment to academic excellence, innovation, and
                                research. With a strong industry connect, NCERC provides students
                                with invaluable opportunities for internships, industrial visits,
                                and placements in leading companies. The institution&apos;s focus
                                on holistic development and ethical values ensures that students
                                not only excel academically but also grow into responsible,
                                ethical leaders ready to make a positive impact on society.
                            </p>
                        </div>

                        {/* Campus Photo positioned nicely at bottom-left */}
                        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl shadow-lg lg:-ml-6 lg:mt-12 lg:h-72 lg:w-[115%]">
                            <Image
                                src={image}
                                alt="NCERC Campus"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                            {/* Subtle edge fade gradient to blend with background */}
                            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#FAFCFF] opacity-90 lg:block" />
                        </div>
                    </div>

                    {/* Right Column: Stat Cards Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {stats.map(({ icon: Icon, value, label }) => (
                                <CardShell key={label} className="flex flex-col items-center text-center">
                                    <Icon size={44} strokeWidth={1} className="text-amber-500" />
                                    <p className="mt-4 font-display text-4xl font-bold text-navy-950 sm:text-5xl">
                                        <AnimatedCounter rawValue={value} trigger={isVisible} />
                                    </p>
                                    <span className="mt-3 block h-0.5 w-8 bg-amber-500/60" />
                                    <p className="mt-3 whitespace-pre-line text-sm font-semibold text-navy-900">
                                        {label}
                                    </p>
                                </CardShell>
                            ))}

                            {/* Full-width Institutions Card */}
                            <CardShell className="sm:col-span-2">
                                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:text-left">
                                    <institutionsStat.icon
                                        size={48}
                                        strokeWidth={1}
                                        className="shrink-0 text-amber-500"
                                    />
                                    <div className="flex flex-col items-center sm:items-start">
                                        <p className="font-display text-4xl font-bold text-navy-950 sm:text-5xl">
                                            <AnimatedCounter rawValue={institutionsStat.value} trigger={isVisible} />
                                        </p>
                                        <span className="mt-2 block h-0.5 w-8 bg-amber-500/60" />
                                        <p className="mt-2 text-sm font-semibold text-navy-900">
                                            {institutionsStat.label}
                                        </p>
                                    </div>
                                </div>
                            </CardShell>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
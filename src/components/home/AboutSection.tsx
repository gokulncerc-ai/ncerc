import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Briefcase, Lightbulb } from "lucide-react";

const highlights = [
    { icon: Award, value: "20+", label: "Years of\nExcellence" },
    { icon: BadgeCheck, value: "NAAC", label: "Accredited\nInstitution" },
    { icon: Briefcase, value: "Industry", label: "Focused\nEducation" },
    { icon: Lightbulb, value: "Innovation", label: "Driven\nCampus" },
];

export default function AboutSection({ image }: { image: StaticImageData }) {
    return (
        <section className="relative overflow-hidden bg-[#faf7f2] py-24">
            {/* Faint building line-art tucked in the bottom-right corner */}
            <svg
                aria-hidden
                viewBox="0 0 400 260"
                className="pointer-events-none absolute bottom-0 right-0 hidden h-56 w-auto text-gold-500/25 lg:block"
                fill="none"
            >
                <path
                    d="M40 260V90h60V60h40v30h60v40h40v40h60v100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path d="M100 90h40M100 130h40M100 170h40M160 130h40M160 170h40M220 170h40" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
                {/* Framed photo */}
                <div className="relative">
                    {/* Dotted grid accent, bottom-left of the frame */}
                    <div
                        aria-hidden
                        className="absolute -bottom-6 -left-6 hidden h-24 w-24 sm:block"
                        style={{
                            backgroundImage:
                                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                            backgroundSize: "10px 10px",
                            color: "#d9a441",
                        }}
                    />

                    {/* Corner brackets */}
                    <span className="absolute -left-4 -top-4 hidden h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-gold-500 sm:block" />
                    <span className="absolute -bottom-4 -right-4 hidden h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-gold-500 sm:block" />

                    <div className="relative overflow-hidden rounded-[28px] shadow-xl">
                        <Image
                            src={image}
                            alt="Students and the NCERC campus building"
                            className="h-auto w-full object-cover"
                            placeholder="blur"
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            priority
                        />
                    </div>
                </div>

                {/* Copy */}
                <div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            About NCERC
                        </span>
                        <span className="h-px w-12 bg-gold-500" />
                    </div>

                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                        Where Knowledge
                        <br />
                        Meets Innovation
                    </h2>

                    <div className="my-6 h-1 w-16 bg-gold-500" />

                    <p className="max-w-xl text-base leading-relaxed text-slate-600">
                        Nehru College of Engineering and Research Centre (NCERC),
                        established in 2002, is a premier engineering institution
                        committed to academic excellence, research, and holistic
                        development. We nurture aspiring engineers into innovative
                        problem solvers and responsible global citizens.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                        {highlights.map(({ icon: Icon, value, label }) => (
                            <div key={value} className="pr-4">
                                <Icon size={30} strokeWidth={1.5} className="text-gold-500" />
                                <p className="mt-3 text-lg font-bold text-navy-950">{value}</p>
                                <p className="whitespace-pre-line text-sm leading-snug text-slate-500">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/about-ncerc"
                        className="mt-10 inline-flex items-center gap-2 border-b-2 border-gold-500 pb-1 text-sm font-semibold uppercase tracking-wide text-gold-500 transition hover:text-gold-400"
                    >
                        Discover NCERC
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

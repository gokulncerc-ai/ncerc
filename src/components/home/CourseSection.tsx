import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Cpu, GraduationCap, MonitorSmartphone } from "lucide-react";

import btechImage from "../../../public/images/courses/btech.png";
import mtechImage from "../../../public/images/courses/mtech.png";
import mcaImage from "../../../public/images/courses/mca.png";
import mbaImage from "../../../public/images/courses/mba.png";

const courses = [
    {
        index: "01",
        image: btechImage,
        icon: Cpu,
        title: "B.Tech",
        subtitle: "Bachelor of Technology",
        description:
            "Build a strong foundation with our industry-oriented undergraduate engineering programs designed for the future.",
        href: "/courses#btech",
        panel: "bg-navy-950",
    },
    {
        index: "02",
        image: mtechImage,
        icon: GraduationCap,
        title: "M.Tech",
        subtitle: "Master of Technology",
        description:
            "Advance your engineering expertise with specialized M.Tech programs and research-driven learning.",
        href: "/courses#mtech",
        panel: "bg-emerald-900",
    },
    {
        index: "03",
        image: mcaImage,
        icon: MonitorSmartphone,
        title: "MCA",
        subtitle: "Master of Computer Applications",
        description:
            "Step into the world of software, systems and innovation with our future-ready MCA program.",
        href: "/courses#mca",
        panel: "bg-blue-900",
    },
    {
        index: "04",
        image: mbaImage,
        icon: Briefcase,
        title: "MBA",
        subtitle: "Master of Business Administration",
        description:
            "Develop leadership skills, strategic thinking and business acumen with our industry-focused MBA program.",
        href: "/courses#mba",
        panel: "bg-navy-950",
    },
];

export default function CourseSection() {
    return (
        <section className="relative -mt-12 overflow-hidden bg-[#faf7f2] pb-24 pt-0 sm:-mt-16 lg:-mt-20">
            {/* Dotted grid accent, top-left of the section */}
            <div
                aria-hidden
                className="absolute left-10 top-10 hidden h-28 w-28 lg:block"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    color: "#d9a441",
                    opacity: 0.4,
                }}
            />

            {/* Faint building line-art, bottom-right of the section */}
            <svg
                aria-hidden
                viewBox="0 0 400 260"
                className="pointer-events-none absolute bottom-0 right-0 hidden h-56 w-auto text-gold-500/20 lg:block"
                fill="none"
            >
                <path d="M40 260V90h60V60h40v30h60v40h40v40h60v100" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M100 90h40M100 130h40M100 170h40M160 130h40M160 170h40M220 170h40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>

            <div className="relative mx-auto max-w-8xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-2xl pt-6 text-center sm:pt-8">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-gold-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            Choose Your Passion
                        </span>
                        <span className="h-px w-10 bg-gold-500" />
                    </div>

                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                        Explore. Learn. Innovate.
                    </h2>

                    <div className="mx-auto my-6 h-1 w-16 bg-gold-500" />

                    <p className="text-base leading-relaxed text-slate-600">
                        From cutting-edge B.Tech programs to advanced M.Tech, MBA and MCA
                        courses, NCERC offers a wide spectrum of academic opportunities
                        tailored to your aspirations. Build knowledge, gain expertise,
                        and shape a future that inspires.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {courses.map(({ index, image, icon: Icon, title, subtitle, description, href, panel }) => (
                        <div
                            key={title}
                            className="group relative flex flex-col overflow-hidden rounded-xl shadow-lg shadow-navy-950/10"
                        >
                            {/* Photo, diagonally clipped at the bottom */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${title} - ${subtitle}`}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div
                                    aria-hidden
                                    className={`absolute inset-x-0 bottom-0 h-10 ${panel}`}
                                    style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }}
                                />
                                <span aria-hidden className="absolute inset-x-0 bottom-[38px] h-[2px] bg-gold-500/80" />
                            </div>

                            {/* Icon badge overlapping the seam */}
                            <div className="relative">
                                <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-white/10 text-gold-400 backdrop-blur">
                                    <Icon size={24} strokeWidth={1.5} />
                                </span>
                            </div>

                            {/* Content panel */}
                            <div className={`relative flex flex-1 flex-col px-6 pb-6 pt-10 text-white ${panel}`}>
                                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
                                    {subtitle}
                                </p>
                                <span className="mt-3 h-px w-8 bg-white/30" />

                                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">{description}</p>

                                <div className="mt-6 flex items-end justify-between">
                                    <Link
                                        href={href}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400 transition hover:text-gold-300"
                                    >
                                        Learn More
                                        <ArrowRight size={14} />
                                    </Link>

                                    <span className="font-display text-3xl font-semibold text-white/10">{index}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 rounded-md border border-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-navy-950 transition hover:bg-gold-500"
                    >
                        View All Programs
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
import Image, { type StaticImageData } from "next/image";
import {
    Briefcase,
    Building,
    FileCheck,
    GraduationCap,
    Handshake,
    Target,
    TrendingUp,
    Users,
    UsersRound,
} from "lucide-react";

const points = [
    {
        icon: GraduationCap,
        text: "NCPIR believes in 3 C's (Create-Construct-Compensate) which is to create skilled, eligible and employable students. Providing counselling training and support service to develop individual career plan, so the students perform better during the placement drives.",
    },
    {
        icon: Briefcase,
        text: "Equipping the students for the right kind of jobs where the Market demands.",
    },
    {
        icon: Users,
        text: "NCPIR establish an interface between the industry and institution with the primary objective of nurturing long lasting and mutually beneficial relationship between institute and industry.",
    },
    {
        icon: Target,
        text: "NCPIR is vibrant, supportive and a collaborative workspace with a great team that works hard and has fun doing meaningful work. The team immensely enjoys their part in contributing to student's career of their choice.",
    },
];

const stats = [
    { icon: Building, value: "250+", label: "Total Companies", panel: "dark" as const },
    { icon: FileCheck, value: "3300+", label: "Total Offers", panel: "light" as const },
    { icon: TrendingUp, value: "52", suffix: "LPA", label: "Highest CTC", panel: "dark" as const },
    { icon: UsersRound, value: "100", suffix: "%", label: "Placement Assistance", panel: "light" as const },
];

function StatCard({
    icon: Icon,
    value,
    suffix,
    label,
    panel,
    className = "",
}: {
    icon: typeof Building;
    value: string;
    suffix?: string;
    label: string;
    panel: "dark" | "light";
    className?: string;
}) {
    const isDark = panel === "dark";

    return (
        <div
            className={`rounded-xl border px-6 py-8 text-center ${isDark
                ? "border-transparent bg-navy-950 text-white"
                : "border-slate-200 bg-white text-navy-950"
                } ${className}`}
        >
            <span
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${isDark ? "border-gold-500/60" : "border-gold-500"
                    }`}
            >
                <Icon size={24} strokeWidth={1.5} className="text-gold-500" />
            </span>

            <p className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                {value}
                {suffix && <span className="ml-1 text-lg font-semibold align-baseline">{suffix}</span>}
            </p>

            <span className="mx-auto mt-2 block h-0.5 w-8 bg-gold-500" />

            <p className={`mt-3 text-sm font-semibold ${isDark ? "text-white/90" : "text-navy-900"}`}>
                {label}
            </p>
        </div>
    );
}

export default function NcpirSection({ image }: { image: StaticImageData }) {
    return (
        <section className="relative -mt-10 overflow-hidden bg-[#faf7f2] pb-24 pt-0 sm:-mt-14 lg:-mt-20">
            {/* Dotted grid accent, top-right */}
            <div
                aria-hidden
                className="absolute right-10 top-16 hidden h-32 w-32 lg:block"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    color: "#d9a441",
                    opacity: 0.5,
                }}
            />

            {/* Faint building line-art, bottom-right */}
            <svg
                aria-hidden
                viewBox="0 0 400 260"
                className="pointer-events-none absolute bottom-0 right-0 hidden h-64 w-auto text-gold-500/15 lg:block"
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
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
                    {/* Photo column */}
                    <div>
                        <div className="relative">
                            {/* Corner accent line, top-left */}
                            <span className="absolute -left-3 -top-3 hidden h-16 w-32 rounded-tl-2xl border-l-2 border-t-2 border-gold-500 sm:block" />

                            <div className="relative h-[460px] w-full overflow-hidden rounded-2xl sm:h-[560px] lg:h-[660px]">
                                <Image
                                    src={image}
                                    alt="Industry partners shaking hands at NCERC"
                                    fill
                                    sizes="(min-width: 1024px) 380px, 100vw"
                                    className="object-cover"
                                />

                                {/* Overlay caption, top-left of the photo */}
                                <div className="absolute left-0 top-0 max-w-[70%] bg-navy-950/90 px-5 py-5">
                                    <p className="font-display text-lg font-semibold leading-snug text-white">
                                        Building Connections.
                                    </p>
                                    <p className="font-display text-lg font-semibold leading-snug text-gold-500">
                                        Creating Careers.
                                    </p>
                                    <span className="mt-3 block h-0.5 w-8 bg-gold-500" />
                                </div>
                            </div>
                        </div>

                        {/* Dotted grid accent, behind the first stat card */}
                        <div className="relative mt-6">
                            <div
                                aria-hidden
                                className="absolute -bottom-4 -left-4 hidden h-20 w-20 sm:block"
                                style={{
                                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                                    backgroundSize: "10px 10px",
                                    color: "#d9a441",
                                }}
                            />
                            <StatCard {...stats[0]} className="relative" />
                        </div>
                    </div>

                    {/* Copy column */}
                    <div>
                        <div className="flex w-full items-center justify-center gap-3">
                            <span className="h-px w-14 bg-gold-500" />
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500">
                                <Handshake size={22} strokeWidth={1.5} className="text-gold-500" />
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                            <span className="h-px w-14 bg-gold-500" />
                        </div>

                        <h2 className="mt-6 text-center font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]">
                            Nehru Corporate Placements &amp;
                            <br />
                            Industry Relations <span className="text-gold-500">(NCPIR)</span>
                        </h2>

                        <div className="mx-auto mt-6 h-1 w-16 bg-gold-500" />

                        <ul className="mt-10 space-y-8">
                            {points.map(({ icon: Icon, text }, index) => (
                                <li key={text} className="relative flex gap-5">
                                    <span className="relative flex shrink-0 flex-col items-center">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950">
                                            <Icon size={18} strokeWidth={1.5} className="text-gold-500" />
                                        </span>
                                        {index < points.length - 1 && (
                                            <span
                                                aria-hidden
                                                className="absolute top-11 h-[calc(100%+1.5rem)] w-px border-l border-dashed border-navy-950/20"
                                            />
                                        )}
                                    </span>

                                    <p className="pt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{text}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Remaining stat cards */}
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {stats.slice(1).map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
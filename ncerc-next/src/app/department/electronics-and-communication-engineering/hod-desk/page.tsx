
import Image from "next/image";
import {
    ArrowDown,
    ArrowUpRight,
    Cpu,
    Lightbulb,
    Radio,
    Rocket,
    Sparkles,
    Target,
    Telescope,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const messageSections = [
    {
        number: "01",
        title: "A Discipline That Shapes the Future",
        icon: Radio,
        paragraphs: [
            "I truly welcome you  to be part of the Department of Electronics and Communication Engineering (ECE), a dynamic discipline that has consistently transformed the technological landscape since its inception. Over the years, ECE has evolved into a cornerstone of innovation, equipping students with advanced knowledge and practical skills that meet the rapidly changing demands of modern industries.",
            "Our Department offers a wide range of courses and specialisations, including Embedded Systems and IoT, VLSI Design, Advanced Communication Systems, and Advanced Signal Processing integrated with AI/ML. These programmes are carefully structured to meet both student aspirations and global industry requirements, ensuring excellent career prospects for our graduates. With the growing national and global emphasis on the Semiconductor Mission, opportunities for ECE professionals are expanding significantly, placing them at the forefront of technological advancement.",
        ],
    },
    {
        number: "02",
        title: "Learning Through Research and Innovation",
        icon: Lightbulb,
        paragraphs: [
            "Our highly qualified faculty members, consisting of experienced academicians and researchers, form the foundation of the Department's achievements. Their expertise has resulted in numerous innovative projects, patents, and research publications that contribute meaningfully to the field. The Department also provides state-of-the-art laboratories and modern research facilities that support experiential learning and encourage innovation. With access to advanced equipment and collaborative research environments, students are well prepared to address real-world technological challenges with confidence and creativity.",
        ],
    },
    {
        number: "03",
        title: "Beyond the Classroom",
        icon: Rocket,
        paragraphs: [
            "We strongly encourage innovation and entrepreneurship among our students. Several of our graduates have successfully launched startups and pursued entrepreneurial ventures, contributing to the growing global technology ecosystem. Our active placement cell provides excellent career opportunities, with students securing positions in leading multinational companies and reputed research organisations. In addition, the Department emphasises practical exposure through funded projects, internships, workshops, and industry collaborations, ensuring the overall development and industry readiness of our students.",
        ],
    },
    {
        number: "04",
        title: "Engineering a Better Tomorrow",
        icon: Telescope,
        paragraphs: [
            "The future of Electronics and Communication Engineering is vast and promising, with its applications driving progress in fields such as healthcare, telecommunications, space technology, and renewable energy. As a part of this vibrant discipline, students gain not only strong technical expertise but also the ability to develop solutions that positively impact society.",
        ],
    },
    {
        number: "05",
        title: "Our Vision for Excellence",
        icon: Target,
        paragraphs: [
            "With a strong legacy of academic excellence and a forward-looking vision, the Department remains committed to nurturing the next generation of innovators, researchers, and leaders. We invite you to be part of this inspiring journey and join a community that values creativity, innovation, and excellence. Together, let us explore new possibilities and shape the future of Technology.",
        ],
    },
];

const specialisations = [
    "Embedded Systems & IoT",
    "VLSI Design",
    "Advanced Communication Systems",
    "Advanced Signal Processing with AI/ML",
];

function SectionLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B99B5F]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                {children}
            </span>
        </div>
    );
}

export default function HODDeskPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(210,184,124,0.08)_100%)]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
                    <div className="max-w-3xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Department of Electronics & Communication Engineering
                            </p>
                        </div>

                        <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            From the
                            <span className="mt-2 block text-[#D2B87C]">
                                HOD&apos;s Desk
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                            A message of welcome, inspiration, and commitment to academic
                            excellence, innovation, and the future of Electronics and
                            Communication Engineering.
                        </p>

                        <a
                            href="#hod-message"
                            className="mt-9 inline-flex items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C] transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Read the Message
                            <ArrowDown size={15} />
                        </a>
                    </div>
                </div>
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* HOD INTRODUCTION */}
                <section
                    id="hod-message"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                            {/* HOD IMAGE */}
                            <div className="mx-auto w-full max-w-[440px] lg:mx-0">
                                <div className="relative">
                                    <div className="absolute -right-3 -top-3 h-full w-full border border-[#C7AE7C]" />

                                    <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D4]">
                                        <Image
                                            src="\images\dpt\electronics-and-communication-engineering\hod\ECE_HoD.webp"
                                            alt="Head of Department, Electronics and Communication Engineering"
                                            fill
                                            priority
                                            sizes="(max-width: 1024px) 90vw, 440px"
                                            className="object-cover object-top"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#20235A]/70 to-transparent" />
                                    </div>

                                    <div className="relative -mt-1 bg-[#20235A] px-6 py-6 text-white sm:px-8">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="h-px w-7 bg-[#D2B87C]" />
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                Department Leadership
                                            </p>
                                        </div>

                                        <h2 className="font-serif text-2xl leading-snug">
                                            Head of the Department
                                        </h2>

                                        <p className="mt-2 text-xs leading-6 text-white/65">
                                            Department of Electronics and Communication Engineering
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* WELCOME MESSAGE */}
                            <div>
                                <SectionLabel>Welcome Message</SectionLabel>

                                <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Welcome to a World of
                                    <span className="text-[#927B4D]"> Innovation.</span>
                                </h2>

                                <div className="mt-8 border-l-2 border-[#B99B5F] pl-6">
                                    <p className="font-serif text-xl leading-relaxed text-[#20235A] sm:text-2xl">
                                        &ldquo;I truly welcome you  to be part of the Department of Electronics and Communication Engineering (ECE), a dynamic discipline that has consistently transformed the technological landscape since its inception.&rdquo;
                                    </p>
                                </div>

                                <p className="mt-7 text-sm leading-8 text-[#66636A]">
                                    Over the years, ECE has evolved into a cornerstone of innovation, equipping students with advanced knowledge and practical skills that meet the rapidly changing demands of modern industries.

                                </p>

                                <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        "Academic Excellence",
                                        "Research & Innovation",
                                        "Industry Readiness",
                                        "Future Technologies",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="border-t border-[#D9CFBD] pt-3"
                                        >
                                            <span className="font-serif text-sm text-[#B99B5F]">
                                                0{index + 1}
                                            </span>
                                            <p className="mt-2 text-[10px] font-medium leading-5 text-[#55545A]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPECIALISATIONS */}
                <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <SectionLabel>Academic Specialisations</SectionLabel>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Learning for the Technologies of Tomorrow
                                </h2>

                                <p className="mt-5 text-sm leading-8 text-[#77737A]">
                                    Our programmes and specialisations are designed to align
                                    student aspirations with the changing needs of the global
                                    technology industry.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {specialisations.map((item, index) => (
                                    <div
                                        key={item}
                                        className="group flex min-h-[120px] items-start gap-4 border border-[#EAE5DC] bg-[#FAF7F2] p-5 transition-all duration-300 hover:border-[#C7AE7C] hover:bg-white"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                            {index === 0 ? (
                                                <Cpu size={18} />
                                            ) : index === 1 ? (
                                                <Sparkles size={18} />
                                            ) : index === 2 ? (
                                                <Radio size={18} />
                                            ) : (
                                                <Lightbulb size={18} />
                                            )}
                                        </div>

                                        <div>
                                            <span className="text-[9px] font-semibold tracking-[0.15em] text-[#B99B5F]">
                                                SPECIALISATION 0{index + 1}
                                            </span>
                                            <h3 className="mt-2 font-serif text-lg leading-snug text-[#20235A]">
                                                {item}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOD MESSAGE CONTENT */}
                <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        {/* SECTION INTRO */}
                        <div className="mb-12 max-w-3xl">
                            <SectionLabel>Our Commitment</SectionLabel>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Building Knowledge.
                                <span className="block text-[#927B4D]">
                                    Inspiring Possibilities.
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-[#77737A]">
                                A closer look at the values, opportunities, and vision that
                                guide the Department of Electronics and Communication
                                Engineering.
                            </p>
                        </div>

                        {/* MESSAGE CONTENT */}
                        <div className="border-t border-[#DED6C7]">
                            {messageSections.map((section) => {
                                const Icon = section.icon;

                                return (
                                    <article
                                        key={section.number}
                                        className="grid gap-5 border-b border-[#DED6C7] py-9 sm:grid-cols-[100px_1fr] sm:gap-8 sm:py-11 lg:grid-cols-[120px_1fr]"
                                    >
                                        {/* NUMBER AND ICON */}
                                        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:justify-start sm:gap-5">
                                            <span className="font-serif text-3xl text-[#B9A77F]">
                                                {section.number}
                                            </span>

                                            <div className="flex h-11 w-11 items-center justify-center border border-[#D8CCB6] text-[#927B4D]">
                                                <Icon size={21} strokeWidth={1.4} />
                                            </div>
                                        </div>

                                        {/* TEXT CONTENT */}
                                        <div className="w-full">
                                            <h3 className="font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                                {section.title}
                                            </h3>

                                            <div className="mt-6 space-y-5">
                                                {section.paragraphs.map((paragraph, paragraphIndex) => (
                                                    <p
                                                        key={paragraphIndex}
                                                        className="w-full text-justify text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CLOSING SECTION */}
                <section className="relative isolate overflow-hidden bg-[#20235A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
                    <div className="pointer-events-none absolute -right-24 -top-32 h-[400px] w-[400px] rounded-full border border-white/[0.08]" />
                    <div className="pointer-events-none absolute -right-12 -top-20 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/15" />

                    <div className="relative mx-auto max-w-5xl text-center">
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#D2B87C]" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                The Journey Ahead
                            </p>
                            <span className="h-px w-8 bg-[#D2B87C]" />
                        </div>

                        <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                            Together, Let Us Shape
                            <span className="block text-[#D2B87C]">
                                the Future of Technology.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65">
                            Join a community that values creativity, innovation, and
                            excellence. Let us explore new possibilities and create
                            technology that makes a difference.
                        </p>

                        <a
                            href="#hod-message"
                            className="mt-9 inline-flex items-center gap-3 border border-[#D2B87C]/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C] transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Back to HOD&apos;s Message
                            <ArrowUpRight size={15} />
                        </a>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

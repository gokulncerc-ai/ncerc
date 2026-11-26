
"use client";

import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    BrainCircuit,
    GraduationCap,
    Lightbulb,
    MessageCircle,
    Quote,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

const messageSections = [
    {
        number: "01",
        eyebrow: "The Age of Artificial Intelligence",
        content:
            "We live in an era where AI is no longer a distant dream — it powers the apps on your phone, the recommendations you see online, the medical diagnoses that save lives, and the language tools that bridge communities across the world. At the heart of this revolution is the field you are about to step into. Choosing CSE (AI & ML) is not just choosing a course — it is choosing to be at the forefront of one of the most transformative movements in human history.",
    },
    {
        number: "02",
        eyebrow: "Research with a Human Purpose",
        content:
            "As someone who has spent years researching Natural Language Processing — teaching machines to understand human emotions expressed in our own Malayalam language — I have experienced firsthand the thrill of pushing boundaries and the joy of making technology more human, more inclusive, and more meaningful. That is the spirit I carry into this department, and that is the spirit I hope to ignite in each one of you.",
    },
    {
        number: "03",
        eyebrow: "Learning Beyond Classrooms",
        content:
            "At this department, we believe that great engineers are not just built in classrooms — they are shaped by curiosity, persistence, and the courage to ask questions that no one has answered yet.Whether you are a fresh graduate eager to explore the world of intelligent systems, or a working professional looking to deepen your expertise through PG studies, this programme offers you the knowledge, the mentorship, and the environment to grow beyond what you imagined possible.",
    },
    {
        number: "04",
        eyebrow: "Opportunities and Possibilities",
        content:
            "The opportunities in AI & ML are limitless — from healthcare and agriculture to finance, education, and beyond. India, and Kerala in particular, is rapidly emerging as a hub for AI-driven innovation. The skills you build here will not just make you employable — they will make you indispensable.",
    },
];

const pageNavigation = [
    { id: "welcome", label: "Welcome" },
    { id: "our-vision", label: "Our Message" },
    { id: "research-focus", label: "Research Focus" },
    { id: "opportunities", label: "Opportunities" },
    { id: "connect", label: "Closing Message" },
];

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type MessageCardProps = {
    number: string;
    eyebrow: string;
    content: string;
};

type QuoteCardProps = {
    quote: string;
    author: string;
};

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-normal tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>

                <span className="h-px w-8 bg-[#D2B87C]" />

                <span className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl lg:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69666B]">
                    {description}
                </p>
            )}

            <div className="mt-5 h-[2px] w-12 bg-[#D2B87C]" />
        </div>
    );
}

function MessageCard({
    number,
    eyebrow,
    content,
}: MessageCardProps) {
    return (
        <article className="grid gap-4 border-b border-[#E7E0D5] py-7 last:border-b-0 sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-9">
            <div className="flex items-start gap-3 sm:block">
                <span className="font-serif text-2xl font-normal text-[#B49A66]">
                    {number}
                </span>

                <span className="mt-3 hidden h-px w-8 bg-[#D2B87C] sm:block" />
            </div>

            <div>
                <p className="mb-3 text-[9px] font-normal uppercase tracking-[0.18em] text-[#927B4D]">
                    {eyebrow}
                </p>

                <p className="text-sm font-normal leading-8 text-[#55535B] sm:text-[15px]">
                    {content}
                </p>
            </div>
        </article>
    );
}

function QuoteCard({
    quote,
    author,
}: QuoteCardProps) {
    return (
        <div className="relative overflow-hidden border border-[#D2B87C]/30 bg-[#20235A] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/[0.07]" />

            <div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rounded-full border border-white/[0.07]" />

            <Quote
                size={30}
                strokeWidth={1.3}
                className="relative text-[#D2B87C]"
            />

            <blockquote className="relative mt-5 font-serif text-xl font-normal leading-9 text-white sm:text-2xl sm:leading-10">
                “{quote}”
            </blockquote>

            <div className="relative mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />

                <p className="text-[10px] font-normal uppercase tracking-[0.16em] text-[#D2B87C]">
                    {author}
                </p>
            </div>
        </div>
    );
}

export default function HodDeskPage() {
    return (
        <>
            <SiteHeader />

            {/* HOD DESK HERO */}
            <section
                id="welcome"
                className="relative isolate overflow-hidden bg-[#20235A]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />

                        <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Department of CSE (AI & ML)
                        </p>
                    </div>

                    <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/50">
                                A Message from the Head of Department
                            </p>

                            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Welcome to the
                                <span className="mt-1 block text-[#D2B87C]">
                                    World of AI & ML
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                                A space where curiosity meets innovation,
                                where technology becomes meaningful, and
                                where the next generation of intelligent
                                solutions begins.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Curiosity · Innovation · Intelligence
                                </span>
                            </div>
                        </div>

                        {/* HOD PROFILE PANEL */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/40 bg-[#D2B87C]/10">
                                <GraduationCap
                                    size={22}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.4}
                                />
                            </div>

                            <p className="mt-5 text-[9px] font-normal uppercase tracking-[0.2em] text-[#D2B87C]">
                                From the Desk of
                            </p>

                            <h2 className="mt-3 font-serif text-2xl font-normal text-white">
                                Ms. Anuja K
                            </h2>

                            <p className="mt-2 text-xs leading-6 text-white/65">
                                Head of Department (In-Charge)
                            </p>

                            <p className="mt-1 text-[10px] leading-5 text-white/45">
                                Department of CSE (AI & ML)
                            </p>

                            <a
                                href="#our-vision"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-normal uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Read the Message
                                <ArrowDown size={15} strokeWidth={1.4} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* PAGE NAVIGATION */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {pageNavigation.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="shrink-0 text-[9px] font-normal uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* WELCOME MESSAGE */}
                <section
                    id="our-vision"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Welcome Address"
                                title="Dear Students and Aspirants"
                                description="A message of welcome and inspiration from the Head of the Department of Computer Science and Engineering (AI & ML)."
                            />

                            <div className="border-l-2 border-[#D2B87C] bg-white px-6 py-7 sm:px-9 sm:py-9">
                                <p className="font-serif text-lg font-normal leading-9 text-[#20235A] sm:text-xl">
                                    Welcome to the Department of Computer Science & Engineering with specialization in Artificial
                                    Intelligence and Machine Learning — a space where curiosity meets innovation, and where the
                                    technology of tomorrow is being shaped today.
                                </p>
                            </div>

                            <div className="mt-8">
                                <MessageCard
                                    number="01"
                                    eyebrow={messageSections[0].eyebrow}
                                    content={messageSections[0].content}
                                />

                                <MessageCard
                                    number="02"
                                    eyebrow={messageSections[1].eyebrow}
                                    content={messageSections[1].content}
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <QuoteCard
                                quote="The future is intelligent. Be the one who builds it."
                                author="Ms. Anuja K"
                            />

                            {/* DEPARTMENT HIGHLIGHT */}
                            <div className="border border-[#E4DCCE] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <BrainCircuit
                                            size={20}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-serif text-lg font-normal text-[#20235A]">
                                            Our Specialization
                                        </p>

                                        <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                            Future-Ready Technology
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-[#55535B]">
                                    Artificial Intelligence and Machine
                                    Learning are transforming how people
                                    interact with technology and how
                                    intelligent solutions are developed
                                    across industries.
                                </p>

                                <div className="mt-5 flex items-center gap-2 border-t border-[#EAE4D9] pt-4">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />

                                    <p className="text-[9px] font-normal uppercase tracking-[0.14em] text-[#927B4D]">
                                        CSE – Artificial Intelligence & ML
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESEARCH FOCUS */}
                <section
                    id="research-focus"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Research and Innovation"
                            title="Making Technology More Human"
                            description="Exploring how artificial intelligence can create inclusive, meaningful and human-centred technological experiences."
                        />

                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-7 sm:p-9">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <MessageCircle
                                        size={22}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3 className="mt-6 font-serif text-2xl font-normal leading-snug text-[#20235A]">
                                    Natural Language Processing
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-[#69666B]">
                                    Research focused on teaching machines
                                    to understand human emotions expressed
                                    through the Malayalam language.
                                </p>

                                <div className="mt-7 border-t border-[#E4DCCE] pt-5">
                                    <p className="text-[9px] uppercase tracking-[0.16em] text-[#927B4D]">
                                        Research Perspective
                                    </p>

                                    <p className="mt-2 font-serif text-lg font-normal text-[#20235A]">
                                        Technology with a human connection.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <MessageCard
                                    number="01"
                                    eyebrow="Research with Purpose"
                                    content={messageSections[1].content}
                                />

                                <QuoteCard
                                    quote="Making technology more human, more inclusive, and more meaningful."
                                    author="Ms. Anuja K"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* LEARNING AND ACADEMIC APPROACH */}
                <section
                    className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Our Academic Approach"
                            title="Learning Beyond Classrooms"
                            description="Building future engineers through curiosity, persistence, mentorship and the courage to explore unanswered questions."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
                            <div>
                                <MessageCard
                                    number="01"
                                    eyebrow={messageSections[2].eyebrow}
                                    content={messageSections[2].content}
                                />

                                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                    <div className="border border-[#E4DCCE] bg-white p-6">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <BookOpen
                                                size={19}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <h3 className="mt-5 font-serif text-lg font-normal text-[#20235A]">
                                            Academic Learning
                                        </h3>

                                        <p className="mt-2 text-xs leading-7 text-[#69666B]">
                                            Knowledge and learning
                                            opportunities for students
                                            exploring intelligent systems.
                                        </p>
                                    </div>

                                    <div className="border border-[#E4DCCE] bg-white p-6">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <GraduationCap
                                                size={20}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <h3 className="mt-5 font-serif text-lg font-normal text-[#20235A]">
                                            Mentorship
                                        </h3>

                                        <p className="mt-2 text-xs leading-7 text-[#69666B]">
                                            Guidance and mentorship to
                                            support academic and
                                            professional growth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-8">
                                <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full border border-[#D2B87C]/20" />

                                <Lightbulb
                                    size={25}
                                    className="relative text-[#D2B87C]"
                                    strokeWidth={1.4}
                                />

                                <p className="relative mt-6 text-[9px] font-normal uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Our Belief
                                </p>

                                <h3 className="relative mt-3 font-serif text-2xl font-normal leading-snug text-white">
                                    Great engineers are shaped by curiosity.
                                </h3>

                                <p className="relative mt-4 text-xs leading-7 text-white/65">
                                    Persistence and the courage to ask
                                    questions that no one has answered
                                    yet are essential to meaningful
                                    innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OPPORTUNITIES */}
                <section
                    id="opportunities"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="A World of Possibilities"
                            title="The Opportunities in AI & ML"
                            description="Artificial Intelligence and Machine Learning are opening new possibilities across diverse fields and industries."
                        />

                        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start">
                            <div>
                                <MessageCard
                                    number="01"
                                    eyebrow={messageSections[3].eyebrow}
                                    content={messageSections[3].content}
                                />

                                <div className="mt-8 border-t border-[#EAE4D9] pt-7">
                                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#927B4D]">
                                        Areas of Impact
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {[
                                            "Healthcare",
                                            "Agriculture",
                                            "Finance",
                                            "Education",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[#D2B87C]/50 bg-[#FAF7F2] px-4 py-2.5 text-xs text-[#393947]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E4DCCE] bg-[#FAF7F2] p-7 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <ShieldCheck
                                        size={21}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="mt-6 text-[9px] uppercase tracking-[0.17em] text-[#927B4D]">
                                    Looking Ahead
                                </p>

                                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-[#20235A]">
                                    Build skills that make a difference.
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#69666B]">
                                    The knowledge and skills developed
                                    through AI and ML education can prepare
                                    students to contribute to an increasingly
                                    intelligent and technology-driven world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING MESSAGE */}
                <section
                    id="connect"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="A Personal Invitation"
                            title="Be Part of This Journey"
                            description="An invitation to students and aspirants to explore, learn and contribute to the future of intelligent technology."
                        />

                        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-center">
                            <div>
                                <p className="text-sm leading-8 text-[#55535B] sm:text-[15px]">
                                    I warmly invite you to be part of this
                                    exciting journey. Come with your dreams,
                                    your doubts, and your determination. We
                                    are here to guide you every step of the
                                    way.
                                </p>

                                <div className="mt-9">
                                    <QuoteCard
                                        quote="The future is intelligent. Be the one who builds it."
                                        author="Ms. Anuja K"
                                    />
                                </div>
                            </div>

                            <div className="border border-[#E4DCCE] bg-white p-7 sm:p-8">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <Sparkles
                                        size={22}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="mt-6 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    With Warm Regards
                                </p>

                                <h3 className="mt-3 font-serif text-2xl font-normal text-[#20235A]">
                                    Ms. Anuja K
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Head of Department (In-Charge)
                                </p>

                                <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                <p className="mt-5 text-[10px] leading-6 text-[#69666B]">
                                    Department of Computer Science &
                                    Engineering (AI & ML)
                                </p>

                                <p className="mt-2 text-[10px] leading-6 text-[#69666B]">
                                    Nehru College of Engineering and
                                    Research Centre
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

               
            </main>

            <FooterSection />
        </>
    );
}

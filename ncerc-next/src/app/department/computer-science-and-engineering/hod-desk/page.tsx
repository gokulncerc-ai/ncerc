
"use client";

import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Landmark,
    Quote,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

const messageSections = [
    {
        number: "01",
        eyebrow: "Our Foundation",
        content:
            "Education is the foundation upon which dreams are built. It empowers individuals to become not only skilled professionals but the engineers of a better society. At NCERC, we believe that education is the key to achieving the aspirations of both students and their parents,fostering noble citizens who are equipped to shape the world around them.",
    },
    {
        number: "02",
        eyebrow: "A Legacy of Excellence",
        content:
            "Since our inception in 2002, the CSE department has always remained committed to maintaining the legacy of excellence with high academic standards. We provide cutting-edge infrastructure designed to ensure that our students and faculty experience excellence inevery aspect of their journey.",
    },
    {
        number: "03",
        eyebrow: "Learning for the Future",
        content:
            "Our curriculum is meticulously designed to align with Industry 4.0 standards. Our dedicated team of faculty members are more than educators; they are mentors dedicated to moulding students into efficient professionals. By combining technical proficiency with ethical devotion, we ensure our graduates are not just job-seekers, but job-creators and innovators.",
    },
    {
        number: "04",
        eyebrow: "Beyond the Classroom",
        content:
            "Beyond the classroom, our vibrant campus life fosters talent through diverse co-curricular and extra-curricular activities, preparing our students for leadership in an ever-evolving digital world.",
    },
];

const pageNavigation = [
    { id: "welcome", label: "Welcome" },
    { id: "our-vision", label: "Our Foundation" },
    { id: "academic-excellence", label: "Academic Excellence" },
    { id: "campus-life", label: "Campus Life" },
    { id: "connect", label: "Connect With Us" },
];

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-8 bg-[#D2B87C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl lg:text-4xl">
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
}: {
    number: string;
    eyebrow: string;
    content: string;
}) {
    return (
        <article className="grid gap-4 border-b border-[#E7E0D5] py-7 last:border-b-0 sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-9">
            <div className="flex items-start gap-3 sm:block">
                <span className="font-serif text-2xl text-[#B49A66]">
                    {number}
                </span>
                <span className="mt-3 hidden h-px w-8 bg-[#D2B87C] sm:block" />
            </div>

            <div>
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                    {eyebrow}
                </p>
                <p className="text-sm leading-8 text-[#55535B] sm:text-[15px]">
                    {content}
                </p>
            </div>
        </article>
    );
}

function QuoteCard({
    quote,
    author,
}: {
    quote: string;
    author: string;
}) {
    return (
        <div className="relative overflow-hidden border border-[#D2B87C]/30 bg-[#20235A] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 rounded-full border border-white/[0.07]" />

            <Quote
                size={30}
                strokeWidth={1.3}
                className="relative text-[#D2B87C]"
            />

            <blockquote className="relative mt-5 font-serif text-xl leading-9 text-white sm:text-2xl sm:leading-10">
                “{quote}”
            </blockquote>

            <div className="relative mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C]">
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

            {/* HOD Desk Hero */}
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
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Department of Computer Science and Engineering
                        </p>
                    </div>

                    <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                A Message from the Dean
                            </p>

                            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Welcome to the
                                <span className="mt-1 block text-[#D2B87C]">
                                    NCERC CSE Community
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                                Greetings and welcome to the Department of
                                Computer Science and Engineering at Nehru
                                College of Engineering and Research Centre,
                                Pampady, Thrissur.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    Since 2002 · A Legacy of Excellence
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/40 bg-[#D2B87C]/10">
                                <GraduationCap
                                    size={22}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.4}
                                />
                            </div>

                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                From the Desk of
                            </p>

                            <h2 className="mt-3 font-serif text-2xl text-white">
                                Dr. Ramani K
                            </h2>

                            <p className="mt-2 text-xs leading-6 text-white/65">
                                Dean – CSE
                            </p>

                            <a
                                href="#our-vision"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Read the Message
                                <ArrowDown size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <InnerHeader />

                {/* Page Navigation */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {pageNavigation.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Welcome Message */}
                <section
                    id="our-vision"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Welcome Address"
                                title="A Message from the Dean"
                                description="A warm welcome to students, parents, faculty members, and everyone who is part of the NCERC CSE community."
                            />

                            <p className="text-sm leading-8 text-[#55535B] sm:text-[15px]">
                                It gives me immense pleasure to welcome you to the Department of Computer Science and
                                Engineering at our Esteemed Institution Nehru College of Engineering and Research Centre
                                (NCERC), Pampady, Trissur.
                            </p>

                            <div className="mt-8">
                                <MessageCard
                                    number="01"
                                    eyebrow="Our Foundation"
                                    content={messageSections[0].content}
                                />
                                <MessageCard
                                    number="02"
                                    eyebrow="A Legacy of Excellence"
                                    content={messageSections[1].content}
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <QuoteCard
                                quote="Education is the passport to the future - tomorrow belongs to those who prepare for it today."
                                author="Malcolm X"
                            />

                            <div className="border border-[#E4DCCE] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <Landmark
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif text-lg text-[#20235A]">
                                            Our Institution
                                        </p>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                            Established 2002
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-[#55535B]">
                                    Nehru College of Engineering and Research
                                    Centre, Pampady, Thrissur, Kerala.
                                </p>

                                <div className="mt-5 flex items-center gap-2 border-t border-[#EAE4D9] pt-4">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                        Department of CSE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Excellence */}
                <section
                    id="academic-excellence"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Excellence"
                            title="Preparing for a Changing World"
                            description="Building strong foundations through relevant learning, dedicated mentorship, and a commitment to excellence."
                        />

                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-7 sm:p-9">
                                <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <BookOpen
                                        size={22}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3 className="mt-6 font-serif text-2xl leading-snug text-[#20235A]">
                                    Learning that prepares you for tomorrow.
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-[#69666B]">
                                    Our curriculum is meticulously designed
                                    to align with Industry 4.0 standards,
                                    supporting students as they prepare for
                                    the opportunities and challenges of an
                                    evolving technological landscape.
                                </p>
                            </div>

                            <div>
                                <MessageCard
                                    number="01"
                                    eyebrow="Industry-Aligned Learning"
                                    content={messageSections[2].content}
                                />

                                <QuoteCard
                                    quote="Success is the sum of small efforts, repeated day-in and day-out."
                                    author="Robert Collier"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Life */}
                <section
                    id="campus-life"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Beyond Academics"
                            title="An Environment to Grow and Lead"
                            description="A vibrant campus experience that encourages students to discover their potential beyond the classroom."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
                            <div>
                                <MessageCard
                                    number="01"
                                    eyebrow="Campus Experience"
                                    content={messageSections[3].content}
                                />

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    On behalf of the NCERC CSE family, I
                                    invite you to join our promising and
                                    dynamic community. We are privileged to
                                    offer you an enriching environment,
                                    exceptional opportunities, and memories
                                    that will last a lifetime.
                                </p>
                            </div>

                            <div className="relative overflow-hidden bg-[#20235A] p-7 sm:p-8">
                                <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full border border-[#D2B87C]/20" />

                                <Sparkles
                                    size={25}
                                    className="relative text-[#D2B87C]"
                                    strokeWidth={1.4}
                                />

                                <p className="relative mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Our Invitation
                                </p>

                                <h3 className="relative mt-3 font-serif text-2xl leading-snug text-white">
                                    Be a part of the NCERC CSE community.
                                </h3>

                                <p className="relative mt-4 text-xs leading-7 text-white/65">
                                    Discover an enriching academic
                                    environment, meaningful opportunities,
                                    and a community that supports your
                                    journey.
                                </p>

                                <a
                                    href="#connect"
                                    className="relative mt-7 inline-flex items-center gap-3 border-b border-[#D2B87C] pb-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#D2B87C] transition-colors hover:text-white"
                                >
                                    Explore More
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Tour / Closing */}
                <section
                    id="connect"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden bg-[#20235A] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
                            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/15" />
                            <div className="pointer-events-none absolute -right-5 -top-9 h-48 w-48 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative grid gap-10 lg:grid-cols-[1fr_260px] lg:items-end">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-9 bg-[#D2B87C]" />
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Your Journey Starts Here
                                        </p>
                                    </div>

                                    <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                        Explore, Experience and Discover NCERC
                                    </h2>

                                    <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
                                        Feel free to reach out to our
                                        department office for a campus tour.
                                        Explore our campus facilities online
                                        too.
                                    </p>

                                    <p className="mt-7 font-serif text-lg italic text-[#D2B87C]">
                                        Wishing you a transformative journey
                                        and delightful career ahead...
                                    </p>
                                </div>

                                <div className="border-t border-[#D2B87C]/30 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                        Warm Regards
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl text-white">
                                        Dr. Ramani K
                                    </h3>

                                    <p className="mt-2 text-xs text-white/60">
                                        Dean – CSE
                                    </p>

                                    <div className="mt-5 h-px w-10 bg-[#D2B87C]" />

                                    <p className="mt-4 text-[9px] uppercase tracking-[0.14em] text-white/45">
                                        Department of Computer Science and
                                        Engineering
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

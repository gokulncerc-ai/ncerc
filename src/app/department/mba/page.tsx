import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
    ArrowDownRight,
    ArrowRight,
    BedDouble,
    BriefcaseBusiness,
    Building2,
    Bus,
    CheckCircle2,
    GraduationCap,
    Handshake,
    LibraryBig,
    Lightbulb,
    Presentation,
    ShieldCheck,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "./DepartmentNav/page";
import Faq from "./FAQ.tsx/page"

export const metadata: Metadata = {
    title: "Best MBA College in Kerala | Top MBA in Palakkad & Thrissur",
    description:
        "Discover Nehru School of Management, its MBA programme, industry exposure, management learning, campus facilities and student development opportunities.",
    keywords: [
        "MBA Colleges in Kerala",
        "MBA College in Palakkad",
        "MBA College in Thrissur",
        "Best MBA Colleges in Kerala",
        "Nehru School of Management",
        "Top MBA College in Kerala",
        "Best MBA in Kerala",
        "MBA in Palakkad",
        "MBA in Kerala",
        "Best college for MBA in Kerala",
    ],
    robots: { index: true, follow: true },
};

const DEPARTMENT_PATH = "/department/mba";

type Facility = {
    number: string;
    title: string;
    eyebrow: string;
    icon: LucideIcon;
    description: string;
    featured?: boolean;
};

const aboutParagraphs = [
    "Nehru School of Management is not just a B-Schools, but it is daringly different from the rest and it is ranked among the leading B-Schools in national level grading service. It also hastie-ups/MOUs with many Government and Corporate institutions for Enterpreneurship Development, Training and Consultancy Projects which provide ample opportunities for our students to gain valuable industry and field exposure. The platform gives opportunities for students to experience professional work in the limelight.",
    "NSM believes and strives to achieve a holistic development of the individual who will contribute in future not only as good managers but also as disciplined corporate citizens. The pedagogy is designed for proactive student interaction. The course delivery system is well composed of case analysis and presentation, group discussion, seminars, assignments, live industrial projects, quiz and soon. We consistently encourage our students to leverage the unparalleled resources of the School of Management, Nehru Group of Institution and APJ Abdul Kalam Technological University to add value to their MBA. Since graduate students are from different streams bridge courses/ orientation classes are arranged as required.",
    "Staff with a wealth of industrial and commercial experience provides necessary skills to students in solving business problems in real life situation. The strong commercial orientation and academic rigor of the program means that the students are shaped to seek a wide range of business related careers both in the public and private sector. Further they can go for careers in Euro bond trading, project management, consultancy, teaching profession, advertisement or, thinking beyond jobs to become entrepreneurs.",
    "Positive attitude formation and skills development are given the right importance in our two year campus program. Experienced faculty mentor students to develop positive attitude towards job, society and life in general. Additional skills are imparted through language classes, interpersonal skills practice, and seamless interaction with technology.",
    "Students undertake social projects like teaching at orphanages, visit to old age homes, cow feeding etc to make them socially responsible corporate citizens. A Vivekananda Study centre is being developed as a centre of social and cultural transformation. The total intake of students @ NSM for MBA programme is 120",
];

const learningApproaches = [
    {
        number: "01",
        icon: Presentation,
        title: "Interactive learning",
        description:
            "Case analysis and presentation, group discussions, seminars, assignments and quizzes encourage proactive student participation.",
    },
    {
        number: "02",
        icon: Handshake,
        title: "Industry engagement",
        description:
            "Live industrial projects and institutional collaborations create opportunities for valuable industry and field exposure.",
    },
    {
        number: "03",
        icon: Lightbulb,
        title: "Personal development",
        description:
            "Language classes, interpersonal skills practice, technology interaction and faculty mentoring support holistic development.",
    },
];

const facilities: Facility[] = [
    {
        number: "01",
        title: "Knowledge Pool — Library",
        eyebrow: "Research & resources",
        icon: LibraryBig,
        featured: true,
        description:
            "NSM has got a computerized digital library which makes it a knowledge paradise for everyone. It is well stocked with latest editions of standard international books in all disciplines. This attracts students to spend more time for resourcing Indian and foreign journals on different subjects in large numbers and makes the student highly informed and updates them with the latest trends.",
    },
    {
        number: "02",
        title: "Management Practices",
        eyebrow: "Learning by doing",
        icon: BriefcaseBusiness,
        featured: true,
        description:
            "In NSM, students not only learn management principles, but also practice the same. The student development committee has been made responsible for incorporating role play, case analysis, paper presentations, assignments, debate, management games, computer simulated management decision, management modelling etc. to inculcate corporate culture in day to day college curriculum.",
    },
    {
        number: "03",
        title: "Corporate Visits",
        eyebrow: "Industry exposure",
        icon: Building2,
        description:
            "Student trips to various corporate and industrial houses give them opportunities to get first hand information on real time management practices and practical applications of theoretical management principles",
    },
    {
        number: "04",
        title: "Hostels",
        eyebrow: "Campus living",
        icon: BedDouble,
        description:
            "One of the most picturesque campuses in the State of Kerala, proudly boast of a range of excellent accommodation facilities, good food and courteous catering. The picturesque location shall linger nostalgically in the minds of anybody staying in this beautiful area. Endowed with an enchanting and breath taking topography, lush green natural vegetation, virgin land, pollution free atmosphere with salubrious climate, this is a sought after place for healthy life, clear thinking and for pleasant learning pursuits. Located close to the academic area and need only a short walk. Twin sharing bedrooms are well equipped and furnished. They are provided with good bathrooms and neat toilets. Security guards are put on duty for 24 hours.",
    },
    {
        number: "05",
        title: "Ragging free campus",
        eyebrow: "Student safety",
        icon: ShieldCheck,
        description:
            "We are committed to students and parents to provide a friendly and disciplined ambience in our campus, conducive for students. Statutory measures to prevent ragging are compiled with and no such incidents have so far reported from the campus or hostels. There is a high level monitoring committee chaired by Principal, HoDs and faculty members to keep vigil always. Round the clock safety of students is taken care of in campus as well as hostels.",
    },
    {
        number: "06",
        title: "Transportation",
        eyebrow: "Campus connectivity",
        icon: Bus,
        description:
            "For the convenience of the students studying under Nehru Group of Institutions there are college buses plying to Thrissur, Palakkad and Malappuram districts in different routes. More than 40 buses are plying for this purpose.",
    },
];

export default function MBAAboutPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
                    <div className="mx-auto grid max-w-[1440px] lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr]">

                        {/* LEFT: MBA Hero Content */}
                        <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#D2B87C] sm:text-xs">
                                    Nehru School of Management
                                </p>
                            </div>

                            <h1 className="font-serif text-[42px] font-normal leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[64px] xl:text-[76px]">
                                Management
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    with purpose.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                                Discover an approach to management education shaped by
                                practical learning, industry exposure, professional skills and
                                responsible citizenship.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#about-nsm"
                                    className="group inline-flex min-h-11 items-center gap-2 bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:bg-white"
                                >
                                    Discover NSM
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="#learning"
                                    className="inline-flex min-h-11 items-center gap-2 border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    How we learn
                                    <ArrowDownRight size={15} />
                                </a>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-xs text-white/65">
                                <Link href={DEPARTMENT_PATH} className="transition-colors hover:text-white">
                                    Departments
                                </Link>
                                <span className="text-[#D2B87C]">/</span>
                                <span className="text-white/90">MBA</span>
                            </div>

                            <div className="mt-9 max-w-md border-t border-[#D2B87C]/40 pt-5 sm:mt-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    MBA programme
                                </p>

                                <div className="mt-3 flex items-end gap-4">
                                    <span className="font-serif text-6xl leading-none tracking-[-0.05em] sm:text-7xl">
                                        120
                                    </span>
                                    <span className="mb-1 max-w-[170px] text-sm leading-5 text-white/75">
                                        Total student intake stated by NSM
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Hero Image via URL */}
                        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-full">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://i.pinimg.com/736x/1c/2d/45/1c2d45be957997c2e75cdd8bd94f331e.jpg')",
                                }}
                            />

                            {/* Image overlay and seamless navy blend */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-[#20235A]/65 via-transparent to-[#20235A]/10 lg:bg-gradient-to-r lg:from-[#20235A]/60 lg:via-[#20235A]/10 lg:to-transparent"
                            />

                            {/* Image caption */}
                            <div className="absolute bottom-5 left-5 right-5 border-l-2 border-[#D2B87C] bg-[#20235A]/75 px-4 py-3 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:px-5 sm:py-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Learn · Lead · Transform
                                </p>
                                <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                                    Preparing tomorrow’s leaders
                                </p>
                            </div>

                            {/* Decorative frame */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-4 border border-white/20 sm:inset-6"
                            />
                        </div>
                    </div>

                    {/* Gold accent */}
                    <div className="h-1 w-full bg-[#D2B87C]" />
                </section>

                <InnerHeader activeTab="About" />

                {/* ABOUT */}

                <section
                    id="about-nsm"
                    className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20"
                >
                    <div className="mx-auto grid max-w-[1280px] items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">

                        {/* LEFT: About heading, description and larger image */}
                        <div className="flex min-w-0 flex-col">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#8F7746]" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                                    About the school
                                </p>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                                More than
                                <br />
                                <span className="italic">business</span>
                                <br />
                                education.
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-[#1E1917]/65">
                                Developing managers who bring professional knowledge,
                                practical understanding and a sense of responsibility into
                                the world of work.
                            </p>

                            <div className="mt-5 border-l-2 border-[#D2B87C] pl-4">
                                <p className="font-serif text-xl leading-7 text-[#20235A]">
                                    Holistic development of the individual.
                                </p>
                            </div>

                            {/* Larger image */}
                            <div className="group relative mt-6 flex-1 overflow-hidden">
                                <div
                                    role="img"
                                    aria-label="Management students collaborating in a modern learning environment"
                                    className="h-[300px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] sm:h-[380px] lg:h-full lg:min-h-[460px] xl:min-h-[500px]"
                                    style={{
                                        backgroundImage:
                                            "url('https://i.pinimg.com/736x/73/a8/ad/73a8ad2ce4df1e2af1b845f3da939aa3.jpg')",
                                    }}
                                />

                                {/* Navy gradient overlay */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171A48]/85 via-[#20235A]/10 to-transparent"
                                />

                                {/* Image caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="h-px w-6 bg-[#D2B87C]" />
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            The NSM experience
                                        </p>
                                    </div>

                                    <p className="max-w-xs font-serif text-xl leading-snug text-white sm:text-2xl">
                                        Learning beyond the classroom.
                                    </p>
                                </div>

                                {/* Gold accent */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute bottom-0 right-0 h-1 w-1/3 bg-[#D2B87C]"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Existing NSM content */}
                        <div className="min-w-0">
                            <div className="mb-5 flex items-center gap-3 border-b border-[#20235A]/15 pb-4">
                                <GraduationCap
                                    size={20}
                                    className="text-[#8F7746]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                    Nehru School of Management
                                </p>
                            </div>

                            <div className="space-y-4">
                                {aboutParagraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-[#1E1917]/75 sm:text-[15px] sm:leading-[1.9]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3 border-y border-[#20235A]/15 py-4">
                                <CheckCircle2
                                    size={19}
                                    className="mt-1 shrink-0 text-[#8F7746]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-sm leading-6 text-[#20235A]">
                                    Professional skills, industry exposure and social
                                    responsibility are integral themes of the NSM experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* LEARNING APPROACH */}
                <section id="learning" className="scroll-mt-24 bg-[#F2EFE8] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                                        The learning experience
                                    </p>
                                </div>
                                <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                                    From classroom
                                    <br />
                                    <span className="italic">to real world.</span>
                                </h2>
                            </div>
                            {/* <p className="max-w-lg text-sm leading-7 text-[#1E1917]/65">
                                Interactive teaching, practical management activities,
                                industry exposure and personal development help students
                                connect theory with practice.
                            </p> */}
                        </div>

                        <div className="mt-8 grid gap-5 border-y border-[#20235A]/15 md:grid-cols-3 md:gap-0">
                            {learningApproaches.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <article
                                        key={item.number}
                                        className={`py - 6 md: py - 7 ${index !== 2 ? "border-b border-[#20235A]/15 md:border-b-0 md:border-r" : ""
                                            } ${index === 1 ? "md:px-6" : ""} ${index === 2 ? "md:pl-6" : "md:pr-6"} `}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-sm text-[#8F7746]">{item.number}</span>
                                            <Icon size={22} className="text-[#8F7746]" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="mt-5 font-serif text-2xl text-[#20235A]">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-[#1E1917]/70">{item.description}</p>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="mt-6 grid gap-4 border border-[#20235A]/10 bg-[#FAF7F2] p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6">
                            <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                <Users size={21} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-[#20235A]">Learning as a community</h3>
                                <p className="mt-2 text-sm leading-7 text-[#1E1917]/65">
                                    Social projects, including teaching at orphanages and visits
                                    to old age homes, encourage students to become socially
                                    responsible corporate citizens.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAMPUS FACILITIES */}
                <section id="campus-facilities" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                            <div>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#8F7746]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-xs">
                                        Campus & facilities
                                    </p>
                                </div>
                                <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                                    Space to learn.
                                    <br />
                                    <span className="italic">Support to grow.</span>
                                </h2>
                            </div>
                            {/* <p className="max-w-lg text-sm leading-7 text-[#1E1917]/65">
                                Explore the learning resources, residential facilities, campus
                                safety measures and transport arrangements described by NSM.
                            </p> */}
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                            {facilities.filter((facility) => facility.featured).map((facility) => {
                                const Icon = facility.icon;
                                return (
                                    <article key={facility.number} className="group border border-[#20235A]/10 bg-white p-5 transition-colors hover:border-[#D2B87C] sm:p-7">
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                                <Icon size={21} strokeWidth={1.5} />
                                            </div>
                                            <span className="font-serif text-sm text-[#8F7746]">{facility.number}</span>
                                        </div>
                                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">{facility.eyebrow}</p>
                                        <h3 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">{facility.title}</h3>
                                        <div className="mt-4 h-px w-10 bg-[#D2B87C] transition-all group-hover:w-20" />
                                        <p className="mt-4 text-sm leading-7 text-[#1E1917]/70">{facility.description}</p>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="mt-4 divide-y divide-[#20235A]/10 border-y border-[#20235A]/10">
                            {facilities.filter((facility) => !facility.featured).map((facility) => {
                                const Icon = facility.icon;
                                return (
                                    <article key={facility.number} className="grid gap-3 py-5 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-6">
                                        <div className="flex items-center justify-between sm:block">
                                            <div className="flex h-10 w-10 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                                                <Icon size={20} strokeWidth={1.5} />
                                            </div>
                                            <span className="font-serif text-sm text-[#8F7746] sm:mt-2 sm:block">{facility.number}</span>
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                                <h3 className="font-serif text-xl text-[#20235A] sm:text-2xl">{facility.title}</h3>
                                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">{facility.eyebrow}</span>
                                            </div>
                                            <p className="mt-2 max-w-4xl text-sm leading-7 text-[#1E1917]/70">{facility.description}</p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CLOSING */}
                <section className="bg-[#20235A] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-14 lg:py-14 xl:px-20">
                    <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C] sm:text-xs">
                                Nehru School of Management
                            </p>
                            <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
                                Knowledge, practice and responsibility.
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                                Explore the MBA department and its academic and student
                                development opportunities.
                            </p>
                        </div>
                        <a href="#about-nsm" className="group inline-flex min-h-11 items-center justify-center gap-2 border border-[#D2B87C]/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]">
                            Back to About
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </section>
            </main>
            <Faq />
            <FooterSection />
        </>
    );
}


import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/DepartmentNavigation";
import {
    ArrowUpRight,
    BrainCircuit,
    Database,
    Network,
    Eye,
    Sparkles,
    Settings2,
    GraduationCap,
    Globe2,
    Award,
    MapPin,
    BriefcaseBusiness,
    HeartPulse,
    Landmark,
    Laptop,
} from "lucide-react";

const careerRoles = [
    {
        number: "01",
        icon: BrainCircuit,
        title: "AI / Machine Learning Engineer",
        description:
            " Designing and deploying models (e.g., recommendation engines for Netflix or fraud detection for banks).",
    },
    {
        number: "02",
        icon: Database,
        title: "Data Scientist",
        description:
            "Finding hidden patterns in massive data to help businesses make decisions.",
    },
    {
        number: "03",
        icon: Network,
        title: "NLP Engineer",
        description:
            "Working on Large Language Models (LLMs) like ChatGPT or voice assistants like Siri and Alexa.",
    },
    {
        number: "04",
        icon: Eye,
        title: "Computer Vision Engineer",
        description:
            " Developing tech for self-driving cars, facial recognition, or medical imaging.",
    },
    {
        number: "05",
        icon: Sparkles,
        title: "Prompt Engineer",
        description:
            "A newer, high-growth role focusing on optimizing inputs for Generative AI to get high-quality outputs.",
    },
    {
        number: "06",
        icon: Settings2,
        title: "MLOps Engineer",
        description:
            "Managing the infrastructure and life cycle of AI models to ensure they run smoothly in production.",
    },
];

const techHubs = [
    {
        number: "01",
        city: "Kochi",
        location: "Infopark / SmartCity",
        description:
            "Companies like Fingent, Deuglo, 2Base Technologies, and Aabasoft are heavily invested in AI services.",
    },
    {
        number: "02",
        city: "Thiruvananthapuram",
        location: "Technopark",
        description:
            "Home to giants like TCS, Infosys, and Oracle, along with AI-focused firms like Reizend and Teslatech.",
    },
    {
        number: "03",
        city: "Calicut",
        location: "Cyberpark",
        description:
            "Emerging as a hub for AI startups and edtech firms like Novox Edtech.",
    },
];

const industryAreas = [
    {
        icon: HeartPulse,
        title: "Health-Tech",
        description:
            "Kerala’s strong healthcare sector is increasingly using AI for diagnostic automation.",
    },
    {
        icon: Landmark,
        title: "Fin-Tech",
        description:
            "Local startups and banks are hiring for AI-driven risk assessment and customer support.",
    },
];

const studyPathways = [
    {
        icon: GraduationCap,
        title: "M.Tech / Ph.D. in India",
        description:
            "Institutions like IIT Palakkad and IIIT Kottayam offer excellent research facilities in AI.",
    },
    {
        icon: Globe2,
        title: "MS Abroad",
        description:
            "AI/ML skills are a Global Passport Germany, Canada, and the US have massive talent shortages in this field.",
    },
    {
        icon: Award,
        title: "Professional Certifications",
        description:
            "While your degree is the foundation, certifications from AWS (ML Specialty), Google (Professional ML Engineer), or TensorFlow carry significant weight with recruiters.",
    },
];

export default function CareerScopePage() {
    return (
        <>
            <SiteHeader />


            <main className="overflow-hidden bg-[#FAF7F2] [&_p]:text-justify">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#20235A] px-5 py-24 sm:px-10 lg:px-20 lg:py-32">

                    {/* DECORATIVE ELEMENTS */}
                    <div className="pointer-events-none absolute -right-32 -top-36 h-[450px] w-[450px] rounded-full border border-white/[0.07]" />
                    <div className="pointer-events-none absolute -right-16 -top-20 h-[320px] w-[320px] rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -bottom-48 left-[35%] h-[400px] w-[400px] rounded-full border border-white/[0.06]" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />
                            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                CSE (AI & ML) / Career Opportunities
                            </p>
                        </div>

                        <div className="max-w-4xl">
                            <h1 className="font-serif text-5xl font-normal leading-[1.12] tracking-tight text-[#FAF7F2] sm:text-6xl lg:text-7xl">
                                Shaping Careers in
                                <span className="mt-2 block font-serif italic text-[#D2B87C]">
                                    Artificial Intelligence
                                </span>
                                <span className="mt-1 block font-serif text-[#FAF7F2]">
                                    & Machine Learning
                                </span>
                            </h1>

                            <div className="mt-9 h-px w-24 bg-[#D2B87C]" />

                            <p className="mt-8 max-w-2xl font-sans text-sm font-normal leading-8 text-white/70 sm:text-base">
                                Explore a world of opportunities where computing,
                                intelligence and innovation come together. A
                                specialisation in Artificial Intelligence and
                                Machine Learning prepares graduates for emerging
                                careers across industries and research domains.
                            </p>

                            <a
                                href="#career-opportunities"
                                className="mt-10 inline-flex items-center gap-4 border border-[#D2B87C]/60 px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.16em] text-[#FAF7F2] transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Career Paths
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>

                        {/* HERO BOTTOM LABEL */}
                        <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-6">
                            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                                Computer Science & Engineering
                            </p>
                            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Artificial Intelligence & Machine Learning
                            </p>
                        </div>
                    </div>
                </section>

                <DepartmentNav />

                {/* INTRODUCTION */}
                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />
                                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    The Future of Computing
                                </p>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                A World of
                                <span className="block font-serif italic text-[#927B4D]">
                                    Possibilities
                                </span>
                            </h2>

                            <div className="mt-7 h-px w-16 bg-[#D2B87C]" />
                        </div>

                        <div className="space-y-5 font-sans text-sm font-normal leading-8 text-[#65636A] sm:text-base">
                            <p>
                                A B.Tech in CSE with a specialization in Artificial Intelligence and Machine Learning (AI&ML) is one of the most future-proof degrees you can hold in 2026. While being in a private college in Kerala might feel different from being at a Tier-1 national institute, the global demand for AI skills effectively levels the playing field for those who build a strong portfolio.
                            </p>

                            {/* <p>
                                For students, opportunities extend beyond
                                traditional software development. Building a
                                strong technical foundation, developing practical
                                projects and maintaining a continuous learning
                                mindset can help graduates pursue opportunities
                                across national and international technology
                                ecosystems.
                            </p> */}

                            <p>
                                The career scope of AI and ML now reaches across
                                software engineering, data science, automation,
                                research and intelligent product development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CAREER OPPORTUNITIES */}
                <section
                    id="career-opportunities"
                    className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-16 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />
                                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Career Opportunities
                                </p>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                Key Job Roles &
                                <span className="ml-2 font-serif italic text-[#927B4D]">
                                    Specialisations
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl font-sans text-sm leading-8 text-[#65636A] sm:text-base">
                                The scope of AI and ML extends far beyond
                                conventional coding, creating specialised roles
                                in intelligent systems, data, automation and
                                emerging technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
                            {careerRoles.map((role) => {
                                const Icon = role.icon;

                                return (
                                    <article
                                        key={role.number}
                                        className="group border-t border-[#20235A]/15 py-9 transition-colors duration-300 hover:border-[#927B4D]"
                                    >
                                        <div className="mb-8 flex items-center justify-between">
                                            <span className="font-serif text-2xl font-normal text-[#927B4D]">
                                                {role.number}
                                            </span>

                                            <Icon className="h-6 w-6 text-[#927B4D] transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.3} />
                                        </div>

                                        <h3 className="max-w-xs font-serif text-2xl font-normal leading-snug text-[#20235A]">
                                            {role.title}
                                        </h3>

                                        <p className="mt-4 font-sans text-sm leading-7 text-[#65636A]">
                                            {role.description}
                                        </p>

                                        <div className="mt-7 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* KERALA OPPORTUNITIES */}
                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Opportunities in Kerala
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                    Growing with
                                    <span className="ml-2 font-serif italic text-[#927B4D]">
                                        Kerala's Tech Ecosystem
                                    </span>
                                </h2>
                            </div>

                            <p className="font-sans text-sm leading-8 text-[#65636A] sm:text-base">
                                Kerala’s tech ecosystem is rapidly evolving, with several hubs actively hiring AI freshers:
                            </p>
                        </div>

                        {/* TECHNOLOGY HUBS */}
                        <div className="mb-20">
                            <div className="mb-8 flex items-center gap-4">
                                <MapPin className="h-5 w-5 text-[#927B4D]" strokeWidth={1.5} />
                                <h3 className="font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                    Major Technology Hubs
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {techHubs.map((hub) => (
                                    <article
                                        key={hub.number}
                                        className="relative border-t border-[#D2B87C] bg-[#F2EFE8] px-7 py-8 sm:px-8"
                                    >
                                        <span className="font-serif text-3xl font-normal text-[#927B4D]">
                                            {hub.number}
                                        </span>

                                        <h4 className="mt-6 font-serif text-2xl font-normal text-[#20235A]">
                                            {hub.city}
                                        </h4>

                                        <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            {hub.location}
                                        </p>

                                        <p className="mt-5 font-sans text-sm leading-7 text-[#65636A]">
                                            {hub.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* INDUSTRY VERTICALS */}
                        <div>
                            <div className="mb-8 flex items-center gap-4">
                                <BriefcaseBusiness className="h-5 w-5 text-[#927B4D]" strokeWidth={1.5} />
                                <h3 className="font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                    Industry Verticals in the State
                                </h3>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2">
                                {industryAreas.map((area) => {
                                    const Icon = area.icon;

                                    return (
                                        <article
                                            key={area.title}
                                            className="flex gap-6 border-l-2 border-[#D2B87C] py-3 pl-6 sm:pl-8"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                                <Icon className="h-6 w-6" strokeWidth={1.4} />
                                            </div>

                                            <div>
                                                <h4 className="font-serif text-2xl font-normal text-[#20235A]">
                                                    {area.title}
                                                </h4>

                                                <p className="mt-3 font-sans text-sm leading-7 text-[#65636A]">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SALARY INSIGHTS */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-10 lg:px-20 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Salary Insights
                                </p>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#FAF7F2] sm:text-5xl">
                                The Value of
                                <span className="mt-2 block font-serif italic text-[#D2B87C]">
                                    AI Expertise
                                </span>
                            </h2>
                        </div>

                        <div className="border-l border-white/20 pl-7 sm:pl-10">
                            <p className="font-sans text-sm leading-8 text-white/75 sm:text-base">
                                Salaries for AI&ML roles are typically 15-30% higher than traditional software engineering roles for the same experience level.

                            </p>

                            <p className="mt-5 font-sans text-xs leading-7 text-white/45">
                                Salary levels vary depending on technical
                                expertise, practical experience, organisation,
                                location and the specific role. The percentage
                                represents the supplied indicative trend,
                                not a guaranteed salary outcome.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HIGHER EDUCATION & RESEARCH */}
                <section className="bg-[#F2EFE8] px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-16 max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />
                                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Beyond Undergraduate Studies
                                </p>
                            </div>

                            <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                Higher Education
                                <span className="ml-2 font-serif italic text-[#927B4D]">
                                    & Research
                                </span>
                            </h2>

                            <p className="mt-6 font-sans text-sm leading-8 text-[#65636A] sm:text-base">
                                An undergraduate degree can be the beginning
                                of a deeper journey into advanced computing,
                                specialised research and global academic
                                opportunities.
                            </p>
                        </div>

                        <div className="grid gap-10 md:grid-cols-3">
                            {studyPathways.map((pathway, index) => {
                                const Icon = pathway.icon;

                                return (
                                    <article
                                        key={pathway.title}
                                        className="border-t border-[#20235A]/20 pt-8"
                                    >
                                        <div className="mb-7 flex items-center justify-between">
                                            <span className="font-serif text-3xl font-normal text-[#927B4D]">
                                                0{index + 1}
                                            </span>

                                            <Icon className="h-7 w-7 text-[#927B4D]" strokeWidth={1.3} />
                                        </div>

                                        <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                                            {pathway.title}
                                        </h3>

                                        <p className="mt-5 font-sans text-sm leading-7 text-[#65636A]">
                                            {pathway.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CLOSING SECTION */}
                {/* <section className="bg-[#FAF7F2] px-5 pb-24 pt-8 sm:px-10 lg:px-20 lg:pb-32">
                    <div className="mx-auto max-w-7xl border-t border-[#20235A]/15 pt-12">
                        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

                            <div className="max-w-3xl">
                                <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Build Your Future
                                </p>

                                <h2 className="font-serif text-4xl font-normal leading-tight text-[#20235A] sm:text-5xl">
                                    Learn. Explore.
                                    <span className="ml-2 font-serif italic text-[#927B4D]">
                                        Innovate.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl font-sans text-sm leading-8 text-[#65636A] sm:text-base">
                                    The future of Artificial Intelligence and
                                    Machine Learning belongs to those who
                                    continue learning, experimenting and
                                    creating meaningful solutions. Build your
                                    foundation, explore new technologies and
                                    prepare to contribute to a rapidly evolving
                                    digital world.
                                </p>
                            </div>

                            <div className="hidden h-24 w-24 items-center justify-center rounded-full border border-[#D2B87C] text-[#927B4D] md:flex">
                                <Laptop className="h-10 w-10" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </section> */}

            </main>

            <FooterSection />
        </>
    );
}

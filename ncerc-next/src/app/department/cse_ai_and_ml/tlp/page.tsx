
"use client";

import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    BrainCircuit,
    CalendarDays,
    CheckCircle2,
    ClipboardCheck,
    GraduationCap,
    Lightbulb,
    MessagesSquare,
    Microscope,
    RefreshCw,
    Users,
    Video,
    Target,
    Award,
    FileText,
    Handshake,
    TrendingUp,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
};

type DetailItemProps = {
    title: string;
    description: string;
};

type MethodItemProps = {
    title: string;
    description: string;
};

const pageNavigation = [
    { label: "Curriculum Planning", href: "#curriculum" },
    { label: "Teaching Methods", href: "#methodologies" },
    { label: "Assessment", href: "#assessment" },
    { label: "Student Support", href: "#student-support" },
    { label: "Continuous Improvement", href: "#improvement" },
];

const curriculumItems: DetailItemProps[] = [
    {
        title: "Definition of COs & POs",
        description:
            "Every course has 5–6 Course Outcomes (COs). These are mapped to the 12 Program Outcomes (POs) defined by the NBA and specific Program Specific Outcomes (PSOs) for AI & ML.",
    },
    {
        title: "Articulation Matrix",
        description:
            "A mapping table using Level 1 – Low, Level 2 – Medium, and Level 3 – High to show how a subject like Deep Learning contributes to becoming a professional engineer.",
    },
    {
        title: "Academic Calendar",
        description:
            "A strictly followed timeline for internal exams, assignment submissions, and remedial classes, published before the semester begins.",
    },
];

const innovativeMethods: MethodItemProps[] = [
    {
        title: "Project-Based Learning (PBL)",
        description:
            "Students build mini-projects in every semester, such as developing a chatbot in Semester 4.",
    },
    {
        title: "Case Studies",
        description:
            "Students analyse real-world AI failures and ethical considerations related to data privacy.",
    },
];

const participativeMethods: MethodItemProps[] = [
    {
        title: "Flipped Classroom",
        description:
            "Students watch a video on topics such as Neural Networks at home and solve complex architecture problems in the classroom.",
    },
    {
        title: "Think-Pair-Share",
        description:
            "Collaborative problem-solving activities are conducted during tutorial hours.",
    },
];

const assessmentItems: DetailItemProps[] = [
    {
        title: "Formative Assessment",
        description:
            "Continuous evaluation through quizzes, open-book tests, and surprise seminars.",
    },
    {
        title: "Summative Assessment",
        description:
            "Mid-term and End-semester examinations are designed using Bloom’s Taxonomy, ensuring questions test Analyse, Evaluate, and Create levels, not just Remember.",
    },
    {
        title: "Rubrics-Based Evaluation",
        description:
            "Clear and transparent rubrics are used for evaluating seminars, mini-projects, and laboratory work to eliminate bias.",
    },
];

const studentSupportItems = [
    {
        number: "01",
        title: "Identification of Learners",
        description:
            "Based on the first internal examination, students are categorized according to their learning needs.",
        icon: Target,
    },
    {
        number: "02",
        title: "Slow Learners",
        description:
            "Provided with remedial coaching, simplified question banks, and peer-to-peer mentoring.",
        icon: BookOpen,
    },
    {
        number: "03",
        title: "Advanced Learners",
        description:
            "Encouraged to take NPTEL/SWAYAM certifications, participate in national hackathons like SIH, or assist in faculty research papers.",
        icon: TrendingUp,
    },
    {
        number: "04",
        title: "Mentoring System (Proctoring)",
        description:
            "Each faculty member is assigned 15–20 students to provide academic and personal counselling, documented in a Mentoring Diary.",
        icon: Users,
    },
];

const improvementItems: DetailItemProps[] = [
    {
        title: "Course Exit Survey",
        description:
            "At the end of the semester, students provide feedback on whether they achieved the promised Course Outcomes (COs).",
    },
    {
        title: "Attainment Analysis",
        description:
            "If the target, such as 70% of students scoring above 60%, is not met, the department documents the Action Taken. For example, introducing more laboratory hours for the module in the following academic year.",
    },
    {
        title: "Stakeholder Feedback",
        description:
            "Regular meetings with parents, alumni, and industry experts help refine the syllabus.",
    },
];

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
                <span className="font-serif text-sm text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-9 bg-[#D2B87C]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="max-w-3xl font-serif text-3xl font-normal leading-snug text-[#20235A] sm:text-4xl lg:text-[42px]">
                {title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#6D6D6D]">
                {description}
            </p>
        </div>
    );
}

function DetailItem({
    title,
    description,
}: DetailItemProps) {
    return (
        <div className="group border-t border-[#20235A]/15 py-7 transition-colors duration-300 hover:border-[#D2B87C]">
            <div className="flex items-start gap-5">
                <span className="mt-1 text-[#927B4D]">
                    <ArrowUpRight size={17} strokeWidth={1.3} />
                </span>

                <div>
                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                        {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#707070]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MethodItem({
    title,
    description,
}: MethodItemProps) {
    return (
        <div className="border-l border-[#D2B87C] py-2 pl-6">
            <h4 className="font-serif text-lg font-normal text-[#20235A]">
                {title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-[#707070]">
                {description}
            </p>
        </div>
    );
}

export default function TeachingLearningProcessPage() {
    return (
        <>
            <SiteHeader />

            {/* HERO SECTION */} 
            <section className="relative overflow-hidden bg-[#20235A] px-5 pb-24 pt-32 sm:px-10 lg:px-20 lg:pb-28 lg:pt-40 [&_p]:text-justify">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.08]" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -bottom-40 left-[38%] h-[420px] w-[420px] rounded-full bg-[#D2B87C]/[0.06] blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D2B87C]">
                                    Academic Excellence
                                </span>
                            </div>

                            <h1 className="max-w-3xl font-serif text-4xl font-normal leading-[1.15] text-[#FAF7F2] sm:text-5xl lg:text-6xl">
                                Teaching & Learning
                                <span className="mt-2 block text-[#D2B87C]">
                                    Process
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                                A structured approach to outcome-based
                                education, innovative teaching practices,
                                student development, and continuous academic
                                improvement in Artificial Intelligence and
                                Machine Learning.
                            </p>
                        </div>

                        <div className="border-l border-white/15 pl-7 lg:mb-2">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/40 text-[#D2B87C]">
                                <BrainCircuit size={23} strokeWidth={1.3} />
                            </div>

                            <p className="font-serif text-2xl font-normal leading-relaxed text-[#FAF7F2]">
                                Learning with purpose.
                                <span className="block text-[#D2B87C]">
                                    Growing through innovation.
                                </span>
                            </p>

                            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">
                                Department of CSE (AI & ML)
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex items-center gap-3 border-t border-white/15 pt-7">
                        <GraduationCap
                            size={18}
                            className="text-[#D2B87C]"
                        />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                            Outcome-Based Education & Student Development
                        </span>
                    </div>
                </div>
            </section>

            <InnerHeader />

            {/* PAGE NAVIGATION */}
            <nav className="sticky top-0 z-30 border-b border-[#20235A]/10 bg-[#FAF7F2]/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-5 scrollbar-hide sm:px-10 lg:px-20">
                    {pageNavigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="shrink-0 text-[10px] uppercase tracking-[0.13em] text-[#686868] transition-colors hover:text-[#927B4D]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <main className="bg-[#FAF7F2] [&_p]:text-justify">

                {/* INTRODUCTION */}
                <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#927B4D]" />
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#927B4D]">
                                    Our Approach
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl font-normal leading-snug text-[#20235A] sm:text-4xl">
                                Building a
                                <span className="block text-[#927B4D]">
                                    Culture of Learning
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pt-8">
                            <p className="text-base leading-9 text-[#555]">
                                The Teaching Learning Process of the CSE
                                (Artificial Intelligence and Machine Learning)
                                department focuses on structured curriculum
                                planning, innovative instructional methods,
                                continuous assessment, and student-centred
                                academic support.
                            </p>

                            <p className="mt-5 text-sm leading-8 text-[#777]">
                                Through outcome-based education and continuous
                                improvement practices, the department aims to
                                create a meaningful learning environment that
                                supports academic growth and professional
                                development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 01 - CURRICULUM PLANNING */}
                <section
                    id="curriculum"
                    className="scroll-mt-24 bg-white px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <SectionHeading
                                    number="01"
                                    eyebrow="Foundation of Education"
                                    title="Curriculum Planning & OBE Framework"
                                    description="The foundation of NBA/NAAC compliance is ensuring every academic activity maps back to specific educational goals."
                                />

                                <div className="mt-10 flex items-center gap-4 border-t border-[#20235A]/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2EFE8] text-[#927B4D]">
                                        <Target size={22} strokeWidth={1.3} />
                                    </div>
                                    <div>
                                        <p className="font-serif text-lg text-[#20235A]">
                                            Outcome-Based Education
                                        </p>
                                        <p className="mt-1 text-xs text-[#888]">
                                            Goals, outcomes and academic
                                            alignment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-3">
                                {curriculumItems.map((item) => (
                                    <DetailItem
                                        key={item.title}
                                        {...item}
                                    />
                                ))}

                                <div className="mt-8 bg-[#F2EFE8] p-7 sm:p-9">
                                    <div className="flex items-start gap-4">
                                        <CalendarDays
                                            size={23}
                                            className="mt-1 shrink-0 text-[#927B4D]"
                                            strokeWidth={1.3}
                                        />
                                        <div>
                                            <p className="font-serif text-xl text-[#20235A]">
                                                Structured Academic Planning
                                            </p>
                                            <p className="mt-3 text-sm leading-7 text-[#6D6D6D]">
                                                Course outcomes, programme
                                                outcomes, mapping matrices, and
                                                academic calendars work
                                                together to provide a
                                                goal-oriented learning
                                                structure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02 - INNOVATIVE METHODOLOGIES */}
                <section
                    id="methodologies"
                    className="scroll-mt-24 px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Beyond Traditional Lectures"
                            title="Innovative Instructional Methodologies"
                            description="Standard lecturing is insufficient for NAAC 'A' Grade criteria. The department employs diverse teaching practices that encourage active participation, practical exploration, and collaborative learning."
                        />

                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                            {/* ICT ENABLED */}
                            <div className="border-t border-[#20235A]/15 pt-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Video size={21} strokeWidth={1.3} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                            Digital Learning
                                        </p>
                                        <h3 className="mt-1 font-serif text-2xl font-normal text-[#20235A]">
                                            ICT-Enabled Teaching
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <p className="text-sm leading-8 text-[#707070]">
                                        100% use of digital platforms such as
                                        Google Classroom and Moodle for
                                        sharing notes, recorded lectures, and
                                        virtual labs.
                                    </p>
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <span className="border border-[#20235A]/15 px-4 py-2 text-xs text-[#20235A]">
                                        Google Classroom
                                    </span>
                                    <span className="border border-[#20235A]/15 px-4 py-2 text-xs text-[#20235A]">
                                        Moodle
                                    </span>
                                    <span className="border border-[#20235A]/15 px-4 py-2 text-xs text-[#20235A]">
                                        Virtual Labs
                                    </span>
                                </div>
                            </div>

                            {/* EXPERIENTIAL LEARNING */}
                            <div className="border-t border-[#20235A]/15 pt-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Microscope size={21} strokeWidth={1.3} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                            Practical Exploration
                                        </p>
                                        <h3 className="mt-1 font-serif text-2xl font-normal text-[#20235A]">
                                            Experiential Learning
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-7">
                                    {innovativeMethods.map((item) => (
                                        <MethodItem
                                            key={item.title}
                                            {...item}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* PARTICIPATIVE LEARNING */}
                            <div className="border-t border-[#20235A]/15 pt-7 lg:col-span-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                        <MessagesSquare
                                            size={21}
                                            strokeWidth={1.3}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                            Active Engagement
                                        </p>
                                        <h3 className="mt-1 font-serif text-2xl font-normal text-[#20235A]">
                                            Participative Learning
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                                    {participativeMethods.map((item) => (
                                        <MethodItem
                                            key={item.title}
                                            {...item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03 - ASSESSMENT */}
                <section
                    id="assessment"
                    className="scroll-mt-24 bg-[#20235A] px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="font-serif text-sm text-[#D2B87C]">
                                        03
                                    </span>
                                    <span className="h-px w-9 bg-[#D2B87C]" />
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Measuring Progress
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl font-normal leading-snug text-[#FAF7F2] sm:text-4xl">
                                    Assessment &
                                    <span className="block text-[#D2B87C]">
                                        Evaluation
                                    </span>
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-white/60">
                                    A structured evaluation process combines
                                    continuous assessment, semester
                                    examinations, and transparent evaluation
                                    practices to monitor student learning.
                                </p>

                                <div className="mt-10 border-t border-white/15 pt-7">
                                    <ClipboardCheck
                                        size={30}
                                        strokeWidth={1.2}
                                        className="text-[#D2B87C]"
                                    />
                                    <p className="mt-5 font-serif text-xl text-[#FAF7F2]">
                                        Learning through assessment.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:pt-2">
                                {assessmentItems.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="border-t border-white/15 py-7"
                                    >
                                        <div className="flex items-start gap-5">
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                0{index + 1}
                                            </span>

                                            <div>
                                                <h3 className="font-serif text-xl font-normal text-[#FAF7F2]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-3 text-sm leading-7 text-white/60">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-6 border border-[#D2B87C]/30 bg-white/[0.04] p-7">
                                    <div className="flex items-start gap-4">
                                        <Award
                                            size={24}
                                            className="mt-1 shrink-0 text-[#D2B87C]"
                                            strokeWidth={1.3}
                                        />
                                        <div>
                                            <p className="font-serif text-lg text-[#FAF7F2]">
                                                Bloom’s Taxonomy
                                            </p>
                                            <p className="mt-2 text-sm leading-7 text-white/60">
                                                Assessment questions extend
                                                beyond Remember to include
                                                Analyse, Evaluate, and Create
                                                levels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04 - STUDENT SUPPORT */}
                <section
                    id="student-support"
                    className="scroll-mt-24 px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Inclusive Academic Environment"
                            title="Support Systems for Student Diversity"
                            description="NAAC focuses heavily on how a department handles different learning speeds. The department adopts a structured approach to identify and support students according to their individual learning needs."
                        />

                        <div className="relative mt-16">
                            <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-[#D2B87C]/60 sm:block" />

                            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                                {studentSupportItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.number}
                                            className="relative"
                                        >
                                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C] bg-[#FAF7F2] text-[#927B4D]">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.3}
                                                />
                                            </div>

                                            <div className="mt-7">
                                                <span className="font-serif text-sm text-[#927B4D]">
                                                    {item.number}
                                                </span>

                                                <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-[#20235A]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-4 text-sm leading-7 text-[#777]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* MENTORING HIGHLIGHT */}
                        <div className="mt-20 grid gap-8 bg-[#F2EFE8] p-8 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:p-12">
                            <div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                                    <Handshake
                                        size={25}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                    Personal Guidance
                                </p>

                                <h3 className="mt-2 font-serif text-2xl font-normal text-[#20235A]">
                                    Faculty Mentoring
                                </h3>
                            </div>

                            <div className="lg:border-l lg:border-[#20235A]/15 lg:pl-10">
                                <p className="text-sm leading-8 text-[#666]">
                                    Each faculty member is assigned 15–20
                                    students to provide academic and personal
                                    counselling. The mentoring process is
                                    documented in a Mentoring Diary.
                                </p>

                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <span className="border border-[#20235A]/15 bg-white px-4 py-3 text-xs text-[#20235A]">
                                        15–20 Students per Faculty
                                    </span>
                                    <span className="border border-[#20235A]/15 bg-white px-4 py-3 text-xs text-[#20235A]">
                                        Academic Guidance
                                    </span>
                                    <span className="border border-[#20235A]/15 bg-white px-4 py-3 text-xs text-[#20235A]">
                                        Mentoring Diary
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05 - CONTINUOUS IMPROVEMENT */}
                <section
                    id="improvement"
                    className="scroll-mt-24 bg-white px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <SectionHeading
                                    number="05"
                                    eyebrow="Closing the Loop"
                                    title="Continuous Internal Improvement"
                                    description="This is the 'Closing the Loop' phase required by the NBA. Feedback and attainment analysis help identify areas that need improvement in the teaching-learning process."
                                />

                                <div className="mt-10 flex items-center gap-4 border-t border-[#20235A]/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2EFE8] text-[#927B4D]">
                                        <RefreshCw
                                            size={21}
                                            strokeWidth={1.3}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif text-lg text-[#20235A]">
                                            Continuous Improvement Cycle
                                        </p>
                                        <p className="mt-1 text-xs text-[#888]">
                                            Feedback, analysis and action
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-3">
                                {improvementItems.map((item) => (
                                    <DetailItem
                                        key={item.title}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* IMPROVEMENT CYCLE */}
                        <div className="mt-20 border-t border-[#20235A]/10 pt-12">
                            <div className="mb-10 text-center">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#927B4D]">
                                    The Improvement Cycle
                                </p>
                                <h3 className="mt-3 font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                    From Feedback to Action
                                </h3>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        title: "Feedback",
                                        description:
                                            "Collect student and stakeholder feedback.",
                                        icon: MessagesSquare,
                                    },
                                    {
                                        title: "Analysis",
                                        description:
                                            "Review course outcome attainment and identify gaps.",
                                        icon: FileText,
                                    },
                                    {
                                        title: "Action Taken",
                                        description:
                                            "Document the measures taken to address identified gaps.",
                                        icon: CheckCircle2,
                                    },
                                    {
                                        title: "Improvement",
                                        description:
                                            "Use the findings to refine future academic practices.",
                                        icon: TrendingUp,
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="relative border border-[#20235A]/10 p-6 transition-colors duration-300 hover:border-[#D2B87C]"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-serif text-sm text-[#927B4D]">
                                                    0{index + 1}
                                                </span>
                                                <Icon
                                                    size={21}
                                                    strokeWidth={1.3}
                                                    className="text-[#927B4D]"
                                                />
                                            </div>

                                            <h4 className="mt-7 font-serif text-xl text-[#20235A]">
                                                {item.title}
                                            </h4>

                                            <p className="mt-3 text-sm leading-7 text-[#777]">
                                                {item.description}
                                            </p>

                                            {index !== 3 && (
                                                <ArrowUpRight
                                                    size={17}
                                                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-[#FAF7F2] text-[#927B4D] lg:block"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

             
              
            </main>

            <FooterSection />
        </>
    );
}

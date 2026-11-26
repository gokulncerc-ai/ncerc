
"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    FileText,
    ExternalLink,
    Atom,
    Brain,
    Network,
    Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../mcanavigation/mcanavigation";

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Mining",
    "Cloud Computing",
];

const areasOfInterest = [
    "Programming",
    "Artificial Intelligence",
    "Data Mining",
    "Software Engineering",
    "Web & Mobile Application Development",
    "Mobile",
    "Academic Automation Systems",
    "Outcome-Based Education",
    "Curriculum Design",
    "Student Project Guidance",
    "Technology-enabled Teaching & Learning",
];

const courses = `
1|2026|MCA|S4|(24-26 Batch)|Main Project
2|2026|MCA|S4|(24-26 Batch)|Seminar
3|2026|MCA|S2|(25-27 Batch)|Advanced DBMS Lab
4|2026|MCA|S2|(25-27 Batch)|AOS
5|2026|MCA|S3|(25-27 Batch)|Cyber Laws and Forensic
6|2026|MCA|S3|(25-27 Batch)|Mobile Application Development Lab
7|2026|MCA|S1|(26-28 Batch)|Advanced Software Engineering
8|2026|MCA|S1|(26-28 Batch)|Web Programming Lab
9|2026|B.Pharm|S2||Computer Applications in Pharmacy
10|2025|MCA|S4|(23-25 Batch)|Main Project
11|2025|MCA|S4|(23-25 Batch)|Seminar
12|2025|MCA|S2|(24-26 Batch)|Advanced DBMS Lab
13|2025|MCA|S2|(24-26 Batch)|AOS
14|2025|MCA|S3|(24-26 Batch)|Cyber Laws and Forensic
15|2025|MCA|S3|(24-26 Batch)|Mobile Application Development Lab
16|2025|MCA|S1|(25-27 Batch)|Advanced Software Engineering
17|2025|MCA|S1|(25-27 Batch)|Web Programming Lab
18|2025|B.Pharm|S2||Computer Applications in Pharmacy
19|2025|B.Sc Nursing|S2|(25-29 Batch)|Computer Applications in Nursing
20|2024|MCA|S4|(22-24 Batch)|Main Project
21|2024|MCA|S4|(22-24 Batch)|Seminar
22|2024|MCA|S2|(23-25 Batch)|Advanced DBMS Lab
23|2024|MCA|S2|(23-25 Batch)|AOS
24|2024|MCA|S3|(23-25 Batch)|Social Network Analysis
25|2024|MCA|S3|(23-25 Batch)|Mobile Application Development Lab
26|2024|MCA|S1|(24-26 Batch)|Advanced Software Engineering
27|2024|MCA|S1|(24-26 Batch)|Web Programming Lab
28|2024|B.Pharm|S2||Computer Applications in Pharmacy
29|2023|MCA|S4|(21-23 Batch)|Main Project
30|2023|MCA|S4|(21-23 Batch)|Seminar
31|2023|MCA|S2|(22-24 Batch)|Advanced DBMS Lab
32|2023|MCA|S2|(22-24 Batch)|AOS
33|2023|MCA|S3|(22-24 Batch)|Social Network Analysis
34|2023|MCA|S3|(22-24 Batch)|Mobile Application Development Lab
35|2023|MCA|S1|(23-25 Batch)|Advanced Software Engineering
36|2023|MCA|S1|(23-25 Batch)|Web Programming Lab
37|2023|B.Pharm|S2||Computer Applications in Pharmacy
38|2022|MCA|S4|(20-22 Batch)|Main Project
39|2022|MCA|S4|(20-22 Batch)|Seminar
40|2022|MCA|S6|(19-22 Batch)|Main Project
41|2022|MCA|S2|(21-23 Batch)|Advanced DBMS Lab
42|2022|MCA|S2|(21-23 Batch)|AOS
43|2022|MCA|S3|(21-23 Batch)|Social Network Analysis
44|2022|B.Sc Nursing|S2|(22-26 Batch)|Computer Applications in Nursing
45|2022|MCA|S1|(22-24 Batch)|Advanced Software Engineering
46|2022|MCA|S1|(22-24 Batch)|Web Programming Lab
47|2022|B.Pharm|S2||Computer Applications in Pharmacy
48|2021|MCA|S6|(18-21 Batch)|Main Project
49|2021|MCA|S4|(19-22 Batch)|Mobile Computing
50|2021|MCA|S4|(19-22 Batch)|Mobile Application Development Lab
51|2021|MCA|S5|(19-22 Batch)|Social Network Analysis
52|2021|MCA|S5|(19-22 Batch)|Seminar
53|2021|MCA|S2|(20-22 Batch)|Advanced DBMS Lab
54|2021|MCA|S2|(20-22 Batch)|AOS
55|2021|MCA|S3|(20-22 Batch)|Social Network Analysis
56|2021|MCA|S3|(20-22 Batch)|Mobile Application Development Lab
57|2021|MCA|S1|(21-23 Batch)|Advanced Software Engineering
58|2021|MCA|S1|(21-23 Batch)|Web Programming Lab
59|2021|B.Pharm|S2||Computer Applications in Pharmacy
60|2020|MCA|S6|(17-20 Batch)|Main Project
61|2020|MCA|S4|(18-21 Batch)|Mobile Computing
62|2020|MCA|S4|(18-21 Batch)|Mobile Application Development Lab
63|2020|MCA|S5|(18-21 Batch)|E-Commerce
64|2020|MCA|S5|(18-21 Batch)|Seminar
65|2020|MCA|S1|(20-22 Batch)|Advanced Software Engineering
66|2020|MCA|S1|(20-22 Batch)|Web Programming Lab
67|2020|MCA|S2|(19-22 Batch)|Object Oriented Programming
68|2020|MCA|S2|(19-22 Batch)|Object Oriented Programming Lab
69|2020|MCA|S3|(19-22 Batch)|AOS
70|2020|MCA|S3|(19-22 Batch)|Web Programming Lab
71|2020|B.Pharm|S2||Computer Applications in Pharmacy
72|2019|MCA|S6|(16-19 Batch)|Main Project
73|2019|MCA|S4|(17-20 Batch)|Mobile Computing
74|2019|MCA|S4|(17-20 Batch)|Mobile Application Development Lab
75|2019|B.Sc Nursing|S2|(19-23 Batch)|Computer Applications in Nursing
76|2019|MCA|S5|(17-20 Batch)|Seminar
77|2019|MCA|S1|(19-22 Batch)|Problem Solving and Computer Programming
78|2019|MCA|S1|(19-22 Batch)|Programming Lab
79|2019|MCA|S1|(19-22 Batch)|Applied Statistics Lab
80|2019|MCA|S2|(18-21 Batch)|Object Oriented Programming
81|2019|MCA|S2|(18-21 Batch)|Object Oriented Programming Lab
82|2019|MCA|S3|(18-21 Batch)|AOS
83|2019|MCA|S3|(18-21 Batch)|Web Programming Lab
84|2019|B.Pharm|S2||Computer Applications in Pharmacy
85|2018|MCA|S6|(15-18 Batch)|Main Project
86|2018|MCA|S4|(16-19 Batch)|Mobile Computing
87|2018|B.Sc Nursing|S2|(18-22 Batch)|Computer Applications in Nursing
88|2018|MCA|S5|(16-19 Batch)|SOCIAL NETWORK ANALYSIS
89|2018|MCA|S5|(16-19 Batch)|Seminar
90|2018|MCA|S1|(18-21 Batch)|Problem Solving and Computer Programming
91|2018|MCA|S1|(18-21 Batch)|Programming Lab
92|2018|MCA|S1|(18-21 Batch)|Applied Statistics Lab
93|2018|MCA|S2|(17-20 Batch)|Object Oriented Programming
94|2018|MCA|S2|(17-20 Batch)|Object Oriented Programming Lab
95|2018|MCA|S3|(17-20 Batch)|AOS
96|2018|MCA|S3|(17-20 Batch)|Web Programming Lab
97|2018|B.Pharm|S2||Computer Applications in Pharmacy
98|2017|MCA|S6|(14-17 Batch)|Main Project
99|2017|MCA|S4|(15-18 Batch)|Web Programming
100|2017|MCA|S5|(15-18 Batch)|Mobile Computing
101|2017|MCA|S5|(15-18 Batch)|Android Programming
102|2017|MCA|S2|(16-19 Batch)|Object Oriented Programming
103|2017|MCA|S2|(16-19 Batch)|Object Oriented Programming Lab
104|2017|MCA|S3|(16-19 Batch)|AOS
105|2017|MCA|S3|(16-19 Batch)|Web Programming
106|2017|MCA|S1|(17-20 Batch)|Problem Solving and Computer Programming
107|2017|MCA|S1|(17-20 Batch)|Programming Lab
108|2017|MCA|S1|(17-20 Batch)|Applied Statistics Lab
109|2017|B.Pharm|S2||Computer Applications in Pharmacy
110|2017|MBA|S3||Enterprise Resource Planning
112|2016|MCA|S3|(14-17 Batch)|AOS
113|2016|MCA|S3|(15-18 Batch)|Advanced Software Engineering
114|2016|MCA|S2|(15-18 Batch)|Data Structures
115|2016|MCA|S2|(15-18 Batch)|Data Structures Lab
116|2016|MCA|S4|(14-17 Batch)|Web Programming
117|2016|MCA|S5|(14-17 Batch)|Mobile Computing
118|2016|MCA|S5|(14-17 Batch)|Android Programming
119|2016|MCA|S6|(13-16 Batch)|Main Project
120|2016|MCA|S1|(16-19 Batch)|Problem Solving and Computer Programming
121|2016|MCA|S1|(16-19 Batch)|Programming Lab
122|2016|MCA|S1|(16-19 Batch)|Applied Statistics Lab
123|2015|MCA|S3|(14-17 Batch)|Core Java
124|2015|MCA|S1|(15-18 Batch)|Computer Programming
125|2015|MCA|S1|(15-18 Batch)|Programming Lab
`.trim().split("\n").map((row) => row.split("|"));

const publications = [
    {
        year: "2026",
        items: [
            "DATA- DRIVEN HEALTHCARE: THE ROLE OF ARTIFICIAL INTELLIGENCE IN PRECISION MEDICINE",
            "HYBRID ADAPTIVE ISLAND BASED OPTIMIZATION FRAMEWORK FOR REAL TIME PHYSISC SIMULATION",
            "FULLY HOMOMORPHIC ENCRYPTION FOR SECURE CLOUD COMPUTATION",
            "REAL-TIME DATA ANALYTICS FOR SUPPLY CHAIN OPTIMIZATION: A FRAMEWORK FOR RESILIENT AND PROACTIVE LOGISTICS",
            "AN AI-DRIVEN FRAMEWORK FOR PERSONALIZED CAREER GUIDANCE SYSTEMS",
            "A COMPREHENSIVE STUDY OF AI-DRIVEN AUTONOMOUS VEHICLE TECHNOLOGIES",
            "IoT-BASED REMOTE PATIENT MONITORING SYSTEM: AN ARCHITECTURAL ANALYSIS AND PERFORMANCE EVALUATION FOR NEXT-GENERATION HEALTHCARE",
            "CYBERSECURITY IN THE AGE OF AI-DRIVEN ATTACKS",
        ],
    },
    {
        year: "2025",
        items: [
            "ENHANCING STUDENT LEARNING OUTCOMES THROUGH ICT: A GRU-BASED PREDICTION MODEL WITH SELF-ATTENTION MECHANISM",
            "EVALUATING LOCAL-GLOBAL LANDSLIDE FEATURES COMBINING CNN AND TRANSFORMER FOR LANDSLIDE SUSCEPTIBILITY MAPPING",
            "ANALYZING EMBEDDED SYSTEM SECURITY: EXPLOITING WEAKNESSES AND IMPLEMENTING ROBUST DEFENSES",
            "NEURALINK: A REVOLUTIONARY BRAIN-MACHINE INTERFACE FOR HUMAN-MACHINE SYMBIOSIS",
            "STOCK PRICE PREDICTION USING MACHINE LEARNING",
            "AN ADVANCED APPROACH TO CROWD COUNTING USING DEEP LEARNING",
            "SMART GREEN HOUSE IoT FRAMEWORK FOR SUSTAINABLE AGRICULTURE",
            "AI AND CYBERSECURITY:ENHANCING THREAT DETECTION AND RESPONSE WITH MACHINE LEARNING",
        ],
    },
    {
        year: "2024",
        items: [
            "THE CONVERGENCE OF DEEP LEARNING AND ICT: REVOLUTIONIZING STUDENT PERFORMANCE PREDICTION",
            "TRANSFORMING EDUCATION : THE IMPACT OF ICT AND DATA MINING ON STUDENT OUTCOMES",
            "PHISHING ATTACK",
            "EYE GAZE COMMUNICATION SYSTEMS",
            "ARTIFICIAL INTELLIGENCE AND DEEP LEARNING FOR WEAPON IDENTIFICATION IN SECURITY SYSTEMS",
            "VOICE-ACTIVATED E-COMMERCE: REVOLUTIONIZING SHOPPING EXPERIENCES WITH PERSONALIZATION AND SEAMLESS INTEGRATION",
            "ENHANCING INTELLIGENCE OPERATIONS: EXPLORING SOCIAL MEDIA INTELLIGENCE (SOCMINT) RED TEAMING STRATEGIES AND CHALLENGES",
            "ENHANCING USER EXPERIENCE: USER INTERFACE(UI) AND USER EXPERIENCE(UX) IN AUGMENTED REALITY",
            "SPAM IDENTIFICATION IN CLOUD COMPUTING USING TEXT FILTERING",
            "CRYPTO WATERMARKING IN MULTIMEDIA TRANSMISSION",
            "SECURING E-COMMERCE: AI-POWERED FRAUD DETECTION AND PREVENTION",
        ],
    },
    {
        year: "2023",
        items: [
            "THE INVOLVEMENT OF MOBILE LEARNING AND DIGITAL CONTENT PLATFORMS IN EDUCATIONAL DOMAIN",
            "AN OVERVIEW ON MARINE DEBRIS CLASSIFICATION",
            "NICE: NETWORK INTRUSION DETECTION AND COUNTERMEASURE SELECTION IN VIRTUAL NETWORK SYSTEMS",
            "SILENT SOUND TECHNOLOGY: A REMEDY FOR DISRUPTIVE COMMUNICATION",
            "HUMAN COMPUTER INTERACTION AND ITS FUTURE SCOPE",
            "ARTIFICIAL INTELLIGENCE APPLICATIONS FOR MOBILE VR",
            "FUTURE SCOPE OF AUGMENTED REALITY IN EDUCATION",
            "ICT IN HEALTHCARE UNITS WILL HELP US TO DETCT THE EARLY DETECTION AND PREDICTION OF VARIOUS DAILY LIFE DISEASES THAT WILL AFFECT HEALTH",
            "THE ANALYSIS ABOUT THE INVOLVEMENT OF ICT IN EDUCATION TO ENHANCE STUDENTS LEARNING CAPABILITY",
        ],
    },
    {
        year: "2022",
        items: [
            "GIANT GENOMIC STORING SERVICE",
            "A REVIEW OF INTERACTIVE MEDICAL IMAGE SEGMENTATION USING DEEP LEARNING TECHNIQUES",
            "CROSS SITE SCRIPTING(XSS) THE SECURITY VULNERABILITY AND PREVENTIVE MEASURES",
            "A COMMUNICATION BETWEEN HUMAN BODIES USING REDTACTON TECHNOLOGY IN HUMAN AREA NETWORKING",
            "CHALLENGES THAT NEED TO FACED BY IOT DEVICE WHILE IMPLIMENTING 5G",
            "ROBOTIC PROCESS AUTOMATION",
            "MODELING AND CONTROLLING FRACTAL ROBOT USING L-STREAM ALGORITHM",
            "SECURE CLOUD STORAGE USING DIFFERENT ALGORITHMS IN CRYPTOGRAPHY",
            "COMPUTER FORENSIC IN IMAGE STEGANOGRAPHY",
        ],
    },
    {
        year: "2021",
        items: [
            "ROLE OF SOCIO-INFORMATICS PARTICIPATION IN THE COVID-19 STUDY: HIGHLIGHTING HEALTHCARE ARENAS TO BENEFIT FROM INFORMATION AND COMMUNICATION TECHNOLOGY",
        ],
    },
];

const books = [
    [
        "01",
        "2022",
        "10/11/2022",
        "SOCIAL NETWORK ANALYSIS",
        "NCERC Publication Division",
        "First Edition",
        "968-81-954546-9-2",
    ],
    [
        "02",
        "2023",
        "11/11/2023",
        "NURSING INFORMATIVE",
        "NCERC Publication Division",
        "First Edition",
        "968-81-966348-9-7",
    ],
];

const certificates = [
    ["01", "Android Programming", "Google Cloud"],
    ["02", "Technical Support Fundamentals", "Google"],
    ["03", "Building Web Applications in PHP", "University of Colorado"],
    ["04", "Fundamentals of Cloud Computing", "University of Colorado"],
    ["05", "Introduction to Virtual Reality", "University of London"],
    ["06", "System Administration and Networking", "CISCO"],
    ["07", "Adobe Academic Essentials", "Adobe"],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
    { id: "certificates", label: "Certificates" },
    { id: "researcher-profiles", label: "Researcher Profiles" },
];

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

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
                <span className="text-[11px] font-medium tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>
                <span className="h-px w-8 bg-[#D2B87C]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
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

function DetailItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>
            <p className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </p>
        </div>
    );
}

function DataTable({
    headers,
    rows,
    emptyMessage,
}: {
    headers: string[];
    rows: string[][];
    emptyMessage?: string;
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-[9px] font-medium uppercase tracking-[0.13em] text-[#E5D4A9]"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.length > 0 ? (
                            rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`border-b border-[#EEE9E0] last:border-b-0 ${rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF8F4]"
                                        }`}
                                >
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className={`px-4 py-4 text-xs leading-6 text-[#55535B] ${cellIndex === 0
                                                ? "text-[#927B4D]"
                                                : ""
                                                }`}
                                        >
                                            {cell || "—"}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={headers.length}
                                    className="px-5 py-10 text-center text-sm leading-7 text-[#77747A]"
                                >
                                    {emptyMessage ||
                                        "No details have been provided."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* -------------------------------------------------------
   PUBLICATION LIST
------------------------------------------------------- */

function PublicationList({
    year,
    items,
}: {
    year: string;
    items: string[];
}) {
    return (
        <div className="mb-12 last:mb-0">
            <div className="mb-5 flex items-center gap-4">
                <h3 className="font-serif text-2xl font-normal text-[#20235A]">
                    {year}
                </h3>
                <span className="h-px flex-1 bg-[#D2B87C]" />
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                    {items.length} Publications
                </span>
            </div>

            <div className="border border-[#E6DFD3] bg-white">
                {items.map((publication, index) => (
                    <article
                        key={publication}
                        className={`grid gap-4 p-5 sm:grid-cols-[38px_1fr] sm:gap-5 sm:p-6 ${index !== items.length - 1
                            ? "border-b border-[#EEE9E0]"
                            : ""
                            }`}
                    >
                        <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                            <FileText size={17} strokeWidth={1.5} />
                        </div>

                        <div>
                            <h4 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                                {publication}
                            </h4>
                            <p className="mt-3 text-xs leading-6 text-[#69666B] sm:text-sm">
                                {year === "2023" &&
                                    publication.startsWith(
                                        "THE ANALYSIS ABOUT"
                                    )
                                    ? "Proceedings of the International Conference."
                                    : "Conference / journal details were not provided in the supplied faculty information."}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function DrPramodKFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* PROFILE HERO */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Computer Applications
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Dr. Pramod K
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Associate Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["PhD", "MCA"].map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 2202
                                </span>
                            </div>
                        </div>

                        {/* ACADEMIC PROFILE PANEL */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="mt-5 space-y-5">
                                <div className="flex items-center gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Qualifications
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            PhD, MCA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Research Focus
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            AI, Machine Learning & Data Mining
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Brain
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Professional Experience
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            22+ Years Combined Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Experience
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            20 Years Teaching · 2 Years IT
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <DepartmentNavigation />

                {/* PROFILE NAVIGATION */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {profileSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="shrink-0 text-[9px] font-medium uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Dr. Pramod K"
                                description="Academic background, teaching philosophy and institutional contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    I am dedicated to delivering quality education and integrating practical knowledge with academic learning to prepare students for industry challenges. I am a highly experienced academician and professional with over 22 years of combined experience, including 2 years in the IT industry and 20 years in teaching. I am consistently demonstrated excellence in delivering quality education, mentoring students, and contributing to academic development in the field of computer applications.
                                </p>

                                <p>
                                    My communication skills enable me to effectively engage learners at both college and school levels through interactive teaching, programming sessions, workshops, and motivational activities. Successfully completed certifications from Google and leading international universities, enhancing my global perspective and professional skills.

                                </p>

                                <p>
                                    My academic contributions extend beyond classroom teaching. Beyond classroom teaching, I am actively mentors students, guides academic projects, and contributes to their overall professional development. I regularly present innovative ideas at conferences and academic forums.

                                </p>

                                <p>
                                    In addition to teaching and research, I have consistently contributed to institutional development through various academic and administrative responsibilities. I am Working as Deputy Controller (Autonomous Exam Cell) for the past 2 years. My other responsibilities include Department IQAC Coordinator, Department Magazine Chief Editor, Department Industry Interaction Coordinator,  BoS Member, Handled various Criteria in NBA & NAAC, Alumni Association NCERC Secretary, and handling sessions for engineering and pharmacy streams also.
                                </p>

                                <p>
                                    Through these roles, I continue to support academic planning, examination coordination, accreditation activities, student placement support, alumni engagement, and institutional quality enhancement processes. My professional mission is to contribute meaningfully to student development, academic excellence, research advancement, and institutional growth through commitment, innovation, and teamwork.

                                </p>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Professional Details
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                        Faculty Information
                                    </p>
                                </div>
                            </div>

                            <DetailItem
                                label="Designation"
                                value="Associate Professor"
                            />
                            <DetailItem
                                label="Department"
                                value="Computer Applications"
                            />
                            <DetailItem
                                label="Qualification"
                                value="PhD, MCA"
                            />
                            <DetailItem
                                label="Total Experience"
                                value="22+ Years"
                            />
                            <DetailItem
                                label="Teaching Experience"
                                value="20 Years"
                            />
                            <DetailItem
                                label="IT Industry Experience"
                                value="2 Years"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="2202"
                            />
                        </aside>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Award,
                                title: "Deputy Controller",
                                text: "Autonomous Examination Cell — 2 years",
                            },
                            {
                                icon: GraduationCap,
                                title: "Department IQAC Coordinator",
                                text: "Supporting institutional quality enhancement and academic processes",
                            },
                            {
                                icon: BookOpen,
                                title: "Magazine Chief Editor",
                                text: "Department Magazine Chief Editor",
                            },
                            {
                                icon: Network,
                                title: "Industry Interaction",
                                text: "Department Industry Interaction Coordinator",
                            },
                            {
                                icon: Award,
                                title: "NBA & NAAC",
                                text: "Handled various accreditation criteria",
                            },
                            {
                                icon: UserRound,
                                title: "Alumni Association",
                                text: "NCERC Alumni Association Secretary",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="border border-[#E6DFD3] bg-white p-6"
                                >
                                    <Icon
                                        size={19}
                                        className="mb-4 text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* RESEARCH SECTION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research focus and areas of specialisation in intelligent systems, computing technologies and academic applications."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Primary Research Domain
                                    </p>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                    Artificial Intelligence, Machine Learning
                                    and Data Mining
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    The primary research interests lie in
                                    Artificial Intelligence, Machine
                                    Learning, Data Mining and Cloud
                                    Computing, exploring their applications
                                    in computing and emerging technologies.
                                </p>

                                <div className="mt-7">
                                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Interests
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {researchInterests.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[#E6DFD3] bg-[#FAF7F2] px-3 py-2 text-xs text-[#55535B]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Areas of Interest
                                    </p>
                                </div>

                                <div className="mt-6 space-y-0">
                                    {areasOfInterest.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border-b border-[#E6DFD3] py-3.5 last:border-b-0"
                                        >
                                            <span className="pt-0.5 text-[10px] tracking-wider text-[#927B4D]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* KEYWORDS */}
                        <div className="mt-10 border-t border-[#EAE4D9] pt-7">
                            <div className="mb-4 flex items-center gap-3">
                                <Network
                                    size={17}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Research Keywords
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-x-7 gap-y-3">
                                {[
                                    "Artificial Intelligence",
                                    "Machine Learning",
                                    "Data Mining",
                                    "Cloud Computing",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 bg-[#D2B87C]" />
                                        <span className="text-sm text-[#55535B]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* COURSES SECTION */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses, practical subjects and project guidance handled across MCA and other academic programmes."
                        />

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs text-[#77747A]">
                                Academic years 2015–2026
                            </p>
                            <span className="border border-[#D2B87C] px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                {courses.length} Course Entries
                            </span>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Stream",
                                "Semester",
                                "Batch",
                                "Subject",
                            ]}
                            rows={courses}
                        />
                    </div>
                </section>

                {/* PUBLICATIONS SECTION */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Publications – Conference / Journal Details"
                            description="Research papers and academic contributions grouped by publication year."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                            {publications.map((group) => (
                                <div
                                    key={group.year}
                                    className="border border-[#E6DFD3] bg-[#FAF7F2] p-5"
                                >
                                    <p className="font-serif text-3xl font-normal text-[#20235A]">
                                        {String(group.items.length).padStart(
                                            2,
                                            "0"
                                        )}
                                    </p>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                        Publications · {group.year}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {publications.map((group) => (
                            <PublicationList
                                key={group.year}
                                year={group.year}
                                items={group.items}
                            />
                        ))}
                    </div>
                </section>

                {/* BOOKS SECTION */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Academic Writing"
                            title="Books Published"
                            description="Books published through the NCERC Publication Division."
                        />

                        <div className="mb-7 grid gap-5 md:grid-cols-2">
                            {[
                                {
                                    number: "01",
                                    year: "2022",
                                    title: "SOCIAL NETWORK ANALYSIS",
                                    date: "10/11/2022",
                                    isbn: "968-81-954546-9-2",
                                },
                                {
                                    number: "02",
                                    year: "2023",
                                    title: "NURSING INFORMATIVE",
                                    date: "11/11/2023",
                                    isbn: "968-81-966348-9-7",
                                },
                            ].map((book) => (
                                <article
                                    key={book.number}
                                    className="flex gap-5 border border-[#E6DFD3] bg-white p-6 sm:p-7"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <BookOpen
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                            {book.year} / Book {book.number}
                                        </p>
                                        <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-[#20235A]">
                                            {book.title}
                                        </h3>
                                        <p className="mt-3 text-xs text-[#69666B]">
                                            NCERC Publication Division
                                        </p>
                                        <p className="mt-1 text-[10px] text-[#77747A]">
                                            Published: {book.date}
                                        </p>
                                        <p className="mt-1 text-[10px] text-[#77747A]">
                                            ISBN: {book.isbn}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Date of Publication",
                                "Title of Book",
                                "Published By",
                                "Edition",
                                "ISBN",
                            ]}
                            rows={books}
                        />
                    </div>
                </section>

                {/* CERTIFICATE COURSES */}
                <section
                    id="certificates"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Professional Development"
                            title="Certificate Courses"
                            description="Professional certification courses completed through recognised organisations and institutions."
                        />

                        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: Award,
                                    title: "Google Cloud",
                                    text: "Android Programming",
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Google",
                                    text: "Technical Support Fundamentals",
                                },
                                {
                                    icon: BookOpen,
                                    title: "University of Colorado",
                                    text: "Web Applications and Cloud Computing",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="border border-[#E6DFD3] bg-[#FAF7F2] p-6"
                                    >
                                        <Icon
                                            size={19}
                                            className="mb-4 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Title of Course",
                                "Course Offered By",
                            ]}
                            rows={certificates}
                        />
                    </div>
                </section>

                {/* RESEARCHER PROFILES */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-[#20235A] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="text-[11px] font-medium tracking-[0.18em] text-[#D2B87C]">
                                    07
                                </span>
                                <span className="h-px w-8 bg-[#D2B87C]" />
                                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Academic Identity
                                </span>
                            </div>

                            <h2 className="font-serif text-2xl font-normal leading-tight text-white sm:text-3xl">
                                Researcher Profiles
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                                Research identifiers and academic profiles
                                associated with Dr. Pramod K.
                            </p>

                            <div className="mt-5 h-[2px] w-12 bg-[#D2B87C]" />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                {
                                    icon: Award,
                                    label: "Researcher ID",
                                    value: "A-1234-5678",
                                },
                                {
                                    icon: Atom,
                                    label: "NCERC Unique ID",
                                    value: "2202",
                                },
                                {
                                    icon: Network,
                                    label: "Web of Science Researcher ID",
                                    value: "OUH-5317-2025",
                                },
                                {
                                    icon: Brain,
                                    label: "Scopus Author ID",
                                    value: "59257244300",
                                },
                            ].map((profile) => {
                                const Icon = profile.icon;

                                return (
                                    <div
                                        key={profile.label}
                                        className="border border-white/15 bg-white/[0.04] p-6 sm:p-7"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-[#D2B87C]">
                                                <Icon
                                                    size={19}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                                    {profile.label}
                                                </p>
                                                <p className="mt-2 break-all text-sm text-white/90">
                                                    {profile.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <a
                                href="https://orcid.org/0009-0007-9455-2015"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#D2B87C]/70 hover:bg-white/[0.08] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-[#D2B87C]">
                                            <GraduationCap
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-2 break-all text-sm text-white/90">
                                                0009-0007-9455-2015
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-white/50 transition-colors group-hover:text-[#D2B87C]"
                                    />
                                </div>
                            </a>

                            <a
                                href="https://scholar.google.com/citations?user=72lfMOcAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#D2B87C]/70 hover:bg-white/[0.08] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10 text-[#D2B87C]">
                                            <Brain
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                                Google Scholar Profile
                                            </p>
                                            <p className="mt-2 text-sm text-white/90">
                                                View Google Scholar Profile
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-white/50 transition-colors group-hover:text-[#D2B87C]"
                                    />
                                </div>
                            </a>
                        </div>


                    </div>
                </section>
                <br /> <br /> <br />
            </main>

            <FooterSection />
        </>
    );
}

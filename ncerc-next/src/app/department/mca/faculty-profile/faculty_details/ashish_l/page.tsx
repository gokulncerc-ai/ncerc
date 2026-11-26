
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
    "Education",
    "Information and Communication Technology (ICT)",
    "Deep Learning",
    "Programming Techniques",
];

const areasOfInterest = [
    "Programming",
    "Artificial Intelligence",
    "Data Mining",
    "Software Engineering",
    "Web Application Development",
    "Mobile Application Development",
    "Academic Automation Systems",
    "Outcome-Based Education",
    "Curriculum Design",
    "Student Project Guidance",
    "Technology-enabled Teaching and Learning",
];

const keywords = [
    "Education",
    "ICT",
    "Deep Learning",
    "Programming",
    "Artificial Intelligence",
    "Data Mining",
    "Software Engineering",
    "Academic Automation",
    "Technology-enabled Learning",
];

/* -------------------------------------------------------
   COURSES HANDLED
------------------------------------------------------- */

const courseData: string[][] = [
    // 2026
    ["1", "2026", "MCA", "S4", "(24-26 Batch)", "Main Project"],
    ["2", "2026", "MCA", "S4", "(24-26 Batch)", "Seminar"],
    ["3", "2026", "MCA", "S2", "(25-27 Batch)", "Advanced DBMS Lab"],
    ["4", "2026", "MCA", "S2", "(25-27 Batch)", "ADBMS"],
    ["5", "2026", "MCA", "S3", "(25-27 Batch)", "Design & Analysis of Algorithms"],
    ["6", "2026", "MCA", "S3", "(25-27 Batch)", "Mobile Application Development Lab"],
    ["7", "2026", "MCA", "S1", "(26-28 Batch)", "Advanced Software Engineering"],
    ["8", "2026", "MCA", "S1", "(26-28 Batch)", "Web Programming Lab"],
    ["9", "2026", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],
    ["10", "2026", "B.Tech ECE", "S2", "(25-29 Batch)", "Foundations of Computing from Hardware Essential to Web Design"],

    // 2025
    ["11", "2025", "MCA", "S4", "(23-25 Batch)", "Main Project"],
    ["12", "2025", "MCA", "S4", "(23-25 Batch)", "Seminar"],
    ["13", "2025", "MCA", "S2", "(24-26 Batch)", "Advanced DBMS Lab"],
    ["14", "2025", "MCA", "S2", "(24-26 Batch)", "ADBMS"],
    ["15", "2025", "MCA", "S3", "(24-26 Batch)", "Design & Analysis of Algorithms"],
    ["16", "2025", "MCA", "S3", "(24-26 Batch)", "Mobile Application Development Lab"],
    ["17", "2025", "MCA", "S1", "(25-27 Batch)", "Advanced Software Engineering"],
    ["18", "2025", "MCA", "S1", "(25-27 Batch)", "Web Programming Lab"],
    ["19", "2025", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2024
    ["20", "2024", "MCA", "S4", "(22-24 Batch)", "Main Project"],
    ["21", "2024", "MCA", "S4", "(22-24 Batch)", "Seminar"],
    ["22", "2024", "MCA", "S2", "(23-25 Batch)", "Advanced DBMS Lab"],
    ["23", "2024", "MCA", "S2", "(23-25 Batch)", "ADBMS"],
    ["24", "2024", "MCA", "S3", "(23-25 Batch)", "Design & Analysis of Algorithms"],
    ["25", "2024", "MCA", "S3", "(23-25 Batch)", "Mobile Application Development Lab"],
    ["26", "2024", "MCA", "S1", "(24-26 Batch)", "Advanced Software Engineering"],
    ["27", "2024", "MCA", "S1", "(24-26 Batch)", "Web Programming Lab"],
    ["28", "2024", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2023
    ["29", "2023", "MCA", "S4", "(21-23 Batch)", "Main Project"],
    ["30", "2023", "MCA", "S4", "(21-23 Batch)", "Seminar"],
    ["31", "2023", "MCA", "S2", "(22-24 Batch)", "Advanced DBMS Lab"],
    ["32", "2023", "MCA", "S2", "(22-24 Batch)", "ADBMS"],
    ["33", "2023", "MCA", "S3", "(22-24 Batch)", "Design & Analysis of Algorithms"],
    ["34", "2023", "MCA", "S3", "(22-24 Batch)", "Mobile Application Development Lab"],
    ["35", "2023", "MCA", "S1", "(23-25 Batch)", "Advanced Software Engineering"],
    ["36", "2023", "MCA", "S1", "(23-25 Batch)", "Web Programming Lab"],
    ["37", "2023", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2022
    ["38", "2022", "MCA", "S4", "(20-22 Batch)", "Main Project"],
    ["39", "2022", "MCA", "S4", "(20-22 Batch)", "Seminar"],
    ["40", "2022", "MCA", "S6", "(19-22 Batch)", "Main Project"],
    ["41", "2022", "MCA", "S2", "(21-23 Batch)", "Advanced DBMS Lab"],
    ["42", "2022", "MCA", "S2", "(21-23 Batch)", "ADBMS"],
    ["43", "2022", "MCA", "S3", "(21-23 Batch)", "Design & Analysis of Algorithms"],
    ["44", "2022", "MCA", "S3", "(21-23 Batch)", "Mobile Application Development Lab"],
    ["45", "2022", "MCA", "S1", "(22-24 Batch)", "Advanced Software Engineering"],
    ["46", "2022", "MCA", "S1", "(22-24 Batch)", "Web Programming Lab"],
    ["47", "2022", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2021
    ["48", "2021", "MCA", "S6", "(18-21 Batch)", "Main Project"],
    ["49", "2021", "MCA", "S4", "(19-22 Batch)", "Mobile Computing"],
    ["50", "2021", "MCA", "S4", "(19-22 Batch)", "Mobile Application Development Lab"],
    ["51", "2021", "MCA", "S5", "(19-22 Batch)", "E-Commerce"],
    ["52", "2021", "MCA", "S5", "(19-22 Batch)", "Seminar"],
    ["53", "2021", "MCA", "S2", "(20-22 Batch)", "Advanced DBMS Lab"],
    ["54", "2021", "MCA", "S2", "(20-22 Batch)", "ADBMS"],
    ["55", "2021", "MCA", "S3", "(20-22 Batch)", "Design & Analysis of Algorithms"],
    ["56", "2021", "MCA", "S3", "(20-22 Batch)", "Mobile Application Development Lab"],
    ["57", "2021", "MCA", "S1", "(21-23 Batch)", "Advanced Software Engineering"],
    ["58", "2021", "MCA", "S1", "(21-23 Batch)", "Web Programming Lab"],
    ["59", "2021", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2020
    ["60", "2020", "MCA", "S6", "(17-20 Batch)", "Main Project"],
    ["61", "2020", "MCA", "S4", "(18-21 Batch)", "Mobile Computing"],
    ["62", "2020", "MCA", "S4", "(18-21 Batch)", "Mobile Application Development Lab"],
    ["63", "2020", "MCA", "S5", "(18-21 Batch)", "E-Commerce"],
    ["64", "2020", "MCA", "S5", "(18-21 Batch)", "Seminar"],
    ["65", "2020", "MCA", "S1", "(20-22 Batch)", "Advanced Software Engineering"],
    ["66", "2020", "MCA", "S1", "(20-22 Batch)", "Web Programming Lab"],
    ["67", "2020", "MCA", "S2", "(19-22 Batch)", "Object Oriented Programming"],
    ["68", "2020", "MCA", "S2", "(19-22 Batch)", "Object Oriented Programming Lab"],
    ["69", "2020", "MCA", "S3", "(19-22 Batch)", "Computer Network"],
    ["70", "2020", "MCA", "S3", "(19-22 Batch)", "Web Programming Lab"],
    ["71", "2020", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2019
    ["72", "2019", "MCA", "S6", "(16-19 Batch)", "Main Project"],
    ["73", "2019", "MCA", "S4", "(17-20 Batch)", "Mobile Computing"],
    ["74", "2019", "MCA", "S4", "(17-20 Batch)", "Mobile Application Development Lab"],
    ["75", "2019", "MCA", "S5", "(17-20 Batch)", "E-Commerce"],
    ["76", "2019", "MCA", "S5", "(17-20 Batch)", "Seminar"],
    ["77", "2019", "MCA", "S1", "(19-22 Batch)", "Problem Solving and Computer Programming"],
    ["78", "2019", "MCA", "S1", "(19-22 Batch)", "Programming Lab"],
    ["79", "2019", "MCA", "S1", "(19-22 Batch)", "Applied Statistics Lab"],
    ["80", "2019", "MCA", "S2", "(18-21 Batch)", "Object Oriented Programming"],
    ["81", "2019", "MCA", "S2", "(18-21 Batch)", "Object Oriented Programming Lab"],
    ["82", "2019", "MCA", "S3", "(18-21 Batch)", "Computer Network"],
    ["83", "2019", "MCA", "S3", "(18-21 Batch)", "Web Programming Lab"],
    ["84", "2019", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2018
    ["85", "2018", "MCA", "S6", "(15-18 Batch)", "Main Project"],
    ["86", "2018", "MCA", "S4", "(16-19 Batch)", "Mobile Computing"],
    ["87", "2018", "MCA", "S4", "(16-19 Batch)", "Mobile Application Development Lab"],
    ["88", "2018", "MCA", "S5", "(16-19 Batch)", "E-Commerce"],
    ["89", "2018", "MCA", "S5", "(16-19 Batch)", "Seminar"],
    ["90", "2018", "MCA", "S1", "(18-21 Batch)", "Problem Solving and Computer Programming"],
    ["91", "2018", "MCA", "S1", "(18-21 Batch)", "Programming Lab"],
    ["92", "2018", "MCA", "S1", "(18-21 Batch)", "Applied Statistics Lab"],
    ["93", "2018", "MCA", "S2", "(17-20 Batch)", "Object Oriented Programming"],
    ["94", "2018", "MCA", "S2", "(17-20 Batch)", "Object Oriented Programming Lab"],
    ["95", "2018", "MCA", "S3", "(17-20 Batch)", "Computer Network"],
    ["96", "2018", "MCA", "S3", "(17-20 Batch)", "Web Programming Lab"],
    ["97", "2018", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],

    // 2017
    ["98", "2017", "MCA", "S6", "(14-17 Batch)", "Main Project"],
    ["99", "2017", "MCA", "S4", "(15-18 Batch)", "Web Programming"],
    ["100", "2017", "MCA", "S5", "(15-18 Batch)", "Mobile Computing"],
    ["101", "2017", "MCA", "S5", "(15-18 Batch)", "Android Programming"],
    ["102", "2017", "MCA", "S2", "(16-19 Batch)", "Object Oriented Programming"],
    ["103", "2017", "MCA", "S2", "(16-19 Batch)", "Object Oriented Programming Lab"],
    ["104", "2017", "MCA", "S3", "(16-19 Batch)", "Computer Network"],
    ["105", "2017", "MCA", "S3", "(16-19 Batch)", "Web Programming"],
    ["106", "2017", "MCA", "S1", "(17-20 Batch)", "Problem Solving and Computer Programming"],
    ["107", "2017", "MCA", "S1", "(17-20 Batch)", "Programming Lab"],
    ["108", "2017", "MCA", "S1", "(17-20 Batch)", "Applied Statistics Lab"],
    ["109", "2017", "B.Pharm", "S2", "—", "Computer Applications in Pharmacy"],
    ["110", "2017", "MBA", "S3", "—", "Enterprise Resource Planning"],

    // 2016
    ["112", "2016", "MCA", "S3", "(14-17 Batch)", "Computer Network"],
    ["113", "2016", "MCA", "S3", "(15-18 Batch)", "Core Java"],
    ["114", "2016", "MCA", "S2", "(15-18 Batch)", "Data Structures"],
    ["115", "2016", "MCA", "S2", "(15-18 Batch)", "Data Structures Lab"],
    ["116", "2016", "MCA", "S4", "(14-17 Batch)", "Web Programming"],
    ["117", "2016", "MCA", "S5", "(14-17 Batch)", "Mobile Computing"],
    ["118", "2016", "MCA", "S5", "(14-17 Batch)", "Android Programming"],
    ["119", "2016", "MCA", "S6", "(13-16 Batch)", "Main Project"],
    ["120", "2016", "MCA", "S1", "(16-19 Batch)", "Problem Solving and Computer Programming"],
    ["121", "2016", "MCA", "S1", "(16-19 Batch)", "Programming Lab"],
    ["122", "2016", "MCA", "S1", "(16-19 Batch)", "Applied Statistics Lab"],

    // 2015
    ["123", "2015", "MCA", "S3", "(14-17 Batch)", "Core Java"],
    ["124", "2015", "MCA", "S1", "(15-18 Batch)", "Computer Programming"],
    ["125", "2015", "MCA", "S1", "(15-18 Batch)", "Programming Lab"],
];

const courses = courseData.map((row) => [
    row[0],
    row[1],
    row[2],
    row[3],
    row[4],
    row[5],
]);

/* -------------------------------------------------------
   PUBLICATIONS
------------------------------------------------------- */

const createPublications = (titles: string[]) =>
    titles.map((title) => ({
        title,
        details: "Conference / Journal details were not included in the supplied faculty information.",
    }));

const publications2026 = createPublications([
    "BREAKING POINT ANALYSIS OF MCMC CRYPTANALYSIS FOR SUBSTITUTION CIPHERS",
    "EXTENDED REALITY (XR): AUGMENTED, VIRTUAL AND MIXED REALITY IN ENTERPRISE APPLICATIONS",
    "FULLY HOMOMORPHIC ENCRYPTION FOR SECURE CLOUD COMPUTATION",
    "REAL-TIME DATA ANALYTICS FOR SUPPLY CHAIN OPTIMIZATION: A FRAMEWORK FOR RESILIENT AND PROACTIVE LOGISTICS",
    "AN AI-DRIVEN FRAMEWORK FOR PERSONALIZED CAREER GUIDANCE SYSTEMS",
    "A COMPREHENSIVE STUDY OF AI-DRIVEN AUTONOMOUS VEHICLE TECHNOLOGIES",
    "IoT-BASED REMOTE PATIENT MONITORING SYSTEM: AN ARCHITECTURAL ANALYSIS AND PERFORMANCE EVALUATION FOR NEXT-GENERATION HEALTHCARE",
    "CYBERSECURITY IN THE AGE OF AI-DRIVEN ATTACKS",
]);

const publications2025 = createPublications([
    "ENHANCING STUDENT LEARNING OUTCOMES THROUGH ICT: A GRU-BASED PREDICTION MODEL WITH SELF-ATTENTION MECHANISM",
    "EVALUATING LOCAL-GLOBAL LANDSLIDE FEATURES COMBINING CNN AND TRANSFORMER FOR LANDSLIDE SUSCEPTIBILITY MAPPING",
    "GAZE-BASED HUMAN INTENTION ANALYSIS: ADVANCING HUMAN–ROBOT INTERACTION THROUGH EYE MOVEMENT INSIGHTS",
    "ANALYZING EMBEDDED SYSTEM SECURITY: EXPLOITING WEAKNESSES AND IMPLEMENTING ROBUST DEFENSES",
    "NEURALINK: A REVOLUTIONARY BRAIN-MACHINE INTERFACE FOR HUMAN-MACHINE SYMBIOSIS",
    "STOCK PRICE PREDICTION USING MACHINE LEARNING",
    "AN ADVANCED APPROACH TO CROWD COUNTING USING DEEP LEARNING",
    "SMART GREEN HOUSE IoT FRAMEWORK FOR SUSTAINABLE AGRICULTURE",
    "AI AND CYBERSECURITY: ENHANCING THREAT DETECTION AND RESPONSE WITH MACHINE LEARNING",
]);

const publications2024 = createPublications([
    "THE CONVERGENCE OF DEEP LEARNING AND ICT: REVOLUTIONIZING STUDENT PERFORMANCE PREDICTION",
    "TRANSFORMING EDUCATION: THE IMPACT OF ICT AND DATA MINING ON STUDENT OUTCOMES",
    "PHISHING ATTACK",
    "EYE GAZE COMMUNICATION SYSTEMS",
    "ARTIFICIAL INTELLIGENCE AND DEEP LEARNING FOR WEAPON IDENTIFICATION IN SECURITY SYSTEMS",
    "VOICE-ACTIVATED E-COMMERCE: REVOLUTIONIZING SHOPPING EXPERIENCES WITH PERSONALIZATION AND SEAMLESS INTEGRATION",
    "ENHANCING INTELLIGENCE OPERATIONS: EXPLORING SOCIAL MEDIA INTELLIGENCE (SOCMINT) RED TEAMING STRATEGIES AND CHALLENGES",
    "ENHANCING USER EXPERIENCE: USER INTERFACE (UI) AND USER EXPERIENCE (UX) IN AUGMENTED REALITY",
    "SPAM IDENTIFICATION IN CLOUD COMPUTING USING TEXT FILTERING",
    "CRYPTO WATERMARKING IN MULTIMEDIA TRANSMISSION",
    "SECURING E-COMMERCE: AI-POWERED FRAUD DETECTION AND PREVENTION",
]);

const publications2023 = createPublications([
    "THE INVOLVEMENT OF MOBILE LEARNING AND DIGITAL CONTENT PLATFORMS IN EDUCATIONAL DOMAIN",
    "AN OVERVIEW ON MARINE DEBRIS CLASSIFICATION",
    "NICE: NETWORK INTRUSION DETECTION AND COUNTERMEASURE SELECTION IN VIRTUAL NETWORK SYSTEMS",
    "SILENT SOUND TECHNOLOGY: A REMEDY FOR DISRUPTIVE COMMUNICATION",
    "IoT APPLICATIONS IN HEALTHCARE: AN OVERVIEW ON RECENT TRENDS AND PROSPECTS",
    "IMPORTANCE OF DATA PRIVACY IN HEALTHCARE",
    "HUMAN COMPUTER INTERACTION AND ITS FUTURE SCOPE",
    "ARTIFICIAL INTELLIGENCE APPLICATIONS FOR MOBILE VR",
    "FUTURE SCOPE OF AUGMENTED REALITY IN EDUCATION",
    "ICT IN HEALTHCARE UNITS WILL HELP US TO DETECT THE EARLY DETECTION AND PREDICTION OF VARIOUS DAILY LIFE DISEASES THAT WILL AFFECT HEALTH",
    "THE ANALYSIS ABOUT THE INVOLVEMENT OF ICT IN EDUCATION TO ENHANCE STUDENTS LEARNING CAPABILITY",
]);

const publications2022 = createPublications([
    "GIANT GENOMIC STORING SERVICE",
    "A REVIEW OF INTERACTIVE MEDICAL IMAGE SEGMENTATION USING DEEP LEARNING TECHNIQUES",
    "CROSS SITE SCRIPTING (XSS): THE SECURITY VULNERABILITY AND PREVENTIVE MEASURES",
    "A COMMUNICATION BETWEEN HUMAN BODIES USING REDTACTON TECHNOLOGY IN HUMAN AREA NETWORKING",
    "CHALLENGES THAT NEED TO BE FACED BY IoT DEVICE WHILE IMPLEMENTING 5G",
    "ROBOTIC PROCESS AUTOMATION",
    "MODELING AND CONTROLLING FRACTAL ROBOT USING L-STREAM ALGORITHM",
    "SECURE CLOUD STORAGE USING DIFFERENT ALGORITHMS IN CRYPTOGRAPHY",
    "COMPUTER FORENSIC IN IMAGE STEGANOGRAPHY",
    "THE INVOLVEMENT OF ICT IN EDUCATION EVEN DURING THE COVID-19 PANDEMIC",
]);

const publications2021 = createPublications([
    "ROLE OF SOCIO-INFORMATICS PARTICIPATION IN THE COVID-19 STUDY: HIGHLIGHTING HEALTHCARE ARENAS TO BENEFIT FROM INFORMATION AND COMMUNICATION TECHNOLOGY",
]);

/* -------------------------------------------------------
   BOOKS
------------------------------------------------------- */

const books = [
    [
        "01",
        "2021",
        "01/11/2021",
        "Computer Applications for Diversified Domains",
        "NCERC Publication Division",
        "First Edition",
        "ISBN: 978-93-5526-234-9",
    ],
    [
        "02",
        "2021",
        "15/12/2021",
        "Essentials of E-Commerce",
        "NCERC Publication Division",
        "First Edition",
        "ISBN: 978-81-954646-3-0",
    ],
    [
        "03",
        "2022",
        "02/11/2022",
        "Design and Analysis of Algorithms – An Academic Perspective",
        "NCERC Publication Division",
        "First Edition",
        "ISBN: 978-81-954646-9-2",
    ],
    [
        "04",
        "2023",
        "30/12/2023",
        "Problem Solving Using C",
        "NCERC Publication Division",
        "First Edition",
        "ISBN: 978-81-966538-9-7",
    ],
];

/* -------------------------------------------------------
   CERTIFICATE COURSES
------------------------------------------------------- */

const certificates = [
    ["01", "Getting Started With Application Development", "Google Cloud"],
    ["02", "Technical Support Fundamentals", "Google"],
    ["03", "Building Web Applications in PHP", "University of Michigan"],
    ["04", "Fundamentals of Network Communication", "University of Colorado"],
    ["05", "Introduction to Virtual Reality", "University of London"],
    ["06", "System Administration and Networking Using FOSS Tools", "ICFOSS"],
    ["07", "Adobe Academic Essentials", "Adobe"],
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
    { id: "certificates", label: "Certifications" },
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
}: {
    headers: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] border-collapse text-left">
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
                        {rows.map((row, rowIndex) => (
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
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
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
    items: {
        title: string;
        details: string;
        url?: string;
    }[];
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
                        key={publication.title}
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
                                {publication.title}
                            </h4>
                            <p className="mt-3 text-xs leading-6 text-[#69666B] sm:text-sm">
                                {publication.details}
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

export default function DrAshishLFacultyPage() {
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
                                Dr. Ashish L
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    MCA
                                </span>
                                <span className="border border-[#D2B87C]/40 px-4 py-2 text-[10px] tracking-wide text-[#D2B87C]">
                                    11+ Years Experience
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 2861
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
                                            Ph.D, MCA
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
                                            Education, ICT & Deep Learning
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
                                            Academic Achievement
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            MCA Department First Rank Holder
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
                                            Teaching Experience
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            More than 11 Years
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
                                title="About Dr. Ashish L"
                                description="An overview of his academic journey, teaching experience, research contributions and institutional responsibilities."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Ashish L is a dedicated and enthusiastic
                                    academic professional with more than 11
                                    years of teaching experience in the field
                                    of Computer Applications. He is friendly,
                                    approachable and collaborative, with the
                                    ability to build strong teamwork
                                    environments among students and colleagues.
                                    His communication skills support effective
                                    engagement with learners at college and
                                    school levels through interactive teaching,
                                    programming sessions, workshops and
                                    motivational activities.
                                </p>

                                <p>
                                    He is the First Rank Holder of his MCA
                                    department and Third Rank Holder at Calicut
                                    University for the MCA 2011–2014 batch.
                                    He has also completed certifications from
                                    Google and leading international
                                    universities, strengthening his
                                    professional knowledge and global
                                    perspective.
                                </p>

                                <p>
                                    His academic contributions extend beyond
                                    classroom teaching. He has actively
                                    conducted research in ICT-based education
                                    and its effectiveness in improving student
                                    learning outcomes. He has published
                                    research papers in national and
                                    international journals, authored academic
                                    books and presented innovative ideas at
                                    conferences and academic forums.
                                </p>

                                <p>
                                    During the COVID-19 pandemic, he introduced
                                    a hands-free sanitizer machine using
                                    reusable materials as a socially
                                    responsible initiative. He has also
                                    designed and implemented department-support
                                    systems, including feedback management
                                    solutions. In addition, he has guided
                                    numerous student projects and supported
                                    students in publishing their research work
                                    in reputed journals.
                                </p>

                                <p>
                                    To promote student motivation and
                                    engagement, he introduced an interactive
                                    session titled “Reboot Your Mind”, focusing
                                    on confidence-building, knowledge
                                    enhancement and mental readiness through
                                    structured activities and interaction. He
                                    also actively conducts outreach programmes
                                    and extension activities for students.
                                </p>

                                <p>
                                    He has served as the MCA Department
                                    Association Coordinator for 11 years and
                                    the KTU Exam Department Coordinator for
                                    8 years. He also served as the KTU
                                    Examination College Main Coordinator
                                    during the Odd Semester Examination Season
                                    of 2024–25.
                                </p>

                                <p>
                                    His other institutional responsibilities
                                    include Department Placement Coordinator,
                                    Department IIC Coordinator, Department
                                    E-Resource Coordinator, Music-Band
                                    Coordinator, Board of Studies Member,
                                    NBA and NAAC criteria coordination,
                                    Alumni Association NCERC Secretary,
                                    Department Admission Coordinator and
                                    NDLI Club Member. He also handles academic
                                    sessions for engineering and pharmacy
                                    streams.
                                </p>

                                <p>
                                    Through these responsibilities, he
                                    contributes to academic planning,
                                    examination coordination, accreditation
                                    activities, placement support, alumni
                                    engagement and institutional quality
                                    enhancement. His professional mission is
                                    to contribute meaningfully to student
                                    development, academic excellence, research
                                    advancement and institutional growth
                                    through commitment, innovation and
                                    teamwork.
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
                                value="Assistant Professor"
                            />
                            <DetailItem
                                label="Department"
                                value="Computer Applications"
                            />
                            <DetailItem
                                label="Qualification"
                                value="Ph.D, MCA"
                            />
                            <DetailItem
                                label="Teaching Experience"
                                value="More than 11 Years"
                            />
                            <DetailItem
                                label="Researcher ID"
                                value="A-1234-5678"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="2861"
                            />
                        </aside>
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
                            description="Research interests spanning education, information and communication technologies, intelligent systems and programming techniques."
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
                                        Research Specialisation
                                    </p>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                    Education, ICT, Deep Learning and
                                    Programming Techniques
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    His primary research interests lie in
                                    Education, Information and Communication
                                    Technology, Deep Learning and Programming
                                    Techniques. His academic work also
                                    encompasses technology-enabled teaching
                                    and learning, educational data analysis
                                    and the development of computing solutions
                                    that support academic processes.
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
                                            className="flex items-start gap-4 border-b border-[#E6DFD3] py-4 last:border-b-0"
                                        >
                                            <span className="pt-0.5 text-[10px] tracking-wider text-[#927B4D]">
                                                {String(index + 1).padStart(2, "0")}
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
                                {keywords.map((item) => (
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
                            description="Courses, laboratory subjects and project guidance handled across MCA, B.Pharm, B.Tech and MBA programmes from 2015 to 2026."
                        />

                        <div className="mb-6 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    {courses.length}
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Course Entries
                                </p>
                            </div>
                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2015–2026
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Academic Years
                                </p>
                            </div>
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
                            description="Research paper titles provided in the faculty profile, organised by year."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                            {[
                                { year: "2026", count: "08" },
                                { year: "2025", count: "09" },
                                { year: "2024", count: "11" },
                                { year: "2023", count: "11" },
                                { year: "2022", count: "10" },
                                { year: "2021", count: "01" },
                            ].map((item) => (
                                <div
                                    key={item.year}
                                    className="border border-[#E6DFD3] bg-[#FAF7F2] p-5"
                                >
                                    <p className="font-serif text-3xl font-normal text-[#20235A]">
                                        {item.count}
                                    </p>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                        Publications · {item.year}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <PublicationList
                            year="2026"
                            items={publications2026}
                        />
                        <PublicationList
                            year="2025"
                            items={publications2025}
                        />
                        <PublicationList
                            year="2024"
                            items={publications2024}
                        />
                        <PublicationList
                            year="2023"
                            items={publications2023}
                        />
                        <PublicationList
                            year="2022"
                            items={publications2022}
                        />
                        <PublicationList
                            year="2021"
                            items={publications2021}
                        />
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
                            eyebrow="Academic Publications"
                            title="Books Authored"
                            description="Books authored and published through the NCERC Publication Division."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Publication Date",
                                "Title of Book",
                                "Publisher",
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
                            description="Professional and technical courses completed through recognised organisations and international universities."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {certificates.map((certificate) => (
                                <div
                                    key={certificate[0]}
                                    className="flex items-start gap-4 border border-[#E6DFD3] bg-[#FAF7F2] p-5 sm:p-6"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-[#927B4D]">
                                            Certificate {certificate[0]}
                                        </p>
                                        <h3 className="mt-2 font-serif text-lg font-normal leading-snug text-[#20235A]">
                                            {certificate[1]}
                                        </h3>
                                        <p className="mt-2 text-xs text-[#69666B]">
                                            Offered by {certificate[2]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RESEARCHER PROFILES */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Research identifiers and academic profiles associated with Dr. Ashish L."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Researcher ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            A-1234-5678
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                        <Atom size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            2861
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                        <Microscope size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Web of Science Researcher ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            OUH-5416-2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                        <BookOpen size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Scopus Author ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            59353380000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://orcid.org/0009-0001-0593-5476"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                            <GraduationCap size={19} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-1 break-all text-sm text-[#393947]">
                                                0009-0001-0593-5476
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </a>

                            <a
                                href="https://scholar.google.com/citations?user=72lfMOcAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                            <Brain size={19} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                Google Scholar Profile
                                            </p>
                                            <p className="mt-1 text-sm text-[#393947]">
                                                View Google Scholar Profile
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

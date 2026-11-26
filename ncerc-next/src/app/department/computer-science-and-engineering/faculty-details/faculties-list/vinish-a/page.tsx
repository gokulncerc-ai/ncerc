
"use client";

import Link from "next/link";
import {
    ArrowDown,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Award,
    Presentation,
    FileText,
    Globe,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNavigation";

const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Network Security",
    "Internet of Things",
];

const keywords = [
    "Artificial Intelligence",
    "Machine Learning",
    "Network Security",
    "IoT",
    "Cyber Security",
    "Deep Learning",
    "Cloud Computing",
    "Cryptography",
];

const courses = [
    ["01", "B.Tech", "Internet of Things"],
    ["02", "B.Tech", "Artificial Intelligence"],
    ["03", "B.Tech", "Cryptography and Network Security"],
    ["04", "B.Tech", "Computer Networks"],
    ["05", "B.Tech", "Network Security Protocol"],
    ["06", "B.Tech", "Mobile Computing"],
    ["07", "B.Tech", "Mobile Communication"],
    ["08", "B.Tech", "C Programming"],
    ["09", "B.Tech", "Python Programming"],
    ["10", "B.Tech", "Object Oriented Concepts"],
    ["11", "B.Tech", "Operating System"],
    ["12", "B.Tech", "Data Modelling Language"],
    ["13", "M.Tech", "Cyber Security"],
    ["14", "M.Tech", "Advanced Operating System"],
    ["15", "M.Tech", "Advanced Database Management System"],
    ["16", "M.Tech", "Machine Learning"],
    ["17", "M.Tech", "Blockchain and IoT"],
];

const publications = [
    " Hierarchical Federated Multi-Agent Deep Reinforcement Learning with Differential Privacy for Resilient and Decentralized Optimal Power Flow in Sustainable Smart Cities in INTERNATIONAL CONFERENCE ON NEXT-GENERATION ADAPTIVE RESEARCH AND INNOVATIONS (ICNARI 2026), organized by Department of Electrical Engineering, National Institute of Technology Patna.",

    "Multi-Head Attention-Enabled Explainability Architecture for Real-Time Renewable Energy Forecasting and Smart Grid Optimization in INTERNATIONAL CONFERENCE ON NEXT-GENERATION ADAPTIVE RESEARCH AND INNOVATIONS (ICNARI 2026), organized by Department of Electrical Engineering, National Institute of Technology Patna.",

    "Advanced System for Secure Military Communication using Image Steganography and Block Rotatory Encryption in IJFMR, March 2025. ",

    "Cardiovascular risk analysis using Machine Learning Approach“ in International Conference on Transforming Engineering Systems for Sustainability(TESS-2023) at Taylor's University, Kuala Lumpur, Malaysia.",

    "Identification of Plant Leaf Disease Detection” in International Journal of Scientific Research in Engineering and Management, Volume:07/Issue:05/May-2023",

    "Lung Cancer Detection” in International Journal of Research and Publication Reviews, ISSN 2582-7421-May-2023",

    "A Rule Based Garbage Management System Using Chat Bot” in International Research Journal of Modernization in Engineering Technology and Science, Volume:05/Issue:02/February-2023",

    "Deep Learning Based Sign Recognition System Forspeech and Hearing-Impaired” in International Research Journal of Modernization in Engineering Technology and Science, Volume:05/Issue:02/February-2024",

    "a Springer conference paper “Brand Quality Detection Based on a Comparative Analysis “, in International Conference on Next Generation of Internet of Things ICNGIoT-2021.",

    "Implementation of Bit coin mining using Raspberry Pi in the 2nd International IEEE Conference on Smart Systems and Inventive Technology (ICSSIT 2019).",

    "Enhanced Hierarchical Design for Visual Cryptography- Overview, in International Journal of Advanced Research in Science, Engineering and Technology Vol. 2, Issue 5 , May 2015 ",

    "Moderate denial-of-service Attack Detection based on Distance flow and Trackback Routing, in International Journal volume 1, issue 7, November – 2014",
];

const books = [
    {
        title: "Expandable Artificial Intelligence",
        description:
            "Published by Mercury Publication Consortium.",
        details: "ISBN: 978-81-970519-7-5 | February 2024",
        type: "Book",
    },
    {
        title: "Prediction of Baby Movement during Pregnancy using Back Propagation and ID3",
        description:
            "Published as a book chapter in Predicting Pregnancy Complications through Artificial Intelligence and Machine Learning.",
        details: "IGI Global Publisher | July 2023",
        type: "Book Chapter",
    },
];

const patents = [
    {
        title: "IoT Based Heart Beat Monitoring Device",
        details: "Application No: 434707-001",
        date: "18 October 2025",
    },
    {
        title: "Artificial Intelligence Based Automatic Smart Health Care System to Prevent, Accurate Detection and Classification System to Diagnose Bone Cancer at Early Stage Using Image Processing and Deep Learning",
        details: "Application No: 202341008571",
        date: "20 February",
    },
];

const fdpPrograms = [
    "Three-day Faculty Development Program on Microsoft Power BI, jointly organized by the Human Resource Development Centre (HRDC) of APJ Abdul Kalam Technological University and NEST Digital Academy, held from 09.06.2025 to 11.06.2025.",

    "One-week Faculty Development Program on AI Tools, organized by Anjuman Institute of Technology and Management, Bhatkal, in association with Brain Vision Solution India Pvt. Ltd. and in collaboration with AICTE, from 17 to 21 February 2025.",

    "One-day Faculty Development Program on Human Centered Artificial Intelligence, organized by the Department of Artificial Intelligence and Machine Learning, Maha Guru Institute of Technology, held on 2 January 2025.",

    "Two-week Faculty Development Program on Data Science Tools, organized by the Department of Artificial Intelligence and Data Science, Easwari Engineering College, Ramapuram, Chennai, Tamil Nadu.",

    "Five-day Faculty Development Program on 3D Printing and Design, organized by Kerala State Centre for Advanced Printing and Training and AICTE Training and Learning (ATAL) Academy at MES College of Engineering, Kuttipuram, Kerala.",

    "Five-day KTU-sponsored Faculty Development Program on Recent Trends in Artificial Intelligence and Machine Learning at MES College of Engineering, Kuttipuram, Kerala.",

    "Three-day Faculty Development Program on Artificial Intelligence at MEA Engineering College, Perinthalmanna, Kerala.",

    "Three-day hands-on workshop on IoT (Internet of Things) at Al-Ameen Engineering College, Shornur.",

    "One-day workshop on Big Data and Computational Biology at VIT University, Vellore.",

    "Hands-on workshop on Ethical Hacking at MEA Engineering College, Perinthalmanna, Kerala, organized by Robokart in association with Innovation Cell UMIC, IIT Bombay.",

    "Two-day FDP and hands-on workshop on Voice Control Robot at MEA Engineering College, Perinthalmanna.",

    "Workshop on Research Methodology at MEA Engineering College, Perinthalmanna.",

    "National Workshop on Computational Intelligence at Jyothi Engineering College, Cheruthuruthy, Thrissur.",

    "National Workshop on Android Application Development at Government Engineering College, Sreekrishnapuram, Palakkad.",
];

const certifications = [
    {
        title: "Oracle Cloud Data Management 2023 Certified Foundation Associate",
        provider: "Oracle",
    },
    {
        title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
        provider: "Oracle",
    },
    {
        title: "Introduction to Critical Infrastructure Protection",
        provider: "OPSWAT",
    },
    {
        title: "OPSWAT File Security Associate",
        provider: "OPSWAT",
    },
    {
        title: "IoT Platform Overview",
        provider: "Infosys Springboard",
    },
    {
        title: "Computer Network Types + CompTIA Networks",
        provider: "Infosys Springboard",
    },
    {
        title: "Information Security",
        provider: "Infosys Springboard",
    },
    {
        title: "Artificial Intelligence – Types of Intelligence",
        provider: "Infosys Springboard",
    },
    {
        title: "Wireless LAN",
        provider: "Infosys Springboard",
    },
    {
        title: "CompTIA Network Security + Cloud Network Security",
        provider: "Infosys Springboard",
    },
    {
        title: "Cloud Automation and Orchestration",
        provider: "Infosys Springboard",
    },
    {
        title: "Communication and Web Protocols",
        provider: "Infosys Springboard",
    },
    {
        title: "Cloud Security Administration: Hardened Cloud Security",
        provider: "Infosys Springboard",
    },
    {
        title: "Cloud Security Management: Data Security",
        provider: "Infosys Springboard",
    },
    {
        title: "Configuring Cloud Security",
        provider: "Infosys Springboard",
    },
    {
        title: "Introduction to Cyber Security",
        provider: "SkillUP",
    },
    {
        title: "Advanced Cyber Security",
        provider: "SkillUP",
    },
    {
        title: "Network Security",
        provider: "Great Learning",
    },
    {
        title: "Data Visualization with Power BI",
        provider: "Great Learning",
    },
    {
        title: "Ethical Hacking for Beginners",
        provider: "SkillUP",
    },
    {
        title: "Introduction to the Basics of Azure Services",
        provider: "SkillUP",
    },
    {
        title: "Introduction to Robotic Process Automation (RPA)",
        provider: "SkillUP",
    },
    {
        title: "NLP and Text Mining",
        provider: "SkillUP",
    },
    {
        title: "Basics of Automation Anywhere",
        provider: "SkillUP",
    },
    {
        title: "Introduction to LinkedIn Marketing",
        provider: "SkillUP",
    },
];

const webinars = [
    "Perspective on Research Challenges and Opportunities – Research Cell.",
    "Career Opportunity as Data Scientist.",
    "Faculty Development Program on LaTeX.",
    "International Tech Conclave.",
    "Renewable Energy Grid Integration: Challenges and Key Issues – IEEE MEA SB.",
    "Lecture Series on Enterprise Master Data Management (Strategy and Foundation).",
    "Getting Started with Automated Analytics in Power System Using Machine Learning.",
    "An Effective Research Paper Writing Skill.",
    "Career Guidance.",
    "Automotive Open System Architecture (AUTOSAR) – IEEE Robotics and Automation Society Chapter and IEEE Industrial Applications Society Chapter.",
    "Professional Communication – IEEE Branch, Jeppiaar Engineering College.",
    "Online Faculty Development Program on Migration of IT Infrastructure Using Cloud.",
    "LoRa – Advanced Communication Webinar organized by IEEE JSSATE, Noida.",
    "Five-day Faculty Development Programme on GeoGebra 5.04, organized by Sathyabama Institute of Science and Technology, Chennai, in association with IIT Bombay Spoken Tutorial and PMMMNMTT.",
    "International Faculty Development Program on Disruptive Technologies: Artificial Intelligence in 4th Dimensional Approach.",
    "Browser Exploitation Framework (BeEF).",
    "International Faculty Development Program on Disruptive Technologies: Data Analytics and Tools.",
    "International Faculty Development Program on Disruptive Technologies: Techtonic IoT.",
    "Hands-on workshop on Dart Programming Language, organized by the Computer Science and Engineering Department of Mother Teresa Institute of Science and Technology in association with Brainovision Solutions India Pvt. Ltd.",
    "Webinar on Career After COVID-19 by Dr. Muralee Thummarukudy, Operations Manager, Crisis Management Branch, United Nations, organized by IGMI.",
    "Skill Gap Analysis and Entrepreneurship Development – Innovation and Entrepreneurship, IEEE MEA SB.",
    "Introduction to Data Visualization and Analytic Tools.",
    "Getting Started with Technology Fusion: NLP, Graph, Big Data and Machine Learning – IEEE MEA SB.",
    "Smart Automotive Systems: An Application Perspective.",
    "Demystifying IoT, organized by Sreepathy Institute of Management and Technology in association with IEDC-KSUM, IEEE Student Branch of SIMAT, Kabani Tech and IIC.",
    "Machine Learning: The Future of Business Culture.",
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "academic-contributions", label: "Academic Contributions" },
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

            <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
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
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
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
    widths,
}: {
    headers: string[];
    rows: string[][];
    widths?: string[];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                    {widths && (
                        <colgroup>
                            {widths.map((width, index) => (
                                <col key={index} style={{ width }} />
                            ))}
                        </colgroup>
                    )}

                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#E5D4A9]"
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
                                                ? "font-semibold text-[#927B4D]"
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

export default function VinishFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* Profile Hero */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                                Department of Computer Science and Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Vinish A
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Master of Engineering
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Pursuing Ph.D
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: E-5444
                                </span>
                            </div>
                        </div>

                        {/* Academic Profile */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
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
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            M.E, B.Tech, Ph.D Pursuing
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
                                        <p className="mt-1 text-xs text-white/90">
                                            Artificial Intelligence
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
                                            Courses Handled
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            17 Listed Subjects
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
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
                <InnerHeader />

                {/* Profile Navigation */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {profileSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Mr. Vinish A"
                                description="Academic background, teaching experience, and professional details."
                            />

                            <p className="text-sm leading-8 text-[#55535B]">
                                Mr. Vinish A is an Assistant Professor in the
                                Department of Computer Science and Engineering
                                at Nehru College of Engineering and Research
                                Centre, Thrissur, Kerala. His primary research
                                interest is Artificial Intelligence, with
                                academic interests spanning Machine Learning,
                                Network Security, and the Internet of Things.
                                He has contributed to research publications,
                                books, book chapters, patents, and academic
                                development activities. His teaching portfolio
                                includes undergraduate and postgraduate
                                subjects in computing, artificial intelligence,
                                networking, security, and emerging technologies.
                            </p>
                        </div>

                        {/* Professional Details */}
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
                            {/* <DetailItem
                                label="Department"
                                value="Computer Science and Engineering"
                            /> */}
                            {/* <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering and Research Centre, Thrissur, Kerala"
                            /> */}
                            <DetailItem
                                label="NCERC Unique ID"
                                value="E-5444"
                            />
                            <DetailItem
                                label="Qualification"
                                value="M.E, B.Tech, Pursuing Ph.D"
                            />

                            <div className="mt-5 space-y-3">
                                <a
                                    href="https://orcid.org/0009-0008-5359-227X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    ORCID Profile
                                    <ExternalLink size={14} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?user=NV2rFyJR_ZEC&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    Google Scholar
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Research Section */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research & Areas of Interest"
                            description="Primary research focus and subject areas that form the foundation of his academic work."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {researchInterests.map((interest, index) => (
                                    <div
                                        key={interest}
                                        className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <span className="font-serif text-lg text-[#B49A66]">
                                            0{index + 1}
                                        </span>
                                        <p className="pt-1 text-sm leading-6 text-[#393947]">
                                            {interest}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-white">
                                        Research Keywords
                                    </h3>
                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/55">
                                    Key areas associated with his research and
                                    academic interests.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D2B87C]/35 px-3 py-2 text-[10px] tracking-wide text-[#E9D9B5]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Experience"
                            title="Subjects Handled"
                            description="Undergraduate and postgraduate subjects handled across Computer Science and Engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                17 Subjects Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Programme",
                                "Subject",
                            ]}
                            widths={["12%", "20%", "68%"]}
                            rows={courses}
                        />
                    </div>
                </section>

                {/* Publications Section */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Publications"
                            description="Research papers presented and published in international conferences, journals, and academic publications."
                        />

                        <div className="grid gap-6 sm:grid-cols-[1fr_1fr]">
                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Publications
                                    </p>
                                </div>

                                <p className="mt-5 font-serif text-3xl text-[#20235A]">
                                    12
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                    Published and presented research papers
                                    across journals and conferences.
                                </p>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#20235A] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D2B87C]">
                                        Primary Research Interest
                                    </p>
                                </div>

                                <p className="mt-5 font-serif text-xl text-white">
                                    Artificial Intelligence
                                </p>
                                <p className="mt-2 text-xs leading-6 text-white/60">
                                    Research across intelligent computing,
                                    machine learning, security, and emerging
                                    technology applications.
                                </p>
                            </div>
                        </div>

                        {/* Publication List */}
                        <div className="mt-8">
                            <div className="mb-5 flex items-center gap-3">
                                <FileText
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Published Research Papers
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {publications.map((publication, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-5 sm:p-6"
                                    >
                                        <span className="shrink-0 pt-1 font-serif text-lg text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm leading-7 text-[#393947]">
                                            {publication}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Contributions */}
                <section
                    id="academic-contributions"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Scholarly Contributions"
                            title="Academic Contributions"
                            description="Books, patents, faculty development programmes, professional certifications, and academic webinars."
                        />

                        {/* Books */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <BookOpen
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Books & Book Chapters
                                </h3>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                {books.map((book, index) => (
                                    <article
                                        key={book.title}
                                        className="border border-[#E8E1D5] bg-white p-6 sm:p-8"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <BookOpen
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                            {book.type} · 0{index + 1}
                                        </p>

                                        <h4 className="mt-3 font-serif text-xl leading-snug text-[#20235A]">
                                            {book.title}
                                        </h4>

                                        <p className="mt-3 text-xs leading-7 text-[#69666B]">
                                            {book.description}
                                        </p>

                                        <div className="mt-5 h-[2px] w-10 bg-[#D2B87C]" />

                                        <p className="mt-4 text-[10px] font-medium leading-6 text-[#927B4D]">
                                            {book.details}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Patents */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <ShieldCheck
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Patents Published
                                </h3>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                {patents.map((patent, index) => (
                                    <article
                                        key={patent.title}
                                        className="border border-[#E8E1D5] bg-white p-6 sm:p-8"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-serif text-lg text-[#B49A66]">
                                                0{index + 1}
                                            </span>
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                                Patent
                                            </span>
                                        </div>

                                        <h4 className="mt-5 font-serif text-lg leading-relaxed text-[#20235A]">
                                            {patent.title}
                                        </h4>

                                        <p className="mt-4 text-xs leading-6 text-[#69666B]">
                                            {patent.details}
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                            {patent.date}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* FDPs */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <Presentation
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Faculty Development Programs & Workshops
                                </h3>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        FDPs and Workshops Attended
                                    </p>
                                    <span className="shrink-0 bg-[#F5F0E6] px-3 py-2 text-[10px] font-semibold text-[#927B4D]">
                                        {fdpPrograms.length} Activities
                                    </span>
                                </div>

                                <div className="space-y-0">
                                    {fdpPrograms.map((program, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 border-b border-[#EEE9E0] py-4 last:border-0"
                                        >
                                            <span className="shrink-0 pt-1 text-xs font-semibold text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-xs leading-7 text-[#55535B]">
                                                {program}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <Award
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Online Certification Courses
                                </h3>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Global Certifications
                                    </p>
                                    <span className="shrink-0 bg-[#F5F0E6] px-3 py-2 text-[10px] font-semibold text-[#927B4D]">
                                        {certifications.length} Courses
                                    </span>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {certifications.map((certification, index) => (
                                        <div
                                            key={`${certification.title}-${index}`}
                                            className="flex items-start gap-3 border border-[#EEE9E0] bg-[#FAF8F4] p-4"
                                        >
                                            <span className="mt-0.5 text-[10px] font-semibold text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <p className="text-xs font-medium leading-6 text-[#393947]">
                                                    {certification.title}
                                                </p>
                                                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#927B4D]">
                                                    {certification.provider}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Webinars */}
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <Globe
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Webinars & Academic Sessions
                                </h3>
                            </div>

                            <div className="border border-[#E8E1D5] bg-white p-6 sm:p-8">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                        Webinars and Technical Sessions
                                    </p>
                                    <span className="shrink-0 bg-[#F5F0E6] px-3 py-2 text-[10px] font-semibold text-[#927B4D]">
                                        {webinars.length} Activities
                                    </span>
                                </div>

                                <div className="grid gap-x-8 sm:grid-cols-2">
                                    {webinars.map((webinar, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 border-b border-[#EEE9E0] py-4 last:border-0"
                                        >
                                            <span className="shrink-0 pt-1 text-[10px] font-semibold text-[#B49A66]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-xs leading-7 text-[#55535B]">
                                                {webinar}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Faculty Directory */}
                <section className="border-t border-[#EAE4D9] bg-white px-5 py-8 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <Link
                            href="/department/computer-science-and-engineering/faculty-details/faculties-list"
                            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                        >
                            <span aria-hidden="true">←</span>
                            Back to Faculty Directory
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}


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

const keywords = [
    "Multi-view Mammography",
    "Breast Cancer Detection",
    "Cross-view Consistency",
    "Bayesian Uncertainty Quantification",
    "Monte Carlo Dropout",
    "Attention Mechanism",
    "Deep Learning",
];

const researchInterests = [
    "Artificial Intelligence",
    "Deep Learning",
    "Machine Learning",
    "Cloud Computing",
    "Advanced Software Engineering",
    "Operating Systems",
];

const areasOfInterest = [
    "Cloud Computing",
    "Artificial Intelligence",
    "Deep Learning",
    "Machine Learning",
    "Advanced Software Engineering",
    "Advanced Operating System",
];

const courses = [
    ["01", "MCA", "MCA", "1", "Advanced Software Engineering"],
    ["02", "MCA", "MCA", "1", "Data Structures Lab"],
    ["03", "Pharmacy", "B.Pharm", "1", "Communication Skills"],
    ["04", "MCA", "MCA", "2", "Advanced Operating System"],
    ["05", "MCA", "MCA", "2", "Object-Oriented Programming Lab"],
    ["06", "MCA", "MCA", "3", "Cloud Computing"],
    ["07", "MCA", "MCA", "3", "Mini Project"],
    ["08", "MCA", "MCA", "4", "Main Project"],
    ["09", "MCA", "MCA", "4", "Seminar"],
];

/* -------------------------------------------------------
   PUBLICATIONS – 2026
------------------------------------------------------- */

const publications2026 = [
    {
        title: "Phishing Email Detection Using A Context-Aware Hybrid Deep Learning Framework",
        details: "International Journal of Novel Research and Development (IJNRD).",
        url: "https://ijnrd.org/viewpaperforall.php?paper=IJNRD2603091",
    },
    {
        title: "CEHRES Road Map for EHealth: Redesigning PCOS Menstrual-Tracking",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "http://ijcrt.org/viewfull.php?&p_id=IJCRT2603077",
    },
    {
        title: "Generative AI in Software Engineering",
        details: "International Journal for Research in Applied Science and Engineering Technology (IJRASET). DOI: 10.22214/ijraset.2026.77834.",
        url: "https://doi.org/10.22214/ijraset.2026.77834",
    },
    {
        title: "Hybrid Photonic Neural Networks for Ultra-Fast and Energy-Efficient AI Acceleration",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2603163",
    },
    {
        title: "A Comprehensive Systematic Review of Retrieval-Augmented Generation (RAG): Developments, Limitations, and Future Pathways",
        details: "Anvar, Sreeji K. B. (March 2026). International Journal of Engineering and Techniques (IJET), Volume 12, Issue 2.",
    },
    {
        title: "Customer Segmentation Using K-Means Clustering for Data-Driven Business Analytics",
        details: "International Journal of Science and Research (IJSR).",
        url: "https://www.ijsr.net/archive/v15i3/SR26305163023.pdf",
    },
    {
        title: "OncoVision AI: A Review on Artificial Intelligence-Driven Enhanced Breast Cancer Detection",
        details: "International Journal of Engineering and Techniques (IJET), Volume 12, Issue 2, March 2026.",
    },
    {
        title: "Scalable and Secure Workflow Integration Using n8n: A Modern Approach to Enterprise Process Optimization",
        details: "International Journal of All Research Education and Scientific Methods (IJARESM).",
        url: "https://www.ijaresm.com/uploaded_files/document_file/Rahul_K_GnD97.pdf",
    },
];

/* -------------------------------------------------------
   PUBLICATIONS – 2025
------------------------------------------------------- */

const publications2025 = [
    {
        title: "Review on Advanced Deep Learning Design for Early-Stage Breast Image Cancer Detection",
        details: "International Conference on Innovations in Intelligent Computing and Biological Sciences (IICBS – 2025).",
    },
    {
        title: "Early Breast Cancer Detection Using Deep Learning and Flamingo Optimization",
        details: "International Conference on Diversity in Computational Excellence.",
    },
    {
        title: "Light Based Laser Technology",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://www.ijcrt.org/papers/IJCRT2504223.pdf",
    },
    {
        title: "Empowering Diagnostics with Advanced Pattern Recognition and Data Mining",
        details: "International Journal of Research and Analytical Reviews (IJRAR).",
        url: "https://www.ijrar.org/papers/IJRAR25B1192.pdf",
    },
    {
        title: "INFINIBAND: High Speed Networking Solutions",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://ijcrt.org/generatecerti.php?&pid=IJCRT25A3191",
    },
    {
        title: "Bridging Real and Virtual Worlds: Exploring the Combined Potential of AR and VR in Metaverse Evolution",
        details: "Journal of Emerging Technologies and Innovative Research (JETIR).",
        url: "https://www.jetir.org/certificatemanager.php?a_rid=556578",
    },
    {
        title: "Blue Eye Technology",
        details: "International Journal for Research in Applied Science and Engineering Technology (IJRASET).",
        url: "https://www.ijraset.com/best-journal/blue-eye-technology-943",
    },
    {
        title: "Zero Trust and 6G: Enhancing Security in Next Generation Networks",
        details: "International Journal of Current Science (IJCSP).",
        url: "https://www.rjpn.org/ijcspub/papers/IJCSP25B1021.pdf",
    },
    {
        title: "Overview of Magic Leap 1 as an AR Device",
        details: "IJCSP. DOI link supplied in the faculty publication details.",
        url: "https://doi.org/10.22214/ijraset.2025.68177",
    },
    {
        title: "AI Driven Adaptive Honeypots for Dynamic Cyber Threats",
        details: "International Journal of Novel Research and Development (IJNRD).",
        url: "https://www.ijnrd.org/certificatemanager.php?a_rid=305280",
    },
];

/* -------------------------------------------------------
   PUBLICATIONS – 2024
------------------------------------------------------- */

const publications2024 = [
    {
        title: "Analyzing of Mammography Image Breast Cancer Detection Using CNN and Feature Selection",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
    },
    {
        title: "Remotely Operated Video Enhanced Receiver",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://drive.google.com/",
    },
    {
        title: "Ambient Intelligence",
        details: "International Journal of Future Multidisciplinary Research (IJFMR).",
        url: "https://www.ijfmr.com/research-paper.php?id=16581",
    },
    {
        title: "Artificial Intelligence in Medical Diagnostics and Imaging",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://www.ijcrt.org/papers/IJCRT24A3066.pdf",
    },
    {
        title: "Carbon Robotics Laser Weeder: AI Based Solution for Agriculture",
        details: "International Journal of Creative Research Thoughts (IJCRT).",
        url: "https://drive.google.com/",
    },
    {
        title: "Cryptography for Explainable AI: Bridging the Gap Between Security and Interpretability",
        details: "International Journal of Novel Research and Development (IJNRD).",
        url: "https://ijnrd.org/papers/IJNRD2403495.pdf",
    },
    {
        title: "Advancing Road Safety: Harnessing AI for Traffic Management and Violation Detection",
        details: "International Journal of Research and Analytical Reviews (IJRAR).",
        url: "https://ijrar.org/viewfull.php?&p_id=IJRAR24A3433",
    },
    {
        title: "Plasma Antenna: Harnessing Ionised Gas for Next-Generation Wireless Communication",
        details: "International Journal of Research and Analytical Reviews (IJRAR).",
        url: "https://ijrar.org/viewfull.php?&p_id=IJRAR24B1129",
    },
    {
        title: "Recent Advancement in Smart Grid Technology: Future Prospects in the Electrical Power Network",
        details: "International Journal of Novel Research and Development (IJNRD).",
        url: "https://ijnrd.org/viewpaperforall?paper=IJNRD2403546",
    },
    {
        title: "Gi-Fi Technology Using UWB Modulation",
        details: "International Journal for Research in Applied Science and Engineering Technology (IJRASET).",
        url: "https://www.ijraset.com/best-journal/gifi-technology-using-uwb-modulation",
    },
];

/* -------------------------------------------------------
   PUBLICATION NAVIGATION
------------------------------------------------------- */

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
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

                            {publication.url && (
                                <a
                                    href={publication.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                >
                                    View Publication
                                    <ExternalLink size={13} />
                                </a>
                            )}
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

export default function SreejiKBFacultyPage() {
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
                                Ms. Sreeji K B
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    MCA
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    BCA
                                </span>
                                <span className="border border-[#D2B87C]/40 px-4 py-2 text-[10px] tracking-wide text-[#D2B87C]">
                                    Ph.D. Pursuing
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4114
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
                                            Ph.D. Pursuing, MCA, BCA
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
                                            AI, Deep Learning & Breast Cancer Detection
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
                                            Doctoral Status
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Ph.D. Pursuing
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
                                            3+ Years
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
                                title="About Ms. Sreeji K B"
                                description="An introduction to her academic background, teaching experience and research interests."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Sreeji K. B. is a dedicated teacher and researcher with over three years of experience at Nehru College of Engineering and Research Centre, Pampady. She teaches advanced subjects like Software Engineering, Operating Systems, and Cloud Computing, and also guides students in practical labs such as Object-Oriented Programming and Data Structures.
                                </p>

                                <p>
                                    .Currently pursuing her Ph.D. at Bharathiar University, she is actively involved in research and aims to contribute to the field of computing. Her work reflects a strong passion for teaching, continuous learning, and academic growth.

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
                                value="MCA, BCA"
                            />
                            {/* <DetailItem
                                label="Doctoral Status"
                                value="Ph.D. Pursuing"
                            /> */}
                            {/* <DetailItem
                                label="Research Institution"
                                value="Bharathiar University"
                            /> */}
                            <DetailItem
                                label="Teaching Experience"
                                value="Over 3 Years"
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
                            description="Research focus and areas of specialisation in artificial intelligence, machine learning and emerging computing technologies."
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
                                    Artificial Intelligence, Deep Learning and Machine Learning
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests encompass artificial intelligence, deep learning, machine learning and cloud computing. Her research work also explores deep learning-based approaches for breast cancer detection using mammography images, with particular attention to multi-view mammography, cross-view consistency, attention mechanisms and uncertainty quantification.
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
                                                0{index + 1}
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
                            description="Courses and laboratory subjects handled across MCA and Pharmacy programmes."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Stream",
                                "Branch",
                                "Semester",
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
                            description="Research papers and journal contributions listed in the faculty academic profile."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {[
                                { count: "08", year: "2026" },
                                { count: "10", year: "2025" },
                                { count: "10", year: "2024" },
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
                            title="Books"
                            description="Academic book contribution listed in the faculty profile."
                        />

                        <DataTable
                            headers={[
                                "Year",
                                "Title of the Book",
                                "Published By",
                                "ISBN / Edition",
                            ]}
                            rows={[
                                [
                                    "2024",
                                    "Cloud Computing Basics – An Academic Perspective",
                                    "NCERC Media & Publication Division",
                                    "978-81-966538-7-3",
                                ],
                            ]}
                        />
                    </div>
                </section>

                {/* RESEARCHER PROFILES */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Research identifiers and academic profiles associated with Ms. Sreeji K B."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Researcher ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            OUH-5321-2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Atom size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            4114
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://orcid.org/0009-0001-9633-1204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <GraduationCap
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-1 break-all text-sm text-[#393947]">
                                                0009-0001-9633-1204
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
                                href="https://scholar.google.co.in/citations?view_op=new_profile&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <Brain
                                                size={19}
                                                strokeWidth={1.5}
                                            />
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

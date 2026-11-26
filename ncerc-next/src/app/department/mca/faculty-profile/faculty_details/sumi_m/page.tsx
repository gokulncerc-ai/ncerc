
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
    "Farmer Risk Prediction",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "CNN",
    "GRU",
    "LSTM",
    "Hybrid Models",
    "Feature Selection",
    "Recursive Feature Elimination (RFE)",
    "Attention Mechanism",
    "Data Analytics",
    "Predictive Modelling",
    "Agricultural Data Analysis",
    "Risk Assessment",
    "Time Series Analysis",
    "Classification Models",
];

const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Hybrid Machine Learning Models",
];

const areasOfInterest = [
    "Data Science & Machine Learning",
    "Computer Networks",
    "Computer Architecture",
];

const courses = [
    ["01", "MCA", "MCA", "1", "Digital Fundamentals & Computer Architecture"],
    ["02", "MCA", "MCA", "1", "Python Programming Lab"],
    ["03", "MCA", "MCA", "2", "Advanced Computer Networks"],
    ["04", "MCA", "MCA", "2", "Network & System Administration Lab"],
    ["05", "MCA", "MCA", "3", "Data Science & Machine Learning"],
    ["06", "MCA", "MCA", "3", "Data Science Lab"],
    ["07", "NCN", "NCN", "1", "Health Informatics"],
];

const publications2026 = [
    {
        title: "Vibe Coding in Practice: Motivations, Challenges, and a Future",
        details: "IJET",
    },
    {
        title: "Exploring Deep Learning And Machine Learning Approaches For Brain Haemorrhage Detection",
        details: "IJNRD",
        url: "https://ijnrd.org/papers/IJNRD2603034.pdf",
    },
    {
        title: "Rail Safe Vision: A Real-Time AI-Powered Railway Track Surveillance System for Foreign Object Intrusion Detection, Risk Analysis, and Early Warning Signal Alerts",
        details: "IJFMR",
        url: "https://www.ijfmr.com/papers/2026/2/70855.pdf",
    },
    {
        title: "Block chain Beyond Crypto currency: Advancing Decentralized Systems for Secure and Transparent Digital Applications",
        details: "IJET",
    },
    {
        title: "Crop Yield Prediction Using Machine Learning Algorithms for Enhancing Agricultural Productivity and Data-Driven Decision Making",
        details: "IJCRT",
        url: "http://www.ijcrt.org/papers/IJCRT2603299",
    },
    {
        title: "AI-Driven Mental Health Monitoring and Mood Tracking Systems",
        details: "IJREASM",
        url: "https://www.ijaresm.com/uploaded_files/document_file/Mariyam_AAv3FG.pdf",
    },
    {
        title: "Latent Subspace Alignment In Large Audio-Language Models: A Unified Fusion Protocol",
        details: "IJRAR",
        url: "http://www.ijrar.org/papers/IJRAR26A2464",
    },
    {
        title: "Edge AI: Embedded Intelligence for Decentralized Data Analytics",
        details: "IJRASET",
    },
];

const publications2025 = [
    {
        title: "A Hybrid GRU-CNN Deep Learning Approach For Accurate Farmer Risk Prediction",
        details:
            "International Journal of Intelligent Engineering and Systems. DOI: 10.22266/ijies2025.0430.35. Scopus Indexed.",
    },
    {
        title: "An Ecommerce Sentimental Analysis for Customer Product Reviews Using Machine Learning Techniques",
        details: "IJRAR25A2865",
    },
    {
        title: "Leveraging Big Data for Enhanced Weather Prediction and Flight Safety in the Aviation Industry",
        details: "IJRASET67352",
    },
    {
        title: "Leveraging AI for Blockchain Education And Cryptocurrency Risk Management",
        details: "IJCSP25B1036",
    },
    {
        title: "V2V Communication",
        details: "IJRASET68177",
    },
    {
        title: "An Overview of the Cyber Security Risks Associated with Block Chain Technology",
        details: "IJNRD",
        url: "https://ijnrd.org/papers/IJNRD2504085.pdf",
    },
    {
        title: "Security Impacts of Edge Computing On Cloud Infrastructure",
        details: "IJFMR-39585",
    },
    {
        title: "Smart Skin Technology for Enhanced Machine Handling and Advanced Robotic Interaction",
        details: "IJ-1003251007",
    },
    {
        title: "A Systematic Review of Audio Visual Synchronization: Focus on Facial Expression and Lip Movements",
        details: "JETIR2504066",
        url: "http://www.jetir.org/papers/JETIR2504066.pdf",
    },
];

const publications2024 = [
    {
        title: "Innovative Approaches to Agricultural Risk with Machine Learning",
        details:
            "International Journal of Advanced Computer Science and Applications (IJACSA), Volume 15, pp. 1074–1086. Scopus Indexed.",
    },
    {
        title: "Empowering Farmers With AI: Risk Mitigation Through Machine Learning In Smart Irrigation Systems",
        details:
            "Proceedings of International Conference on Circuit Power and Computing Technologies, pp. 197–201. Scopus Indexed.",
    },
    {
        title: "Advancements In Cybersecurity For Connected Vehicles: Harnessing The Power of Machine Learning And Blockchain Technologies",
        details: "IJNRD2403397",
        url: "https://ijnrd.org/viewpaperforall.php?paper=IJNRD2403397",
    },
    {
        title: "Illuminating The Future: A Comprehensive Study On IoT-Enabled Smart Lighting Systems",
        details: "IJCRT2404070",
        url: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2404070",
    },
    {
        title: "Blockchain Fortified: A Holistic Examination Of Cybersecurity Strategies In Distributed Ledger Technology",
        details: "IJRAR24B1071",
        url: "http://ijrar.org/viewfull.php?&p_id=IJRAR24B1071",
    },
    {
        title: "Fido2 Passkey: The Passwordless Future",
        details: "IJRASET59504",
        url: "https://www.ijraset.com/best-journal/fido2-passkey-the-passwordless-future",
    },
    {
        title: "Supply Chain Counterfeit Product Detection System Using Blockchain Technology",
        details: "IJCRT2403920",
        url: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2403920",
    },
    {
        title: "Cogito Connect: Synergizing Artificial General Intelligence (AGI) And Internet of Things (IoT)",
        details: "IJ-0504241005",
        url: "https://www.ijaresm.com/uploaded_files/document_file/S._Deepak_Radhakrishnan_t7Po.pdf",
    },
    {
        title: "A Mobile Based Women Safety Application",
        details: "JETIR2403837",
        url: "https://www.jetir.org/papers/JETIR2403837.pdf",
    },
];

const publications2023 = [
    {
        title: "Sandbox: The Future Of Metaverse, A Secured Testing Framework For Applications",
        details: "IJCRT2303109",
    },
    {
        title: "Modern Highly Enhanced DNA Based Steganography Approach Towards Information Security",
        details: "JETIR2303186",
        url: "http://www.jetir.org/papers/JETIR2303186.pdf",
    },
    {
        title: "A Detailed Analysis Of Electric Vehicle Technology Advancements And Future Prospects",
        details: "IJRASET50247",
    },
    {
        title: "A Chatbot Application By Using Artificial Intelligence And Natural Processing Language",
        details: "JETIR2303122",
        url: "http://www.jetir.org/papers/JETIR2303122.pdf",
    },
    {
        title: "Brain Machine Interface: The Paths, Dangers And Strategies Of Creating Super Humans With Its Dominating Market Analysis",
        details: "IJREAMV09I0197106",
    },
    {
        title: "Progress Towards Green Technologies For A Sustainable Future",
        details: "IJIRT 158635",
        url: "https://ijirt.org/article?manuscript=158635",
    },
    {
        title: "Blue Brain Artificial Intelligence Technology In Human Brain Project",
        details: "IJRAR23A2290",
    },
    {
        title: "Haptic Technology: The Future Of Engagement, Tactile Sensations To Stimulate The Sense Of Touch In A User Experience",
        details: "JASC/4057",
    },
];

const publications2022 = [
    {
        title: "Twitter Emotion Recognition Using Recurrent Neural Network",
        details: "IJ-2105220943",
    },
    {
        title: "Xenobots-World’s First Living Robots Using Artificial Intelligence",
        details: "JETIR2205639",
        url: "http://www.jetir.org/papers/JETIR2205639.pdf",
    },
    {
        title: "Metaverse - The Parallel Universe That Uses Augmented Reality (AR), Virtual Reality (VR), And Block Chain",
        details: "IJNRD181465",
    },
    {
        title: "Assessing The Vulnerabilities In Databases And Securing NoSQL Databases Like MongoDB And Cassandra Databases",
        details: "IJRASET",
        url: "https://doi.org/10.22214/ijraset.2022.42999",
    },
    {
        title: "An Evaluation Of The Smart Phase Of Agriculture Industry With The Implementation Of Internet Of Things (IoT)",
        details: "IJRAR22B2271",
    },
    {
        title: "An Introduction To Business And Developing Using NoSQL Databases Like MongoDB",
        details: "JETIR",
        url: "http://www.jetir.org/papers/JETIR2205709.pdf",
    },
    {
        title: "A Complete Overview Of Non-Fungible Tokens",
        details: "IJCRT2205569",
        url: "http://www.ijcrt.org/papers/IJCRT2205569.pdf",
    },
    {
        title: "DevOps For Collaborative Development In Agile IT",
        details: "IJCSP22B1124",
        url: "https://rjpn.org/IJCSPUB/papers/IJCSP22B1124",
    },
    {
        title: "Darknet And Its Influence In Online Anonymity",
        details: "IJRAR22B2336",
        url: "http://www.ijrar.org/papers/IJRAR22B2336",
    },
];

const books = [
    ["2024", "Advanced Computer Networks – An Academic Perspective", "978-81-966538-0-4"],
    ["2024", "Computer Architecture – An Academic Perspective", "978-81-966538-3-5"],
    ["2024", "Computer Networking – A Beginners Guide", "978-81-966538-4-2"],
    ["2023", "Knowledge Discovery in Data: An Introduction to Data Mining", "978-81-959223-0-7"],
    ["2023", "Health / Nursing Informatics – An Academic Perspective", "978-81-959223-8-3"],
];

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
                                    {emptyMessage || "No details have been provided."}
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

export default function DrSumiMFacultyPage() {
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
                                Department of MCA
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Dr. Sumi M
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
                                    7 Years Teaching Experience
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 3754
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
                                            AI & Hybrid Machine Learning
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
                                            Research Area
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Farmer Risk Prediction
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
                                            7 Years
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
                                title="About Dr. Sumi M"
                                description="An introduction to her academic background, teaching approach and research contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Sumi M is an Assistant Professor with 7 experience in teaching .Research contributions focus on developing intelligent systems for farmer risk prediction using hybrid machine learning approaches, integrating techniques such as CNN, GRU, and LSTM with advanced feature selection methods. Actively involved in teaching, student mentoring, and academic activities, with a focus on providing clear understanding and practical knowledge.

                                </p>

                               

                            </div>
                        </div>

                        {/* PROFESSIONAL DETAILS */}
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
                                value="Department of MCA"
                            />
                            {/* <DetailItem
                                label="Qualification"
                                value="Ph.D, MCA"
                            /> */}
                            {/* <DetailItem
                                label="Teaching Experience"
                                value="7 Years"
                            /> */}
                            {/* <DetailItem
                                label="Researcher ID"
                                value="59296034600 (Scopus)"
                            /> */}
                            <DetailItem
                                label="NCERC Unique ID"
                                value="3754"
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
                            description="Research focus and areas of specialisation in artificial intelligence, data analytics and hybrid machine learning approaches."
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
                                    Artificial Intelligence, Machine Learning
                                    and Hybrid Predictive Models
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests focus on the
                                    development of intelligent predictive
                                    systems using hybrid machine learning
                                    approaches. Particular emphasis is
                                    placed on farmer risk prediction through
                                    the integration of deep learning
                                    architectures, feature selection
                                    techniques and data analytics.
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
                            description="Courses and laboratory subjects handled across MCA and NCN programmes."
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
                            description="Research papers and journal contributions arranged by year, including available publication details and links."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-2xl">
                            {[
                                ["08", "Publications · 2026"],
                                ["09", "Publications · 2025"],
                                ["09", "Publications · 2024"],
                                ["08", "Publications · 2023"],
                                ["09", "Publications · 2022"],
                            ].map(([count, label]) => (
                                <div
                                    key={label}
                                    className="border border-[#E6DFD3] bg-[#FAF7F2] p-5"
                                >
                                    <p className="font-serif text-3xl font-normal text-[#20235A]">
                                        {count}
                                    </p>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                        {label}
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
                            title="Books Published"
                            description="Books published in the areas of computer networks, computer architecture, data mining and informatics."
                        />

                        <DataTable
                            headers={[
                                "Year",
                                "Title of the Book",
                                "ISBN No.",
                            ]}
                            rows={books}
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
                            description="Research identifiers and academic profiles associated with Dr. Sumi M."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Scopus Author ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            59296034600
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
                                            3754
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://orcid.org/0009-0009-7807-9971"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                            <GraduationCap size={19} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                ORCID Profile
                                            </p>
                                            <p className="mt-1 break-all text-sm text-[#393947]">
                                                0009-0009-7807-9971
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
                                href="https://share.google/73r6IlohNraBMKNTt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-[#E6DFD3] bg-[#FAF7F2] p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
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

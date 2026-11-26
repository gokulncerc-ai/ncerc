
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
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Deep Learning",
    "Neural Networks",
    "Transformer Models",
    "Mental Health Prediction",
    "Depression Detection",
    "Behavioural Analytics",
    "Psychological Data Analysis",
];

const researchInterests = [
    "Deep Learning",
    "Machine Learning",
    "Mental Health Analytics",
    "Affective Computing",
    "Natural Language Processing",
    "Time-Series Analysis",
    "Healthcare Data Mining",
    "Artificial Intelligence in Healthcare",
];

const areasOfInterest = [
    "Data Structures",
    "Computer Networks",
    "Cryptography and Cyber Security",
    "Deep Learning",
    "Machine Learning",
];

const courses = [
    ["01", "MCA", "MCA", "I", "Advanced Data Structures"],
    ["02", "MCA", "MCA", "I", "Python Programming Lab"],
    ["03", "MCA", "MCA", "II", "Cryptography & Cyber Security"],
    ["04", "MCA", "MCA", "II", "Networking & System Administration Lab"],
    ["05", "MCA", "MCA", "III", "Data Science & Machine Learning"],
    ["06", "MCA", "MCA", "III", "Data Science Lab"],
    ["07", "B.Pharm", "B.Pharm", "I", "Communication Skill"],
];

/* -------------------------------------------------------
   PUBLICATIONS
------------------------------------------------------- */

const publications2026 = [
    {
        title: "Necrobotics: The Integration of Biotic Materials as Ready to Use Actuators and Chassis",
        details:
            "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN: 2455-6211, Volume 14, Issue 2, February 2026.",
        url: "https://www.ijaresm.com/uploaded_files/document_file/Sanjay_Kumar_S9fh5.pdf",
    },
    {
        title: "DNA Data Storage Systems: An Extended Review of Architectures, Workflows, Challenges, and Research Directions",
        details:
            "International Journal of Novel Research and Development, Volume 11, Issue 2, pp. d313–d316.",
        url: "https://ijnrd.org/papers/IJNRD2602348.pdf",
    },
    {
        title: "Palm Based Bio-Metric Authentication Framework: Secure Contactless Payments",
        details:
            "IJRASET, Paper ID: IJRASET77708, published on 26 February 2026. ISSN: 2321-9653.",
        url: "https://doi.org/10.22214/ijraset.2026.77708",
    },
    {
        title: "Next-Generation AI Agents: Architectures, Capabilities, and Challenges in Autonomous Task-Executing Systems",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 14, Issue 2, pp. g71–g77, February 2026.",
        url: "http://www.ijcrt.org/papers/IJCRT2602704.pdf",
    },
    {
        title: "Advanced Microwave Photonic Radar Systems Integrated with Artificial Intelligence: Architectures, Algorithms, and Publishing Guidelines",
        details:
            "International Journal for Multidisciplinary Research (IJFMR), IJFMR260270432, Volume 8, Issue 2, March–April 2026.",
        url: "https://www.ijfmr.com/papers/2026/2/70432.pdf",
    },
    {
        title: "A Data Centric Paradigm for Artificial Intelligence: Systematic Methodologies, Industrial Impacts and Workflow Architectures",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN: 2348-1269, P-ISSN: 2349-5138, Volume 13, Issue 1, pp. 823–828, February 2026.",
        url: "http://www.ijrar.org/IJRAR26A2502.pdf",
    },
    {
        title: "Advanced Wearable Haptic Feedback Systems for Realistic Touch Sensations in Virtual Reality",
        details:
            "International Journal of Engineering and Techniques (IJET), Volume 12, Issue 2, March 2026.",
        url: "https://zenodo.org/records/18845709",
    },
    {
        title: "Neuralink-Based Brain-Computer Interfaces: System and Operational Methodology of Neuralink BCI",
        details:
            "International Journal of Innovative Science and Research Technology (IJISRT), IJISRT26MAR472, pp. 1029–1032. DOI: 10.38124/ijisrt/26mar472.",
    },
];

const publications2025 = [
    {
        title: "Leveraging Deep Learning for Depression Diagnosis in Women: A Hybrid CNN GRU-MLP Fusion Model",
        details:
            "International Journal of Intelligent Engineering and Systems, published on 18 March 2025. DOI: 10.22266/ijies2025.0531.39. Scopus Indexed.",
    },
    {
        title: "Smart Sight for the Blind Using Earphones",
        details:
            "International Journal for Research in Applied Science and Engineering Technology (IJRASET), ISSN: 2321-9653, Volume 13, Issue III, March 2025.",
        url: "https://doi.org/10.22214/ijraset.2025.67284",
    },
    {
        title: "From Simulation to Reality: Redefining Medical Competence with SimMan",
        details:
            "International Journal of Current Science (IJCSPUB), ISSN: 2250-1770, Volume 15, Issue 1, pp. 21–27, March 2025.",
        url: "https://rjpn.org/IJCSPUB/papers/IJCSP25A1113.pdf",
    },
    {
        title: "Transforming the Future of Healthcare: The Power of Blockchain Technology",
        details:
            "International Journal of Novel Research and Development (IJNRD), Volume 10, Issue 3, March 2025. ISSN: 2456-4184.",
        url: "https://ijnrd.org/papers/IJNRD2503072.pdf",
    },
    {
        title: "Smart Wearable Technologies for Real-Time Mental Health Monitoring: A Holistic Approach to Early Detection and Intervention",
        details:
            "International Journal of Scientific Research in Engineering and Management (IJSREM), Volume 09, Issue 04, April 2025. ISSN: 2582-3930. DOI: 10.55041/IJSREM43872.",
    },
    {
        title: "Tile Pro and the Internet of Things (IoT): A Review of the Current State and Future Directions of IoT-Enabled Tracking Devices",
        details:
            "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN: 2455-6211, Volume 13, Issue 4, April 2025.",
        url: "https://www.ijaresm.com/tile-pro-and-the-internet-of-things-iot-a-review-of-the-current-state-and-future-directions-of-iot-enabled-tracking-devices",
    },
    {
        title: "Cellebrite Universal Forensic Extraction Device for Digital Evidence Analysis",
        details:
            "International Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 12, Issue 3, pp. b729–b732, March 2025.",
        url: "http://www.jetir.org/papers/JETIR2503181.pdf",
    },
    {
        title: "Neurofeedback from Dream Control: A Paradigm Shift in Cognitive and Emotional Regulation",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 13, Issue 4, pp. b972–b975, April 2025.",
        url: "http://www.ijcrt.org/papers/IJCRT2504241.pdf",
    },
    {
        title: "Forest Fire Detection and Monitoring Through Acoustic Signal Processing with Deep Learning",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), IJRAR25A2771, Volume 12, Issue 1, March 2025.",
        url: "http://www.ijrar.org/papers/IJRAR25A2771.pdf",
    },
    {
        title: "A Cognitive Framework for Memory Reconstruction in Artificial Systems",
        details:
            "International Journal for Research in Applied Science & Engineering Technology (IJRASET), ISSN: 2321-9653, Volume 13, Issue IV, April 2025.",
        url: "https://www.ijraset.com/best-journal/a-cognitive-framework-for-memory-reconstruction-in-artificial-systems-832",
    },
];

const publications2024 = [
    {
        title: "Empowering Mental Health: CNN and LSTM Fusion for Timely Depression Detection in Women",
        details:
            "International Journal of Electrical and Computer Engineering Systems (IJECES), Volume 15, Issue 8, pp. 631–640, September 2024. Scopus Indexed Journal.",
        url: "https://doi.org/10.32985/ijeces.15.8.1",
    },
    {
        title: "Empowering Women's Mental Health: A Critical Examination of Depression Detection",
        details:
            "2024 7th International Conference on Circuit Power and Computing Technologies (ICCPCT), pp. 158–164. Scopus Indexed. Electronic ISBN: 979-8-3503-7281-6.",
        url: "https://doi.org/10.1109/ICCPCT61902.2024.10673296",
    },
    {
        title: "Enhancing Military Operation Through Integrated Visual Augmentation System (IVAS)",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN: 2348-1269, P-ISSN: 2349-5138, Volume 11, Issue 1, pp. 42–47, March 2024.",
        url: "http://www.ijrar.org/IJRAR24A3195.pdf",
    },
    {
        title: "Breakthrough in Brain-Computer Interface Technology Paves the Way for Mind-Controlled Devices (BCI)",
        details:
            "IJRASET, Paper ID: IJRASET60400, published on 16 April 2024. ISSN: 2321-9653.",
        url: "https://doi.org/10.22214/ijraset.2024.60400",
    },
    {
        title: "AI-Based Assistance System for Visually Impaired: Object Detection & Smart Navigation",
        details:
            "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN: 2455-6211, Volume 12, Issue 4, April 2024.",
    },
    {
        title: "Microfluidic Integration: Revolutionizing Lab on a Chip Technology for Compact and Efficient Biomedical Analysis",
        details:
            "International Journal of Novel Research and Development, Volume 9, Issue 3, pp. e200–e204.",
        url: "https://ijnrd.org/papers/IJNRD2403426.pdf",
    },
    {
        title: "Revolutionizing Software Development: The Rise of No Code/Low Code Development Solutions in Digital Era",
        details:
            "International Journal for Multidisciplinary Research, Volume 6, Issue 2, March–April 2024, published on 7 April 2024.",
        url: "https://doi.org/10.36948/ijfmr.2024.v06i02.16706",
    },
    {
        title: "Computers in Industry Hybridizing Humans and Robots: An RPA Horizon Envisaged from the Trenches",
        details:
            "International Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 11, Issue 4, pp. a356–a360, April 2024.",
        url: "http://www.jetir.org/papers/JETIR2404048.pdf",
    },
    {
        title: "The Evolution of Automation: From Cyber Physical System in Industry 4.0 to Cobots in Industry 5.0",
        details:
            "International Journal of Innovative Research in Technology (IJIRT), Volume 10, Issue 10, pp. 883–888.",
        url: "https://ijirt.org/article?manuscript=162721",
    },
    {
        title: "Ring Payment: Pioneering Contactless Transactions with Biometric Fingerprint Security",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 12, Issue 3, pp. h433–h439, March 2024.",
        url: "http://www.ijcrt.org/papers/IJCRT2403886.pdf",
    },
];

const publications2023 = [
    {
        title: "Formulating a Blockchain Based E-Wallet to Facilitate Coin Exchange and Digital Asset Transactions Through Mobile Application Platforms",
        details:
            "International Conference on Recent Advances in Science, Technology, Engineering, Management and Social Science (RASTEMS-2023), held during 6–8 October 2023.",
    },
    {
        title: "Scope and Resolution in Neural Prosthetics and Concerns for the Whole Brain Emulation",
        details: "JASC/4059, March 2023.",
        url: "https://j-asc.com/index.php/volume-x-issue-iii-march-2023/",
    },
    {
        title: "The Expanded Frame in Smart Dust IoT as a Dynamic Plane Prediction Technique",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN: 2348-1269, P-ISSN: 2349-5138, Volume 10, Issue 1, pp. 126–131, March 2023.",
        url: "http://www.ijrar.org/IJRAR23A2486.pdf",
    },
    {
        title: "Exploring Smart-Quill Technology: Chirography Remembrance in Addition to Impression Corroboration",
        details:
            "IJRASET, Paper ID: IJRASET50046, published on 2 April 2023. ISSN: 2321-9653.",
        url: "https://doi.org/10.22214/ijraset.2023.50046",
    },
    {
        title: "Future of ChatGPT: An Exploratory Study on Recent Trends",
        details:
            "International Journal of Innovative Research in Technology (IJIRT), Volume 9, Issue 10, pp. 410–414.",
        url: "https://ijirt.org/article?manuscript=158688",
    },
    {
        title: "Lighting the Way Forward: Exploring the Exciting Advancements and Applications of LiDAR Technology",
        details:
            "International Journal of Research Culture Society, ISSN(O): 2456-6683, Volume 7, Issue 4, April 2023.",
    },
    {
        title: "Revolutionizing Aquatic Life: A Comprehensive System for Monitoring, Controlling and Optimizing Aquarium Environments with the Power of IoT Technology",
        details:
            "International Journal of Computational Engineering Research (IJCER), Volume 13, Issue 1, January–February 2023.",
        url: "https://www.ijceronline.com/papers/Vol13_issue1/D13012832.pdf",
    },
    {
        title: "Design and Development of a Wearable IoT-Based Device for Children's Security",
        details:
            "Journal of Emerging Technologies and Innovative Research (JETIR), JETIR2303114, Volume 10, Issue 3, March 2023.",
        url: "https://www.jetir.org/papers/JETIR2303114.pdf",
    },
    {
        title: "A Chameleon Processor-Directed Method for Concealing Configuration Latency",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), Volume 11, Issue 3, March 2023. ISSN: 2320-2882.",
        url: "https://ijcrt.org/papers/IJCRT2303262.pdf",
    },
];

const publications2022 = [
    {
        title: "An Assessment Model for Prediction and Analysis of IVF Using Application of Machine Learning and Artificial Intelligence Techniques",
        details:
            "Karpagam JCS, Volume 17, Issue 4, July–August 2022.",
        url: "https://kjcs.karpagampublications.com/submission/771/view-abstract/an-assessment-model-for-the-prediction-and-analysis-of-ivf-using-application-of-machine-learning-and-artificial-intelligence-techniques/",
    },
    {
        title: "Artificial Neural Network-Based Machine Learning for Wireless Networks",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN: 2348-1269, P-ISSN: 2349-5138, Volume 9, Issue 2, pp. 848–852, May 2022.",
        url: "http://www.ijrar.org/IJRAR22B2438.pdf",
    },
    {
        title: "A Transparent Plastic Memory Technology Using a Polymer Polyethylene Dioxythiopene",
        details:
            "International Journal of All Research Education & Scientific Methods, Issue 5, May 2022.",
        url: "https://www.ijaresm.com/a-transparent-plastic-memory-technology-using-a-polymer-polyethylene-dioxythiopene",
    },
    {
        title: "Gesture Recognition Technology for Interpreting Human Gesture via Mathematical Algorithms",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 10, Issue 5, pp. e650–e658, May 2022.",
        url: "http://www.ijcrt.org/papers/IJCRT2205530.pdf",
    },
    {
        title: "Face Restoration Using Generative Facial Prior (GFP)",
        details:
            "International Journal of Creative Research Thoughts (IJCRT), ISSN: 2320-2882, Volume 10, Issue 5, pp. f465–f471, May 2022.",
        url: "http://www.ijcrt.org/papers/IJCRT2205636.pdf",
    },
    {
        title: "Improving Privacy and Security in Multitenant Cloud ERP Systems",
        details:
            "International Journal of Current Science (IJCSPUB), Volume 12, Issue 2, May 2022. ISSN: 2250-1770.",
        url: "https://rjpn.org/ijcspub/papers/IJCSP22B1137.pdf",
    },
    {
        title: "Understanding the Application of Digital Twin Technology in Different Fields",
        details:
            "International Journal of Novel Research and Development, Volume 7, Issue 5, pp. 1024–1028, May 2022.",
        url: "https://ijnrd.org/papers/IJNRD2205124.pdf",
    },
    {
        title: "Honeypots – Realization and Testing of Computerized Assault",
        details:
            "International Journal of Research and Analytical Reviews (IJRAR), E-ISSN: 2348-1269, P-ISSN: 2349-5138, Volume 9, Issue 2, pp. 712–715, May 2022.",
        url: "http://www.ijrar.org/IJRAR22B2297.pdf",
    },
    {
        title: "A Zero Trust Framework Security to Prevent Data Breaches and Mitigate the Cloud Network Attacks",
        details:
            "International Journal for Research in Applied Science and Engineering Technology (IJRASET), Volume 10, Issue V, pp. 3530–3538. ISSN: 2321-9653.",
    },
    {
        title: "The Path to Global Broadband Access in Rural Areas Using Daknet Technologies",
        details:
            "International Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 9, Issue 5, pp. f236–f238, May 2022.",
        url: "http://www.jetir.org/papers/JETIR2205637.pdf",
    },
    {
        title: "A Survey on Silent Sound Technology Using Electromyography and Image Processing",
        details:
            "International Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 9, Issue 5, pp. h310–h319, May 2022.",
        url: "http://www.jetir.org/papers/JETIR2205841.pdf",
    },
];

/* -------------------------------------------------------
   BOOK PUBLICATIONS
------------------------------------------------------- */

const books = [
    {
        year: "2025",
        date: "12 August 2025",
        title: "Integrating Machine Learning in IoT Environments",
        publisher: "Leilani Katie Publication and Press",
        isbn: "978-93-6348-757-4",
        edition: "1",
        url: "https://leilanikatiepublication.org/course/integrating-machine-learning-in-iot-environments/",
    },
    {
        year: "2025",
        date: "30 August 2025",
        title: "Machine Learning Based Online Assessment of Students Academic Performance in Moodle Learning Management System, Artificial Intelligence and IoT in Online Education Systems",
        publisher: "Scrivener Publishing",
        isbn: "9781394302635",
        edition: "1",
        url: "https://www.scrivenerpublishing.com/cart/title.php?id=1165",
    },
    {
        year: "2024",
        date: "25 July 2024",
        title: "Data Science and Machine Learning – An Academic Perspective",
        publisher: "NCERC Media & Publication Division",
        isbn: "978-81-959223-2-1",
        edition: "1",
    },
    {
        year: "2024",
        date: "23 July 2024",
        title: "Computer Networking: A Beginners Guide",
        publisher: "Not specified",
        isbn: "978-81-966538-0-4",
        edition: "1",
    },
    {
        year: "2023",
        date: "16 April 2024",
        title: "Advanced Computer Networks – An Academic Perspective",
        publisher: "Not specified",
        isbn: "978-81-966538-0-4",
        edition: "1",
    },
    {
        year: "2023",
        date: "08 January 2023",
        title: "Advanced Data Structures – An Academic Perspective",
        publisher: "Not specified",
        isbn: "978-81-959223-1-4",
        edition: "1",
    },
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
   BOOK LIST
------------------------------------------------------- */

function BookList() {
    return (
        <div className="space-y-5">
            {books.map((book, index) => (
                <article
                    key={`${book.title}-${index}`}
                    className="grid gap-5 border border-[#E6DFD3] bg-white p-5 sm:grid-cols-[70px_1fr] sm:p-6"
                >
                    <div className="flex h-[70px] w-[70px] items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                        <BookOpen size={27} strokeWidth={1.3} />
                    </div>

                    <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                {book.year}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
                            <span className="text-[10px] text-[#77747A]">
                                {book.date}
                            </span>
                        </div>

                        <h3 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                            {book.title}
                        </h3>

                        <div className="mt-4 grid gap-3 text-xs leading-6 text-[#69666B] sm:grid-cols-2">
                            <p>
                                <span className="text-[#927B4D]">Publisher:</span>{" "}
                                {book.publisher}
                            </p>
                            <p>
                                <span className="text-[#927B4D]">ISBN:</span>{" "}
                                {book.isbn}
                            </p>
                            <p>
                                <span className="text-[#927B4D]">Edition:</span>{" "}
                                {book.edition}
                            </p>
                        </div>

                        {book.url && (
                            <a
                                href={book.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                            >
                                View Book
                                <ExternalLink size={13} />
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function DivyaPFacultyPage() {
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
                                Ms. Divya P
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    MCA
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Sc. Mathematics
                                </span>
                                <span className="border border-[#D2B87C]/40 px-4 py-2 text-[10px] tracking-wide text-[#D2B87C]">
                                    Ph.D. Pursuing
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 3753
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
                                            MCA, M.Sc. Mathematics
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
                                            Machine Learning & Mental Health Analytics
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
                                            5 Years
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
                                title="About Ms. Divya P"
                                description="An introduction to her academic background, teaching experience, research interests and professional contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Divya P is an enthusiastic and committed academician with 5 years of teaching experience, currently working as an Assistant Professor in the MCA Department at Nehru College of Engineering and Research Centre. She is actively involved in research and is pursuing a Ph.D. in Machine Learning under the guidance of Dr. S. Hemalatha, Associate Professor at Karpagam Academy of Higher Education.
                                </p>

                                <p>
                                    Her areas of specialization include Data Structures, Computer Networks, Cryptography and Cyber Security, Data Science, and Machine Learning. She is recognized for her student-focused teaching approach and her commitment to integrating emerging technologies into her academic practice.
                                </p>

                                <p>
                                    With a strong foundation in both teaching and research, Divya P continues to contribute to the academic community through knowledge sharing, research activities, and student mentoring in various technical domains.

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
                                value="MCA, M.Sc. Mathematics"
                            />
                            <DetailItem
                                label="Teaching Experience"
                                value="5 Years"
                            />
                            <DetailItem
                                label="Doctoral Status"
                                value="Ph.D. Pursuing in Machine Learning"
                            />
                            {/* <DetailItem
                                label="Research Supervisor"
                                value="Dr. S. Hemalatha, Associate Professor, Karpagam Academy of Higher Education"
                            /> */}
                            {/* <DetailItem
                                label="NCERC Unique ID"
                                value="3753"
                            /> */}
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
                            description="Research focus and areas of specialisation in artificial intelligence, intelligent systems, healthcare analytics and emerging computing technologies."
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
                                    Machine Learning, Deep Learning and Mental Health Analytics
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Her research interests span machine
                                    learning, deep learning, affective
                                    computing and natural language processing,
                                    with particular attention to mental health
                                    analytics, depression detection and
                                    artificial intelligence applications in
                                    healthcare.
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
                            description="Courses and laboratory subjects handled across MCA and B.Pharm academic programmes."
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

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-3xl">
                            {[
                                { year: "2026", count: publications2026.length },
                                { year: "2025", count: publications2025.length },
                                { year: "2024", count: publications2024.length },
                                { year: "2023", count: publications2023.length },
                                { year: "2022", count: publications2022.length },
                            ].map((item) => (
                                <div
                                    key={item.year}
                                    className="border border-[#E6DFD3] bg-[#FAF7F2] p-5"
                                >
                                    <p className="font-serif text-3xl font-normal text-[#20235A]">
                                        {String(item.count).padStart(2, "0")}
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
                            description="Books and academic publications authored by Ms. Divya P."
                        />

                        <BookList />
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
                            description="Research identifiers and academic profiles associated with Ms. Divya P."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Scopus Researcher ID
                                        </p>
                                        <p className="mt-1 text-sm text-[#393947]">
                                            59971803000
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
                                            3753
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://orcid.org/0009-0000-5865-6182"
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
                                                0009-0000-5865-6182
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
                                href="https://scholar.google.co.in/citations?view_op=list_works&hl=en&user=jP6ir8EAAAAJ"
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

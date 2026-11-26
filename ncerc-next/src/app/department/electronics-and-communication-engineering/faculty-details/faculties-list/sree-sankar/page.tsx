import {
    ArrowDown,
    Award,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    "Medical Imaging",
    "Internet of Things",
    "Medical IoT",
    "Plant Disease Detection",
    "Sustainable Technology",
    "Teaching Learning Process",
];

const keywords = [
    "IoT",
    "MIoT",
    "Image Processing",
    "Machine Learning",
    "Deep Learning",
];

const areasOfInterest = [
    "Communication Theory",
    "Antenna and Wave Propagation",
    "Analog and Digital Communication",
    "Wireless and Optical Communication",
    "Principles of Industry 4.0",
];

const courses = [
    ["1", "2026", "B.Tech.", "S8", "ECE", "Satellite Communication"],
    ["2", "2026", "B.Tech.", "S6", "ECE", "Electromagnetics"],
    ["3", "2026", "B.Tech.", "S6", "ECE", "Communication Lab"],
    ["4", "2026", "M.Tech.", "S2", "VLSI Design", "Design Lab-2"],
    ["5", "2025", "B.Tech.", "S7", "ECE", "Microwaves and Antennas"],
    ["6", "2025", "B.Tech.", "S7", "ECE", "Electromagnetics Lab"],
    ["7", "2025", "B.Tech.", "S4", "ECE", "Micro Electronics"],
    ["8", "2025", "B.Tech.", "S1", "ECE", "Basics of Electronics Engineering"],
    ["9", "2025", "B.Tech.", "S1", "EEE", "Basics of Electronics Engineering"],
    ["10", "2025", "M.Tech.", "S1", "VLSI Design", "CMOS VLSI Design"],
];

const publications = [
    {
        year: "2026",
        title:
            "Optimized biomedical image analysis system for colon and lung cancer detection using deep learning algorithm to enhance diagnostic and clinical decision support",
        details: "SMART SCIENCE JOURNAL – TAYLOR SERIES, under Review",
    },
    {
        year: "2026",
        title:
            "Advances in Low-Power CMOS VLSI: Circuit-Level Optimization and Data-Driven Power Modeling",
        details:
            "International Conference on Modern Trends in Engineering, Science, Management, and Technology (MESMT – 2026), organized by TDMNS College & XIRD",
    },
    {
        year: "2026",
        title:
            "Recent Advances in Pepper Leaf Disease Detection Using Machine Learning Techniques",
        details:
            "International Conference on Modern Trends in Engineering, Science, Management, and Technology (MESMT – 2026), organized by TDMNS College & XIRD",
    },
    {
        year: "2026",
        title:
            "Design and Implementation of an Automatic Vehicle Headlight Dimmer System Using LDR",
        details:
            "International Conference on Modern Trends in Engineering, Science, Management, and Technology (MESMT – 2026), organized by TDMNS College & XIRD",
    },
    {
        year: "2026",
        title:
            "AI-based Image Analysis for Leaf Diseases Detection: A Review of Tulsi and Tomato Plants",
        details:
            "International Conference on Impact of Artificial Intelligence (AI) in Education, Management, Industry and Society, organized by Tamil Nadu Teachers Education University Learning Resources, Chennai",
    },
    {
        year: "2026",
        title:
            "Revolutionizing Engineering Education: Innovative Teaching and Active Learning Strategies",
        details:
            "In Multidisciplinary Research Performance and Global Academic Excellence: Arts, Science and Humanities. ISBN: 978-81-996376-8-9",
    },
    {
        year: "2026",
        title:
            "SMART ECO: AI PLANT CARE POT: A Novel approach to intelligent Botanical Monitoring and Automation",
        details:
            "National Research Conference & Kerala Higher Education EXPO 2026, organized by the Department of Higher Education, Government of Kerala State Higher Education Council, held at Govt. College for Women, Trivandrum",
    },
    {
        year: "2026",
        title:
            "Automated Kidney Stone Detection using Medical Imaging and Computational Intelligence",
        details:
            "Archeo Sciences Journal, ISSN: 19060-1360, Volume 19 Issue 1, 2026",
    },
    {
        year: "2025",
        title: "Smart IoT Enabled Maintenance for Enhancing Solar Panel Efficiency",
        details:
            "2nd International Conference on Recent Trends in Electrical, Electronics and Computing Technologies, Vaagdevi Engineering College – IEEE, November 2025",
    },
    {
        year: "2025",
        title:
            "Real Time Tremor compensation using a smart assistive spoon for Parkinsons disease",
        details:
            "7th International Conference on Intelligent Communication, Control and Devices, Dehradun, India – Springer Publisher",
    },
    {
        year: "2025",
        title:
            "Design & Development of a multi-sensor robotic system for search and rescue missions",
        details:
            "International Journal of Novel Research and Development, Volume 10, Issue 8, August 2025",
    },
    {
        year: "2025",
        title:
            "Design and implementation of an Arduino based railway Crossing control system",
        details:
            "ICTACT Journal on Sciences and Innovation Engineering, Volume 02, Issue 01, August 2025",
    },
    {
        year: "2025",
        title:
            "Design and Implementation of an Arduino-Based Automatic Railway Crossing Control System",
        details:
            "International Journal of Sciences and Innovation Engineering (Peer-Reviewed, Open Access, Fully Refereed International Journal), E-ISSN: 3049-0251",
    },
    {
        year: "2025",
        title:
            "Design and Development of a Multi-Sensor Robotic System for Search and Rescue Missions",
        details:
            "International Journal of Novel Research and Development, an international Open Access, Peer-reviewed, refereed Journal, Volume 10, Issue 8, August 2025, ISSN: 2456-4184",
    },
    {
        year: "2025",
        title: "Advanced Healthcare Solutions Through AI and 5G Connectivity",
        details:
            "International Journal of Progressive Research in Engineering Management and Science, Volume 05, Issue 08, August 2025, pp. 1255–1261, e-ISSN: 2583-1062",
    },
    {
        year: "2025",
        title:
            "Light Fidelity and IoT for Smart Monitoring: A Comprehensive Literature Review",
        details:
            "International Journal of Engineering Development and Research, Volume 13 Issue 3, September 2025",
    },
    {
        year: "2025",
        title:
            "Real time cardiac health monitoring with DSNN on low power VLSI architecture",
        details:
            "International Journal of Sciences and Innovation Engineering, Volume 2 Issue 9, 2025",
    },
    {
        year: "2025",
        title:
            "FPGA-Based Digital Twins for Real-Time Monitoring of Power Converters: A Review",
        details:
            "International Journal of Scientific Research in Engineering & Management, Volume 09, Issue 09, September 2025",
    },
    {
        year: "2025",
        title:
            "Cluster Based Agricultural IoT: A Real-World Hardware Evolution",
        details:
            "International Research Journal of Modernization in Engineering Technology and Science, Volume 07, Issue 08, August 2025, e-ISSN: 2582-5208",
    },
    {
        year: "2025",
        title:
            "Automated Detection and Classification of Fresh and Rotten Fruits Using Raspberry Pi and Machine Learning",
        details:
            "International Conference on Intelligent Systems and Technologies (ICIST 2025), organized by Vidya Academy of Science and Technology Technical Campus",
    },
    {
        year: "2025",
        title:
            "Early Detection of Breast Cancer Using AI and Deep Learning: A Systematic Review",
        details:
            "National Conference on Future Trends on Biomedical Engineering, organized by Bharat Institute of Higher Education and Research, Chennai",
    },
    {
        year: "2025",
        title:
            "A comprehensive Review on AI and IoT- Based Smart Plant Care System for Sustainable Agriculture",
        details:
            "National Conference on Emerging Smart Technologies for Societal Development (NCESTSD 2025), organized by Amity University Lucknow Campus",
    },
    {
        year: "2025",
        title:
            "A Comprehensive Survey on Wide Angle Optical Wireless Communication",
        details:
            "International Journal of Scientific Research in Engineering and Management, Volume 9, Issue 8, September 2025",
    },
];

const books = [
    {
        year: "2026",
        date: "January",
        title: "Biomedical Engineering Essentials: Smart MCQ Edition",
        publisher: "Miramax International Publications",
        isbn: "978-81-996458-5-1",
    },
    {
        year: "2025",
        date: "December",
        title: "Computer Networks",
        publisher: "Maxelo International Publications",
        isbn: "978-81-995422-5-9",
    },
    {
        year: "2025",
        date: "November",
        title: "Principles of Sustainable Engineering",
        publisher: "Surya Publications",
        isbn: "978-81-989791-9-3",
    },
    {
        year: "2025",
        date: "November",
        title: "Principles of Disaster Management and Risk Reduction",
        publisher: "Surya Publications",
        isbn: "978-81-989791-6-2",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "books", label: "Books" },
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
}: {
    headers: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
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

export default function SreeSankarFacultyPage() {
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
                                Department of Electronics and Communication Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Mr. Sree Sankar J
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Communication Systems
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E – Electronics and Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                                        NCERC ID: 4228
                                    </span>
                                </div>

                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                                    Researcher ID: RRK21BM2001
                                </span>
                            </div>
                        </div>

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
                                            Ph.D. Pursuing, M.E., B.E.
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
                                            Biomedical Imaging &amp; Medical IoT
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
                                            Publications
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            23 Listed Publications
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
                                title="About Sree Sankar J"
                                description="Academic background, teaching experience, research contributions and institutional involvement."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Mr. Sree Sankar J is a distinguished academician and researcher in Electronics and Communication Engineering. He has strong expertise in biomedical imaging, machine learning, and artificial intelligence applications in healthcare. He holds a B.E. and M.E. in Communication Systems from Sivaji College of Engineering & Technology, affiliated with Anna University, Chennai. He is currently pursuing his Ph.D. in Biomedical Imaging at Karunya Institute of Technology and Sciences, Coimbatore. He is working as an Assistant Professor at Nehru College of Engineering & Research Centre, Pampady.
                                </p>

                                <p>
                                    He has a deep passion for teaching and mentoring students in various core communication subjects. His teaching areas include Communication Theory, Antenna and Wave Propagation, Analog and Digital Communication, Wireless and Optical Communication, and Industry 4.0. He has contributed significantly to curriculum development, academic planning, and accreditation processes like NAAC and NBA. He has published over 15 journal papers and presented more than 35 conference papers, earning several Best Paper Awards. He has also authored books, filed patents, and actively participated in FDPs and certifications to enhance his academic and research excellence.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="border border-[#E4DCCE] bg-white p-5">
                                    <GraduationCap
                                        size={21}
                                        className="mb-4 text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Educational Qualification
                                    </p>
                                    <p className="mt-3 font-serif text-base leading-6 text-[#20235A]">
                                        M.E. – Communication Systems
                                    </p>
                                    <p className="mt-2 text-xs leading-6 text-[#66636B]">
                                        B.E. – Electronics and Communication Engineering
                                    </p>
                                </div>

                                <div className="border border-[#E4DCCE] bg-white p-5">
                                    <Microscope
                                        size={21}
                                        className="mb-4 text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Doctoral Research
                                    </p>
                                    <p className="mt-3 font-serif text-base leading-6 text-[#20235A]">
                                        Biomedical Imaging
                                    </p>
                                    <p className="mt-2 text-xs leading-6 text-[#66636B]">
                                        Pursuing Ph.D. at Karunya Institute of Technology and Sciences
                                    </p>
                                </div>
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
                                value="Electronics and Communication Engineering"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="4228"
                            />
                            <DetailItem
                                label="Researcher ID"
                                value="RRK21BM2001"
                            />
                            <DetailItem
                                label="Ph.D. Research"
                                value="Biomedical Imaging"
                            />
                            <DetailItem
                                label="Research Institution"
                                value="Karunya Institute of Technology and Sciences, Coimbatore"
                            />

                            <div className="mt-5 space-y-3">
                                <a
                                    href="https://orcid.org/0000-0002-1128-2993"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    ORCID Profile
                                    <ExternalLink size={14} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?user=g-RxYa4AAAAJ&hl=en"
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
                            description="Research domains spanning biomedical imaging, intelligent healthcare applications, IoT and communication engineering."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="grid gap-3 sm:grid-cols-2">
                                {researchInterests.map((interest, index) => (
                                    <div
                                        key={interest}
                                        className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <span className="font-serif text-lg text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
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
                                    Key terms associated with his research and academic work.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {keywords.map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border border-[#D2B87C]/35 px-3 py-2 text-[10px] leading-4 text-[#E9D9B5]"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border border-[#E5DED1] bg-[#FAF7F2] p-6 sm:p-7">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                Area of Interest
                            </p>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {areasOfInterest.map((area, index) => (
                                    <div
                                        key={area}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1 text-xs font-semibold text-[#B49A66]">
                                            0{index + 1}
                                        </span>
                                        <p className="text-sm leading-6 text-[#55535B]">
                                            {area}
                                        </p>
                                    </div>
                                ))}
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
                            title="Courses Handled"
                            description="Courses handled across undergraduate and postgraduate programmes, semesters and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                10 Courses Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Stream",
                                "Sem",
                                "Branch",
                                "Subject",
                            ]}
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
                            title="Publications - Conference / Journal"
                            description="Conference papers, journal articles and research contributions listed in the academic profile."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Award
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                {String(publications.length).padStart(2, "0")} Publications Listed
                            </p>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={`${publication.year}-${index}`}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[90px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {publication.year}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                    </div>

                                    <div>
                                        <p className="text-sm leading-7 text-[#4F4D55]">
                                            {publication.title}
                                        </p>

                                        <p className="mt-4 border-t border-[#EAE4D9] pt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A18A5B]">
                                            {publication.details}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Books Section */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Academic Contributions"
                            title="Books Published"
                            description="Books authored and published as part of academic and professional contributions."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                04 Books Listed
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {books.map((book, index) => (
                                <article
                                    key={book.title}
                                    className="group relative overflow-hidden border border-[#E8E1D5] bg-white p-6 transition-colors hover:border-[#D2B87C] sm:p-7"
                                >
                                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#D2B87C]/20 transition-transform group-hover:scale-110" />

                                    <div className="relative">
                                        <div className="mb-6 flex items-center justify-between">
                                            <BookOpen
                                                size={21}
                                                className="text-[#927B4D]"
                                                strokeWidth={1.5}
                                            />
                                            <span className="text-xs font-semibold tracking-wider text-[#927B4D]">
                                                {book.year}
                                            </span>
                                        </div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#927B4D]">
                                            Book {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h3 className="mt-3 font-serif text-xl leading-7 text-[#20235A]">
                                            {book.title}
                                        </h3>

                                        <div className="mt-6 border-t border-[#EAE4D9] pt-5">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                                Date of Publication
                                            </p>
                                            <p className="mt-2 text-sm text-[#55535B]">
                                                {book.date}, {book.year}
                                            </p>

                                            <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                                Published By
                                            </p>
                                            <p className="mt-2 text-sm leading-6 text-[#55535B]">
                                                {book.publisher}
                                            </p>

                                            <p className="mt-4 text-xs text-[#77747A]">
                                                ISBN: {book.isbn}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
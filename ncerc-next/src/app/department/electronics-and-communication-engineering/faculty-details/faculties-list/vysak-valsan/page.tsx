
import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    ExternalLink,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const researchInterests = [
    "Hyperspectral image processing",
    "Machine learning for Earth observation",
    "Signal and image processing",
    "Artificial intelligence in agriculture",
    "Optimization techniques",
    "Remote sensing and satellite image analysis",
];

const keywords = [
    "Hyperspectral Imaging (HSI)",
    "Spectral–spatial analysis",
    "Image denoising",
    "Machine learning",
    "Remote sensing",
    "Earth observation data",
    "Land cover classification",
    "Signal processing",
    "Feature extraction",
    "Optimization algorithms (GWO)",
    "Precision agriculture",
    "Soil quality assessment",
];

const courses = [
    ["1", "2026", "B.Tech", "S8", "ECE", "RTOS"],
    ["2", "2026", "B.Tech", "S8", "ECE", "Signals and Systems"],
    ["3", "2025", "B.Tech", "S5", "ECE", "Digital Signal Processing"],
    ["4", "2025", "B.Tech", "S2", "ECE", "Programming in C"],
];

const publications = [
    {
        year: "2025",
        title:
            "Malavika S. Madhavan, Lavanya M., Jalaja K., Anshad V., Vysak Valsan, and Mredhula L., “IoMT-Enabled Smart Medicine Dispenser for Remote Health Monitoring,” in Proceedings of the 7th International Conference on Intelligent Communication, Control and Devices (ICICCD), Dehradun, India, Oct. 10-11, 2025.",
    },
    {
        year: "2024",
        title:
            "Sindhu, C.P., Valsan, V, “A Novel Method for Automatic Detection of Ulcer in Wireless Capsule Endoscopy Images” In: Bhattacharya, P., Liu, H., Dutta, P.K., Rodrigues, J.J.P.C., Sethi, G. (eds) Revolutionizing Healthcare 5.0: The Power of Generative AI. Studies in Systems, Decision and Control, vol 571. Springer, Cham.",
        link: "https://doi.org/10.1007/978-3-031-75771-6_2",
        linkLabel: "View DOI",
    },
    {
        year: "2020",
        title:
            "Seelakshmi M, Vysak Valsan, “Image Restoration using Advanced Patch Processing Algorithm”, International Research Journal of Engineering and Technology (IRJET) Volume 7, Issue 4, April 2020.",
    },
    {
        year: "2019",
        title:
            "Keerthy C, Vysak Valsan, “Video to Video Enhancement and Object Detection in Video with Low Clarity using Histogram”, International Journal of Current Engineering And Scientific Research ( IJCESR), Volume 6 Issue 6 (Part-II), June 2019.",
    },
    {
        year: "2018",
        title:
            "Jini, S., and Vysak Valsan. “Moving Object Segmentation and Classification using HOG Descriptor.” International Research Journal of Engineering and Technology (2018): 3978-3982.",
    },
    {
        year: "2018",
        title:
            "S. Jini and V. Valsan, “Compressed domain moving object segmentation and classification from surveillance videos,” SSRG Int. J. Electron. Commun. Eng. (SSRG-IJECE), Special Issue ICETSST, pp. 142–146, Apr. 2018. ISSN: 2348-8549.",
    },
    {
        year: "2018",
        title:
            "Ashna Y, Vysak Valsan,” Human Emotions Identification and Recognition Using EEG Signal Processing”, International Research Journal of Engineering and Technology (IRJET),Vol-05,Issue-04,ISSN:2395-0056,pp3815-3822,April 2018",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan, “A Novel Method for Automatic Detection of Inflammatory Bowel Diseases in Wireless Capsule Endoscopy Images”, 2017 Fourth IEEE Proceedings of International Conference on Signal Processing, Communication and Networking (ICSCN), Published on 30th October 2017 (DOI: 10.1109/ICSCN.2017.8085711).",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan (2017), “A Computer Aided Detection Technique for Early Detection of Gastrointestinal Polyps and Tumour in Wireless Capsule Endoscopy Images”, National Conference on Recent Innovations in Information and Communication Technologies (NCRICT17) at Ahalia School of Engineering, International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Vol6, Special Issue 4, pp.67-71.",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan, “A Novel Method for Automatic Detection of Colonic Polyps and Tumor in Wireless Capsule Endoscopy Images”, Proceedings of the National Conference on Signal Processing Communication and VLSI design (NCSCV’17) , Regional Centre of Anna University Coimbatore, 24th , 25th March 2017.",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan, “A Novel Method for Automatic Detection of Inflammatory Bowel Diseases in Wireless Capsule Endoscopy Images”, Proceedings of 4th International Conference on Signal Processing, Communication and Networking (ICSCN'17), Anna University (MIT Campus) Chennai, 16th,17th, 18th March 2017",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan, “Automatic Detection of Colonic Polyps and Tumor in Wireless Capsule Endoscopy Images using Hybrid Patch Extraction and Supervised Classification”, Proceedings of the International Conference on Innovations in Information, Embedded and Communication Systems (ICIIECS’17), Karpagam College of Engineering Coimbatore, 17th and 18th March 2017",
    },
    {
        year: "2017",
        title:
            "Sindhu C P, Vysak Valsan, “Automatic Polyp Detection in Wireless Capsule Endoscopy Images using Hybrid Patch Extraction and Supervised Classification”, International Journal of Scientific Engineering and Research (IJSER), Volume 5 Issue 2, February 2017, pp. 5–9.",
        link: "http://www.ijser.in/archives/v5i2/v5i2.php",
        linkLabel: "View Journal",
    },
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
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
                                className={`border-b border-[#EEE9E0] last:border-b-0 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#FAF8F4]"
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

export default function VysakFacultyPage() {
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
                                Mr. Vysak Valsan
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D.
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E – Communication Systems
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.Tech – Electronics and Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                                        NCERC ID: 4023
                                    </span>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                                    Researcher ID: OTI-7665-2025
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
                                            Ph.D., M.E., B.Tech
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
                                            Hyperspectral Image Processing
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
                                            13 Listed Publications
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
                                title="About Vysak Valsan"
                                description="Academic background, teaching experience, and research contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Mr. Vysak Valsan is an Assistant Professor in the Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre (NCERC), with over 12 years of teaching experience. He is actively involved in undergraduate teaching, student mentoring, and academic development initiatives. He has organized and coordinated various Faculty Development Programs, workshops, and technical events in emerging domains such as Artificial Intelligence, satellite image analysis, and optimization techniques.
                                </p>

                                <p>
                                    His research focuses on hyperspectral image processing, signal and image analysis, and machine learning applications in Earth observation data. His ongoing work emphasizes hyperspectral image denoising and classification for applications such as soil quality assessment and precision agriculture, aiming to bridge the gap between research and real-world implementation.
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
                                value="Electronics and Communication Engineering"
                            />
                            <DetailItem label="NCERC Unique ID" value="4023" />
                            <DetailItem
                                label="Researcher ID"
                                value="OTI-7665-2025 (Web of Science)"
                            />
                            <DetailItem
                                label="Teaching Experience"
                                value="Over 12 years"
                            />

                            <div className="mt-5 space-y-3">
                                <a
                                    href="https://orcid.org/0009-0000-5746-6256"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between border border-[#E5DED1] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                >
                                    ORCID Profile
                                    <ExternalLink size={14} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?user=R5zWPFIAAAAJ&hl=en"
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
                            description="Research domains focused on hyperspectral imaging, Earth observation, and intelligent image analysis."
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
                            <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                Hyperspectral image processing, machine learning for Earth
                                observation, signal and image processing, artificial
                                intelligence in agriculture, optimization techniques,
                                remote sensing and satellite image analysis.
                            </p>
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
                            description="Courses handled across different academic years, programmes, semesters, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                04 Courses Listed
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
                            title="Publications – Conference / Journal"
                            description="Conference papers, journal articles, and book chapter contributions listed in the academic profile."
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

                                        {publication.link && (
                                            <a
                                                href={publication.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                            >
                                                {publication.linkLabel}
                                                <ExternalLink size={13} />
                                            </a>
                                        )}

                                        <p className="mt-4 border-t border-[#EAE4D9] pt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A18A5B]">
                                            Publication {String(index + 1).padStart(2, "0")}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Profile Footer Note */}
                {/* <section className="bg-[#20235A] px-5 py-10 sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                <ShieldCheck size={21} strokeWidth={1.4} />
                            </div>

                            <div>
                                <p className="font-serif text-lg text-white">
                                    Faculty Academic Profile
                                </p>
                                <p className="mt-1 text-[10px] tracking-wide text-white/55">
                                    Department of Electronics and Communication Engineering
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/department/electronics-and-communication-engineering/faculty-details"
                            className="inline-flex items-center gap-3 border border-[#D2B87C]/50 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#E8D8B3] transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Back to Faculty Directory
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </section> */}
            </main>

            <FooterSection />
        </>
    );
}

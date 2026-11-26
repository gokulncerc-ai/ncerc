
import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    ScrollText,
    ShieldCheck,
    UserRound,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const courses = [
    ["1", "2023", "B.Tech.", "S8", "ECE", "Wireless Communication"],
    ["2", "2024", "B.Tech.", "S7", "AIML", "Biomedical Engineering"],
    ["3", "2024", "B.Tech.", "S7", "CSE", "Biomedical Instrumentation"],
    ["4", "2025", "B.Tech.", "S7", "ME", "Biomedical Engineering"],
    ["5", "2024", "B.Tech.", "S8", "ECE", "Project"],
    ["6", "2025", "B.Tech.", "S6", "ECE", "Mini Project"],
];

const memberships = [
    {
        number: "01",
        title: "Fellow Member",
        organization: "Institution of Electronics and Telecommunication Engineers (IETE)",
        detail: "",
    },
    {
        number: "02",
        title: "Senior Member",
        organization: "Institute of Electrical and Electronics Engineers (IEEE)",
        detail: "",
    },
    {
        number: "03",
        title: "Life Member",
        organization: "Indian Society for Technical Education (ISTE)",
        detail: "",
    },
];

const patents = [
    [
        "1",
        "2023",
        "AI and deep learning based detection of heart beat anomaly and artery deposition analysis related to cardiac problems using efficient DL Algorithms like CNN, NB classifiers etc.",
        "Application No: 202311059718 A | Application date: 05/09/2023 | Publication Date: 06.10.23",
        "Patent Application",
    ],
    [
        "2",
        "2024",
        "AI and deep learning based detection of heart beat anomaly and artery deposition analysis related to cardiac problems using efficient DL Algorithms like CNN, NB classifiers etc.",
        "Application No: 202311059718 A | Application date: 05/09/2023 | Publication Date: 06.10.23",
        "Patent Publication",
    ],
    [
        "3",
        "2025",
        "Landslide Detection wireless Sensor",
        "Design No: 436556-001 | Date: 09.01.2025",
        "Design Patent",
    ],
    [
        "4",
        "2025",
        "Handy Non-Invasive Blood Glucose Estimator For Quadriplegic People",
        "Application No: 202541008616 | Application Date: 03/02/2025 | Publication Date: 14/02/2025",
        "Patent Publication",
    ],
    [
        "5",
        "2026",
        "Cough Sound Detection using Convolutional Neural Network",
        "Publication Date: 02.01.26",
        "Patent Publication",
    ],
];

const books = [
    [
        "1",
        "30.8-2025",
        "Transformative Innovations In Optical Communication Networks",
        "COSMOS Publications | 1st Edition",
    ],
];

const publications = [
    [
        "1",
        "2024",
        "Analyzing the detection of COVID-19 on CORONET using various Optimizer",
        "Journal of Systems Engineering & Electronics, ISSN No: 1671-1793, Scopus & UGC Approved Journal, Volume 34, Issue 7, 2024.",
    ],
    [
        "2",
        "2024",
        "6G Optical & Wireless Communication Network for IOT applications",
        "Kerala Technological Congress, 16th to 18th February 2024, at Ahalia School of Engineering & Technology, Palakkad, organized by KTU.",
    ],
    [
        "3",
        "2024",
        "Deep Learning Approaches in Detection of Covid19 using X ray Images",
        "International Journal of Medical Engineering and Informatics, Vol. 16, No. 6, published online October 2, 2024, pp. 516–522. DOI: 10.1504/IJMEI.2022.10049172.",
    ],
    [
        "4",
        "2025",
        "Guardian Wheel – An Advanced Wheelchair for Disabled People",
        "Presented at the International Conference on Recent Advancements in Artificial Intelligence, Computational Intelligence and Inclusive Technologies (ICRAIC2IT), May 02–03, 2025, NRI Institute of Technology, Vijayawada. Published in Scopus-indexed proceedings by Taylor & Francis, UK.",
    ],
    [
        "5",
        "2025",
        "Smart Assistive Spoon: A Real-Time Tremor Compensation System for Parkinson’s Patients",
        "7th International Conference on Intelligent Communication, Control and Devices, held at UPES University, Dehradun, on 10.10.2025. Published in Lecture Notes in Networks and Systems (Scopus Indexed).",
    ],
    [
        "6",
        "2025",
        "Smart IoT Enabled Maintenance for Enhancing Solar Panel Efficiency",
        "2nd International Conference on Recent Trends in Electrical, Electronics and Computing Technologies (ICRTEECT) 2025, held at Vaagdevi Engineering College, Warangal, on 30.10.2025. Published in IEEE Xplore Digital Library (Indexed in Scopus).",
    ],
    [
        "7",
        "2025",
        "Advanced IoMT-Based Medicine Dispenser with Comprehensive Remote Health",
        "Track Intelligent Communication / Intelligent Control / Intelligent Devices / Sustainable Technologies in ICICCD-2025, organized by Electrical Cluster, School of Advanced Engineering, at UPES, Bidholi Campus, Dehradun, India, on 10–11 October 2025. Published in Lecture Notes in Networks and Systems (Scopus Indexed).",
    ],
    [
        "8",
        "2025",
        "Role of IOT in COVID-19: a survey",
        "CSI Transactions on IoT (Scopus Indexed).",
    ],
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "memberships", label: "Memberships" },
    { id: "courses", label: "Courses" },
    { id: "patents", label: "Patents" },
    { id: "books", label: "Books" },
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
                <table className="w-full min-w-[760px] border-collapse text-left">
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
                                        className={`px-4 py-4 text-xs leading-6 text-[#55535B] ${cellIndex === 0 ? "font-semibold text-[#927B4D]" : ""
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

export default function MredhulaFacultyPage() {
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
                                Dr. Mredhula L.
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D.
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.Tech. - Digital Electronics
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    B.E. - Electronics & Communication Engineering
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 4055
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
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Ph.D., M.Tech. & B.E.
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
                                            Research Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Medical Image Processing & Biomedical Engineering
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
                                            Academic Contributions
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            Courses, Books & Publications
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
                                title="About Dr. Mredhula L."
                                description="Academic background, teaching approach and institutional contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Mredhula L. is a Professor in the Department of Electronics and Communication Engineering (ECE) with strong academic and research expertise in Digital Electronics. She holds a Ph.D. along with an M.Tech. in Digital Electronics and a B.E. in Electronics and Communication Engineering. With extensive teaching experience, she is dedicated to delivering high-quality education and fostering a deep understanding of core engineering concepts among students.
                                </p>

                                <p>
                                    She is actively involved in academic development, guiding students in projects and research activities, and contributing to institutional growth through her commitment and leadership. She is known for her organized approach, effective teaching methods, and continuous efforts to stay updated with emerging technologies in the field of electronics and communication engineering. She is a member of  various professional bodies such as IETE(Fellow member), IEEE(Senior Member), ISTE (Life Member).

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

                            <DetailItem label="Designation" value="Professor" />
                            <DetailItem
                                label="Department"
                                value="Electronics and Communication Engineering"
                            />
                            <DetailItem label="NCERC Unique ID" value="4055" />
                            <DetailItem
                                label="Area of Interest"
                                value="Medical Image Processing, Biomedical Engineering, and wireless communication technologies"
                            />
                            <DetailItem
                                label="Qualifications"
                                value="Ph.D., M.Tech. (Digital Electronics), B.E. (Electronics & Communication Engineering)"
                            />
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
                            title="Research Interests"
                            description="Research areas and academic interests of Dr. Mredhula L."
                        />

                        <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
                            <div className="flex items-start gap-5 border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Lightbulb size={22} strokeWidth={1.4} />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        Primary Research Area
                                    </p>
                                    <h3 className="mt-3 font-serif text-2xl text-[#20235A]">
                                        Medical Image Processing
                                    </h3>
                                    <p className="mt-3 text-xs leading-6 text-[#69666B]">
                                        One of the stated areas of research interest in the
                                        faculty profile.
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Additional Areas of Interest
                                    </h3>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {[
                                        "Biomedical Engineering",
                                        "Wireless Communication Technologies",
                                    ].map((interest) => (
                                        <div key={interest} className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#D2B87C]" />
                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {interest}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Memberships */}
                <section
                    id="memberships"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Professional Associations"
                            title="Memberships of Professional Bodies"
                            description="Professional memberships and affiliations listed in the faculty profile."
                        />

                        <div className="grid gap-4 md:grid-cols-3">
                            {memberships.map((membership) => (
                                <article
                                    key={membership.number}
                                    className="border border-[#E5DED1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_12px_30px_rgba(32,35,90,0.07)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                            <Users size={19} strokeWidth={1.4} />
                                        </div>
                                        <span className="font-serif text-xl text-[#B49A66]">
                                            {membership.number}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        {membership.title}
                                    </p>

                                    <h3 className="mt-3 font-serif text-lg leading-snug text-[#20235A]">
                                        {membership.organization}
                                    </h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Courses handled across different academic years, programmes, semesters and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                06 Courses Listed
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

                {/* Patents Section */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Innovation & Recognition"
                            title="Patent Details"
                            description="Patent applications, publications and design patent details as provided in the faculty profile."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <Award
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                05 Patent Entries Listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year",
                                "Title of the Patent",
                                "Application / Publication Details",
                                "Category",
                            ]}
                            rows={patents}
                        />
                    </div>
                </section>

                {/* Books Section */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Publishing"
                            title="Books Published"
                            description="Book title and publication details included in the faculty profile."
                        />

                        <div className="space-y-5">
                            {books.map((book) => (
                                <article
                                    key={book[0]}
                                    className="grid gap-6 border border-[#E5DED1] bg-[#FAF7F2] p-6 sm:grid-cols-[90px_1fr] sm:p-8"
                                >
                                    <div className="flex h-20 w-20 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <BookOpen size={29} strokeWidth={1.3} />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Book {book[0]}
                                            </span>
                                            <span className="h-px w-7 bg-[#D2B87C]" />
                                            <span className="text-[10px] text-[#8A8580]">
                                                {book[1]}
                                            </span>
                                        </div>

                                        <h3 className="mt-3 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
                                            {book[2]}
                                        </h3>

                                        <p className="mt-4 border-t border-[#EAE4D9] pt-4 text-xs leading-6 text-[#69666B]">
                                            {book[3]}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Publications Section */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Research Contributions"
                            title="Journals & Conference Publications"
                            description="Research articles and conference contributions listed in the academic profile."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <ScrollText
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                08 Publications Listed
                            </p>
                        </div>

                        <div className="space-y-4">
                            {publications.map((publication, index) => (
                                <article
                                    key={publication[0]}
                                    className="grid gap-4 border border-[#E8E1D5] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:grid-cols-[90px_1fr] sm:gap-6 sm:p-6"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-serif text-2xl text-[#927B4D]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="h-px w-8 bg-[#D2B87C] sm:mt-3 sm:block" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#927B4D]">
                                            {publication[1]}
                                        </p>

                                        <h3 className="mt-3 font-serif text-lg leading-snug text-[#20235A] sm:text-xl">
                                            {publication[2]}
                                        </h3>

                                        <div className="mt-4 border-t border-[#EAE4D9] pt-4">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A18A5B]">
                                                Journal / Conference Details
                                            </p>
                                            <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                                {publication[3]}
                                            </p>

                                            {index === 2 && (
                                                <Link
                                                    href="https://www.inderscienceonline.com/toc/ijmei/16/6"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#20235A] transition-colors hover:text-[#927B4D]"
                                                >
                                                    View Journal Issue
                                                    <ArrowUpRight size={14} />
                                                </Link>
                                            )}
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


import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    BriefcaseBusiness,
    GraduationCap,
    Lightbulb,
    Microscope,
    ShieldCheck,
    UserRound,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const courses = [
    ["1", "2023", "B.Tech", "S3", "ECE", "Solid State Devices"],
    ["2", "2024", "B.Tech", "S6", "ECE", "Embedded Systems"],
    ["3", "2024", "B.Tech", "S7", "CSE, ME", "Biomedical Instrumentation"],
    ["4", "2025", "B.Tech", "S5", "CSE", "Microprocessors And Microcontrollers"],
    ["5", "2024", "B.Tech", "S8", "ECE", "Computer Architecture & Microcontroller"],
    ["6", "2025", "B.Tech", "S6", "CSE", "Logic System Design"],
    ["7", "2022", "B.Tech", "Not specified", "ECE", "Optical Communication"],
    ["8", "2021", "B.Tech", "S7", "EEE", "Analog And Digital Communication"],
];

const memberships = [
    {
        number: "01",
        title: "Life Time Member",
        organization: "Indian Society for Technical Education (ISTE)",
        detail: "Membership No: LM 84890",
    },
    {
        number: "02",
        title: "Member",
        organization: "International Association of Engineers (IAE)",
        detail: "Membership No: 275358",
    },
    {
        number: "03",
        title: "Associate Member",
        organization: "Institution of Engineers (India)",
        detail: "",
    },
];

const startup = [
    [
        "1",
        "August 2025",
        "CLYVON TECHNOLOGIES Pvt",
        "Government of India, Ministry of Corporate Affairs, Office of The Registrar Of Companies. Dated: 25/08/2025",
    ],
];

const patents = [
    [
        "1",
        "05/09/2025",
        "IOT Based Non Contact Respiration Monitoring System",
        "INDIAN-Patent",
        "Utility Patent Published",
    ],
    [
        "2",
        "06/06/2024",
        "Smart sleep quality monitoring Device",
        "IPR India (Design No: 426014-001 – Design Patent)",
        "Design Patent",
    ],
    [
        "3",
        "20/12/024",
        "Smart Home Control Apparatus with Embedded Ai for Energy Efficiency",
        "INDIAN-Patent Publication, Patent office Journal No.51/2024 Dated 20/12/2024",
        "Published",
    ],
];

const books = [
    [
        "1",
        "July 2024",
        "Mastering Deep Learning From Basics to Advanced Applications",
        "ISBN-13 978-93-6260-293-0; Charulatha Publications",
    ],
    [
        "2",
        "June 2025",
        "Computer Architecture and Microcontrollers Microcontrollers",
        "(KTU-Syllubus, ECT206) Processing",
    ],
];

const publications = [
    [
        "1",
        "07/03/2025",
        "A Non-Invasive approach for Detection of Sleep Apnea using IR-UWB Sensor-Advanced sleep monitoring",
        "International Conference",
    ],
    [
        "2",
        "27/02/2025",
        "Non Contact Sleep Apnea Detection using UWB Radar, IoT Integration and Deep Learning Techniques",
        "International Conference (Scopus Indexed – Web of Science)",
    ],
    [
        "3",
        "14/07/2023",
        "Non-contact methods for Assessment of Respiratory Parameters",
        "International Conference publication (Innovations in Engineering and Technology – IEEE)",
    ],
    [
        "4",
        "05/10/2023",
        "Fractal – Enhanced Microstrip Antennas: Miniaturization, Multiband Performance and Cross-Polarization Minimization for Wi-Fi Applications",
        "International Conference publication + Journal Publication; Best Paper Award",
    ],
    [
        "5",
        "2024",
        "Wireless-Optical Integration for 6G Network Evolution",
        "International Journal of Research Publication and Reviews",
    ],
    [
        "6",
        "2024",
        "Chaos-based Cryptography for Voice Communication Security",
        "IRO Journal on Sustainable Wireless Systems (ISSN: 2582-3167)",
    ],
    [
        "7",
        "August 2016",
        "Direct Axis Control Rebalance Loop for a Two Degree Of Freedom Gyroscope",
        "International Journal of Advanced Research In Electrical, Electronics And Instrumentation Engineering (ISSN: 2278-8875)",
    ],
    [
        "8",
        "July 2016",
        "Design Architecture Of Automatic Demand Management System For Feeder Tripping",
        "International Journal of Advanced Research In Electrical, Electronics And Instrumentation Engineering (ISSN: 2320-3795)",
    ],
];

const profileSections = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "memberships", label: "Memberships" },
    { id: "courses", label: "Courses" },
    { id: "startup", label: "Startup" },
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

export default function JishaFacultyPage() {
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
                                Ms. Jisha K V
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Assistant Professor
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D. – Pursuing
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    PG – Power Electronics
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    UG – Electronics & Tele Communication Engineering
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Diploma – Instrument Technology
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 2221
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
                                            Ph.D. Pursuing, PG, UG & Diploma
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
                                        <p className="mt-1 text-xs text-white/90">
                                            Biomedical Engineering
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
                                title="About Jisha K V"
                                description="Academic background, teaching experience, and institutional contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Ms. Jisha K.V. is an Assistant Professor in the Department of Electronics and Communication Engineering (ECE) with strong academic experience in  Electronics. She pursuing  Ph.D. along with an M.E. in Power Electronics and a UG. in Electronics and Tele  Communication Engineering. . With more than a decade of experience in academics.

                                </p>

                                <p>
                                    She has played a significant role in accreditation and academic initiatives as NAAC Criteria Coordinator and NBA Department Coordinator, and has coordinated state-level project expos at the sister institution, JCET
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
                            <DetailItem label="NCERC Unique ID" value="2221" />
                            <DetailItem
                                label="Area of Interest"
                                value="Biomedical Engineering"
                            />
                            <DetailItem
                                label="Academic Experience"
                                value="More than a decade"
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
                            description="Her area of interest includes Biomedical Engineering."
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
                                        Biomedical Engineering
                                    </h3>
                                    <p className="mt-3 text-xs leading-6 text-[#69666B]">
                                        Research interest as specified in the faculty academic
                                        profile.
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
                                        Area of Interest
                                    </h3>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-[#55535B]">
                                    Biomedical Engineering
                                </p>
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

                                    {membership.detail && (
                                        <p className="mt-4 border-t border-[#EAE4D9] pt-4 text-xs text-[#69666B]">
                                            {membership.detail}
                                        </p>
                                    )}
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
                            description="Courses handled across different academic years, programmes, semesters, and branches."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                08 Courses Listed
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

                {/* Startup Company */}
                <section
                    id="startup"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Entrepreneurship"
                            title="Startup Company"
                            description="Startup company information included in the faculty profile."
                        />

                        <div className="overflow-hidden border border-[#E5DED1] bg-white">
                            <div className="grid gap-6 p-6 sm:grid-cols-[100px_1fr] sm:p-8">
                                <div className="flex h-20 w-20 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <BriefcaseBusiness size={30} strokeWidth={1.3} />
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="border border-[#D2B87C]/50 bg-[#FAF7F2] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#927B4D]">
                                            {startup[0][1]}
                                        </span>
                                        <span className="text-[9px] uppercase tracking-[0.14em] text-[#9A958D]">
                                            Startup Company
                                        </span>
                                    </div>

                                    <h3 className="mt-4 font-serif text-2xl text-[#20235A]">
                                        {startup[0][2]}
                                    </h3>

                                    <div className="mt-5 border-t border-[#EAE4D9] pt-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#927B4D]">
                                            Registration Details
                                        </p>
                                        <p className="mt-3 text-sm leading-7 text-[#55535B]">
                                            {startup[0][3]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Patents Section */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Innovation & Recognition"
                            title="Patent Details"
                            description="Patent publications and design patent details as provided in the faculty profile."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Year / Date",
                                "Title of the Patent",
                                "Details",
                                "Status",
                            ]}
                            rows={patents}
                        />
                    </div>
                </section>

                {/* Books Section */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Academic Publishing"
                            title="Books Published"
                            description="Book titles and publication details included in the faculty profile."
                        />

                        <div className="space-y-5">
                            {books.map((book) => (
                                <article
                                    key={book[0]}
                                    className="grid gap-6 border border-[#E5DED1] bg-white p-6 sm:grid-cols-[90px_1fr] sm:p-8"
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
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Research Contributions"
                            title="Journals & Conference Publications"
                            description="Research articles and conference contributions listed in the academic profile."
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Award
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
                                                Journal / Conference
                                            </p>
                                            <p className="mt-2 text-xs leading-6 text-[#69666B]">
                                                {publication[3]}
                                            </p>
                                        </div>
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

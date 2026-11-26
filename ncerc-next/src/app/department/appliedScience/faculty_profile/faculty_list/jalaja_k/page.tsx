
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
    IdCard,
    Building2,
    ExternalLink,
    Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../departmentnavigation/DepartmentNavigation";

type DetailItemProps = {
    label: string;
    value: React.ReactNode;
};

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type DataTableProps = {
    headers: string[];
    rows: React.ReactNode[][];
};

const SectionHeading = ({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) => (
    <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
            <span className="font-serif text-sm text-[#927B4D]">
                {number}
            </span>
            <span className="h-px w-9 bg-[#D2B87C]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                {eyebrow}
            </span>
        </div>

        <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
            {title}
        </h2>

        <div className="mt-4 h-[2px] w-12 bg-[#D2B87C]" />

        {description && (
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#77747A]">
                {description}
            </p>
        )}
    </div>
);

const DetailItem = ({ label, value }: DetailItemProps) => (
    <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
            {label}
        </p>
        <div className="text-sm leading-6 text-[#55535B]">{value}</div>
    </div>
);

const DataTable = ({ headers, rows }: DataTableProps) => (
    <div className="overflow-hidden border border-[#E6DFD3] bg-white">
        <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                    <tr className="bg-[#20235A]">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#D2B87C]"
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
                                className={
                                    rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF7F2]"
                                }
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`border-b border-[#EAE4D9] px-4 py-4 text-xs leading-6 ${cellIndex === 0
                                            ? "font-medium text-[#927B4D]"
                                            : "text-[#55535B]"
                                            }`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={headers.length}
                                className="px-5 py-12 text-center"
                            >
                                <p className="font-serif text-lg font-normal text-[#20235A]">
                                    No records available
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                    Information will be updated when available.
                                </p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

export default function JalajaKFacultyPage() {
    const courses = [
        ["1", "2021", "B.Tech", "S2", "CSEA", "Engineering Physics A"],
        ["2", "2022", "B.Tech", "S1", "CSEA", "ADD ON Course - Quantum Computing"],
        ["3", "2022", "B.Tech", "S1", "CSEB", "ADD ON Course - Quantum Computing"],
        ["4", "2022", "B.Tech", "S1", "ME", "Engineering Physics B"],
        ["5", "2022", "B.Tech", "S2", "MTR", "Engineering Physics B"],
        ["6", "2022", "B.Tech", "S2", "AI&ML", "Engineering Physics A"],
        ["7", "2023", "B.Tech", "S1", "CSEB", "Engineering Physics A"],
        ["8", "2023", "B.Tech", "S2", "AI&ML", "Engineering Physics A"],
        ["9", "2024", "B.Tech", "S1", "ME", "Physics for Engineers"],
        ["10", "2024", "B.Tech", "S1", "EEE", "Physics for Engineers"],
        ["11", "2024", "B.Tech", "S2", "AI&ML", "Physics for Engineers"],
        ["12", "2025", "B.Tech", "S1", "ECE", "Semiconductor Physics"],
        ["13", "2025", "B.Tech", "S1", "EOE", "Semiconductor Physics"],
        ["14", "2025", "B.Tech", "S2", "AI&ML", "Solid State Physics and Quantum Mechanics"],
    ];

    const publications = [
        [
            "1",
            "2026",
            <>
                <p className="font-medium text-[#393947]">
                    Adsorption and sensing of vildagliptin on coinage metal
                    nanoclusters: DFT, MD and spectroscopic insights
                </p>
                <p className="mt-2 text-[#77747A]">
                    Computational and Theoretical Chemistry
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 2210-2728
                </p>
            </>,
        ],
        [
            "2",
            "2026",
            <>
                <p className="font-medium text-[#393947]">
                    Calorimetric (DSC) and dielectric (BDS) investigation on
                    the thermal behavior and molecular relaxations on glass
                    transition in amorphous pharmaceuticals – acetohexamide,
                    piroxicam and 5-fluorouracil
                </p>
                <p className="mt-2 text-[#77747A]">
                    Indian Journal of Physics
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 0974-9845
                </p>
            </>,
        ],
        [
            "3",
            "2026",
            <>
                <p className="font-medium text-[#393947]">
                    IoMT-Enabled Smart Medicine Dispenser for Remote Health
                    Monitoring
                </p>
                <p className="mt-2 text-[#77747A]">
                    ICICCD Conference Proceedings to Springer
                </p>
            </>,
        ],
        [
            "4",
            "2025",
            <>
                <p className="font-medium text-[#393947]">
                    Forecasting the short term changes of surface ozone and
                    NO2 during a festival event using Stochastic and Neural
                    Network Models
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal Pollution
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    Scopus Indexed · ISSN: 2383-4501
                </p>
            </>,
        ],
        [
            "5",
            "2024",
            <>
                <p className="font-medium text-[#393947]">
                    Adsorption behaviour on silver nanocolloids at various
                    concentrations of a bioactive therapeutic derivative of
                    methyl hydrazine: Experimental, DFT and molecular
                    docking investigations
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Liquids
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1873-3166
                </p>
            </>,
        ],
        [
            "6",
            "2017",
            <>
                <p className="font-medium text-[#393947]">
                    Spectroscopic characterization of 1-[3-(1H-imidazol-1-yl)
                    propyl]-3-phenylthiourea and assessment of reactive and
                    optoelectronic properties employing DFT calculations and
                    molecular dynamics simulations
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Structure
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1872-8014
                </p>
            </>,
        ],
        [
            "7",
            "2017",
            <>
                <p className="font-medium text-[#393947]">
                    Vibrational spectroscopic investigations and molecular
                    docking studies of biologically active
                    2-[4-(4-phenylbutanamido)phenyl]-5-ethylsulphonyl-
                    benzoxazole
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Structure
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1872-8014
                </p>
            </>,
        ],
        [
            "8",
            "2017",
            <>
                <p className="font-medium text-[#393947]">
                    Spectroscopic characterization of
                    4-[2-(5-Ethylpyridin-2-yl)ethoxy] benzaldehydeoxime and
                    investigation of its reactive properties by DFT
                    calculations and molecular dynamics simulations
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Structure
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1872-8014
                </p>
            </>,
        ],
        [
            "9",
            "2017",
            <>
                <p className="font-medium text-[#393947]">
                    Synthesis, vibrational spectroscopic investigations,
                    molecular docking, antibacterial studies and molecular
                    dynamics study of
                    5-[(4-nitrophenyl)acetamido]-2-(4-tert-butylphenyl)
                    benzoxazole
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Structure
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1872-8014
                </p>
            </>,
        ],
        [
            "10",
            "2016",
            <>
                <p className="font-medium text-[#393947]">
                    Spectroscopic analysis (FT-IR, FT-Raman and NMR) and
                    molecular docking study of ethyl
                    2-(4-oxo-3-phenethyl-3,4-dihydroquinazolin-2-ylthio)-
                    acetate
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Molecular Structure
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 1872-8014
                </p>
            </>,
        ],
        [
            "11",
            "2014",
            <>
                <p className="font-medium text-[#393947]">
                    FT-IR, FT-Raman, concentration dependent SERS and quantum
                    chemical study of L-aspartic acid
                </p>
                <p className="mt-2 text-[#77747A]">
                    Journal of Spectroscopy and Dynamics
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#927B4D]">
                    SCIE · ISSN: 2314-4920
                </p>
            </>,
        ],
    ];

    const patents = [
        [
            "1",
            "2026",
            "Cough Sound Detection using Convolutional Neural Network",
        ],
    ];

    const researchAreas = [
        "Spectroscopic Analysis",
        "Molecular Docking",
        "DFT Calculation",
        "Molecular Dynamic Simulation",
    ];

    return (
        <>
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-12 -top-16 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 -left-24 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
                    <div className="grid items-end gap-12 lg:grid-cols-[1fr_280px]">
                        {/* Faculty Information */}
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Faculty Profile
                                </p>
                            </div>

                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                                Department of Applied Science and Humanities
                            </p>

                            <h1 className="max-w-4xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[68px]">
                                Dr. Jalaja K
                            </h1>

                            <p className="mt-5 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Associate Professor
                            </p>

                            <div className="mt-9 flex flex-wrap gap-2">
                                {[
                                    "Ph.D",
                                    "M.Phil",
                                    "M.Sc Physics – Applied Electronics",
                                    "B.Sc Physics",
                                    "SET",
                                    "B.Ed – Physical Science",
                                ].map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <IdCard
                                    size={16}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.5}
                                />
                                <span className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                                    NCERC Unique ID
                                </span>
                                <span className="text-sm text-white/90">
                                    3901
                                </span>
                            </div>
                        </div>

                        {/* Quick Information Panel */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6">
                            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Ph.D
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Building2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Department
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Applied Science and Humanities
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Microscope
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Research Area
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            DFT and Molecular Docking
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <BookOpen
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                                            Academic Contributions
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/85">
                                            Teaching and Research
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-14 h-px w-full bg-gradient-to-r from-[#D2B87C]/70 via-[#D2B87C]/20 to-transparent" />
                </div>
            </section>

            <main className="bg-white [&_p]:text-justify">
                <DepartmentNavigation />

                {/* Profile Navigation */}
                <div className="sticky top-0 z-30 border-b border-[#E6DFD3] bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
                        {[
                            ["About Me", "#about"],
                            ["Research", "#research"],
                            ["Courses", "#courses"],
                            ["Publications", "#publications"],
                            ["Patents", "#patents"],
                            ["Researcher Profiles", "#profiles"],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="shrink-0 text-[10px] font-medium uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_310px]">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Faculty Overview"
                                title="About Me"
                                description="Academic background and professional profile"
                            />

                            <div className="max-w-3xl space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr.Jalaja.K is an Associate Professor in the Department of Applied Science and Humanities with strong academic and research expertise in Spectroscopic Analysis and molecular docking.
                                </p>

                                <p>
                                    With extensive teaching experience, she is dedicated to deliver high quality education and fostering a deep understanding of basic knowledge of Engineering concepts among students.
                                </p>

                                <p>
                                    She is actively involved in academic development, guiding students in research activities and contributing to institutional growth through her commitment and leadership. She is known for her organized approach, effective teaching methods and continuous efforts to stay updated with the emerging trends in the field of Science and Technologies.

                                </p>
                            </div>
                        </div>

                        {/* Professional Details */}
                        <aside className="h-fit border border-[#E6DFD3] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <UserRound
                                    size={18}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                    Professional Details
                                </h3>
                            </div>

                            <DetailItem
                                label="Name"
                                value="Dr. Jalaja K"
                            />

                            <DetailItem
                                label="Designation"
                                value="Associate Professor"
                            />

                            <DetailItem
                                label="Department"
                                value="Applied Science and Humanities"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="3901"
                            />

                            <DetailItem
                                label="Area of Interest"
                                value="DFT and Molecular Docking Investigations"
                            />

                            {/* <DetailItem
                                label="Specialization"
                                value="Applied Electronics"
                            /> */}
                        </aside>
                    </div>
                </section>

                {/* Research Section */}
                <section
                    id="research"
                    className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research areas and academic interests"
                        />

                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <Lightbulb
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Focus
                                    </h3>
                                </div>

                                <p className="max-w-2xl text-sm leading-8 text-[#55535B]">
                                    Her research focuses on Spectroscopic
                                    Analysis, Molecular Docking, Density
                                    Functional Theory (DFT) calculations and
                                    Molecular Dynamic Simulation.
                                </p>

                                <div className="mt-8">
                                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                        Area of Interest
                                    </p>
                                    <p className="text-sm leading-7 text-[#55535B]">
                                        DFT and molecular docking
                                        investigations.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#FAF7F2] p-7 sm:p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl font-normal text-[#20235A]">
                                        Research Areas
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {researchAreas.map((area) => (
                                        <span
                                            key={area}
                                            className="border border-[#E4DCCE] bg-white px-3 py-2 text-xs leading-5 text-[#55535B]"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                Research Specializations
                            </p>

                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {[
                                    "Spectroscopic Analysis",
                                    "Molecular Docking",
                                    "DFT Calculations",
                                    "Molecular Dynamics",
                                ].map((area) => (
                                    <div
                                        key={area}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                        <span className="text-sm text-[#55535B]">
                                            {area}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across undergraduate programmes"
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-xs text-[#77747A]">
                                <span className="font-medium text-[#20235A]">
                                    {courses.length}
                                </span>{" "}
                                courses listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No",
                                "Year",
                                "Stream",
                                "Semester",
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
                    className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Academic Contributions"
                            title="Journal & Conference Publications"
                            description="Research papers published in journals and conference proceedings"
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <FileText
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-xs text-[#77747A]">
                                <span className="font-medium text-[#20235A]">
                                    {publications.length}
                                </span>{" "}
                                publications listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No",
                                "Year",
                                "Title of the Paper / Journal Details",
                            ]}
                            rows={publications}
                        />
                    </div>
                </section>

                {/* Patents Section */}
                <section
                    id="patents"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Research & Innovation"
                            title="Patent Details"
                            description="Patents and innovation contributions"
                        />

                        <div className="mb-6 flex items-center gap-3">
                            <Award
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-xs text-[#77747A]">
                                <span className="font-medium text-[#20235A]">
                                    {patents.length}
                                </span>{" "}
                                patent record listed
                            </p>
                        </div>

                        <DataTable
                            headers={[
                                "Sl. No",
                                "Year",
                                "Title",
                            ]}
                            rows={patents}
                        />
                    </div>
                </section>

                {/* Researcher Profiles Section */}
                <section
                    id="profiles"
                    className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Researcher identification and academic profile links"
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <IdCard
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                        ORCID Profile
                                    </h3>
                                </div>

                                <a
                                    href="https://orcid.org/0000-0002-4048-8296?lang=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 break-all text-xs text-[#927B4D] transition-colors hover:text-[#20235A]"
                                >
                                    0000-0002-4048-8296
                                    <ExternalLink
                                        size={13}
                                        className="shrink-0"
                                    />
                                </a>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-lg font-normal text-[#20235A]">
                                        Google Scholar
                                    </h3>
                                </div>

                                <p className="text-sm text-[#55535B]">
                                    Jalaja Kunnath
                                </p>
                                <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                    Individual Google Scholar profile URL
                                    has not been provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

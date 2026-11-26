
import Image from "next/image";
import {
    CalendarDays,
    Users,
    Monitor,
    BookOpen,
    Award,
    GraduationCap,
    ArrowUpRight,
    ChevronDown,
    Clock3,
    MapPin,
    CheckCircle2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const IMAGE_BASE = "/images/dpt/electronics-and-communication-engineering/association";

const fdpScreenshots = [
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img2.webp`,
        alt: "Online FDP session screenshot 1",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img3.webp`,
        alt: "Online FDP session screenshot 2",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img4.webp`,
        alt: "Online FDP session screenshot 3",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img5.webp`,
        alt: "Online FDP session screenshot 4",
    },
];

const dayOneTopics = [
    "Basics of remote sensing and imaging technologies",
    "Introduction to hyperspectral imaging",
    "Data acquisition methods",
    "Accessing datasets from national and international repositories",
    "Applications in agriculture, mineral exploration, environmental monitoring, and disaster management",
    "Emerging research problems and contemporary publication trends",
];

const dayTwoTopics = [
    "Radiometric and geometric corrections",
    "Noise removal techniques",
    "Atmospheric correction models",
    "Spectral feature extraction and reduction (PCA, ICA, MNF)",
    "Classification approaches such as SVM, Random Forest, and deep learning models",
    "Case studies using open-source datasets and tools",
];

const dayThreeTopics = [
    "Current global research directions",
    "Deep learning and transformer-based models for hyperspectral analysis",
    "Multi-modal data fusion (LiDAR + hyperspectral + multispectral)",
    "Cloud platforms (Google Earth Engine, ESA SNAP ecosystem)",
    "Benchmark datasets and competition platforms",
    "Writing effective research papers, choosing SCI/Scopus journals, and avoiding predatory publications",
    "Funding opportunities for remote sensing research",
];

function SectionLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            {children}
        </span>
    );
}

function ReportDay({
    day,
    title,
    children,
}: {
    day: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <article className="border-t border-[#D2B87C]/50 pt-7">
            <div className="mb-5 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] text-sm font-medium text-white">
                    {day}
                </span>

                <h4 className="text-lg font-semibold text-[#20235A]">
                    {title}
                </h4>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-[#55545A]">
                {children}
            </div>
        </article>
    );
}

function TopicList({
    items,
}: {
    items: string[];
}) {
    return (
        <ul className="space-y-3 pl-1">
            {items.map((item, index) => (
                <li key={index} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A88B50]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

const sixDayFdpObjectives = [
    "To provide a comprehensive understanding of the convergence between Electronics and Biomedical Engineering.",
    "To introduce participants to recent innovations and technological advancements in biomedical instrumentation and healthcare technologies.",
    "To explore research trends and publication opportunities in the field of Biomedical Engineering.",
    "To encourage interdisciplinary collaboration among academicians and researchers.",
];

const sixDayFdpResourcePersons = [
    "Dr. Sreejith S – New Horizon College of Engineering",
    "Mrs. Munmun Gharami – Manipal Institute of Technology",
    "Dr. Mredhula L – Nehru College of Engineering & Research Centre",
    "Dr. Vinod C – Sreepathy Institute of Management and Technology",
    "Ms. Jayalakshmi P K – Sahrdaya College of Engineering & Technology",
    "Mr. Sree Sankar J – Nehru College of Engineering & Research Centre",
];

const sixDayFdpReports = [
    {
        day: "Day 1",
        date: "24-11-2025",
        weekday: "Monday",
        title: "AI and Machine Learning Integration in Modern Electronic Systems",
        speaker: "Dr. Sreejith S",
        designation:
            "Associate Professor, Department of Artificial Intelligence and Machine Learning, New Horizon College of Engineering",
        report:
            "The session focused on the integration of Artificial Intelligence (AI) and Machine Learning (ML) in modern electronic systems. Dr. Sreejith discussed how AI-driven algorithms enhance signal processing, predictive maintenance, fault detection, and adaptive control in electronic devices. Practical insights were provided on implementing ML models in embedded platforms and IoT devices. The session highlighted the role of deep learning in biomedical image processing, diagnostics, and smart monitoring systems.",
    },
    {
        day: "Day 2",
        date: "25-11-2025",
        weekday: "Tuesday",
        title: "IoT-Driven Smart Healthcare and Embedded Electronics Design",
        speaker: "Mrs. Munmun Gharami",
        designation:
            "Assistant Professor, School of Computer Engineering, Manipal Institute of Technology",
        report:
            "The second day emphasized IoT-based healthcare solutions and embedded electronics design. The session covered architecture of IoT-enabled medical devices, remote patient monitoring systems, wearable sensors, and cloud-based health analytics. Design considerations for low-power embedded systems and data security in medical IoT were discussed. Real-time applications such as smart ICU monitoring and telemedicine platforms were demonstrated through case studies.",
    },
    {
        day: "Day 3",
        date: "26-11-2025",
        weekday: "Wednesday",
        title: "Flexible and Wearable Electronics for Healthcare and Industrial Systems",
        speaker: "Dr. Mredhula L",
        designation:
            "Professor & Head, Department of ECE, Nehru College of Engineering & Research Centre",
        report:
            "The third session addressed advancements in flexible and wearable electronics.                                           Dr. Mredhula L ,elaborated on flexible substrates, printed electronics, biosensors, and smart textiles. Applications in continuous health monitoring, rehabilitation devices, and industrial safety systems were explored. The session also covered challenges related to material selection, power management, durability, and biocompatibility in wearable biomedical devices.",
    },
    {
        day: "Day 4",
        date: "27-11-2025",
        weekday: "Thursday",
        title:
            "5G, Edge AI, and Signal Processing Innovations in Biomedical Communication",
        speaker: "Dr. Vinod C",
        designation:
            "Professor & Head, Department of ECE, Sreepathy Institute of Management and Technology",
        report:
            "The fourth day focused on communication technologies supporting biomedical applications. The session discussed the role of 5G networks in enabling high-speed, low-latency medical data transmission. Concepts of Edge AI for real-time biomedical signal processing were explained with examples. Advanced signal processing techniques for ECG, EEG, and medical imaging systems were also highlighted. The integration of communication protocols with healthcare devices was thoroughly examined.",
    },
    {
        day: "Day 5",
        date: "28-11-2025",
        weekday: "Friday",
        title:
            "Micro and Nanoelectronics Devices for Biomedical and Industrial Applications",
        speaker: "Ms. Jayalakshmi P K",
        designation:
            "Assistant Professor, Department of Biomedical Engineering, Sahrdaya College of Engineering & Technology",
        report:
            "The fifth session dealt with micro and nanoelectronic device technologies and their applications in biomedical instrumentation. Topics included MEMS sensors, nanoscale transistors, biosensing platforms, and lab-on-chip devices. The discussion highlighted miniaturization trends, fabrication techniques, and interdisciplinary research opportunities in nanotechnology for healthcare diagnostics and industrial automation.",
    },
    {
        day: "Day 6",
        date: "29-11-2025",
        weekday: "Saturday",
        title:
            "Next-Generation Smart Materials and Bio-Enabled Electronic Systems",
        speaker: "Mr. Sree Sankar J",
        designation:
            "Assistant Professor, Department of ECE, Nehru College of Engineering & Research Centre",
        report:
            "The valedictory session focused on smart materials and bio-enabled electronic systems. The resource person explained advancements in piezoelectric materials, bio-compatible polymers, and self-healing electronic materials. Emerging applications in prosthetics, neural interfaces, and bio-integrated circuits were discussed. The session concluded with insights into future research directions combining materials science and electronic system design.",
    },
];

const sixDayFdpOutcomes = [
    "Enhanced interdisciplinary knowledge among faculty and researchers.",
    "Exposure to cutting-edge technologies integrating electronics and biomedical engineering.",
    "Encouraged collaborative research in AI, IoT, communication systems, and nanotechnology.",
    "Strengthened academic-industry-institutional networking.",
    "Motivated participants to initiate innovative research proposals and funded projects.",
];

const sixDayFdpSchedule = [
    {
        day: "Day 1",
        date: "24-11-2025",
        weekday: "Monday",
        title: "AI and Machine Learning Integration in Modern Electronic Systems",
        speaker: "Dr. Sreejith S",
        designation:
            "Associate Professor, Department of Artificial Intelligence and Machine Learning, New Horizon College of Engineering",
    },
    {
        day: "Day 2",
        date: "25-11-2025",
        weekday: "Tuesday",
        title: "IoT-Driven Smart Healthcare and Embedded Electronics Design",
        speaker: "Mrs. Munmun Gharami",
        designation:
            "Assistant Professor, School of Computer Engineering, Manipal Institute of Technology, Manipal, Karnataka",
    },
    {
        day: "Day 3",
        date: "26-11-2025",
        weekday: "Wednesday",
        title:
            "Flexible and Wearable Electronics for Healthcare and Industrial Systems",
        speaker: "Dr. Mredhula L",
        designation:
            "Professor & Head, Department of ECE, Nehru College of Engineering & Research Centre, Thrissur",
    },
    {
        day: "Day 4",
        date: "27-11-2025",
        weekday: "Thursday",
        title:
            "5G, Edge AI, and Signal Processing Innovations in Biomedical Communication",
        speaker: "Dr. Vinod C",
        designation:
            "Professor and Head, Department of ECE, Sreepathy Institute of Management and Technology, Kerala",
    },
    {
        day: "Day 5",
        date: "28-11-2025",
        weekday: "Friday",
        title:
            "Micro and Nanoelectronics Devices for Biomedical and Industrial Applications",
        speaker: "Ms. Jayalakshmi P K",
        designation:
            "Assistant Professor, Department of Biomedical Engineering, Sahrdaya College of Engineering & Technology, Thrissur",
    },
    {
        day: "Day 6",
        date: "29-11-2025",
        weekday: "Saturday",
        title:
            "Next-Generation Smart Materials and Bio-Enabled Electronic Systems",
        speaker: "Mr. Sree Sankar J",
        designation:
            "Assistant Professor, Department of ECE, Nehru College of Engineering & Research Centre, Thrissur",
    },
];

const sixDayFdpScreenshots = [
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img9.webp`,
        alt: "Six-Day FDP online session screenshot 1",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img10.webp`,
        alt: "Six-Day FDP online session screenshot 2",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img11.webp`,
        alt: "Six-Day FDP online session screenshot 3",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img12.webp`,
        alt: "Six-Day FDP online session screenshot 4",
    },
    {
        src: `${IMAGE_BASE}/Ece_Fdp_img13.webp`,
        alt: "Six-Day FDP online session screenshot 5",
    },
];

const objectives = [
    "To familiarize students with the Simulink environment.",
    "To demonstrate modeling of digital communication system blocks.",
    "To analyze modulation, transmission, and error performance using simulation tools.",
    "To bridge theoretical concepts with practical implementation.",
];

const topics = [
    "Introduction to Simulink environment",
    "Building simple models using functional blocks",
    "Running simulations and analyzing outputs",
    "PCM Transmitter: Sampling, Quantization, and Encoding",
    "PCM Receiver: Decoding and Filtering",
    "Random symbol generation",
    "BPSK Modulation and Demodulation",
    "Transmission through AWGN Channel",
    "Symbol reconstruction",
    "BER and Symbol Error Rate calculation",
];

const outcomes = [
    "Enhanced understanding of digital communication system modeling.",
    "Improved practical skills in MATLAB–Simulink simulation.",
    "Better clarity on BER analysis and channel effects.",
    "Strengthened industry-academia interaction through expert guidance.",
];



export default function AssociationPage() {
    return (
        <main className="min-h-screen overflow-x-clip bg-[#FAF7F2] [&_p]:text-justify">
            <SiteHeader />

            {/* <InnerHeader /> */}

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#20235A]">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
                <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 [&_p]:text-justify">
                    <div className="max-w-4xl">
                        <div className="mb-8 flex flex-wrap items-center gap-4">
                            <span className="h-px w-12 bg-[#D2B87C]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Electronics &amp; Communication Engineering
                            </span>
                        </div>

                        <h1 className="font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                            <span className="block text-[#D2B87C]">Association</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                            Collaboration • Knowledge • Innovation
                        </p>

                        <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                            Explore the programmes and initiatives organised by the Department
                            of Electronics and Communication Engineering, bringing together
                            students, faculty and experts to encourage knowledge sharing,
                            professional development and emerging technological insights.
                        </p>

                        <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                            <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                <Users className="h-5 w-5 text-[#D2B87C]" />
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Knowledge Beyond Boundaries
                                </p>
                                <p className="mt-1 text-sm text-white/55">
                                    Faculty development programmes, seminars and academic initiatives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#D2B87C]/20" />
            </section>

            <InnerHeader />

            {/* MAIN CONTENT */}
            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-[1200px]">

                    {/* PARENT HEADING */}
                    <div className="mb-12 border-b border-[#D2B87C]/50 pb-8">
                        <SectionLabel>
                            Association Activities / Faculty Development Programme
                        </SectionLabel>

                        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                                    3 Days FDP
                                </h2>

                                <p className="mt-3 text-[15px] leading-7 text-[#66636A]">
                                    Faculty Development Programme organised by the
                                    Department of Electronics & Communication Engineering.
                                </p>
                            </div>

                            <div className="flex shrink-0 items-center gap-2 text-sm text-[#8F7746]">
                                <CalendarDays size={17} strokeWidth={1.6} />
                                <span>11–13 November</span>
                            </div>
                        </div>
                    </div>

                    {/* CHILD HEADING */}
                    <div className="grid gap-10 lg:grid-cols-[0.32fr_1fr] lg:gap-16">

                        {/* LEFT INFORMATION PANEL */}
                        <aside className="h-fit border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-6 lg:sticky lg:top-28">
                            <SectionLabel>
                                FDP Programme
                            </SectionLabel>

                            <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-[#20235A]">
                                Remote Sensing and Hyperspectral Technologies
                            </h3>

                            <p className="mt-4 text-[15px] leading-7 text-[#66636A]">
                                Recent Research Trends and Publication Opportunities
                            </p>

                            <div className="mt-7 space-y-5 border-t border-[#D2B87C]/50 pt-6">
                                <div className="flex items-start gap-3">
                                    <CalendarDays
                                        size={19}
                                        className="mt-1 shrink-0 text-[#A88B50]"
                                        strokeWidth={1.6}
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-[#20235A]">
                                            Date
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                            11–13 November
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Monitor
                                        size={19}
                                        className="mt-1 shrink-0 text-[#A88B50]"
                                        strokeWidth={1.6}
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-[#20235A]">
                                            Mode
                                        </p>
                                        <p className="mt-1 text-sm text-[#66636A]">
                                            Online
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users
                                        size={19}
                                        className="mt-1 shrink-0 text-[#A88B50]"
                                        strokeWidth={1.6}
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-[#20235A]">
                                            Registrations
                                        </p>
                                        <p className="mt-1 text-sm text-[#66636A]">
                                            49 participants from other colleges
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="mt-1 shrink-0 text-[#A88B50]"
                                        strokeWidth={1.6}
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-[#20235A]">
                                            Coordinators
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                            Mr. Nithin Joe
                                            <br />
                                            Mr. Suresh P
                                            <br />
                                            Assistant Professors, ECE Department
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT REPORT CONTENT */}
                        <div className="min-w-0">

                            {/* FDP INTRODUCTION */}
                            <div className="mb-10">
                                <SectionLabel>
                                    Programme Report
                                </SectionLabel>

                                <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    Remote Sensing and Hyperspectral Technologies:
                                    Recent Research Trends and Publication Opportunities
                                </h3>

                                <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#55545A]">
                                    <p>
                                        The Department of Electronics & Communication
                                        Engineering, NCERC, in association with IETE Sub
                                        Centre Palakkad, organised a three-day Faculty
                                        Development Programme on the theme
                                        “Remote Sensing and Hyperspectral Technologies:
                                        Recent Research Trends and Publication Opportunities”.
                                    </p>

                                    <p>
                                        Conducted from 11–13 November through online mode,
                                        the programme focused on the fundamentals,
                                        emerging technologies, research methodologies,
                                        and publication opportunities in the fields of
                                        remote sensing and hyperspectral imaging.
                                    </p>

                                    <p>
                                        The programme was coordinated by Mr. Nithin Joe
                                        and Mr. Suresh P, Assistant Professors,
                                        Department of ECE. A total of 49 registrations
                                        were received from other colleges.
                                    </p>
                                </div>
                            </div>

                            {/* RESOURCE PERSON */}
                            <div className="mb-10 border border-[#D2B87C]/50 bg-[#F2EFE8] p-6 sm:p-7">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <BookOpen size={21} strokeWidth={1.6} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-[#20235A]">
                                            Technical Session Resource Person
                                        </p>
                                        <p className="mt-2 text-[15px] leading-7 text-[#55545A]">
                                            Dr. Anand R, Assistant Professor,
                                            Amrita University, Coimbatore.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* DAY 1 */}
                            <div className="space-y-10">
                                <ReportDay day="01" title="Day 1 Report">
                                    <p>
                                        The three-day Faculty Development Programme on “Remote Sensing and Hyperspectral Technologies: Recent Research Trends and Publication Opportunities” commenced on 11 November through online mode. The session began at 7:00 PM with a silent prayer.
                                    </p>

                                    <p>
                                        Dr. Mredhula L, HoD, ECE Department, NCERC delivered the Welcome Address, introducing the theme of the FDP and stressing the importance of remote sensing and hyperspectral imaging in modern engineering research. This was followed by the Felicitation Address by the Principal, Dr. Anoop K. J, who highlighted the increasing relevance of AI-based remote sensing technologies in solving societal challenges.
                                    </p>

                                    <p>
                                        Dr. R. Gowri, Director – Accreditation & Ranking, NGI Kerala, also felicitated the gathering and emphasized the importance of research collaborations and publication opportunities in reputed journals. The inaugural session concluded at 7:20 PM.
                                    </p>

                                    <p>
                                        The Technical Session I was handled by the resource person, Dr. Anand R, Assistant Professor, Amrita University, Coimbatore, on the topic “Remote Sensing and Hyperspectral Technologies.”
                                    </p>

                                    <p className="font-medium text-[#20235A]">
                                        The session covered the following topics:
                                    </p>

                                    <TopicList items={dayOneTopics} />

                                    <p>
                                        An Interaction/Q&A Session was held where
                                        participants clarified technical topics and
                                        research queries with the expert. The day’s
                                        session concluded at 8:30 PM with closing
                                        remarks and instructions for the next day.
                                    </p>
                                </ReportDay>

                                {/* DAY 2 */}
                                <ReportDay day="02" title="Day 2 Report">
                                    <p>
                                        The session continued with Technical Session II,
                                        handled by Dr. Anand R.
                                    </p>

                                    <p>
                                        The focus of Day 2 was on data pre-processing and feature extraction in hyperspectral imagery. Important topics covered included:

                                    </p>

                                    <TopicList items={dayTwoTopics} />

                                    <p>
                                        Case studies using open-source datasets and tools
                                        The session provided hands-on demonstrations on dataset handling and pre-processing workflows used in current research. Participants actively engaged in discussions on algorithm selection, model performance improvement, and reproducible research practices.

                                    </p>

                                    <p>
                                        The day concluded with a summary of key concepts and publication avenues in image processing and geospatial science journals.

                                    </p>
                                </ReportDay>

                                {/* DAY 3 */}
                                <ReportDay day="03" title="Day 3 Report">
                                    <p>
                                        Day 3 focused on research trends, challenges,
                                        and publication opportunities in hyperspectral
                                        and remote sensing domains.
                                    </p>

                                    <p>
                                        Dr. Anand R elaborated on the following areas:
                                    </p>

                                    <TopicList items={dayThreeTopics} />

                                    <p>
                                        The FDP concluded with a final Q&A session, followed by closing remarks from the organizers. The three-day FDP provided a comprehensive understanding of remote sensing and hyperspectral imaging technologies, covering foundational concepts to advanced research methodologies.
                                    </p>

                                    <p>
                                        The sessions by Dr. Anand R enriched the participants with practical insights, dataset handling techniques, and publication strategies. The programme successfully achieved its objective of enhancing faculty knowledge and promoting high-quality research in the domain of remote sensing and hyperspectral technologies.

                                    </p>
                                </ReportDay>
                            </div>
                        </div>
                    </div>

                    {/* MAIN FDP IMAGE */}
                    <div className="mt-16 border-t border-[#D2B87C]/50 pt-12">
                        <SectionLabel>
                            Programme Highlights
                        </SectionLabel>

                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                            A Glimpse of the Faculty Development Programme
                        </h3>

                        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-[#F0ECE3]">
                            <Image
                                src={`${IMAGE_BASE}/Ece_Fdp_img1.webp`}
                                alt="Faculty Development Programme on Remote Sensing and Hyperspectral Technologies"
                                fill
                                priority={false}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* ONLINE FDP SCREENSHOTS */}
                    <div className="mt-20 border-t border-[#D2B87C]/50 pt-12">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <SectionLabel>
                                    Programme Gallery
                                </SectionLabel>

                                <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    Screenshots of Online FDP
                                </h3>
                            </div>

                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                                04 Photographs
                            </span>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {fdpScreenshots.map((image, index) => (
                                <div
                                    key={image.src}
                                    className="group relative aspect-[4/3] overflow-hidden bg-[#F0ECE3]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <span className="absolute bottom-4 left-4 text-xs font-medium tracking-[0.16em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        FDP SESSION 0{index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAMPLE CERTIFICATE */}
                    <div className="mt-20 border-t border-[#D2B87C]/50 pt-12">
                        <SectionLabel>
                            Certificate
                        </SectionLabel>

                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                            Sample Certificate
                        </h3>

                        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#66636A]">
                            A sample certificate issued for the Faculty Development
                            Programme on Remote Sensing and Hyperspectral Technologies.
                        </p>

                        <div className="mt-8 flex justify-center border border-[#D2B87C]/50 bg-[#F2EFE8] p-4 sm:p-8">
                            <div className="relative aspect-[1.414/1] w-full max-w-[850px] overflow-hidden bg-white">
                                <Image
                                    src={`${IMAGE_BASE}/Ece_Fdp_img6.webp`}
                                    alt="Sample certificate of the Faculty Development Programme"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 850px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* -------write up section------ */}
            <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-[1440px]">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

                        {/* Content */}
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Faculty Development Programme
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Remote Sensing and Hyperspectral Technologies
                            </h2>

                            <p className="mt-4 text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-[#8F7746]">
                                Recent Research Trends and Publication Opportunities
                            </p>

                            <div className="my-7 h-px w-full bg-[#20235A]/10" />

                            <p className="text-justify text-[15px] leading-8 text-[#514E49]">
                                The Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre, in association with IETE Sub Centre Palakkad, successfully organized a three-day online Faculty Development Programme on “Remote Sensing and Hyperspectral Technologies: Recent Research Trends and Publication Opportunities” from 11–13 November 2025. The FDP featured expert sessions by Dr. Anand R, Assistant Professor at Amrita University, who provided in-depth insights into remote sensing fundamentals, hyperspectral imaging, data preprocessing, feature extraction techniques, machine learning and deep learning approaches, and emerging research trends. The programme also emphasized publication strategies, research collaborations, funding opportunities, and the use of advanced tools such as Google Earth Engine and ESA SNAP.

                            </p>

                            {/* Event details */}
                            <div className="mt-9 grid grid-cols-2 gap-4 border-t border-[#20235A]/10 pt-6 sm:gap-6">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Programme Duration
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-[#20235A]">
                                        11–13 November 2025
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Mode of Conduct
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-[#20235A]">
                                        Online Mode
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FDP Image */}
                        <div className="relative">
                            <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/60 sm:-right-4 sm:-top-4" />

                            <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
                                <Image
                                    src={`${IMAGE_BASE}/Ece_Fdp_img1.webp`}
                                    alt="Faculty Development Programme on Remote Sensing and Hyperspectral Technologies"
                                    fill
                                    priority
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                />
                            </div>

                            <div className="absolute -bottom-4 left-4 bg-[#20235A] px-5 py-3 sm:left-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                    ECE Department
                                </p>
                                <p className="mt-1 text-sm text-white">
                                    Three-Day Online FDP
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ------6day fdp june------- */}
            <section className="bg-[#FAF7F2] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
                <div className="mx-auto max-w-[1440px]">
                    <div className="relative isolate min-h-[450px] overflow-hidden bg-[#20235A] sm:min-h-[550px] lg:min-h-[650px] xl:min-h-[700px]">

                        {/* Background Poster Image */}
                        <Image
                            src={`${IMAGE_BASE}/Ece_Fdp_img7.webp`}
                            alt="Transforming Engineering Through AI, IoT, and Intelligent Automation"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1440px) 100vw, 1440px"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-[#20235A]/30" />

                        {/* Decorative Elements */}
                        <div className="pointer-events-none absolute -right-20 -top-28 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/20" />
                        <div className="pointer-events-none absolute -right-8 -top-16 h-[250px] w-[250px] rounded-full border border-[#D2B87C]/20" />

                        {/* Bottom Border */}
                        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D2B87C]/50" />
                    </div>
                </div>
            </section>

            <section className="bg-[#FAF7F2]">

                {/* FDP Introduction */}
                <div className="px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16 lg:pt-24">
                    <div className="mx-auto max-w-[1440px]">

                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#B89B5E]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Faculty Development Programme
                            </span>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
                            <div>
                                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                    Department of Electronics and Communication Engineering
                                </p>

                                <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Six-Day Faculty Development Programme
                                </h2>

                                <p className="mt-4 text-base font-semibold leading-7 text-[#8F7746]">
                                    Bridging Electronics and Biomedical Engineering: Innovations
                                    and Emerging Technologies
                                </p>

                                <div className="my-7 h-px bg-[#20235A]/10" />

                                <p className="text-justify text-[15px] leading-8 text-[#514E49]">
                                    The Department of Electronics and Communication Engineering, Nehru College of Engineering and Research Centre (Autonomous), successfully organized a Six-Day Faculty Development Programme (FDP) on the theme “Bridging Electronics and Biomedical Engineering: Innovations and Emerging Technologies” from 24th November to 29th November 2025.

                                </p>

                                <p className="mt-5 text-justify text-[15px] leading-8 text-[#514E49]">
                                    The FDP was conducted in online mode from 07:00 PM to 08:30 PM, enabling participation from faculty members, research scholars, and postgraduate students across various institutions. The programme was designed to provide interdisciplinary insights into the integration of Electronics and Biomedical Engineering, focusing on emerging technologies, recent research advancements, and innovative applications in healthcare systems.
                                </p>
                            </div>

                            {/* Programme Details */}
                            <div className="border border-[#20235A]/10 bg-white p-6 sm:p-8">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Programme Details
                                </p>

                                <div className="mt-6 space-y-5">
                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                                            Dates
                                        </p>
                                        <p className="mt-1 text-[15px] font-medium text-[#20235A]">
                                            24–29 November 2025
                                        </p>
                                    </div>

                                    <div className="h-px bg-[#20235A]/10" />

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                                            Mode
                                        </p>
                                        <p className="mt-1 text-[15px] font-medium text-[#20235A]">
                                            Online
                                        </p>
                                    </div>

                                    <div className="h-px bg-[#20235A]/10" />

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                                            Session Timings
                                        </p>
                                        <p className="mt-1 text-[15px] font-medium text-[#20235A]">
                                            07:00 PM – 08:30 PM
                                        </p>
                                    </div>

                                    <div className="h-px bg-[#20235A]/10" />

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                                            Total Registrations
                                        </p>
                                        <p className="mt-1 text-[15px] font-medium text-[#20235A]">
                                            88 Participants
                                        </p>
                                    </div>

                                    <div className="h-px bg-[#20235A]/10" />

                                    <div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F7746]">
                                            Programme Coordinators
                                        </p>
                                        <p className="mt-1 text-[15px] font-medium leading-7 text-[#20235A]">
                                            Ms. Anooja B
                                            <br />
                                            Mr. Sree Sankar J
                                        </p>
                                        <p className="mt-1 text-[13px] leading-6 text-[#716D66]">
                                            Assistant Professors, Department of ECE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Objectives */}
                        <div className="mt-14 border-t border-[#20235A]/10 pt-10">
                            <h3 className="text-xl font-semibold text-[#20235A]">
                                Objectives of the FDP
                            </h3>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {sixDayFdpObjectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 border border-[#20235A]/10 bg-white p-5"
                                    >
                                        <span className="shrink-0 text-sm font-semibold text-[#B89B5E]">
                                            0{index + 1}
                                        </span>
                                        <p className="text-justify text-[14px] leading-7 text-[#514E49]">
                                            {objective}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resource Persons and Inauguration */}
                        <div className="mt-12 grid gap-8 lg:grid-cols-2">
                            <div>
                                <h3 className="text-xl font-semibold text-[#20235A]">
                                    Resource Persons
                                </h3>
                                <p className="mt-4 text-justify text-[15px] leading-8 text-[#514E49]">
                                    Eminent academicians and experts from reputed institutions
                                    delivered technical sessions focusing on emerging trends and
                                    research directions in Electronics and Biomedical Engineering.
                                    The sessions were handled by distinguished resource persons
                                    including:
                                </p>

                                <ul className="mt-5 space-y-3">
                                    {sixDayFdpResourcePersons.map((person, index) => (
                                        <li key={index} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B89B5E]" />
                                            <span className="text-[14px] leading-7 text-[#514E49]">
                                                {person}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-[#20235A]">
                                    Inaugural Session
                                </h3>

                                <p className="mt-4 text-justify text-[15px] leading-8 text-[#514E49]">
                                    The program was coordinated by Ms. Anooja B, Assistant Professor, Department of ECE, and Mr. Sree Sankar J, Assistant Professor, Department of ECE, Nehru College of Engineering & Research Centre. A total of 88 participants registered for the event, including faculty members, research scholars, and academicians from various institutions.
                                    The program was formally inaugurated by Dr. Anoop J, Principal of Nehru College of Engineering & Research Centre, Pampady. In his inaugural address, he emphasized the importance of interdisciplinary research and the growing convergence of Electronics and Biomedical Engineering in addressing modern healthcare challenges. He encouraged faculty members to actively engage in collaborative research, innovation, and technology-driven solutions for societal benefit.

                                </p>

                                <p className="mt-5 text-justify text-[15px] leading-8 text-[#514E49]">
                                    Dr. Mredhula L, HoD and Professor, Department of ECE, Nehru College of Engineering & Research Centre, Pampady, formally invited all faculty members, research scholars, and participants from various institutions to take part in the Six-Day FDP. She encouraged active participation and meaningful interaction with the resource persons throughout the sessions, which greatly contributed to the overall success of the program.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main FDP Image */}
                <div className="px-6 pb-16 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="relative aspect-[16/7] min-h-[260px] overflow-hidden bg-[#F2EFE8] sm:min-h-[360px] lg:min-h-[440px]">
                            <Image
                                src={`${IMAGE_BASE}/Ece_Fdp_img8.webp`}
                                alt="Six-Day Faculty Development Programme on Bridging Electronics and Biomedical Engineering"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1440px) 100vw, 1440px"
                            />
                        </div>
                    </div>
                </div>

                {/* Individual Day Reports */}
                <div className="bg-[#F2EFE8] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-10">
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Session Highlights
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                Day-wise FDP Reports
                            </h3>
                            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#716D66]">
                                A detailed overview of the six technical sessions conducted
                                during the Faculty Development Programme.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {sixDayFdpReports.map((item, index) => (
                                <article
                                    key={item.day}
                                    className="grid gap-6 border border-[#20235A]/10 bg-white p-6 sm:p-8 lg:grid-cols-[170px_1fr] lg:gap-10"
                                >
                                    <div className="border-b border-[#20235A]/10 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                            {item.day}
                                        </p>
                                        <p className="mt-2 text-lg font-semibold text-[#20235A]">
                                            {item.date}
                                        </p>
                                        <p className="mt-1 text-[13px] text-[#716D66]">
                                            {item.weekday}
                                        </p>
                                        <div className="mt-4 h-px w-10 bg-[#B89B5E]" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold leading-7 text-[#20235A]">
                                            {item.title}
                                        </h4>

                                        <div className="mt-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                Resource Person
                                            </p>
                                            <p className="mt-1 text-[14px] font-semibold text-[#20235A]">
                                                {item.speaker}
                                            </p>
                                            <p className="mt-1 text-[13px] leading-6 text-[#716D66]">
                                                {item.designation}
                                            </p>
                                        </div>

                                        <p className="mt-5 text-justify text-[14px] leading-8 text-[#514E49]">
                                            {item.report}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Outcomes and Conclusion */}
                <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Programme Impact
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-[#20235A]">
                                Outcome of the FDP
                            </h3>

                            <div className="mt-6 space-y-4">
                                {sixDayFdpOutcomes.map((outcome, index) => (
                                    <div key={index} className="flex gap-4">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#D2B87C] text-[11px] font-semibold text-[#8F7746]">
                                            {index + 1}
                                        </span>
                                        <p className="text-[14px] leading-7 text-[#514E49]">
                                            {outcome}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-l-2 border-[#D2B87C] pl-6 sm:pl-8">
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Closing Remarks
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-[#20235A]">
                                Conclusion
                            </h3>

                            <p className="mt-5 text-justify text-[15px] leading-8 text-[#514E49]">
                                The Six-Day FDP successfully achieved its objective of bridging the gap between Electronics and Biomedical Engineering. The sessions provided comprehensive exposure to emerging technologies such as AI integration, IoT-enabled healthcare, wearable systems, 5G communication, nanoelectronics, and smart materials. The program significantly contributed to faculty development by fostering research orientation and technological innovation in interdisciplinary domains.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FDP Schedule */}
                <div className="bg-[#F2EFE8] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-8">
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Programme Overview
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                FDP Schedule and Resource Persons
                            </h3>
                        </div>

                        <div className="overflow-x-auto border border-[#20235A]/10 bg-white">
                            <table className="w-full min-w-[850px] border-collapse text-left">
                                <thead>
                                    <tr className="bg-[#20235A] text-white">
                                        <th className="w-[17%] px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                            Date
                                        </th>
                                        <th className="w-[43%] px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                            Session Title
                                        </th>
                                        <th className="w-[40%] px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.15em]">
                                            Session Speaker
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {sixDayFdpSchedule.map((item, index) => (
                                        <tr
                                            key={item.day}
                                            className={`border-b border-[#20235A]/10 ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"
                                                }`}
                                        >
                                            <td className="px-5 py-6 align-top">
                                                <p className="text-[13px] font-semibold text-[#20235A]">
                                                    {item.day}
                                                </p>
                                                <p className="mt-1 text-[13px] text-[#514E49]">
                                                    {item.date}
                                                </p>
                                                <p className="mt-1 text-[12px] text-[#8F7746]">
                                                    {item.weekday}
                                                </p>
                                            </td>

                                            <td className="px-5 py-6 align-top">
                                                <p className="text-[14px] font-semibold leading-7 text-[#20235A]">
                                                    {item.title}
                                                </p>
                                            </td>

                                            <td className="px-5 py-6 align-top">
                                                <p className="text-[14px] font-semibold text-[#20235A]">
                                                    {item.speaker}
                                                </p>
                                                <p className="mt-2 text-[13px] leading-6 text-[#716D66]">
                                                    {item.designation}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-[11px] text-[#8A857D]">
                            Scroll horizontally to view the complete schedule on smaller
                            screens.
                        </p>
                    </div>
                </div>

                {/* Online FDP Screenshots */}
                <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-8">
                            <div className="mb-5 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#B89B5E]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Event Gallery
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                Screenshots of Online FDP
                            </h3>
                            <p className="mt-3 text-[14px] leading-7 text-[#716D66]">
                                Glimpses from the six-day online Faculty Development Programme.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {sixDayFdpScreenshots.map((image, index) => (
                                <div
                                    key={image.src}
                                    className={`group relative overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                                        }`}
                                >
                                    <div
                                        className={`relative ${index === 0
                                            ? "aspect-[16/8]"
                                            : "aspect-[4/3]"
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-contain"
                                            sizes={
                                                index === 0
                                                    ? "(max-width: 1024px) 100vw, 66vw"
                                                    : "(max-width: 640px) 100vw, 33vw"
                                            }
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20235A]/70 to-transparent px-4 pb-4 pt-10">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                            FDP Session {index + 1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sample Certificate */}
                <div className="bg-[#20235A] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Recognition
                                </span>
                            </div>

                            <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                Sample Certificate
                            </h3>

                            <p className="mt-5 text-[14px] leading-7 text-white/65">
                                A sample certificate issued to participants of the Six-Day
                                Faculty Development Programme on Bridging Electronics and
                                Biomedical Engineering: Innovations and Emerging Technologies.
                            </p>

                            <div className="mt-8 h-px w-16 bg-[#D2B87C]" />
                        </div>

                        <div className="relative border border-[#D2B87C]/30 bg-white p-3 sm:p-5">
                            <div className="relative aspect-[1.414/1] w-full bg-[#F2EFE8]">
                                <Image
                                    src={`${IMAGE_BASE}/Ece_Fdp_img14.webp`}
                                    alt="Sample certificate of the Six-Day Faculty Development Programme"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 65vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-[1440px]">

                    {/* Section Label */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="h-px w-12 bg-[#B89B5E]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                            Faculty Development Programme
                        </span>
                    </div>

                    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                        {/* FDP Write-up */}
                        <div>
                            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                Department of Electronics and Communication Engineering
                            </p>

                            <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Six-Day FDP
                            </h2>

                            <h3 className="mt-4 text-base font-semibold leading-7 text-[#8F7746] sm:text-lg">
                                Bridging Electronics and Biomedical Engineering: Innovations and
                                Emerging Technologies
                            </h3>

                            <div className="my-7 h-px w-full bg-[#20235A]/10" />

                            <p className="text-justify text-[15px] leading-8 text-[#514E49]">
                                The Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre (Autonomous) successfully organized a Six-Day Faculty Development Programme on “Bridging Electronics and Biomedical Engineering: Innovations and Emerging Technologies” from 24th to 29th November 2025 in online mode. The FDP brought together 88 participants, including faculty members, research scholars, and academicians from various institutions, to explore the interdisciplinary convergence of electronics and biomedical engineering. Eminent experts from reputed institutions such as New Horizon College of Engineering, Manipal Institute of Technology, Sreepathy Institute of Management and Technology, and Sahrdaya College of Engineering & Technology delivered insightful technical sessions on AI integration, IoT-driven healthcare systems, wearable and flexible electronics, 5G-enabled biomedical communication, micro and nanoelectronics, and smart bio-enabled materials. The programme was inaugurated by Dr. Anoop J, Principal, and guided by Dr. Mredhula L, HoD, ECE, emphasizing the importance of interdisciplinary research and innovation in addressing modern healthcare challenges. The FDP successfully enhanced research orientation, fostered collaborative learning, and strengthened academic networking in emerging domains at the intersection of electronics and biomedical engineering.

                            </p>

                            {/* Programme Highlights */}
                            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-[#20235A]/10 pt-7 sm:grid-cols-3">

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                        Duration
                                    </p>
                                    <p className="mt-2 text-sm font-semibold text-[#20235A]">
                                        6 Days
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                        Participants
                                    </p>
                                    <p className="mt-2 text-sm font-semibold text-[#20235A]">
                                        88 Registered
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                                        Mode
                                    </p>
                                    <p className="mt-2 text-sm font-semibold text-[#20235A]">
                                        Online
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* FDP Poster */}
                        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">

                            {/* Decorative Frame */}
                            <div className="absolute -right-3 -top-3 h-full w-full border border-[#D2B87C]/70 sm:-right-5 sm:-top-5" />

                            <div className="relative overflow-hidden border border-[#20235A]/10 bg-white p-2 sm:p-3">
                                <div className="relative aspect-[3/4] w-full bg-[#F2EFE8]">
                                    <Image
                                        src={`${IMAGE_BASE}/Ece_Fdp_img8.webp`}
                                        alt="Six-Day FDP poster on Bridging Electronics and Biomedical Engineering"
                                        fill
                                        priority
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                    />
                                </div>
                            </div>

                            {/* Poster Caption */}
                            <div className="mt-5 flex items-center justify-between gap-4 border-b border-[#20235A]/10 pb-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        ECE Department
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-[#20235A]">
                                        Six-Day Faculty Development Programme
                                    </p>
                                </div>

                                <span className="shrink-0 text-[11px] font-semibold text-[#8F7746]">
                                    24–29 NOV 2025
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ---------Report Mathlab section-------- */}

            <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-[1200px]">

                    {/* ACCORDION */}
                    <details
                        name="ece-association-activities"
                        className="group border border-[#D2B87C]/50 bg-white"
                    >

                        {/* ACCORDION HEADING */}
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-6 transition-colors duration-300 hover:bg-[#F2EFE8] sm:px-8 sm:py-8 [&::-webkit-details-marker]:hidden">

                            <div className="min-w-0">
                                <SectionLabel>
                                    Association Activities / Technical Workshop
                                </SectionLabel>

                                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <h2 className="font-serif text-2xl font-medium text-[#20235A] sm:text-3xl lg:text-4xl">
                                            Hands-on Workshop
                                        </h2>

                                        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#66636A]">
                                            Modeling and Simulation of Digital Communication
                                            Systems with MATLAB–Simulink.
                                        </p>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-2 text-sm text-[#8F7746]">
                                        <CalendarDays size={17} strokeWidth={1.6} />
                                        <span>06 January 2026</span>
                                    </div>
                                </div>
                            </div>

                            {/* ACCORDION ARROW */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-open:rotate-180 group-open:bg-[#20235A] group-open:text-white sm:h-12 sm:w-12">
                                <ChevronDown size={20} strokeWidth={1.6} />
                            </div>
                        </summary>

                        {/* EXPANDED ACCORDION CONTENT */}
                        <div className="border-t border-[#D2B87C]/50 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">

                            {/* WORKSHOP CONTENT */}
                            <div className="grid gap-10 lg:grid-cols-[0.32fr_1fr] lg:gap-16">

                                {/* LEFT INFORMATION PANEL */}
                                <aside className="h-fit border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-6 lg:sticky lg:top-28">

                                    <SectionLabel>
                                        Workshop Programme
                                    </SectionLabel>

                                    <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-[#20235A]">
                                        Digital Communication Systems with MATLAB–Simulink
                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-[#66636A]">
                                        Hands-on Technical Workshop
                                    </p>

                                    <div className="mt-7 space-y-5 border-t border-[#D2B87C]/50 pt-6">

                                        {/* DATE */}
                                        <div className="flex items-start gap-3">
                                            <CalendarDays
                                                size={19}
                                                className="mt-1 shrink-0 text-[#A88B50]"
                                                strokeWidth={1.6}
                                            />

                                            <div>
                                                <p className="text-sm font-medium text-[#20235A]">
                                                    Date
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                                    06 January 2026
                                                </p>
                                            </div>
                                        </div>

                                        {/* TIME */}
                                        <div className="flex items-start gap-3">
                                            <Clock3
                                                size={19}
                                                className="mt-1 shrink-0 text-[#A88B50]"
                                                strokeWidth={1.6}
                                            />

                                            <div>
                                                <p className="text-sm font-medium text-[#20235A]">
                                                    Time
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                                    10:00 AM – 4:00 PM
                                                </p>
                                            </div>
                                        </div>

                                        {/* PARTICIPANTS */}
                                        <div className="flex items-start gap-3">
                                            <Users
                                                size={19}
                                                className="mt-1 shrink-0 text-[#A88B50]"
                                                strokeWidth={1.6}
                                            />

                                            <div>
                                                <p className="text-sm font-medium text-[#20235A]">
                                                    Participants
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                                    40 Students
                                                </p>
                                            </div>
                                        </div>

                                        {/* ORGANIZER */}
                                        <div className="flex items-start gap-3">
                                            <GraduationCap
                                                size={19}
                                                className="mt-1 shrink-0 text-[#A88B50]"
                                                strokeWidth={1.6}
                                            />

                                            <div>
                                                <p className="text-sm font-medium text-[#20235A]">
                                                    Organized By
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                                    Department of Electronics and
                                                    Communication Engineering, NCERC
                                                </p>
                                            </div>
                                        </div>

                                        {/* RESOURCE PERSON */}
                                        <div className="flex items-start gap-3">
                                            <BookOpen
                                                size={19}
                                                className="mt-1 shrink-0 text-[#A88B50]"
                                                strokeWidth={1.6}
                                            />

                                            <div>
                                                <p className="text-sm font-medium text-[#20235A]">
                                                    Resource Person
                                                </p>
                                                <p className="mt-1 text-sm leading-6 text-[#66636A]">
                                                    Mr. Dhanoop K
                                                    <br />
                                                    Application Engineer
                                                    <br />
                                                    CoreEL Technologies India Pvt. Ltd., Bangalore
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </aside>

                                {/* RIGHT REPORT CONTENT */}
                                <div className="min-w-0">

                                    {/* WORKSHOP INTRODUCTION */}
                                    <div className="mb-10">

                                        <SectionLabel>
                                            Workshop Report
                                        </SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            Modeling and Simulation of Digital Communication Systems with MATLAB–Simulink
                                        </h3>

                                        <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#55545A]">
                                            <p>
                                                A one-day technical workshop on “Modelling and Simulation of Digital Communication Systems with MATLAB–SIMULINK” was organized by the Department of Electronics and Communication Engineering, Nehru College of Engineering & Research Centre, Pampady, on 06 January 2026 from 10:00 AM to 4:00 PM.
                                            </p>

                                            <p>
                                                The program was formally inaugurated by Dr. Mredhula L, HoD and Professor, Department of ECE, Nehru College of Engineering & Research Centre. In her inaugural address, she highlighted the importance of simulation tools in understanding and designing modern digital communication systems and encouraged students to actively engage in practical learning beyond classroom theory.
                                            </p>

                                            <p>
                                                The technical session was handled by Mr. Dhanoop K, Application Engineer, CoreEL Technologies India Pvt. Ltd., Bangalore. The session aimed to provide hands-on exposure to modeling and simulation of digital communication systems using MATLAB and Simulink platforms.
                                            </p>
                                        </div>
                                    </div>

                                    {/* OBJECTIVES */}
                                    <div className="mb-10">

                                        <SectionLabel>
                                            Learning Objectives
                                        </SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            Objectives of the Program
                                        </h3>

                                        <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#55545A]">
                                            {objectives.map((objective, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4"
                                                >
                                                    <span className="mt-1 text-sm text-[#A88B50]">
                                                        0{index + 1}
                                                    </span>

                                                    <p>{objective}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* TOPICS COVERED */}
                                    <div className="mb-10">

                                        <SectionLabel>
                                            Technical Sessions
                                        </SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            Topics Covered
                                        </h3>

                                        <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                                            {topics.map((topic, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#20235A] text-[10px] text-white">
                                                        {index + 1}
                                                    </span>

                                                    <p className="text-[15px] leading-7 text-[#55545A]">
                                                        {topic}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* STUDENT PARTICIPATION */}
                                    <div className="mb-10 border-l-2 border-[#D2B87C] bg-[#F2EFE8] p-6 sm:p-7">

                                        <SectionLabel>
                                            Hands-on Learning Experience
                                        </SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A]">
                                            Student Participation and Activities
                                        </h3>

                                        <p className="mt-5 text-[15px] leading-8 text-[#55545A]">
                                            Students of S5 and S7 B.Tech Electronics and
                                            Communication Engineering (40 students)
                                            actively participated in the workshop on
                                            Simulink modelling and communication system
                                            simulation. The session covered introduction
                                            to the Simulink environment, building simple
                                            models using functional blocks, running
                                            simulations and analyzing outputs, as well as
                                            implementation of a PCM transmitter including
                                            sampling, quantization, and encoding, and a
                                            PCM receiver with decoding and filtering.
                                            Students also performed random symbol
                                            generation, BPSK modulation and demodulation,
                                            transmission through an AWGN channel, symbol
                                            reconstruction, and calculation of BER and
                                            Symbol Error Rate. The workshop witnessed
                                            enthusiastic involvement, particularly during
                                            the hands-on simulation exercises, where
                                            students practically implemented modulation
                                            schemes and analyzed the effect of noise on
                                            signal transmission.
                                        </p>
                                    </div>

                                    {/* OUTCOMES */}
                                    <div>

                                        <SectionLabel>
                                            Programme Outcomes
                                        </SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            Outcome of the Workshop
                                        </h3>

                                        <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#55545A]">
                                            {outcomes.map((outcome, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2
                                                        size={19}
                                                        className="mt-1 shrink-0 text-[#A88B50]"
                                                        strokeWidth={1.6}
                                                    />

                                                    <p>{outcome}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* MAIN WORKSHOP IMAGE */}
                            <div className="mt-16 border-t border-[#D2B87C]/50 pt-12">

                                <SectionLabel>
                                    Workshop Highlights
                                </SectionLabel>

                                <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    A Glimpse of the Workshop
                                </h3>

                                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-[#F0ECE3]">
                                    <Image
                                        src={`${IMAGE_BASE}/Ece_Fdp_img15.webp`}
                                        alt="Hands-on workshop on digital communication systems using MATLAB and Simulink"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* EVENT GALLERY */}
                            <div className="mt-16 border-t border-[#D2B87C]/50 pt-12">

                                <SectionLabel>
                                    Workshop Gallery
                                </SectionLabel>

                                <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    Glimpse of the Event
                                </h3>

                                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-[#F0ECE3]">
                                    <Image
                                        src={`${IMAGE_BASE}/Ece_Fdp_img16.webp`}
                                        alt="Students participating in the MATLAB Simulink workshop"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>


                            {/* Workshop Overview */}
                            <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-14 mt-9">
                                {/* Description */}
                                <div className="space-y-6">
                                    <div>
                                        <SectionLabel>WORKSHOP OVERVIEW</SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            HANDS ON WORKSHOP ON “MODELING AND SIMULATION OF DIGITAL COMMUNICATION SYSTEMS WITH MATLAB -SIMULINK”

                                        </h3>
                                    </div>

                                    <p className="text-justify text-[15px] leading-8 text-[#55545A]">
                                        The Department of Electronics and Communication Engineering at Nehru College of Engineering and Research Centre organized a one-day hands-on workshop on “Modeling and Simulation of Digital Communication Systems with MATLAB–Simulink” on 06 January 2026. The programme was inaugurated by Dr. Mredhula L, HoD & Professor, ECE, who emphasized the significance of simulation tools in designing modern communication systems. The technical session was led by Mr. Dhanoop K, Application Engineer at CoreEL Technologies India Pvt. Ltd., providing students with practical exposure to building and analyzing digital communication models using MATLAB and Simulink. Forty students from S5 and S7 ECE actively participated in sessions covering PCM transmitter and receiver design, BPSK modulation and demodulation, AWGN channel simulation, and BER analysis. The workshop effectively bridged theoretical concepts with practical implementation, enhancing students’ technical competence and understanding of real-world communication system design.
                                    </p>

                                    {/* Workshop Details */}
                                    <div className="grid grid-cols-1 gap-4 border-t border-[#D2B87C]/50 pt-5 sm:grid-cols-2">
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Date
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                06 January 2026
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Participants
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                40 Students – S5 and S7 ECE
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Resource Person
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                Mr. Dhanoop K
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Organization
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                CoreEL Technologies India Pvt. Ltd.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Workshop Poster */}
                                <div className="relative mx-auto w-full max-w-[480px]">
                                    <div className="relative overflow-hidden border border-[#D2B87C]/40 bg-[#F2EFE8]">
                                        <Image
                                            src={`${IMAGE_BASE}/Ece_Fdp_img15.webp`}
                                            alt="Poster of the MATLAB–Simulink hands-on workshop on digital communication systems"
                                            width={900}
                                            height={1200}
                                            className="h-auto w-full object-contain"
                                            priority={false}
                                        />
                                    </div>

                                    <p className="mt-3 text-center text-[12px] leading-6 text-[#8F7746]">
                                        Workshop Poster – 06 January 2026
                                    </p>
                                </div>
                            </section>



                        </div>
                    </details>

                </div>


            </section>


            {/* Hyperspectral Image Processing Workshop Accordion */}
            <section className="px-5 py-6 sm:px-8 lg:px-16">
                <div className="mx-auto max-w-[1200px]">
                    <details
                        name="ece-association-workshops"
                        className="group overflow-hidden border border-[#D2B87C]/50 bg-[#FAF7F2]"
                    >
                        {/* Accordion Header */}
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-6 sm:px-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                            <div className="space-y-2">
                                <SectionLabel>HANDS-ON WORKSHOP</SectionLabel>

                                <h3 className="font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                    Hyperspectral Image Processing and Analysis
                                </h3>

                                <p className="text-[13px] leading-6 text-[#55545A] sm:text-[15px]">
                                    Pre-processing and Classification using MATLAB
                                </p>
                            </div>

                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-transform duration-300 group-open:rotate-180">
                                <ChevronDown size={20} />
                            </span>
                        </summary>

                        {/* Accordion Content */}
                        <div className="border-t border-[#D2B87C]/40 px-5 py-8 sm:px-8 sm:py-10">
                            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-14">

                                {/* Workshop Description */}
                                <div className="space-y-6">
                                    <div>
                                        <SectionLabel>WORKSHOP OVERVIEW</SectionLabel>

                                        <h3 className="mt-3 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                                            Hyperspectral Image Processing and Analysis: Pre-processing
                                            and Classification using MATLAB
                                        </h3>
                                    </div>

                                    <p className="text-justify text-[15px] leading-8 text-[#55545A]">
                                        The Department of Electronics and Communication Engineering
                                        at NCERC successfully organized a two-day hands-on workshop
                                        titled “Hyperspectral Image Processing and Analysis:
                                        Pre-processing and Classification using MATLAB” on 27th and
                                        28th February 2026 at the Research Lab. The workshop aimed to
                                        provide practical exposure to students in the emerging domain
                                        of hyperspectral imaging and witnessed the active participation
                                        of 30 enthusiastic learners. Designed to bridge the gap between
                                        theoretical knowledge and real-world applications, the
                                        programme covered fundamental concepts, pre-processing
                                        techniques, feature extraction, dimensionality reduction, and
                                        supervised classification using MATLAB. The sessions were
                                        expertly handled by Mr. Nithin Joe, Dr. Mredhula L, Mr. Vysak
                                        Valsan, and Mr. Suresh P, who effectively combined theory with
                                        hands-on demonstrations. Participants engaged in intensive
                                        practical sessions involving real datasets, enhancing their
                                        understanding and technical skills.
                                    </p>

                                    {/* Workshop Details */}
                                    <div className="grid grid-cols-1 gap-4 border-t border-[#D2B87C]/50 pt-5 sm:grid-cols-2">
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Date
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                27–28 February 2026
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Venue
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                Research Lab
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Participants
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                30 Students
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Duration
                                            </p>
                                            <p className="mt-1 text-[15px] leading-7 text-[#55545A]">
                                                Two Days
                                            </p>
                                        </div>
                                    </div>

                                    {/* Resource Persons */}
                                    <div className="border-t border-[#D2B87C]/50 pt-5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Resource Persons
                                        </p>

                                        <p className="mt-2 text-[15px] leading-8 text-[#55545A]">
                                            Mr. Nithin Joe, Dr. Mredhula L, Mr. Vysak Valsan, and
                                            Mr. Suresh P
                                        </p>
                                    </div>
                                </div>

                                {/* Workshop Poster */}
                                <div className="relative mx-auto w-full max-w-[480px]">
                                    <div className="relative overflow-hidden border border-[#D2B87C]/40 bg-[#F2EFE8]">
                                        <Image
                                            src={`${IMAGE_BASE}/Ece_Fdp_img17.webp`}
                                            alt="Poster of the Hyperspectral Image Processing and Analysis workshop"
                                            width={900}
                                            height={1200}
                                            className="h-auto w-full object-contain"
                                            priority={false}
                                        />
                                    </div>

                                    <p className="mt-3 text-center text-[12px] leading-6 text-[#8F7746]">
                                        Workshop Poster – 27 & 28 February 2026
                                    </p>
                                </div>

                            </div>
                        </div>


                    
                     
                    </details>
                </div>
            </section>




            <FooterSection />
        </main>
    );
}

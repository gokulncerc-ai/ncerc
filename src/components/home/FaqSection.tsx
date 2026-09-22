"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        question: "How does autonomous status benefit B.Tech students at Nehru College of Engineering & Research Centre?",
        answer:
            "Autonomous status gives NCERC greater flexibility to develop and update its curriculum based on emerging technologies and industry requirements. Students can benefit from flexible academic pathways, skill-oriented learning, updated courses, and multidisciplinary opportunities while remaining affiliated with APJ Abdul Kalam Technological University.",
    },
    {
        question: "What makes an NBA-accredited engineering programme at NCERC valuable for students planning higher studies or technical careers?",
        answer:
            "NBA accreditation indicates that an eligible engineering programme has undergone an outcome-based quality assessment. At NCERC, NBA-accredited programmes provide students with an academic environment focused on programme outcomes, technical competencies, practical learning, and continuous improvement—useful foundations for higher studies and engineering careers.",
    },
    {
        question: "Does NCERC offer international collaboration and global learning opportunities?",
        answer:
            "NCERC collaborates with reputed institutions and industry partners to provide students with global exposure through academic partnerships, expert sessions, exchange opportunities, and international learning initiatives that enhance their career prospects.",
    },
    {
        question: "What makes NCERC one of the top engineering colleges in India for research?",
        answer:
            "NCERC promotes a strong research culture with modern laboratories, funded projects, innovation centres, faculty-led research, and opportunities for students to participate in national and international conferences.",
    },
    {
        question: "How does NCERC help students develop technical and soft skills?",
        answer:
            "NCERC provides value-added certification programs, aptitude training, communication skills development, technical workshops, coding competitions, leadership activities, and personality development sessions to prepare students for successful careers.",
    },
    {
        question: "What student clubs and extracurricular activities are available at NCERC?",
        answer:
            "NCERC offers a vibrant campus life with technical clubs, innovation cells, cultural events, sports, NSS, IEEE, IEDC, entrepreneurship initiatives, and various student-led organizations that encourage holistic development.",
    },
    {
        question: "What makes NCERC one of the best autonomous engineering colleges in Kerala?",
        answer:
            "NCERC is recognized for its autonomous status, industry-oriented curriculum, experienced faculty, modern infrastructure, research opportunities, and strong placement support. The institution focuses on academic excellence and skill development to prepare students for successful careers.",
    },
    {
        question: "Does NCERC provide internship and industry exposure opportunities?",
        answer:
            "Yes, NCERC encourages students to participate in internships, industrial visits, workshops, seminars, and industry collaborations. These opportunities help students gain practical knowledge and enhance their employability.",
    },
    {
        question: "What facilities are available for students at NCERC?",
        answer:
            "NCERC offers state-of-the-art laboratories, smart classrooms, innovation and research centers, a well-stocked library, hostel facilities, sports amenities, and various student clubs to support holistic development.",
    },
    {
        question:
            "How does NCERC support innovation and entrepreneurship among students?",
        answer:
            "NCERC promotes innovation through project-based learning, research initiatives, entrepreneurship development programs, startup support activities, and participation in technical competitions and hackathons.",
    },
    {
        question: "What are the higher education opportunities after completing a B.Tech from NCERC?",
        answer:
            "Graduates from NCERC can pursue higher studies such as M.Tech, MBA, MS, and other specialized programs in India and abroad. The strong academic foundation provided by NCERC helps students excel in competitive examinations and advanced studies.",
    },
    {
        question: "Why is Nehru College of Engineering and Research Centre considered one of the best engineering colleges in Kerala?",
        answer:
            "Nehru College of Engineering and Research Centre is known for its academic excellence, autonomous status, advanced laboratories, experienced faculty, industry-oriented education, and strong focus on innovation and research."
    },
    {
        question: "What are the advantages of studying at Nehru College of Engineering and Research Centre?",
        answer:
            "Students at NCERC benefit from modern campus facilities, industry collaborations, technical workshops, innovation programs, research opportunities, and skill-based engineering education that prepares them for successful careers."
    },
    {
        question: "How does Nehru College of Engineering and Research Centre prepare students for future careers?",
        answer:
            "NCERC- Top engineering college in Kerala, focuses on practical learning, research activities, technical skill development, industry exposure, and project-based education to help students become skilled professionals and future innovators."
    },
    {
        question: "Which is the best engineering college in Kerala for quality education and placements?",
        answer: "Nehru College of Engineering and Research Centre (NCERC) is widely regarded as one of the best engineering colleges in Kerala, known for academic excellence, industry-oriented curriculum, strong placement support, and a legacy of quality education under the Nehru Group of Institutions."
    },
    {
        question: "Is NCERC an autonomous engineering college in Kerala?",
        answer: "Yes. NCERC is a leading autonomous engineering college in Kerala, affiliated to APJ Abdul Kalam Technological University (KTU). Its autonomous status allows academic flexibility, updated curriculum, and outcome-based education aligned with industry requirements."
    },
    {
        question: "What engineering courses are offered at NCERC?",
        answer: "NCERC offers B.Tech, M.Tech, MBA, and MCA programs in core and emerging disciplines including Mechanical Engineering, Electrical & Electronics Engineering, Civil Engineering, Computer Science & Engineering, Artificial Intelligence & Data Science, Mechatronics Engineering, and more."
    },
    {
        question: "Why should students choose NCERC for engineering studies in Kerala?",
        answer: "Students choose NCERC because it combines the advantages of being the best engineering college in Kerala with autonomous status, experienced faculty, advanced laboratories, strong industry partnerships, innovation-driven learning, and holistic student development."
    },
    {
        question: "How are placements at Nehru College of Engineering and Research Centre?",
        answer: "NCERC has a dedicated Training & Placement Cell that provides career guidance, skill training, internships, and campus recruitment opportunities, ensuring excellent placement support for students across disciplines."
    }

];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    return (
        <section className="relative overflow-hidden bg-slate-50 pt-16 pb-8 sm:pt-20 sm:pb-12">
            {/* Soft background blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-slate-200/50 blur-3xl"
            />

            {/* Dotted grid accents */}
            <div
                aria-hidden
                className="absolute left-10 top-10 hidden h-28 w-28 lg:block"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    color: "#94a3b8",
                    opacity: 0.6,
                }}
            />
            <div
                aria-hidden
                className="absolute bottom-16 right-10 hidden h-28 w-28 lg:block"
                style={{
                    backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                    color: "#94a3b8",
                    opacity: 0.6,
                }}
            />

            <div className="relative mx-auto max-w-4xl px-6">
                {/* Heading */}
                <div className="text-center">
                    <div className="flex -mt-6 items-center justify-center gap-3">
                        <span className="h-px w-14 bg-gold-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            FAQ
                        </span>
                        <span className="h-px w-14 bg-gold-500" />
                    </div>

                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <div className="mx-auto my-6 h-1 w-16 bg-gold-500" />

                    <p className="mx-auto max-w-md text-base leading-relaxed text-slate-600">
                        Find answers to the most common questions about NCERC, our
                        programs, admissions, and campus life.
                    </p>
                </div>

                {/* Accordion */}
                <div className="mt-14 overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy-950/5">
                    {faqs.map((faq, index) => {
                        const isOpen = index === openIndex;
                        const number = String(index + 1).padStart(2, "0");

                        return (
                            <div
                                key={faq.question}
                                className={index > 0 ? "border-t border-slate-100" : ""}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                    className={`flex w-full items-center gap-5 px-6 py-5 text-left transition sm:px-8 ${isOpen ? "bg-slate-50" : "bg-white"
                                        }`}
                                >
                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${isOpen ? "bg-navy-950 text-white" : "bg-gold-500/15 text-navy-950"
                                            }`}
                                    >
                                        {number}
                                    </span>

                                    <span className="flex-1 text-sm font-semibold text-navy-950 sm:text-base">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${isOpen
                                            ? "border-navy-950 text-navy-950"
                                            : "border-navy-950/30 text-navy-950/70"
                                            }`}
                                    >
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="bg-slate-50 px-6 pb-6 sm:px-8">
                                        <div className="ml-14 border-l-2 border-gold-500 pl-4 sm:ml-[3.75rem]">
                                            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
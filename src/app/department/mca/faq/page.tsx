"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question:
            "Why is Nehru College of Engineering and Research Centre considered one of the best colleges for MCA in Kerala?",
        answer:
            "Nehru College of Engineering and Research Centre provides an academically focused environment for MCA students with a strong emphasis on practical learning, contemporary computing technologies, projects, professional development and industry-oriented education. The programme is designed to help students build the technical and professional capabilities required for today's evolving IT industry.",
    },
    {
        question:
            "What makes the MCA program at NCERC stand out among MCA colleges in South India?",
        answer:
            "The MCA programme at NCERC combines intensive theoretical learning with practical application, project-based learning, seminars, technical activities and opportunities to engage with current computational technologies. The programme also encourages students to develop communication, problem-solving, teamwork and professional skills alongside their technical knowledge.",
    },
    {
        question:
            "What career opportunities are available after completing MCA from Nehru College of Engineering and Research Centre?",
        answer:
            "Graduates of the MCA program at NCERC have excellent career opportunities in software development, data analytics, cloud computing, cybersecurity, testing, and IT consulting. Many students are placed in reputed companies, while others pursue higher education or entrepreneurship, making NCERC a preferred choice for MCA aspirants in Kerala.",
    },
    {
        question:
            "Does NCERC provide placement support for MCA students?",
        answer:
            "Yes. The placement cell supports MCA students by providing career guidance, placement preparation and opportunities to connect with recruiting organizations. Students are encouraged to develop both technical and professional skills required to participate confidently in recruitment processes and build successful careers in the IT sector.",
    },
    {
        question:
            "Is Nehru College of Engineering and Research Centre a good choice for students from outside Kerala?",
        answer:
            "Yes. NCERC provides an academic environment that welcomes students from different regions and backgrounds. The MCA programme offers opportunities for students to develop technical expertise, participate in academic and co-curricular activities, engage in projects and prepare for careers in the technology sector.",
    },
];

const Page = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-white"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                {/* =========================
                    SECTION INTRO
                ========================== */}
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

                    {/* Left Heading */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Student Information
                            </span>
                        </div>

                        <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[54px]">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                            Find answers to some of the most common questions
                            about the MCA programme, academics, placements and
                            student opportunities at NCERC.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/45">
                                MCA Programme
                            </span>
                        </div>

                        {/* =========================
                            MCA VISUAL
                        ========================== */}
                        <div className="mt-6 overflow-hidden border border-[#20235A]/10">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
                                alt="MCA Computer Technology"
                                className="h-36 w-full object-cover sm:h-40"
                            />
                        </div>
                    </div>

                    {/* =========================
                        FAQ LIST
                    ========================== */}
                    <div className="border-t border-[#20235A]/10">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={item.question}
                                    className="border-b border-[#20235A]/10"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        className="group flex w-full items-start justify-between gap-5 py-5 text-left sm:py-6"
                                    >
                                        <span className="flex min-w-0 items-start gap-4 sm:gap-5">
                                            {/* Number */}
                                            <span
                                                className={`mt-0.5 shrink-0 text-[9px] font-medium tracking-[0.12em] transition-colors duration-300 ${isOpen
                                                        ? "text-[#D2B87C]"
                                                        : "text-[#1E1917]/30"
                                                    }`}
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            {/* Question */}
                                            <span
                                                className={`font-serif text-[18px] leading-[1.3] tracking-[-0.01em] transition-colors duration-300 sm:text-[20px] ${isOpen
                                                        ? "text-[#20235A]"
                                                        : "text-[#1E1917]/80 group-hover:text-[#20235A]"
                                                    }`}
                                            >
                                                {item.question}
                                            </span>
                                        </span>

                                        {/* Toggle Icon */}
                                        <span
                                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${isOpen
                                                    ? "border-[#20235A] bg-[#20235A] text-[#D2B87C]"
                                                    : "border-[#20235A]/15 bg-[#FAF7F2] text-[#20235A]/50 group-hover:border-[#D2B87C] group-hover:text-[#20235A]"
                                                }`}
                                        >
                                            <ChevronDown
                                                size={15}
                                                strokeWidth={1.5}
                                                className={`transition-transform duration-300 ${isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                    }`}
                                            />
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="pb-6 pl-9 pr-2 sm:pl-[3.25rem] sm:pr-12">
                                                <div className="border-l-2 border-[#D2B87C] pl-4 sm:pl-5">
                                                    <p className="text-[13px] leading-7 text-[#1E1917]/60 sm:text-[14px]">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =========================
                    BOTTOM NOTE
                ========================== */}
                <div className="mt-10 border-t border-[#20235A]/10 pt-6 sm:mt-12">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[11px] leading-6 text-[#1E1917]/45">
                            Still have questions about the MCA programme?
                        </p>

                        <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
                            Department of Computer Applications
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
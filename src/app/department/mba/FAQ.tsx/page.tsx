"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question:
      "What specializations are offered in the MBA program at Nehru College of Engineering and Research Centre?",
    answer:
      "The MBA program at Nehru College of Engineering and Research Centre offers industry-relevant specializations such as Finance, Marketing, Human Resource Management, Operations, Airline management, Healthcare management, Business analytics and Entrepreneurship management. The curriculum is designed to meet current business trends, making NCERC one of the best MBA colleges in Kerala for management education.",
  },
  {
    question:
      "How does NCERC prepare MBA students for leadership and managerial roles?",
    answer:
      "NCERC focuses on holistic leadership development through case studies, live projects, industrial visits, internships, and personality development programs. This practical exposure helps students build decision-making and strategic skills, positioning NCERC among the top MBA colleges in South India.",
  },
  {
    question:
      "What kind of industry exposure do MBA students receive at NCERC?",
    answer:
      "MBA students at NCERC benefit from regular interactions with industry experts, corporate mentoring sessions, workshops, and internships. These initiatives bridge the gap between theory and practice, ensuring students are job-ready and competitive in the corporate world.",
  },
  {
    question:
      "How strong is the placement support for MBA students at Nehru College of Engineering and Research Centre?",
    answer:
      "NCERC has a dedicated placement and career development cell that supports MBA students with training in aptitude, communication, resume building, and interview skills. Consistent placement assistance with reputed companies strengthens NCERC's standing as a leading MBA college in Kerala.",
  },
  {
    question:
      "Why should students choose NCERC for MBA studies in South India?",
    answer:
      "With experienced faculty, modern infrastructure, strong academic discipline, and a student-centric learning environment, NCERC offers excellent value for management education. Its focus on employability, ethics, and leadership makes it a preferred destination for students seeking the best MBA college in South India.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

          {/* LEFT: FAQ introduction and image */}
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
              Find answers to common questions about the MBA
              programme, specializations, industry exposure,
              placements and student opportunities at NCERC.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-2 w-2 bg-[#D2B87C]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/45">
                MBA Programme
              </span>
            </div>

            {/* MBA image using a direct URL */}
            <div className="group relative mt-6 overflow-hidden border border-[#20235A]/10">
              <div
                role="img"
                aria-label="Students collaborating on a management project"
                className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03] sm:h-56 lg:h-64"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/ff/9a/1f/ff9a1f4f5cb464b3eb9d1dea9cbc6455.jpg')",
                }}
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171A48]/85 via-[#20235A]/10 to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#D2B87C]" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                    Nehru School of Management
                  </span>
                </div>

                <p className="max-w-xs font-serif text-xl leading-snug text-white sm:text-2xl">
                  Learn. Lead. Make an impact.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 h-1 w-1/3 bg-[#D2B87C]" />
            </div>
          </div>

          {/* RIGHT: FAQ accordion */}
          <div className="border-t border-[#20235A]/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#20235A]/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq - panel - ${index} `}
                    id={`faq - button - ${index} `}
                    className="group flex w-full items-start justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="flex min-w-0 items-start gap-4 sm:gap-5">
                      {/* Question number */}
                      <span
                        className={`mt - 1 shrink - 0 text - [9px] font - medium tracking - [0.12em] transition - colors duration - 300 ${isOpen
                            ? "text-[#D2B87C]"
                            : "text-[#1E1917]/30"
                          } `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`font - serif text - [18px] leading - [1.3] tracking - [-0.01em] transition - colors duration - 300 sm: text - [20px] ${isOpen
                            ? "text-[#20235A]"
                            : "text-[#1E1917]/80 group-hover:text-[#20235A]"
                          } `}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* Toggle icon */}
                    <span
                      aria-hidden="true"
                      className={`mt - 0.5 flex h - 8 w - 8 shrink - 0 items - center justify - center border transition - all duration - 300 ${isOpen
                          ? "border-[#20235A] bg-[#20235A] text-[#D2B87C]"
                          : "border-[#20235A]/15 bg-[#FAF7F2] text-[#20235A]/50 group-hover:border-[#D2B87C] group-hover:text-[#20235A]"
                        } `}
                    >
                      <ChevronDown
                        size={15}
                        strokeWidth={1.5}
                        className={`transition - transform duration - 300 ${isOpen ? "rotate-180" : ""
                          } `}
                      />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    id={`faq - panel - ${index} `}
                    role="region"
                    aria-labelledby={`faq - button - ${index} `}
                    aria-hidden={!isOpen}
                    className={`grid transition - all duration - 300 ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      } `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6 pl-9 pr-2 sm:pl-[3.25rem] sm:pr-12">
                        <div className="border-l-2 border-[#D2B87C] pl-4 sm:pl-5">
                          <p className="text-[13px] leading-7 text-[#1E1917]/60 sm:text-[14px]">
                            {faq.answer}
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

        {/* Bottom note */}
        <div className="mt-10 border-t border-[#20235A]/10 pt-6 sm:mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-6 text-[#1E1917]/45">
              Still have questions about the MBA programme?
            </p>

            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#8F7746]">
              Nehru School of Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

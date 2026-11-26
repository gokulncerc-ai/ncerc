
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowDownRight,
    ArrowRight,
    BedDouble,
    BriefcaseBusiness,
    Building2,
    Bus,
    CheckCircle2,
    GraduationCap,
    Handshake,
    LibraryBig,
    Lightbulb,
    Presentation,
    ShieldCheck,
    Users,
    Award, ArrowUpRight
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "./DepartmentNav/DepartmentNav";




const DEPARTMENT_PATH = "/department/mba";








export default function MBAAboutPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}

                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                        <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">

                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">

                                <div className="mb-8 flex flex-wrap items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Nehru School of Management
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                    Management
                                    <span className="block italic text-[#D2B87C]">
                                        with purpose.
                                    </span>
                                </h1>

                                <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                                    Leadership • Strategy • Innovation
                                </p>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    Discover an approach to management education shaped by
                                    practical learning, industry exposure, professional skills
                                    and responsible citizenship. At Nehru School of Management,
                                    students develop the knowledge, perspectives and leadership
                                    capabilities to navigate an evolving business world.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#about-nsm"
                                        className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >
                                        Discover NSM
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <a
                                        href="#learning"
                                        className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        How We Learn
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </a>
                                </div>

                                {/* Programme Information */}
                                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                        <Award className="h-5 w-5 text-[#D2B87C]" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            MBA Programme
                                        </p>

                                        <p className="mt-1 text-sm text-white/55">
                                            Total student intake: 120
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
                                <Image
                                    src="https://i.pinimg.com/736x/1c/2d/45/1c2d45be957997c2e75cdd8bd94f331e.jpg"
                                    alt="Students collaborating in a management learning environment"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 45vw, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Management Education
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Preparing tomorrow's leaders through knowledge, vision and action.
                                            </p>
                                        </div>

                                        <Award className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>


                <InnerHeader activeTab="About" />











            </main>

            <FooterSection />
        </>
    );
}

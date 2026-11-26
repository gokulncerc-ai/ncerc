
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentsNavigation/DepartmentsNavigation";
import { ArrowDown, Quote } from "lucide-react";

const BASE_PATH = "/departments/mechatronics_engineering";

export default function HodDeskPage() {
    return (
        <>
            <SiteHeader />



            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full border border-[#D2B87C]/20" />

                <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
                    <div className="relative">
                        <div className="relative z-10 max-w-4xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                                    Mechatronics Engineering
                                </p>
                            </div>

                            <h1 className="max-w-3xl font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                                A Message
                                <br />
                                from the{" "}
                                <span className="italic text-[#D2B87C]">
                                    HOD
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                Inspiring innovation and interdisciplinary
                                excellence to engineer intelligent solutions
                                for a smarter future.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <a
                                    href="#hod-message"
                                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Read the Message

                                    <ArrowDown
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-y-1"
                                    />
                                </a>
                            </div>

                            {/* Breadcrumb */}
                            <div className="mt-12 flex items-center gap-3 text-xs text-white/55">
                                <Link
                                    href={BASE_PATH}
                                    className="transition-colors hover:text-white"
                                >
                                    Department
                                </Link>

                                <span className="text-[#D2B87C]">/</span>

                                <span className="text-white/85">
                                    HOD&apos;s Desk
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gold divider */}
                <div className="h-1 w-full bg-[#D2B87C]" />
            </section>
            <DepartmentNavigation />

            {/* HOD Message Section */}
            <section
                id="hod-message"
                className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
            >
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">

                    {/* Section Heading */}
                    <div className="mb-12 max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#B99A5B]" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C7545] sm:text-xs">
                                From the Head of the Department
                            </p>
                        </div>

                        <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                            Welcome to the Department of{" "}
                            <span className="italic text-[#9B804B]">
                                Mechatronics Engineering
                            </span>
                        </h2>
                    </div>

                    {/* Message and HOD Profile */}
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.72fr_1.5fr] lg:gap-16 xl:gap-20">

                        {/* HOD Image and Details */}
                        <div className="lg:sticky lg:top-28">
                            <div className="relative mx-auto w-full max-w-[390px] lg:max-w-none">

                                {/* Image Placeholder */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#F0ECE3]">
                                    {/*
                                      Replace the image below with the HOD's
                                      actual photograph.

                                      Suggested image path:
                                      /images/dpt/mechatronics-engineering/hod/geetha-ramadas.webp
                                    */}

                                    <Image
                                        src="\images\dpt\mechatronics-engineering\hod-image\Geetha_Ramdas_Hod_Mechatronics.webp"
                                        alt="Dr. Geetha Ramadas - Head of the Department"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 35vw"
                                        className="object-cover object-top"
                                    />

                                    {/* Decorative frame */}
                                    <div className="pointer-events-none absolute inset-4 border border-white/50" />
                                </div>

                                {/* HOD Name */}
                                <div className="relative -mt-1 bg-[#20235A] px-6 py-7 text-white sm:px-8">
                                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Head of the Department
                                    </p>

                                    <h3 className="font-serif text-2xl font-normal leading-snug sm:text-3xl">
                                        Dr. Geetha Ramadas
                                    </h3>

                                    <div className="mt-4 h-px w-12 bg-[#D2B87C]" />

                                    <p className="mt-4 text-xs leading-6 text-white/65">
                                        Department of Mechatronics Engineering
                                    </p>

                                    <p className="mt-1 text-xs leading-6 text-white/65">
                                        Nehru College of Engineering and
                                        Research Centre
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* HOD Message Content */}
                        <div className="min-w-0">

                            {/* Opening Quote */}
                            <div className="mb-8 flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EDE5D5] text-[#9B804B]">
                                    <Quote size={21} strokeWidth={1.5} />
                                </div>

                                <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                                    It gives me immense pleasure to welcome you
                                    to the Department of Mechatronics Engineering,
                                    a dynamic and interdisciplinary hub of
                                    learning, innovation, research and
                                    technological advancement.
                                </p>
                            </div>

                            <div className="space-y-6 text-justify text-[14px] leading-[2] text-[#55565F] sm:text-[15px] sm:leading-[2.05]">

                                <p>
                                    Mechatronics Engineering represents the seamless integration of Mechanical Engineering, Electronics, Electrical Engineering, Computer Science and Control Systems. As technology continues to evolve, the demand for engineers capable of designing and developing intelligent, automated and interconnected systems is growing rapidly. Our department is committed to preparing students to meet these emerging challenges through a strong foundation in engineering principles, practical exposure and innovative thinking.
                                </p>

                                <p>
                                    We strive to create a stimulating academic environment that encourages students to explore, experiment, innovate and transform ideas into meaningful solutions. Through a balanced blend of theoretical knowledge, hands-on laboratory experience, industry interaction, research activities, technical projects and collaborative learning, we aim to nurture competent, creative and responsible engineers.
                                </p>

                                <p>
                                    Our focus extends beyond academic excellence to developing essential professional attributes such as critical thinking, problem-solving, teamwork, communication, leadership and lifelong learning. We also encourage our students to undertake socially relevant projects and embrace emerging technologies in robotics, industrial automation, artificial intelligence, smart manufacturing, intelligent control systems and related fields.
                                </p>

                                <p>
                                    We firmly believe that strong collaboration between academia, industry and research institutions is essential for shaping future-ready engineers. The department continuously endeavours to strengthen these partnerships and provide students with opportunities to gain practical insights, industry exposure and global perspectives.
                                </p>

                                <p>
                                    I acknowledge the dedicated efforts of our faculty members, technical staff, students, alumni and industry partners in contributing to the growth and achievements of our Department.
                                </p>

                                <p>
                                    As we move forward, our vision is to establish the Department of Mechatronics Engineering as a centre of excellence in Interdisciplinary Engineering Education, Innovation and Research, empowering our students to become not merely technology users but technology creators and responsible contributors to society.
                                </p>
                            </div>

                            {/* Closing Message */}
                            <div className="mt-10 border-l-2 border-[#B99A5B] bg-[#F0ECE3] px-6 py-6 sm:px-8 sm:py-7">
                                <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                                    Let us learn, innovate, collaborate and engineer a smarter future!
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="mt-10">
                                <p className="mb-5 text-sm text-[#77736B]">
                                    With best wishes,
                                </p>

                                <h3 className="font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                    Dr. Geetha Ramadas
                                </h3>

                                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9B804B]">
                                    Head of the Department
                                </p>

                                <p className="mt-2 text-sm leading-7 text-[#77736B]">
                                    Department of Mechatronics Engineering
                                    <br />
                                    Nehru College of Engineering and Research
                                    Centre
                                </p>

                                <div className="mt-7 h-px w-20 bg-[#B99A5B]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </>
    );
};



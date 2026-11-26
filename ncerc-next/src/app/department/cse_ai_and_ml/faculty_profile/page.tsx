import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";
import { ArrowUpRight, Users } from "lucide-react";



const FACULTY_BASE =
    "/department/cse_ai_and_ml/faculty_profile/faculty_details";

const facultyMembers = [
    {
        id: 1,
        name: " Aneesha M H",
        designation: "Assistant Professor",
        image:
            "/images/dpt/cse_ai_ml/faculty_details/CSE_AI_Ml_Faculty_Aneesha_MH.webp",
        href: `${FACULTY_BASE}/aneesha_mh`,
    },
    {
        id: 2,
        name: "Anuja K ",
        designation: "Assistant Professor",
        image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        href: `${FACULTY_BASE}/anuja_k`,
    },
    {
        id: 3,
        name: "Denna Paul",
        designation: "Assistant Professor",
        image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        href: `${FACULTY_BASE}/denna_paul`,
    },
    {
        id: 4,
        name: "Roshan Sanu Y",
        designation: "Assistant Professor",
        image: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        href: `${FACULTY_BASE}/roshan_sanu`,
    },

];

export default function FacultyDetailsPage() {
    return (
        <>
            <SiteHeader />

            {/* Page Title Banner */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                            Computer Science and Engineering Ai & Ml
                        </p>
                    </div>

                    <h1 className="mt-5 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        The People Behind
                        <br />
                        <span className="italic text-[#D2B87C]">Our Excellence</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                        Meet the dedicated educators and professionals who inspire
                        learning, encourage innovation, and shape the next generation
                        of engineers.
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                        <span className="h-px w-12 bg-[#D2B87C]" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                            Academic Team
                        </span>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            {/* Page Content */}
            <main className="bg-white">
                {/* Inner Sub-Header Navigation */}
                <InnerHeader />

                {/* Faculty Directory */}
                <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">

                        {/* Section Introduction */}
                        <div className="mb-10 grid gap-8 border-b border-[#DED7C9] pb-8 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#927B4D]">
                                        01
                                    </span>
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Our Academic Team
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                                    Meet Our Faculty
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69666B]">
                                    Our faculty members combine academic knowledge, research
                                    experience, and industry insights to create a meaningful
                                    learning environment for every student.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 md:pb-1">
                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C] text-[#927B4D]">
                                    <Users size={21} strokeWidth={1.4} />
                                </div>

                                <div>
                                    <p className="font-serif text-3xl leading-none text-[#20235A]">
                                        {String(facultyMembers.length).padStart(2, "0")}
                                    </p>
                                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#827B70]">
                                        Faculty Members
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Faculty Grid */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">

                            {facultyMembers.map((faculty, index) => (
                                <Link
                                    key={faculty.id}
                                    href={faculty.href}
                                    aria-label={`View profile of ${faculty.name}`}
                                    className="group block h-full"
                                >
                                    <article className="relative flex h-full min-h-[172px] items-center gap-4 overflow-hidden border border-[#E5DED1] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9AD70] hover:shadow-[0_12px_30px_rgba(32,35,90,0.09)] sm:gap-5 sm:p-5">

                                        {/* Faculty Image */}
                                        <div className="relative h-[124px] w-[100px] shrink-0 overflow-hidden bg-[#F0ECE3] sm:h-[132px] sm:w-[108px]">
                                            <Image
                                                src={faculty.image}
                                                alt={faculty.name}
                                                fill
                                                sizes="(max-width: 640px) 100px, 108px"
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#20235A]/35 to-transparent" />
                                        </div>

                                        {/* Faculty Details */}
                                        <div className="flex min-w-0 flex-1 flex-col justify-center py-1">

                                            <div className="mb-3 flex items-center gap-2">
                                                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#A18A5B]">
                                                    FACULTY
                                                </span>
                                                <span className="h-px w-5 bg-[#D2B87C]" />
                                                <span className="text-[9px] tracking-[0.12em] text-[#A5A09A]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <h3 className="break-words font-serif text-lg leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#927B4D] sm:text-xl">
                                                {faculty.name}
                                            </h3>

                                            <p className="mt-2 text-[9px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#927B4D] sm:text-[10px]">
                                                {faculty.designation}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between border-t border-[#EEE9E0] pt-3">
                                                <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#77747A]">
                                                    View Profile
                                                </span>

                                                <span className="flex h-7 w-7 items-center justify-center border border-[#E5DED1] text-[#927B4D] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                                    <ArrowUpRight
                                                        size={15}
                                                        strokeWidth={1.5}
                                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Hover Accent */}
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                                    </article>
                                </Link>
                            ))}

                        </div>

                        {/* Bottom Note */}
                        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#DED7C9] pt-6 sm:flex-row sm:items-center">
                            <p className="text-xs leading-6 text-[#77747A]">
                                Explore individual faculty profiles to learn more about
                                their academic and professional backgrounds.
                            </p>

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#927B4D]">
                                Department of ECE
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}
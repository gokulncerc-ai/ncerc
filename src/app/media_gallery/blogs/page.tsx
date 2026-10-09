"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    Search,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type Blog = {
    id: string;
    date: string;
    category: string;
    title: string;
    image: string;
    href: string;
};

const blogs: Blog[] = [
    {
        id: "01",
        date: "23 September 2026",
        category: "NCERC",
        title:
            "How Does Cloud Computing Store Your Data Without Your Computer? What MCA Students Should Know About Cloud Computing",
        image: "https://ncerc.ac.in/blogs/img/23092026.jpg",
        href: "https://ncerc.ac.in/blogs/how-does-cloud-computing-store-your-data-without-your-computer-what-mca-students-should-know-about-cloud-computing.php",
    },
    {
        id: "02",
        date: "14 September 2026",
        category: "NCERC",
        title:
            "From Coding to Cybersecurity: How CSE Can Lead to Multiple Technology Careers",
        image: "https://ncerc.ac.in/blogs/img/14092026.jpg",
        href: "https://ncerc.ac.in/blogs/from-coding-to-cybersecurity-how-cse-can-lead-to-multiple-technology-career.php",
    },
    {
        id: "03",
        date: "05 September 2026",
        category: "NCERC",
        title:
            "Why Mechatronics Engineering Is Becoming a Game-Changer for Robotics and Automation",
        image: "https://ncerc.ac.in/blogs/img/05092026.jpg",
        href: "https://ncerc.ac.in/blogs/why-mechatronics-engineering-is-becoming-a-game-changer-for-robotics-and-automation.php",
    },
    {
        id: "04",
        date: "31 August 2026",
        category: "NCERC",
        title:
            "AI Can Process Billions of Data Points - Who Builds the Chips That Handle Them?",
        image: "https://ncerc.ac.in/blogs/img/31082026.jpg",
        href: "https://ncerc.ac.in/blogs/ai-can-process-billions-of-data-points-who-builds-the-chips-that-handle-them.php",
    },
    {
        id: "05",
        date: "29 August 2026",
        category: "NCERC",
        title:
            "Is Industry Integrated Mechanical Engineering Worth Studying in the Age of AI?",
        image: "https://ncerc.ac.in/blogs/img/29082026_1.jpg",
        href: "https://ncerc.ac.in/blogs/is-industry-integrated-mechanical-engineering-worth-studying-in-the-age-of-ai.php",
    },
    {
        id: "06",
        date: "29 August 2026",
        category: "NCERC",
        title:
            "The World Is Becoming One Giant Network: How Engineers Are Building the Connected Future",
        image: "https://ncerc.ac.in/blogs/img/29082026.jpg",
        href: "https://ncerc.ac.in/blogs/the-world-is-becoming-one-giant-network-how-engineers-are-building-the-connected-future.php",
    },
    {
        id: "07",
        date: "14 August 2026",
        category: "NCERC",
        title:
            "Is MCA Becoming Irrelevant Because of AI? Understanding the New Opportunities",
        image: "https://ncerc.ac.in/blogs/img/14082026.jpg",
        href: "https://ncerc.ac.in/blogs/is-mca-becoming-irrelevant-because-of-ai-understanding-the-new-opportunities.php",
    },
    {
        id: "08",
        date: "08 August 2026",
        category: "NCERC",
        title:
            "Is an MBA Only for Getting a Management Job? Debunking the Myth",
        image: "https://ncerc.ac.in/blogs/img/N08082026_2.jpg",
        href: "https://ncerc.ac.in/blogs/is-an-mba-only-for-getting-a-management-job-debunking-the-myth.php",
    },
    {
        id: "09",
        date: "08 August 2026",
        category: "NCERC",
        title:
            "Can AI Turn Young Engineers Into Problem-Solvers? Exploring the New Engineering Mindset",
        image: "https://ncerc.ac.in/blogs/img/N08082026_1.jpg",
        href: "https://ncerc.ac.in/blogs/can-ai-turn-young-engineers-into-problem-solvers-exploring-the-new-engineering-mindset.php",
    },
    {
        id: "10",
        date: "28 July 2026",
        category: "NCERC",
        title:
            "Dreaming of an Engineering Career? Here's Everything You Need to Know Before College Admission 2026",
        image: "https://ncerc.ac.in/blogs/img/28072026.jpg",
        href: "https://ncerc.ac.in/blogs/dreaming-of-an-engineering-career-here-is-everything-you-need-to-know-before-college-admission-2026.php",
    },
    {
        id: "11",
        date: "24 July 2026",
        category: "NCERC",
        title:
            "How Computer Science and Engineering (AI & ML) Students Can Build a Successful Career in Tech",
        image: "https://ncerc.ac.in/blogs/img/24072026_1.jpg",
        href: "https://ncerc.ac.in/blogs/how-computer-science-and-engineering-ai-ml-students-can-build-a-successful-career-in-tech.php",
    },
    {
        id: "12",
        date: "24 July 2026",
        category: "NCERC",
        title:
            "The Rise of Smart Infrastructure and Career Opportunities for Engineering Students at NCERC",
        image: "https://ncerc.ac.in/blogs/img/24072026.jpg",
        href: "https://ncerc.ac.in/blogs/the-rise-of-smart-infrastructure-and-career-opportunities-for-engineering-students-at-ncerc.php",
    },
    {
        id: "13",
        date: "19 July 2026",
        category: "MBA",
        title:
            "How MBA Students Can Stay Ahead in an AI-Driven Business Environment",
        image: "https://ncerc.ac.in/blogs/img/1972026.webp",
        href: "https://ncerc.ac.in/blogs/how-MBA-students-can-stay-ahead-in-an-ai-driven-business-environment.php",
    },
    {
        id: "14",
        date: "19 July 2026",
        category: "NCERC",
        title:
            "How Expert Sessions from Industry Professionals Add Value to Engineering Education",
        image: "https://ncerc.ac.in/blogs/img/19072026.webp",
        href: "https://ncerc.ac.in/blogs/how-expert-sessions-from-industry-professionals-add-value-to-engineering-education.php",
    },
    {
        id: "15",
        date: "10 July 2026",
        category: "Computer Science and Engineering",
        title:
            "Why Master of Computer Applications is the Best Choice for People Who Want to Work in IT",
        image: "https://ncerc.ac.in/blogs/img/10072026.jpg",
        href: "https://ncerc.ac.in/blogs/why-master-of-computer-applications-is-the-best-choice-for-the-people-who-want-to-work-in-it.php",
    },
    {
        id: "16",
        date: "04 July 2026",
        category: "NCERC",
        title:
            "As You All Know, Practical Learning Is the Key to Engineering Success – Discover How NCERC Prepares Future Engineers",
        image: "https://ncerc.ac.in/blogs/img/0407202602.webp",
        href: "https://ncerc.ac.in/blogs/as-you-all-know-practical-learning-is-the-key-to-engineering-success-discover-how-NCERC-prepares-future-engineers.php",
    },
    {
        id: "17",
        date: "04 July 2026",
        category: "NCERC",
        title:
            "Best Engineering College in Kerala: Facilities That Support Academic and Personal Growth",
        image: "https://ncerc.ac.in/blogs/img/0407202601.webp",
        href: "https://ncerc.ac.in/blogs/best-engineering-college-in-kerala-facilities-that-support-academic-and-personal-growth.php",
    },
    {
        id: "18",
        date: "29 May 2026",
        category: "NCERC",
        title:
            "How NCERC Creates Opportunities for Future Engineers Through Industry Collaboration as One of the Best Engineering Colleges in Kerala",
        image: "https://ncerc.ac.in/blogs/img/2905202601.webp",
        href: "https://ncerc.ac.in/blogs/how-NCERC-creates-opportunities-for-future-engineers-through-industry-collaboration-as-one-of-the-best-engineering-colleges-in-kerala.php",
    },
    {
        id: "19",
        date: "27 June 2026",
        category: "EEE",
        title:
            "Best EEE College in Kerala: Why EEE Engineering is More Important Than Ever",
        image: "https://ncerc.ac.in/blogs/img/27062026.webp",
        href: "https://ncerc.ac.in/blogs/best-EEE-college-in-kerala-why-EEE-engineering-is-more-important-than-ever.php",
    },
    {
        id: "20",
        date: "26 June 2026",
        category: "NCERC",
        title:
            "The Role of NCERC as One of the Best Engineering Colleges in Kerala in Shaping Future-Ready Computer Science Engineers",
        image: "https://ncerc.ac.in/blogs/img/26062026.webp",
        href: "https://ncerc.ac.in/blogs/the-role-of-NCERC-as-one-of-the-best-engineering-colleges-in-kerala-in-shaping-future-ready-computer-science-engineers.php",
    },
    {
        id: "21",
        date: "25 June 2026",
        category: "NCERC",
        title:
            "Preparing Students for High-Growth Engineering Careers Through Industry-Focused Learning at NCERC",
        image: "https://ncerc.ac.in/blogs/img/25062026.webp",
        href: "https://ncerc.ac.in/blogs/preparing-students-for-high-growth-engineering-careers-through-industry-focused-learning-at-NCERC.php",
    },
    {
        id: "22",
        date: "24 June 2026",
        category: "NCERC",
        title:
            "Making the Right Engineering Admission Decision: A Long-Term Investment for Families in South India",
        image: "https://ncerc.ac.in/blogs/img/24062026.webp",
        href: "https://ncerc.ac.in/blogs/making-the-right-engineering-admission-decision-for-families-in-south-india.php",
    },
    {
        id: "23",
        date: "23 June 2026",
        category: "Mech Engg",
        title:
            "Why Mechanical Engineering Will Remain Relevant in the Future Economy & Best Mechanical Engineering Colleges you should choose",
        image: "https://ncerc.ac.in/blogs/img/23062026.webp",
        href: "https://ncerc.ac.in/blogs/why-mechanical-engineering-will-remain-relevant-in-the-future-economy-best-mechanical-engineering-colleges-you-should-choose.php",
    },
    {
        id: "24",
        date: "22 June 2026",
        category: "MTE",
        title:
            "Why Students Interested in Robotics and Automation Are Choosing Mechatronics Engineering at NCERC",
        image: "https://ncerc.ac.in/blogs/img/22062026.webp",
        href: "https://ncerc.ac.in/blogs/why-students-interested-in-robotics-and-automation-are-choosing-mechatronics-engineering-at-NCERC.php",
    },
];

const categories = [
    "All",
    "NCERC",
    "Computer Science and Engineering",
    "MBA",
    "EEE",
    "Mech Engg",
    "MTE",
];

function BlogImage({
    src,
    alt,
    className = "",
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <div
            className={`
                relative
                overflow-hidden
                bg-[#e9e5dc]
                ${className}
            `}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#20235A]/20
                    via-transparent
                    to-transparent
                    opacity-70
                "
            />
        </div>
    );
}

function BlogCard({
    blog,
    index,
}: {
    blog: Blog;
    index: number;
}) {
    return (
        <article className="group relative flex h-full flex-col">
            <Link
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <BlogImage
                    src={blog.image}
                    alt={blog.title}
                    className="
                        aspect-[16/10]
                        rounded-[22px]
                    "
                />
            </Link>

            <div className="flex flex-1 flex-col pt-5">
                <div className="flex items-center justify-between gap-3">
                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-[#20235A]/10
                            bg-[#20235A]/[0.035]
                            px-3
                            py-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#20235A]
                        "
                    >
                        {blog.category}
                    </span>

                    <span className="text-[10px] font-medium tracking-[0.12em] text-slate-400">
                        {blog.date}
                    </span>
                </div>

                <Link
                    href={blog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        mt-4
                        block
                        font-serif
                        text-[21px]
                        font-medium
                        leading-[1.2]
                        tracking-[-0.015em]
                        text-[#20235A]
                        transition-colors
                        duration-200
                        group-hover:text-[#9b7a39]
                    "
                >
                    {blog.title}
                </Link>

                <div className="mt-auto pt-5">
                    <Link
                        href={blog.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#20235A]
                        "
                    >
                        Read Story

                        <ArrowUpRight
                            size={14}
                            strokeWidth={1.7}
                            className="
                                transition-transform
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                        />
                    </Link>
                </div>
            </div>

            <span
                className="
                    pointer-events-none
                    absolute
                    -left-3
                    top-0
                    font-serif
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-[#20235A]/20
                "
            >
                {String(index + 1).padStart(2, "0")}
            </span>
        </article>
    );
}

const page = () => {
    const [activeCategory, setActiveCategory] =
        useState("All");

    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesCategory =
                activeCategory === "All" ||
                blog.category === activeCategory;

            const matchesSearch =
                blog.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                blog.category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const featuredBlog = blogs[0];

    return (
        <main className="min-h-screen bg-[#faf7f2] text-[#20235A]">
            <SiteHeader />

            {/* ======================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-[#20235A]">
                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-28
                        -top-32
                        h-[430px]
                        w-[430px]
                        rounded-full
                        border
                        border-[#D2B87C]/15
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-12
                        top-0
                        h-[300px]
                        w-[300px]
                        rounded-full
                        border
                        border-[#D2B87C]/10
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-[-100px]
                        left-[-80px]
                        h-[250px]
                        w-[250px]
                        rounded-full
                        bg-[#D2B87C]/5
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-8xl px-6 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    NCERC Journal
                                </span>
                            </div>

                            <h1
                                className="
                                    max-w-4xl
                                    font-serif
                                    text-5xl
                                    font-medium
                                    leading-[0.98]
                                    tracking-[-0.035em]
                                    text-white
                                    sm:text-6xl
                                    lg:text-7xl
                                "
                            >
                                Ideas that
                                <br />
                                <span className="text-[#D2B87C]">
                                    move minds.
                                </span>
                            </h1>

                            <p
                                className="
                                    mt-7
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-white/65
                                    sm:text-base
                                "
                            >
                                Explore perspectives, ideas and stories
                                from the world of engineering, technology,
                                business and education.
                            </p>
                        </div>

                        <div className="lg:pb-1 lg:pl-12">
                            <div className="border-l border-white/15 pl-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                    Latest stories
                                </p>

                                <p className="mt-3 font-serif text-2xl leading-tight text-white">
                                    Knowledge beyond
                                    <br />
                                    the classroom.
                                </p>

                                <div className="mt-6 flex items-center gap-3">
                                    <span className="text-4xl font-serif text-[#D2B87C]">
                                        {blogs.length}
                                    </span>

                                    <span className="max-w-[110px] text-[10px] uppercase leading-4 tracking-[0.14em] text-white/45">
                                        Published stories
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======================================================
                FEATURED STORY
            ====================================================== */}

            <section className="mx-auto max-w-8xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mb-8 flex items-end justify-between gap-6">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <Sparkles
                                size={13}
                                strokeWidth={1.8}
                                className="text-[#9b7a39]"
                            />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7a39]">
                                Featured
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl font-medium tracking-[-0.02em] text-[#20235A] sm:text-4xl">
                            From the NCERC Journal
                        </h2>
                    </div>

                    <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-400 sm:flex">
                        <span>01</span>
                        <span className="h-px w-8 bg-slate-300" />
                        <span>
                            {String(blogs.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                <article className="group grid overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(32,35,90,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
                    <Link
                        href={featuredBlog.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block min-h-[320px] lg:min-h-[510px]"
                    >
                        <BlogImage
                            src={featuredBlog.image}
                            alt={featuredBlog.title}
                            className="h-full min-h-[320px] lg:min-h-[510px]"
                        />
                    </Link>

                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                        <div>
                            <div className="flex items-center justify-between gap-4">
                                <span
                                    className="
                                        inline-flex
                                        rounded-full
                                        bg-[#D2B87C]/15
                                        px-3
                                        py-1.5
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#8d6d30]
                                    "
                                >
                                    {featuredBlog.category}
                                </span>

                                <span className="text-[10px] text-slate-400">
                                    {featuredBlog.date}
                                </span>
                            </div>

                            <div className="mt-10">
                                <p className="font-serif text-5xl leading-none text-[#20235A]/10">
                                    01
                                </p>

                                <h3
                                    className="
                                        mt-4
                                        max-w-xl
                                        font-serif
                                        text-3xl
                                        font-medium
                                        leading-[1.12]
                                        tracking-[-0.025em]
                                        text-[#20235A]
                                        sm:text-4xl
                                    "
                                >
                                    {featuredBlog.title}
                                </h3>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-6">
                            <Link
                                href={featuredBlog.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#20235A]
                                    transition-colors
                                    duration-200
                                    hover:text-[#9b7a39]
                                "
                            >
                                Read Featured Story

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20235A] text-white transition-transform duration-200 group-hover:translate-x-1">
                                    <ArrowUpRight size={14} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>

            {/* ======================================================
                BLOG DIRECTORY
            ====================================================== */}

            <section
                id="all-stories"
                className="border-t border-[#20235A]/10 bg-white"
            >
                <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7a39]">
                                Explore the archive
                            </p>

                            <h2 className="mt-3 font-serif text-4xl font-medium tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                Stories & Insights
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                                Discover perspectives covering technology,
                                engineering, management, careers and the
                                changing world of higher education.
                            </p>
                        </div>

                        <div
                            className="
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-slate-200
                                bg-[#faf7f2]
                                px-4
                                py-3
                                lg:w-[280px]
                            "
                        >
                            <Search
                                size={16}
                                strokeWidth={1.8}
                                className="shrink-0 text-slate-400"
                            />

                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search stories..."
                                className="
                                    w-full
                                    bg-transparent
                                    text-xs
                                    text-[#20235A]
                                    outline-none
                                    placeholder:text-slate-400
                                "
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => {
                            const isActive =
                                activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`
                                        shrink-0
                                        rounded-full
                                        border
                                        px-4
                                        py-2.5
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.12em]
                                        transition-all
                                        duration-200
                                        ${isActive
                                            ? "border-[#20235A] bg-[#20235A] text-white"
                                            : "border-slate-200 bg-white text-slate-500 hover:border-[#20235A]/30 hover:text-[#20235A]"
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-10 h-px w-full bg-slate-200" />

                    {filteredBlogs.length > 0 ? (
                        <div className="mt-12 grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredBlogs.map((blog, index) => (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-[300px] items-center justify-center">
                            <div className="text-center">
                                <p className="font-serif text-2xl text-[#20235A]">
                                    No stories found
                                </p>

                                <p className="mt-2 text-sm text-slate-400">
                                    Try another search or category.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ======================================================
                CLOSING SECTION
            ====================================================== */}

            <section className="bg-[#faf7f2]">
                <div className="mx-auto max-w-8xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            bg-[#20235A]
                            px-7
                            py-12
                            sm:px-10
                            lg:px-16
                            lg:py-16
                        "
                    >
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-20
                                -top-20
                                h-64
                                w-64
                                rounded-full
                                border
                                border-[#D2B87C]/15
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-[-100px]
                                left-1/2
                                h-60
                                w-60
                                -translate-x-1/2
                                rounded-full
                                bg-[#D2B87C]/5
                                blur-3xl
                            "
                        />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Keep exploring
                                </p>

                                <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                    Knowledge becomes meaningful when it
                                    keeps moving.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
                                    Explore NCERC's academic programmes,
                                    departments and initiatives beyond
                                    our journal.
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-[#D2B87C]/40
                                    bg-[#D2B87C]
                                    px-5
                                    py-3.5
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#20235A]
                                    transition-all
                                    duration-200
                                    hover:bg-[#e0c98e]
                                "
                            >
                                Explore NCERC

                                <ChevronRight
                                    size={15}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
};

export default page;
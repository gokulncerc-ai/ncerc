"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  BookOpen,
  Building2,
  Bus,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Dumbbell,
  GraduationCap,
  Hexagon,
  Home,
  Images,
  Landmark,
  Leaf,
  Search,
  UtensilsCrossed,
  Users,
  Wifi,
  Wrench,
  X,
  ZoomIn,
  type LucideIcon,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import NCERC from "@/../public/images/aboutus/infra/nehru-full.png";

const INFRA_BASE = "/images/aboutus/infra";

/* ============================================================
   DATA
============================================================ */

type Building = {
  icon: LucideIcon;
  name: string;
  description: string;
  /** Folder name of a matching photo gallery inside INFRA_BASE */
  gallery?: string;
};

const buildings: Building[] = [
  {
    icon: Building2,
    name: "Bhaskara",
    gallery: "Bhaskara",
    description:
      "The first academic block with a built up area of 1 lakh sq. ft. is named after Bhaskaracharya, a genius in Algebra. This building houses the board room, conference room, faculty cabins, tutorial rooms, first year class rooms, electronics laboratories, computer science laboratories, language lab, drawing halls, gymnasium, billiards room and the store. The departments of Civil engineering and Applied Sciences and Humanities also operate from here.",
  },
  {
    icon: Hexagon,
    name: "Aryabhatta",
    gallery: "Aryabhatta",
    description:
      "‘Aryabhatta’ named after the famous astronomer ‘Aryabhatta’, is a hexagonal six storied academic building, having a built up area of 1.25 lakhs sq. ft. It houses 5 U.G and P.G. departments, Principal’s office, academic office, conference room, board room, cabins of faculty, seminar hall, Placement Office, computer laboratories and tutorial rooms.",
  },
  {
    icon: Wrench,
    name: "Varahamihira",
    description:
      "This building, named after the eminent Astrologer and Astronomer, ‘Varahmihira’ houses a workshop with an area of 30000 sq.ft. is the main workshop building with twelve workshops of Mechanical Engineering Department, and three Laboratories of Electrical Engineering Department and a Civil Engineering lab.",
  },
  {
    icon: Landmark,
    name: "Brahmagupta",
    description:
      "This block, named after the ancient Indian astronomer Brahmagupta, has a total area of 30,000 sq. ft. and the block houses the main Auditorium on the second floor with a seating capacity of 800 people. The Library with a seating capacity of 300 students and a modern automobile workshop of 7000 sq. ft. and a newly established Electronics Laboratory.",
  },
  {
    icon: GraduationCap,
    name: "Kapila",
    gallery: "Kapila",
    description:
      "This block, named after Kapila, who is known as the Father of cosmology and the founder of Sankhya Philosophy has an area of 60,000 sq. ft. This block houses MBA & MCA Departments, board room, tutorial rooms, faculty cabins, class rooms, seminar halls, PG library, yoga hall and computer laboratories.",
  },
  {
    icon: BookOpen,
    name: "Library",
    description:
      "NCERC Central Library is located on the ground floor of the Brahmagupta block and is the real centre of learning. The library has got a rich collection of books on different domains of Science and Technology, journals, periodicals and other printed materials besides audio, visual and electronic information service, media workshops. The library is also digitalized to meet the most advanced information requirement, fully automated with software and equipped with 64 MBPS internet connectivity for easy and fast access.",
  },
  {
    icon: BedDouble,
    name: "Kamala, Priyadarshini and Kasturba Hostels",
    description:
      "NCERC, located in a picturesque campus, proudly boasts a range of excellent accommodation facilities available to every budget, with good food and courteous catering to suit every wallet. The ladies hostel ‘Kasturba’ can house 500 girl students. Another block ‘Priyadarsini’ can accommodate 100 persons, used for PG students and faculty members. The men’s hostel can accommodate 500 students, with recreational facilities including dedicated Wi-Fi, a Shuttle Badminton Court, Multigym and a Mini Library.",
  },
  {
    icon: Home,
    name: "Faculty Quarters and Men’s Hostel",
    description:
      "Sivasree Apartments, the guest house of NCERC with all modern facilities, has been used as residential quarters for faculty members. Various recreational facilities are also made available here.",
  },
  {
    icon: UtensilsCrossed,
    name: "Canteen",
    description:
      "The canteen, named after the mythological King Nala, renowned for his culinary expertise, has a built up area of 18000 sq.ft. and is a three storied building with the most modern and hygienic kitchen facilities, where high quality food is served at concessional rates. It is open from 8.00 A.M. to 5.00 P.M. on all working days including Saturday. Apart from the main canteen, the college also runs a Cafeteria Shop where students get delicious food at affordable rates.",
  },
  {
    icon: Dumbbell,
    name: "Fitness Centre",
    description:
      "Reaffirming the proverb, “Health is wealth,” the college Fitness Centre houses an ultra-modern gymnasium catering to the needs of fitness enthusiasts. Staff and students use the gymnasium under the guidance of professional trainers, with state-of-the-art equipment including bench press, peck deck, bicep curl, lateral pulley and body twister machines, treadmills and muscle building equipment.",
  },
  {
    icon: Leaf,
    name: "Green Zone",
    description:
      "This Relaxation Area is designed to help students improve their emotional, mental and physical health. The terrain of the campus is designed to collect rain water in three ponds/water bodies maintained inside the campus, used for agriculture and gardening. Plantations include rubber, plantains, coconut, jackfruit and mango trees. Oxygen zones, fresh air zones and a mini forest are developed and maintained on campus, alongside a vegetation area and green house that promote organic farming, and pisciculture in our water bodies.",
  },
  {
    icon: CreditCard,
    name: "24×7 ATM",
    description:
      "An ATM counter of Dhanlaxmi Bank Ltd. functions at the main entrance of NCERC. Staff and students use the ATM frequently for transactions, and it is open to the public as well.",
  },
  {
    icon: Bus,
    name: "Transportation",
    description:
      "The college provides transportation facilities for both students and staff. There are more than 40 buses, both AC and Non-AC, covering most of the Thrissur, Palakkad and Malappuram districts. Senior staff members are provided with special transportation facilities.",
  },
];

const academicFacilities = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const supportingFacilities = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const aryabhattaGallery = [
  "101i.png", "102i.png", "103i.png", "113i.png", "114i.png", "115i.jpg",
  "201i.jpg", "202Pi.jpg", "203i.png", "216i.jpg", "218i.png", "228i.jpg",
  "229i.jpg", "301i.jpg", "302i.jpg", "303i.jpg", "316i.png", "317i.png",
  "317Ai.png", "318i.png", "331i.png", "332i.png", "333i.JPG", "401i.png",
  "402i.png", "403i.png", "416i.jpg", "418i.png", "433i.png", "434i.png",
  "435i.jpg", "501i.png", "504i.png", "505i.png", "505Ai.png", "506i.jpg",
  "509i.png",
];

const bhaskaraGallery = [
  "111i.png", "112i.png", "202i.png", "203i.png", "204i.png", "205i.png",
  "207i.png", "208i.png", "211i.png", "212i.png", "302i.png", "303i.png",
  "304i.jpg", "305i.jpg", "307i.jpg", "308i.jpg", "311i.jpg", "312i.png",
];

const kapilaGallery = ["LH1i.jpg", "LH2i.jpg", "LH4i.jpg", "LH5i.jpg", "SH1i.jpg", "SH2I.jpg"];

const timeTableGallery = ["time-table-ODD.PNG", "time-table-EVEN.PNG"];

type GalleryTab = {
  id: string;
  title: string;
  folder: string;
  images: string[];
  portrait?: boolean;
};

const galleryTabs: GalleryTab[] = [
  { id: "academic", title: "Academic Facilities", folder: "Academic-facilities", images: academicFacilities },
  { id: "supporting", title: "Supporting Facilities", folder: "Supporting-Facilities", images: supportingFacilities },
  { id: "aryabhatta", title: "Aryabhatta", folder: "Aryabhatta", images: aryabhattaGallery },
  { id: "bhaskara", title: "Bhaskara", folder: "Bhaskara", images: bhaskaraGallery },
  { id: "kapila", title: "Kapila", folder: "Kapila", images: kapilaGallery },
  { id: "timetable", title: "Time Table", folder: "Time-Table", images: timeTableGallery, portrait: true },
];

const galleryByFolder: Record<string, string[]> = {
  Aryabhatta: aryabhattaGallery,
  Bhaskara: bhaskaraGallery,
  Kapila: kapilaGallery,
};

const eJournals = [
  { label: "National Digital Library of India (NDL)", href: "https://ndl.iitkgp.ac.in" },
  { label: "Directory of Open Access Journals (DOAJ)", href: "https://doaj.org/" },
  { label: "Directory of Open Access Books", href: "https://www.doabooks.org/" },
  { label: "National Programme on Technology Enhanced Learning (NPTEL)", href: "https://nptel.ac.in/" },
  { label: "Shodhganga – a reservoir of Indian theses", href: "https://shodhganga.inflibnet.ac.in/" },
  { label: "e-PG Pathshalas", href: "https://epgp.inflibnet.ac.in/" },
  { label: "Open Access Thesis & Dissertations", href: "https://oatd.org/" },
  { label: "Open Knowledge Repository – World Bank", href: "https://openknowledge.worldbank.org/" },
  { label: "The OAPEN Foundation", href: "http://www.oapen.org/content/" },
  { label: "Project Gutenberg", href: "https://dev.gutenberg.org/" },
  { label: "Highwire", href: "https://www.highwirepress.com/" },
  { label: "Southern Connecticut State University", href: "https://libguides.southernct.edu/openaccess" },
  { label: "AGRIS", href: "http://agris.fao.org/agris-search/index.do" },
  { label: "Science Direct Open Access Content", href: "https://www.sciencedirect.com/#open-access" },
  { label: "AidData", href: "https://www.aiddata.org/" },
  { label: "ILOSTAT", href: "https://ilostat.ilo.org/" },
  { label: "Oxford Open", href: "https://academic.oup.com/journals/pages/open_access" },
  { label: "Project Euclid", href: "https://www.projecteuclid.org/librarians/lib_oa" },
  { label: "Springer Open Journals", href: "https://www.springeropen.com/journals" },
  { label: "Taylor & Francis Open Access", href: "https://www.tandfonline.com/openaccess/openjournals" },
  { label: "Cambridge University Press", href: "https://www.cambridge.org/cor/what-we-publish/open-access" },
  { label: "PDF Drive", href: "https://www.pdfdrive.net" },
  { label: "CEC UGC YouTube Channel", href: "https://m.youtube.com/user/cecedusat" },
  { label: "e-Shodhsindhu: Consortium for Higher Education Electronic Resources", href: "https://ess.inflibnet.ac.in" },
  { label: "Vidwan", href: "https://vidwan.inflibnet.ac.in" },
];

const campusStats = [
  { value: "40+", label: "College buses", icon: Bus },
  { value: "64 Mbps", label: "Campus Wi-Fi", icon: Wifi },
  { value: "800", label: "Auditorium seats", icon: Users },
  { value: "300", label: "Library seats", icon: BookOpen },
];

const campusTags = [
  "Digital Library",
  "Well-equipped Labs",
  "Sports & Fitness",
  "Separate Hostels",
  "Canteen",
  "ATM",
  "NSS & NCC",
];

const GALLERY_PREVIEW_COUNT = 8;

type PhotoItem = { src: string; alt: string };

function toPhotos(folder: string, images: string[], title: string): PhotoItem[] {
  return images.map((file, index) => ({
    src: `${INFRA_BASE}/${folder}/${file}`,
    alt: `${title} photo ${index + 1}`,
  }));
}

/* ============================================================
   SMALL PIECES
============================================================ */

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={`h-px w-9 ${light ? "bg-[#D2B87C]" : "bg-[#8F7746]"}`} />

      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs ${
          light ? "text-[#D2B87C]" : "text-[#8F7746]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function InfrastructurePage() {
  const [activeBuilding, setActiveBuilding] = useState(0);
  const [activeTabId, setActiveTabId] = useState(galleryTabs[0].id);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<{
    images: PhotoItem[];
    index: number;
  } | null>(null);

  const building = buildings[activeBuilding];
  const BuildingIcon = building.icon;

  const buildingPhotos = useMemo(
    () =>
      building.gallery
        ? toPhotos(
            building.gallery,
            galleryByFolder[building.gallery] ?? [],
            building.name,
          )
        : [],
    [building],
  );

  const activeTab =
    galleryTabs.find((tab) => tab.id === activeTabId) ?? galleryTabs[0];

  const tabPhotos = useMemo(
    () => toPhotos(activeTab.folder, activeTab.images, activeTab.title),
    [activeTab],
  );

  const visiblePhotos = showAllPhotos
    ? tabPhotos
    : tabPhotos.slice(0, GALLERY_PREVIEW_COUNT);

  const filteredJournals = eJournals.filter(({ label }) =>
    label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function openLightbox(images: PhotoItem[], index: number) {
    setLightbox({ images, index });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function selectTab(id: string) {
    setActiveTabId(id);
    setShowAllPhotos(false);
  }

  const isLightboxOpen = lightbox !== null;

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowRight") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.images.length }
            : prev,
        );
      } else if (event.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : prev,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  const currentImage = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      <SiteHeader />

      <main className="w-full overflow-x-clip bg-[#FAF7F2] text-[#1E1917]">
        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
                About NCERC
              </p>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
              Campus{" "}
              <span className="italic text-[#D2B87C]">Infrastructure</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              An eco-friendly, green and serene campus with academic blocks,
              hostels, a digital library, sports and fitness facilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#buildings"
                className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
              >
                Explore Campus
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#gallery"
                className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
              >
                Photo Gallery
              </a>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
        </section>

        {/* ======================================================
            CAMPUS STATS
        ====================================================== */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:px-8 lg:grid-cols-4 lg:px-12">
            {campusStats.map(({ value, label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex items-center gap-4 py-6 sm:py-7 ${
                  index % 2 === 0
                    ? "border-r border-[#20235A]/10 pr-4"
                    : "pl-4 sm:pl-6"
                } ${index < 2 ? "border-b border-[#20235A]/10 lg:border-b-0" : ""} ${
                  index === 1 ? "lg:border-r lg:border-[#20235A]/10 lg:pr-6" : ""
                } ${index === 2 ? "lg:pl-6" : ""}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-serif text-2xl leading-none text-[#20235A]">
                    {value}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/50">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================
            CAMPUS OVERVIEW
        ====================================================== */}
        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/70 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

              <div className="relative h-64 w-full overflow-hidden bg-[#30336B] sm:h-80 lg:h-[26rem]">
                <Image
                  src={NCERC}
                  alt="NCERC campus overview"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151638]/90 to-transparent px-6 pb-6 pt-20">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Nehru College of Engineering &amp; Research Centre
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>Campus Overview</Eyebrow>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                A campus built
                <br />
                <span className="italic">for learning.</span>
              </h2>

              <p className="mt-6 text-justify text-[15px] leading-[2] text-[#1E1917]/75 sm:text-base">
                NCERC is located in an eco friendly, green and serene
                environment with excellent infrastructure, well equipped labs,
                a computer library, a well stacked modern digital library, 64
                Mbps Wi-Fi, advanced sports, games and fitness facilities, a
                health club, gym, volleyball, football and basketball courts,
                separate hostels for girls and boys, a canteen, and more than
                40 buses for commuting students from Thrissur, Palakkad and
                Malappuram Districts. There is also an ATM facility, and
                active NSS and NCC units.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {campusTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#20235A]/15 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            BUILDINGS & FACILITIES (interactive explorer)
        ====================================================== */}
        <section
          id="buildings"
          className="scroll-mt-24 bg-[#F2EFE8] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Our Campus</Eyebrow>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  Buildings &amp;
                  <br />
                  <span className="italic">facilities.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#1E1917]/60">
                Select a building or facility to read about it and see its
                photos.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
              {/* Selector */}
              <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:max-h-[640px] lg:flex-col lg:gap-1.5 lg:overflow-y-auto lg:overflow-x-hidden lg:px-0 lg:pb-0 lg:pr-1">
                {buildings.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === activeBuilding;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveBuilding(index)}
                      aria-pressed={isActive}
                      className={`group flex shrink-0 items-center gap-3 border px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                        isActive
                          ? "border-[#20235A] bg-[#20235A]"
                          : "border-[#20235A]/10 bg-white hover:border-[#D2B87C]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center transition-colors ${
                          isActive
                            ? "bg-white/10 text-[#D2B87C]"
                            : "bg-[#F2EFE8] text-[#8F7746]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.6} />
                      </span>

                      <span
                        className={`max-w-[200px] text-sm leading-snug lg:max-w-none lg:flex-1 ${
                          isActive ? "text-white" : "text-[#20235A]"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`hidden font-serif text-xs lg:block ${
                          isActive ? "text-[#D2B87C]" : "text-[#8F7746]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <article className="flex flex-col border border-[#20235A]/10 bg-white lg:sticky lg:top-24 lg:self-start">
                <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 text-white sm:px-8 sm:py-10">
                  <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
                  <div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-[#D2B87C]/20" />

                  <div className="relative flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#D2B87C]">
                      <BuildingIcon size={30} strokeWidth={1.4} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                        {String(activeBuilding + 1).padStart(2, "0")} /{" "}
                        {String(buildings.length).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                        {building.name}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#D2B87C]" />
                </div>

                <div className="px-6 py-7 sm:px-8 sm:py-8">
                  <p className="text-justify text-[15px] leading-[1.95] text-[#1E1917]/75 sm:text-base">
                    {building.description}
                  </p>

                  {buildingPhotos.length > 0 && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                          Inside {building.name}
                        </p>

                        <button
                          type="button"
                          onClick={() => openLightbox(buildingPhotos, 0)}
                          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                        >
                          View all {buildingPhotos.length}
                          <ArrowUpRight size={13} />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {buildingPhotos.slice(0, 4).map((photo, index) => (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => openLightbox(buildingPhotos, index)}
                            aria-label={`View ${photo.alt}`}
                            className="group relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]"
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(min-width: 640px) 160px, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-[#20235A]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <ZoomIn size={20} className="text-[#D2B87C]" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Previous / Next */}
                <div className="flex items-center justify-between border-t border-[#20235A]/10 bg-[#FAF7F2] px-4 py-3 sm:px-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveBuilding(
                        (activeBuilding - 1 + buildings.length) %
                          buildings.length,
                      )
                    }
                    className="inline-flex items-center gap-2 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                  >
                    <ArrowLeft size={14} />
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveBuilding((activeBuilding + 1) % buildings.length)
                    }
                    className="inline-flex items-center gap-2 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                  >
                    Next
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================
            PHOTO GALLERY (tabbed)
        ====================================================== */}
        <section
          id="gallery"
          className="relative scroll-mt-24 overflow-hidden bg-[#20235A] px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10">
              <Eyebrow light>Gallery</Eyebrow>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] sm:text-5xl">
                Infrastructure
                <br />
                <span className="italic text-[#D2B87C]">in pictures.</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
              {galleryTabs.map((tab) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => selectTab(tab.id)}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-2 border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive
                        ? "border-[#D2B87C] bg-[#D2B87C] text-[#20235A]"
                        : "border-white/20 text-white/80 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                    }`}
                  >
                    {tab.title}

                    <span
                      className={`font-serif text-xs normal-case tracking-normal ${
                        isActive ? "text-[#20235A]/70" : "text-white/40"
                      }`}
                    >
                      {tab.images.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Photos */}
            <div
              className={`mt-8 grid gap-3 sm:gap-4 ${
                activeTab.portrait
                  ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              }`}
            >
              {visiblePhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => openLightbox(tabPhotos, index)}
                  aria-label={`View ${photo.alt} full size`}
                  className={`group relative overflow-hidden border border-white/10 bg-[#30336B] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] ${
                    activeTab.portrait ? "h-80 sm:h-[26rem]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      activeTab.portrait ? "object-contain p-2" : "object-cover"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#151638]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[#D2B87C] text-[#20235A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn size={16} />
                  </div>
                </button>
              ))}
            </div>

            {tabPhotos.length > GALLERY_PREVIEW_COUNT && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllPhotos((value) => !value)}
                  className="inline-flex min-h-12 items-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                >
                  <Images size={16} />
                  {showAllPhotos
                    ? "Show fewer photos"
                    : `Show all ${tabPhotos.length} photos`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================================
            E-JOURNALS & E-BOOKS (searchable)
        ====================================================== */}
        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow>Library Resources</Eyebrow>

                <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                  E-Journals
                  <br />
                  <span className="italic">&amp; E-Books.</span>
                </h2>
              </div>

              <div className="w-full lg:max-w-sm">
                <label
                  htmlFor="resource-search"
                  className="sr-only"
                >
                  Search e-resources
                </label>

                <div className="flex items-center gap-3 border border-[#20235A]/15 bg-white px-4 transition-colors focus-within:border-[#D2B87C]">
                  <Search size={18} className="shrink-0 text-[#8F7746]" />

                  <input
                    id="resource-search"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search e-resources..."
                    className="h-12 w-full bg-transparent text-sm text-[#1E1917] outline-none placeholder:text-[#1E1917]/40"
                  />

                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="text-[#1E1917]/40 transition-colors hover:text-[#20235A]"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/45">
                  {filteredJournals.length} of {eJournals.length} resources
                </p>
              </div>
            </div>

            {filteredJournals.length > 0 ? (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredJournals.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full items-start justify-between gap-4 border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D2B87C]"
                    >
                      <span className="text-sm leading-6 text-[#20235A]">
                        {label}
                      </span>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                        <ArrowUpRight size={15} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border border-dashed border-[#20235A]/25 bg-white px-6 py-12 text-center">
                <p className="font-serif text-xl text-[#20235A]">
                  No resources found
                </p>

                <p className="mt-2 text-sm text-[#1E1917]/55">
                  Try a different search term.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ======================================================
          LIGHTBOX
      ====================================================== */}
      {lightbox && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151638]/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <div className="absolute left-4 top-4 z-10 border border-[#D2B87C]/40 bg-[#20235A] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C] sm:left-6 sm:top-6">
            {lightbox.index + 1} / {lightbox.images.length}
          </div>

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close full screen view"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((prev) =>
                  prev
                    ? {
                        ...prev,
                        index:
                          (prev.index - 1 + prev.images.length) %
                          prev.images.length,
                      }
                    : prev,
                );
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <div
            className="relative h-[85vh] w-[85vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((prev) =>
                  prev
                    ? { ...prev, index: (prev.index + 1) % prev.images.length }
                    : prev,
                );
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A]/60 text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:right-6"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>
      )}

      <FooterSection />
    </>
  );
}
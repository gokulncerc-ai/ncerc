import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface TopperImage {
  src: string;
  alt: string;
  number: string;
  title: string;
}

const topperImages: TopperImage[] = [
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/Toppers%20S7.jpeg",
    alt: "Department Toppers S7",
    number: "01",
    title: "S7 Department Toppers",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S7_KTU_Topper.jpg",
    alt: "S7 KTU Topper",
    number: "02",
    title: "S7 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S5_KTU_Topper.jpg",
    alt: "S5 KTU Topper",
    number: "03",
    title: "S5 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/S3_KTU_Topper.jpg",
    alt: "S3 KTU Topper",
    number: "04",
    title: "S3 KTU Topper",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/complete.jpg",
    alt: "Department Toppers",
    number: "05",
    title: "Department Toppers",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/poster.jpg",
    alt: "Department Toppers Poster",
    number: "06",
    title: "Department Toppers Poster",
  },
  {
    src: "https://ncerc.ac.in/images/dpt/electrical-and-electronics-engineering/department-toppers/top_light.jpg",
    alt: "Department Topper",
    number: "07",
    title: "Department Topper",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#D2B87C]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#1E1917]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TopperCard({ image }: { image: TopperImage }) {
  return (
    <a
      href={encodeURI(image.src)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_20px_50px_rgba(32,35,90,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/90 text-[10px] font-semibold tracking-[0.12em] text-[#D2B87C] backdrop-blur-sm">
          {image.number}
        </div>

        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#20235A] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
            Academic Excellence
          </p>

          <h3 className="mt-2 font-serif text-lg leading-snug text-[#20235A]">
            {image.title}
          </h3>
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

export default function DepartmentToppersPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Academic Excellence
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Department toppers,
              <span className="block text-[#D2B87C]">
                excellence worth celebrating.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Celebrating the academic achievements of outstanding students
              from the Electrical and Electronics Engineering department at
              NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#toppers"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Toppers
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/departments/electrical-and-electronics-engineering/academic-excellence"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Academic Excellence
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Recognition
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Department Toppers
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Gallery
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                07 Achievements
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Department
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-16 lg:py-24">
            <SectionHeading
              eyebrow="Department Toppers"
              title="Recognising students who lead by example."
              description="Department toppers represent the commitment, discipline and academic focus of students who have distinguished themselves through their performance."
            />

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-[#1E1917]/10 bg-white p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-10 w-1 shrink-0 bg-[#D2B87C]" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                      Electrical &amp; Electronics Engineering
                    </p>

                    <p className="mt-4 font-serif text-2xl leading-snug text-[#20235A]">
                      Academic achievement worth celebrating.
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#1E1917]/60">
                      The department continues to encourage students to pursue
                      academic excellence and set higher standards through
                      consistent effort and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="toppers" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Achievement Gallery"
                title="Celebrating our academic achievers."
                description="Explore the department topper gallery highlighting student achievements in the Electrical and Electronics Engineering department."
              />

              <div className="hidden shrink-0 lg:block">
                <p className="text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  07 Records
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topperImages.map((image) => (
                <TopperCard key={image.src} image={image} />
              ))}
            </div>
          </div>
        </section>

        {/* Excellence Statement */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
              <SectionHeading
                eyebrow="A Culture of Excellence"
                title="Achievement is part of the journey."
                description="Every academic accomplishment reflects the dedication of students, the guidance of faculty and an environment that encourages continuous learning."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#20235A] p-7 sm:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    01
                  </p>

                  <h3 className="mt-6 font-serif text-2xl text-white">
                    Dedication
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Consistent effort and academic commitment form the
                    foundation of student achievement.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7 sm:p-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    02
                  </p>

                  <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                    Recognition
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Outstanding academic performance deserves to be recognised
                    and celebrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Academic Excellence
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Celebrating today&apos;s toppers.
                  <span className="block text-[#D2B87C]">
                    Inspiring tomorrow&apos;s achievers.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Explore the wider academic achievements of the Electrical
                  and Electronics Engineering department.
                </p>
              </div>

              <Link
                href="/departments/electrical-and-electronics-engineering/academic-excellence"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Academic Excellence
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
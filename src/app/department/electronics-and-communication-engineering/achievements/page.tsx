import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const IMAGE_BASE =
  "/images/dpt/electronics-and-communication-engineering/achievements";

const PROJECT_IMAGE_BASE =
  "/images/dpt/electronics-and-communication-engineering/facilities";

interface Achievement {
  image: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    image: "achievements-pic-1.png",
    description:
      "Hearty Congratulations for our worthy ECE students Vyshnav S H, Praveen P, Anandhu P D and Ansila S (2019-2023 batch), who bagged the prestigious position in the much sought-after nail-biting competition held at Christ College of Engineering!!",
  },
  {
    image: "achievements-pic-2.png",
    description:
      "NCERC has been recognized as Nodal center of Virtual labs under the National Mission on Education through information on education with National Institute of Technology Karnataka (NITK), Surathkal.",
  },
];

const projectImages = [
  "STUDENTS-PROJECTS-1.jpg",
  "STUDENTS-PROJECTS-2.jpg",
  "STUDENTS-PROJECTS-3.jpg",
  "STUDENTS-PROJECTS-4.jpg",
  "STUDENTS-PROJECTS-5.jpg",
  "STUDENTS-PROJECTS-6.jpg",
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-4 h-1 w-12 bg-gold-500" />
    </div>
  );
}

function AchievementCard({
  image,
  description,
}: Achievement) {
  return (
    <article className="border-t border-slate-200 pt-10 first:border-t-0 first:pt-0">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full bg-slate-50">
            <Image
              src={`${IMAGE_BASE}/${image}`}
              alt="ECE achievement"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
            />
          </div>

          <div className="px-6 py-6 sm:px-8">
            <p className="text-justify text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projectImages.map((image, index) => (
        <div
          key={image}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
        >
          <Image
            src={`${PROJECT_IMAGE_BASE}/${image}`}
            alt={`ECE student project ${index + 1}`}
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Electronics and Communication Engineering (NBA Accredited)
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            <span className="italic text-[#D2B87C]">Achievements</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Department Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {/* Achievements */}
            <div className="space-y-12">
              <SectionHeading title="Achievements" />

              <div className="space-y-12">
                {achievements.map((achievement) => (
                  <AchievementCard
                    key={achievement.image}
                    image={achievement.image}
                    description={achievement.description}
                  />
                ))}
              </div>
            </div>

            {/* Student Projects */}
            <div className="mt-20 border-t border-slate-200 pt-12">
              <SectionHeading title="Glimpses of Students Projects" />

              <div className="mt-8">
                <ProjectImageGrid />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
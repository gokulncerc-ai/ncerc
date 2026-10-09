import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

const DEPARTMENT_PATH = "/department/computer-science-and-engineering";

const BASE =
  "/images/dpt/computer-science-and-engineering/achievements/faculty-achievement";

type ImagePair = { file: string; alt: string };

function Thumb({ file, alt }: ImagePair) {
  return (
    <div className="relative h-64 w-full overflow-hidden border border-[#20235A]/10 bg-[#F2EFE8] p-2 sm:h-80">
      <Image
        src={`${BASE}/${file}`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

function SingleImage(props: ImagePair) {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <Thumb {...props} />
    </div>
  );
}

function AchievementCard({
  index,
  label,
  title,
  children,
}: {
  index: number;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="group border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:border-[#D2B87C] sm:p-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#20235A] text-[10px] font-semibold text-[#D2B87C]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746] sm:text-xs">
            {label}
          </p>

          <h2 className="mt-2 font-serif text-xl leading-snug text-[#20235A] sm:text-2xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />

      <div className="mt-6">{children}</div>
    </article>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-justify text-sm leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8 [&:not(:first-child)]:mt-4">
      {children}
    </p>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-[#20235A]">{children}</span>;
}

const finalImageGroups: ImagePair[][] = [
  [
    { file: "faculty-achievement-pic-6.png", alt: "Patent document, photo 1" },
    { file: "faculty-achievement-pic-7.png", alt: "Patent document, photo 2" },
  ],
  [
    { file: "faculty-achievement-pic-8.png", alt: "Patent document, photo 3" },
    { file: "faculty-achievement-pic-9.png", alt: "Patent document, photo 4" },
  ],
  [
    { file: "faculty-achievement-pic-10.png", alt: "Patent document, photo 5" },
    { file: "faculty-achievement-pic-11.png", alt: "Patent document, photo 6" },
  ],
  [{ file: "faculty-achievement-pic-12.png", alt: "Patent document, photo 7" }],
];

export default function FacultyAchievementPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Computer Science &amp; Engineering
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Faculty
                <br />
                <span className="italic text-[#D2B87C]">Achievements</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Patents and research contributions by the faculty members of
                the Department of Computer Science and Engineering.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Computer Science &amp; Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={`${DEPARTMENT_PATH}/achievements`}
                  className="transition-colors hover:text-white"
                >
                  Achievements
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Faculty</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Achievements" />

        {/* FACULTY ACHIEVEMENTS */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Patents &amp; Research
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                Ideas that
                <br />
                <span className="italic">earn recognition.</span>
              </h2>
            </div>

            <div className="space-y-5">
              {/* Dr. U. Vijay Sankar - Indian Patent */}
              <AchievementCard
                index={0}
                label="Indian Patent"
                title="Dr. U. Vijay Sankar"
              >
                <Paragraph>
                  Dr. U. Vijay Sankar, CSE Department, Nehru College of
                  Engineering and Research Centre, Pampady, has been awarded a
                  Patent of Application publication in India and from the
                  Australian Government.
                </Paragraph>
                <Paragraph>
                  <Lead>Indian Patent Abstract:</Lead> The Internet of Things
                  (IoT) is the collection of computing devices or things that
                  have the capability to leverage the Internet to communicate
                  messages. The interconnected entities involve advanced
                  computing devices and daily gadgets equipped with sensing
                  devices. The Internet of Things has also persuaded much of
                  the emerging manufacturing sectors including smart cities,
                  vehicles and medical achievements. This invention proposes
                  the Physical Unclonable Function (PUF) to develop the
                  secured mutual authentication process for IoT smart home
                  devices.
                </Paragraph>
                <SingleImage
                  file="faculty-achievement-pic-1.png"
                  alt="Dr. U. Vijay Sankar patent document"
                />
              </AchievementCard>

              {/* Australian Patent - same inventor */}
              <AchievementCard
                index={1}
                label="Australian Government Patent"
                title="Dr. U. Vijay Sankar"
              >
                <Paragraph>
                  <Lead>Australian Government Patent Abstract:</Lead> Realistic
                  Electric Load Profiling System of Textile Mills by
                  Considering Dynamic and Stochastic Behaviours Using
                  Generative Adversarial Networks (GAN). As electric load
                  profiling is emerging in the textile industries, it is
                  essential to check the dynamic and stochastic behaviors
                  through implementing various algorithms. The manual finding
                  of electric loading is time consuming and inaccurate. To
                  remedy this problem the textile industry should implement a
                  smart grid. So the measurement in many sub areas of the
                  textile industry production was carried out. This was
                  subjected to k-means clustering, in which the cluster
                  centers and each cluster distance were measured, thereby
                  finding the clusters. This is further subjected to
                  Generative Adversarial Networks (GAN), which consider the
                  generated input and the real value, both fed into the
                  discriminator, thereby producing the output. This led to a
                  high performance in energy conservation.
                </Paragraph>
                <SingleImage
                  file="faculty-achievement-pic-2.png"
                  alt="Australian Government patent document"
                />
              </AchievementCard>

              {/* Ms Nisha A K */}
              <AchievementCard
                index={2}
                label="Australian Government Patent"
                title="Ms Nisha A K"
              >
                <Paragraph>
                  Ms Nisha A K, CSE Department, Nehru College of Engineering
                  and Research Centre, Pampady, has been awarded a Patent of
                  Application publication from the Australian Government.
                </Paragraph>
                <Paragraph>
                  <Lead>
                    Abstract: A Method of Tracking and Managing Municipal
                    Wastes Using Geo Spatial Technology.
                  </Lead>{" "}
                  In the past few decades, land site required for the proper
                  disposal of wastes without affecting the environment has
                  become critical, as there is only limited land available in
                  urban areas for disposing of municipal wastes. A huge amount
                  of waste is obtained from housing and commercial purposes
                  due to increased population growth. A tracking system for
                  waste is preferred to clean the waste completely and improve
                  environmental conditions using Geo-spatial technology. The
                  spatial information data is included in tracking the waste
                  in its respective location. The Geo-spatial technology
                  includes Geographic Information System (GIS), Remote Sensing
                  (RS), and Global Positioning System (GPS). Geospatial
                  technology is a growing technological field that includes
                  Remote Sensing (RS), Global Positioning Systems (GPS), and
                  Geographic Information Systems (GIS). Data about the earth
                  is collected using Geospatial technology and is also used
                  for analysis, simulations, modeling, and visualization. The
                  proper decision can be taken based on the information
                  acquired from the earth. This technology includes
                  intelligent maps which cover the entire earth. Therefore,
                  Geospatial based technology is essential in our daily life
                  routine. The implementation of Geo-spatial technology is the
                  best method to track municipal waste in its respective
                  location via the analysis of images with additional
                  information. This invention is proposed for the development
                  of a method for tracking and managing solid wastes in a
                  municipality area. This method involves the usage of
                  Geo-spatial technology, namely the Geographic Information
                  System (GIS). The tracking of the waste includes data
                  preprocessing in which missing data is eliminated, promoting
                  outlier management and a standardized dataset.
                </Paragraph>
                <SingleImage
                  file="faculty-achievement-pic-3.png"
                  alt="Ms Nisha A K patent document"
                />
              </AchievementCard>

              {/* Dr P Sampath */}
              <AchievementCard
                index={3}
                label="Australian Government Patent"
                title="Dr P Sampath"
              >
                <Paragraph>
                  Dr P Sampath, CSE Department, Nehru College of Engineering
                  and Research Centre, Pampady, has been awarded a Patent of
                  Application publication from the Australian Government.
                </Paragraph>
                <Paragraph>
                  <Lead>Abstract: A head-up display system comprises:</Lead> a
                  first projection module that projects a first image and that
                  is configured to display the first image in the frontal
                  direction not directly facing a user; a second projection
                  module that projects a second image and that is configured
                  to display the second image in the frontal direction
                  directly facing the user; and a reflecting optical element
                  configured to at least partially reflect the first image and
                  the second image.
                </Paragraph>
                <SingleImage
                  file="faculty-achievement-pic-4.png"
                  alt="Dr P Sampath patent document"
                />
              </AchievementCard>

              {/* Team patent */}
              <AchievementCard
                index={4}
                label="Indian Patent Application"
                title="Team Patent Application"
              >
                <Paragraph>
                  Ms. Silja Varghese, Ms Baby V, Mr Arun K, Mr Vysagh M, Ms
                  Shiji S, Ms Divya S, Ms Biji K P, Mr Vipin K M, of the CSE
                  Department, Nehru College of Engineering and Research
                  Centre, Pampady, applied for an Indian patent.
                </Paragraph>
                <SingleImage
                  file="faculty-achievement-pic-5.png"
                  alt="Team patent application document"
                />

                <div className="mt-4 space-y-4">
                  {finalImageGroups.map((group, gi) => (
                    <div
                      key={gi}
                      className={`grid grid-cols-1 gap-4 ${
                        group.length > 1 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {group.map((img) => (
                        <Thumb key={img.file} {...img} />
                      ))}
                    </div>
                  ))}
                </div>
              </AchievementCard>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                More Achievements
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Explore the events and accomplishments of our department.
              </h2>
            </div>

            <Link
              href={`${DEPARTMENT_PATH}/achievements`}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              All Achievements
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
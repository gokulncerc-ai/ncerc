import React from "react";
import Image from "next/image";
import {
  Briefcase,
  Building2,
  Calendar,
  ClipboardCheck,
  Cpu,
  FileSignature,
  Globe,
  Handshake,
  Landmark,
  Leaf,
  Lightbulb,
  Plane,
  Settings2,
  ShieldCheck,
  Target,
  User,
  Users,
  Zap,
} from "lucide-react";

import CollegeImage from "../../../../public/images/collegeone.jpg";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const strengthsLeft = [
  {
    icon: Settings2,
    text: "Skill based curriculum is framed in line with Industry requirements.",
  },
  {
    icon: Cpu,
    text: "IoT Centre of Excellence for doing Industry sponsored projects with internships.",
  },
  {
    icon: Building2,
    text: "World class infrastructure and resources for academics and research.",
  },
  {
    icon: ClipboardCheck,
    text: "Students can earn One/Two diploma/Certificate courses along with their graduation degree.",
  },
  {
    icon: User,
    text: "Responsive to present day industry needs and students centred.",
  },
  {
    icon: FileSignature,
    text: "Efficient examination and timely publication of results within 4 days of the last examination.",
  },
];

const strengthsRight = [
  {
    icon: Calendar,
    text: "Make up /supplementary examinations within 3 weeks after announcement of result.",
  },
  {
    icon: Zap,
    text: "Fast track/accelerated examinations, so that students are able to complete their degree within the stipulated period of duration of degree course.",
  },
  {
    icon: Target,
    text: "Encourages Research and Development.",
  },
  {
    icon: Globe,
    text: "Global Exposure and tie ups with Foreign University",
  },
  {
    icon: Lightbulb,
    text: "Encourages Entrepreneurship",
  },
  {
    icon: Leaf,
    text: "Green and Eco-Friendly diversified campus",
  },
  {
    icon: Handshake,
    text: "MoUs with reputed Industries for Internship and Placement",
  },
  {
    icon: Users,
    text: "Strong Alumni Network to guide our students for projects and Internship in their industry.",
  },
  {
    icon: Briefcase,
    text: "Assured Career Placements",
  },
  {
    icon: Landmark,
    text: "Supported by NGI TBI & NSTEDB",
  },
  {
    icon: Plane,
    text: "Internship during semester vacation",
  },
];

function StrengthList({ items }: { items: typeof strengthsLeft }) {
  return (
    <ul className="min-w-0 space-y-6">
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="flex min-w-0 items-start gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950">
            <Icon
              size={16}
              strokeWidth={1.5}
              className="text-gold-500"
            />
          </span>

          <p className="min-w-0 break-words pt-1 text-sm leading-relaxed text-navy-950">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function AutonomousPage() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden bg-white">
      <SiteHeader />

      {/* About intro */}
      <section className="w-full overflow-hidden bg-[#faf7f2] py-20">
        <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                About Us
              </span>

              <span className="h-px w-10 shrink-0 bg-gold-500" />
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]">
              Nehru College of
              <br />
              Engineering &amp;
              <br />
              Research Centre
            </h1>

            <p className="mt-2 text-sm font-bold tracking-wide text-navy-950">
              [Autonomous]
            </p>

            <p className="mt-5 max-w-xl break-words text-sm leading-relaxed text-slate-600 sm:text-base">
              Nehru College of Engineering and Research Centre (NCERC)
              Established in 2002 by the founder chairman Late Shri P.K.
              Das, NCERC is committed to impart world class quality
              education in engineering &amp; research and is now an
              Autonomous Institution affiliated to A P J Abdul Kalam
              Technological University (KTU). It is also an ISO 9001:2015
              certified institution, approved by All India Council for
              Technical Education (AICTE), and is RE-Accredited by National
              Assessment and Accreditation Council (NAAC) with &lsquo;A&rsquo;
              Grade and NBA Accredited UG-Programmes (CSE, Mechatronics
              Engineering). Over these years NCERC has grown to be one of the
              Best Self Financing College in Thrissur, Kerala.
            </p>
          </div>

          {/* Diagonal-cut photo frame */}
          <div className="relative h-64 min-w-0 w-full overflow-hidden sm:h-80 lg:h-96">
            <div
              aria-hidden
              className="absolute inset-0 bg-gold-500"
              style={{
                clipPath: "polygon(0 0, 13% 0, 0 13%)",
              }}
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-navy-950"
              style={{
                clipPath:
                  "polygon(100% 100%, 87% 100%, 100% 87%)",
              }}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath:
                  "polygon(13% 0, 100% 0, 100% 87%, 87% 100%, 0 100%, 0 13%)",
              }}
            >
              <Image
                src={CollegeImage}
                alt="NCERC campus building"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="w-full overflow-hidden bg-white py-20">
        <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Our Strengths
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
              Why Choose NCERC?
            </h2>

            <p className="mt-5 break-words text-sm leading-relaxed text-slate-600 sm:text-base">
              Achieving autonomous status showcases NCERC&rsquo;s commitment
              to excellence, research, and innovation. Our faculty members
              are renowned for their expertise in their respective fields
              and are committed to nurturing their students&rsquo;
              intellectual and professional growth. NCERC&rsquo;s
              state-of-the-art infrastructure, well-equipped laboratories,
              and extensive library resources further enhance the learning
              experience for students. NCERC&rsquo;s commitment to holistic
              development is evident through our emphasis on co-curricular
              and extra-curricular activities. The college encourages
              students to participate in various clubs, societies, and
              events that foster creativity, leadership, and teamwork.
              Additionally, NCERC has established strong industry
              partnerships and collaborations to provide students with
              practical exposure and hands-on experience in their chosen
              fields. NCERC has emerged as one of the best engineering
              colleges in Kerala. The institution&rsquo;s focus on providing
              a conducive learning environment, promoting research and
              innovation, and fostering industry-relevant skills has
              positioned it as a preferred choice for aspiring engineers in
              Kerala.
            </p>
          </div>

          <div className="min-w-0 w-full overflow-hidden rounded-2xl bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />

              <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Key Highlights &amp; Benefits
              </span>

              <span className="h-px w-10 shrink-0 bg-gold-500" />
            </div>

            <div className="mt-8 grid min-w-0 grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <StrengthList items={strengthsLeft} />
              <StrengthList items={strengthsRight} />
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Accreditations */}
      <section className="w-full overflow-hidden bg-navy-950 py-16">
        <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)_minmax(0,auto)] lg:gap-10">
          {/* Certificate mockup card */}
          <div className="flex min-w-0 h-56 w-full items-center gap-4 overflow-hidden rounded-xl bg-white p-6 shadow-xl sm:h-64">
            <ShieldCheck
              size={36}
              strokeWidth={1.25}
              className="shrink-0 text-navy-950"
            />

            <div className="min-w-0">
              <p className="font-display text-xl font-bold uppercase tracking-wide text-navy-950">
                NCERC
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Autonomous
              </p>

              <span className="mt-3 block h-px w-16 bg-slate-200" />
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Recognition &amp; Accreditations
              </span>

              <span className="h-px w-10 shrink-0 bg-gold-500" />
            </div>

            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              UGC Autonomous
            </h2>

            <p className="mt-4 max-w-xl break-words text-sm leading-relaxed text-white/70 sm:text-base">
              NCERC&rsquo;s autonomous status is a testament to our
              commitment to academic freedom, flexibility, and innovation.
              It empowers us to design industry-relevant programs, adopt
              modern teaching methods, and continuously enhance the
              learning experience for our students.
            </p>
          </div>

          {/* Recognition badges */}
          <div className="flex min-w-0 flex-wrap items-center justify-center gap-6 lg:justify-end">
            <div className="flex min-w-[100px] flex-col items-center gap-2 text-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-500">
                <Landmark
                  size={26}
                  strokeWidth={1.5}
                  className="text-navy-950"
                />
              </span>

              <p className="text-xs font-bold uppercase tracking-wide text-white">
                UGC
                <br />
                Autonomous
              </p>
            </div>

            <div className="flex min-w-[120px] flex-col items-center gap-2 text-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold-500">
                <ShieldCheck
                  size={26}
                  strokeWidth={1.5}
                  className="text-navy-950"
                />
              </span>

              <p className="text-xs font-bold uppercase tracking-wide text-white">
                Autonomous
                <br />
                (Affiliated to KTU)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="w-full overflow-hidden bg-[#faf7f2] py-20">
        <div className="mx-auto grid w-full max-w-8xl min-w-0 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 min-w-0 w-full overflow-hidden rounded-2xl shadow-xl sm:h-80">
            <Image
              src={CollegeImage}
              alt="Students working together at NCERC"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-gold-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Our Vision
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
              Shaping Future Engineers
            </h2>

            <p className="mt-5 max-w-xl break-words text-sm leading-relaxed text-slate-600 sm:text-base">
              At NCERC, we believe in creating not just engineers, but
              innovators, leaders, and responsible citizens. Our autonomous
              status, strong industry connections, and commitment to
              excellence make us a premier destination for engineering
              education in Kerala.
            </p>

            <span className="mt-6 block h-0.5 w-10 bg-gold-500" />

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-navy-950">
              <span>Learn</span>
              <span className="text-gold-500">|</span>
              <span>Innovate</span>
              <span className="text-gold-500">|</span>
              <span>Build Your Future</span>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

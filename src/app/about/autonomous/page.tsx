import {
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Lightbulb,
  Microscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const highlights = [
  {
      icon: BookOpen,
      title: "Skill-Based Curriculum",
      description:
          "Curriculum designed in line with current industry requirements to develop relevant professional skills.",
  },
  {
      icon: Microscope,
      title: "Research & Innovation",
      description:
          "Encourages research, development and industry-sponsored projects through dedicated academic initiatives.",
  },
  {
      icon: Building2,
      title: "World-Class Infrastructure",
      description:
          "Well-equipped laboratories, modern academic facilities and extensive resources support learning and research.",
  },
  {
      icon: GraduationCap,
      title: "Additional Certifications",
      description:
          "Students have opportunities to pursue additional diploma and certificate courses along with their graduation.",
  },
  {
      icon: Globe2,
      title: "Global Exposure",
      description:
          "International collaborations and university tie-ups provide students with wider academic exposure.",
  },
  {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description:
          "Students are encouraged to explore entrepreneurial ideas and develop innovative solutions.",
  },
];

const advantages = [
  "IoT Centre of Excellence for industry-sponsored projects and internships.",
  "Student-centred academic environment responsive to present-day industry needs.",
  "Efficient examinations with timely publication of results.",
  "Make-up and supplementary examinations conducted within a planned academic schedule.",
  "Fast-track and accelerated examination opportunities.",
  "Strong emphasis on Research and Development.",
  "Green and eco-friendly diversified campus.",
  "MoUs with reputed industries for internships and placements.",
  "Strong alumni network supporting projects and internships.",
  "Internship opportunities during semester vacations.",
  "Career-oriented learning with placement support.",
  "Supported by NGI TBI & NSTEDB.",
];

const recognitions = [
  "Autonomous Institution",
  "NAAC Re-accredited with 'A' Grade",
  "NBA Accredited UG Programmes",
  "ISO 9001:2015 Certified Institution",
  "AICTE Approved Institution",
  "Affiliated to APJ Abdul Kalam Technological University",
];

const documents = [
  {
      title: "UGC Autonomous Status",
      description:
          "Official document relating to the autonomous status of NCERC.",
      href: "https://ncerc.ac.in/content/download/approvals/AUTONOMOUS%20STATUS.pdf",
  },
  {
      title: "Autonomous Status Document",
      description:
          "Official autonomous status document issued for NCERC.",
      href: "https://ncerc.ac.in/content/download/approvals/Autonmous-Nehru%20modified-ktu.pdf",
  },
];


const tw = {
  page: "min-h-screen bg-white text-[#1e1917]",
  container: "mx-auto w-[calc(100%-48px)] max-w-[1440px] max-[900px]:w-[calc(100%-40px)] max-[640px]:w-[calc(100%-32px)]",
  sectionEyebrow: "mb-[22px] flex items-center gap-3 font-[family-name:var(--font-sans)] text-[10px] font-semibold leading-none tracking-[0.28em] text-[#8f7746] uppercase max-[640px]:text-[9px] max-[640px]:tracking-[0.22em]",
  sectionEyebrowLight: "mb-[22px] flex items-center gap-3 font-[family-name:var(--font-sans)] text-[10px] font-semibold leading-none tracking-[0.28em] text-[#d2b87c] uppercase max-[640px]:text-[9px] max-[640px]:tracking-[0.22em]",
  headingLine: "mt-8 h-px w-14 bg-[#d2b87c]",
  hero: "relative min-h-[690px] overflow-hidden bg-[#20235a] text-white max-[640px]:min-h-0",
  heroDecor: "pointer-events-none absolute inset-0 overflow-hidden before:absolute before:inset-0 before:content-[''] before:bg-[linear-gradient(90deg,rgba(32,35,90,0.98)_0%,rgba(32,35,90,0.94)_45%,rgba(32,35,90,0.82)_100%)] after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(135deg,transparent_0%,rgba(210,184,124,0.035)_48%,transparent_100%)]",
  heroCircleLarge: "absolute -top-[260px] -right-[180px] h-[720px] w-[720px] rounded-full border border-[#d2b87c]/[0.13]",
  heroCircleSmall: "absolute -top-[145px] -right-[65px] h-[490px] w-[490px] rounded-full border border-[#d2b87c]/10",
  heroGlow: "absolute right-[12%] top-[8%] h-80 w-80 rounded-full bg-[#d2b87c]/[0.055] blur-[50px]",
  heroGrid: "grid min-h-[690px] grid-cols-[1.1fr_0.9fr] items-center gap-[70px] py-[110px] pb-[90px] max-[1100px]:grid-cols-[1fr_0.8fr] max-[1100px]:gap-[45px] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-[50px] max-[900px]:py-[110px] max-[900px]:pb-[95px] max-[640px]:gap-[38px] max-[640px]:py-[92px] max-[640px]:pb-[78px]",
  heroContent: "max-w-[760px]",
  eyebrow: "mb-6 flex items-center gap-3 font-[family-name:var(--font-sans)] text-[10px] font-semibold tracking-[0.28em] text-[#d2b87c] uppercase",
  eyebrowLine: "h-px w-12 shrink-0 bg-[#d2b87c]",
  heroActions: "mt-[34px] flex flex-wrap items-center gap-6 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[18px]",
  primaryButton: "inline-flex items-center gap-3 border border-[#d2b87c] bg-[#d2b87c] px-5 py-[13px] font-[family-name:var(--font-sans)] text-[10px] font-semibold tracking-[0.18em] text-[#20235a] uppercase no-underline transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-[#d2b87c]",
  heroMeta: "flex items-center gap-[10px] font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.22em] text-white/40 uppercase",
  metaDot: "h-1.5 w-1.5 rounded-full bg-[#d2b87c]",
  heroVisual: "relative flex min-h-[430px] justify-end max-[900px]:min-h-[350px] max-[900px]:justify-start max-[640px]:min-h-[290px]",
  heroVisualFrame: "relative flex min-h-[430px] w-full max-w-[480px] flex-col justify-between border border-[#d2b87c]/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-7 before:pointer-events-none before:absolute before:inset-[14px] before:border before:border-white/[0.08] before:content-[''] max-[900px]:min-h-[350px] max-[640px]:min-h-[290px] max-[640px]:p-[22px]",
  heroVisualTop: "relative z-[1] flex items-center justify-between font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.2em] text-white/[0.38] uppercase",
  heroVisualBottom: "relative z-[1] flex items-center justify-between font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.2em] text-white/[0.38] uppercase max-[640px]:flex-wrap max-[640px]:gap-2 max-[640px]:text-[8px]",
  heroVisualCenter: "relative z-[1] flex flex-col items-start text-[#d2b87c]",
  heroAccentTop: "absolute -top-4 -left-4 h-[76px] w-[76px] border-l border-t border-[#d2b87c] max-[640px]:-top-2 max-[640px]:-left-2",
  heroAccentBottom: "absolute -right-4 -bottom-4 h-[76px] w-[76px] border-r border-b border-[#d2b87c] max-[640px]:-right-2 max-[640px]:-bottom-2",
  heroFooter: "absolute right-0 bottom-0 left-0 z-[3] border-t border-white/10",
  heroFooterInner: "flex min-h-[52px] items-center justify-between font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.2em] text-white/[0.38] uppercase max-[640px]:min-h-12 max-[640px]:text-[7px] max-[640px]:tracking-[0.14em]",
  introduction: "bg-[#faf7f2] py-24 max-[640px]:py-[76px]",
  introGrid: "grid grid-cols-[0.72fr_1.28fr] gap-[90px] max-[1100px]:gap-[55px] max-[900px]:grid-cols-1 max-[900px]:gap-[45px]",
  introHeading: "min-w-0",
  introText: "pt-0.5",
  story: "bg-white py-24 max-[640px]:py-[76px]",
  storyGrid: "grid grid-cols-[0.92fr_1.08fr] items-center gap-[88px] max-[1100px]:gap-[55px] max-[900px]:grid-cols-1 max-[900px]:gap-[45px]",
  storyVisual: "relative",
  storyImage: "group relative aspect-[1/1.05] overflow-hidden bg-[#20235a] after:pointer-events-none after:absolute after:inset-4 after:border after:border-white/[0.28] after:content-[''] max-[640px]:aspect-square",
  imageOverlay: "absolute inset-0 bg-[linear-gradient(to_top,rgba(32,35,90,0.8),transparent_55%)]",
  imageCaption: "absolute right-0 bottom-0 z-[2] flex min-w-[210px] items-center justify-between gap-[30px] bg-[#20235a] px-5 py-[18px] text-white max-[640px]:min-w-[185px] max-[640px]:px-4 max-[640px]:py-[14px]",
  storyIndex: "absolute -bottom-5 -left-5 flex h-[76px] w-[76px] items-center justify-center border border-[#d2b87c] bg-white font-[family-name:var(--font-display)] text-[22px] font-semibold text-[#20235a] max-[640px]:-bottom-2 max-[640px]:-left-2 max-[640px]:h-[60px] max-[640px]:w-[60px] max-[640px]:text-lg",
  storyContent: "min-w-0",
  recognition: "bg-[#20235a] py-24 text-white max-[640px]:py-[76px]",
  recognitionHeader: "mb-12 grid grid-cols-[1fr_0.72fr] items-end gap-20 max-[1100px]:gap-[45px] max-[900px]:grid-cols-1 max-[900px]:gap-[25px]",
  recognitionGrid: "grid grid-cols-3 border-t border-l border-white/[0.12] max-[900px]:grid-cols-2 max-[640px]:grid-cols-1",
  recognitionCard: "relative min-h-[210px] border-r border-b border-white/[0.12] p-7 transition-colors duration-300 hover:bg-white/[0.035] max-[640px]:min-h-[190px]",
  recognitionTop: "flex items-center justify-between",
  recognitionBottom: "absolute right-7 bottom-7 left-7",
  goldLine: "mb-[18px] h-px w-8 bg-[#d2b87c] transition-[width] duration-300 group-hover:w-[52px]",
  highlights: "bg-white py-24 max-[640px]:py-[76px]",
  sectionIntro: "mb-12 max-w-[780px]",
  highlightGrid: "grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1",
  highlightCard: "group relative min-h-[285px] overflow-hidden border border-[rgba(32,35,90,0.1)] bg-white p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-[#d2b87c]/[0.65] hover:shadow-[0_18px_50px_rgba(32,35,90,0.08)] max-[640px]:min-h-[250px]",
  highlightTop: "mb-[30px] flex items-center justify-between",
  highlightIcon: "flex h-[42px] w-[42px] items-center justify-center border border-[#d2b87c]/[0.55] text-[#20235a] transition-colors duration-300 group-hover:bg-[#20235a] group-hover:text-[#d2b87c]",
  cardLine: "mb-[18px] h-px w-8 bg-[#d2b87c]",
  cardCornerNumber: "absolute right-[22px] bottom-[17px] font-[family-name:var(--font-display)] text-[64px] font-semibold leading-none text-[#20235a]/[0.045]",
  advantages: "bg-[#faf7f2] py-24 max-[640px]:py-[76px]",
  advantagesGrid: "grid grid-cols-[0.78fr_1.22fr] items-start gap-[90px] max-[1100px]:gap-[55px] max-[900px]:grid-cols-1 max-[900px]:gap-[45px]",
  advantagesHeading: "sticky top-[120px] max-[900px]:static",
  advantageList: "border-t border-[rgba(32,35,90,0.1)]",
  advantageItem: "grid grid-cols-[38px_1fr_20px] items-center gap-[18px] border-b border-[rgba(32,35,90,0.1)] py-[19px] transition-[padding] duration-[250ms] hover:px-2 max-[640px]:grid-cols-[28px_1fr_18px] max-[640px]:gap-3 max-[640px]:py-[17px]",
  itemNumber: "font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.12em] text-[#d2b87c]",
  documents: "bg-white py-24 max-[640px]:py-[76px]",
  documentsBox: "grid grid-cols-[0.8fr_1.2fr] items-center gap-[70px] bg-[#20235a] p-[54px] max-[1100px]:gap-[45px] max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[640px]:p-[30px_20px]",
  documentsHeading: "min-w-0",
  documentList: "flex flex-col gap-[10px]",
  documentCard: "grid grid-cols-[28px_46px_1fr_22px] items-center gap-4 border border-white/[0.12] p-[17px] text-white no-underline transition-all duration-300 hover:translate-x-1 hover:border-[#d2b87c]/40 hover:bg-white/[0.04] max-[640px]:grid-cols-[22px_42px_1fr_18px] max-[640px]:gap-[10px] max-[640px]:p-[14px]",
  documentNumber: "font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.12em] text-white/[0.28]",
  documentIcon: "flex h-[46px] w-[46px] items-center justify-center bg-[#d2b87c]/10 text-[#d2b87c] max-[640px]:h-[42px] max-[640px]:w-[42px]",
  documentInformation: "min-w-0",
  documentArrow: "text-[#d2b87c] max-[640px]:w-[17px]",
  closing: "relative overflow-hidden bg-[#f2efe8] py-[110px] before:pointer-events-none before:absolute before:left-1/2 before:top-1/2 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-[#20235a]/[0.07] before:content-[''] max-[640px]:py-[76px]",
  closingContent: "relative z-[1] mx-auto max-w-[850px] text-center",
  closingIcon: "mx-auto mb-[22px] flex h-[58px] w-[58px] items-center justify-center border border-[#d2b87c] text-[#d2b87c]",
  heroTitle: "m-0 max-w-[760px] font-[family-name:var(--font-display)] text-[64px] font-semibold leading-[1.02] tracking-[-0.035em] max-[1100px]:text-[56px] max-[640px]:text-[45px] max-[640px]:leading-[1.04]",
  heroTitleAccent: "block text-[#d2b87c]",
  sectionTitle: "m-0 font-[family-name:var(--font-display)] text-[48px] font-semibold leading-[1.04] tracking-[-0.025em] max-[1100px]:text-[42px] max-[640px]:text-[36px] max-[640px]:leading-[1.06]",
  titleAccent: "text-[#d2b87c]",
  bodyText: "mb-5 [&:last-child]:mb-0 font-[family-name:var(--font-sans)] text-[14px] leading-[1.85] text-[#625e59] max-[640px]:text-[13px] max-[640px]:leading-[1.8]",
  heroBodyText: "mt-7 max-w-[590px] font-[family-name:var(--font-sans)] text-[15px] leading-[1.85] text-white/[0.64] max-[640px]:text-sm max-[640px]:leading-[1.75]",
  recognitionDescription: "m-0 font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-white/[0.55]",
  highlightDescription: "mt-3 max-w-[390px] font-[family-name:var(--font-sans)] text-[13px] leading-[1.75] text-[#6a655e]",
  advantageDescription: "mt-[22px] mb-0 max-w-[440px] font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-[#625e59]",
  documentDescription: "mt-5 mb-0 max-w-[400px] font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-white/[0.52]",
  closingDescription: "mx-auto mt-[22px] max-w-[680px] font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-[#625e59] max-[640px]:text-[13px] max-[640px]:leading-[1.8]",
  sectionIntroDescription: "mt-[22px] mb-0 max-w-[620px] font-[family-name:var(--font-sans)] text-sm leading-[1.85] text-[#625e59] max-[640px]:text-[13px] max-[640px]:leading-[1.8]",
  storyCaptionLabel: "font-[family-name:var(--font-sans)] text-[8px] font-semibold tracking-[0.25em] text-[#d2b87c] uppercase",
  storyCaptionTitle: "font-[family-name:var(--font-display)] text-[17px] font-semibold text-white max-[640px]:text-[15px]",
  recognitionCardTitle: "m-0 max-w-[270px] font-[family-name:var(--font-sans)] text-[15px] font-semibold leading-[1.55] text-white",
  highlightCardTitle: "m-0 font-[family-name:var(--font-display)] text-xl font-semibold leading-[1.2] text-[#20235a] max-[640px]:text-[19px]",
  documentTitle: "m-0 font-[family-name:var(--font-sans)] text-sm font-semibold text-white max-[640px]:text-xs max-[640px]:leading-[1.4]",
  documentDescriptionSmall: "mt-[5px] mb-0 font-[family-name:var(--font-sans)] text-[11px] leading-[1.55] text-white/[0.45] max-[640px]:text-[10px] max-[640px]:leading-[1.5]",
  itemDescription: "m-0 font-[family-name:var(--font-sans)] text-[13px] leading-[1.65] text-[#4f4b47] max-[640px]:text-xs",
  storyCaptionWrap: "flex flex-col gap-[5px]",
  eyebrowText: "font-[family-name:var(--font-sans)] text-[10px] font-semibold tracking-[0.28em] text-[#d2b87c] uppercase",
  footerText: "max-[640px]:max-w-[70%] max-[640px]:leading-[1.4]",
};

const page = () => {
  return (
      <>
          <SiteHeader />

          <main className={tw.page}>
              {/* =====================================================
                  HERO
              ===================================================== */}
              <section className={tw.hero}>
                  <div className={tw.heroDecor}>
                      <div className={tw.heroCircleLarge} />
                      <div className={tw.heroCircleSmall} />
                      <div className={tw.heroGlow} />
                  </div>

                  <div className={tw.container + " relative z-[2]"}>
                      <div className={tw.heroGrid}>
                          <div className={tw.heroContent}>
                              <div className={tw.eyebrow}>
                                  <span className={tw.eyebrowLine} />
                                  <span className={tw.eyebrowText}>Institutional Excellence</span>
                              </div>

                              <h1 className={tw.heroTitle}>
                                  Autonomous
                                  <span className={tw.heroTitleAccent}>Institution.</span>
                              </h1>

                              <p className={tw.heroBodyText}>
                                  Nehru College of Engineering & Research Centre
                                  stands committed to academic excellence,
                                  research, innovation and industry-ready
                                  education.
                              </p>

                              <div className={tw.heroActions}>
                                  <a
                                      href="#about-autonomy"
                                      className={tw.primaryButton}
                                  >
                                      Explore Autonomy
                                      <ArrowUpRight size={15} />
                                  </a>

                                  <div className={tw.heroMeta}>
                                      <span className={tw.metaDot} />
                                      <span>Established 2002</span>
                                  </div>
                              </div>
                          </div>

                          <div className={tw.heroVisual}>
                              <div className={tw.heroVisualFrame}>
                                  <div className={tw.heroVisualTop}>
                                      <span className="text-[#d2b87c]">NCERC</span>
                                      <span>01</span>
                                  </div>

                                  <div className={tw.heroVisualCenter}>
                                      <Award
                                          className="mb-6"
                                          size={34}
                                          strokeWidth={1.2}
                                      />

                                      <span className="font-[family-name:var(--font-sans)] text-[10px] font-semibold tracking-[0.25em] uppercase">Autonomous</span>
                                      <strong className="mt-2 font-[family-name:var(--font-display)] text-5xl font-semibold leading-none text-white max-[640px]:text-4xl">Institution</strong>
                                  </div>

                                  <div className={tw.heroVisualBottom}>
                                      <span>Academic Independence</span>
                                      <span>•</span>
                                      <span>Academic Excellence</span>
                                  </div>
                              </div>

                              <div className={tw.heroAccentTop} />
                              <div className={tw.heroAccentBottom} />
                          </div>
                      </div>
                  </div>

                  <div className={tw.heroFooter}>
                      <div className={tw.container}>
                          <div className={tw.heroFooterInner}>
                              <span className={tw.footerText}>
                                  NEHRU COLLEGE OF ENGINEERING & RESEARCH
                                  CENTRE
                              </span>

                              <span>EST. 2002</span>
                          </div>
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  INTRODUCTION
              ===================================================== */}
              <section
                  id="about-autonomy"
                  className={tw.introduction}
              >
                  <div className={tw.container}>
                      <div className={tw.introGrid}>
                          <div className={tw.introHeading}>
                              <div className={tw.sectionEyebrow}>
                                  <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                                  01 — About NCERC
                              </div>

                              <h2 className={tw.sectionTitle}>
                                  Empowering education
                                  <span className={tw.titleAccent}> through autonomy.</span>
                              </h2>

                              <div className={tw.headingLine} />
                          </div>

                          <div className={tw.introText}>
                              <p className={tw.bodyText}>
                                  Nehru College of Engineering and Research
                                  Centre (NCERC), established in 2002 by the
                                  founder chairman Late Shri P.K. Das, is
                                  committed to imparting world-class quality
                                  education in engineering and research.
                              </p>

                              <p className={tw.bodyText}>
                                  NCERC is now an Autonomous Institution
                                  affiliated to APJ Abdul Kalam Technological
                                  University (KTU). The institution is ISO
                                  9001:2015 certified, approved by AICTE,
                                  re-accredited by NAAC with an &apos;A&apos; Grade
                                  and has NBA accredited undergraduate
                                  programmes.
                              </p>

                              <p className={tw.bodyText}>
                                  Over the years, NCERC has developed into a
                                  leading self-financing engineering
                                  institution in Thrissur, Kerala, with a
                                  strong focus on academic excellence,
                                  research, innovation and holistic student
                                  development.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  AUTONOMY STORY
              ===================================================== */}
              <section className={tw.story}>
                  <div className={tw.container}>
                      <div className={tw.storyGrid}>
                          <div className={tw.storyVisual}>
                              <div className={tw.storyImage}>
                                  <Image
                                      className="block h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.025]"
                                      src="/images/home/ncerecfront.webp"
                                      fill
                                      sizes="(min-width: 1024px) 330px, 100vw"
                                      alt="Nehru College of Engineering and Research Centre campus"
                                  />

                                  <div className={tw.imageOverlay} />

                                  <div className={tw.imageCaption}>
                                      <div className={tw.storyCaptionWrap}>
                                          <span className={tw.storyCaptionLabel}>NCERC</span>
                                          <strong className={tw.storyCaptionTitle}>Thrissur, Kerala</strong>
                                      </div>

                                      <ArrowUpRight className="shrink-0 text-[#d2b87c]" size={18} />
                                  </div>
                              </div>

                              <div className={tw.storyIndex}>
                                  02
                              </div>
                          </div>

                          <div className={tw.storyContent}>
                              <div className={tw.sectionEyebrow}>
                                  <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                                  02 — Our Autonomy
                              </div>

                              <h2 className={tw.sectionTitle}>
                                  A platform for
                                  <span className={tw.titleAccent}>
                                      {" "}
                                      excellence, research & innovation.
                                  </span>
                              </h2>

                              <p className={tw.bodyText}>
                                  Achieving autonomous status reflects NCERC&apos;s
                                  continued commitment to academic
                                  excellence, research and innovation. The
                                  institution provides an environment where
                                  students can develop their intellectual
                                  abilities, professional skills and
                                  leadership potential.
                              </p>

                              <p className={tw.bodyText}>
                                  Experienced faculty members,
                                  state-of-the-art infrastructure,
                                  well-equipped laboratories and extensive
                                  library resources contribute to a learning
                                  environment designed around the evolving
                                  needs of students and industry.
                              </p>

                              <p className={tw.bodyText}>
                                  NCERC also places strong emphasis on
                                  co-curricular and extracurricular
                                  activities. Students are encouraged to
                                  participate in clubs, societies, events
                                  and initiatives that develop creativity,
                                  teamwork and leadership.
                              </p>

                              <p className={tw.bodyText}>
                                  Strong industry partnerships and
                                  collaborations further provide students
                                  with opportunities for practical exposure,
                                  internships and hands-on experience in
                                  their chosen fields.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  RECOGNITION
              ===================================================== */}
              <section className={tw.recognition}>
                  <div className={tw.container}>
                      <div className={tw.recognitionHeader}>
                          <div>
                              <div className={tw.sectionEyebrowLight}>
                                  <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                                  03 — Recognition
                              </div>

                              <h2 className={tw.sectionTitle}>
                                  A recognised institution
                                  <span className={tw.titleAccent}> built on quality.</span>
                              </h2>
                          </div>

                          <p className={tw.recognitionDescription}>
                              NCERC&apos;s academic journey is supported by
                              recognised accreditations, certifications and
                              institutional approvals.
                          </p>
                      </div>

                      <div className={tw.recognitionGrid}>
                          {recognitions.map((item, index) => (
                              <article
                                  className={tw.recognitionCard + " group"}
                                  key={item}
                              >
                                  <div className={tw.recognitionTop}>
                                      <span className="font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.18em] text-white/25">
                                          {String(index + 1).padStart(
                                              2,
                                              "0"
                                          )}
                                      </span>

                                      <CheckCircle2
                                          size={19}
                                          strokeWidth={1.4}
                                      />
                                  </div>

                                  <div className={tw.recognitionBottom}>
                                      <div className={tw.goldLine} />

                                      <h3 className={tw.recognitionCardTitle}>{item}</h3>
                                  </div>
                              </article>
                          ))}
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  KEY HIGHLIGHTS
              ===================================================== */}
              <section className={tw.highlights}>
                  <div className={tw.container}>
                      <div className={tw.sectionIntro}>
                          <div className={tw.sectionEyebrow}>
                              <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                              04 — Key Highlights
                          </div>

                          <h2 className={tw.sectionTitle}>
                              What autonomy enables
                              <span className={tw.titleAccent}> at NCERC.</span>
                          </h2>

                          <p className={tw.sectionIntroDescription}>
                              The autonomous framework enables NCERC to create
                              learning opportunities that respond more
                              closely to students, research and the evolving
                              needs of industry.
                          </p>
                      </div>

                      <div className={tw.highlightGrid}>
                          {highlights.map((item, index) => {
                              const Icon = item.icon;

                              return (
                                  <article
                                      className={tw.highlightCard}
                                      key={item.title}
                                  >
                                      <div className={tw.highlightTop}>
                                          <span className="font-[family-name:var(--font-sans)] text-[9px] font-semibold tracking-[0.18em] text-[#a5a19c]">
                                              {String(index + 1).padStart(
                                                  2,
                                                  "0"
                                              )}
                                          </span>

                                          <div
                                              className={
                                                  tw.highlightIcon
                                              }
                                          >
                                              <Icon
                                                  size={20}
                                                  strokeWidth={1.4}
                                              />
                                          </div>
                                      </div>

                                      <div className={tw.cardLine} />

                                      <h3 className={tw.highlightCardTitle}>{item.title}</h3>

                                      <p className={tw.highlightDescription}>{item.description}</p>

                                      <span
                                          className={
                                              tw.cardCornerNumber
                                          }
                                      >
                                          0{index + 1}
                                      </span>
                                  </article>
                              );
                          })}
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  ADVANTAGES
              ===================================================== */}
              <section className={tw.advantages}>
                  <div className={tw.container}>
                      <div className={tw.advantagesGrid}>
                          {/* Student Advantage Heading */}
                          <div className={tw.advantagesHeading}>
                              <div className={tw.sectionEyebrow}>
                                  <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                                  05 — Student Advantage
                              </div>

                              <h2 className={tw.sectionTitle}>
                                  Designed around
                                  <span className={tw.titleAccent}>
                                      {" "}student success.
                                  </span>
                              </h2>

                              <p className={tw.advantageDescription}>
                                  NCERC&apos;s autonomous framework supports
                                  flexible academic processes, industry
                                  exposure, research opportunities and
                                  career-oriented development.
                              </p>

                              {/* Supporting Image */}
                              <div className="mt-7 h-[260px] w-full max-w-xl overflow-hidden border border-[#d2b87c]/30 bg-[#20235a]/5 sm:h-[300px] lg:h-[340px]">
                                  <Image
                                      src="https://i.pinimg.com/736x/9e/05/e0/9e05e0eebb77b5448268ffd44250c246.jpg"
                                      alt="Students collaborating in a university campus environment"
                                      loading="lazy"
                                      fill
                                      sizes="(min-width: 1024px) 330px, 100vw"
                                      className="block h-full w-full object-cover object-center"
                                  />
                              </div>
                          </div>

                          {/* Student Advantages List */}
                          <div className={tw.advantageList}>
                              {advantages.map((item, index) => (
                                  <div
                                      className={tw.advantageItem}
                                      key={item}
                                  >
                                      <span className={tw.itemNumber}>
                                          {String(index + 1).padStart(2, "0")}
                                      </span>

                                      <p className={tw.itemDescription}>
                                          {item}
                                      </p>

                                      <CheckCircle2
                                          size={17}
                                          strokeWidth={1.4}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </section>



              {/* =====================================================
                  DOCUMENTS
              ===================================================== */}
              <section className={tw.documents}>
                  <div className={tw.container}>
                      <div className={tw.documentsBox}>
                          <div className={tw.documentsHeading}>
                              <div className={tw.sectionEyebrowLight}>
                                  <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                                  06 — Official Documents
                              </div>

                              <h2 className={`${tw.sectionTitle} text-white`}>
                                  Autonomous status
                                  <span className={tw.titleAccent}> documents.</span>
                              </h2>

                              <p className={tw.documentDescription}>
                                  Access the official documents related to
                                  NCERC&apos;s autonomous status.
                              </p>
                          </div>

                          <div className={tw.documentList}>
                              {documents.map((document, index) => (
                                  <a
                                      key={document.title}
                                      href={document.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={tw.documentCard}
                                  >
                                      <div className={tw.documentNumber}>
                                          0{index + 1}
                                      </div>

                                      <div
                                          className={
                                              tw.documentIcon
                                          }
                                      >
                                          <FileText
                                              size={20}
                                              strokeWidth={1.4}
                                          />
                                      </div>

                                      <div
                                          className={
                                              tw.documentInformation
                                          }
                                      >
                                          <h3 className={tw.documentTitle}>{document.title}</h3>
                                          <p className={tw.documentDescriptionSmall}>{document.description}</p>
                                      </div>

                                      <ArrowUpRight
                                          className={tw.documentArrow}
                                          size={20}
                                          strokeWidth={1.4}
                                      />
                                  </a>
                              ))}
                          </div>
                      </div>
                  </div>
              </section>

              {/* =====================================================
                  CLOSING
              ===================================================== */}
              <section className={tw.closing}>
                  <div className={tw.container}>
                      <div className={tw.closingContent}>
                          <div className={tw.closingIcon}>
                              <Users
                                  size={25}
                                  strokeWidth={1.3}
                              />
                          </div>

                          <div className={tw.sectionEyebrow + " justify-center max-[640px]:gap-2 [&>span]:w-12 max-[640px]:[&>span]:w-7"}>
                              <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                              The NCERC Difference
                              <span className="h-px w-12 shrink-0 bg-[#d2b87c]" />
                          </div>

                          <h2 className={tw.sectionTitle}>
                              Building an ecosystem for
                              <span className={tw.titleAccent}>
                                  {" "}
                                  future-ready engineers.
                              </span>
                          </h2>

                          <p className={tw.closingDescription}>
                              With autonomy, academic excellence and a strong
                              focus on research, innovation and industry
                              interaction, NCERC continues to create
                              opportunities for students to learn, explore
                              and grow.
                          </p>
                      </div>
                  </div>
              </section>
          </main>

          <FooterSection />
      </>
  );
};

export default page;
export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  blurb?: string;
  children?: NavItem[];
  target?: "_blank" | "_self";
};

export const primaryNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    children: [
      { label: "About NCERC", href: "/about" },
      { label: "Autonomous", href: "/about/autonomous" },
      { label: "Principal", href: "/about/principal" },
      {label: "Management", href: "/about/management"},
      { label: "Directors & Executive Members", href: "/about/directors-executive" },
      { label: "Mandatory Disclosure", href: "/about/disclosure" },
      {
        label: "NGI-Appstore",
        href: "https://ncerc.ac.in/appstore/",
        external: true,
      },
      { label: "Approvals & Affiliations", href: "/about/disclosure/approvals" },
      { label: "Accreditations", href: "/about/accreditation"},
      {
        label: "Policy",
        href: "/about/policy",
      },
      { label:"Infrastructure", href: "/about/infrastructure"},
      {label:"Facilities", href: "/about/facilities"},
      {label:"Feedback", href: "/about/feedback"},
      {label: "Holistic Model", href: "/about/holistic"},
      {label: "Governance", href: "/about/governance"},
    ],
  },
  {
    label: "Admission",
    children: [
      { label: "Apply Online", href: "https://admissions.nehrucolleges.com/application-form",external: true, },
      { label: "Admission Procedure", href: "/admission/admission-procedure" },
      { label: "Admission Center", href: "/admission/admission-center" },
      { label: "Pay Fees", href: "/admission/pay-fees" },
      {
        label: " 360 Degree Campus View",
        href: "https://ncerc.ac.in/360/",
        external: true,
      },
      {
        label: "Personality & Career Profiling Assessment",
        href: "https://ncerc.ac.in/admission/",
        external: true,
      },
      {
        label: "Scholarship",
        href: "/admission/scholarship",
      },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Courses", href: "/academics/courses" },
      { label: "Regulations & Curriculum", href: "/academics/regulations-and-curriculum" },
      { label: "Autonomous Examination Cell", href: "/academics/autonomous-examination-cell" },
      {
        label: "Exam Manuals",
        href: "/documents/Exam Manual.pdf",
        external: true,
      },
      { label: "Library", href: "/academics/library" },
      { label: "Certifications", href: "/academics/certifications" },
      { label: "Downloads", href: "/academics/download" },
      { label: "Circulars", href: "/mpd" },
      { label: "Committees", href: "/academics/committees" },
      { label: "Grievance Redressal", href: "/academics/grievance-redressal" },
      { label: "AICTE VAANI", href: "/academics/aicte-vaani" },
      { label: "Media & Publication Division", href: "/academics/mpd" },
      { label: "NGI Smart", href: "https://ncerc.ac.in/ngi-smart/",external:true,target: "_blank", },
      {
        label: "Antiragging",
        href: "/documents/antiragging/antiragging.pdf",
        target: "_blank",
        external: true,
      },
    ],
  },
  {
    label: "Departments",
    href: "/department",
    children: [
      {
        label: "B.Tech",
        blurb: "Undergraduate engineering programmes",
        children: [
          {
            label: "Mechanical Engineering",
            href: "/department/mechanical-engineering",
          },
          {
            label: "Electrical & Electronics Engineering",
            href: "/department/electrical-and-electronics-engineering",
          },
          {
            label: "Electronics & Communication Engineering",
            href: "/department/electronics-and-communication-engineering",
          },
          {
            label: "Computer Science and Engineering",
            href: "/department/computer-science-and-engineering",
          },
          {
            label: "CSE (Artificial Intelligence & Machine Learning)",
            href: "/department/cse_ai_and_ml",
          },
          {
            label: "Mechatronics Engineering",
            href: "/department/mechatronics_engineering",
          },
          {
            label: "Applied Science & Humanities",
            href: "/department/appliedScience/about",
          },
        ],
      },
      {
        label: "M.Tech",
        blurb: "Postgraduate engineering programmes",
        children: [
          {
            label: "Computer Science and Engineering",
            href: "/department/MTechCSE",
          },
          {
            label: "Energy Systems",
            href: "/department/energy-system",
          },
          {
            label: "VLSI Design",
            href: "/department/visi-design",
          },
          {
            label: "Artificial Intelligence & Data Science",
            href: "/department/MTechAIML",
          },
        ],
      },
      {
        label: "MCA",
        href: "/department/mca",
      },
      {
        label: "MBA",
        href: "/department/mba",
      },
    ],
  },
  {
    label: "Placements",
    children: [
      {
        label: "Placement Status",
        href: "/placements/placement_status",
      },
      {
        label: "Placed Students",
        href: "/placements/placed_students",
      },
    ],
  },
  {
    label: "RTI",
    href: "/documents/rti/RTI.pdf",
    external: true,
  },
  {
    label: "R&D Cell",
    children: [
      {
        label: "2026-2027",
        href: "/naac/1",
      },
      {
        label: "2025-2026",
        href: "/documents/rti/R&Dcell.pdf",
        external: true,
      },
    ],
  },
  {
    label: "IQAC",
    children: [
      {
        label: "IQAC",
        href: "/iqac",
      },
      {
        label: "AUDIT",
        href: "/iqac/audit",
      },
      {
        label: "AQAR",
        href: "/iqac/aqar",
      },
      {
        label: "NAAC-IQAC",
        href: "/iqac/naac_iqac",
      },
    ],
  },
];

/** Slim links shown in the top utility bar, above the main header row. */
export const utilityNavigation: NavItem[] = [
  {
    label: "Student Portal",
    href: "https://app.icampuz.in/ngi",

    external: true,
  },
  {
    label: "Student Support",
    children: [
      {
        label: "KTU Student Insurance",
        href: "/student-support/ktu_students_insurance",
      },
      {
        label: "NSS",
        href: "/student-support/nss",
      },
      {
        label: "NCC",
        href: "/student-support/ncc",

      },
      {
        label: "IEDC",
        href: "/student-support/iedc",
      },
      {
        label: "IIC",
        href: "/student-support/iic",
      },
      {
        label: "Sports",
        href: "/student-support/sports",
      },
      {
        label: "ICETSSI",
        href: "/student-support/icetssi",
      },
      {
        label: "Magazine",
        href: "/student-support/magazine",
      },
      {
        label: "IEEE",
        href: "https://ieeesbncerc.org/",
        external: true,
      },
      {
        label: "NGI TBI",
        href: "https://ngitbi.com/",
        external: true,
      },
      {
        label: "Student Certificates",
        href: "/student-support/student-certificates",
      },
      {
        label: "ICC Complain Registration",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdrEgXQoxvyWziLm7AhFNyOL0_c2wA5JFmiAgvatGR79rAqNw/viewform",
        external: true,
      },
      {
        label: "ICC Cell Information",
        href: "/alumni/alumni-feedback",
      },
      {
        label: "ICC Annual Report",
        href: "/alumni/alumni-feedback",
      },

    ],
  },
  {
    label: "Alumni",
    children: [
      {
        label: "Alumni",
        href: "/alumni",
      },
      {
        label: "Alumni Feedback",
        href: "/alumni/alumni-feedback",
      },
      {
        label: "Alumni Portal",
        href: "https://www.almashines.com/ngiaa",
        external: true,
      },

    ],
  },
  {
    label: "Media Gallery",
    children: [
      {
        label: "Gallery",
        href: "/media_gallery/gallery",
      },
      {
        label: "News & Events",
        href: "/media_gallery/news_and_events",
      },
      {
        label: "Upcoming Events",
        href: "/media_gallery/upcoming_events",

      },
      {
        label: "Blogs",
        href: "/media_gallery/blogs",

      },
      {
        label: "Conference",
        href: "/media_gallery/conference",

      },
      {
        label: "Journal",
        href: "https://xlescience.org/index.php/NIJASET",
        external: true,

      },

    ],
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/nehrucollege.pampady/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/ncerc/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nehrugroup_kerala",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@nehrucollegeofengineeringa1480",
  },
];

export const contactDetails = {
  phone: "+91 4884 284000",
  phoneHref: "tel:+914884284000",
  email: "info@ncerc.ac.in",
  emailHref: "mailto:info@ncerc.ac.in",
};

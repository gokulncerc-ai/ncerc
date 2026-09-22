export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  blurb?: string;
  children?: NavItem[];
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
      { label: "Approvals & Affiliations", href: "/approvals" },
      {
        label: "HR Policy",
        href: "/downloads/hr-policy/HR-POLICY.pdf",
        external: true,
      }
    ],
  },
  {
    label: "Admission",
    children: [
      { label: "Apply Online", href: "/contact" },
      { label: "Admission Procedure", href: "/admission-procedure" },
      { label: "Admission Center", href: "/admission-center" },
      { label: "Our Colleges", href: "/our-colleges" },
      {
        label: "Bank Account Details",
        href: "/content/download/NCE_5a87d2c1c240a04e2d1a0911ac5dee6d.pdf",
        external: true,
      },
      {
        label: "NGI Brochure",
        href: "/downloads/Brochure/NGI_Brochure.pdf",
        external: true,
      },
      {
        label: "NCERC Brochure",
        href: "/downloads/Brochure/NCERC.pdf",
        external: true,
      },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Courses", href: "/academics/courses" },
      { label: "Regulations & Curriculum", href: "/academics/regulationsAndCurriculum" },
      { label: "Autonomous Examination Cell", href: "/academics/autonomousExaminationCell" },
      {
        label: "Exam Manuals",
        href: "/documents/ExamManual.pdf",
        external: true,
      },
      { label: "Library", href: "/academics/library" },
      { label: "Certifications", href: "/library" },
      { label: "Downloads", href: "/mpd" },
      { label: "Circulars", href: "/mpd" },
      { label: "Committees", href: "/mpd" },
      { label: "Grievance Redressal", href: "/mpd" },
      { label: "AICTE VAANI", href: "/mpd" },
      { label: "Media & Publication Division", href: "/mpd" },
      { label: "NGI Smart", href: "/mpd" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      {
        label: "B.Tech",
        blurb: "Undergraduate engineering programmes",
        children: [
          { label: "Mechatronics Engineering", href: "/mechatronics-engineering" },
          { label: "Mechanical Engineering", href: "/mechanical-engineering" },
          {
            label: "Electrical & Electronics Engineering",
            href: "/electrical-and-electronics-engineering",
          },
          {
            label: "Electronics & Communication Engineering",
            href: "/electronics-and-communication-engineering",
          },
          {
            label: "Computer Science and Engineering",
            href: "/computer-science-and-engineering",
          },
          {
            label: "CSE (Artificial Intelligence & Machine Learning)",
            href: "/computer-science-and-engineering-aiml",
          },
          { label: "Applied Science & Humanities", href: "/applied-science-and-humanities" },
        ],
      },
      {
        label: "M.Tech",
        blurb: "Postgraduate engineering programmes",
        children: [
          {
            label: "Computer Science and Engineering",
            href: "/m-tech-computer-science-and-engineering",
          },
          { label: "Cyber Security", href: "/cyber-security" },
          { label: "Energy Systems", href: "/energy-system" },
          { label: "VLSI Design", href: "/visi-design" },
        ],
      },
      { label: "MCA", href: "/mca" },
      { label: "MBA", href: "/mba" },
    ],
  },
  {
    label: "Placements",
    children: [
      { label: "Placement Status", href: "/placement-status" },
      { label: "Placed Students", href: "/placed-student" },
    ],
  },
  {
    label: "RTI",
    href: "/downloads/iqac/RTI.pdf",
    external: true,
  },
  {
    // No page existed for this on the legacy site yet — wire up
    // the real destination once content/URL is confirmed.
    label: "R&D Cell",
    href: "/rd-cell",
  },
  {
    label: "IQAC",
    children: [
      { label: "IQAC", href: "/naac/1" },
      { label: "AQAR", href: "/aqar-details" },
      { label: "NAAC-IQAC", href: "/naac-iqac" },
    ],
  },
];

/** Slim links shown in the top utility bar, above the main header row. */
export const utilityNavigation: NavItem[] = [
  { label: "Student Portal", href: "/student-portal" },
  { label: "Alumni", href: "/alumni" },
  { label: "News & Events", href: "/news-events" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/nehrucollege.pampady/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/school/ncerc/" },
  { label: "Instagram", href: "https://www.instagram.com/nehrugroup_kerala" },
  { label: "YouTube", href: "https://www.youtube.com/@nehrucollegeofengineeringa1480" },
];

export const contactDetails = {
  phone: "+91 4884 284000",
  phoneHref: "tel:+914884284000",
  email: "info@ncerc.ac.in",
  emailHref: "mailto:info@ncerc.ac.in",
};


"use client";

import React from "react";
import {
    ArrowDown,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Microscope,
    UserRound,
    FileText,
    ExternalLink,
    Award,
    Briefcase,
    Network,
    BarChart3,
    BookMarked,
    ShieldCheck,
    Trophy,
    ScrollText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../../DepartmentNav/DepartmentNav";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

type SectionHeadingProps = {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
};

type DetailItemProps = {
    label: string;
    value: string;
};

type Course = string[];

type Publication = {
    number: string;
    category: string;
    year: string;
    citation: string;
    link?: string;
    indexing?: string;
    indexingLink?: string;
    note?: string;
};

type Book = {
    title: string;
    year?: string;
    publisher?: string;
    isbn: string;
};

type Patent = {
    title: string;
    date: string;
    number: string;
    status?: string;
    link?: string;
};

type Achievement = {
    title: string;
    award: string;
    year: string;
    awardedBy: string;
};

/* -------------------------------------------------------
   FACULTY DATA
------------------------------------------------------- */

const qualifications = [
    "PhD",
    "MBA – Marketing and HR",
    "PGDIAM",
    "PGDHM",
];

const researchInterests = [
    "Digital Technology Adoption",
    "Consumer Behaviour",
    "Financial Literacy",
    "Digital Inclusion",
    "Marketing Analytics",
    "Customer Relationship Management",
    "Service Quality",
    "Customer Satisfaction",
    "Human Resource Management",
    "Organizational Behaviour",
    "Innovative Teaching and Learning",
];

const keywords = [
    "Digital Technology Adoption",
    "Consumer Behaviour",
    "Financial Literacy",
    "Digital Inclusion",
    "Marketing Analytics",
    "Customer Relationship Management",
    "Service Quality",
];

const areasOfInterest = [
    "Marketing",
    "Human Resource Management",
    "Analytics",
];

const courses: Course[] = [
    ["01", "2020–2022", "MBA", "S3", "Tourism Management"],
    ["02", "2020–2022", "MBA", "S4", "Family Business"],
    ["03", "2021–2023", "MBA", "S1", "Ethics and Corporate Governance"],
    ["04", "2021–2023", "MBA", "S2", "Marketing"],
    ["05", "2021–2023", "MBA", "S3", "Business Analytics"],
    ["06", "2021–2023", "MBA", "S4", "Industry 4.0"],
    ["07", "2022–2024", "MBA", "S1", "ISM"],
    ["08", "2022–2024", "MBA", "S2", "Marketing"],
    ["09", "2022–2024", "MBA", "S3", "Tourism Management"],
    ["10", "2022–2024", "MBA", "S4", "Industry 4.0"],
    ["11", "2024–2026", "MBA", "S2", "Marketing"],
    ["12", "2023–2025", "MBA", "S1", "ISM"],
    ["13", "2023–2025", "MBA", "S2", "Marketing"],
    ["14", "2023–2025", "MBA", "S3", "Business Analytics"],
    ["15", "2023–2025", "MBA", "S4", "Family Business"],
    ["16", "2024–2026", "MBA", "S1", "Operations Management"],
    ["17", "2024–2026", "MBA", "S2", "Marketing"],
    ["18", "2024–2026", "MBA", "S3", "Business Analytics"],
    ["19", "2024–2026", "MBA", "S4", "Industry 4.0"],
    [
        "20",
        "2025–2027",
        "MBA",
        "S1",
        "Soft and Entrepreneurship Skills, Introduction to Design Thinking, Emotional Intelligence for Managers",
    ],
    ["21", "2025–2027", "MBA", "S2", "MOOC"],
];

/* -------------------------------------------------------
   PUBLICATIONS
------------------------------------------------------- */

const publications: Publication[] = [
    // SCOPUS INDEXED

    {
        number: "01",
        category: "Scopus Indexed",
        year: "2020",
        citation:
            "Krishna Kumar, TP. (2020). Shift of Entertainment Media to OTT Platform – The Paradigm Shift of Youth Impacting Business World, Turkish Online Journal of Qualitative Inquiry, Vol. 11, No. 2, pp. 415–421.",
        link: "https://tojqi.net/index.php/journal/article/view/9441",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21101019739",
    },
    {
        number: "02",
        category: "Scopus Indexed",
        year: "2023",
        citation:
            "Muhamed Rafi, Jabir Moosa, Krishna Kumar, T.P., Deepak, K. (2023). Crude Oil Price Influence on the Performance of Selected Stocks from Different Sectors – An Empirical Analysis, Journal of Survey in Fisheries Science, Vol. 10, Special Issue 3, pp. 1893–1902.",
        link: "https://doi.org/10.5281/zenodo.7833383",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100905326",
    },
    {
        number: "03",
        category: "Scopus Indexed",
        year: "2023",
        citation:
            "Saravanan, SK., Krishnamoorthy, R., Krishna Kumar, TP., Narayana Rao, R., Udaya Suriya Rajkumar, D., Thiagarajan, R. (2023). IoT Alert Reflexion of Forbidden Deforestation Regions with Drone Observation, The IEEE Xplore, Vol. 18, No. 5, pp. 201–211.",
        link: "https://ieeexplore.ieee.org/document/10073774",
        indexing: "IEEE Xplore",
        indexingLink:
            "https://ieeemsd.my.site.com/onlinesupport/s/article/Are-the-articles-in-the-IEEE-Xplore-digital-library-indexed-in-SCOPUS",
    },
    {
        number: "04",
        category: "Scopus Indexed",
        year: "2023",
        citation:
            "Krishna Kumar, TP., Purnendu Bikash Acharjee, Pravin Dnyaneshwar Sawant, Poonam Dabaria, Sulthan Mohideen, A. (2023). The Impact of Using Facebook on Consumer Buying Behaviour in Online, Journal of Chemical Health Risks, Vol. 12, No. S. 4, pp. 744–752.",
        link: "https://jchr.org/index.php/JCHR/article/view/8063",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100912214",
    },
    {
        number: "05",
        category: "Scopus Indexed",
        year: "2023",
        citation:
            "Manochandar, S., Krishna Kumar, TP., Purnendu Bikash Acharjee, Pravin Dnyaneshwar Sawant, Poonam Dabaria, Sulthan Mohideen, A. (2023). The Impact of Using Facebook on Consumer Buying Behaviour in Online, European Chemical Bulletin, Vol. 12, SI 4, pp. 744–752.",
        link: "https://www.eurchembull.com/archives/volume-12/special%20issue-4/2231",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100898023",
    },
    {
        number: "06",
        category: "Scopus Indexed",
        year: "2024",
        citation:
            "Krishna Kumar, TP., Priyanka Malhotra, Madhukumar, B., Maria Antony Raj, M., Augustian Isaac, R., Balasubramanian, D. (2024). Exploring the Factors Influencing the Effectiveness of Digital Marketing in Changing Environment; A Theoretical and Empirical Investigation, Journal of Educational Administration: Theory and Practice, Vol. 30, No. 4, pp. 7488–7493.",
        link: "https://kuey.net/index.php/kuey/article/view/2595",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100943319",
        note: "ISSN: 2148-2403",
    },
    {
        number: "07",
        category: "Scopus Indexed",
        year: "2024",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Shankar, N., Deepak, M. (2024). Global to Local Perspectives in Succession Planning of Family Business in Unorganized Sector, Journal of Educational Administration: Theory and Practice, Vol. 30, No. 5, pp. 3056–3066.",
        link: "https://kuey.net/index.php/kuey/article/view/3386/2181",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100943319",
        note: "ISSN: 2148-2403",
    },
    {
        number: "08",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Ramesh, S., Pallavi, DR., Ramachandran, M., Vimala Saravanan, Manjula Selvam. (2025). Individual and Group Behavior Based Customer Product Recommendation to Designing Information Systems SPSS Statistics, Springer Nature Switzerland, 10 January 2025, pp. 292–299.",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-73324-6_29",
        indexing: "Scopus Indexed – ICO 2023, LNNS 1169",
        indexingLink: "https://doi.org/10.1007/978-3-031-73324-6_29",
        note: "Book Chapter",
    },
    {
        number: "09",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Ramesh, S., Krishna Kumar, TP., Pallavi, DR., Ramachandran, M., Kurinjimalar Ramu, Sangeetha Rajkumar. (2025). Evidence on Dividend Preferences Attention and IPO Valuation Retail Investor SPSS Statistics, Springer Nature Switzerland, 10 January 2025, pp. 651–659.",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-73324-6_63",
        indexing: "Scopus Indexed – ICO 2023, LNNS 1169",
        indexingLink: "https://doi.org/10.1007/978-3-031-73324-6_63",
        note: "Book Chapter",
    },
    {
        number: "10",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Seema, Vijayamol, KT., Bindiya Tater. (2025). The Impact of Artificial Intelligence and Machine Learning on Personalized Marketing Strategies, Journal of Chemical Health Risks, Vol. 15, No. 2, pp. 1562–1576.",
        link: "https://jchr.org/index.php/JCHR/article/view/8063",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21100912214",
    },
    {
        number: "11",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Monika Rana, Krishna Kumar, TP., Puneet Kapoor. (2025). Emerging Trends in Sustainable Marketing: Analyzing the Impact of Eco-Friendly Consumer Behavior on Brand Strategies, International Journal of Environmental Sciences, Vol. 11, No. 8s, pp. 207–213.",
        link: "https://theaspd.com/index.php/ijes/article/view/913",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21101096350#tabs=2",
        note: "ISSN: 2229-7359",
    },
    {
        number: "12",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Monika Rana, Krishna Kumar, TP., Suriakala, R. (2025). Analyzing the Impact of Government Policies on Women Entrepreneurship: A Secondary Data Study, International Journal of Environmental Sciences, Vol. 11, No. 8s, pp. 198–206.",
        link: "https://theaspd.com/index.php/ijes/article/view/912",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21101096350#tabs=2",
        note: "ISSN: 2229-7359",
    },
    {
        number: "13",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Dhanya Nair, Suriakala, R., Krishna Prasad, A. (2025). Navigating the Future: The Role of AI and Machine Learning in Financial Market Innovations, Journal of Applied Bioanalysis, Vol. 11, No. 4, pp. 50–60.",
        link: "https://journalofappliedbioanalysis.com/navigating-the-future:-the-role-of-ai-and-machine-learning-in-financial-market-innovations",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21101122745",
        note: "ISSN: 2405-710X",
    },
    {
        number: "14",
        category: "Scopus Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Somasundaram, R., Sneha John, P., Lilly Thomas. (2025). Strategic Integration of Social Media in Educational Planning: Management Approaches for Student Engagement and Institutional Development, Journal of Applied Bioanalysis, Vol. 11, No. S2, pp. 128–136.",
        link: "https://doi.org/10.53555/jab.v11si2.514",
        indexing: "Scopus Indexed",
        indexingLink: "https://www.scopus.com/sourceid/21101122745",
    },

    // ABDC INDEXED

    {
        number: "15",
        category: "ABDC Indexed",
        year: "2022",
        citation:
            "Krishna Kumar, TP. (2022). Business Agility – an Inevitable Model to be the Market Leader in the AI & IoT Enabled Business Environment, Empirical Economics Letters, Vol. 21, Special No. 1, pp. 21–26.",
        link: "https://doi.org/10.5281/zenodo.7833025",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
    },
    {
        number: "16",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Deepak, M., Dhanya Nair, Krishnaprasad, A. (2025). The Influence of User-Generated Content on Brand Reputation and Trust, European Economic Letters, Vol. 15, No. 2, pp. 137–147.",
        link: "https://doi.org/10.52783/eel.v15i2.2826",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
        note: "ISSN: 2323-5233",
    },
    {
        number: "17",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Saravanakumar, A., Sneha John, P., Puneet Kapoor. (2025). Green Supply Chain Management: Key Challenges, Emerging Trends, and Strategic Solutions for Sustainable Business Practices, European Economic Letters, Vol. 15, No. 2, pp. 1143–1151.",
        link: "https://eelet.org.uk/index.php/journal/article/view/2937",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
        note: "ISSN: 2323-5233",
    },
    {
        number: "18",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Bamin, J., Devendran, A., Madhavi Latha, CH., Akshay Kumar Gubbala, Manoj, M. (2025). Customer Engagement Strategies and their Impact on E-Commerce Loyalty, Journal of Informatics Education and Research, Vol. 5, Issue 2, pp. 4548–4857.",
        link: "https://jier.org/index.php/journal/article/view/2962",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
        note: "ISSN: 1526-4726",
    },
    {
        number: "19",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Janitha Kularajasingam, Mini, CN., Vijayamol. (2025). Urban Air Mobility: A Comprehensive Literature Review on the Growth of Air Taxis and Drone Delivery Systems, International Journal of Economic Practices and Theories, Volume 2025, Issue 1, pp. 147–159.",
        link: "https://ijapt.org/index.php/journal/article/view/25",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
        note: "ISSN: 2247-7225",
    },
    {
        number: "20",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Dhanya Nair, Reshma, CK., Krishnaprasad, A., Shankar, N. (2025). The Role of Leadership in Enhancing Healthcare Quality and Patient Safety, Advances in Consumer Research, Vol. 2, Issue 6, pp. 598–602.",
        link: "https://acr-journal.com/article/the-role-of-leadership-in-enhancing-healthcare-quality-and-patient-safety-2072/",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
    },
    {
        number: "21",
        category: "ABDC Indexed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Bamini, J., Devendran, A., Madhavi Latha, CH., Akshay Kumar Gubbala, Manoj, M. (2025). Customer Engagement Strategies and their Impact on E-Commerce Loyalty, Journal of Informatics Education and Research, Vol. 5, Issue 2, pp. 4548–4557.",
        link: "https://doi.org/10.52783/jier.v5i2.2962",
        indexing: "ABDC",
        indexingLink: "https://abdc.edu.au/research/abdc-journal-quality-list/",
    },

    // WEB OF SCIENCE

    {
        number: "22",
        category: "Web of Science",
        year: "2025",
        citation:
            "Krishna Kuma, TP., Preeti Tyagi, Himani Sharma, Abhishek Sharma, Balasubramanian Durairaj, Mohana Krishna, I. (2025). Exploring the Role of Emotional and Spiritual Intelligences in Enhancing Managerial Core Competencies of Corporate Executives in India, Musik in Bayern, Volume 90, Issue 9, pp. 79–93.",
        link: "https://musikinbayern.com/admin/uploads/Exploring%20the%20Role%20of%20Emotional%20and%20Spiritual%20Intelligences%20in%20enhancing%20Managerial%20Core%20Competencies%20of%20Corporate%20Executives%20in%20India.pdf",
        indexing: "Web of Science",
        indexingLink: "https://mjl.clarivate.com/",
        note: "ISSN: 0937-583X",
    },

    // UGC CARE OLD

    {
        number: "23",
        category: "UGC CARE (Old)",
        year: "2020",
        citation:
            "Krishna Kumar, TP. (2020). NRIF Ranking, NACC and NBA Accreditation of Higher Educational Institutions in India – A Comparative Exploration, Journal of Infokara Research, Vol. 9, No. 11, pp. 83–95.",
        link: "https://doi.org/10.5281/zenodo.7833053",
        indexing: "UGC CARE",
        indexingLink: "https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList",
    },
    {
        number: "24",
        category: "UGC CARE (Old)",
        year: "2021",
        citation:
            "Krishna Kumar, TP. (2021). Work-Life Balance Concept – A Demotivational Factor to Productivity, Dogo Rangsang Research Journal, Vol. 12, No. 5, pp. 12–18.",
        link: "https://zenodo.org/records/7826374",
        indexing: "UGC CARE",
        indexingLink: "https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList",
    },
    {
        number: "25",
        category: "UGC CARE (Old)",
        year: "2022",
        citation:
            "Krishna Kumar, TP. (2022). Study of Consumer Behavior Towards Online Advertisement with Special Reference to Demographic Factors, Journal ANVESAK, Vol. 52, No. 3, pp. 65–72.",
        link: "https://doi.org/10.5281/zenodo.7507500",
        indexing: "UGC CARE",
        indexingLink: "https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList",
    },
    {
        number: "26",
        category: "UGC CARE (Old)",
        year: "2024",
        citation:
            "Mankeshva Saini, Krishna Kumar, TP., Saravanan, K., Vinothalakshmi, J., Suman Roy Barman, Roop Raj. (2024). Heterogeneous Marketing Approaches in Social Media Marketing; An Examination of Customer Value, ShodhKosh: Journal of Visual and Performing Arts, Vol. 5, No. 6, pp. 922–929.",
        link: "https://www.granthaalayahpublication.org/Arts-Journal/ShodhKosh/article/view/1979",
        indexing: "UGC CARE",
        indexingLink: "https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList",
    },

    // PEER REVIEWED AND REFEREED

    {
        number: "27",
        category: "Peer Reviewed & Refereed",
        year: "2020",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Kurinjimalar Ramu. (2020). Understanding a Recent Trends in Block Chain Technology, Recent Trends in Management and Commerce, Vol. 1, No. 1, pp. 87–91.",
        link: "https://doi.org/10.46632/rmc/1/1/19",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "28",
        category: "Peer Reviewed & Refereed",
        year: "2020",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Sathiyaraj Chinnasamy. (2020). Investigation of Public Transportation System Using MOORA Method, REST Journal on Emerging Trends in Modelling and Manufacturing, Vol. 6, No. 4, pp. 124–129.",
        link: "https://doi.org/10.46632/jemm/6/4/7",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "29",
        category: "Peer Reviewed & Refereed",
        year: "2020",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Sathiyaraj Chinnasamy. (2020). Exploring Various Applications of Block Chain Technology, Recent Trends in Management and Commerce, Vol. 1, No. 1, pp. 92–96.",
        link: "https://doi.org/10.46632/rmc/1/1/20",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "30",
        category: "Peer Reviewed & Refereed",
        year: "2021",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Vidhya Prasanth. (2021). Analysis of E Store Business Using ARAS Method, Recent Trends in Management and Commerce, Vol. 2, No. 3, pp. 29–35.",
        link: "https://doi.org/10.46632/rmc/2/3/6",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "31",
        category: "Peer Reviewed & Refereed",
        year: "2021",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Vimala Saravanan. (2021). A Risk Assessment of Emergency Management Using (WASPAS) MCDM Method, Recent Trends in Management and Commerce, Vol. 2, No. 3, pp. 36–43.",
        link: "https://doi.org/10.46632/rmc/2/3/7",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "32",
        category: "Peer Reviewed & Refereed",
        year: "2021",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Vimala Saravanan. (2021). Candidate Selection for a Project Using Weight Sum Method, Data Analytics and Artificial Intelligence, Vol. 1, No. 1, pp. 53–59.",
        link: "https://doi.org/10.46632/daai/1/1/9",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "33",
        category: "Peer Reviewed & Refereed",
        year: "2021",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Chinnasami Sivaji. (2021). Supplier Selection Analysis Using Multi Criteria Decision Making VIKOR Method, Data Analytics and Artificial Intelligence, Vol. 1, No. 1, pp. 48–52.",
        link: "https://doi.org/10.46632/daai/1/1/8",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "34",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Sathiyaraj Chinnasamy and Malarvizhi Mani. (2022). Matrix Organization Analysis Using Grey Relational Analysis, REST Journal on Banking, Accounting and Business, Vol. 1, No. 1, pp. 64–71.",
        link: "https://doi.org/10.46632/jbab/1/1/10",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "35",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Ramachandran, M. and Kurinjimalar Ramu. (2022). Emergency Management Investigation Using COPRAS Method, Recent Trends in Management and Commerce, Vol. 2, No. 1, pp. 32–37.",
        link: "https://doi.org/10.46632/rmc/2/1/7",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "36",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Pallavi, DR., Ramachandran, M. and Chandrasekar Raja. (2022). Evaluation of Techno-economic Using Decision Making Trial and Evaluation Laboratory (DEMATEL) Method, Recent Trends in Management and Commerce, Vol. 3, No. 2, pp. 101–110.",
        link: "https://doi.org/10.46632/rmc/3/2/7",
        indexing: "Peer Reviewed & Refereed",
        note: "Book Chapter",
    },
    {
        number: "37",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Chandrasekar Raja and Ashwini Murugan. (2022). Understanding of E-Learning Programs Using WPM MCDM Method, REST Journal on Banking, Accounting and Business, Vol. 1, No. 2, pp. 13–19.",
        link: "https://doi.org/10.46632/jbab/1/2/3",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "38",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Vimala Saravanan, Ramachandran, M. and Manjula Selvam. (2022). A Market Segmentation Assessment Weighted Scoring for Using WSM Method: A Study for Different Market, REST Journal on Banking, Accounting and Business, Vol. 1, No. 3, pp. 1–8.",
        link: "https://doi.org/10.46632/jbab/1/3/1",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "39",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Kurinjimalar Ramu and Ashwini Murugan. (2022). Analysis of Reverse Logistics System Using COPRAS MCDM Method, REST Journal on Banking, Accounting and Business, Vol. 1, No. 4, pp. 31–37.",
        link: "https://doi.org/10.46632/jbab/1/4/5",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "40",
        category: "Peer Reviewed & Refereed",
        year: "2022",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Chinnasami Sivaji and Chandrasakar Raja. (2022). Financing Practices of Micro and Small Entrepreneurs Using WSM MCDM Method, REST Journal on Data Analytics and Artificial Intelligence, Vol. 1, No. 4, pp. 18–25.",
        link: "https://doi.org/10.46632/jdaai/1/4/3",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "41",
        category: "Peer Reviewed & Refereed",
        year: "2023",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Vidhya Prasanth, Chandrasekar Raja. (2023). Developing Business Services Using IBM SPSS Statistics, REST Journal on Banking, Accounting and Business, Vol. 2, No. 1, pp. 40–50.",
        link: "https://doi.org/10.46632/jbab/2/1/9",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "42",
        category: "Peer Reviewed & Refereed",
        year: "2023",
        citation:
            "Krishna Kumar, TP., Ramachandran, M., Kurinjimalar Ramu, Ashwini Murugan. (2023). Using this DEMATEL Corporate Social Responsibility CSR, REST Journal on Banking, Accounting and Business, Vol. 2, No. 1, pp. 51–59.",
        link: "https://doi.org/10.46632/jbab/2/1/10",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "43",
        category: "Peer Reviewed & Refereed",
        year: "2024",
        citation:
            "Swapna Datta Khan, Krishna Kumar, TP., Anjutha, S., Santhanalaxmi, K., Sasirekha, K., Srihari, T. (2024). Entrepreneurship, Innovation, and Technological Change: Catalysts of Economic Evolution; A Descriptive Study, Migration Letters, Vol. 21, No. S1, pp. 962–971.",
        link: "https://migrationletters.com/index.php/ml/issue/view/183",
        indexing: "Peer Reviewed & Refereed – Former Scopus Indexed",
    },
    {
        number: "44",
        category: "Peer Reviewed & Refereed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Krishnaprasad, A., Dhanya Nair. (2025). The Impact of Internet of Things (IoT) on Supply Chain Optimization: A Review of Existing Literature, The National Research Journal of Information Technology and Information Science, Vol. 12, Issue 1, pp. 5–13.",
        link: "https://doi.org/10.5281/zenodo.15349369",
        indexing: "Peer Reviewed & Refereed",
    },
    {
        number: "45",
        category: "Peer Reviewed & Refereed",
        year: "2025",
        citation:
            "Krishna Kumar, TP., Suriakala, R., Krishnaprasad, A., Dhanya Nair. (2025). Bridging Psychological Foundations: Transforming Indian Education Through NEP-2020 and NCF-2023, Academe Journal of Education & Psychology, Vol. 15, Issue 1, pp. 1–16.",
        link: "https://www.academejournal.in/Research-papers-issues?yid=26&vid=71",
        indexing: "Peer Reviewed & Refereed",
    },
];

/* -------------------------------------------------------
   PATENTS
------------------------------------------------------- */

const patents: Patent[] = [
    {
        title:
            "Modelling Customer Demand in E-Business Platform Through Improvised Techniques",
        date: "01 March 2023",
        number: "202341013781",
        status: "Indian Patent Published",
        link: "https://doi.org/10.5281/zenodo.7833441",
    },
    {
        title: "Transgender People and Healthcare Barriers",
        date: "16 March 2023",
        number: "202321017750",
        link: "https://doi.org/10.5281/zenodo.7833451",
    },
    {
        title:
            "A Secured and Efficient IoT-Based Logistic and Inventory Management System Using RFID and Cloud Computing",
        date: "05 April 2023",
        number: "202341025614",
        status: "Indian Patent Published",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
    },
    {
        title: "E-Recruitment and Its Impact on Job Seekers",
        date: "22 March 2023",
        number: "202321020164",
    },
    {
        title:
            "AI-Driven Consumer Behavior Prediction Engine for Adaptive Digital Marketing Campaigns",
        date: "24 September 2025",
        number: "202541091373",
    },
    {
        title: "Intelligent Biometric Attendance Recorder",
        date: "01 September 2023",
        number: "UK Design Number: 6306984",
        status: "UK Granted Design – Document Available",
    },
    {
        title: "AI Based Device for Digital Marketing",
        date: "29 October 2024",
        number: "Design No. 436025-001",
        status: "Indian Patent Granted",
        link: "https://search.ipindia.gov.in/DesignApplicationStatus",
    },
];

/* -------------------------------------------------------
   BOOKS
------------------------------------------------------- */

const books: Book[] = [
    {
        title: "Digital Marketing Strategy and Analysis",
        isbn: "978-93-5515-129-2",
    },
    {
        title: "Elements of Organisational Behaviour",
        isbn: "978-81-966345-2-0",
    },
    {
        title: "Rudiments of Communication Skills",
        isbn: "978-93-5515-932-8",
    },
    {
        title: "Social Entrepreneurship",
        year: "2024",
        publisher: "Rest Publishers",
        isbn: "978-81-984044-3-5",
    },
    {
        title: "Marketing Management 4.0: Unleashing Success in Digital Age",
        year: "2025",
        publisher: "National Press Associates",
        isbn: "978-81-989671-6-9",
    },
    {
        title: "Managing Human Capital: A Strategic Approach",
        year: "2025",
        publisher: "National Press Associates",
        isbn: "978-93-7343-129-1",
    },
    {
        title: "Strategic Management and Analytics",
        year: "2025",
        publisher: "Rest Publishers",
        isbn: "978-81-989982-1-7",
    },
];

/* -------------------------------------------------------
   AWARDS
------------------------------------------------------- */

const achievements: Achievement[] = [
    {
        title: "Best Innovative Teacher Award",
        award: "International Education Award – Gurgaon",
        year: "2022",
        awardedBy:
            "Kiteskraft Productions, Ludhiana, Punjab",
    },
    {
        title: "Champion of Academic Excellence Award",
        award: "Academic Excellence Recognition",
        year: "2023",
        awardedBy: "Business Insights – The Ultimate Business Magazine",
    },
    {
        title:
            "Certificate of World Record for Highest Research Citation Within a Short Time",
        award: "World Record Recognition",
        year: "2025",
        awardedBy: "UN Book of World Record",
    },
    {
        title: "Innovative Academician Award",
        award: "Academic Innovation Recognition",
        year: "2025",
        awardedBy:
            "Star International Foundation for Research and Education (SIFRE)",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "books", label: "Books" },
    { id: "achievements", label: "Achievements" },
    { id: "researcher-profiles", label: "Researcher Profiles" },
];

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-[0.18em] text-[#927B4D]">
                    {number}
                </span>

                <span className="h-px w-8 bg-[#D2B87C]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#927B4D]">
                    {eyebrow}
                </span>
            </div>

            <h2 className="font-serif text-2xl font-normal leading-tight text-[#20235A] sm:text-3xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#69666B]">
                    {description}
                </p>
            )}

            <div className="mt-5 h-[2px] w-12 bg-[#D2B87C]" />
        </div>
    );
}

function DetailItem({ label, value }: DetailItemProps) {
    return (
        <div className="border-b border-[#EAE4D9] py-4 last:border-b-0">
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                {label}
            </p>

            <p className="mt-2 break-words text-sm leading-6 text-[#393947]">
                {value}
            </p>
        </div>
    );
}

function DataTable({
    headers,
    rows,
}: {
    headers: string[];
    rows: Course[];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#20235A]">
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-4 text-[9px] font-medium uppercase tracking-[0.13em] text-[#E5D4A9]"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={row[0]}
                                className={
                                    "border-b border-[#EEE9E0] last:border-b-0 " +
                                    (rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF8F4]")
                                }
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={
                                            "px-4 py-4 text-xs leading-6 text-[#55535B] " +
                                            (cellIndex === 0
                                                ? "text-[#927B4D]"
                                                : "")
                                        }
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* -------------------------------------------------------
   PUBLICATION LIST
------------------------------------------------------- */

function PublicationList({
    items,
}: {
    items: Publication[];
}) {
    const categories = [
        "Scopus Indexed",
        "ABDC Indexed",
        "Web of Science",
        "UGC CARE (Old)",
        "Peer Reviewed & Refereed",
    ];

    return (
        <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
                const categoryItems = items.filter(
                    (item) => item.category === category
                );

                if (categoryItems.length === 0) return null;

                return (
                    <div key={category}>
                        <div className="mb-5 flex flex-wrap items-center gap-4">
                            <h3 className="font-serif text-xl font-normal text-[#20235A] sm:text-2xl">
                                {category}
                            </h3>

                            <span className="h-px min-w-8 flex-1 bg-[#D2B87C]" />

                            <span className="text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                {categoryItems.length} Publications
                            </span>
                        </div>

                        <div className="border border-[#E6DFD3] bg-white">
                            {categoryItems.map((publication, index) => (
                                <article
                                    key={publication.number}
                                    className={
                                        "grid gap-4 p-5 sm:grid-cols-[42px_1fr] sm:gap-5 sm:p-6 " +
                                        (index !== categoryItems.length - 1
                                            ? "border-b border-[#EEE9E0]"
                                            : "")
                                    }
                                >
                                    <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                        <FileText
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="mb-3 flex flex-wrap items-center gap-3">
                                            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                                Publication {publication.number}
                                            </span>

                                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />

                                            <span className="text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                                {publication.year}
                                            </span>

                                            {publication.note && (
                                                <span className="border border-[#E6DFD3] px-2 py-1 text-[8px] uppercase tracking-[0.12em] text-[#77747A]">
                                                    {publication.note}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm leading-7 text-[#55535B]">
                                            {publication.citation}
                                        </p>

                                        {publication.note === "Book Chapter" && (
                                            <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-[#927B4D]">
                                                Book Chapter
                                            </p>
                                        )}

                                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                                            {publication.link && (
                                                <a
                                                    href={publication.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                                >
                                                    View Article
                                                    <ExternalLink size={12} />
                                                </a>
                                            )}

                                            {publication.indexing && (
                                                <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-[#77747A]">
                                                    <ShieldCheck
                                                        size={13}
                                                        className="text-[#927B4D]"
                                                    />
                                                    {publication.indexing}
                                                </span>
                                            )}

                                            {publication.indexingLink && (
                                                <a
                                                    href={publication.indexingLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                                >
                                                    Indexing Details
                                                    <ExternalLink size={12} />
                                                </a>
                                            )}
                                        </div>

                                        {publication.note &&
                                            publication.note !== "Book Chapter" && (
                                                <p className="mt-2 text-[10px] text-[#77747A]">
                                                    {publication.note}
                                                </p>
                                            )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* -------------------------------------------------------
   BOOKS LIST
------------------------------------------------------- */

function BooksList({ items }: { items: Book[] }) {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {items.map((book, index) => (
                <article
                    key={book.title}
                    className="border border-[#E6DFD3] bg-white p-6 sm:p-8"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                            <BookMarked size={20} strokeWidth={1.5} />
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                            Book {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    {book.year && (
                        <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                            {book.year}
                        </p>
                    )}

                    <h3 className="mt-4 font-serif text-xl font-normal leading-snug text-[#20235A] sm:text-2xl">
                        {book.title}
                    </h3>

                    <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                        {book.publisher && (
                            <DetailItem
                                label="Publisher"
                                value={book.publisher}
                            />
                        )}

                        <DetailItem
                            label="ISBN"
                            value={book.isbn}
                        />

                        <DetailItem
                            label="Availability"
                            value="Copy Available in College Library"
                        />
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   PATENTS LIST
------------------------------------------------------- */

function PatentsList({ items }: { items: Patent[] }) {
    return (
        <div className="border border-[#E6DFD3] bg-white">
            {items.map((patent, index) => (
                <article
                    key={patent.number}
                    className={
                        "grid gap-4 p-5 sm:grid-cols-[42px_1fr] sm:gap-5 sm:p-6 " +
                        (index !== items.length - 1
                            ? "border-b border-[#EEE9E0]"
                            : "")
                    }
                >
                    <div className="flex h-9 w-9 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                        <ScrollText size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D]">
                                Patent {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />

                            <span className="text-[9px] uppercase tracking-[0.13em] text-[#77747A]">
                                {patent.date}
                            </span>
                        </div>

                        <h3 className="font-serif text-lg font-normal leading-snug text-[#20235A] sm:text-xl">
                            {patent.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                            <p className="text-[10px] text-[#55535B]">
                                <span className="uppercase tracking-[0.12em] text-[#927B4D]">
                                    Patent / Design No.:
                                </span>{" "}
                                {patent.number}
                            </p>

                            {patent.status && (
                                <p className="text-[10px] text-[#55535B]">
                                    <span className="uppercase tracking-[0.12em] text-[#927B4D]">
                                        Status:
                                    </span>{" "}
                                    {patent.status}
                                </p>
                            )}
                        </div>

                        {patent.link && (
                            <a
                                href={patent.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                            >
                                View Patent Details
                                <ExternalLink size={12} />
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   ACHIEVEMENTS LIST
------------------------------------------------------- */

function AchievementsList({
    items,
}: {
    items: Achievement[];
}) {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {items.map((achievement, index) => (
                <article
                    key={achievement.title}
                    className="border border-[#E6DFD3] bg-white p-6 sm:p-8"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                            <Trophy size={20} strokeWidth={1.5} />
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#927B4D]">
                            Award {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                        {achievement.year}
                    </p>

                    <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-[#20235A] sm:text-2xl">
                        {achievement.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#55535B]">
                        {achievement.award}
                    </p>

                    <div className="mt-6 border-t border-[#EAE4D9] pt-4">
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                            Awarded By
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#55535B]">
                            {achievement.awardedBy}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}

/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export default function KrishnaKumarTPFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* PROFILE HERO */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />

                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />

                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                                Nehru School of Management
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Prof. Dr. Krishna Kumar TP
                            </h1>

                            <p className="mt-4 font-serif text-xl italic text-[#D2B87C] sm:text-2xl">
                                Professor &amp; Head of Department
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {qualifications.map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                    NCERC Unique ID: 3887
                                </span>
                            </div>
                        </div>

                        {/* ACADEMIC PROFILE PANEL */}
                        <div className="border border-[#D2B87C]/35 bg-white/[0.04] p-6 backdrop-blur-sm">
                            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                Academic Profile
                            </p>

                            <div className="mt-5 space-y-5">
                                <div className="flex items-center gap-3">
                                    <GraduationCap
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Qualifications
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            PhD, MBA – Marketing and HR, PGDIAM, PGDHM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Research Focus
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Marketing, HR and Analytics
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Briefcase
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Experience
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            22+ Years of Teaching Experience
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <BookOpen
                                        size={19}
                                        className="shrink-0 text-[#D2B87C]"
                                        strokeWidth={1.5}
                                    />

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.13em] text-white/45">
                                            Department
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Master of Business Administration
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#about"
                                className="mt-7 flex items-center justify-between border-t border-white/15 pt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                Explore Profile
                                <ArrowDown size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D2B87C]" />
            </section>

            <main className="bg-white [&_p]:text-justify">
                <DepartmentNavigation />

                {/* PROFILE NAVIGATION */}
                <div className="border-b border-[#EAE4D9] bg-white">
                    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                        {profileSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="shrink-0 text-[9px] font-medium uppercase tracking-[0.13em] text-[#77747A] transition-colors hover:text-[#927B4D]"
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Prof. Dr. Krishna Kumar TP"
                                description="Academic background, professional experience and scholarly contributions."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Prof. Dr. Krishna Kumar TP is a Professor and Head of the MBA Department at Nehru School of Management, Thrissur, with over 22 years of teaching experience and significant industry and research exposure. He specializes in Marketing and Human Resource Management and holds a Ph.D. from Madurai Kamaraj University.
                                </p>

                                <p>
                                    He has published over 45 research articles in reputed journals and received several awards for academic excellence and innovative teaching. Known for his participative and technology-driven teaching methods, he also plays key roles in academic administration, research, consultancy, and accreditation activities.

                                </p>
                            </div>
                        </div>

                        <aside className="h-fit border border-[#E4DCCE] bg-white p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <UserRound size={19} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Professional Details
                                    </p>

                                    <p className="text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                                        Faculty Information
                                    </p>
                                </div>
                            </div>

                            <DetailItem
                                label="Designation"
                                value="Professor & Head of Department"
                            />

                            <DetailItem
                                label="Institution"
                                value="Nehru School of Management, NCERC"
                            />
                            {/* 
                            <DetailItem
                                label="Qualifications"
                                value="PhD, MBA (Marketing and HR), PGDIAM, PGDHM"
                            /> */}

                            {/* <DetailItem
                                label="Experience"
                                value="22+ Years of Teaching Experience"
                            /> */}

                            <DetailItem
                                label="Area of Interest"
                                value="Marketing, HR and Analytics"
                            />

                            <DetailItem
                                label="NCERC Unique ID"
                                value="3887"
                            />
                        </aside>
                    </div>
                </section>

                {/* RESEARCH SECTION */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research Interests"
                            description="Research focus across digital technology adoption, banking and financial services, marketing, and organisational studies."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="border-l-2 border-[#D2B87C] pl-6">
                                <div className="flex items-center gap-3">
                                    <Microscope
                                        size={19}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Specialisation
                                    </p>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                    Digital Technology, Marketing and Financial Services
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-[#55535B]">
                                    Prof. Dr. Krishna Kumar TP&apos;s research interests primarily focus on digital technology adoption in banking and financial services, with special emphasis on consumer behaviour, financial literacy, and digital inclusion
                                </p>

                                <p className="mt-4 text-sm leading-8 text-[#55535B]">
                                    In addition, he has a keen interest in marketing analytics, customer relationship management, service quality, and customer satisfaction in the banking sector. His research further extends to human resource management, organizational behaviour, and innovative teaching and learning practices.

                                </p>

                                <div className="mt-7">
                                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Research Interests
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {researchInterests.map((item) => (
                                            <span
                                                key={item}
                                                className="border border-[#E6DFD3] bg-[#FAF7F2] px-3 py-2 text-xs text-[#55535B]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <Lightbulb
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />

                                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        Areas of Interest
                                    </p>
                                </div>

                                <div className="mt-6 space-y-0">
                                    {areasOfInterest.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 border-b border-[#E6DFD3] py-4 last:border-b-0"
                                        >
                                            <span className="pt-0.5 text-[10px] tracking-wider text-[#927B4D]">
                                                0{index + 1}
                                            </span>

                                            <p className="text-sm leading-6 text-[#55535B]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* KEYWORDS */}
                        <div className="mt-10 border-t border-[#EAE4D9] pt-7">
                            <div className="mb-4 flex items-center gap-3">
                                <Network
                                    size={17}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />

                                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                    Research Keywords
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-x-7 gap-y-3">
                                {keywords.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 bg-[#D2B87C]" />

                                        <span className="text-sm text-[#55535B]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* COURSES SECTION */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Contributions"
                            title="Courses Handled"
                            description="Courses handled across different academic batches of the MBA programme."
                        />

                        <DataTable
                            headers={[
                                "Sl. No.",
                                "Academic Year",
                                "Stream",
                                "Semester",
                                "Subject",
                            ]}
                            rows={courses}
                        />
                    </div>
                </section>

                {/* PUBLICATIONS SECTION */}
                <section
                    id="publications"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="04"
                            eyebrow="Research Contributions"
                            title="Publications"
                            description="Research articles, journal publications and scholarly book chapters with their respective article links and indexing details."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    45
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Listed Publications
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2020–25
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Publication Period
                                </p>
                            </div>
                        </div>

                        <PublicationList items={publications} />
                    </div>
                </section>

                {/* PATENTS SECTION */}
                <section
                    id="patents"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="05"
                            eyebrow="Innovation and Intellectual Property"
                            title="Patents"
                            description="Published patents, design registrations and intellectual property contributions."
                        />

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:max-w-md">
                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    07
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Patent Entries
                                </p>
                            </div>

                            <div className="border border-[#E6DFD3] bg-white p-5">
                                <p className="font-serif text-3xl font-normal text-[#20235A]">
                                    2023–25
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#927B4D]">
                                    Patent Period
                                </p>
                            </div>
                        </div>

                        <PatentsList items={patents} />
                    </div>
                </section>

                {/* BOOKS SECTION */}
                <section
                    id="books"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="06"
                            eyebrow="Scholarly Contributions"
                            title="Books Published"
                            description="Books authored and published as part of academic and scholarly contributions."
                        />

                        <BooksList items={books} />
                    </div>
                </section>

                {/* ACHIEVEMENTS SECTION */}
                <section
                    id="achievements"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="07"
                            eyebrow="Recognition and Distinction"
                            title="Awards & Other Achievements"
                            description="Awards and recognitions received for academic excellence, innovative teaching and research contributions."
                        />

                        <AchievementsList items={achievements} />

                        {/* COPYRIGHT DETAILS */}
                        <div className="mt-10 border border-[#E6DFD3] bg-white p-6 sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F0E6] text-[#927B4D]">
                                    <ShieldCheck size={20} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                        Intellectual Property
                                    </p>

                                    <h3 className="mt-2 font-serif text-xl font-normal text-[#20235A]">
                                        Canadian Copyright (CCR)
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#55535B]">
                                        CCR Number: 1219093
                                    </p>

                                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#927B4D]">
                                        Document Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESEARCHER PROFILES */}
                <section
                    id="researcher-profiles"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="08"
                            eyebrow="Academic Identity"
                            title="Researcher Profiles"
                            description="Research identifiers, academic profiles and citation metrics associated with Prof. Dr. Krishna Kumar TP."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {/* RESEARCH GATE */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <Award
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            ResearchGate Profile
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            Krishna TP
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://www.researchgate.net/profile/Krishna-Tp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 border border-[#D2B87C] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:bg-[#20235A] hover:text-white"
                                >
                                    View ResearchGate
                                    <ExternalLink size={13} />
                                </a>
                            </div>

                            {/* NCERC ID */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#927B4D]">
                                        <BarChart3
                                            size={19}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            NCERC Unique ID
                                        </p>

                                        <p className="mt-1 text-sm text-[#393947]">
                                            3887
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* GOOGLE SCHOLAR */}
                            <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-7 md:col-span-2">
                                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#927B4D]">
                                            <BookOpen
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                                Google Scholar Profile
                                            </p>

                                            <p className="mt-1 text-sm text-[#393947]">
                                                Academic Research Profile
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://scholar.google.com/citations?user=7pnADocAAAAJ&hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-[#D2B87C] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:bg-[#20235A] hover:text-white"
                                    >
                                        View Google Scholar
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* AWPI CITATION METRICS */}
                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-px w-8 bg-[#D2B87C]" />

                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                    AWPI Citation Metrics
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                    <p className="font-serif text-4xl font-normal text-[#20235A]">
                                        724
                                    </p>

                                    <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#927B4D]">
                                        Total Citations
                                    </p>
                                </div>

                                <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                    <p className="font-serif text-4xl font-normal text-[#20235A]">
                                        20
                                    </p>

                                    <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#927B4D]">
                                        H Index
                                    </p>
                                </div>

                                <div className="border border-[#E6DFD3] bg-[#FAF7F2] p-6 sm:p-8">
                                    <p className="font-serif text-4xl font-normal text-[#20235A]">
                                        20
                                    </p>

                                    <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#927B4D]">
                                        I10 Score
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

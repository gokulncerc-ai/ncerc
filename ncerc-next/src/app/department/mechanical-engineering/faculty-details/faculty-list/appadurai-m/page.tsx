
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
    BookMarked,
    Presentation,
    IdCard,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

const primaryResearchInterests = [
    "Engineering Design",
    "Additive Manufacturing",
    "Finite Element Analysis",
    "Computational Fluid Dynamics",
];

const researchInterests = [
    "Mechanics of Fluids",
    "Fluid Machinery",
    "Mechanics of Solids",
    "Quality Engineering",
    "Composite Materials",
    "Advanced Manufacturing",
];

const courses = [
    ["1", "Additive Manufacturing"],
    ["2", "Engineering Graphics"],
    ["3", "Mechanics of Fluids"],
    ["4", "Engineering Mechanics"],
    ["5", "Composite Materials"],
    ["6", "Operations Management"],
    ["7", "Kinematics of Machinery"],
    ["8", "Thermal Engineering Lab – II"],
    ["9", "Quality Engineering"],
];

const researcherProfiles = [
    {
        label: "Google Scholar",
        url: "https://scholar.google.co.in/citations?user=nmrZkr4AAAAJ&hl=en&oi=ao",
        display: "View Google Scholar Profile",
    },
    {
        label: "Scopus",
        url: "https://www.scopus.com/authid/detail.uri?authorId=56991178800",
        display: "Scopus Author Profile",
    },
    {
        label: "Web of Science Researcher Profile",
        url: "https://sciprofiles.com/profile/2954128",
        display: "View Researcher Profile",
    },
    {
        label: "ORCID",
        url: "https://orcid.org/0000-0002-7623-1636",
        display: "0000-0002-7623-1636",
    },
    {
        label: "Vidwan",
        url: "https://vidwan.inflibnet.ac.in/profile/407550",
        display: "View Vidwan Profile",
    },
];

const journalPublications = [
    {
        year: "2025",
        title:
            "Karthika, M., Balaji, M., Fantin Irudaya Raj, E., & Appadurai, M. (2025). Detailed Investigation on Effect of Laminating Materials in Electromagnetic and Vibration Characteristics of 8/10 E-core Hybrid Excitation Reluctance Motor for Electromotive Application. Journal of Vibration Engineering & Technologies, 13(1), 1-18.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2025",
        title:
            "Jenish, I., Arockiasamy, F. S., Appadurai, M., & Raj, E. F. I. (2025). Tribological property enhancement of polymeric composites using bio-fillers. In Sustainable Fillers/Plasticizers for Polymer Composites (pp. 437-460). Elsevier Science Ltd.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2024",
        title:
            "Francy Irudaya Rani, E., Lurthu Pushparaj, T., Fantin Irudaya Raj, E., & Appadurai, M. (2024). A novel boosted ada-boost classifier for MRI-based brain tumour detection. Multimedia Tools and Applications, 1-22.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2024",
        title:
            "Maripandi, K., Mahadevan, B., Sehar, F. I. R. E., & Mangalaraj, A. (2024). Thermal investigation of 12/10 switched reluctance motor adopting different casing fins and materials for e-vehicle application. Matéria (Rio de Janeiro), 29(3), e20240244.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2024",
        title:
            "Gnaniah, A. M., Sehar, F. I. R. E., Mangalaraj, A., & Mahadevan, B. (2024). Thermal analysis of modified segmented switched reluctance motor with aluminium metal matrix composite fins used in cooling fan applications. Matéria (Rio de Janeiro), 29(2), e20240075.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2024",
        title:
            "Augustine, M., Raj, E. F. I., Appadurai, M., & Balaji, M. (2024). Impact of silicon steel laminating materials in modified segmented rotor switched reluctance motor: electromagnetic and vibrational analysis. Journal of Vibration Engineering & Technologies, 12(3), 3931-3946.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Chithambara Thanu, M., Appadurai, M., Fantin Irudaya Raj, E., & Lurthu Pushparaj, T. (2023). Experimental analysis of localized hybridization by means of adding woven polyester strip. International Polymer Processing, 38(4), 505-517.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Appadurai, M., Fantin Irudaya Raj, E., & Chithambara Thanu, M. (2023). Application of Nanofluids in Heat Exchanger and its Computational Fluid Dynamics. Mathematics and Computer Science Volume 1, 505-524.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Appadurai, M., Raj, E. F. I., Ram, V., Gnaniah, A. M., Salkuti, S. R., & Kim, S. C. (2023). Investigation of solar air collectors with carbon-nanotube-based turbulators and pin fin arrangements. Journal of Composites Science, 7(8), 322.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Lurthu Pushparaj, T., Fantin Irudaya Raj, E., Francy Irudaya Rani, E., & Appadurai, M. (2023). Biosynthesis of a tri-metallic nanoalloy for magnetic and biomedical applications. Applied Organometallic Chemistry, 37(10), e7178.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Raj, E. F. I., Appadurai, M., Ram, V., Gnaniah, A. M., & Salkuti, S. R. (2023). Natural-Fibre-Reinforced Composite-Based Micro-Size Wind Turbines: Numerical Analysis and Feasibility Study. Journal of Composites Science, 7(5), 197.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Infantraj, A., Augustine, M., Raj, E. F. I., & Appadurai, M. (2023). Investigation of Various Laminating Materials for Interior Permanent Magnet Brushless DC Motor for Cooling Fan Application. CES Transactions on Electrical Machines and Systems, 7(4), 422-429.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Pushparaj, T. L., Raj, E. F. I., Rani, E. F. I., & Appadurai, M. (2023). Synthesis of biogenic cerium oxide-supported osmium oxide nanoalloy from Oldenlandia umbellata L. plant extract for pharmacological applications. Biomass Conversion and Biorefinery, 1-15.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Thanu, C., Raj, F. I., Appadurai, & Pushparaj, L. (2023). Mechanical strength enhancement of natural fibre composites via localized hybridization with stitch reinforcement. International Polymer Processing, 38(5), 539-550.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Raj, F. I., Appadurai, Pushparaj, L., & Thanu, C. (2023). Mechanical characterization of randomly oriented short Sansevieria Trifasciata natural fibre composites. International Polymer Processing, 38(5), 564-581.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Appadurai, M., Irudaya Raj, E. F., Thanu, M. C., & Pushparaj, T. L. (2023). Finite element analysis and computational fluid dynamic study of hybrid composite-based offshore wind turbines. Materialwissenschaft und Werkstofftechnik, 54(11), 1362-1377.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Iyyadurai, J., Arockiasamy, F. S., Manickam, T. S., Suyambulingam, I., Siengchin, S., Appadurai, M., & Raj, E. F. I. (2023). Revolutionizing polymer composites: boosting mechanical strength, thermal stability, water resistance, and sound absorption of cissus quadrangularis stem fibers with nano silica. Silicon, 15(15), 6407-6419.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2023",
        title:
            "Fantin Irudaya Raj, E., Appadurai, M., Lurthu Pushparaj, T., & Chithambara Thanu, M. (2023). Wind turbines with aramid fiber composite wind blades for smart cities like urban environments: Numerical simulation study. MRS Energy & Sustainability, 1-18.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Raj, E. F. I., Appadurai, M., Darwin, S., & Thanu, M. C. (2022). Detailed study of efficient water jacket cooling system for induction motor drive used in electric vehicle. International Journal on Interactive Design and Manufacturing (IJIDeM), 1-12.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Pushparaj, T. L., Raj, E., Rani, E., Darwin, S., & Appadurai, M. (2022). Employing Novel Si-Over-Si Technology to Optimize PV Effect in Solar Array. Silicon, 1-13.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Jenish, I., Sahayaraj, A. F., Appadurai, M., Irudaya Raj, E. F., & Suresh, P. (2022). Sea Sand Abrasive Wear of Red Mud Micro Particle Reinforced Cissus quadrangularis Stem fiber/epoxy Composite. Journal of Natural Fibers, 1-16.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Appadurai, M., Fantin Irudaya Raj, E., & LurthuPushparaj, T. (2022). Sisal fiber-reinforced polymer composite-based small horizontal axis wind turbine suited for urban applications—a numerical study. Emergent Materials, 5(2), 565-578.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Appadurai, M., Raj, E., & Jenish, I. (2022). Application of aluminium oxide–water nanofluids to augment the performance of shallow pond: a numerical study. Process Integration and Optimization for Sustainability, 6(1), 211-222.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Appadurai, M., & Raj, E. (2022). Epoxy/silicon carbide (sic) nanocomposites based small scale wind turbines for urban applications. International Journal of Energy and Environmental Engineering, 13(1), 191-206.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Raj, E., Appadurai, M., Rani, E., & Jenish, I. (2022). Finite-element design and analysis of switched reluctance motor for automobile applications. Multiscale and Multidisciplinary Modeling, Experiments and Design, 1-9.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Jenish, I., Sahayaraj, A. F., Suresh, V., Appadurai, M., Irudaya Raj, E. F., Nasif, O., ... & Kumaravel, A. K. (2022). Analysis of the hybrid of mudar/snake grass fiber-reinforced epoxy with nano-silica filler composite for structural application. Advances in Materials Science and Engineering, 2022.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2022",
        title:
            "Rani, E. F. I., & Appadurai, M. (2022). Numerical Analysis of Seismic Bearing in Bridge Using Hyper-Elastic Material to Reduce Vibrational Impacts. Francis Xavier Journal of Science Engineering and Management, 2(1), 14-18.",
        indexing: "Not specified",
    },
    {
        year: "2021",
        title:
            "Jenish, I., Felix Sahayaraj, A., Appadurai, M., Fantin Irudaya Raj, E., Suresh, P., Raja, T., ... & Manikandan, V. (2021). Fabrication and experimental analysis of treated snake grass fiber reinforced with polyester composite. Advances in Materials Science and Engineering, 2021.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2021",
        title:
            "Jenish, I., Appadurai, M., & Raj, E. F. I. (2021). CFD Analysis of modified rushton turbine impeller. Int. J. Sci. Manag. Stud. (IJSMS), 4, 8-13.",
        indexing: "Not specified",
    },
    {
        year: "2018",
        title:
            "Appadurai, M., & Velmurugan, V. (2018). Performance analysis of modified solar still with forced water circulation. Thermal Science, 22(6B), 2955.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2017",
        title:
            "Appadurai, M., & Velmurugan, V. (2017). Experimental analysis of stepped basin pyramid solar still integrated with mini solar pond. Desalination and Water Treatment, 84, 1-7.",
        indexing: "Scopus, SCI",
    },
    {
        year: "2015",
        title:
            "Appadurai, M., Prasath, A. B., Thanu, M. C., & Richard, S. (2015). Determination of dual phase forced convective heat transfer of nano fluids by means of CFD. Int. J. Appl. Eng. Res, 10(12), 32627-32635.",
        indexing: "Not specified",
    },
    {
        year: "2015",
        title:
            "Appadurai, M., Prasath, A. B., Jedidiah, S. S., & Lawrence, I. D. (2015). Experimental Analysis of Parabolic Disc Type Solar Still. Int. J. Appl. Eng. Res, 10(51), 688-690.",
        indexing: "Not specified",
    },
    {
        year: "2015",
        title:
            "Appadurai, M., & Velmurugan, V. (2015). Performance analysis of fin type solar still integrated with fin type mini solar pond. Sustainable Energy Technologies and Assessments, 9, 30-36.",
        indexing: "Scopus, SCI",
    },
];

const bookChapters = [
    {
        year: "2025",
        title:
            "Appadurai, M., Raj, E. F. I., & Rani, E. F. I. (2025). Application of Self-powered Sensors and Actuators in Engineering and Medical Domains. In Self-Powered AIoT Systems (pp. 27-62). Apple Academic Press.",
        indexing: "Not specified",
    },
    {
        year: "2024",
        title:
            "Raj, E. F. I., Appadurai, M., Thiyaharajan, D., & Pushparaj, T. L. (2024). State-Of-The-Art Technologies for Crop Health Monitoring in the Modern Precision Agriculture. In Precision Agriculture for Sustainability (pp. 21-39). Apple Academic Press.",
        indexing: "Scopus",
    },
    {
        year: "2024",
        title:
            "Raj, E. F. I., Appadurai, M., Jebakumar, V. W., & Thanu, M. C. (2024). Agricultural Logistics Enhancement Using Unmanned Aerial Vehicles. In Drone Applications for Industry 5.0 (pp. 419-440). IGI Global.",
        indexing: "Scopus",
    },
    {
        year: "2024",
        title:
            "Raj, E. F. I., Thanu, M. C., Darwin, S., & Appadurai, M. (2024). Induction Motor Condition Monitoring Using Hybrid AI and IoT System. In Advanced Technologies for Science and Engineering (pp. 48-64). Bentham Science Publishers.",
        indexing: "Scopus",
    },
    {
        year: "2023",
        title:
            "Fantin Irudaya Raj, E., Appadurai, M., Chithamabara Thanu, M., & Francy Irudaya Rani, E. (2023). IoT-Based Smart Parking System for Indian Smart Cities. Machine Intelligence, Big Data Analytics, and IoT in Image Processing: Practical Applications, 369-398.",
        indexing: "Scopus",
    },
    {
        year: "2023",
        title:
            "Fantin Irudaya Raj, E., Appadurai, M. (2023). Smart Water Management System Powered by the Internet of Things (IoT) for Real-World Applications. In Internet of Things (pp. 129-142). Chapman and Hall/CRC.",
        indexing: "Scopus",
    },
    {
        year: "2023",
        title:
            "Darwin, S., Raj, E. F. I., Appadurai, M., & Thanu, M. C. (2023). A Detailed Study on Single Electron Transistors in Nano Device Technologies. In Energy Systems Design for Low-Power Computing (pp. 67-99). IGI Global.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Raj, E. F. I., Manimala, K., & Appadurai, M. Differential Protection Scheme along with Backup Blockchain System. In Smart and Power Grid Systems–Design Challenges and Paradigms (pp. 135-156). River Publishers.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Appadurai, M., Raj, E. F. I., & LurthuPushparaj, T. (2022). Wind Energy Harvesting Using Natural Fiber-Based Wind Turbine. In Encyclopedia of Green Materials (pp. 1-10). Singapore: Springer Nature Singapore.",
        indexing: "Not specified",
    },
    {
        year: "2022",
        title:
            "Pushparaj, T. L., Rani, E. F. I., Raj, E. F. I., & Appadurai, M. (2022). Machine-based drug design to inhibit SARS-CoV-2 virus.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Fantin Irudaya Raj, E., & Appadurai, M. (2022). Internet of Things-Based Smart Transportation System for Smart Cities. In Intelligent Systems for Social Good (pp. 39-50). Springer, Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Rani, E. F. I., Pushparaj, T. L., Raj, E. F. I., & Appadurai, M. (2022). New Approaches in Machine-based Image Analysis for Medical Oncology. In Machine Learning and Deep Learning Techniques for Medical Science (pp. 333-359). CRC Press.",
        indexing: "Scopus",
    },
    {
        year: "2021",
        title:
            "Raj, E. F. I., Appadurai, M., Darwin, S., & Rani, E. F. I. (2022). Internet of Things (IoT) for Sustainable Smart Cities. In Internet of Things (pp. 163-188). CRC Press.",
        indexing: "Scopus",
    },
    {
        year: "2021",
        title:
            "Raj, E. F. I., Thiyaharajan, D., Appadurai, M., & Rani, E. F. I. (2021). RECENT EMERGENCE OF BIG DATA ANALYTICS AND TECHNOLOGIES. RECENT TRENDS IN SCIENCE, 56.",
        indexing: "Not specified",
    },
    {
        year: "2021",
        title:
            "Fantin Irudaya Raj, E., & Appadurai, M. (2021). The hybrid electric vehicle (HEV)—an overview. Emerging Solutions for e-Mobility and Smart Grids, 25-36.",
        indexing: "Not specified",
    },
    {
        year: "2021",
        title:
            "Raj, E., Appadurai, M., & Athiappan, K. (2021). Precision Farming in Modern Agriculture. In Smart Agriculture Automation Using Advanced Technologies (pp. 61-87). Springer, Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2021",
        title:
            "Fantin Irudaya Raj, E., & Appadurai, M. (2021). Minimization of torque ripples and incremental of power factor in switched reluctance motor drive. In Recent Trends in Communication and Intelligent Systems (pp. 125-133). Springer, Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2020",
        title:
            "Fantin Irudaya Raj, E., & Appadurai, M. (2020). Impact of Covid-19: A Challenges in Online Engineering Education. In Economic, Social, Psychological, Political, Educational and Literary Impact of Covid-19 & All Multi Disciplinary Subjects for Research (pp. 12-23). ISBN: 978-93-89840-55-1.",
        indexing: "Not specified",
    },
];

const conferenceProceedings = [
    {
        year: "2020",
        title:
            "Appadurai, M., Fantin Irudaya Raj, E., Darwin, S., & Jenish, I. (2020). Finite Element Analysis of Silicon Heat Sink with CNT Nanofluids for Microelectronics Applications. In International Conference on Future technologies in Manufacturing, Automation, Design and Energy (pp. 489-497). Singapore: Springer Nature Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2021",
        title:
            "Appadurai, M., Raj, E. F. I., & Venkadeshwaran, K. (2021). Finite element design and thermal analysis of an induction motor used for a hydraulic pumping system. Materials Today: Proceedings, 45, 7100-7106.",
        indexing: "Scopus",
    },
    {
        year: "2021",
        title:
            "Appadurai, M., & Raj, E. F. I. (2021, February). Finite element analysis of composite wind turbine blades. In 2021 7th International Conference on Electrical Energy Systems (ICEES) (pp. 585-589). IEEE.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Appadurai, M., & Fantin Irudaya Raj, E. (2022). Finite element analysis of lightweight robot fingers actuated by pneumatic pressure. In Recent Advances in Manufacturing, Automation, Design and Energy Technologies (pp. 379-385). Springer, Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Fantin Irudaya Raj, E., & Appadurai, M. (2022). Static 2D-Finite Element Analysis of Eccentricity Fault in Induction Motor. In Smart Technologies for Energy, Environment and Sustainable Development, Vol 1 (pp. 409-422). Springer, Singapore.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Darwin, S., Rani, E. F. I., Raj, E. F. I., Appadurai, M., & Balaji, M. (2022, April). Performance Analysis of Carbon Nanotube Transistors-A Review. In 2022 6th International Conference on Trends in Electronics and Informatics (ICOEI) (pp. 25-31). IEEE.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Ravindran, P., Mohamed, M. J. S., Gnanaraj, S. J. P., & Appadurai, M. (2022). Effect of graphite addition on dry sliding wear behavior of Self-lubricating Al-SiC-Gr hybrid composites by PM process. Materials Today: Proceedings, 60, 783-787.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Karthick, M., Gnanaraj, S. J. P., Appadurai, M., & Jeshurun, S. B. (2022). Productivity enhancement of a single slope solar still with energy storage medium. Materials Today: Proceedings, 60, 889-893.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Nirmala, D. A. R., Kannan, V., Thanalakshmi, M., Gnanaraj, S. J. P., & Appadurai, M. (2022). Inventory management and control system using ABC and VED analysis. Materials Today: Proceedings, 60, 922-925.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Maheswari, K. S., Mayandi, K., Gnanaraj, S. J. P., & Appadurai, M. (2022). Effect of transparent glass cover material on double slope solar still productivity. Materials Today: Proceedings, 62, 5415-5419.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Gnanaraj, S. J. P., Ramasamy, S., Karthick, M., Klington, A. G., & Appadurai, M. (2022). Enhancing the concentric tube properties by optimizing operational parameters. Materials Today: Proceedings, 49, 3726-3730.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Manickam, I. N., Logesh, K., Gnanaraj, S. J. P., & Appadurai, M. (2022). Effect of compression on coir industry waste material. Materials Today: Proceedings, 62, 710-713.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Girimurugan, R., Muthuraj, M., Ahammad, S. H., Vijayakumar, N., & Appadurai, M. (2022). Experimental study of mechanical properties of sisal/jute fibers hybrid sandwich composite. Materials Today: Proceedings, 68, 1742-1749.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Nirmala, A. R., Bhalaji, R. K. A., Kumar, S. B., Gnanaraj, S. J. P., & Appadurai, M. (2022). Study on the effect of COVID−19 pandemic on the savings and investment pattern of the manufacturing sector. Materials Today: Proceedings, 68, 1319-1323.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Hansen, R. S., Mary, M. B. Q., Subramanian, S. S., Raj, J. A., Gnanaraj, S. J. P., & Appadurai, M. (2022). Utilization of PCM in inclined and single basin solar stills to improve the daily productivity. Materials Today: Proceedings, 62, 967-972.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Thangam, J. A., Jeshurun, S. B., Thangapoo, A., Gnanaraj, S. J. P., & Appadurai, M. (2022). Industrial hazards and safety measures–An empirical study. Materials Today: Proceedings, 60, 834-838.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Subharaj, C., Leno, I. J., Vivek, S., Gnanaraj, S. J. P., & Appadurai, M. (2022). Sustainable manufacturing system applying on eco-design products. Materials Today: Proceedings, 68, 1528-1535.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Kumar, M. M., Rajesh, S., Appadurai, M., & Gnanaraj, S. J. P. (2022). Performance enhancement of solar distillation system with internal modification. Materials Today: Proceedings, 62, 5452-5455.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Kolappan, S., Manickam, I. N., Swikker, K. R. J., Gnanaraj, S. J. P., & Appadurai, M. (2022). Performance analysis of aircraft composite winglet. Materials Today: Proceedings, 62, 889-895.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Selvan, S. T., Mohandass, M., Ramalingam, P. S., Mayandi, K., Gnanaraj, S. J. P., & Appadurai, M. (2022). An exclusive hand protection device made of fused deposition modelling process using poly (lactic acid) polymer. Materials Today: Proceedings, 68, 1381-1386.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Subharaj, C., Logesh, K., Gnanaraj, S. J. P., Appadurai, M., & Vimalan, P. M. A. S. (2022). Design and development of Palmyra fruit pulp production equipment through sustainable approach. Materials Today: Proceedings, 68, 1762-1768.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Gnanaraj, S. J. P., Arulraj, I., & Appadurai, M. (2022). Computational analysis of fine droplet in swirl injector for desalination. Materials Today: Proceedings, 62, 703-709.",
        indexing: "Scopus",
    },
    {
        year: "2022",
        title:
            "Sivakumar, C. K., Robinson, Y., Prema, P., Gnanaraj, S. J. P., & Appadurai, M. (2022). Mechanical characteristics of aluminium alloy joints produced by friction stir welding. Materials Today: Proceedings, 62, 5620-5624.",
        indexing: "Scopus",
    },
];

const profileSections = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "courses", label: "Courses" },
    { id: "journals", label: "Journal Papers" },
    { id: "chapters", label: "Book Chapters" },
    { id: "conferences", label: "Conference Proceedings" },
];

function SectionHeading({
    number,
    eyebrow,
    title,
    description,
}: {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
}) {
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

            <h2 className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
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

function DetailItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
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
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden border border-[#E6DFD3] bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left">
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
                                key={rowIndex}
                                className={`border-b border-[#EEE9E0] last:border-b-0 ${rowIndex % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#FAF8F4]"
                                    }`}
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`px-4 py-4 text-xs leading-6 text-[#55535B] ${cellIndex === 0
                                                ? "text-[#927B4D]"
                                                : ""
                                            }`}
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

function PublicationSection({
    id,
    number,
    eyebrow,
    title,
    description,
    icon,
    items,
}: {
    id: string;
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    items: { year: string; title: string; indexing: string }[];
}) {
    return (
        <section
            id={id}
            className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    number={number}
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-[#927B4D]">{icon}</span>
                        <h3 className="font-serif text-xl text-[#20235A]">
                            {title}
                        </h3>
                    </div>

                    <span className="border border-[#D8CDB8] bg-[#FAF7F2] px-3 py-2 text-[9px] uppercase tracking-[0.13em] text-[#927B4D]">
                        {items.length} Entries
                    </span>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <article
                            key={`${item.year}-${index}`}
                            className="border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C] sm:p-7"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-serif text-2xl text-[#B49A66]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="h-5 w-px bg-[#D8CDB8]" />
                                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                        {item.year}
                                    </span>
                                </div>

                                <span className="border border-[#D8CDB8] bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#77747A]">
                                    {item.indexing}
                                </span>
                            </div>

                            <p className="mt-5 text-sm leading-7 text-[#55535B]">
                                {item.title}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AppaduraiFacultyPage() {
    return (
        <>
            <SiteHeader />

            {/* Profile Hero */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#171A43]" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-52 w-52 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full border border-white/5" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D2B87C]" />
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2B87C] sm:text-xs">
                            Faculty Profile
                        </p>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                                Department of Mechanical Engineering
                            </p>

                            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Dr. Appadurai M
                            </h1>

                            <p className="mt-3 font-serif text-lg italic text-[#D2B87C] sm:text-xl">
                                Associate Professor
                            </p>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                                Nehru College of Engineering and Research Centre,
                                Thrissur, Kerala.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    M.E.
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    Ph.D.
                                </span>
                                <span className="border border-white/20 px-4 py-2 text-[10px] tracking-wide text-white/80">
                                    PG Certificate – Additive Manufacturing
                                </span>
                            </div>
                        </div>

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
                                            Qualification
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            M.E., Ph.D.
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
                                            Primary Research Interest
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/90">
                                            Engineering Design, Additive
                                            Manufacturing, FEA, CFD
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
                                            Faculty ID
                                        </p>
                                        <p className="mt-1 text-xs text-white/90">
                                            E-4050
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
                <InnerHeader />

                {/* Profile Navigation */}
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

                {/* About Section */}
                <section
                    id="about"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_310px] lg:gap-16">
                        <div>
                            <SectionHeading
                                number="01"
                                eyebrow="Introduction"
                                title="About Dr. Appadurai M"
                                description="Faculty profile and professional information."
                            />

                            <div className="space-y-5 text-sm leading-8 text-[#55535B]">
                                <p>
                                    Dr. Appadurai M is an Associate Professor
                                    in the Department of Mechanical Engineering
                                    at Nehru College of Engineering and Research
                                    Centre, Thrissur, Kerala.
                                </p>

                                <p>
                                    He holds an M.E. and a Ph.D., along with a
                                    PG Certificate Program in Additive
                                    Manufacturing from IIT Palakkad.
                                </p>

                                <p>
                                    His primary research interests include
                                    Engineering Design, Additive Manufacturing,
                                    Finite Element Analysis, and Computational
                                    Fluid Dynamics. His broader areas of
                                    interest include Mechanics of Fluids,
                                    Fluid Machinery, Mechanics of Solids,
                                    Quality Engineering, Composite Materials,
                                    and Advanced Manufacturing.
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
                                value="Associate Professor"
                            />
                            <DetailItem
                                label="Department"
                                value="Mechanical Engineering"
                            />
                            {/* <DetailItem
                                label="Institution"
                                value="Nehru College of Engineering and Research Centre"
                            /> */}
                            <DetailItem
                                label="Location"
                                value="Thrissur, Kerala"
                            />
                            <DetailItem
                                label="NCERC Unique ID"
                                value="E-4050"
                            />
                        </aside>
                    </div>
                </section>

                {/* Research & Academic Background */}
                <section
                    id="research"
                    className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="02"
                            eyebrow="Academic Exploration"
                            title="Research & Academic Background"
                            description="Academic qualifications, research interests, researcher profiles, and scholarly metrics."
                        />

                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-6">
                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Doctoral Qualification
                                        </p>
                                    </div>
                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        Ph.D.
                                    </h3>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Postgraduate Qualification
                                        </p>
                                    </div>
                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        M.E.
                                    </h3>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Professional Certificate
                                        </p>
                                    </div>
                                    <h3 className="mt-3 font-serif text-xl text-[#20235A]">
                                        PG Certificate Program in Additive
                                        Manufacturing
                                    </h3>
                                    <p className="mt-2 text-xs leading-6 text-[#77747A]">
                                        Indian Institute of Technology (IIT)
                                        Palakkad
                                    </p>
                                </div>

                                <div className="border-l-2 border-[#D2B87C] pl-6">
                                    <div className="flex items-center gap-3">
                                        <Microscope
                                            size={19}
                                            className="text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Primary Research Interest
                                        </p>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {primaryResearchInterests.map(
                                            (interest) => (
                                                <span
                                                    key={interest}
                                                    className="border border-[#E5DED1] bg-[#FAF7F2] px-3 py-2 text-xs text-[#55535B]"
                                                >
                                                    {interest}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="border border-[#E8E1D5] bg-[#FAF7F2] p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <IdCard
                                        size={20}
                                        className="text-[#927B4D]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="font-serif text-xl text-[#20235A]">
                                        Researcher Profiles
                                    </h3>
                                </div>

                                <div className="mt-5 space-y-4">
                                    {researcherProfiles.map((profile) => (
                                        <div
                                            key={profile.label}
                                            className="border-b border-[#E5DED1] pb-4 last:border-b-0 last:pb-0"
                                        >
                                            <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#927B4D]">
                                                {profile.label}
                                            </p>
                                            <a
                                                href={profile.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 flex items-start gap-2 break-all text-xs leading-6 text-[#20235A] underline decoration-[#D2B87C] underline-offset-4 transition-colors hover:text-[#927B4D]"
                                            >
                                                {profile.display}
                                                <ExternalLink
                                                    size={13}
                                                    className="mt-1 shrink-0"
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Scholar Index */}
                        <div className="mt-12">
                            <div className="mb-6 flex items-center gap-3">
                                <Award
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Google Scholar Index
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    {
                                        label: "Total Citations",
                                        value: "1,878",
                                    },
                                    {
                                        label: "h-index",
                                        value: "25",
                                    },
                                    {
                                        label: "i10-index",
                                        value: "44",
                                    },
                                ].map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="border border-[#E8E1D5] bg-[#FAF7F2] p-6"
                                    >
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            {metric.value}
                                        </p>
                                        <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            {metric.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Research Interests */}
                        <div className="mt-14">
                            <div className="mb-6 flex items-center gap-3">
                                <Lightbulb
                                    size={19}
                                    className="text-[#927B4D]"
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-serif text-xl text-[#20235A]">
                                    Areas of Interest
                                </h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {researchInterests.map((interest, index) => (
                                    <div
                                        key={interest}
                                        className="flex items-start gap-4 border border-[#E8E1D5] bg-[#FAF7F2] p-5 transition-colors hover:border-[#D2B87C]"
                                    >
                                        <span className="font-serif text-lg text-[#B49A66]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="pt-1 text-sm leading-6 text-[#393947]">
                                            {interest}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section
                    id="courses"
                    className="scroll-mt-24 bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionHeading
                            number="03"
                            eyebrow="Teaching Experience"
                            title="Courses Handled"
                            description="Subjects handled in the Department of Mechanical Engineering."
                        />

                        <div className="mb-5 flex items-center gap-3">
                            <BookOpen
                                size={18}
                                className="text-[#927B4D]"
                                strokeWidth={1.5}
                            />
                            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                9 Courses Listed
                            </p>
                        </div>

                        <DataTable
                            headers={["Sl. No.", "Subject"]}
                            rows={courses}
                        />
                    </div>
                </section>

                {/* Journal Publications */}
                <PublicationSection
                    id="journals"
                    number="04"
                    eyebrow="Research Contributions"
                    title="Journal Publications"
                    description="Journal papers and publication details provided in the faculty profile."
                    icon={<FileText size={19} strokeWidth={1.5} />}
                    items={journalPublications}
                />

                {/* Book Chapters */}
                <PublicationSection
                    id="chapters"
                    number="05"
                    eyebrow="Academic Contributions"
                    title="Book Chapters"
                    description="Published book chapters and their indexing details."
                    icon={<BookMarked size={19} strokeWidth={1.5} />}
                    items={bookChapters}
                />

                {/* Conference Proceedings */}
                <PublicationSection
                    id="conferences"
                    number="06"
                    eyebrow="Conference Contributions"
                    title="Indexed Conference Proceedings"
                    description="Conference proceedings and indexed research contributions."
                    icon={<Presentation size={19} strokeWidth={1.5} />}
                    items={conferenceProceedings}
                />
            </main>

            <FooterSection />
        </>
    );
}

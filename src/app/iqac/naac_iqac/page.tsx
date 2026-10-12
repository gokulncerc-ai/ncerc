"use client";

import React, { useEffect, useState } from "react";
import {
    ArrowUpRight,
    ChevronRight,
    ClipboardCheck,
    FileCheck2,
    FileText,
    ShieldCheck,
    Sparkles,
    X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type DocumentItem = {
    title: string;
    href: string;
};

type ResourceSection = {
    title: string;
    documents: DocumentItem[];
};

type Resource = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: typeof FileText;
    category: string;
    documents?: DocumentItem[];
    sections?: ResourceSection[];
};

const d = (title: string, href: string): DocumentItem => ({ title, href });

const iqacDocuments: DocumentItem[] = [
    d("C-8241", "https://ncerc.ac.in/downloads/iqac/C-8241-.pdf"),
    d("EOA Report_2018-19 NCERC", "https://ncerc.ac.in/downloads/iqac/EOA%20Report_2018-19%20NCERC.PDF"),
    d("IIQA Undertaking", "https://ncerc.ac.in/downloads/iqac/IIQA_Undertaking.pdf"),
    d("IQAC (Member formation and Meeting minutes)", "https://ncerc.ac.in/downloads/iqac/IQAC%20%28Member%20formation%20and%20Meeting%20minutes%29.pdf"),
    d("NCERC RTI", "https://ncerc.ac.in/downloads/iqac/NCERC%20RTI.pdf"),
    d("Provisional Order_81 NCERC 2018-19", "https://ncerc.ac.in/downloads/iqac/Provisionalorder_81%20NCERC%202018-19.pdf"),
    d("IIQA", "https://ncerc.ac.in/downloads/iqac/IIQA.pdf"),
    d("ATR of 30th IQAC Meeting", "https://ncerc.ac.in/downloads/iqac/ATR%20of%2030%20th%20IQAC%20meeting.pdf"),
    d("ATR of 32nd IQAC Meeting", "https://ncerc.ac.in/downloads/iqac/ATR%20of%2032nd%20IQAC%20meeting.pdf"),
    d("ATR of 33rd IQAC Meeting", "https://ncerc.ac.in/downloads/iqac/ATR%20of%2033rd%20IQAC%20meeting.pdf"),
    d("IQAC 30th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2030th%20Meeting%20Minutes.pdf"),
    d("IQAC 31st Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2031st%20Meeting%20Minutes.pdf"),
    d("IQAC 31st Meeting ATR", "https://ncerc.ac.in/downloads/iqac/IQAC%2031st%20meeting%20ATR.pdf"),
    d("IQAC 32nd Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2032nd%20meeting%20minutes.pdf"),
    d("IQAC 33rd Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/33rd%20meeting%20minutes%20of%20IQAC.pdf"),
    d("IQAC 34th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2034th%20Meeting%20Minutes.pdf"),
    d("IQAC 34th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/34th%20IQAC%20meeting%20ATR.pdf"),
    d("IQAC 35th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/35th%20meeting%20minutes.pdf"),
    d("IQAC 35th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/IQAC%2035th%20MEETING%20ATR.pdf"),
    d("IQAC 36th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2036th%20MEETING%20MINUTES.pdf"),
    d("IQAC 36th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/IQAC%2036th%20Meeting%20ATR.pdf"),
    d("IQAC 37th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2037th%20Meeting%20Minutes.pdf"),
    d("IQAC 37th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/IQAC%2037th%20MEETING%20ATR.pdf"),
    d("IQAC 38th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2038th%20MEETING%20MINUTES.pdf"),
    d("IQAC 38th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/IQAC%2038th%20Meeting%20ATR.pdf"),
    d("IQAC 39th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/IQAC%2039th%20MEETING%20MINUTES.pdf"),
    d("IQAC 39th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/39th%20ATR.pdf"),
    d("IQAC 40th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/40th%20MOM.pdf"),
    d("IQAC 40th Meeting ATR", "https://ncerc.ac.in/downloads/iqac/40th%20ATR.pdf"),
    d("IQAC 41st Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/41st%20mom.pdf"),
    d("IQAC 41st Meeting ATR", "https://ncerc.ac.in/downloads/iqac/41%20atr.pdf"),
    d("IQAC 42nd Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/42%20MOM.pdf"),
    d("IQAC 42nd Meeting ATR", "https://ncerc.ac.in/downloads/iqac/42%20atr.pdf"),
    d("IQAC 43rd Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/43%20mom.pdf"),
    d("IQAC 43rd Meeting ATR", "https://ncerc.ac.in/downloads/iqac/43-atr.pdf"),
    d("IQAC 44th Meeting Minutes", "https://ncerc.ac.in/downloads/iqac/44th%20MEETING%20MINUTES.pdf"),
];

const aqarDocuments: DocumentItem[] = [
    d("NCERC NAAC AQAR 2020-21", "https://ncerc.ac.in/downloads/NCERC%20NAAC%20AQAR%202020-21.pdf"),
    d("AQAR 2019-20", "https://ncerc.ac.in/downloads/aqar/AQAR-2019-20.pdf"),
    d("AQAR 18-19", "https://ncerc.ac.in/downloads/aqar/aqar%2018-19.pdf"),
    d("AQAR 15-16 KLCOGN20026. NCERC", "https://ncerc.ac.in/downloads/aqar/AQAR%2015-16%20KLCOGN20026.NehruCollegeOfEngineeringAndResearchCentre.Kerala.pdf"),
    d("AQAR 16-17 - NAAC Track ID KLCOGN20026", "https://ncerc.ac.in/downloads/aqar/AQAR%2016-17-%20NAAC%20Track%20ID%20%20KLCOGN20026.docx"),
    d("AQAR 17-18 - NAAC Track ID KLCOGN20026", "https://ncerc.ac.in/downloads/aqar/AQAR%2017-18%20-%20NAAC%20Track%20ID%20KLCOGN20026.docx"),
];

const aqar2020Documents: DocumentItem[] = [
    d("Approval Process Handbook_2021-22 (Revised)", "https://ncerc.ac.in/downloads/Approval%20Process%20Handbook_2021-22%20%28Revised%29.pdf"),
    d("NCERC Annual Report 2020-21", "https://ncerc.ac.in/downloads/NCERC%20Annual%20Report%202020-21.pdf"),
    d("Reservation Category 2020-21", "https://ncerc.ac.in/downloads/Reservation%20Category%202020-21.pdf"),
    d("1.1.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/1.1.1_AQAR_2020-2021.pdf"),
    d("1.1.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/1.1.2_AQAR_2020-21.pdf"),
    d("1.3.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria1/1.3.2/1.3.2.xlsx"),
    d("1.3.2 Electrical Electronics Engg", "https://ncerc.ac.in/downloads/criteria1/1.3.2/ElectricalElectronicsEngg-1.3.2.zip"),
    d("1.3.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria1/1.3.3/1.3.3.xlsx"),
    d("1.4.1 & 1.4.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria1/1.4.1/1.4.1%20%26%201.4.2.pdf"),
    d("2.1.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.1.1.pdf"),
    d("2.2.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.2.1_AQAR_2020-2021.pdf"),
    d("2.2.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.2.2.pdf"),
    d("2.3.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.3.1_AQAR_2020-2021.pdf"),
    d("2.3.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.3.2.pdf"),
    d("2.3.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.3.3.pdf"),
    d("2.5.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.5.1.pdf"),
    d("2.5.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.5.2_AQAR_2020-2021.pdf"),
    d("2.6.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.6.1_AQAR_2020-2021.pdf"),
    d("2.6.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.6.2_AQAR_2020-2021.pdf"),
    d("2.6.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.6.3.pdf"),
    d("2.7.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria2/newupdate/2.7.1.pdf"),
    d("3.2.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.2.2-AQAR-2020-2021.pdf"),
    d("3.3.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.3.1-AQAR-2020-2021.pdf"),
    d("3.3.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.3.2-AQAR-2020-2021.pdf"),
    d("3.3.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.3.3-AQAR-2020-2021.pdf"),
    d("3.4.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.4.1-AQAR-2020-2021.pdf"),
    d("3.4.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.4.3-AQAR-2020-2021.pdf"),
    d("3.5.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.5.1-AQAR-2020-2021.pdf"),
    d("3.5.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria3/updated/3.5.2-AQAR-2020-2021.pdf"),
    d("4.1.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria4/4.1.1.pdf"),
    d("4.1.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria4/4.1.2.pdf"),
    d("4.2.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria4/4.2.1.pdf"),
    d("4.3.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria4/4.3.1.pdf"),
    d("4.4.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria4/4.4.2.pdf"),
    d("5.1.1 Government Scholarship", "https://ncerc.ac.in/downloads/criteria5/newupdate/new/5.1.1%20Government%20Scholarship.pdf"),
    d("5.1.2 Institutional Scholarship", "https://ncerc.ac.in/downloads/criteria5/newupdate/new/5.1.2%20Institutional%20Scholarship.pdf"),
    d("5.1.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.1.3.pdf"),
    d("5.2.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.1.pdf"),
    d("5.2.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.2.pdf"),
    d("5.2.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.3.pdf"),
    d("5.3.2 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.3.2%20AQAR%202020-21.pdf"),
    d("5.3.3 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.3.3.pdf"),
    d("5.4.1 AQAR 2020-2021", "https://ncerc.ac.in/downloads/criteria5/newupdate/5.4.1.pdf"),
    d("6.1.2 NCERC 2020-21", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.1.2-NCERC.pdf"),
    d("6.3.1 NCERC HR POLICY", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.1-NCERC-HR-POLICY.pdf"),
    d("6.3.5NCERC 2020-21", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.5-NCERC.pdf"),
    d("6.4.1 NCERC 2020-21", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.4.1-NCERC.pdf"),
    d("6.4.3 Balance Sheet", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.4.3-Balance-Sheet.pdf"),
    d("6.3.3 NCERC", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.3%20NCERC.pdf"),
    d("6.3.4 NCERC", "https://ncerc.ac.in/downloads/criteria6/new/6.3.4%20AQAR%2020-21.pdf"),
    d("6.5.2", "https://ncerc.ac.in/downloads/criteria6/new/6.5.2.pdf"),
    d("6.5.3 IQAC Meeting Minutes", "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.5.3%20IQAC%20meeting%20minutes%202020-21.pdf"),
];

const criteria1Documents: DocumentItem[] = [
    d("1.1.1 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.1.1/1.1.1NCERC.pdf"),
    d("1.1.2 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.1.2/1.1.2NCERC.pdf"),
    d("1.1.3 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.1.3/1.1.3NCERC.pdf"),
    d("1.2.1 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.2.1/1.2.1NCERC.pdf"),
    d("1.2.2 NCERC 1", "https://ncerc.ac.in/downloads/criteria1/1.2.2/1.2.2NCERC1.pdf"),
    d("1.2.2 NCERC 2", "https://ncerc.ac.in/downloads/criteria1/1.2.2/1.2.2NCERC2.pdf"),
    d("1.2.2 NCERC 3", "https://ncerc.ac.in/downloads/criteria1/1.2.2/1.2.2NCERC3.pdf"),
    d("1.2.2 NCERC 4", "https://ncerc.ac.in/downloads/criteria1/1.2.2/1.2.2NCERC4.pdf"),
    d("1.2.2 NCERC 5", "https://ncerc.ac.in/downloads/criteria1/1.2.2/1.2.2NCERC5.pdf"),
    d("1.2.3 POS", "https://ncerc.ac.in/downloads/criteria1/1.2.3/1.2.3POS.pdf"),
    d("1.3.1 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.3.1/1.3.1NCERC.pdf"),
    d("1.3.2 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.3.2/1.3.2NCERC.pdf"),
    d("1.3.2 POS", "https://ncerc.ac.in/downloads/criteria1/1.3.2/1.3.2POS.pdf"),
    d("1.3.3 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.3.3/1.3.3NCERC.pdf"),
    d("1.3.3 POS", "https://ncerc.ac.in/downloads/criteria1/1.3.3/1.3.3POS.pdf"),
    d("1.4.1 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.4.1/1.4.1NCERC.pdf"),
    d("1.4.2 NCERC", "https://ncerc.ac.in/downloads/criteria1/1.4.2/1.4.2NCERC.pdf"),
];

const criteria2Documents: DocumentItem[] = [
    d("2.1.1 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.1.1ncerc.pdf"),
    d("2.1.2 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.1.2ncerc.pdf"),
    d("2.2.1 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.2.1ncerc.pdf"),
    d("2.2.2 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.2.2ncerc.pdf"),
    d("2.3.1 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.3.1ncerc.pdf"),
    d("2.3.2 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.3.2ncerc/2.3.2ncerc.pdf"),
    d("ICT classroom photo", "https://ncerc.ac.in/downloads/criteria2/2.3.2ncerc/ICT-classroom-photo.docx"),
    d("LMS", "https://ncerc.ac.in/downloads/criteria2/2.3.2ncerc/LMS.doc"),
    d("2.3.3 NCERC (2)", "https://ncerc.ac.in/downloads/criteria2/2.3.3-%282%29ncerc.pdf"),
    d("2.3.3 NCERC (3)", "https://ncerc.ac.in/downloads/criteria2/2.3.3-%283%29ncerc.pdf"),
    d("2.4.1 NCERC (1)", "https://ncerc.ac.in/downloads/criteria2/2.4.1%281%29ncerc.pdf"),
    d("2.5.1 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.5.1ncerc.pdf"),
    d("2.5.2 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.5.2ncerc.pdf"),
    d("2.6.1 NCERC (1)", "https://ncerc.ac.in/downloads/criteria2/2.6.1%281%29ncerc.pdf"),
    d("2.6.1 NCERC (2)", "https://ncerc.ac.in/downloads/criteria2/2.6.1-%282%29ncerc.pdf"),
    d("2.6.2 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.6.2ncerc.pdf"),
    d("2.6.3 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.6.3ncerc.pdf"),
    d("2.7.1 NCERC", "https://ncerc.ac.in/downloads/criteria2/2.7.1ncerc/2.7.1ncerc.pdf"),
    d("B.Tech 2015-19_Student_List Screenshot from KTU", "https://ncerc.ac.in/downloads/criteria2/2.7.1ncerc/B.Tech-2015-19_Student_List-Screenshot-from-KTU.docx"),
    d("M.Tech 2019-21_Student_List Screenshot from KTU", "https://ncerc.ac.in/downloads/criteria2/2.7.1ncerc/M.Tech-2019-21_Student_List-Screenshot-from-KTU.docx"),
    d("MBA 2019-21_Student_List Screenshot from KTU", "https://ncerc.ac.in/downloads/criteria2/2.7.1ncerc/MBA-2019-21_Student_List-Screenshot-from-KTU.docx"),
    d("MCA 2019-22_Student_List Screenshot from KTU", "https://ncerc.ac.in/downloads/criteria2/2.7.1ncerc/MCA-2019-22_Student_List%20Screenshot-from-KTU.docx"),
];

const criteria2Sections: ResourceSection[] = [
    { title: "Criteria 2", documents: criteria2Documents },
    {
        title: "Faculty Profile", documents: [
            d("NCERC Facultyprofile 2019-20 (1)", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2019-20.pdf"),
            d("NCERC Facultyprofile 2019-20 (2)", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2019-20%282%29.pdf"),
            d("NCERC Facultyprofile 2019-20 (3)", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2019-20%283%29.pdf"),
            d("NCERC Facultyprofile 2018-19", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2018-19.pdf"),
            d("NCERC Facultyprofile 2017-18", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2017-18.pdf"),
            d("NCERC Facultyprofile 2016-17", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2016-17.pdf"),
            d("NCERC Facultyprofile 2015-16", "https://ncerc.ac.in/downloads/criteria2/faculty-profile/NCERC-Facultyprofile-2015-16.pdf"),
        ]
    },
    {
        title: "HEI Teaching Faculty List", documents: [
            d("TEACHING STAFF LIST 2019-20", "https://ncerc.ac.in/downloads/criteria2/HEI-Teaching-Faculty-List/Teaching-staff-List-2019-2020.xlsx"),
            d("TEACHING STAFF LIST 2018-19", "https://ncerc.ac.in/downloads/criteria2/HEI-Teaching-Faculty-List/Teaching-staff-List-2018-2019.xlsx"),
            d("TEACHING STAFF LIST 2017-18", "https://ncerc.ac.in/downloads/criteria2/HEI-Teaching-Faculty-List/Teaching-staff-List-2017-2018.xlsx"),
            d("TEACHING STAFF LIST 2016-17", "https://ncerc.ac.in/downloads/criteria2/HEI-Teaching-Faculty-List/Teaching-staff-List-2016-2017.xlsx"),
            d("TEACHING STAFF LIST 2015-16", "https://ncerc.ac.in/downloads/criteria2/HEI-Teaching-Faculty-List/Teaching-staff-List-2015-2016.xlsx"),
        ]
    },
    {
        title: "AICTE Handbook", documents: [
            d("AICTE Approval Process Handbook 2019-20", "https://ncerc.ac.in/downloads/criteria2/AICTE/AICTE-ApprovalProcessHandbook2019-20.pdf"),
            d("AICTE Approval Process Handbook 2018-19", "https://ncerc.ac.in/downloads/criteria2/AICTE/AICTE-ApprovalProcessHandbook2018-19.pdf"),
            d("AICTE Approval Process Handbook 2017-18", "https://ncerc.ac.in/downloads/criteria2/AICTE/AICTE-ApprovalProcessHandbook2017-18.pdf"),
            d("AICTE Approval Process Handbook 2016-17", "https://ncerc.ac.in/downloads/criteria2/AICTE/AICTE-ApprovalProcessHandbook2016-17.pdf"),
            d("AICTE Approval Process Handbook 2015-16", "https://ncerc.ac.in/downloads/criteria2/AICTE/AICTE-ApprovalProcessHandbook2015-16.pdf"),
        ]
    },
    {
        title: "Extended Profile", documents: [
            d("Student Full Time Teacher Ratio", "https://ncerc.ac.in/downloads/criteria2/new/2.2.2NCERC-student-full-time-teacher-ratio.pdf"),
            d("Ratio of students to mentor", "https://ncerc.ac.in/downloads/criteria2/new/2.3.3-1-NCERC-Ratio-of-students-to-mentor.pdf"),
            d("Mentor Circulars", "https://ncerc.ac.in/downloads/criteria2/new/2.3.3NCERC-Mentor-Circulars.pdf"),
            d("Mentor Mentee Ratio", "https://ncerc.ac.in/downloads/criteria2/new/2.3.3NCERC-Mentor-Mentee-Ratio.pdf"),
            d("Final Year Students", "https://ncerc.ac.in/downloads/criteria2/new/Final-Year-Students-NCERC1.pdf"),
            d("HEI Faculty", "https://ncerc.ac.in/downloads/criteria2/new/HEI-Faculty.pdf"),
            d("NCERC Faculty Sanctioned", "https://ncerc.ac.in/downloads/criteria2/new/NCERC-Faculty-Sanctioned-Post.pdf"),
            d("No.of Program", "https://ncerc.ac.in/downloads/criteria2/new/No.of-Program-Ncerc.pdf"),
            d("Student Enrollment", "https://ncerc.ac.in/downloads/criteria2/new/Student-enrollment-ncerc.pdf"),
            d("SC ST Part-A", "https://ncerc.ac.in/downloads/criteria2/new/SC-ST-part-A.pdf"),
            d("NO OF COURSES", "https://ncerc.ac.in/downloads/criteria2/new/NO-OF-COURSES.pdf"),
            d("Annual Report", "https://ncerc.ac.in/downloads/criteria2/Annual-Report.pdf"),
        ]
    },
];

const criteria3Documents: DocumentItem[] = [
    d("3.1.1 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.1.1NCERC.pdf"),
    d("3.1.2 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.1.2NCERC.pdf"),
    d("3.1.3 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.1.3NCERC.pdf"),
    d("3.2.1 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.2.1NCERC.pdf"),
    d("3.2.2 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.2.2NCERC.pdf"),
    d("3.3.2 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.3.2NCERC.pdf"),
    d("3.3.3 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.3.3NCERC.pdf"),
    d("3.3.3 NCERC Excel", "https://ncerc.ac.in/downloads/criteria3/3.3.3.xlsx"),
    d("3.4.1 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.4.1NCERC.pdf"),
    d("3.4.2 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.4.2NCERC.pdf"),
    d("3.4.3 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.4.3NCERC.pdf"),
    d("3.4.4 NCERC Excel", "https://ncerc.ac.in/downloads/criteria3/3.4.4.xlsx"),
    d("3.5.1 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria3/3.5.1NCERC2017-18.pdf"),
    d("3.5.1 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria3/3.5.1NCERC2019-20.pdf"),
    d("3.5.1 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria3/3.5.1NCERC2018-19.pdf"),
    d("3.5.1 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria3/3.5.1NCERC2016-17.pdf"),
    d("3.5.2 NCERC", "https://ncerc.ac.in/downloads/criteria3/3.5.2NCERC.pdf"),
    d("3.5.2 NCERC-XLX", "https://ncerc.ac.in/downloads/criteria3/3.5.2NCERC-1.xlsx"),
];

const criteria4Documents: DocumentItem[] = [
    d("4.1.1 NCERC Infrastructure", "https://ncerc.ac.in/downloads/criteria4/4.1.1NCERC-Infrastructure.pdf"),
    d("4.1.2 NCERC Facilities for cultural sports & games", "https://ncerc.ac.in/downloads/criteria4/4.1.2NCERC-Facilities-for-cultural-sports%26games-big.pdf"),
    d("4.1.3 NCERC Geo Tagged Photographs of Classrooms", "https://ncerc.ac.in/downloads/criteria4/4.1.3NCERC-Geo-Tagged-Photographs-of-Classrooms.pdf"),
    d("4.2.1 NCERC Library", "https://ncerc.ac.in/downloads/criteria4/4.2.1NCERC-Library.pdf"),
    d("4.2.2 NCERC Subsciption of E-Resources", "https://ncerc.ac.in/downloads/criteria4/4.2.2NCERC-Subsciption-of-E-Resources.pdf"),
    d("4.2.4 NCERC Library Usage Details", "https://ncerc.ac.in/downloads/criteria4/4.2.4NCERC-Library-Usage-Details.pdf"),
    d("4.3.1 NCERC IT Facilities", "https://ncerc.ac.in/downloads/criteria4/4.3.1NCERC-IT-Facilities-big.pdf"),
    d("4.3.2 NCERC Student Computer Ratio", "https://ncerc.ac.in/downloads/criteria4/4.3.2NCERC-Student-Computer-Ratio.pdf"),
    d("4.3.3 NCERC Internet Bandwidth", "https://ncerc.ac.in/downloads/criteria4/4.3.3NCERC-Internet-Bandwidth.pdf"),
];

const criteria5Documents: DocumentItem[] = [
    d("5.1.1 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.1.1NCERC2015-2016.pdf"),
    d("5.1.1 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.1.1NCERC2016-2017.pdf"),
    d("5.1.1 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.1.1NCERC2017-2018.pdf"),
    d("5.1.1 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.1.1NCERC2018-2019.pdf"),
    d("5.1.1 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.1.1NCERC2019-2020.pdf"),
    d("5.1.2 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.1.2NCERC2015-2016.pdf"),
    d("5.1.2 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.1.2NCERC2016-2017.pdf"),
    d("5.1.2 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.1.2NCERC2017-2018.pdf"),
    d("5.1.2 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.1.2NCERC2018-2019.pdf"),
    d("5.1.2 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.1.2NCERC2019-2020.pdf"),
    d("5.1.3 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.1.3/5.1.3NCERC-2015-16.pdf"),
    d("5.1.3 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.1.3/5.1.3NCERC-2016-17.pdf"),
    d("5.1.3 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.1.3/5.1.3NCERC-2017-18.pdf"),
    d("5.1.3 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.1.3/5.1.3NCERC-2018-19.pdf"),
    d("5.1.3 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.1.3/5.1.3NCERC-2019-20.pdf"),
    d("5.1.4 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.1.4/5.1.4NCERC-2015-16.pdf"),
    d("5.1.4 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.1.4/5.1.4NCERC-2016-17.pdf"),
    d("5.1.4 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.1.4/5.1.4NCERC-2017-18.pdf"),
    d("5.1.4 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.1.4/5.1.4NCERC-2018-19.pdf"),
    d("5.1.4 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.1.4/5.1.4NCERC-2019-20.pdf"),
    d("5.1.5 NCERC Antiragging committee", "https://ncerc.ac.in/downloads/criteria5/5.1.5/5.1.5NCERC-Antiragging-committee.pdf"),
    d("5.1.5 NCERC Gender equality and sexual harassment cell", "https://ncerc.ac.in/downloads/criteria5/5.1.5/5.1.5NCERC-Gender-equality-and-sexual-harassment-cell.pdf"),
    d("5.1.5 NCERC Grievance Cell", "https://ncerc.ac.in/downloads/criteria5/5.1.5/5.1.5NCERC-Online-Grievance.pdf"),
    d("Capacity Building & Skills Enhancement", "https://ncerc.ac.in/capacity-building-skills-enhancement"),
    d("5.2.1 NCERC PLACEMENT 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.2.1NCERC-PLACEMENT-2015-16.pdf"),
    d("5.2.1 NCERC PLACEMENT 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.2.1NCERC-PLACEMENT-2016-17.pdf"),
    d("5.2.1 NCERC PLACEMENT 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.2.1NCERC-PLACEMENT-2017-18.pdf"),
    d("5.2.1 NCERC PLACEMENT 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.2.1NCERC-PLACEMENT-2018-19.pdf"),
    d("5.2.1 NCERC PLACEMENT 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.2.1NCERC-PLACEMENT-2019-20.pdf"),
    d("5.2.2 NCERC", "https://ncerc.ac.in/downloads/criteria5/5.2.2NCERC.pdf"),
    d("5.2.3 NCERC", "https://ncerc.ac.in/downloads/criteria5/5.2.3NCERC.pdf"),
    d("5.3.1 NCERC Supporting Docs", "https://ncerc.ac.in/downloads/criteria5/5.3.1NCERC-Supporting-Docs.pdf"),
    d("5.3.2 NCERC Course Committee", "https://ncerc.ac.in/downloads/criteria5/5.3.2/5.3.2NCERC-Course-committee.pdf"),
    d("5.3.2 NCERC Hostel and Food committee", "https://ncerc.ac.in/downloads/criteria5/5.3.2/5.3.2NCERC-Hostel-and-Food-committee.pdf"),
    d("5.3.2 NCERC ICC and Womencell", "https://ncerc.ac.in/downloads/criteria5/5.3.2/5.3.2NCERC-ICC-and-womencell.pdf"),
    d("5.3.2 NCERC Students welfare committee new", "https://ncerc.ac.in/downloads/criteria5/5.3.2/5.3.2NCERC-Students-welfare-committee-new.pdf"),
    d("5.3.2 NCERC Transportation committee", "https://ncerc.ac.in/downloads/criteria5/5.3.2/5.3.2NCERC-Transportationcommittee.pdf"),
    d("5.3.3 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC2019-20.pdf"),
    d("5.3.3 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC2018-19.pdf"),
    d("5.3.3 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC2017-18.pdf"),
    d("5.3.3 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC2016-17.pdf"),
    d("5.3.3 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC2015-16.pdf"),
    d("5.3.3 NCERC REPORTS SPORTS AND ARTS", "https://ncerc.ac.in/downloads/criteria5/5.3.3/5.3.3NCERC-REPORTS-SPORTSANDARTS.pdf"),
    d("5.4.1 ALUMNI INFORMATION", "https://ncerc.ac.in/downloads/criteria5/5.3.1ALUMNI-INFORMATION.pdf"),
];

const criteria6Documents: DocumentItem[] = [
    d("6.1.1 NCERC", "https://ncerc.ac.in/downloads/criteria6/6.1.1NCERC-upload.pdf"),
    d("6.1.2 NCERC", "https://ncerc.ac.in/downloads/criteria6/6.1.2NCERC-upload.pdf"),
    d("6.2.1 NCERC", "https://ncerc.ac.in/downloads/criteria6/6.2.1NCERC-upload.pdf"),
    d("6.2.2 NCERC", "https://ncerc.ac.in/downloads/criteria6/6.2.2NCERC-upload.pdf"),
    d("6.2.3 NCERC i-Campus", "https://ncerc.ac.in/downloads/criteria6/new/6.2.3NCERC-I-Campus.pdf"),
    d("6.3.1 NCERC HR manual", "https://ncerc.ac.in/downloads/criteria6/new/6.3.1NCERC-HR-manual.pdf"),
    d("6.3.2 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria6/6.3.2NCERC-2017-18.pdf"),
    d("6.3.2 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria6/6.3.2NCERC-2016-17.pdf"),
    d("6.3.2 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria6/6.3.2NCERC-2015-16.pdf"),
    d("6.3.3 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria6/6.3.3/6.3.3NCERC-2019-20.pdf"),
    d("6.3.3 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria6/6.3.3/6.3.3NCERC-2018-19.pdf"),
    d("6.3.3 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria6/6.3.3/6.3.3NCERC-2017-18.pdf"),
    d("6.3.3 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria6/6.3.3/6.3.3NCERC-2016-17.pdf"),
    d("6.3.3 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria6/6.3.3/6.3.3NCERC-2015-16.pdf"),
    d("6.3.4 NCERC 2019-20", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-2019-20.pdf"),
    d("6.3.4 NCERC 2018-19", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-2018-19.pdf"),
    d("6.3.4 NCERC 2017-18", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-2017-18.pdf"),
    d("6.3.4 NCERC 2016-17", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-2016-17.pdf"),
    d("6.3.4 NCERC 2015-16", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-2015-16.pdf"),
    d("6.3.4 NCERC Program and Faclty list", "https://ncerc.ac.in/downloads/criteria6/6.3.4/6.3.4NCERC-Program-and-Faclty-list.pdf"),
    d("6.3.5 NCERC Perfomance samples", "https://ncerc.ac.in/downloads/criteria6/6.3.5.NCERC-Perfomance-samples.pdf"),
    d("6.4.1 NCERC internal & external audit", "https://ncerc.ac.in/downloads/criteria6/6.4.1NCERC-internal-audit.pdf"),
    d("6.4.3 NCERC Final Balance sheet", "https://ncerc.ac.in/downloads/criteria6/6.4.3NCERC-Balance-sheet.pdf"),
    d("6.5.1 NCERC Blooms Taxonomy", "https://ncerc.ac.in/downloads/criteria6/6.5.1NCERC-Blooms-Taxonomy.pdf"),
    d("6.5.2 NCERC Bloom and nsite", "https://ncerc.ac.in/downloads/criteria6/6.5.2NCERC-Bloom-and-nsite-upload.pdf"),
    d("6.5.2 NCERC Blooms taxonomy", "https://ncerc.ac.in/downloads/criteria6/6.5.2NCERC-Blooms-taxonomy-upload.pdf"),
    d("6.5.3 NCERC Collaborative quality initiatives", "https://ncerc.ac.in/downloads/criteria6/6.5.3-1/6.5.3%20NCERC%20Collaborative%20quality%20initiatives.pdf"),
    d("6.5.3 NCERC ISO", "https://ncerc.ac.in/downloads/criteria6/6.5.3-1/6.5.3%20NCERC%20ISO.pdf"),
    d("6.5.3 NCERC NIRF", "https://ncerc.ac.in/downloads/criteria6/6.5.3-1/6.5.3%20NCERC%20NIRF.pdf"),
    d("6.5.3 NCERC-IQAC-Minutes of meetings", "https://ncerc.ac.in/downloads/criteria6/6.5.3-1/6.5.3%20NCERC-IQAC-Minutes%20of%20meetings.pdf"),
];

const criteria7Documents: DocumentItem[] = [
    d("7.1 NCERC", "https://ncerc.ac.in/downloads/criteria7/1/7.1NCERC.pdf"),
    d("7.1 NCERC GEAP", "https://ncerc.ac.in/downloads/criteria7/1/7.1NCERC-GEAP.pdf"),
    d("7.1.2 NCERC", "https://ncerc.ac.in/downloads/criteria7/2/7.1.2NCERC.pdf"),
    d("7.1.2 NCERC NEW", "https://ncerc.ac.in/downloads/criteria7/2/7.1.2NCERC-NEW.pdf"),
    d("7.1.3 NCERC", "https://ncerc.ac.in/downloads/criteria7/3/7.1.3NCERC.pdf"),
    d("7.1.3 NCERC GEOTAG", "https://ncerc.ac.in/downloads/criteria7/3/7.1.3NCERC-GEOTAG.pdf"),
    d("7.1.3 NCERC MOU", "https://ncerc.ac.in/downloads/criteria7/3/7.1.3NCERC-MOU.pdf"),
    d("7.1.4 NCERC", "https://ncerc.ac.in/downloads/criteria7/4/7.1.4NCERC.pdf"),
    d("7.1.4 NCERC GEOTAG", "https://ncerc.ac.in/downloads/criteria7/4/7.1.4NCERC-GEOTAG.pdf"),
    d("7.1.5 NCERC", "https://ncerc.ac.in/downloads/criteria7/5/7.1.5NCERC.pdf"),
    d("7.1.5 NCERC GEOTAG", "https://ncerc.ac.in/downloads/criteria7/5/7.1.5NCERC-GEOTAG.pdf"),
    d("7.1.5 NCERC POLICY DOC", "https://ncerc.ac.in/downloads/criteria7/5/7.1.5NCERC-POLICY-DOC.pdf"),
    d("7.1.6 NCERC", "https://ncerc.ac.in/downloads/criteria7/6/7.1.6NCERC.pdf"),
    d("7.1.6 NCERC AUDIT CERTIFICATE", "https://ncerc.ac.in/downloads/criteria7/6/7.1.6NCERC-AUDIT-CERTIFI.pdf"),
    d("7.1.6 NCERC AUDIT REPORT", "https://ncerc.ac.in/downloads/criteria7/6/7.1.6NCERC-AUDIT-REPORT.pdf"),
    d("7.1.6 NCERC AWARD", "https://ncerc.ac.in/downloads/criteria7/6/7.1.6NCERC-AWARD.pdf"),
    d("7.1.7 NCERC", "https://ncerc.ac.in/downloads/criteria7/7/7.1.7NCERC.pdf"),
    d("7.1.7 NCERC DIGITAL", "https://ncerc.ac.in/downloads/criteria7/7/7.1.7NCERC-DIGITAL.pdf"),
    d("7.1.7 NCERC GEOTAG", "https://ncerc.ac.in/downloads/criteria7/7/7.1.7NCERC-GEOTAG.pdf"),
    d("7.1.8 NCERC", "https://ncerc.ac.in/downloads/criteria7/8/7.1.8NCERC.pdf"),
    d("7.1.8 NCERC DOC", "https://ncerc.ac.in/downloads/criteria7/8/7.1.8NCERC-DOC.pdf"),
    d("7.1.9 NCERC", "https://ncerc.ac.in/downloads/criteria7/9/7.1.9NCERC.pdf"),
    d("7.1.9 NCERC A", "https://ncerc.ac.in/downloads/criteria7/9/7.1.9NCERC-A.pdf"),
    d("7.1.10 NCERC", "https://ncerc.ac.in/downloads/criteria7/10/7.1.10NCERC.pdf"),
    d("7.1.10 NCERC COMMITTEE", "https://ncerc.ac.in/downloads/criteria7/10/7.1.10NCERC-COMMITTEE.pdf"),
    d("7.1.10 NCERC ETHICS", "https://ncerc.ac.in/downloads/criteria7/10/7.1.10NCERC-ETHICS.pdf"),
    d("7.1.11 NCERC", "https://ncerc.ac.in/downloads/criteria7/11/7.1.11NCERC.pdf"),
    d("7.1.11 NCERC PHOTOS", "https://ncerc.ac.in/downloads/criteria7/11/7.1.11NCERC-PHOTOS.pdf"),
    d("7.1.11 NCERC REPORT", "https://ncerc.ac.in/downloads/criteria7/11/7.1.11NCERC-REPORT.pdf"),
];

const bestPracticesDocuments: DocumentItem[] = [
    d("7.2.1 NCERC", "https://ncerc.ac.in/downloads/criteria7/BP2/7.2.1NCERC.pdf"),
    d("7.2.1 NCERC BPB", "https://ncerc.ac.in/downloads/criteria7/BP2/7.2.1NCERC-BPB.pdf"),
];

const ssrDocuments: DocumentItem[] = [
    d("NCERC APPROVED NAAC SSR SEPTEMBER 2021", "https://ncerc.ac.in/downloads/ssr/NCERC-APPROVED-NAAC-SSR-SEPTEMBER-2021.pdf"),
];

const dvvSections: ResourceSection[] = [
    {
        title: "Criteria 1", documents: [
            d("1.1.3 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.1.3NCERC.pdf"),
            d("1.2.1 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.2.1NCERC.pdf"),
            d("1.2.2 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.2.2NCERC.pdf"),
            d("1.2.3 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.2.3NCERC.pdf"),
            d("1.3.2 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC.pdf"),
            d("1.3.2 NCERC 15-16", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC15-16.pdf"),
            d("1.3.2 NCERC 16-17", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC16-17.pdf"),
            d("1.3.2 NCERC 17-18", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC17-18.pdf"),
            d("1.3.2 NCERC 18-19", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC18-19.pdf"),
            d("1.3.2 NCERC 19-20", "https://ncerc.ac.in/downloads/DVV/C1/1.3.2NCERC19-20.pdf"),
            d("1.3.3 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.3.3NCERC.pdf"),
            d("1.4.1 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.4.1NCERC.pdf"),
            d("1.4.2 NCERC", "https://ncerc.ac.in/downloads/DVV/C1/1.4.2NCERC.pdf"),
        ]
    },
    {
        title: "Criteria 2", documents: [
            d("2.1.1 NCERC AVERAGE ENROLLMENT PERCENTAGE", "https://ncerc.ac.in/downloads/DVV/C2/2.1.1%20NCERC%20AVERAGE%20ENROLLMENT%20PERCENTAGE.pdf"),
            d("2.1.2.1 NCERC RESERVATION CATEGORY BASED ON STUDENTS ADMISSION", "https://ncerc.ac.in/downloads/DVV/C2/2.1.2.1%20NCERC%20RESERVATION%20CATEGORY%20BASED%20ON%20STUDENTS%20ADMISSION.pdf"),
            d("2.4.1 NCERC FACULTY MEMBERS", "https://ncerc.ac.in/downloads/DVV/C2/2.4.1%20NCERC%20FACULTY%20MEMBERS.pdf"),
            d("2.4.2 NCERC PHD FACULTY MEMBERS", "https://ncerc.ac.in/downloads/DVV/C2/2.4.2%20NCERC%20PHD%20FACULTY%20MEMBERS.pdf"),
            d("2.4.3 AVERAGE TEACHING EXPERIENCE OF FULL TIME TEACHERS IN THE SAME INSTITUTION", "https://ncerc.ac.in/downloads/DVV/C2/2.4.3%20AVERAGE%20TEACHING%20EXPERIENCE%20OF%20FULL%20TIME%20TEACHERS%20IN%20THE%20SAME%20INSTITUTION.pdf"),
            d("2.6.3 NCERC AVERAGE PASS PERCENTAGE OF STUDENTS", "https://ncerc.ac.in/downloads/DVV/C2/2.6.3%20NCERC%20AVERAGE%20PASS%20PERCENTAGE%20OF%20STUDENTS.pdf"),
        ]
    },
    { title: "Criteria 3", documents: [] },
    {
        title: "Criteria 4", documents: [
            d("4.1 Total Number of Classrooms & Seminar Halls", "https://ncerc.ac.in/downloads/DVV/C4/4.1%20Total%20Number%20of%20Classrooms%20%26%20Seminar%20Halls.pdf"),
            d("4.1.4 Average percentage of expenditure for infrastructure augmentation", "https://ncerc.ac.in/downloads/DVV/C4/4.1.4%20Average%20percentage%20of%20expenditure%20for%20infrastructure%20augmentation.pdf"),
            d("4.2 Total Expenditure excluding salary year-wise during last five years ( INR in Lakhs)", "https://ncerc.ac.in/downloads/DVV/C4/4.2%20Total%20Expenditure%20excluding%20salary%20year-wise%20during%20last%20five%20years%20%28%20INR%20in%20Lakhs%29.pdf"),
            d("4.2.2 The institution has subscription for e-resources", "https://ncerc.ac.in/downloads/DVV/C4/4.2.2%20The%20institution%20has%20subscription%20for%20e-resources.pdf"),
            d("4.2.3 Average annual expenditure for purchase of books & Journals", "https://ncerc.ac.in/downloads/DVV/C4/4.2.3%20Average%20annual%20expenditure%20for%20purchase%20of%20books%20%26%20Journals.pdf"),
            d("4.2.4 Percentage per day usage of library by teachers and students", "https://ncerc.ac.in/downloads/DVV/C4/4.2.4%20Percentage%20per%20day%20usage%20of%20library%20by%20teachers%20and%20students.pdf"),
            d("4.3 Number of Computers", "https://ncerc.ac.in/downloads/DVV/C4/4.3%20Number%20of%20Computers.pdf"),
            d("4.3.2 Student - Computer ratio (Data for the latest completed academic year)", "https://ncerc.ac.in/downloads/DVV/C4/4.3.2%20Student%20-%20Computer%20ratio%20%28Data%20for%20the%20latest%20completed%20academic%20year%29.pdf"),
            d("4.4.1 Average percentage of expenditure incurred on maintenance", "https://ncerc.ac.in/downloads/DVV/C4/4.4.1%20Average%20percentage%20of%20expenditure%20incurred%20on%20maintenance.pdf"),
        ]
    },
    {
        title: "Criteria 5", documents: [
            d("5.1.1 Average percentage of students benefitted in Government scholarship", "https://ncerc.ac.in/downloads/DVV/C5/5.1.1%20Average%20percentage%20of%20students%20benefitted%20in%20Government%20scholarship.pdf"),
            d("5.1.3", "https://ncerc.ac.in/downloads/DVV/C5/5.1.3.pdf"),
            d("5.1.4", "https://ncerc.ac.in/downloads/DVV/C5/5.1.4.pdf"),
            d("5.2.1", "https://ncerc.ac.in/downloads/DVV/C5/5.2.1.pdf"),
            d("NCERC-NAAC 5.3.3 Justification", "https://ncerc.ac.in/downloads/DVV/C5/NCERC-NAAC%205.3.3%20Justification.pdf"),
        ]
    },
    {
        title: "Criteria 6", documents: [
            d("6.3.4 NCERC PROGRAM LIST", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC%20PROGRAM%20LIST.pdf"),
            d("6.3.4 NCERC 2015-2016", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC2015-2016.pdf"),
            d("6.3.4 NCERC 2016-2017", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC2016-2017.pdf"),
            d("6.3.4 NCERC 2017-2018", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC2017-2018.pdf"),
            d("6.3.4 NCERC 2018-2019", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC2018-2019.pdf"),
            d("6.3.4 NCERC 2019-2020", "https://ncerc.ac.in/downloads/DVV/C6/6.3.4NCERC2019-2020.pdf"),
            d("6.5.3 NCERC IQAC Minutes of meetings", "https://ncerc.ac.in/downloads/DVV/C6/6.5.3%20NCERC%20%20IQAC%20Minutes%20of%20meetings.pdf"),
            d("6.5.3 NCERC ISO", "https://ncerc.ac.in/downloads/DVV/C6/6.5.3%20NCERC%20ISO.pdf"),
            d("6.5.3 NCERC NIRF", "https://ncerc.ac.in/downloads/DVV/C6/6.5.3%20NCERC%20NIRF.pdf"),
        ]
    },
    {
        title: "Criteria 7", documents: [
            d("7.1.2 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.2%20NCERC.pdf"),
            d("7.1.4 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.4%20NCERC.pdf"),
            d("7.1.5 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.5%20NCERC.pdf"),
            d("7.1.6 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.6%20NCERC.pdf"),
            d("7.1.7 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.7%20NCERC.pdf"),
            d("7.1.10 NCERC", "https://ncerc.ac.in/downloads/DVV/C7/7.1.10%20NCERC.pdf"),
            d("Code of Conduct Policy", "https://ncerc.ac.in/downloads/DVV/C7/Code%20of%20Conduct%20Policy%20doc.pdf"),
            d("Green Campus Policy", "https://ncerc.ac.in/downloads/DVV/C7/GreenCampusPolicy.pdf"),
        ]
    },
    {
        title: "EXTENDED PROFILE", documents: [
            d("1.1 NCERC NUMBER OF COURSES", "https://ncerc.ac.in/downloads/DVV/EX/1.1%20%20NCERC%20NUMBER%20OF%20COURSES.pdf"),
            d("1.2 NCERC NUMBER OF PROGRAMS", "https://ncerc.ac.in/downloads/DVV/EX/1.2%20NCERC%20NUMBER%20OF%20PROGRAMS.pdf"),
            d("1.2 NO OF PGMS -LAST 5 YEAR", "https://ncerc.ac.in/downloads/DVV/EX/1.2%20NO%20OF%20PGMS%20-LAST%205%20YEAR.pdf"),
            d("2.1 NCERC STUDENT ENROLLMENT 2015-2016", "https://ncerc.ac.in/downloads/DVV/EX/2.1%20NCERC%20STUDENT%20ENROLLMENT%202015-2016.pdf"),
            d("2.1 NCERC STUDENT ENROLLMENT 2016-2017", "https://ncerc.ac.in/downloads/DVV/EX/2.1%20NCERC%20STUDENT%20ENROLLMENT%202016-2017.pdf"),
            d("2.1. NCERC STUDENT ENROLLMENT 2017-2018", "https://ncerc.ac.in/downloads/DVV/EX/2.1.%20NCERC%20STUDENT%20ENROLLMENT%202017-2018.pdf"),
            d("2.1 NCERC STUDENT ENROLLMENT 2018-2019", "https://ncerc.ac.in/downloads/DVV/EX/2.1%20NCERC%20STUDENT%20ENROLLMENT%202018-2019.pdf"),
            d("2.1 NCERC STUDENT ENROLLMENT 2019-2020", "https://ncerc.ac.in/downloads/DVV/EX/2.1%20NCERC%20STUDENT%20ENROLLMENT%202019-2020.pdf"),
            d("2.2 RESERVATION CATEGORY BASED ON SANCTIONED INTAKE", "https://ncerc.ac.in/downloads/DVV/EX/2.2%20%20RESERVATION%20CATEGORY%20BASED%20ON%20SANCTIONED%20INTAKE.pdf"),
            d("2.3 NCERC FINAL YEAR STUDENTS", "https://ncerc.ac.in/downloads/DVV/EX/2.3%20NCERC%20FINAL%20YEAR%20STUDENTS.pdf"),
            d("3.1NCERC NO OF FULLTIME TEACHERS", "https://ncerc.ac.in/downloads/DVV/EX/3.1NCERC%20NO%20OF%20FULLTIME%20TEACHERS.pdf"),
            d("3.2 NO OF SANCTIONED POST", "https://ncerc.ac.in/downloads/DVV/EX/3.2%20NO%20OF%20SANCTIONED%20POST.pdf"),
        ]
    },
];

const resources: Resource[] = [
    { id: "01", title: "IQAC", description: "Learn about the Internal Quality Assurance Cell and access institutional quality assurance documents, meeting minutes and action taken reports.", href: "https://ncerc.ac.in/naac/1", icon: ShieldCheck, category: "Quality Assurance", documents: iqacDocuments },
    { id: "02", title: "AQAR", description: "Access the Annual Quality Assurance Reports and institutional quality documentation.", href: "https://ncerc.ac.in/naac/2", icon: FileCheck2, category: "Annual Quality Assurance Report", documents: aqarDocuments },
    { id: "03", title: "AQAR 2020–2021", description: "Explore the Annual Quality Assurance Report for the academic year 2020–2021 and all supporting documents.", href: "https://ncerc.ac.in/naac/12", icon: FileText, category: "Academic Year 2020–2021", documents: aqar2020Documents },
    { id: "04", title: "SSR", description: "View the Self Study Report prepared as part of the institutional accreditation process.", href: "https://ncerc.ac.in/naac/3", icon: ClipboardCheck, category: "Self Study Report", documents: ssrDocuments },
    { id: "05", title: "Criteria 1", description: "Curricular Aspects and supporting quality assurance documentation.", href: "https://ncerc.ac.in/naac/4", icon: FileText, category: "Curricular Aspects", documents: criteria1Documents },
    { id: "06", title: "Criteria 2", description: "Teaching, Learning and Evaluation related documentation and reports.", href: "https://ncerc.ac.in/naac/5", icon: FileText, category: "Teaching-Learning & Evaluation", sections: criteria2Sections },
    { id: "07", title: "Criteria 3", description: "Research, Innovations and Extension related institutional documentation.", href: "https://ncerc.ac.in/naac/6", icon: FileText, category: "Research, Innovations & Extension", documents: criteria3Documents },
    { id: "08", title: "Criteria 4", description: "Infrastructure and Learning Resources related documentation.", href: "https://ncerc.ac.in/naac/7", icon: FileText, category: "Infrastructure & Learning Resources", documents: criteria4Documents },
    { id: "09", title: "Criteria 5", description: "Student Support and Progression related documentation.", href: "https://ncerc.ac.in/naac/8", icon: FileText, category: "Student Support & Progression", documents: criteria5Documents },
    { id: "10", title: "Criteria 6", description: "Governance, Leadership and Management related documentation.", href: "https://ncerc.ac.in/naac/9", icon: FileText, category: "Governance, Leadership & Management", documents: criteria6Documents },
    { id: "11", title: "Criteria 7", description: "Institutional Values and Best Practices related documentation.", href: "https://ncerc.ac.in/naac/10", icon: FileText, category: "Institutional Values & Best Practices", documents: criteria7Documents },
    { id: "12", title: "Best Practices", description: "Discover the institutional best practices followed by NCERC.", href: "https://ncerc.ac.in/naac/11", icon: Sparkles, category: "Institutional Best Practices", documents: bestPracticesDocuments },
    { id: "13", title: "DVV Clarifications", description: "Access Data Validation and Verification clarification documents through Criteria 1–7 and the Extended Profile.", href: "https://ncerc.ac.in/dvv-page", icon: FileCheck2, category: "Data Validation & Verification", sections: dvvSections },
];

const isPdf = (href: string) => /\.pdf(?:$|[?#])/i.test(href);

export default function Page() {
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [selectedSection, setSelectedSection] = useState<ResourceSection | null>(null);
    const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
    const closeAllModals = () => {
        setSelectedResource(null);
        setSelectedSection(null);
        setSelectedDocument(null);
    };

    const openResource = (resource: Resource) => {
        setSelectedResource(resource);
        setSelectedSection(null);
        setSelectedDocument(null);
    };

    const closeResourceModal = () => {
        setSelectedResource(null);
        setSelectedSection(null);
    };

    const openDocument = (document: DocumentItem) => {
        setSelectedDocument(document);
    };

    const closeDocument = () => {
        setSelectedDocument(null);
    };

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;
            if (selectedDocument) return closeDocument();
            if (selectedSection) return setSelectedSection(null);
            if (selectedResource) return closeResourceModal();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [selectedDocument, selectedSection, selectedResource]);

    useEffect(() => {
        const hasModal = Boolean(selectedResource || selectedSection || selectedDocument);
        document.body.style.overflow = hasModal ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedResource, selectedSection, selectedDocument]);

    const renderDocumentList = (documents: DocumentItem[], label = "Document") => (
        <div className="divide-y divide-[#e8e4dc]">
            {documents.length === 0 ? (
                <div className="px-6 py-10 text-center sm:px-8">
                    <p className="m-0 font-sans text-[12px] leading-[1.8] text-[#888]">
                        No clarification documents are currently listed under this section.
                    </p>
                </div>
            ) : (
                documents.map((document, index) => (
                    <button
                        key={`${document.title}-${index}`}
                        type="button"
                        onClick={() => openDocument(document)}
                        className="group flex w-full items-center gap-4 px-6 py-4 text-left transition-all duration-300 hover:bg-[#faf7f2] sm:px-8 sm:py-[18px]"
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ddd8cf] bg-white font-serif text-[11px] text-[#999] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9a917f]">
                                {label}
                            </span>
                            <span className="mt-1 block font-serif text-[16px] leading-[1.4] text-[#20235A] transition-colors duration-300 group-hover:text-[#8f7746] sm:text-[17px]">
                                {document.title}
                            </span>
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#20235A] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8f7746]">
                            <ArrowUpRight size={17} />
                        </span>
                    </button>
                ))
            )}
        </div>
    );

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2]">
                <section className="relative min-h-[72vh] overflow-hidden bg-[#20235A]">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-20 top-20 h-[420px] w-[420px] rotate-45 border border-[#D2B87C]/20" />
                        <div className="absolute -right-10 top-32 h-[330px] w-[330px] rotate-45 border border-[#D2B87C]/10" />
                        <div className="absolute bottom-[-160px] left-[-100px] h-[420px] w-[420px] rotate-45 border border-white/10" />
                    </div>
                    <div className="relative mx-auto flex min-h-[72vh] max-w-[1440px] flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
                        <div className="mb-10 flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                            <span>Home</span><ChevronRight size={12} />
                            <span className="text-[#D2B87C]">IQAC & NAAC</span>
                        </div>
                        <div className="max-w-[1000px]">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-14 bg-[#D2B87C]" />
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">Institutional Quality</span>
                            </div>
                            <h1 className="max-w-[950px] font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.025em] text-white sm:text-[64px] lg:text-[82px]">
                                Quality, Assurance
                                <span className="block text-[#D2B87C]">& Continuous Improvement</span>
                            </h1>
                            <p className="mt-8 max-w-[650px] font-sans text-[14px] leading-[1.9] text-white/65 sm:text-[16px]">
                                Explore the institutional quality assurance framework of NCERC, including IQAC activities, accreditation documents, annual reports and supporting quality documentation.
                            </p>
                        </div>
                        <div className="mt-16 flex items-center gap-5">
                            <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]"><ShieldCheck size={21} strokeWidth={1.4} /></div>
                            <div>
                                <p className="m-0 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">NCERC</p>
                                <p className="m-0 mt-1 font-serif text-[18px] text-white">Internal Quality Assurance Cell</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-16 lg:py-28">
                        <div>
                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">About IQAC</span>
                            <h2 className="mt-5 max-w-[440px] font-serif text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-[#20235A] sm:text-[46px]">
                                Institutional quality,<span className="block text-[#8f7746]">documented.</span>
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <p className="max-w-[700px] font-sans text-[15px] leading-[2] text-[#666] sm:text-[17px]">
                                The Internal Quality Assurance Cell serves as an important institutional mechanism for maintaining and continuously improving academic and administrative quality. Access reports, meeting minutes, action taken reports and other quality assurance documents through the resources below.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#ddd9d1] pb-8 sm:flex-row sm:items-end">
                            <div>
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">Quality Resources</span>
                                <h2 className="mt-4 font-serif text-[38px] font-normal leading-tight text-[#20235A] sm:text-[48px]">Accreditation & Documentation</h2>
                            </div>
                            <p className="max-w-[360px] font-sans text-[12px] leading-[1.8] text-[#888]">Select a resource to view its details and access the corresponding institutional documentation.</p>
                        </div>

                        <div className="border-t border-[#dcd8d0]">
                            {resources.map((item) => {
                                const Icon = item.icon;
                                const count = item.documents?.length ?? item.sections?.reduce((sum, section) => sum + section.documents.length, 0) ?? 0;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => openResource(item)}
                                        className="group relative grid min-h-[125px] w-full grid-cols-[42px_minmax(0,1fr)_40px] items-center gap-4 border-b border-[#e4e1db] bg-transparent px-1 py-6 text-left transition-all duration-300 hover:bg-white hover:px-4 sm:grid-cols-[55px_55px_minmax(0,1fr)_45px] sm:gap-4 sm:px-2 lg:grid-cols-[70px_60px_minmax(0,1fr)_50px] lg:gap-[22px] lg:px-2"
                                    >
                                        <span className="font-serif text-[13px] text-[#b2ada3] transition-colors duration-300 group-hover:text-[#8f7746]">{item.id}</span>
                                        <span className="relative flex h-11 w-11 items-center justify-center border border-[#dcd8d0] bg-[#faf7f2] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C] sm:h-12 sm:w-12">
                                            <Icon size={21} strokeWidth={1.4} />
                                            {count > 0 && <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D2B87C] px-1 font-sans text-[8px] font-bold text-[#20235A]">{count}</span>}
                                        </span>
                                        <span className="min-w-0">
                                            <span className="mb-2 block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9a917f]">{item.category}</span>
                                            <span className="block font-serif text-[24px] font-normal leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8f7746] sm:text-[27px]">{item.title}</span>
                                            <span className="mt-2 block max-w-[680px] font-sans text-[12px] leading-[1.7] text-[#888]">{item.description}</span>
                                        </span>
                                        <span className="flex h-10 w-10 items-center justify-center border border-[#ddd8ce] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
                            <div>
                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">Continuous Improvement</span>
                                <h2 className="mt-5 max-w-[760px] font-serif text-[40px] font-normal leading-[1.1] text-white sm:text-[54px]">Building a culture of<span className="block text-[#D2B87C]">continuous improvement.</span></h2>
                            </div>
                            <div className="flex h-20 w-20 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]"><ShieldCheck size={31} strokeWidth={1.2} /></div>
                        </div>
                    </div>
                </section>
            </main>

            {/* RESOURCE / SECTION MODAL */}
            {selectedResource && !selectedSection && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#11162f]/80 px-4 py-6 backdrop-blur-sm" onClick={closeResourceModal}>
                    <div role="dialog" aria-modal="true" className="relative max-h-[90vh] w-full max-w-[900px] overflow-hidden bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                        <div className="flex items-start justify-between gap-6 border-b border-[#e5e1d9] bg-[#faf7f2] px-6 py-5 sm:px-8">
                            <div>
                                <span className="mb-2 block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8f7746]">{selectedResource.category}</span>
                                <p className="m-0 font-serif text-[22px] text-[#20235A]">{selectedResource.title}</p>
                                <p className="mt-2 max-w-[700px] font-sans text-[11px] leading-[1.7] text-[#888]">{selectedResource.description}</p>
                            </div>
                            <button type="button" onClick={closeResourceModal} aria-label="Close" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ddd8cf] text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-white"><X size={17} /></button>
                        </div>

                        {selectedResource.sections ? (
                            <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-6">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {selectedResource.sections.map((section, index) => (
                                        <button key={section.title} type="button" onClick={() => setSelectedSection(section)} className="group flex min-h-[100px] items-center gap-4 border border-[#e2ded6] bg-white p-5 text-left transition-all duration-300 hover:border-[#20235A] hover:bg-[#faf7f2]">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A] font-serif text-[12px] text-[#D2B87C]">{String(index + 1).padStart(2, "0")}</span>
                                            <span className="min-w-0 flex-1">
                                                <span className="block font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a917f]">{section.documents.length} {section.documents.length === 1 ? "Document" : "Documents"}</span>
                                                <span className="mt-1 block font-serif text-[18px] leading-[1.3] text-[#20235A] group-hover:text-[#8f7746]">{section.title}</span>
                                            </span>
                                            <ChevronRight size={18} className="shrink-0 text-[#20235A] transition-transform group-hover:translate-x-1" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="max-h-[68vh] overflow-y-auto">
                                {renderDocumentList(selectedResource.documents ?? [], selectedResource.title === "IQAC" ? "IQAC Document" : selectedResource.title === "AQAR" ? "AQAR Report" : "Institutional Document")}
                            </div>
                        )}

                        <div className="flex items-center justify-between gap-4 border-t border-[#e5e1d9] bg-white px-6 py-5 sm:px-8">
                            <p className="m-0 font-sans text-[10px] leading-[1.6] text-[#888]">Select a document or section to continue.</p>
                            <button type="button" onClick={closeResourceModal} className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#777] transition-colors hover:text-[#20235A]">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* SECTION DOCUMENT MODAL */}
            {selectedResource && selectedSection && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#11162f]/85 px-4 py-6 backdrop-blur-sm" onClick={() => setSelectedSection(null)}>
                    <div role="dialog" aria-modal="true" className="relative max-h-[90vh] w-full max-w-[900px] overflow-hidden bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                        <div className="flex items-start justify-between gap-6 border-b border-[#e5e1d9] bg-[#faf7f2] px-6 py-5 sm:px-8">
                            <div>
                                <span className="mb-2 block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8f7746]">{selectedResource.title}</span>
                                <p className="m-0 font-serif text-[22px] text-[#20235A]">{selectedSection.title}</p>
                            </div>
                            <button type="button" onClick={() => setSelectedSection(null)} aria-label="Back" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#ddd8cf] text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-white"><X size={17} /></button>
                        </div>
                        <div className="max-h-[68vh] overflow-y-auto">{renderDocumentList(selectedSection.documents, "Clarification Document")}</div>
                        <div className="flex items-center justify-between gap-4 border-t border-[#e5e1d9] bg-white px-6 py-5 sm:px-8">
                            <button type="button" onClick={() => setSelectedSection(null)} className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#777] transition-colors hover:text-[#20235A]">Back to {selectedResource.title}</button>
                            <button type="button" onClick={closeAllModals} className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#777] transition-colors hover:text-[#20235A]">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* DOCUMENT / PDF MODAL */}
            {selectedDocument && (
                <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-[#11162f]/90 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-6" onClick={closeDocument}>
                    <div role="dialog" aria-modal="true" className="relative flex h-[94vh] w-full max-w-[1250px] flex-col overflow-hidden bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                        <div className="flex min-h-[64px] items-center justify-between gap-4 border-b border-[#e5e1d9] bg-[#20235A] px-4 sm:px-6">
                            <div className="min-w-0">
                                <span className="block truncate font-serif text-[16px] text-white sm:text-[18px]">{selectedDocument.title}</span>
                                <span className="block font-sans text-[8px] uppercase tracking-[0.14em] text-white/45">NCERC Document Viewer</span>
                            </div>
                            <div className="flex shrink-0 items-center gap-2">
                                <a href={selectedDocument.href} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 border border-[#D2B87C]/50 px-3 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-[#D2B87C] no-underline transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:flex"><span>Open in New Tab</span><ArrowUpRight size={14} /></a>
                                <button type="button" onClick={closeDocument} aria-label="Close document viewer" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white hover:text-[#20235A]"><X size={17} /></button>
                            </div>
                        </div>
                        <div className="min-h-0 flex-1 bg-[#f2f2f0]">
                            {isPdf(selectedDocument.href) ? (
                                <iframe title={selectedDocument.title} src={selectedDocument.href} className="h-full w-full border-0" />
                            ) : (
                                <div className="flex h-full items-center justify-center p-6 text-center">
                                    <div className="max-w-[560px]">
                                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-[#20235A] text-[#D2B87C]"><FileText size={24} /></div>
                                        <h3 className="font-serif text-[24px] text-[#20235A]">This file cannot be previewed in the browser.</h3>
                                        <p className="mt-3 font-sans text-[13px] leading-[1.8] text-[#777]">This document is provided as a {selectedDocument.href.toLowerCase().includes(".xlsx") ? "spreadsheet" : selectedDocument.href.toLowerCase().includes(".zip") ? "ZIP archive" : "document"}. Use the button below to open it in a new tab.</p>
                                        <a href={selectedDocument.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 bg-[#20235A] px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"><span>Open File</span><ArrowUpRight size={17} /></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
};
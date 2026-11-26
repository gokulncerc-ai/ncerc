"use client";
import { useState } from "react";
import { ChevronDown, Users } from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentNav/DepartmentNav";
import FAQ from "../FAQ.tsx/page";
type Row = [number, string, string, string]; // [Sl No, Name, Enrollment No., Employer]

type Batch = {
  label: string;
  rows: Row[];
};

const batches: Batch[] = [
  {
    label: "Batch 2023 - 2025",
    rows: [
      [1, "Alanudh", "NCE23MBA02", "KGISL"],
      [2, "Anjana P Jayan", "NCE23MBA04", "Academor"],
      [3, "Ankitha Hari", "NCE23MBA06", "Internsup"],
      [4, "Anusha A", "NCE23MBA09", "Academor"],
      [5, "Gopika P", "NCE23MBA19", "Synergy Group"],
      [6, "Kizhakethil Joby Joel", "NCE23MBA23", "ESAF Bank"],
      [7, "Kalkki Parvathi R", "NCE23MBA22", "Infoblox"],
      [8, "Megha P G", "NCE23MBA24", "Academor"],
      [9, "Mriduna M", "NCE23MBA25", "KGISL"],
      [10, "Nakul N Kutty", "NCE23MBA29", "Redlands"],
      [11, "Pooja Prabha P", "NCE23MBA34", "Enercon"],
      [12, "Prajeesh Kumar", "NCE23MBA35", "Sureti Insurance Marketing Pvt Ltd"],
      [13, "Rajana P", "NCE23MBA37", "Gloinnt Solutions Pvt Ltd"],
      [14, "Rana Fathima T D", "NCE23MBA38", "Academor"],
      [15, "Smruthi K", "NCE23MBA47", "KGISL"],
      [16, "Vaisak Balan Nair", "NCE23MBA57", "ESAF Bank"],
      [17, "Gopika M", "NCE23MBA18", "Academor"],
      [18, "Risana K", "NCE23MBA39", "Academor"],
      [19, "Siya S", "NCE23MBA46", "Academor"],
      [20, "Sowmya M", "NCE23MBA50", "KGISL"],
      [21, "Fathima Roshna", "NCE23MBA15", "Academor"],
      [22, "Sradhalakshmi PS", "NCE23MBA51", "Jobin & Jismi Private Ltd"],
      [23, "Silpa M J", "NCE23MBA45", "Meteoros Automation"],
      [24, "Gokul G S", "NCE23MBA17", "Steel Industrial Kerala Ltd"],
      [25, "Aparna C A", "NCE23MBA10", "Dizad Builders and Interiors"],
      [26, "Preneesh P U", "NCE23MBA36", "Geojit"],
      [27, "Shyam Prakash", "NCE23MBA43", "Desco Homestyle Pvt Ltd"],
      [28, "Rohini S", "NCE23MBA40", "Kavalakat Agencies"],
      [29, "Nandana P Nair", "NCE23MBA30", "Axis Bank"],
      [30, "Nimisha U", "NCE23MBA32", "Axis Bank"],
      [31, "Sibilfarhan V A", "NCE23MBA44", "Niva Bupa"],
      [32, "Anupama K R", "NCE23MBA08", "Academor"],
      [33, "Sreelekha P", "NCE23MBA54", "Sureti Insurance Marketing Pvt Ltd"],
      [34, "Sreejitha K", "NCE23MBA52", "Zesty Beanz Technologies (P) Ltd"],
      [35, "Sheniya M", "NCE23MBA42", "Academor"],
      [36, "Nair Shreya Mohandas", "NCE23MBA28", "Enercon Asia Pacific Systems Pvt Ltd"],
      [37, "Bhavana Remesh", "NCE23MBA12", "Zesty Beanz Technologies (P) Ltd"],
      [38, "Dhanya K", "NCE23MBA13", "Enercon Asia Pacific Systems Pvt Ltd"],
      [39, "Afeefa MS", "NCE23MBA01", "Kenvora Global Solutions"],
      [40, "Muhsina Thasneem T", "NCE23MBA26", "Zesty Beanz Technologies (P) Ltd"],
      [41, "Fathima Sajina B", "NCE23MBA16", "Enercon Asia Pacific Systems Pvt Ltd"],
      [42, "Nimshiya N", "NCE23MBA33", "MYG India (P) Ltd"],
      [43, "Nair Aaditya Anandkumar", "NCE23MBA27", "Internsup"],
      [44, "Gouri M", "NCE23MBA20", "Sureti Insurance Marketing Pvt Ltd"],
      [45, "Anjana S", "NCE23MBA05", "Academor"],
      [46, "Farseena C K", "NCE23MBA14", "Sureti Insurance Marketing Pvt Ltd"],
      [47, "Jeevan Lal Joy P.J", "NCE23MBA21", "Learnfluence Education Limited"],
      [48, "Sreelakshmi V S", "NCE23MBA53", "Internsup"],
      [49, "Vidya P V", "NCE23MBA58", "Info Apps"],
      [50, "Aswin C Balan", "NCE23MBA11", "Internsup"],
      [51, "Anugraha A", "NCE23MBA07", "Internsup"],
      [52, "Nandhana M", "NCE23MBA31", "Zesty Beanz Technologies (P) Ltd"],
      [53, "Suraj S Nair", "NCE23MBA56", "SHF Design Engineering Pvt Ltd"],
    ],
  },
  {
    label: "Batch 2022 - 2024",
    rows: [
      [1, "Abhijith P U", "NCE22MBA03", "Niva Health Insurance"],
      [2, "Anamika U", "NCE22MBA10", "Niva Health Insurance"],
      [3, "Aswath P V", "NCE22MBA19", "Niva Health Insurance"],
      [4, "Amaljith M", "NCE22MBA09", "Elanadu Milk Pvt Ltd"],
      [5, "Aishwarya Santhosh K S", "NCE22MBA06", "ESAF Small Finance Bank"],
      [6, "Akhil M C", "NCE22MBA07", "Abad Fisheries Pvt Ltd"],
      [7, "Anu P Lawrence", "NCE22MBA13", "Niva Health Insurance"],
      [8, "Devika Krishna J", "NCE22MBA22", "Niva Health Insurance"],
      [9, "Gopika V", "NCE22MBA57", "Manappuram Finance Ltd"],
      [10, "Meghna Santhosh", "NCE22MBA35", "P K Das Liberal College of Arts and Science"],
      [11, "Sangeetha C G", "NCE22MBA47", "Core Intertech Services Pvt Ltd"],
      [12, "Shilpa Sasidharan", "NCE22MBA50", "Kompetenzen Technologies"],
      [13, "Sreelakshmi K P", "NCE22MBA51", "Niva Health Insurance"],
      [14, "Sruthymol T L", "NCE22MBA53", "Ace Money"],
      [15, "Shyam Krishna A", "NCE22MBA56", "Upfin Fintech Pvt Ltd"],
      [16, "Arya Ravindran", "NCE22MBA17", "Elanadu Milk Pvt Ltd"],
      [17, "Vineetha P V", "NCE22MBA59", "TCS"],
      [18, "Anooj K H", "NCE22MBA12", "Elanadu Milk Pvt Ltd"],
      [19, "Jephin Joseph", "NCE22MBA30", "HMD Woodworks"],
      [20, "Jaseela K A", "NCE22MBA29", "Dufry India Retail Pvt Ltd"],
      [21, "Aadithya K S", "NCE22MBA01", "Executive Events"],
      [22, "Benziya P Beninu", "NCE22MBA21", "Ginger Consultancy Services LLP"],
      [23, "Vishnupriya V", "NCE22MBA60", "United Group of Initiatives"],
      [24, "Harsha M", "NCE22MBA27", "Core Intertech Services Pvt Ltd"],
      [25, "Asna K Y", "NCE22MBA18", "Lantern Fiber Electronic Instruments"],
      [26, "Aiswarya K M", "NCE22MBA05", "Core Intertech Services Pvt Ltd"],
      [27, "Majidha Farhana", "NCE22MBA32", "AETS Development Centre"],
      [28, "Suji S", "NCE22MBA54", "Place Mantra Pvt Ltd"],
      [29, "Mohammad Mushthaq", "NCE22MBA36", "Place Mantra Pvt Ltd"],
      [30, "Rizwana P", "NCE22MBA43", "Place Mantra Pvt Ltd"],
      [31, "Hasna P", "NCE22MBA28", "Place Mantra Pvt Ltd"],
      [32, "Swathy", "NCE22MBA55", "Infosage"],
      [33, "Vidya", "NCE22MBA58", "TCS"],
      [34, "Athira A", "NCE22MBA20", "Core Intertech Services Pvt Ltd"],
      [35, "Abhay N", "NCE22MBA02", "Descpro Technologies Pvt Ltd"],
      [36, "Aparna V M", "NCE22MBA14", "Core Intertech Services Pvt Ltd"],
      [37, "Afrah Ashref A A", "NCE22MBA04", "Codebrucke Pvt Ltd"],
      [38, "Amal Ganga", "NCE22MBA08", "Infolks Group"],
      [39, "Anjana P J", "NCE22MBA11", "Apricot Design Factory"],
      [40, "Arifa K P", "NCE22MBA16", "Niva Health Insurance"],
      [41, "Megha M", "NCE22MBA34", "Niva Health Insurance"],
      [42, "Orville Don", "NCE22MBA40", "Niva Health Insurance"],
      [43, "Neha K", "NCE22MBA38", "True Visory \u2013 The Learning Academy"],
      [44, "Fathima Rina", "NCE22MBA24", "Hush Lush Events Pvt Ltd"],
      [45, "Sreelakshmi Ravi", "NCE22MBA52", "Consolidated Shipping Line (India) Pvt Ltd"],
      [46, "Sandra P S", "NCE22MBA46", "Muthoottu Mini Financers"],
      [47, "Fathimathul Irfana", "NCE22MBA25", "P K Das IMS"],
      [48, "Resina Y", "NCE22MBA42", "Jawaharlal College of Engineering & Technology, Lakkidi"],
      [49, "Nimisha C", "NCE22MBA39", "Nehru College of Architecture, Lakkidi"],
      [50, "Shibina A", "NCE22MBA49", "Niva Health Insurance"],
      [51, "Marakkamthodi Hajna", "NCE22MBA33", "P K Das Liberal College of Arts and Science"],
    ],
  },
  {
    label: "Batch 2021 - 2023",
    rows: [
      [1, "Ananthukrishna G", "NCE21MBA10", "CSB Bank"],
      [2, "Anjana M", "NCE21MBA13", "Aabasoft Business Services Pvt Ltd"],
      [3, "Aparna T G", "NCE21MBA17", "ICICI Bank"],
      [4, "Fathima Lubna", "NCE21MBA26", "Ample Technologies Pvt Ltd"],
      [5, "Jisni K P", "NCE21MBA30", "MS Staffing Solution"],
      [6, "Neeraja M R", "NCE21MBA37", "Factor Human Resource Pvt Ltd"],
      [7, "Negha P", "NCE21MBA39", "Astin Consultancy Services"],
      [8, "Nikhil C", "NCE21MBA40", "Bandhan Bank"],
      [9, "Nizar C B", "NCE21MBA42", "Ehan Al Arabia Contracting Co. Ltd"],
      [10, "Nithi Krishna C U", "NCE21MBA43", "Ijona Technologies Pvt Ltd"],
      [11, "Sachethan", "NCE21MBA47", "United Group of Initiatives"],
      [12, "Sangeetha Lakshmanan", "NCE21MBA48", "P K Das Liberal College of Arts and Science"],
      [13, "Sisira P", "NCE21MBA51", "Sutherland Mortgage Svcs Inc"],
      [14, "Sneha M", "NCE21MBA52", "Six Sigma"],
      [15, "Thasleem P S", "NCE21MBA57", "Indian Co-operative Credit Society Ltd"],
      [16, "Vinija George", "NCE21MBA60", "Cyberproof India Private Limited"],
      [17, "Anagha P S", "NCE21MBA08", "Moulana Hospital"],
      [18, "Akshay K", "NCE21MBA05", "Developer Group India Private Limited"],
      [19, "Akhila K", "NCE21MBA04", "ICICI Bank"],
      [20, "Stelcy Davis K", "NCE21MBA55", "ICICI Bank"],
      [21, "Megha Mahesh P", "NCE21MBA34", "Cybrosys Technology"],
      [22, "Anagha K", "NCE21MBA07", "Altos Technology"],
      [23, "Archana Nair", "NCE21MBA19", "Alight Solutions"],
      [24, "Nimna Ayshath M", "NCE21MBA41", "Grand Bajaj"],
      [25, "Fathima Najilath", "NCE21MBA27", "Sahakar Smart Labs"],
      [26, "Angelin P V", "NCE21MBA11", "Skybertech IT Innovations Pvt Ltd"],
      [27, "Adheep S", "NCE21MBA01", "Airtel"],
      [28, "Anol Justin O", "NCE21MBA14", "Factor Human Resource Pvt Ltd"],
      [29, "Aiswarya A", "NCE21MBA02", "Quest Global"],
      [30, "Ajaykrishnan P N", "NCE21MBA03", "National Traders"],
      [31, "Anand", "NCE21MBA09", "Airtel"],
      [32, "Anjali Suresh", "NCE21MBA12", "ICICI Bank"],
      [33, "Anusha K", "NCE21MBA16", "ICICI Bank"],
      [34, "Arathi Ravikumar T", "NCE21MBA18", "Developer Group India Pvt Ltd"],
      [35, "Archana R", "NCE21MBA20", "CSB Bank"],
      [36, "Fasil M", "NCE21MBA25", "Factor Human Resources Pvt Ltd"],
      [37, "Biniya Shaji", "NCE21MBA22", "Factor Human Resources Pvt Ltd"],
      [38, "Neethumol I K", "NCE21MBA38", "Factor Human Resources Pvt Ltd"],
      [39, "Karthik R", "NCE21MBA31", "Aabasoft Business Services Pvt Ltd"],
      [40, "Reshma G", "NCE21MBA45", "Core Intertech Services Pvt Ltd"],
      [41, "Anumol P M", "NCE21MBA15", "Grand Bajaj"],
      [42, "Majidha K", "NCE21MBA33", "P K Das Liberal College of Arts and Science"],
      [43, "Sruthi M", "NCE21MBA54", "Bandhan Bank"],
      [44, "Sreelakshmi P", "NCE21MBA53", "ICICI Bank"],
      [45, "Dharsana S", "NCE21MBA24", "Popular Groups Pvt Ltd"],
    ],
  },
  {
    label: "Batch 2020 - 2022",
    rows: [
      [1, "Kavya Unnikrishnan", "NCE20MBA26", "Denave India Pvt Ltd"],
      [2, "Abdul Basith C S", "NCE20MBA02", "Bizpole Business Solution Pvt Ltd"],
      [3, "Dhwani S Nair", "NCE20MBA15", "Bizpole Business Solution Pvt Ltd"],
      [4, "Greeshma Krishnan", "NCE20MBA17", "Grote Electronics"],
      [5, "P Megha Anand", "NCE20MBA33", "HTIC Global"],
      [6, "Nikhila Binumon", "NCE20MBA30", "NewAgeSys Solutions (P) Ltd"],
      [7, "Shafna Jasmin K", "NCE20MBA38", "Meta Algorithm Solutions Pvt Ltd"],
      [8, "Sruthi T P", "NCE20MBA44", "Foxconn Hon Hai Technology India Mega Development Pvt Ltd"],
      [9, "Abhishek V", "NCE20MBA04", "EXL"],
      [10, "Joffy Jose", "NCE20MBA22", "Bizpole Business Solution Pvt Ltd"],
      [11, "Subhalakshmi K", "NCE20MBA24", "Unimoni Exchange"],
      [12, "Arya M S", "NCE20MBA13", "Bizpole Business Solution Pvt Ltd"],
      [13, "Harishma K G", "NCE20MBA18", "Birnan & Bond"],
      [14, "Prajitha K Nair", "NCE20MBA34", "Jaro Education"],
      [15, "Pavithran", "NCE20MBA32", "Think & Learn Pvt Ltd"],
      [16, "Haritha H", "NCE20MBA19", "Bizpole Business Solution Pvt Ltd"],
      [17, "Mini R", "NCE20MBA27", "CSB Bank"],
      [18, "Abhijith A B", "NCE20MBA03", "Bizpole Business Solution Pvt Ltd"],
      [19, "Aneesa K A", "NCE20MBA09", "ICICI Bank"],
      [20, "Aysha Anshida M P", "NCE20MBA14", "EYGBS (India) LLP"],
      [21, "Aiswarya N", "NCE20MBA05", "CSB Bank"],
      [22, "Akhila V Rajan", "NCE20MBA06", "CSB Bank"],
      [23, "Akshaya K", "NCE20MBA07", "Bizpole Business Solution Pvt Ltd"],
      [24, "Anjali P", "NCE20MBA10", "HTIC Global"],
      [25, "Anju T", "NCE20MBA11", "Bizpole Business Solution Pvt Ltd"],
      [26, "Divya P A", "NCE20MBA16", "NewAgeSys Solutions (P) Ltd"],
      [27, "Hridya Hari", "NCE20MBA20", "Accenture PLC"],
      [28, "Jerin George", "NCE20MBA21", "EXL"],
      [29, "Jyothi M S", "NCE20MBA23", "EXL"],
      [30, "Kavya K", "NCE20MBA25", "EXL"],
      [31, "Reshmi Ramachandran", "NCE20MBA36", "P K Das IMS"],
      [32, "Sibi Baby", "NCE20MBA42", "HTIC Global"],
      [33, "Sherin Jose", "NCE20MBA41", "HTIC Global"],
      [34, "Anaswara P", "NCE20MBA08", "CSB Bank"],
    ],
  },
];

function BatchAccordion({ batch, defaultOpen = false }: { batch: Batch; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden border border-[#20235A]/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition hover:bg-[#F2EFE8] sm:px-9"
      >
        <span className="font-serif text-xl text-[#20235A] sm:text-2xl">
          {batch.label}
        </span>

        <span className="flex items-center gap-3 text-sm text-[#8F7746]">
          {batch.rows.length} placed
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="overflow-x-auto border-t border-[#20235A]/10">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#F2EFE8] text-xs font-semibold uppercase tracking-wide text-[#8F7746]">
                <th className="w-16 px-6 py-3">Sl No</th>
                <th className="px-6 py-3">Name of the Student Placed</th>
                <th className="px-6 py-3">Enrollment No.</th>
                <th className="px-6 py-3">Name of the Employer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#20235A]/5">
              {batch.rows.map(([slNo, name, enrollment, employer]) => (
                <tr key={enrollment} className="bg-white">
                  <td className="px-6 py-3 text-[#20235A]/50">{slNo}</td>
                  <td className="px-6 py-3 font-medium text-[#20235A]">{name}</td>
                  <td className="px-6 py-3 text-[#1E1917]/70">{enrollment}</td>
                  <td className="px-6 py-3 text-[#1E1917]/70">{employer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function MBAPlacementPage() {
  const totalPlaced = batches.reduce((sum, batch) => sum + batch.rows.length, 0);

  return (
    <>
      <SiteHeader />

      <main className="bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="flex min-h-[460px] flex-col justify-center py-20 lg:py-28">
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <span className="h-px w-12 bg-[#D2B87C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                  Nehru School of Management
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                MBA
                <span className="block text-[#D2B87C]">Placement Records</span>
              </h1>

              <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Batch-wise placements &bull; Employers &bull; Enrollment records
              </p>

              <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                A record of MBA students placed across leading organizations,
                batch by batch, maintained by Nehru School of Management.
              </p>

              <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                  <Users className="h-5 w-5 text-[#D2B87C]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    {totalPlaced}+ Students Placed
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    Across {batches.length} graduating batches
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/20" />
        </section>

        <DepartmentNavigation />

        {/* =========================================================
            PLACEMENT RECORDS
        ========================================================== */}
        <section id="placements" className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
            <div className="mb-14 max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8F7746]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Placements
                </span>
              </div>

              <h2 className="font-serif text-[40px] leading-[1.06] tracking-[-0.025em] text-[#20235A] sm:text-[52px]">
                Batch-wise placement records.
              </h2>
            </div>

            <div className="space-y-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10">
              {batches.map((batch, index) => (
                <BatchAccordion key={batch.label} batch={batch} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}
      
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}
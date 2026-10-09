import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, User, PhoneCall } from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const centers = [
  {
    name: "Nehru College",
    contact: "Corporate Office Kerala",
    email: "admissions@ncerc.ac.in",
    address: "Nila Gardens, Pampady, Thiruvilwamala, Thrissur - 680588",
    phones: ["7511115588", "7510224777", "04884284000"],
  },
  {
    name: "Jawaharlal College",
    contact: "Mr. Suresh M.",
    email: "jcetadmissions@nehrucolleges.com",
    address: "Jawahar Gardens, Lakkidi, Mangalam (PO), Palakkad - 679301",
    phones: ["9605771555", "7510331777", "04662344800", "04662405070"],
  },
  {
    name: "Nehru College",
    contact: "Corporate Office",
    email: "admissions@nehrucolleges.com",
    address:
      "#451-D, Palakkad Road, Kuniamuthur, Coimbatore - 641 008, Tamil Nadu, India",
    phones: ["04222251147", "04222251148"],
  },
  {
    name: "Palakkad",
    contact: "Mr. Riyaz Mohammed E",
    address:
      "First Floor, Managalam Tower, Opp. Town Bus Stand, Palakkad - 678014",
    phones: ["9656101777"],
  },
  {
    name: "Pattambi",
    contact: "Soumya Govindankutty",
    address: "First Floor, Trade Centre, Palakkad Road, Melepattambi",
    phones: ["9656101782"],
  },
  {
    name: "Thrissur",
    contact: "Savitha Muraleedharan",
    address:
      "Second Floor, Kalliyath Royal Square, Near Kalyan Silks, Palace Road, Thrissur - 680020",
    phones: ["9656101778"],
  },
  {
    name: "Kottayam",
    contact: "Sandra Noby",
    address:
      'Room No: 102, Ground Floor, Surya Guest Line, Near "Thirunakkara Temple", Thekkenada, Kottayam - 686001',
    phones: ["9656101771"],
  },
  {
    name: "Ernakulam",
    contact: "Sheeja",
    address:
      "1st Floor, North Square, Paramara Road, Opp. Town Hall, Ernakulam - 682018",
    phones: ["9656199777"],
  },
  {
    name: "Kannur",
    contact: null,
    address:
      "No. C-7 SB-972, Alpha Chambers Complex, Opp. Canara Bank, South Bazar, Kannur - 2",
    phones: ["9656101796"],
  },
  {
    name: "Kozhikode",
    contact: null,
    address:
      "3rd Floor, Kalpaka Bazar, Opp. Crown Theater, Near Second Gate, Calicut",
    phones: ["9072073777"],
  },
  {
    name: "Malappuram",
    contact: "Anshad",
    address:
      "Room No: 15/72, Opp. KSRTC Bus Stand/Town Hall, Manjeri Road, UP Hill, Malappuram",
    phones: ["9656101787"],
  },
  {
    name: "Pollachi",
    contact: "Se. M. Kanagarathinam",
    email: "pol@nehrucolleges.com",
    address:
      "No. 47, Lourd Church Complex (Opp. Union Office), Palakkad Road, Pollachi - 642001",
    phones: ["8220567733"],
  },
  {
    name: "Kovilpalayam",
    contact: "Ms. Surya Prabha",
    email: "kovil@nehrucolleges.com",
    address:
      "1-185/4, VCR Complex, CBE Main Road, Opp. Aruljothi Pazhamudir Nilayam, Kovilpalayam - 642110",
    phones: ["9500008854"],
  },
  {
    name: "Nagercoil",
    contact: "Mr. Mano Raja Paul",
    email: "ngcl@nehrucolleges.com",
    address: "DDJ Complex, Opp. to Vadasery Bus Stand, Nagercoil - 629001",
    phones: ["7358999258"],
  },
  {
    name: "Coonoor",
    contact: "Mr. Joseph",
    email: "ooty@nehrucolleges.com",
    address:
      "Primo Frame, 9 Davis Square, Bedford, Coonoor, The Nilgiris - 643101",
    phones: ["8248371837"],
  },
  {
    name: "Nehru Institute of Engineering & Technology",
    contact: "Mr. S. Arunkumar",
    email: "nietadmission@nehrucolleges.com",
    address: '"Nehru Garden", T M Palayam, Coimbatore - 641105',
    phones: ["9994339396"],
  },
  {
    name: "Nehru Corporate Placements & Industry Relations",
    contact: "Mr. Suresh M",
    email: "ncpir@nehrucolleges.com",
    address: '"Nehru Garden", T M Palayam, Coimbatore - 641105',
    phones: ["7358999256"],
  },
  {
    name: "Nehru Institute of Technology",
    contact: "Mr. S. Satheeshkumar",
    email: "nitadmissions@nehrucolleges.com",
    address: '"Jawahar Garden", Kaliapuram, Coimbatore - 641105',
    phones: ["9092612189"],
  },
];

const relatedLinks = [
  {
    label: "Admission Centers",
    href: "/admission/admission-center",
  },
  {
    label: "Our Colleges",
    href: "http://nehrucolleges.com",
    external: true,
  },
  {
    label: "Courses Offered",
    href: "/academics/courses",
  },
  {
    label: "Downloads & Forms",
    href: "/academics/download",
  },
  {
    label: "Placements Cell",
    href: "/admission/admission-center/placement-cell",
  },
];

function AdmissionSidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-serif text-lg font-normal text-[#20235A]">
        Related <span className="italic text-[#D2B87C]">Links</span>
      </h3>

      <div className="mt-2 h-0.5 w-10 bg-[#D2B87C]" />

      <ul className="mt-5 space-y-3">
        {relatedLinks.map((link) =>
          link.external ? (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-[#20235A]"
              >
                <ArrowRight
                  size={15}
                  className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1"
                />
                <span>{link.label}</span>
              </a>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-[#20235A]"
              >
                <ArrowRight
                  size={15}
                  className="shrink-0 text-[#D2B87C] transition-transform group-hover:translate-x-1"
                />
                <span>{link.label}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default function AdmissionCentrePage() {
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
              Admissions
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Admission <span className="italic text-[#D2B87C]">Centres</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-slate-50/50">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              
              {/* Main Column */}
              <div className="lg:col-span-9">
                
                {/* Hotline Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-[#20235A] p-6 sm:p-8 text-white shadow-md border-l-4 border-l-[#D2B87C]">
                  <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full border border-[#D2B87C]/20" />
                  
                  <div className="flex items-center gap-3">
                    <PhoneCall size={20} className="text-[#D2B87C]" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#D2B87C]">
                      24/7 Support Desk
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <span className="text-xs uppercase text-slate-300 font-medium">Kerala Region</span>
                      <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                        +91 96560 00005 <span className="text-[#D2B87C] font-normal">|</span> 960577 1555
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <span className="text-xs uppercase text-slate-300 font-medium">Tamil Nadu Region</span>
                      <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                        +91 96003 33152 <span className="text-[#D2B87C] font-normal">|</span> 887000 5337
                      </p>
                    </div>
                  </div>
                </div>

                {/* Centers Table - Desktop */}
                <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm xl:block">
                  <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-[#20235A] text-white">
                        <th className="px-5 py-4 font-serif text-base font-normal tracking-wide">Centre</th>
                        <th className="px-5 py-4 font-serif text-base font-normal tracking-wide">
                          Contact Person & Email
                        </th>
                        <th className="px-5 py-4 font-serif text-base font-normal tracking-wide">Address</th>
                        <th className="px-5 py-4 font-serif text-base font-normal tracking-wide">Phone Numbers</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200/80">
                      {centers.map((c, index) => (
                        <tr
                          key={`${c.name}-${index}`}
                          className={`transition-colors ${
                            index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                          } hover:bg-amber-50/30`}
                        >
                          <td className="px-5 py-4 align-top font-semibold text-[#20235A]">
                            {c.name}
                          </td>

                          <td className="px-5 py-4 align-top text-slate-700">
                            <div>{c.contact ?? "–"}</div>
                            {c.email && (
                              <a
                                href={`mailto:${c.email}`}
                                className="mt-1 flex items-center gap-1.5 text-xs text-[#20235A] transition hover:text-[#D2B87C]"
                              >
                                <Mail size={13} className="text-[#D2B87C]" />
                                {c.email}
                              </a>
                            )}
                          </td>

                          <td className="px-5 py-4 align-top text-slate-600 leading-relaxed max-w-xs">
                            {c.address}
                          </td>

                          <td className="px-5 py-4 align-top text-slate-700">
                            <div className="flex flex-col gap-1">
                              {c.phones.map((phone) => (
                                <a
                                  key={phone}
                                  href={`tel:+91${phone}`}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#20235A] transition hover:text-[#D2B87C]"
                                >
                                  <Phone size={12} className="text-[#D2B87C]" />
                                  {phone}
                                </a>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Centers Cards - Mobile/Tablet */}
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:hidden">
                  {centers.map((c, index) => (
                    <div
                      key={`${c.name}-card-${index}`}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#D2B87C]/50 hover:shadow-md"
                    >
                      <h3 className="font-serif text-lg font-normal text-[#20235A]">
                        {c.name}
                      </h3>

                      {c.contact && (
                        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                          <User size={14} className="text-[#D2B87C]" />
                          <span>{c.contact}</span>
                        </div>
                      )}

                      {c.email && (
                        <a
                          href={`mailto:${c.email}`}
                          className="mt-2 flex items-center gap-2 text-xs text-[#20235A] transition hover:text-[#D2B87C]"
                        >
                          <Mail size={14} className="text-[#D2B87C]" />
                          <span>{c.email}</span>
                        </a>
                      )}

                      <div className="mt-3 flex items-start gap-2 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-600">
                        <MapPin size={14} className="mt-0.5 shrink-0 text-[#D2B87C]" />
                        <span>{c.address}</span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3">
                        {c.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:+91${phone}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-[#20235A] transition hover:border-[#D2B87C] hover:bg-white"
                          >
                            <Phone size={12} className="text-[#D2B87C]" />
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-3">
                <AdmissionSidebar />
              </div>

            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
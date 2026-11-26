import { Fragment } from "react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/DepartmentNavigation";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Text book list for semesters III to VIII of the B.Tech Computer Science and Engineering programme at Nehru College of Engineering and Research Centre, Thrissur.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "computer science engineering thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
  ],
  robots: { index: true, follow: true },
};

interface Book {
  title: string;
  author: string;
  edition?: string;
  publication?: string;
}

interface Subject {
  code: string;
  name: string;
  books: Book[];
}

interface CompactRow {
  code: string;
  name: string;
  reference: string;
}

interface SemesterBase {
  id: string;
  title: string;
}

interface DetailedSemester extends SemesterBase {
  kind: "detailed";
  subjects: Subject[];
}

interface CompactSemester extends SemesterBase {
  kind: "compact";
  rows: CompactRow[];
}

type Semester = DetailedSemester | CompactSemester;

const semesters: Semester[] = [
  {
    id: "semester-iii",
    title: "Semester III",
    kind: "detailed",
    subjects: [
      {
        code: "MAT203",
        name: "Discrete Mathematical Structures",
        books: [
          {
            title:
              "Discrete and Combinatorial Mathematics (An Applied Introduction)",
            author: "Ralph P Grimaldi, B V Ramana",
            edition: "5th Edition",
            publication: "Pearson",
          },
        ],
      },
      {
        code: "CST 201",
        name: "Data structures",
        books: [
          {
            title: "Fundamentals of Data Structures in C",
            author: "Ellis Horowitz, Sartaj Sahni and Susan Anderson-Freed",
            publication: "Universities Press",
          },
        ],
      },
      {
        code: "CST 203",
        name: "Logic System Design",
        books: [
          {
            title: "Digital Logic & Computer Design",
            author: "M. Morris Mano",
            edition: "4/e",
            publication: "Pearson Education, 2013",
          },
        ],
      },
      {
        code: "CST 205",
        name: "OOPs in JAVA",
        books: [
          {
            title: "Java: The Complete Reference",
            author: "Herbert Schildt",
            edition: "8/e",
            publication: "Tata McGraw Hill, 2011.",
          },
        ],
      },
      {
        code: "CST 283",
        name: "Python for Machine Learning",
        books: [
          {
            title: "Fundamentals of Python : First Programs",
            author: "Kenneth A Lambert.",
            edition: "2/e",
            publication: "Cengage Publishing, 2016",
          },
        ],
      },
      {
        code: "CST 285",
        name: "Data Communication",
        books: [
          {
            title: "Data Communications and Networking",
            author: "Forouzan B. A.",
            edition: "5/e",
            publication: "McGraw Hill, 2013.",
          },
        ],
      },
    ],
  },
  {
    id: "semester-iv",
    title: "Semester IV",
    kind: "detailed",
    subjects: [
      {
        code: "MAT 206",
        name: "GRAPH THEORY",
        books: [
          {
            title: "Graph theory",
            author: "Narsingh Deo",
            publication: "PHI, 1979",
          },
        ],
      },
      {
        code: "CST 202",
        name: "COMPUTER ORGANIZATION AND ARCHITECTURE",
        books: [
          {
            title: "Computer Organization",
            author: "Hamacher C., Z. Vranesic and S. Zaky",
            edition: "5/e",
            publication: "McGraw Hill, 2011",
          },
          {
            title: "Digital Logic & Computer Design",
            author: "Mano M. M.",
            publication: "PHI, 2004",
          },
        ],
      },
      {
        code: "CST 204",
        name: "DATABASE MANAGEMENT SYSTEM",
        books: [
          {
            title:
              "Database Systems: Models, Languages, Design and Application Programming",
            author: "Elmasri R. and S. Navathe",
            publication: "Pearson Education, 2013.",
          },
        ],
      },
      {
        code: "CST 206",
        name: "OPERATING SYSTEMS",
        books: [
          {
            title: "Operating System Concepts",
            author: "Abraham Silberschatz, Peter Baer Galvin, Greg Gagne",
            edition: "9th Edition",
            publication: "Wiley India 2015.",
          },
        ],
      },
      {
        code: "EST 200",
        name: "DESIGN AND ENGINEERING",
        books: [
          {
            title: "Engineering Design: A Project based Introduction",
            author: "Clive L Dyn",
            edition: "4th Edition",
          },
        ],
      },
      {
        code: "MCN 202",
        name: "CONSTITUTION OF INDIA",
        books: [
          {
            title: "Constitution of India",
            author: "P M Bhakshi",
            edition: "14th Edition, 2017",
            publication: "Universal Law",
          },
        ],
      },
      {
        code: "CST 284",
        name: "Mathematics for Machine Learning",
        books: [
          {
            title: "Mathematics for Machine Learning",
            author:
              "Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong",
            publication: "Cambridge University Press",
          },
        ],
      },
      {
        code: "CST 286",
        name: "Introduction to Computer Networks",
        books: [
          {
            title: "Computer Networks",
            author: "Andrew S. Tanenbaum",
            edition: "4/e",
            publication: "PHI (Prentice Hall India).",
          },
        ],
      },
    ],
  },
  {
    id: "semester-v",
    title: "Semester V",
    kind: "detailed",
    subjects: [
      {
        code: "CS 301",
        name: "Theory of Computation",
        books: [
          {
            title:
              "Introduction to Automata Theory, Languages, and Computation",
            author: "John E Hopcroft, Rajeev Motwani and Jeffrey D Ullman",
            edition: "Third",
            publication: "Pearson Education",
          },
          {
            title: "Introduction to Languages and the Theory of Computation",
            author: "John C Martin",
            edition: "First",
            publication: "TMH",
          },
        ],
      },
      {
        code: "CS 303",
        name: "System Software",
        books: [
          {
            title: "System Software: An Introduction to Systems Programming",
            author: "Leland L. Beck",
            edition: "Third",
            publication: "Pearson Education",
          },
          {
            title: "Systems Programming and Operating Systems",
            author: "D.M. Dhamdhere",
            edition: "Second Revised Edition",
            publication: "Tata McGraw Hill",
          },
        ],
      },
      {
        code: "CS 305",
        name: "Microprocessors and Microcontrollers",
        books: [
          {
            title:
              "Microcontrollers: Architecture, Programming, Inteerfacing and system design",
            author: "Raj Kamal",
            edition: "First",
            publication: "Pearson Education",
          },
          {
            title: "Microprocessors and Interfacing",
            author: "Douglas V Hall, SSSP Rao",
            edition: "Third",
            publication: "McGrawHill",
          },
        ],
      },
      {
        code: "CS 307",
        name: "Data Communication",
        books: [
          {
            title: "Data Communications and Networking",
            author: "Forouzan B. A.",
            edition: "Fifth",
            publication: "Tata McGraw Hill",
          },
          {
            title: "Data and Computer Communication",
            author: "William Stallings",
            edition: "Nineth",
            publication: "Pearson Education",
          },
        ],
      },
      {
        code: "CS 309",
        name: "Graph Theory and Combinatorics",
        books: [
          {
            title: "Introduction to Graph Theory",
            author: "Douglas B. West",
            edition: "First",
            publication: "Prentice Hall India Ltd",
          },
          {
            title: "Introduction to Graph Theory",
            author: "Robin J. Wilson",
            edition: "First",
            publication: "Longman Group Ltd",
          },
        ],
      },
      {
        code: "CS 361",
        name: "Soft Computing",
        books: [
          {
            title: "Principles of soft computing",
            author: "S. N. Sivanandam and S. N. Deepa",
            edition: "First",
            publication: "John Wiley & Sons",
          },
          {
            title: "Fuzzy Logic with engineering applications",
            author: "Timothy J. Ross",
            edition: "First",
            publication: "John Wiley & Sons",
          },
        ],
      },
      {
        code: "CS 365",
        name: "Optimization Techniques",
        books: [
          {
            title:
              "Meta heuristic search concepts: A tutorial with applications to production and logistics",
            author: "G. Zapfel, R. Barune and M. Bogl",
            edition: "First",
            publication: "Springer",
          },
          {
            title: "Optimization Theory and Applications",
            author: "Rao S S",
            edition: "First",
            publication: "Wiley Eastern",
          },
        ],
      },
    ],
  },
  {
    id: "semester-vi",
    title: "Semester VI",
    kind: "detailed",
    subjects: [
      {
        code: "CS 302",
        name: "Design and Analysis of Algorithms",
        books: [
          {
            title: "Introduction to Algorithms",
            author:
              "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
            edition: "Third",
            publication: "MIT Press, 2009",
          },
          {
            title: "The Design and Analysis of Computer Algorithms",
            author: "Alfred V. Aho, John E. Hopcroft and Jeffrey D. Ullman",
            edition: "First",
            publication: "Pearson Education, 1999.",
          },
          {
            title: "Computer Algorithms",
            author: "Ellis Horowitz, SartajSahni, SanguthevarRajasekaran",
            edition: "First",
            publication: "Universities Press, 2007",
          },
        ],
      },
      {
        code: "CS 304",
        name: "Compiler Design",
        books: [
          {
            title: "Compilers \u2013 Principles Techniques and Tools",
            author: "Aho A. Ravi Sethi and D Ullman.",
            edition: "Second Edition",
            publication: "Addison Wesley, 2006.",
          },
          {
            title: "Systems Programming and Operating Systems",
            author: "D.M. Dhamdhere",
            edition: "Second Revised Edition",
            publication: "Tata McGraw Hill",
          },
        ],
      },
      {
        code: "CS 306",
        name: "Computer Networks",
        books: [
          {
            title: "Computer Networks",
            author: "Andrew S. Tanenbaum",
            edition: "Fourth",
            publication: "Prentice Hall India Ltd",
          },
          {
            title: "Computer Networks-A Systems Approach",
            author: "Larry L. Peterson & Bruce S. Dave",
            edition: "Fifth",
            publication: "Morgan Kaufmann, 2011",
          },
          {
            title: "Data Communications and Networking",
            author: "Forouzan B. A.",
            edition: "Fifth",
            publication: "Tata McGraw Hill",
          },
        ],
      },
      {
        code: "CS 308",
        name: "Software Engineering and Project Management",
        books: [
          {
            title: "Software Engineering",
            author: "Ian Sommerville",
            edition: "Seventh",
            publication: "Pearson Education",
          },
          {
            title: "Software Engineering",
            author: "K. K. Aggarwal and Yogesh Singh",
            edition: "Second",
            publication: "New age International Publishers",
          },
          {
            title: "Software Engineering : A practitioner\u2019s approach",
            author: "Roger S. Pressman",
            edition: "Eighth",
            publication: "McGraw Hill",
          },
        ],
      },
      {
        code: "HS300",
        name: "Principles of Management",
        books: [
          {
            title: "Essentials of Management",
            author: "Harold Koontz and Heinz Weihrich",
            edition: "Tenth",
            publication: "McGraw Hill Companies",
          },
          {
            title:
              "Management: A global, innovative and enterprenuntial pespective",
            author: "Heinz Weirich, Mark V Cannice and Harold Koontz",
            edition: "Fourteen",
            publication: "McGraw Hill Education",
          },
        ],
      },
      {
        code: "CS 364",
        name: "Mobile Computing",
        books: [
          {
            title:
              "Mobile Computing Technology- Application and Service Creation",
            author: "Asoke K. Talukder, Hasan Ahmad",
            edition: "Second",
            publication: "McGraw Hill Education.",
          },
          {
            title: "Mobile Communications",
            author: "Jochen Schiller",
            edition: "First",
            publication: "Pearson Education Asia",
          },
          {
            title: "Mobile Communications",
            author: "Jonathan Rodriguez",
            edition: "First",
            publication: "Wiley Publishers",
          },
          {
            title: "Fundamentals of 5G Mobile Networks",
            author: "Theodore S. Rappaport",
            edition: "Second",
            publication: "Prentice Hall India Ltd",
          },
        ],
      },
      {
        code: "CS 366",
        name: "Natural Language Processing",
        books: [
          {
            title: "Speech and Language Processing",
            author: "D. Jurafsky and J. H. Martin",
            edition: "First",
            publication: "Prentice Hall India Ltd",
          },
          {
            title: "Natural Language Understanding",
            author: "James Allen",
            edition: "Second",
            publication: "The Benjamin/Cummings Publishing Company Inc",
          },
        ],
      },
    ],
  },
  {
    id: "semester-vii",
    title: "Semester VII",
    kind: "compact",
    rows: [
      {
        code: "CS401",
        name: "COMPUTER GRAPHICS",
        reference:
          "Donald Hearn and M. Pauline Baker, Computer Graphics, PHI, 2e, 1996",
      },
      {
        code: "CS403",
        name: "PROGRAMMING PARADIGMS",
        reference:
          "Scott M L, Programming Language Pragmatics, 3rd Edn., Morgan Kaufmann Publishers, 2009",
      },
      {
        code: "CS405",
        name: "COMPUTER SYSTEM ARCHITECTURE",
        reference:
          "K. Hwang and Naresh Jotwani, Advanced Computer architecture, Parallelism, Scalability, Programmability, TMH, 2010.",
      },
      {
        code: "CS407",
        name: "DISTRIBUTED COMPUTING",
        reference:
          "Pradeep K Sinha, Distributed Operating Systems : Concepts and Design, Prentice Hall of India",
      },
      {
        code: "CS409",
        name: "CRYPTOGRAPHY AND NETWORK SECURITY",
        reference:
          "Behrouz A. Forouzan, Cryptography and Network Security, Tata McGraw-Hill. 2010",
      },
      {
        code: "CS463",
        name: "DIGITAL IMAGE PROCESSING",
        reference:
          "A K. Jain, Fundamentals of digital image processing, Prentice Hall of India, 1989.",
      },
      {
        code: "CS 467",
        name: "MACHINE LEARNING",
        reference:
          "Christopher M. Bishop, Pattern Recognition and Machine Learning, Springer, 2006.",
      },
    ],
  },
  {
    id: "semester-viii",
    title: "Semester VIII",
    kind: "compact",
    rows: [
      {
        code: "CS402",
        name: "DATA MINING AND WAREHOUSING",
        reference:
          "Dunham M H, \u201cData Mining: Introductory and Advanced Topics\u201d, Pearson Education, New Delhi, 2003.",
      },
      {
        code: "CS404",
        name: "EMBEDDED SYSTEMS",
        reference:
          "J Staunstrup and Wayne Wolf, Hardware / Software Co-Design: Principles and Practice, Prentice Hall.",
      },
      {
        code: "CS464",
        name: "ARTIFICIAL INTELLIGENCE",
        reference:
          "E Rich, K Knight, Artificial Intelligence, 3/e, Tata McGraw Hill, 2009.",
      },
      {
        code: "CS 472",
        name: "PRINCIPLES OF INFORMATION SECURITY",
        reference:
          "Bernard Menezes, Network security and Cryptography, Cengage Learning India, 2010.",
      },
      {
        code: "IE488",
        name: "TOTAL QUALITY MANAGEMENT",
        reference:
          "Sharma D D, Total Quality Management, Sultan Chand & Sons, 2014",
      },
      {
        code: "EE494",
        name: "INSTRUMENTATION SYSTEMS",
        reference:
          "Ernest O Doebelin and Dhanesh N Manik, Measurement Systems, Mc Graw Hill, 6e.",
      },
      {
        code: "AU486",
        name: "NOISE, VIBRATION AND HARSHNESS",
        reference:
          "Clarence W. de Silva, \u201cVibration Monitoring, Testing, and Instrumentation\u201d, CRC Press, 2007",
      },
    ],
  },
];

const detailedHeaders: string[] = [
  "SI No",
  "Code",
  "Subject",
  "Text Book Title",
  "Author",
  "Edition / Publication",
];

const compactHeaders: string[] = [
  "SI No",
  "Code",
  "Subject",
  "Text Book & Author",
];

const HEAD_CELL = "px-4 py-3 text-left text-sm font-semibold";
const BODY_CELL =
  "border-t border-slate-200 px-4 py-3 align-top text-slate-700";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function DetailedTable({ subjects }: { subjects: Subject[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full min-w-[960px] border-collapse text-left text-sm sm:text-base">
        <thead>
          <tr className="bg-navy-950 text-white">
            {detailedHeaders.map((header) => (
              <th key={header} className={HEAD_CELL}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, subjectIndex) => {
            const rowBackground =
              subjectIndex % 2 === 0 ? "bg-white" : "bg-slate-50";

            return (
              <Fragment key={subject.code}>
                {subject.books.map((book, bookIndex) => (
                  <tr
                    key={`${subject.code}-${bookIndex}`}
                    className={rowBackground}
                  >
                    {bookIndex === 0 && (
                      <>
                        <td
                          rowSpan={subject.books.length}
                          className={`${BODY_CELL} w-20 font-semibold text-navy-950`}
                        >
                          {pad(subjectIndex + 1)}
                        </td>
                        <td
                          rowSpan={subject.books.length}
                          className={`${BODY_CELL} whitespace-nowrap font-medium text-navy-950`}
                        >
                          {subject.code}
                        </td>
                        <td
                          rowSpan={subject.books.length}
                          className={`${BODY_CELL} font-medium text-navy-950`}
                        >
                          {subject.name}
                        </td>
                      </>
                    )}
                    <td className={BODY_CELL}>{book.title}</td>
                    <td className={BODY_CELL}>{book.author}</td>
                    <td className={BODY_CELL}>
                      {book.edition && (
                        <span className="block font-semibold text-navy-950">
                          {book.edition}
                        </span>
                      )}
                      {book.publication && (
                        <span className="block">{book.publication}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function CompactTable({ rows }: { rows: CompactRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm sm:text-base">
        <thead>
          <tr className="bg-navy-950 text-white">
            {compactHeaders.map((header) => (
              <th key={header} className={HEAD_CELL}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.code}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <td
                className={`${BODY_CELL} w-20 font-semibold text-navy-950`}
              >
                {pad(index + 1)}
              </td>
              <td
                className={`${BODY_CELL} whitespace-nowrap font-medium text-navy-950`}
              >
                {row.code}
              </td>
              <td className={`${BODY_CELL} font-medium text-navy-950`}>
                {row.name}
              </td>
              <td className={BODY_CELL}>{row.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TextBookListPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Computer Science and Engineering
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Text Book List
          </h1>
          <div className="mt-6 h-1 w-16 bg-gold-500" />
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Text Book List
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            {/* Semester quick links */}
            <nav
              aria-label="Semesters"
              className="mb-12 flex flex-wrap gap-3"
            >
              {semesters.map((semester) => (
                <a
                  key={semester.id}
                  href={`#${semester.id}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:border-gold-500 hover:text-gold-600"
                >
                  {semester.title}
                </a>
              ))}
            </nav>

            <div className="space-y-14">
              {semesters.map((semester) => (
                <div
                  key={semester.id}
                  id={semester.id}
                  className="scroll-mt-24"
                >
                  <h3 className="mb-5 font-display text-xl font-bold text-navy-950 sm:text-2xl">
                    {semester.title}
                  </h3>

                  {semester.kind === "detailed" ? (
                    <DetailedTable subjects={semester.subjects} />
                  ) : (
                    <CompactTable rows={semester.rows} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
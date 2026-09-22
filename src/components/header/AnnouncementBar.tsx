const announcements = [
  {
    label: "New",
    text: "20th Anniversary celebration of Nehru College of Engineering and Research Centre",
    href: "/news/437",
  },
  {
    text: "21st Induction Programme 2022 conducted on 14.10.2022",
    href: "/gallerydetails.php?id=51",
  },
  {
    text: 'IEDC NCERC: 2-day National level workshop on "Drone Technology"',
    href: "/news/431",
  },
  {
    text: "Admission schedule - merit quota 2026",
    href: "/news/415",
  },
  {
    text: "Educational loan for NGI students by Indian Bank",
    href: "/news/397",
  },
  {
    text: "Fulbright-Nehru fellowships now open for applications",
    href: "https://www.usief.org.in/",
    external: true,
  },
  {
    text: "Proud moment: NCERC secured 262 offers from 42 companies",
    href: "/placement-status",
  },
];

export default function AnnouncementBar() {
  const track = [...announcements, ...announcements];

  return (
    <section className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto flex max-w-8xl items-stretch">
        <div className="hidden shrink-0 items-center bg-gold-500 px-5 py-2.5 text-xs font-semibold tracking-wide text-navy-950 sm:flex">
          Announcements
        </div>

        <div className="overflow-hidden">
          <ul className="announcement-track flex items-center gap-10 whitespace-nowrap py-2.5 pl-4 pr-4">
            {track.map((item, index) => (
              <li key={`${item.text}-${index}`}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-white/85 transition hover:text-gold-400"
                >
                  {item.label && (
                    <span className="rounded-sm bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                      {item.label}
                    </span>
                  )}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

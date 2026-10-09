"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import type { NavItem } from "./navigation";

function isMegaMenu(item: NavItem) {
  return Boolean(item.children?.some((child) => child.children?.length));
}

function SimpleLink({
  item,
  className,
  showArrow = false,
}: {
  item: NavItem;
  className: string;
  showArrow?: boolean;
}) {
  const href = item.href ?? "#";

  const content = (
    <>
      <span>{item.label}</span>

      {showArrow && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.8}
          className="
            shrink-0
            -translate-x-1
            opacity-0
            transition-all duration-200
            group-hover/link:translate-x-0
            group-hover/link:opacity-100
          "
        />
      )}
    </>
  );

  if (item.external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

/* ============================================================
   NORMAL DROPDOWN
============================================================ */

function DropdownMenu({ item }: { item: NavItem }) {
  return (
    <div
      className="
        invisible absolute left-1/2 top-[calc(100%+14px)] z-50
        w-[310px] -translate-x-1/2 translate-y-2
        overflow-hidden rounded-2xl
        border border-slate-200/80
        bg-white
        opacity-0
        shadow-2xl shadow-navy-950/15
        ring-1 ring-black/[0.02]
        transition-all duration-250 ease-out
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div className="h-[3px] w-full bg-gold-500" />

      <div className="p-2.5">
        <div className="px-3 pb-2.5 pt-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-500">
            Explore
          </p>

          <p className="mt-1 text-sm font-semibold text-navy-950">
            {item.label}
          </p>
        </div>

        <div className="space-y-0.5">
          {item.children?.map((child) => (
            <div key={child.label} className="group/link">
              <SimpleLink
                item={child}
                showArrow
                className="
                  flex items-center justify-between gap-3
                  rounded-xl px-3 py-2.5
                  text-[13px] font-medium
                  text-slate-700
                  transition-all duration-200
                  hover:bg-slate-50
                  hover:pl-4
                  hover:text-navy-950
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DEPARTMENTS MEGA MENU
============================================================ */

function MegaMenu({ item }: { item: NavItem }) {
  const columns = item.children ?? [];

  const btech = columns.find((column) => column.label === "B.Tech");
  const mtech = columns.find((column) => column.label === "M.Tech");

  const otherPrograms = columns.filter(
    (column) =>
      column.label !== "B.Tech" &&
      column.label !== "M.Tech"
  );

  return (
    <div
      className="
        invisible absolute left-1/2 top-[calc(100%+16px)] z-50
        w-[900px]
        -translate-x-1/2
        translate-y-2
        overflow-hidden
        rounded-[22px]
        border border-slate-200/80
        bg-white
        opacity-0
        shadow-[0_25px_70px_rgba(15,47,132,0.16)]
        ring-1 ring-black/[0.02]
        transition-all duration-250 ease-out
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      {/* ======================================================
          TOP ACCENT
      ====================================================== */}
      <div className="h-[3px] w-full bg-gold-500" />

      {/* ======================================================
          HEADER
      ====================================================== */}
      <div
        className="
          flex items-center justify-between
          border-b border-slate-100
          px-7 py-5
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl
              bg-navy-950
              text-white
              shadow-lg shadow-navy-950/10
            "
          >
            <GraduationCap
              size={21}
              strokeWidth={1.7}
            />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-gold-500
              "
            >
              Academic Programmes
            </p>

            <h3 className="mt-0.5 text-lg font-semibold text-navy-950">
              Departments & Programmes
            </h3>
          </div>
        </div>
      </div>

      {/* ======================================================
          PROGRAMME CONTENT
      ====================================================== */}
      <div className="grid grid-cols-[1fr_1fr_190px] gap-5 p-6">

        {/* ====================================================
            B.TECH
        ==================================================== */}
        {btech && (
          <div
            className="
              overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white
              transition-shadow duration-200
              hover:shadow-lg hover:shadow-navy-950/5
            "
          >
            <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-navy-950">
                    {btech.label}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Undergraduate Programmes
                  </p>
                </div>

                <span
                  className="
                    flex h-7 min-w-7
                    items-center justify-center
                    rounded-full
                    bg-navy-950
                    px-2
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  {btech.children?.length ?? 0}
                </span>
              </div>
            </div>

            <div className="p-2">
              {btech.children?.map((program) => (
                <div
                  key={program.label}
                  className="group/link"
                >
                  <SimpleLink
                    item={program}
                    showArrow
                    className="
                      flex
                      min-h-[38px]
                      items-center
                      justify-between
                      gap-2
                      rounded-lg
                      px-3
                      py-2
                      text-[11.5px]
                      leading-4
                      text-slate-600
                      transition-all duration-200
                      hover:bg-slate-50
                      hover:pl-3.5
                      hover:text-navy-950
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            M.TECH
        ==================================================== */}
        {mtech && (
          <div
            className="
              overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white
              transition-shadow duration-200
              hover:shadow-lg hover:shadow-navy-950/5
            "
          >
            <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-navy-950">
                    {mtech.label}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Postgraduate Programmes
                  </p>
                </div>

                <span
                  className="
                    flex h-7 min-w-7
                    items-center justify-center
                    rounded-full
                    bg-navy-950
                    px-2
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  {mtech.children?.length ?? 0}
                </span>
              </div>
            </div>

            <div className="p-2">
              {mtech.children?.map((program) => (
                <div
                  key={program.label}
                  className="group/link"
                >
                  <SimpleLink
                    item={program}
                    showArrow
                    className="
                      flex
                      min-h-[38px]
                      items-center
                      justify-between
                      gap-2
                      rounded-lg
                      px-3
                      py-2
                      text-[11.5px]
                      leading-4
                      text-slate-600
                      transition-all duration-200
                      hover:bg-slate-50
                      hover:pl-3.5
                      hover:text-navy-950
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            OTHER PROGRAMMES
        ==================================================== */}
        <div
          className="
            flex
            flex-col
            rounded-2xl
            bg-navy-950
            p-5
            text-white
          "
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gold-400
            "
          >
            Other Programmes
          </p>

          <p className="mt-2 text-sm font-semibold leading-5">
            Explore specialised programmes
          </p>

          <div className="mt-5 space-y-2">
            {otherPrograms.map((program) => (
              <div
                key={program.label}
                className="group/other"
              >
                <SimpleLink
                  item={program}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-3
                    text-[12px]
                    font-medium
                    text-white/90
                    transition-all duration-200
                    hover:border-gold-400/30
                    hover:bg-white/[0.09]
                    hover:text-gold-400
                  "
                />

                <p className="px-3 pt-1 text-[9px] text-white/35">
                  {program.label === "MCA"
                    ? "Master of Computer Applications"
                    : "Master of Business Administration"}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <div className="h-px w-full bg-white/10" />

            <p className="mt-3 text-[9px] leading-4 text-white/40">
              Discover academic pathways designed for
              future-ready careers.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          BOTTOM BAR
      ====================================================== */}
      <div
        className="
          flex items-center justify-between
          border-t border-slate-100
          bg-slate-50/60
          px-7 py-3
        "
      >
        <p className="text-[10px] text-slate-400">
          Undergraduate & postgraduate education
        </p>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          <span className="text-[10px] font-medium text-slate-500">
            NCERC Academic Community
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DESKTOP MENU ITEM
============================================================ */

function DesktopMenuItem({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <div className="group relative">
        <SimpleLink
          item={item}
          className="
            relative flex items-center
            px-3 py-2
            text-sm font-medium
            text-white
            drop-shadow-sm
            transition-colors duration-200
            hover:text-gold-400
          "
        />

        <span
          className="
            absolute bottom-0 left-3 right-3 h-px
            origin-left scale-x-0
            bg-gold-400
            transition-transform duration-200
            group-hover:scale-x-100
          "
        />
      </div>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="
          relative flex items-center gap-1.5
          px-3 py-2
          text-sm font-medium
          text-white
          drop-shadow-sm
          transition-colors duration-200
          hover:text-gold-400
        "
        aria-haspopup="true"
      >
        <span>{item.label}</span>

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className="
            transition-transform duration-250
            group-hover:rotate-180
          "
        />

        <span
          className="
            absolute bottom-0 left-3 right-3 h-px
            origin-left scale-x-0
            bg-gold-400
            transition-transform duration-200
            group-hover:scale-x-100
          "
        />
      </button>

      {isMegaMenu(item) ? (
        <MegaMenu item={item} />
      ) : (
        <DropdownMenu item={item} />
      )}
    </div>
  );
}

/* ============================================================
   DESKTOP NAVIGATION
============================================================ */

export default function DesktopNavigation({
  items,
}: {
  items: NavItem[];
}) {
  return (
    <nav
      aria-label="Primary"
      className="hidden items-center lg:flex"
    >
      {items.map((item) => (
        <DesktopMenuItem
          key={item.label}
          item={item}
        />
      ))}
    </nav>
  );
}
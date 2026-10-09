"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import type { NavItem } from "./navigation";
import { utilityNavigation } from "./navigation";

/* =========================================================
   MOBILE LEAF
========================================================= */

function MobileLeaf({
  item,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  onNavigate: () => void;
  depth?: number;
}) {
  const href = item.href ?? "#";

  const className = `
    group flex items-center justify-between gap-3
    rounded-lg
    px-3
    py-2.5
    text-[13px]
    transition-all duration-200
    ${depth > 0
      ? "text-slate-600 hover:bg-white hover:text-navy-950"
      : "text-slate-700 hover:bg-white hover:text-navy-950"
    }
  `;

  const content = (
    <>
      <span className="leading-5">{item.label}</span>

      {item.external ? (
        <ExternalLink
          size={13}
          strokeWidth={1.8}
          className="
            shrink-0
            text-slate-400
            transition-colors duration-200
            group-hover:text-gold-500
          "
        />
      ) : (
        <ArrowUpRight
          size={14}
          strokeWidth={1.8}
          className="
            shrink-0
            -translate-x-1
            text-gold-500
            opacity-0
            transition-all duration-200
            group-hover:translate-x-0
            group-hover:opacity-100
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
        onClick={onNavigate}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={className}
    >
      {content}
    </Link>
  );
}

/* =========================================================
   MOBILE ACCORDION GROUP
========================================================= */

function MobileGroup({
  item,
  depth = 0,
  onNavigate,
}: {
  item: NavItem;
  depth?: number;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  const hasChildren = Boolean(item.children?.length);

  /* ---------------------------------------------------------
     NORMAL LINK
  --------------------------------------------------------- */

  if (!hasChildren) {
    return (
      <MobileLeaf
        item={item}
        onNavigate={onNavigate}
        depth={depth}
      />
    );
  }

  const isNested = depth > 0;

  return (
    <div
      className={
        isNested
          ? "border-b border-slate-200/70 last:border-none"
          : "border-b border-slate-100 last:border-none"
      }
    >
      {/* =====================================================
          ACCORDION BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={`mobile-menu-${item.label
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className={`
          group flex w-full items-center justify-between
          gap-4
          text-left
          transition-all duration-200
          ${isNested
            ? "px-3 py-3 text-[13px] font-semibold"
            : "px-3 py-3.5 text-sm font-semibold"
          }
          ${open ? "text-gold-500" : "text-navy-950"}
        `}
      >
        <span className="flex min-w-0 items-center gap-3">
          {!isNested && (
            <span
              className={`
                h-1.5 w-1.5
                shrink-0
                rounded-full
                transition-all duration-200
                ${open
                  ? "bg-gold-500"
                  : "bg-slate-300"
                }
              `}
            />
          )}

          <span className="truncate">
            {item.label}
          </span>
        </span>

        <span
          className={`
            flex h-7 w-7
            shrink-0
            items-center justify-center
            rounded-full
            border
            transition-all duration-200
            ${open
              ? "border-gold-500 bg-gold-500 text-white"
              : "border-slate-200 bg-white text-slate-500"
            }
          `}
        >
          <ChevronDown
            size={14}
            strokeWidth={1.8}
            className={`
              transition-transform duration-250
              ${open ? "rotate-180" : ""}
            `}
          />
        </span>
      </button>

      {/* =====================================================
          ACCORDION CONTENT
      ===================================================== */}

      <div
        id={`mobile-menu-${item.label
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          ${open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`
              mb-2
              ml-3
              rounded-xl
              border-l-2
              bg-slate-50
              py-1.5
              ${isNested
                ? "border-gold-500/30"
                : "border-slate-200"
              }
            `}
          >
            {item.children?.map((child) => (
              <MobileGroup
                key={child.label}
                item={child}
                depth={depth + 1}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

export default function MobileNavigation({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        z-[60]
        border-t
        border-white/10
        bg-white
        shadow-2xl
        shadow-black/20
        lg:hidden
      "
    >
      <div
        className="
          mx-auto
          max-h-[calc(100dvh-88px)]
          max-w-8xl
          overflow-y-auto
          overscroll-contain
          px-4
          pb-8
          pt-3
          sm:px-6
        "
      >
        {/* ===================================================
            NAVIGATION HEADER
        =================================================== */}

        <div className="mb-2 flex items-center justify-between px-1 py-3">
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
              Navigation
            </p>

            <p className="mt-1 text-sm font-semibold text-navy-950">
              Explore NCERC
            </p>
          </div>

          <div
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              bg-slate-50
              text-[11px]
              font-semibold
              text-slate-500
            "
          >
            {items.length}
          </div>
        </div>

        {/* ===================================================
            PRIMARY NAVIGATION
        =================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200/80
            bg-white
          "
        >
          {items.map((item) => (
            <MobileGroup
              key={item.label}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* ===================================================
            QUICK ACCESS
        =================================================== */}

        <div className="mt-5">
          <div className="mb-2 px-1">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-400
              "
            >
              Quick Access
            </p>
          </div>

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-200/80
              bg-slate-50
              p-2
            "
          >
            {utilityNavigation.map((item) => (
              <MobileGroup
                key={item.label}
                item={item}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM ACCENT
        =================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-px flex-1 bg-slate-100" />
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span className="h-px flex-1 bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
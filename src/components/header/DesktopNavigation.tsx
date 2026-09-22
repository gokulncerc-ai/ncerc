"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "./navigation";

function isMegaMenu(item: NavItem) {
  // Departments is the one item whose children themselves have
  // children (B.Tech / M.Tech branches) - render it as columns
  // instead of a single-file dropdown.
  return Boolean(item.children?.some((child) => child.children?.length));
}

function SimpleLink({ item, className }: { item: NavItem; className: string }) {
  const href = item.href ?? "#";

  if (item.external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {item.label}
    </Link>
  );
}

function DropdownMenu({ item }: { item: NavItem }) {
  return (
    <div className="invisible absolute left-0 top-full z-40 w-64 -translate-y-1 rounded-lg border border-slate-100 bg-white p-2 opacity-0 shadow-xl shadow-navy-950/10 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {item.children?.map((child) => (
        <SimpleLink
          key={child.label}
          item={child}
          className="block rounded-md px-3 py-2 text-sm text-navy-900 transition hover:bg-slate-50 hover:text-gold-500"
        />
      ))}
    </div>
  );
}

function MegaMenu({ item }: { item: NavItem }) {
  const columns = item.children ?? [];

  return (
    <div className="invisible absolute left-1/2 top-full z-40 w-[640px] -translate-x-1/2 -translate-y-1 rounded-lg border border-slate-100 bg-white p-6 opacity-0 shadow-xl shadow-navy-950/10 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.label}>
            {column.children ? (
              <>
                <p className="mb-1 text-sm font-semibold text-navy-950">
                  {column.label}
                </p>
                {column.blurb && (
                  <p className="mb-3 text-xs text-slate-400">{column.blurb}</p>
                )}
                <ul className="space-y-2">
                  {column.children.map((leaf) => (
                    <li key={leaf.label}>
                      <SimpleLink
                        item={leaf}
                        className="text-sm text-slate-600 transition hover:text-gold-500"
                      />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <SimpleLink
                item={column}
                className="block text-sm font-semibold text-navy-950 transition hover:text-gold-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopMenuItem({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <SimpleLink
        item={item}
        className="flex items-center px-3 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:text-gold-400"
      />
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:text-gold-400"
      >
        {item.label}
        <ChevronDown size={14} className="transition group-hover:rotate-180" />
      </button>
      {isMegaMenu(item) ? <MegaMenu item={item} /> : <DropdownMenu item={item} />}
    </div>
  );
}

export default function DesktopNavigation({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Primary" className="hidden items-center lg:flex">
      {items.map((item) => (
        <DesktopMenuItem key={item.label} item={item} />
      ))}
    </nav>
  );
}
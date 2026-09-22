"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "./navigation";
import { utilityNavigation } from "./navigation";

function MobileLeaf({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const href = item.href ?? "#";
  if (item.external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="block py-2 text-sm text-slate-700 hover:text-navy-950"
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onNavigate} className="block py-2 text-sm text-slate-700 hover:text-navy-950">
      {item.label}
    </Link>
  );
}

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

  if (!hasChildren) {
    return (
      <div className={depth > 0 ? "pl-4" : ""}>
        <MobileLeaf item={item} onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className={depth > 0 ? "pl-4" : "border-b border-slate-100 last:border-none"}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-3 text-sm font-semibold text-navy-950"
      >
        {item.label}
        <ChevronDown size={16} className={open ? "rotate-180 transition" : "transition"} />
      </button>

      {open && (
        <div className="pb-2">
          {item.children?.map((child) => (
            <MobileGroup key={child.label} item={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNavigation({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white shadow-xl lg:hidden">
      <div className="mx-auto max-w-8xl max-h-[calc(100vh-100px)] overflow-y-auto px-6 py-4">
        {items.map((item) => (
          <MobileGroup key={item.label} item={item} onNavigate={onNavigate} />
        ))}

        <div className="mt-3 flex flex-col gap-1 border-t border-slate-100 pt-3">
          {utilityNavigation.map((item) => (
            <MobileLeaf key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}
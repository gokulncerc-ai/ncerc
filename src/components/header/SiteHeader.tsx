"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  X,
  Youtube,
} from "lucide-react";

import {
  contactDetails,
  primaryNavigation,
  socialLinks,
  utilityNavigation,
} from "./navigation";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const socialIcons = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  LinkedIn: Linkedin,
} as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-50 shrink-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pb-4 backdrop-blur-[2px] sm:pb-6">
      {/* Utility bar */}
      <div className="hidden border-b border-white/15 lg:block">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-2 text-xs text-white/80">
          <div className="flex items-center gap-5">
            <a href={contactDetails.phoneHref} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone size={13} />
              {contactDetails.phone}
            </a>
            <a href={contactDetails.emailHref} className="flex items-center gap-1.5 transition hover:text-white">
              <Mail size={13} />
              {contactDetails.email}
            </a>
          </div>

          <div className="flex items-center gap-5">
            {utilityNavigation.map((item) => (
              <Link key={item.label} href={item.href ?? "#"} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 border-l border-white/20 pl-5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/70 transition hover:text-white"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="NCERC crest"
            width={250}
            height={250}
            priority
            className="h-14 w-auto object-contain drop-shadow-md sm:h-16 lg:h-20"
          />
        </Link>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <DesktopNavigation items={primaryNavigation} />

          {/* Action buttons (Search + Mobile Hamburger) */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
              className="rounded-full p-2 text-white transition hover:bg-white/10"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-white/15 bg-navy-950/90 px-6 py-4 backdrop-blur-md">
          <form action="/search" method="GET" className="mx-auto flex max-w-8xl items-center gap-3">
            <Search size={18} className="text-white/60" />
            <input
              type="search"
              name="q"
              autoFocus
              placeholder="Search NCERC..."
              className="w-full border-none bg-transparent text-sm text-white outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              className="rounded-md bg-gold-500 px-4 py-1.5 text-sm font-medium text-navy-950"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {mobileOpen && (
        <MobileNavigation items={primaryNavigation} onNavigate={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
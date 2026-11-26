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
  ChevronDown,
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

  // Controls utility dropdowns such as Alumni
  const [utilityDropdown, setUtilityDropdown] = useState<string | null>(
    null
  );

  const toggleMobile = () => {
    setMobileOpen((value) => !value);
    setSearchOpen(false);
    setUtilityDropdown(null);
  };

  const toggleSearch = () => {
    setSearchOpen((value) => !value);
    setMobileOpen(false);
    setUtilityDropdown(null);
  };

  const toggleUtilityDropdown = (label: string) => {
    setUtilityDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <header
      className="
        relative z-50 shrink-0
        bg-gradient-to-b
        from-black/80
        via-black/40
        to-transparent
        pb-4
        backdrop-blur-[2px]
        sm:pb-6
      "
    >
      {/* =========================================================
          UTILITY BAR
      ========================================================= */}
      <div className="hidden border-b border-white/15 lg:block">
        <div
          className="
            mx-auto flex max-w-8xl
            items-center justify-between
            px-6 py-2
            text-xs text-white/80
          "
        >
          {/* Contact */}
          <div className="flex items-center gap-5">
            <a
              href={contactDetails.phoneHref}
              className="
                group flex items-center gap-1.5
                transition-colors duration-200
                hover:text-white
              "
            >
              <Phone
                size={13}
                strokeWidth={1.8}
                className="
                  text-white/60
                  transition
                  group-hover:text-[#D2B87C]
                "
              />

              <span>{contactDetails.phone}</span>
            </a>

            <a
              href={contactDetails.emailHref}
              className="
                group flex items-center gap-1.5
                transition-colors duration-200
                hover:text-white
              "
            >
              <Mail
                size={13}
                strokeWidth={1.8}
                className="
                  text-white/60
                  transition
                  group-hover:text-[#D2B87C]
                "
              />

              <span>{contactDetails.email}</span>
            </a>
          </div>

          {/* Utility + Social */}
          <div className="flex items-center gap-5">
            {utilityNavigation.map((item) => {
              /* =================================================
                 DROPDOWN UTILITY ITEM
              ================================================= */
              if (item.children?.length) {
                const isOpen = utilityDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                  >
                    {/* Dropdown Button */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        toggleUtilityDropdown(item.label)
                      }
                      className="
                        flex items-center gap-1
                        text-xs
                        text-white/80
                        transition-colors duration-200
                        hover:text-white
                      "
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={11}
                        strokeWidth={1.8}
                        className={`
                          transition-transform
                          duration-200
                          ${isOpen
                            ? "rotate-180 text-[#D2B87C]"
                            : ""
                          }
                        `}
                      />
                    </button>

                    {/* =================================================
                        CLICK-OPEN DROPDOWN
                    ================================================= */}
                    {isOpen && (
                      <div
                        className="
                          absolute
                          right-0
                          top-full
                          z-50
                          mt-3
                          w-56
                          rounded-xl
                          border
                          border-white/10
                          bg-[#20235A]
                          p-2
                          shadow-2xl
                          backdrop-blur-xl
                        "
                      >
                        {/* Small top accent */}
                        <div
                          className="
                            absolute
                            -top-1.5
                            right-5
                            h-3
                            w-3
                            rotate-45
                            border-l
                            border-t
                            border-white/10
                            bg-[#20235A]
                          "
                        />

                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href ?? "#"}
                            target={
                              child.external
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              child.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            onClick={() =>
                              setUtilityDropdown(null)
                            }
                            className="
                              relative z-10
                              block
                              rounded-lg
                              px-3
                              py-2.5
                              text-xs
                              text-white/75
                              transition-all duration-200
                              hover:bg-white/10
                              hover:text-[#D2B87C]
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* =================================================
                 NORMAL UTILITY LINK
              ================================================= */
              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  target={
                    item.external ? "_blank" : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    transition-colors duration-200
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Social */}
            <div
              className="
                flex items-center gap-3
                border-l border-white/20
                pl-5
              "
            >
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[
                  social.label as keyof typeof socialIcons
                  ];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      text-white/60
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:text-white
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN HEADER
      ========================================================= */}
      <div
        className="
          mx-auto flex max-w-8xl
          items-center justify-between
          gap-3
          px-4 py-3
          sm:px-6
          lg:py-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="NCERC Home"
          className="
            shrink-0
            transition-transform duration-300
            hover:scale-[1.015]
          "
        >
          <Image
            src="/images/ncercwht.webp"
            alt="NCERC crest"
            width={600}
            height={400}
            priority
            className="
              h-14
              w-auto
              object-contain
              drop-shadow-md
              sm:h-16
              lg:h-20
            "
          />
        </Link>

        {/* Navigation + Actions */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <DesktopNavigation items={primaryNavigation} />

          <div
            className="
              flex shrink-0
              items-center
              gap-1
              border-l border-white/15
              pl-2
              sm:gap-2
              sm:pl-3
              lg:ml-1
            "
          >
            {/* Search */}
            <button
              type="button"
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Open search"
              }
              aria-expanded={searchOpen}
              onClick={toggleSearch}
              className="
                group flex
                h-9 w-9
                items-center justify-center
                rounded-full
                border border-transparent
                text-white
                transition-all duration-200
                hover:border-white/15
                hover:bg-white/10
                hover:text-[#D2B87C]
                sm:h-10
                sm:w-10
              "
            >
              {searchOpen ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Search size={20} strokeWidth={1.8} />
              )}
            </button>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
              className="
                flex
                h-9 w-9
                items-center justify-center
                rounded-full
                border border-white/15
                bg-white/5
                text-white
                transition-all duration-200
                hover:border-[#D2B87C]/50
                hover:bg-white/10
                hover:text-[#D2B87C]
                lg:hidden
                sm:h-10
                sm:w-10
              "
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          SEARCH PANEL
      ========================================================= */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300 ease-out
          ${searchOpen
            ? "max-h-28 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            border-t border-white/10
            bg-[#20235A]/95
            px-4 py-4
            backdrop-blur-xl
            sm:px-6
          "
        >
          <form
            action="/search"
            method="GET"
            className="
              mx-auto flex max-w-8xl
              items-center gap-3
              rounded-xl
              border border-white/10
              bg-white/[0.06]
              px-3 py-2
              transition-colors
              focus-within:border-[#D2B87C]/40
            "
          >
            <Search
              size={18}
              strokeWidth={1.8}
              className="shrink-0 text-white/50"
            />

            <input
              type="search"
              name="q"
              autoFocus={searchOpen}
              placeholder="Search NCERC..."
              className="
                w-full
                border-none
                bg-transparent
                py-1
                text-sm
                text-white
                outline-none
                placeholder:text-white/40
              "
            />

            <button
              type="submit"
              className="
                shrink-0
                rounded-lg
                bg-[#D2B87C]
                px-4 py-2
                text-xs
                font-semibold
                text-[#20235A]
                transition-all duration-200
                hover:bg-[#D2B87C]
                hover:shadow-lg
                hover:shadow-[#D2B87C]/10
              "
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
      {mobileOpen && (
        <MobileNavigation
          items={primaryNavigation}
          onNavigate={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
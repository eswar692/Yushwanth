import {
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#120d09] text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <TopBar />
      <MainHeader />
      <ScrollingMarquee />
    </header>
  );
};

export default Header;

/* ================================================== */
/* TOP BAR */
/* ================================================== */

const TopBar = () => (
  <div className="border-b border-[#c8a45a]/20 bg-[#0c0806]">
    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-2 md:px-8">
      <div className="flex min-w-0 items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#d8b76a]" />

        <p className="open-sans truncate text-[10px] font-medium tracking-wide text-[#cfc4b5] md:text-xs">
          <span className="font-semibold text-[#e7c878]">
            {person_name}
          </span>

          <span className="hidden sm:inline">
            {" "}
            • Traditional Guidance Since 1956
          </span>
        </p>
      </div>

      <a
        href={`tel:${phone_number}`}
        className="group flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#e7c878] transition-colors hover:text-white md:text-xs"
      >
        <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />

        <span className="hidden sm:inline">Speak With Guruji</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </div>
);

/* ================================================== */
/* MAIN HEADER */
/* ================================================== */

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#17100c]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-[#c49a43]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="flex min-h-[82px] items-center justify-between gap-5 md:min-h-[100px]">

          {/* ================================================== */}
          {/* BRAND */}
          {/* ================================================== */}

          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 md:gap-4"
          >
            {/* Logo */}
            <div className="relative shrink-0">
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-full bg-[#d2ae5f]/20 blur-md transition-all duration-500 group-hover:bg-[#d2ae5f]/40" />

              {/* Gold ring */}
              <div className="relative rounded-full border border-[#d5b566] p-[3px]">
                <img
                  src="https://i.pinimg.com/1200x/25/fa/d2/25fad28281962fea4c9ced45d62cc8d7.jpg"
                  alt={`${business_name} Logo`}
                  className="h-12 w-12 rounded-full object-cover md:h-[66px] md:w-[66px]"
                />
              </div>
            </div>

            {/* Brand Text */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="montserrat truncate text-base font-bold tracking-tight text-[#f3e3bc] sm:text-lg md:text-2xl lg:text-3xl">
                  {business_name}
                </h1>

                <Star className="hidden h-4 w-4 fill-[#d8b76a] text-[#d8b76a] md:block" />
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-px w-5 bg-[#c7a252] md:w-8" />

                <p className="open-sans text-[8px] font-semibold tracking-[0.18em] text-[#bfa66f] sm:text-[9px] md:text-[10px]">
                  TRADITION • WISDOM • GUIDANCE
                </p>
              </div>

              <p className="open-sans mt-1 hidden text-[11px] text-[#988b7c] sm:block md:text-xs">
                Ancient wisdom for modern life
              </p>
            </div>
          </Link>

          {/* ================================================== */}
          {/* DESKTOP NAV */}
          {/* ================================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="group relative px-4 py-4 montserrat text-[13px] font-medium text-[#d5c8b6] transition-colors hover:text-[#e5c66d]"
              >
                {item}

                {/* Bottom gold line */}
                <span className="absolute bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#d5b35e] transition-all duration-300 group-hover:w-5/6" />
              </Link>
            ))}

            {/* Divider */}
            <div className="mx-3 h-7 w-px bg-[#c8a45a]/20" />

            {/* CTA */}
            <a
              href={`tel:${phone_number}`}
              className="group flex items-center gap-2 rounded-full border border-[#cba956] bg-[#cba956] px-5 py-2.5 montserrat text-xs font-bold text-[#17100c] shadow-[0_5px_20px_rgba(203,169,86,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c477] hover:shadow-[0_8px_25px_rgba(203,169,86,0.25)]"
            >
              <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
              Consult Now
            </a>
          </nav>

          {/* ================================================== */}
          {/* MOBILE BUTTON */}
          {/* ================================================== */}

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c8a45a]/30 bg-[#211711] text-[#dfc271] transition-all hover:border-[#d9bb6e] hover:bg-[#2a1c14] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && <MobileNav setOpen={setOpen} />}
    </div>
  );
};

/* ================================================== */
/* MOBILE NAVIGATION */
/* ================================================== */

const MobileNav = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => (
  <div className="fixed inset-0 z-[100] flex flex-col bg-[#120d09] text-white">

    {/* ================================================== */}
    {/* MOBILE HEADER */}
    {/* ================================================== */}

    <div className="border-b border-[#c8a45a]/15 bg-[#0c0806] px-5 py-5">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-[#d2b15f] p-[2px]">
            <img
              src="https://i.pinimg.com/736x/3d/e1/f9/3de1f95bebee24bac17e12b23ea11248.jpg"
              alt={`${business_name} Logo`}
              className="h-11 w-11 rounded-full object-cover"
            />
          </div>

          <div>
            <h2 className="montserrat text-base font-bold text-[#f0dfb6]">
              {business_name}
            </h2>

            <p className="open-sans mt-0.5 text-[10px] uppercase tracking-wider text-[#a9936b]">
              Since 1956
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a45a]/20 bg-[#1d130e] text-[#dfc271] transition hover:bg-[#291b13]"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>

    {/* ================================================== */}
    {/* MOBILE CONTENT */}
    {/* ================================================== */}

    <div className="flex-1 overflow-y-auto px-5 py-8">

      <div className="mb-8">
        <p className="open-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a957]">
          Explore
        </p>

        <div className="mt-2 h-px w-10 bg-[#c9a957]" />
      </div>

      <nav>
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between border-b border-[#c8a45a]/10 py-5"
          >
            <div className="flex items-center gap-5">
              <span className="open-sans text-[10px] font-bold text-[#806c4d]">
                0{index + 1}
              </span>

              <span className="montserrat text-lg font-semibold text-[#e5d7bf] transition-colors group-hover:text-[#e0bd63]">
                {item}
              </span>
            </div>

            <ChevronRight className="h-5 w-5 text-[#756348] transition-all group-hover:translate-x-1 group-hover:text-[#d6b35e]" />
          </Link>
        ))}
      </nav>

      {/* ================================================== */}
      {/* MOBILE CTA */}
      {/* ================================================== */}

      <a
        href={`tel:${phone_number}`}
        className="mt-9 flex w-full items-center justify-center gap-3 rounded-full bg-[#cba956] py-4 montserrat text-sm font-bold text-[#160e09] shadow-[0_8px_25px_rgba(203,169,86,0.15)] transition hover:bg-[#e0c477]"
      >
        <Phone className="h-5 w-5" />
        Call for Consultation
      </a>

      {/* Quote */}
      <div className="mt-10 text-center">
        <Sparkles className="mx-auto mb-3 h-5 w-5 text-[#c8a45a]" />

        <p className="open-sans mx-auto max-w-xs text-xs leading-6 text-[#928373]">
          Traditional wisdom and thoughtful guidance for love, marriage,
          career, family and life's important decisions.
        </p>
      </div>
    </div>

    {/* ================================================== */}
    {/* MOBILE FOOTER */}
    {/* ================================================== */}

    <div className="border-t border-[#c8a45a]/15 bg-[#0c0806] px-5 py-5 text-center">
      <p className="open-sans text-[9px] uppercase tracking-[0.25em] text-[#806c4d]">
        Traditional Guidance
      </p>

      <p className="mt-1 montserrat text-xs font-semibold text-[#c9ad68]">
        Trusted Since 1956
      </p>
    </div>
  </div>
);

/* ================================================== */
/* SCROLLING ANNOUNCEMENT */
/* ================================================== */

const ScrollingMarquee = () => (
  <div className="overflow-hidden border-t border-[#c8a45a]/20 bg-[#c49d4c]">
    <Marquee
      speed={42}
      gradient={false}
      pauseOnHover
      className="whitespace-nowrap py-2"
    >
      <span className="open-sans text-[10px] font-semibold uppercase tracking-wider text-[#17100c] md:text-xs">

        <span className="mx-5">
          ✦ Love & Relationship Guidance
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Husband & Wife Issues
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Career & Business Guidance
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Horoscope Consultation
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Spiritual Guidance
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Black Magic Removal
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Ex-Love Back
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Vashikarana
        </span>

        <span className="text-[#694c18]">•</span>

        <span className="mx-5">
          Trusted Guidance Since 1956
        </span>

        <span className="mx-5 text-[#694c18]">
          ✦
        </span>

      </span>
    </Marquee>
  </div>
);
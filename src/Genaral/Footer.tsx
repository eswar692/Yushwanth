
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Star,
} from "lucide-react";

import useInViewOnce from "./InView";

import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.15);

  const services = [
    "Personal Spiritual Guidance",
    "Relationship Guidance",
    "Astrology Consultation",
    "Love & Relationship Guidance",
    "Love Marriage Guidance",
    "Marriage Compatibility Guidance",
  ];

  const whyChoose = [
    "Experienced Astrologer",
    "Traditional Astrology Guidance",
    "Online Consultations",
    "Personalized Guidance",
    "Private & Confidential Consultation",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#100b08] text-[#f6efe3] open-sans">

      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/0c/27/a4/0c27a427b4d1939110bf6ba9a8c170f5.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#100b08]/90" />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#cba956]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#8b1e1e]/10 blur-[100px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cba956]/5 blur-[120px]" />

      {/* ================================================== */}
      {/* MAIN */}
      {/* ================================================== */}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 35 }
        }
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-[1500px] px-5 pb-10 pt-14 md:px-8 md:pt-20"
      >

        {/* ================================================== */}
        {/* PREMIUM CTA */}
        {/* ================================================== */}

        <div className="relative mb-16 overflow-hidden rounded-[28px] border border-[#cba956]/25 bg-gradient-to-br from-[#241710] to-[#17100c]">

          {/* Gold glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#cba956]/10 blur-[70px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 px-6 py-9 md:flex-row md:px-10 md:py-10">

            {/* Left */}
            <div className="text-center md:text-left">

              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                <Sparkles className="h-4 w-4 text-[#d9b867]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#cba956]">
                  Personal Guidance
                </span>
              </div>

              <h2 className="montserrat text-2xl font-extrabold tracking-tight text-[#f8edda] md:text-3xl">
                Looking for clarity in life?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a99b8c] md:text-[15px]">
                Connect with {person_name} for traditional guidance on
                relationships, marriage, career and important life decisions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">

              <a
                href={`tel:${phone_number}`}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#cba956] px-7 py-3.5 montserrat text-xs font-bold text-[#160e09] shadow-[0_8px_30px_rgba(203,169,86,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c477]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-[#cba956]/40 px-7 py-3.5 montserrat text-xs font-bold text-[#dfc477] transition-all duration-300 hover:bg-[#cba956]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* FOOTER GRID */}
        {/* ================================================== */}

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ================================================== */}
          {/* ABOUT */}
          {/* ================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <div className="relative rounded-full border border-[#cba956] p-[3px]">

                <div className="absolute -inset-1 rounded-full bg-[#cba956]/10 blur-md" />

                <img
                  src="https://i.pinimg.com/736x/3d/e1/f9/3de1f95bebee24bac17e12b23ea11248.jpg"
                  alt={`${business_name} Logo`}
                  className="relative h-14 w-14 rounded-full object-cover"
                />

              </div>

              <div>
                <h2 className="montserrat text-lg font-extrabold text-[#f4e8d2] md:text-xl">
                  {business_name}
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#cba956]" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b99b58]">
                    Since 1956
                  </p>
                </div>
              </div>

            </div>

            <p className="text-sm leading-7 text-[#a99b8d]">
              Traditional guidance led by{" "}
              <span className="font-semibold text-[#d9bc70]">
                {person_name}
              </span>
              , offering personalized guidance for relationships, marriage,
              career, family and life's important decisions.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#b8aa9b]">
              <ShieldCheck className="h-4 w-4 text-[#cba956]" />
              <span>Private • Personal • Traditional</span>
            </div>

          </div>

          {/* ================================================== */}
          {/* SERVICES */}
          {/* ================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-2">
              <Star className="h-3.5 w-3.5 fill-[#cba956] text-[#cba956]" />

              <h3 className="montserrat text-sm font-bold uppercase tracking-[0.18em] text-[#dec273]">
                Our Services
              </h3>
            </div>

            <ul className="space-y-3">

              {services.map((service, idx) => (
                <li key={idx}>

                  <a
                    href="/services"
                    className="group flex items-start gap-2.5 text-sm text-[#a99b8d] transition-colors hover:text-[#e0c477]"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#8e703b] transition-transform group-hover:translate-x-1 group-hover:text-[#cba956]" />

                    <span>{service}</span>
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* ================================================== */}
          {/* WHY CHOOSE */}
          {/* ================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#cba956]" />

              <h3 className="montserrat text-sm font-bold uppercase tracking-[0.18em] text-[#dec273]">
                Why Choose Us
              </h3>
            </div>

            <ul className="space-y-3.5">

              {whyChoose.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#a99b8d]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#cba956]" />

                  <span>{item}</span>
                </li>
              ))}

            </ul>

            {/* Trust badge */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#cba956]/20 bg-[#cba956]/5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#d6b967]">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Since 1956
            </div>

          </div>

          {/* ================================================== */}
          {/* CONTACT */}
          {/* ================================================== */}

          <div>

            <div className="mb-6 flex items-center gap-2">

              <Phone className="h-3.5 w-3.5 text-[#cba956]" />

              <h3 className="montserrat text-sm font-bold uppercase tracking-[0.18em] text-[#dec273]">
                Contact
              </h3>

            </div>

            <div className="space-y-3">

              {/* Phone */}
              <a
                href={`tel:${phone_number}`}
                className="group flex items-center gap-3 rounded-2xl border border-[#cba956]/10 bg-[#1a110c] p-3.5 transition-all duration-300 hover:border-[#cba956]/30 hover:bg-[#21160f]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#cba956]/15 bg-[#cba956]/5">
                  <Phone className="h-4 w-4 text-[#d8b867]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#75695f]">
                    Call
                  </p>

                  <p className="mt-1 montserrat text-sm font-semibold text-[#e6d9c6]">
                    {phone_number}
                  </p>
                </div>

              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[#cba956]/10 bg-[#1a110c] p-3.5 transition-all duration-300 hover:border-[#cba956]/30 hover:bg-[#21160f]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#cba956]/15 bg-[#cba956]/5">
                  <MessageCircle className="h-4 w-4 text-[#d8b867]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#75695f]">
                    WhatsApp
                  </p>

                  <p className="mt-1 montserrat text-sm font-semibold text-[#e6d9c6]">
                    +91 {whatsapp_number}
                  </p>
                </div>

              </a>

            </div>

            <p className="mt-5 text-xs leading-5 text-[#776c62]">
              Online consultations available. Reach out to discuss your
              requirements and schedule a consultation.
            </p>

          </div>

        </div>

        {/* ================================================== */}
        {/* DIVIDER */}
        {/* ================================================== */}

        <div className="my-12 flex items-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#cba956]/20" />

          <Sparkles className="h-3.5 w-3.5 text-[#8d703e]" />

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#cba956]/20" />

        </div>

        {/* ================================================== */}
        {/* LEGAL */}
        {/* ================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">

            <a
              href="/privacy-policy"
              className="text-[#82766b] transition-colors hover:text-[#d7b967]"
            >
              Privacy Policy
            </a>

            <span className="text-[#493b31]">•</span>

            <a
              href="/terms"
              className="text-[#82766b] transition-colors hover:text-[#d7b967]"
            >
              Terms of Service
            </a>

          </div>

          <p className="text-center text-[11px] text-[#675c53] md:text-right">
            © {new Date().getFullYear()} {business_name}. All Rights Reserved.
          </p>

        </div>

      </motion.div>

      {/* ================================================== */}
      {/* DEVELOPER BAR */}
      {/* ================================================== */}

      <div className="relative z-20 border-t border-[#cba956]/10 bg-[#0b0705]">

        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-2 px-5 py-4 sm:flex-row md:px-8">

          <p className="text-center text-[10px] text-[#62574e] sm:text-left md:text-xs">
            Designed & Developed by{" "}
            <a
              href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#b99951] transition-colors hover:text-[#e1c477]"
            >
              Eswar
            </a>
          </p>

          <a
            href="https://www.astrologercenter.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-[10px] text-[#62574e] transition-colors hover:text-[#c9aa5d] md:text-xs"
          >
            astrologercenter.in

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>

      </div>

    </footer>
  );
}


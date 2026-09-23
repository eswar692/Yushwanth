import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

import {
  phone_number,
  whatsapp_number,
  business_name,
} from "../Genaral/secret";

const services = [
  {
    name: "Love Problems",
    short: "Love & Relationships",
    desc: "Guidance for lost love, misunderstandings, emotional concerns, and building healthier relationships.",
    img: "https://i.pinimg.com/736x/e8/91/e8/e891e8ff7fdef71d225d4eb0ffc88d45.jpg",
  },
  {
    name: "Marriage Issues",
    short: "Marriage Guidance",
    desc: "Traditional guidance for compatibility, communication, married-life concerns, and relationship harmony.",
    img: "https://i.pinimg.com/1200x/5c/e9/ab/5ce9ab9d0a7220e4c76b07afe1bd165c.jpg",
  },
  {
    name: "Court Cases",
    short: "Legal Matters",
    desc: "Traditional astrological guidance for people navigating legal concerns, disputes, and difficult situations.",
    img: "https://i.pinimg.com/736x/72/3b/91/723b91a840e8c25bc48dd9229fbf9346.jpg",
  },
  {
    name: "Finance Problems",
    short: "Financial Guidance",
    desc: "Guidance for financial decisions, business concerns, investments, and working toward greater stability.",
    img: "https://i.pinimg.com/736x/b2/52/c6/b252c6de7017f650f1bc359376c67614.jpg",
  },
  {
    name: "Education Guidance",
    short: "Education & Studies",
    desc: "Personalized guidance for students seeking better focus, confidence, educational direction, and higher studies.",
    img: "https://i.pinimg.com/736x/9b/9b/85/9b9b85cb47685834c67847e58dad4a1d.jpg",
  },
  {
    name: "Career Growth",
    short: "Career Guidance",
    desc: "Guidance for career decisions, job opportunities, professional growth, workplace challenges, and new directions.",
    img: "https://i.pinimg.com/736x/51/3a/68/513a68831469aa23ffda70e7ab9fcc90.jpg",
  },
  {
    name: "Future Predictions",
    short: "Horoscope Reading",
    desc: "Personalized horoscope readings offering traditional insights into important areas and future possibilities.",
    img: "https://i.pinimg.com/736x/28/c2/ce/28c2ce0800375da2317f4792e196e86e.jpg",
  },
];

export default function Services() {
  return (
    <main className="relative overflow-hidden bg-[#f5f0e7]">

      {/* ================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#cba956]/8 blur-[110px]" />

      <div className="pointer-events-none absolute -left-40 top-[850px] h-[450px] w-[450px] rounded-full bg-[#8b1e1e]/5 blur-[100px]" />

      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#120c08] px-5 py-20 md:px-8 md:py-28">

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#cba956]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[#8b1e1e]/10 blur-[110px]" />

        {/* Subtle center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cba956]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#cba956]/70" />

            <Sparkles className="h-4 w-4 text-[#d9b867]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4b465] md:text-xs">
              Our Services
            </span>

            <Sparkles className="h-4 w-4 text-[#d9b867]" />

            <span className="h-px w-10 bg-[#cba956]/70" />

          </div>

          {/* Heading */}
          <h1 className="montserrat text-4xl font-extrabold leading-[1.12] tracking-tight text-[#f9efdc] sm:text-5xl md:text-6xl">

            Traditional Guidance

            <span className="mt-2 block text-[#d9b867]">
              For Life's Important Moments
            </span>

          </h1>

          {/* Divider */}
          <div className="my-7 flex items-center justify-center gap-3">

            <span className="h-px w-16 bg-[#cba956]/60 md:w-20" />

            <span className="h-2 w-2 rotate-45 bg-[#cba956]" />

            <span className="h-px w-16 bg-[#cba956]/60 md:w-20" />

          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#a99b8d] md:text-base md:leading-8">
            Explore personalized astrology and spiritual guidance for
            relationships, marriage, career, family, business and personal
            concerns.
          </p>

          {/* Small trust line */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806e58]">
            <Star className="h-3 w-3 fill-[#cba956] text-[#cba956]" />
            Traditional Guidance Since 1956
            <Star className="h-3 w-3 fill-[#cba956] text-[#cba956]" />
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SERVICES SECTION */}
      {/* ================================================== */}

      <section className="relative px-5 py-16 md:px-8 md:py-24">

        <div className="relative z-10 mx-auto max-w-[1250px]">

          {/* ================================================== */}
          {/* SECTION HEADING */}
          {/* ================================================== */}

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#96702f]">
              Areas Of Guidance
            </p>

            <h2 className="montserrat mt-3 text-3xl font-extrabold tracking-tight text-[#291911] md:text-4xl">
              How We Can Help
            </h2>

            <div className="my-5 flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-[#cba956]" />

              <span className="h-2 w-2 rotate-45 bg-[#cba956]" />

              <span className="h-px w-12 bg-[#cba956]" />

            </div>

            <p className="text-sm leading-7 text-[#796c60]">
              Explore the areas where personalized and traditional guidance
              may help you gain greater clarity.
            </p>

          </div>

          {/* ================================================== */}
          {/* SERVICE GRID */}
          {/* ================================================== */}

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <article
                key={service.name}
                className="group relative overflow-hidden rounded-[28px] border border-[#ded3c3] bg-[#fffdf9] shadow-[0_15px_45px_rgba(52,35,22,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#cba956]/40 hover:shadow-[0_25px_65px_rgba(52,35,22,0.14)]"
              >

                {/* ================================================== */}
                {/* IMAGE */}
                {/* ================================================== */}

                <div className="relative h-[270px] overflow-hidden">

                  <img
                    src={service.img}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/90 via-[#120c08]/15 to-transparent" />

                  {/* Top number */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b867]/30 bg-[#120c08]/70 backdrop-blur-md">

                    <span className="text-[10px] font-bold text-[#e0c477]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Hover arrow */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/20 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                    <ArrowRight className="h-4 w-4 text-white" />

                  </div>

                  {/* Image title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9b867]">
                      {service.short}
                    </p>

                    <h3 className="montserrat mt-1 text-xl font-extrabold text-white">
                      {service.name}
                    </h3>

                  </div>

                </div>

                {/* ================================================== */}
                {/* CONTENT */}
                {/* ================================================== */}

                <div className="p-6">

                  <p className="min-h-[84px] text-sm leading-7 text-[#6d6056]">
                    {service.desc}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-[#e9e0d4]" />

                  {/* Feature */}
                  <div className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#8b7968]">

                    <CheckCircle2 className="h-3.5 w-3.5 text-[#b58a3d]" />

                    Personalized consultation

                  </div>

                  {/* ================================================== */}
                  {/* ACTIONS */}
                  {/* ================================================== */}

                  <div className="grid grid-cols-2 gap-3">

                    {/* Call */}
                    <a
                      href={`tel:${phone_number}`}
                      className="group/btn flex items-center justify-center gap-2 rounded-xl bg-[#8b1e1e] py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a32727] hover:shadow-lg"
                    >

                      <Phone className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />

                      Call

                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${whatsapp_number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 rounded-xl border border-[#cba956]/30 bg-[#cba956]/5 py-3 text-xs font-bold text-[#80652d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cba956]/15"
                    >

                      <MessageCircle className="h-4 w-4" />

                      WhatsApp

                    </a>

                  </div>

                </div>

                {/* Bottom luxury line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#8b1e1e] via-[#cba956] to-[#8b1e1e] transition-transform duration-500 group-hover:scale-x-100" />

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* CONSULTATION CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#120c08] px-5 py-16 md:px-8 md:py-20">

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[550px] -translate-x-1/2 rounded-full bg-[#cba956]/8 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#cba956]/25 bg-[#cba956]/5">

            <Sparkles className="h-5 w-5 text-[#d9b867]" />

          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#cba956]">
            {business_name}
          </p>

          <h2 className="montserrat mt-3 text-2xl font-extrabold text-[#f9efdc] md:text-4xl">
            Looking For Personal Guidance?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#9e9183]">
            Choose a convenient way to connect and discuss your concerns
            privately.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cba956] px-7 py-3.5 text-xs font-bold text-[#160e09] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c477] hover:shadow-[0_10px_30px_rgba(203,169,86,0.18)]"
            >

              <Phone className="h-4 w-4" />

              Call Now

            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cba956]/35 px-7 py-3.5 text-xs font-bold text-[#dec477] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cba956]/10"
            >

              <MessageCircle className="h-4 w-4" />

              Chat on WhatsApp

              <ArrowRight className="h-3.5 w-3.5" />

            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

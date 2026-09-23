import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

export default function ProblemGrid() {
  const items = [
    {
      title: "Relationship Guidance",
      img: "https://i.pinimg.com/736x/64/f2/c0/64f2c022c60b2138e37148c32b859ad7.jpg",
      desc: "Thoughtful guidance for relationship concerns, communication and harmony.",
    },
    {
      title: "Partner Harmony",
      img: "https://i.pinimg.com/736x/66/5b/59/665b598c7bc1684e8b421ff67a0dabd3.jpg",
      desc: "Guidance focused on understanding, trust and emotional connection.",
    },
    {
      title: "Couple Harmony",
      img: "https://i.pinimg.com/1200x/7d/28/3e/7d283e6401a3df9c6d268263a7a960b0.jpg",
      desc: "Traditional guidance for closeness, communication and mutual understanding.",
    },
    {
      title: "Love Guidance",
      img: "https://i.pinimg.com/736x/78/da/83/78da83ed7841917877d35e668c66b864.jpg",
      desc: "Personalized guidance for love, communication and relationship concerns.",
    },
    {
      title: "Marriage Guidance",
      img: "https://i.pinimg.com/736x/5d/a3/5c/5da35c351423d9b066f03c47aab8c74b.jpg",
      desc: "Traditional guidance for marriage, communication and family harmony.",
    },
    {
      title: "Vastu Guidance",
      img: "https://i.pinimg.com/736x/50/11/6a/50116aec7d278f787dae6de669d39e6b.jpg",
      desc: "Traditional Vastu guidance for balanced homes and workspaces.",
    },
    {
      title: "Career Guidance",
      img: "https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg",
      desc: "Guidance for career decisions, confidence and personal growth.",
    },
    {
      title: "Family Harmony",
      img: "https://i.pinimg.com/736x/9a/ab/ac/9aabac56c514a27cbcc112b5fc220642.jpg",
      desc: "Supportive guidance for family relationships and misunderstandings.",
    },
    {
      title: "Breakup Support",
      img: "https://i.pinimg.com/736x/f9/83/a2/f983a2bb11d4e8058f3d65aa178c13d4.jpg",
      desc: "Compassionate guidance for separation and difficult relationship periods.",
    },
    {
      title: "Positive Energy",
      img: "https://i0.wp.com/www.royalperspectives.com/wp-content/uploads/2023/08/what-do-your-enemies-hate-about-you-the-most-2-354-1574696841-0_dblbig.jpg?fit=1200%2C797&ssl=1",
      desc: "Traditional practices focused on positivity, peace and personal wellbeing.",
    },
    {
      title: "Couples Guidance",
      img: "https://i.pinimg.com/736x/52/08/b9/5208b9f29d6163bb20c66768a3e03969.jpg",
      desc: "Guidance for couples seeking understanding, harmony and family wellbeing.",
    },
    {
      title: "Puja & Mantras",
      img: "https://i.pinimg.com/736x/43/8a/12/438a12dde5f045a8a6a4a25b1b1cccce.jpg",
      desc: "Traditional pujas, mantras and spiritual practices for personal guidance.",
    },
    {
      title: "Black Magic Removal",
      img: "https://i.pinimg.com/1200x/35/67/5f/35675f87b2525d2f62d41bcabc9830d5.jpg",
      desc: "Traditional spiritual guidance and puja practices for people seeking peace, positivity and relief from spiritual concerns.",
    },
    {
      title: "Ex Love Back",
      img: "https://i.pinimg.com/736x/24/e0/2f/24e02fb2fe0229a05a12409e1bd6d6e9.jpg",
      desc: "Supportive guidance for people dealing with separation, unresolved emotions and relationship concerns.",
    },
    {
      title: "Career Problems",
      img: "https://i.pinimg.com/736x/0b/5c/6b/0b5c6bf6e6d5dee9459a72e06c90ac7e.jpg",
      desc: "Personalized guidance for career uncertainty, workplace challenges, professional decisions and future opportunities.",
    },
    {
      title: "Kids Problems",
      img: "https://i.pinimg.com/736x/7a/4f/23/7a4f235908e34cba5b1340af7fae18be.jpg",
      desc: "Supportive guidance for parents dealing with communication, education, behaviour and family-related concerns.",
    },
    {
      title: "Divorce & Marriage Guidance",
      img: "https://i.pinimg.com/736x/e1/ee/1d/e1ee1db8fe6292204a6e01d7a06b65c0.jpg",
      desc: "Traditional guidance for couples facing serious marital disagreements, communication difficulties and separation concerns.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d0907] py-20 md:py-28 px-5">
      {/* ========================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ========================================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#c9a45b]/10 blur-[120px]" />

        <div className="absolute top-[35%] -left-48 w-[500px] h-[500px] rounded-full bg-[#8b1e1e]/10 blur-[130px]" />

        <div className="absolute bottom-0 right-[15%] w-72 h-72 rounded-full bg-[#c9a45b]/5 blur-[100px]" />
      </div>

      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#d8b568 1px, transparent 1px), linear-gradient(90deg, #d8b568 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto">
        {/* ========================================= */}
        {/* SECTION HEADING */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
        >
          {/* Label */}

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a45b]" />

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d9b96e]" />

              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d9b96e]">
                AREAS OF GUIDANCE
              </span>

              <Sparkles className="w-4 h-4 text-[#d9b96e]" />
            </div>

            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a45b]" />
          </div>

          {/* Heading */}

          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#fff8e8]">
            Guidance For
            <span className="block mt-2 bg-gradient-to-r from-[#c9a45b] via-[#f0d58b] to-[#b28535] bg-clip-text text-transparent">
              What Matters Most
            </span>
          </h2>

          {/* Decorative divider */}

          <div className="flex items-center justify-center gap-3 my-7">
            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#c9a45b]" />

            <span className="w-2.5 h-2.5 rotate-45 border border-[#d9b96e] bg-[#0d0907]" />

            <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#c9a45b]" />
          </div>

          <p className="open-sans text-sm md:text-base lg:text-lg leading-7 text-[#b9aa9b]">
            {person_name} offers traditional astrology and spiritual guidance
            for relationships, marriage, family, career and other important
            areas of life.
          </p>

          {/* Tradition badges */}

          <div className="flex flex-wrap justify-center gap-2.5 mt-7">
            {[
              "Hindu Tradition",
              "Muslim Tradition",
              "Christian Tradition",
              "All Individuals Welcome",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-[#c9a45b]/20 text-[11px] md:text-xs font-semibold text-[#d8c7ad] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* SERVICE GRID */}
        {/* ========================================= */}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.055,
              },
            },
          }}
        >
          {items.map((it, idx) => (
            <motion.article
              key={idx}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl overflow-hidden bg-[#17100c] border border-[#c9a45b]/15 shadow-[0_15px_45px_rgba(0,0,0,0.28)] hover:border-[#c9a45b]/45 hover:shadow-[0_25px_60px_rgba(0,0,0,0.42)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Cinematic overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-[#0d0907]/20 to-transparent" />

                <div className="absolute inset-0 bg-[#8b1e1e]/0 group-hover:bg-[#8b1e1e]/10 transition-colors duration-500" />

                {/* Number */}

                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#0d0907]/75 backdrop-blur-md border border-[#d8b568]/40 flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-wider text-[#e5c878]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Small icon */}

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0d0907]/65 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#e0bd6a]" />
                </div>

                {/* Image title */}

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0907]/75 backdrop-blur-md border border-[#d8b568]/30 text-[11px] font-semibold text-[#f2d991]">
                    <Star className="w-3 h-3 fill-[#d8b568] text-[#d8b568]" />
                    {it.title}
                  </span>
                </div>
              </div>

              {/* ================================= */}
              {/* CONTENT */}
              {/* ================================= */}

              <div className="relative p-5 md:p-6">
                {/* gold top line */}

                <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#c9a45b]/50 to-transparent" />

                <h3 className="montserrat text-lg font-bold text-[#fff6e4] group-hover:text-[#e5c878] transition-colors duration-300">
                  {it.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#aa9b8d] min-h-[72px]">
                  {it.desc}
                </p>

                {/* Explore */}

                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide text-[#d5b35f] group/link"
                >
                  <span className="relative">
                    Explore Guidance
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d5b35f] group-hover/link:w-full transition-all duration-300" />
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ========================================= */}
        {/* CONSULTATION CTA */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-20 relative overflow-hidden rounded-[28px] border border-[#c9a45b]/25 bg-gradient-to-br from-[#21150f] via-[#160e0a] to-[#0d0907] px-6 py-10 md:px-12 md:py-12"
        >
          {/* glow */}

          <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-[#c9a45b]/10 blur-[100px]" />

          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#8b1e1e]/10 blur-[100px]" />

          {/* Decorative border */}

          <div className="absolute inset-3 rounded-[22px] border border-[#c9a45b]/10 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}

            <div className="text-center lg:text-left max-w-2xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#dfbd69]" />

                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#d5b35f]">
                  PERSONAL CONSULTATION
                </span>
              </div>

              <h3 className="montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#fff7e8]">
                Not Sure Which Guidance
                <span className="block text-[#d8b568]">
                  You Need?
                </span>
              </h3>

              <p className="mt-3 text-sm md:text-base leading-6 text-[#b6a79a]">
                Speak directly with {person_name} and discuss your situation
                personally.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${phone_number}`}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#8b1e1e] to-[#a52a2a] text-white montserrat text-sm font-bold shadow-[0_10px_30px_rgba(139,30,30,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(139,30,30,0.35)] transition-all duration-300"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#c9a45b]/45 bg-[#c9a45b]/5 text-[#e6ca82] montserrat text-sm font-bold hover:bg-[#c9a45b]/10 hover:border-[#c9a45b]/70 hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* BRAND NOTE */}
        {/* ========================================= */}

        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a45b]/40" />

          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#c9a45b]/60" />

            <p className="text-[10px] md:text-xs tracking-wide text-[#786b60] text-center">
              Traditional Guidance • Personal Attention • {business_name}
            </p>

            <Sparkles className="w-3 h-3 text-[#c9a45b]/60" />
          </div>

          <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a45b]/40" />
        </div>
      </div>
    </section>
  );
}
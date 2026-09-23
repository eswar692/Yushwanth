"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { phone_number, whatsapp_number } from "./secret";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const cards = [
    {
      number: "01",
      title: "Love & Relationship Guidance",
      shortTitle: "Love & Relationships",
      desc: "Thoughtful guidance for relationship concerns, misunderstandings, emotional connection and harmony in your love life.",
      img: "https://i.pinimg.com/736x/5e/74/25/5e7425172b397ad5e9f4073db1410636.jpg",
    },
    {
      number: "02",
      title: "Spiritual Reading",
      shortTitle: "Spiritual Reading",
      desc: "Explore traditional spiritual insights for love, marriage, career, finances and important life decisions.",
      img: "https://i.pinimg.com/736x/89/7f/ab/897fab251dd39b6b5ff06a7e097a5a46.jpg",
    },
    {
      number: "03",
      title: "Business Guidance",
      shortTitle: "Business & Career",
      desc: "Guidance for business challenges, career decisions, growth opportunities and creating a positive direction.",
      img: "https://i.pinimg.com/736x/0a/51/03/0a51033f2bba92f3b24fb5a7108415a4.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d0907] py-20 md:py-28">
      {/* ========================================= */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ========================================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a45b]/10 blur-[130px]" />

        <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full bg-[#8b1e1e]/10 blur-[130px]" />

        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full bg-[#c9a45b]/5 blur-[120px]" />
      </div>

      {/* Subtle grid */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#d8b568 1px, transparent 1px), linear-gradient(90deg, #d8b568 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ========================================= */}
      {/* SECTION HEADING */}
      {/* ========================================= */}

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-10 md:w-14 h-px bg-gradient-to-r from-transparent to-[#c9a45b]" />

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d9b96e]" />

            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d9b96e]">
              PERSONALIZED GUIDANCE
            </span>

            <Sparkles className="w-4 h-4 text-[#d9b96e]" />
          </div>

          <span className="w-10 md:w-14 h-px bg-gradient-to-l from-transparent to-[#c9a45b]" />
        </div>

        <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fff8e8] leading-[1.08]">
          Guidance For Your
          <span className="block mt-2 bg-gradient-to-r from-[#c9a45b] via-[#f0d58b] to-[#b28535] bg-clip-text text-transparent">
            Important Life Decisions
          </span>
        </h2>

        {/* Gold divider */}

        <div className="flex items-center justify-center gap-3 my-7">
          <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[#c9a45b]" />

          <span className="w-2.5 h-2.5 rotate-45 border border-[#d9b96e] bg-[#0d0907]" />

          <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[#c9a45b]" />
        </div>

        <p className="open-sans text-sm md:text-base lg:text-lg leading-7 text-[#b9aa9b]">
          Explore traditional astrology and spiritual guidance for
          relationships, personal growth, career and life.
        </p>
      </div>

      {/* ========================================= */}
      {/* CAROUSEL */}
      {/* ========================================= */}

      <div
        className="relative z-10 w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex items-stretch">
          {cards.map((card) => (
            <div
              key={card.number}
              className="flex-[0_0_91%] sm:flex-[0_0_72%] md:flex-[0_0_48%] lg:flex-[0_0_35%] xl:flex-[0_0_31%] px-3 md:px-4"
            >
              <article className="group relative h-full min-h-[560px] bg-[#17100c] rounded-[28px] overflow-hidden border border-[#c9a45b]/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-[#c9a45b]/45 hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(0,0,0,0.5)] transition-all duration-500">
                {/* ================================= */}
                {/* IMAGE */}
                {/* ================================= */}

                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Cinematic overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-[#0d0907]/20 to-transparent" />

                  <div className="absolute inset-0 bg-[#8b1e1e]/0 group-hover:bg-[#8b1e1e]/10 transition-colors duration-500" />

                  {/* Number */}

                  <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#0d0907]/75 backdrop-blur-md border border-[#e0bd68]/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#f1d58b]">
                      {card.number}
                    </span>
                  </div>

                  {/* Sparkle */}

                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#0d0907]/65 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#e0bd6a]" />
                  </div>

                  {/* Category */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0907]/75 backdrop-blur-md border border-[#e0bd68]/30 text-[11px] font-semibold text-[#f4dda0]">
                      <Star className="w-3 h-3 fill-[#e0bd68] text-[#e0bd68]" />
                      {card.shortTitle}
                    </span>
                  </div>
                </div>

                {/* ================================= */}
                {/* CONTENT */}
                {/* ================================= */}

                <div className="relative p-6 md:p-7 flex flex-col h-[280px]">
                  {/* Gold top line */}

                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c9a45b]/50 to-transparent" />

                  {/* Label */}

                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-px bg-[#c9a45b]" />

                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#b99348]">
                      TRADITIONAL GUIDANCE
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="montserrat text-xl md:text-2xl font-extrabold text-[#fff6e4] leading-snug group-hover:text-[#e5c878] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}

                  <p className="open-sans mt-3 text-sm md:text-[15px] leading-6 text-[#aa9b8d]">
                    {card.desc}
                  </p>

                  {/* Bottom */}

                  <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                    <Link
                      to="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#d5b35f]"
                    >
                      <span className="relative">
                        Learn More

                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d5b35f] group-hover/link:w-full transition-all duration-300" />
                      </span>

                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <a
                      href={`tel:${phone_number}`}
                      className="w-11 h-11 rounded-full bg-[#c9a45b]/10 border border-[#c9a45b]/25 flex items-center justify-center text-[#d9b96e] hover:bg-[#8b1e1e] hover:border-[#8b1e1e] hover:text-white transition-all duration-300"
                      aria-label="Call for consultation"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================= */}
      {/* NAVIGATION */}
      {/* ========================================= */}

      <div className="relative z-20 flex items-center justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          aria-label="Previous service"
          className="group w-12 h-12 rounded-full bg-[#17100c] border border-[#c9a45b]/25 text-[#d8b568] flex items-center justify-center shadow-lg hover:bg-[#c9a45b] hover:text-[#17100c] hover:border-[#c9a45b] transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#17100c] border border-[#c9a45b]/15">
          <Sparkles className="w-3.5 h-3.5 text-[#c9a45b]" />

          <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#968678]">
            EXPLORE OUR GUIDANCE
          </span>

          <Sparkles className="w-3.5 h-3.5 text-[#c9a45b]" />
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next service"
          className="group w-12 h-12 rounded-full bg-[#17100c] border border-[#c9a45b]/25 text-[#d8b568] flex items-center justify-center shadow-lg hover:bg-[#c9a45b] hover:text-[#17100c] hover:border-[#c9a45b] transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* ========================================= */}
      {/* BOTTOM CTA */}
      {/* ========================================= */}

      <div className="relative z-10 max-w-4xl mx-auto px-5 mt-14 md:mt-16">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#21150f] via-[#160e0a] to-[#0d0907] border border-[#c9a45b]/20 px-6 py-7 md:px-9 md:py-8">
          {/* Glow */}

          <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#c9a45b]/10 blur-[80px]" />

          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-[#8b1e1e]/10 blur-[80px]" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Text */}

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#d9b96e]" />

                <span className="text-[9px] font-bold tracking-[0.22em] text-[#c9a45b]">
                  PERSONAL CONSULTATION
                </span>
              </div>

              <p className="montserrat text-lg md:text-xl font-bold text-[#fff6e5]">
                Need Personal Guidance?
              </p>

              <p className="text-xs md:text-sm text-[#bcae9e] mt-1">
                Speak directly with an experienced astrologer.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex gap-3 shrink-0">
              <a
                href={`tel:${phone_number}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8b1e1e] to-[#a52a2a] text-white text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#c9a45b]/45 bg-[#c9a45b]/5 text-[#f0d68f] text-sm font-bold hover:bg-[#c9a45b]/10 hover:border-[#c9a45b]/70 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM DECORATION */}
      {/* ========================================= */}

      <div className="relative z-10 flex items-center justify-center gap-3 mt-9">
        <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#c9a45b]/30" />

        <Sparkles className="w-3 h-3 text-[#c9a45b]/50" />

        <span className="text-[9px] tracking-[0.18em] text-[#665b52]">
          TRADITION • GUIDANCE • PERSONAL ATTENTION
        </span>

        <Sparkles className="w-3 h-3 text-[#c9a45b]/50" />

        <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#c9a45b]/30" />
      </div>
    </section>
  );
};

export default CardCarousel;
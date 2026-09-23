import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  business_name,
  person_name,
  phone_number,
} from "./secret";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/9e/1f/9e/9e1f9ee154cdc86962a0747c081cb109.jpg",
      title: business_name,
      category: "Traditional Astrology",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/7a/8d/9f/7a8d9f56634bf50b55e371c60defb1ce.jpg",
      title: "ಸ್ತ್ರೀ-ಪುರುಷ ವಶೀಕರಣ",
      category: "Relationship Guidance",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/f1/8e/c5/f18ec5f77c36d2bd82804180365c7608.jpg",
      title: "ಸಂತಾನದೋಷ",
      category: "Spiritual Guidance",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/8d/95/ff/8d95fff806cac0d2308fcd7e60d4dab2.jpg",
      title: "ಕೋರ್ಟ್ ಕೇಸ್",
      category: "Legal Matters",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/5f/93/38/5f9338bbf17b820c59383734c03302b8.jpg",
      title: "ಅಣ್ಣತಮ್ಮ ಅತ್ತೆ-ಸೊಸೆ ಕಿರಿಕಿರಿ",
      category: "Family Guidance",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/0b/ea/85/0bea85319c7aad2be9a17715c0726a20.jpg",
      title: "ತಾಂತ್ರಿಕ ಸಮಸ್ಯೆ",
      category: "Spiritual Guidance",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/62/b3/58/62b358e267e59d97cad63c49de2f8b44.jpg",
      title: "ಗಂಡ ಹೆಂಡತಿ ಕಲಹ",
      category: "Marriage Guidance",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/e5/15/02/e51502ea14aa82845d23f7cefe17e766.jpg",
      title: "ಕುಟುಂಬ ಸಮಸ್ಯೆ",
      category: "Family Guidance",
    },
  ];

  /* ================================================== */
  /* AUTOPLAY */
  /* ================================================== */

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  /* ================================================== */
  /* ACTIVE SLIDE */
  /* ================================================== */

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  /* ================================================== */
  /* NAVIGATION */
  /* ================================================== */

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden bg-[#100b08]">

      {/* ================================================== */}
      {/* CAROUSEL */}
      {/* ================================================== */}

      <div
        ref={emblaRef}
        className="w-full overflow-hidden"
      >
        <div className="flex">

          {slides.map((slide, index) => (

            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
            >

              {/* ================================================== */}
              {/* IMAGE */}
              {/* ================================================== */}

              <div className="relative h-[78vh] min-h-[600px] md:h-[82vh] md:min-h-[680px]">

                <img
                  src={slide.img}
                  alt={`${business_name} - ${slide.title}`}
                  className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
                />

                {/* ================================================== */}
                {/* OVERLAYS */}
                {/* ================================================== */}

                {/* Dark base */}
                <div className="absolute inset-0 bg-[#100b08]/35" />

                {/* Left cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#100b08]/95 via-[#100b08]/65 to-[#100b08]/10" />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100b08]/90 via-transparent to-[#100b08]/10" />

                {/* Gold atmosphere */}
                <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#cba956]/10 blur-[100px]" />

                {/* ================================================== */}
                {/* CONTENT */}
                {/* ================================================== */}

                <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-5 md:px-8">

                  <div className="max-w-3xl pb-8 pt-16 md:pb-0 md:pt-0">

                    {/* ================================================== */}
                    {/* CATEGORY */}
                    {/* ================================================== */}

                    <div className="mb-6 flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b667]/40 bg-[#160d09]/50 backdrop-blur-md">

                        <Sparkles className="h-4 w-4 text-[#e0c477]" />

                      </div>

                      <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d8b667] md:text-[10px]">
                          {slide.category}
                        </p>

                        <div className="mt-1 h-px w-8 bg-[#cba956]" />

                      </div>

                    </div>

                    {/* ================================================== */}
                    {/* MAIN TITLE */}
                    {/* ================================================== */}

                    {index === 0 ? (
                      <>
                        <h1 className="montserrat max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#fbf2df] drop-shadow-2xl sm:text-5xl md:text-7xl">

                          {business_name}

                        </h1>

                        <div className="my-5 flex items-center gap-3">

                          <span className="h-[2px] w-16 bg-[#d2ae5f] md:w-24" />

                          <span className="h-2 w-2 rotate-45 bg-[#d2ae5f]" />

                        </div>

                        <h2 className="montserrat text-xl font-bold text-[#dfc477] sm:text-2xl md:text-3xl">

                          Pandit{" "}

                          <span className="text-white">
                            {person_name}
                          </span>

                        </h2>
                      </>
                    ) : (
                      <>
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9aa63]">
                          {slide.category}
                        </p>

                        <h1 className="montserrat max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#fbf2df] drop-shadow-2xl sm:text-5xl md:text-6xl">
                          {business_name}
                        </h1>

                        <div className="my-5 flex items-center gap-3">

                          <span className="h-[2px] w-14 bg-[#d2ae5f] md:w-20" />

                          <span className="h-2 w-2 rotate-45 bg-[#d2ae5f]" />

                        </div>

                        <h2 className="montserrat text-lg font-semibold text-[#dfc477] md:text-2xl">
                          Traditional Guidance by{" "}
                          <span className="text-white">
                            {person_name}
                          </span>
                        </h2>
                      </>
                    )}

                    {/* ================================================== */}
                    {/* DESCRIPTION */}
                    {/* ================================================== */}

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#e2d7c8] sm:text-base md:text-lg md:leading-8">
                      Traditional guidance for relationships, marriage,
                      career, family and important life decisions.
                    </p>

                    <p className="mt-2 hidden max-w-2xl text-sm leading-7 text-[#b8aa9b] sm:block">
                      Personalized consultations rooted in traditional
                      wisdom, thoughtful listening and individual guidance.
                    </p>

                    {/* ================================================== */}
                    {/* CTA */}
                    {/* ================================================== */}

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                      <a
                        href={`tel:${phone_number}`}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#cba956] px-7 py-3.5 montserrat text-xs font-bold text-[#160e09] shadow-[0_10px_35px_rgba(203,169,86,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c477]"
                      >

                        <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />

                        Call for Consultation

                      </a>

                      <Link
                        to="/services"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#d5b566]/45 bg-white/[0.06] px-7 py-3.5 montserrat text-xs font-bold text-[#ead493] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12]"
                      >

                        Explore Services

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                      </Link>

                    </div>

                  </div>
                </div>

                {/* ================================================== */}
                {/* TRUST BADGE */}
                {/* ================================================== */}

                <div className="absolute right-8 top-8 z-20 hidden h-28 w-28 items-center justify-center rounded-full border border-[#d5b566]/40 bg-[#120b08]/55 text-center shadow-2xl backdrop-blur-md lg:flex">

                  <div>

                    <Star className="mx-auto mb-1 h-3 w-3 fill-[#d5b566] text-[#d5b566]" />

                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#a9956c]">
                      Trusted
                    </p>

                    <p className="montserrat text-2xl font-extrabold text-[#e4c674]">
                      1956
                    </p>

                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#a9956c]">
                      Onwards
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* ================================================== */}
      {/* PREVIOUS */}
      {/* ================================================== */}

      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d5b566]/30 bg-[#120b08]/60 text-[#e1c477] shadow-xl backdrop-blur-md transition-all hover:border-[#cba956] hover:bg-[#cba956] hover:text-[#160e09] md:left-6 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* ================================================== */}
      {/* NEXT */}
      {/* ================================================== */}

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d5b566]/30 bg-[#120b08]/60 text-[#e1c477] shadow-xl backdrop-blur-md transition-all hover:border-[#cba956] hover:bg-[#cba956] hover:text-[#160e09] md:right-6 md:h-12 md:w-12"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* ================================================== */}
      {/* BOTTOM CONTROLS */}
      {/* ================================================== */}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              selectedIndex === index
                ? "w-9 bg-[#dfc06d]"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />

        ))}

      </div>

      {/* ================================================== */}
      {/* COUNTER */}
      {/* ================================================== */}

      <div className="absolute bottom-5 right-5 z-30 hidden items-center gap-2 text-[10px] md:right-8 md:flex">

        <span className="font-bold text-[#e4ca7e]">
          {String(selectedIndex + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-8 bg-[#cba956]/50" />

        <span className="text-[#8d8175]">
          {String(slides.length).padStart(2, "0")}
        </span>

      </div>

    </section>
  );
}

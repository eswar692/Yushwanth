import {
  Award,
  BookOpen,
  Heart,
  Sparkles,
  Star,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

import {
  business_name,
  person_name,
} from "../Genaral/secret";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-[#f5f0e7] text-[#24160f]">

      {/* ================================================== */}
      {/* BACKGROUND */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9a45b]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -left-40 top-[650px] h-[450px] w-[450px] rounded-full bg-[#8b1e1e]/5 blur-[100px]" />

      <div className="pointer-events-none absolute right-1/3 top-[1100px] h-72 w-72 rounded-full bg-[#c9a45b]/5 blur-[100px]" />

      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">

        <div className="mx-auto max-w-[1250px]">

          {/* ================================================== */}
          {/* SECTION INTRO */}
          {/* ================================================== */}

          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#c9a45b]" />

              <Sparkles className="h-4 w-4 text-[#b58a3d]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#96702f] md:text-xs">
                About Us
              </span>

              <Sparkles className="h-4 w-4 text-[#b58a3d]" />

              <span className="h-px w-10 bg-[#c9a45b]" />

            </div>

            <h1 className="montserrat text-3xl font-extrabold leading-[1.15] tracking-tight text-[#25160f] sm:text-4xl md:text-5xl lg:text-6xl">
              Tradition, Experience
              <span className="mt-1 block text-[#8b1e1e]">
                & Spiritual Guidance
              </span>
            </h1>

            <div className="my-6 flex items-center justify-center gap-3">

              <span className="h-px w-14 bg-[#c9a45b]/60 md:w-20" />

              <span className="h-2 w-2 rotate-45 bg-[#c9a45b]" />

              <span className="h-px w-14 bg-[#c9a45b]/60 md:w-20" />

            </div>

            <p className="open-sans text-sm leading-7 text-[#75675b] md:text-base md:leading-8">
              Learn more about{" "}
              <span className="font-semibold text-[#8b1e1e]">
                {person_name}
              </span>{" "}
              and the traditional approach behind{" "}
              <span className="font-semibold text-[#80602a]">
                {business_name}
              </span>
              .
            </p>

          </div>

          {/* ================================================== */}
          {/* MAIN CONTENT */}
          {/* ================================================== */}

          <div className="grid items-stretch gap-7 lg:grid-cols-[0.85fr_1.15fr]">

            {/* ================================================== */}
            {/* PROFILE CARD */}
            {/* ================================================== */}

            <div className="group relative overflow-hidden rounded-[32px] bg-[#130d09] p-5 shadow-[0_25px_70px_rgba(35,22,14,0.22)] sm:p-7">

              {/* Background glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c9a45b]/10 blur-[80px]" />

              <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#8b1e1e]/10 blur-[80px]" />

              <div className="relative">

                {/* Small heading */}
                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#cba956]">
                      The Guide
                    </p>

                    <div className="mt-2 h-px w-8 bg-[#cba956]" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#cba956]/25 bg-[#cba956]/5">
                    <Sparkles className="h-4 w-4 text-[#d5b566]" />
                  </div>

                </div>

                {/* ================================================== */}
                {/* IMAGE */}
                {/* ================================================== */}

                <div className="relative mx-auto max-w-[420px]">

                  {/* Gold frame */}
                  <div className="absolute -inset-2 rounded-[30px] border border-[#cba956]/25" />

                  <div className="absolute -inset-5 rounded-[36px] border border-[#cba956]/10" />

                  <div className="relative overflow-hidden rounded-[26px]">

                    <img
                      src="https://i.pinimg.com/736x/a3/5c/03/a35c032154b6c4b476049fdda73ee6a8.jpg"
                      alt={person_name}
                      className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[440px]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100b08] via-[#100b08]/15 to-transparent" />

                    {/* Image bottom information */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-px w-7 bg-[#d4b45f]" />

                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#dfc477]">
                          Astrology & Spiritual Guidance
                        </p>
                      </div>

                      <h2 className="montserrat text-2xl font-extrabold text-white sm:text-3xl">
                        {person_name}
                      </h2>

                    </div>

                  </div>

                </div>

                {/* ================================================== */}
                {/* PROFILE STATS */}
                {/* ================================================== */}

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-[#cba956]/15 bg-white/[0.035] p-4 text-center transition hover:border-[#cba956]/30">

                    <Award className="mx-auto h-5 w-5 text-[#d6b565]" />

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#897a6a]">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#eee1cd]">
                      Traditional
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#cba956]/15 bg-white/[0.035] p-4 text-center transition hover:border-[#cba956]/30">

                    <Heart className="mx-auto h-5 w-5 text-[#d6b565]" />

                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#897a6a]">
                      Approach
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#eee1cd]">
                      Personal
                    </p>

                  </div>

                </div>

                {/* Trust line */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#806f5c]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#cba956]" />
                  Private • Personal • Traditional
                </div>

              </div>
            </div>

            {/* ================================================== */}
            {/* STORY CARD */}
            {/* ================================================== */}

            <div className="relative overflow-hidden rounded-[32px] border border-[#ded3c3] bg-[#fffdf9] p-7 shadow-[0_20px_60px_rgba(52,35,22,0.07)] md:p-10 lg:p-12">

              {/* Decorative corner */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#cba956]/8 blur-3xl" />

              <div className="relative">

                {/* Label */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cba956]/20 bg-[#f7f0e2] px-4 py-2">

                  <BookOpen className="h-3.5 w-3.5 text-[#8b1e1e]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8b1e1e]">
                    Our Story
                  </span>

                </div>

                {/* Heading */}
                <h2 className="montserrat mt-6 text-3xl font-extrabold leading-tight text-[#291911] md:text-4xl">

                  About{" "}

                  <span className="text-[#8b1e1e]">
                    {person_name}
                  </span>

                </h2>

                <div className="mt-5 flex items-center gap-2">

                  <span className="h-[2px] w-12 bg-[#cba956]" />

                  <span className="h-1.5 w-1.5 rotate-45 bg-[#cba956]" />

                </div>

                {/* Story */}
                <div className="mt-7 space-y-5 open-sans text-sm leading-7 text-[#66594e] md:text-[15px] md:leading-8">

                  <p>
                    Astrologer{" "}
                    <span className="font-bold text-[#8b1e1e]">
                      {person_name}
                    </span>{" "}
                    is a spiritual guide offering traditional astrology and
                    personalized guidance for people seeking greater clarity
                    in important areas of life.
                  </p>

                  <p>
                    Through years of learning and experience,{" "}
                    <span className="font-semibold text-[#9a702d]">
                      {person_name}
                    </span>{" "}
                    works with individuals to understand their concerns and
                    provide guidance based on traditional astrological and
                    spiritual practices.
                  </p>

                  <p>
                    Consultations may cover areas such as relationships,
                    marriage, family matters, career, business, Vastu and
                    other personal concerns.
                  </p>

                  <p>
                    The focus is on listening carefully to each person's
                    situation and providing thoughtful, personalized guidance
                    in a respectful and supportive environment.
                  </p>

                </div>

                {/* ================================================== */}
                {/* HIGHLIGHTS */}
                {/* ================================================== */}

                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  {/* Traditional */}
                  <div className="group rounded-2xl border border-[#e7ddcd] bg-[#faf6ee] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#cba956]/40">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#cba956]/10">
                      <Star className="h-4 w-4 text-[#b28535]" />
                    </div>

                    <p className="mt-4 text-xs font-bold text-[#291911]">
                      Traditional
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#817367]">
                      Astrological approach
                    </p>

                  </div>

                  {/* Personal */}
                  <div className="group rounded-2xl border border-[#e7ddcd] bg-[#faf6ee] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8b1e1e]/30">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b1e1e]/10">
                      <Heart className="h-4 w-4 text-[#8b1e1e]" />
                    </div>

                    <p className="mt-4 text-xs font-bold text-[#291911]">
                      Personal
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#817367]">
                      Individual attention
                    </p>

                  </div>

                  {/* Supportive */}
                  <div className="group rounded-2xl border border-[#e7ddcd] bg-[#faf6ee] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#cba956]/40">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#cba956]/10">
                      <Sparkles className="h-4 w-4 text-[#b28535]" />
                    </div>

                    <p className="mt-4 text-xs font-bold text-[#291911]">
                      Supportive
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#817367]">
                      Guidance with care
                    </p>

                  </div>

                </div>

                {/* ================================================== */}
                {/* BOTTOM QUOTE */}
                {/* ================================================== */}

                <div className="mt-9 border-t border-[#e5dacb] pt-6">

                  <div className="flex items-start gap-3">

                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#cba956]" />

                    <p className="text-xs italic leading-6 text-[#87796c]">
                      A thoughtful approach rooted in traditional wisdom,
                      personal attention and respectful guidance.
                    </p>

                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* ================================================== */}
          {/* SCROLL INDICATOR */}
          {/* ================================================== */}

          <div className="mt-14 flex flex-col items-center gap-2 text-[#9b896f]">

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
              Discover More
            </span>

            <ArrowDown className="h-4 w-4 animate-bounce text-[#b58a3d]" />

          </div>

        </div>

      </section>

    </main>
  );
}

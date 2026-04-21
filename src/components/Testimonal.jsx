"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ananya Verma",
    role: "Student, Delhi University",
    rating: 5,
    quote:  'TC car Driving School completely changed how I felt behind the wheel. I used to be terrified of traffic — now I drive on the expressway with full confidence. Rahul sir is endlessly patient.',
    course: 'Confidence Course',
  },
  {
    name: "Karan Bhatia",
    role: "Software Engineer",
    rating: 5,
    quote:
      "The evening slot flexibility was what sold me. I booked sessions around my work schedule and cleared the RTO test on my very first attempt. Highly recommended.",
    course: "Foundation Drive",
  },
  {
    name: "Sneha Pillai",
    role: "Marketing Manager",
    rating: 5,
    quote:
      "I had failed my test twice before joining. The Mastery Programme was a complete game-changer — structured, professional, and genuinely engaging. Passed with flying colours.",
    course: "Mastery Programme",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-poppins text-xs tracking-[0.22em] uppercase text-fg/40 mb-3">
            Student Stories
          </p>
          <h2
            className="font-oswald font-bold uppercase leading-[0.9] text-fg"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)" }}
          >
            What Our
            <br />
            Students Say.
          </h2>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 "
        >
          {TESTIMONIALS.map(({ name, role, rating, quote, course }) => (
            <motion.article
              key={name}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="group flex flex-col gap-6 p-8 md:p-4 rounded-xl bg-bg border border-fg/15 hover:border-fg cursor-default transition-colors duration-300"
            >
              {/* Big quote mark */}
              <Quote size={30} strokeWidth={1} className="text-fg/12" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-fg text-sm md:-mt-2 leading-none"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote text */}
              <p className="font-poppins text-sm  md:text-[10px] leading-relaxed text-fg/65 flex-1">
                "{quote}"
              </p>

              {/* Course badge */}
              <span className="self-start font-poppins text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-full border border-fg/20 text-fg/45">
                {course}
              </span>

              <div className="border-t border-fg/10" />

              {/* Author */}
              <div className="flex items-center gap-3 mb-3 px-3">
                <div
                  className="w-10 h-10 md:h-8 md:w-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#3B3B3B" }}
                >
                  <span className="font-oswald font-bold text-sm text-bg">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-oswald font-semibold text-base md:text-[13px] uppercase tracking-wide text-fg">
                    {name}
                  </p>
                  <p className="font-poppins text-xs text-fg/45 md:text-[10px] mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

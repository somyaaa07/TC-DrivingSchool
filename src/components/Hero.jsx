"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

/* ── Shared entrance variant ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: "easeOut", delay },
});

/* ── Nav links ── */
const NAV = ["Courses", "Fleet", "Pricing", "Contact"];

/* ── Stats row ── */
const STATS = [
  { value: "15+", label: "Years Active" },
  { value: "4,800+", label: "Students Licensed" },
  { value: "98%", label: "Pass Rate" },
];

export default function Hero() {
  return (
    <section
      className="relative h-full w-full flex flex-col bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/Banne.png")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#000]/40 to-transparent" />

      {/* ════ Hero body ════ */}
      <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-6 md:px-12 py-16 ">
        <div className="grid  gap-16 items-center  w-full">
          {/* ── Copy ── */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              className="font-poppins text-xs tracking-[0.22em] uppercase text-fg/90  mb-6"
            >
              Premium Driving Academy · Est. 2009
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-oswald font-bold uppercase leading-[0.92] text-fg  mb-8"
              style={{ fontSize: "clamp(3.8rem, 9vw, 7.5rem)" }}
            >
              Master The
              <br />
              Road.
            </motion.h1>

           <motion.p
  {...fadeUp(0.32)}
  className="text-black  font-poppins text-base leading-relaxed  max-w-sm mb-10"
>
  Train with RTO-certified instructors inside modern dual-control
  vehicles. Confidence, precision, and safety — every session.
</motion.p>

            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap items-center  gap-5"
            >
              <Button size="lg">Start Your Journey</Button>
              <a
                href="#courses"
                className="font-poppins text-sm tracking-[0.14em] uppercase text-fg/90
                           underline underline-offset-4 hover:text-fg transition-colors duration-200"
              >
                View Courses
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

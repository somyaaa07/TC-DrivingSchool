'use client';
import Button from "@/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const lineGrow = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "340+", label: "Projects Done" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-8 lg:px-12 xl:px-12 relative overflow-hidden"
      style={{ backgroundColor: "#3B3B3B" }}
    >
      {/* Subtle background texture circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Label + line */}
            <motion.div variants={fadeLeft} className="flex items-center gap-3">
            
              <p
                className="font-poppins text-xs tracking-[0.22em] uppercase"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                About The Company
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-bold font-oswald leading-none"
              style={{
                fontSize: "clamp(3.6rem, 5.5vw, 4.8rem)",
                color: "var(--color-bg, #f5f5f5)",
              }}
            >
              About{" "}
              <span
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.35)",
                  color: "transparent",
                }}
              >
                Us
              </span>
            </motion.h1>

         

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              className="font-poppins text-md leading-[1.5em] md:text-[12px] lg:text-[13px] xl:text-lg"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              necessitatibus perspiciatis sed consectetur laborum rem optio amet
              doloremque obcaecati eveniet iure doloribus incidunt tempore
              pariatur deserunt architecto, veritatis beatae?
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-poppins text-sm leading-[1.5em] md:text-[12px] lg:text-[13px] xl:text-lg"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Dolorem animi modi ullam facere possimus iure unde rem accusamus
              numquam velit, vitae nesciunt nisi ipsa suscipit voluptatem cum
              non adipisci exercitationem.
            </motion.p>

         
           

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 pt-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                >
                  <span
                    className="font-oswald font-bold"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "rgba(255,255,255,0.9)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-poppins text-xs tracking-wide uppercase"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Image */}
          <motion.div
            variants={fadeRight}
            className="relative"
          >
            {/* Decorative border offset */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.32)",
                transform: "translate(12px, 12px)",
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />

            {/* Image container */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 z-10 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,59,59,0.3) 0%, transparent 60%)",
                }}
              />
              <img
                src="https://i.pinimg.com/1200x/93/38/16/9338168a2511c3dfd6456d88e71cd5fc.jpg"
                alt="About us"
                className="w-full h-full object-cover rounded-2xl"
                style={{ minHeight: "420px", display: "block" }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-5 left-5 z-20 px-5 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(59,59,59,0.75)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              >
                <p
                  className="font-oswald font-bold text-xl"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  Since 2012
                </p>
                <p
                  className="font-poppins text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Trusted Worldwide
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
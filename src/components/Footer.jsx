"use client";

import { motion } from "framer-motion";

const LINKS = {
  Company: ["About Us", "Careers", "Press", "Contact"],
  Courses: [
    "Foundation",
    " Course",
    "Programme",
    " Training",
  ],
  Support: ["FAQ", "Book a Session", "Reschedule", "Feedback"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-fg/12 pt-20 px-6 md:px-12 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* ════ Top row ════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between gap-16 mb-16"
        >
          {/* Brand column */}
          <div className="max-w-xs">
            <a href="#" className="flex items-baseline gap-1.5 mb-3 -mt-10">
              <img src="/logo.png" alt="" className="h-40 w-40" />
            </a>

            <p className="font-poppins text-sm leading-relaxed text-fg/52 mb-8 -mt-6">
              Premium driving education since 2009. Building confident, safe
              drivers across NCR.
            </p>

            {/* Socials */}
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 lg:grid-cols-4 gap-4">
            {Object.entries(LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="font-poppins text-[11px] md:text-[10px] xl:text-[13px] lg:text-[13px] tracking-[0.18em] uppercase text-fg/38 mb-5">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group flex items-center gap-1 font-poppins md:text-[10px] xl:text-[13px] lg:text-[13px] text-sm text-fg/55 hover:text-fg transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ════ CTA strip ════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="border border-fg/15 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16"
        >
          <div>
            <h3 className="font-oswald font-bold text-2xl uppercase tracking-wide text-fg mb-1">
              Ready to hit the road?
            </h3>
            <p className="font-poppins text-sm text-fg/52">
              Book your first session today — no upfront payment needed.
            </p>
          </div>

          {/* Inline skew CTA (no Button import needed in footer) */}
          <a
            href="#contact"
            className="group relative overflow-hidden border border-fg px-9 py-3.5
                       font-poppins text-sm font-medium tracking-[0.18em] uppercase
                       text-fg shrink-0 cursor-pointer"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-fg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ skewX: "-20deg", width: "130%", left: "-15%" }}
            />
            <span className="relative z-10 group-hover:text-bg transition-colors duration-150">
              Book Now
            </span>
          </a>
        </motion.div>

        {/* ════ Bottom bar ════ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-fg/10">
          <p className="font-poppins text-xs text-fg/38">
            © {year} Apex Drive Academy Pvt. Ltd. · All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-poppins text-xs text-fg/38 hover:text-fg/65 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

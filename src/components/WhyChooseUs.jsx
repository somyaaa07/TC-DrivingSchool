'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, CalendarCheck, Star } from 'lucide-react';

const FEATURES = [
  {
    Icon:        ShieldCheck,
    title:       'Safety First',
    description: 'Dual-control vehicles, certified safety protocols, and comprehensive on-road hazard awareness built into every single lesson.',
  },
  {
    Icon:        Users,
    title:       'Expert Instructors',
    description: 'Every instructor is Government-certified with an average of 10+ years of active teaching experience on real roads.',
  },
  {
    Icon:        CalendarCheck,
    title:       'Flexible Scheduling',
    description: 'Morning, evening, and weekend slots. Reschedule anytime with zero penalty using our online booking system.',
  },
  {
    Icon:        Star,
    title:       'Proven Results',
    description: '98% first-attempt RTO pass rate. Over 4,800 licensed drivers since 2009 — the results speak for themselves.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-bg py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
          <p className="font-poppins text-xs tracking-[0.22em] uppercase text-fg/40 mb-3">
            Why Apex Drive
          </p>
          <h2
            className="font-oswald font-bold uppercase leading-[0.9] text-fg"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
          >
            Precision.<br />Confidence.
          </h2>
            </div>
             <p className="font-poppins text-sm leading-relaxed text-fg/55 max-w-xs">
            Structured programmes engineered for every stage of your driving journey.
          </p>
        
        </motion.div>

        {/* ── Feature grid — separated by 1 px fg dividers ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            /* hairline dividers between cells */
            gap: '1px',
            backgroundColor: 'rgba(59,59,59,0.12)',
          }}
        >
          {FEATURES.map(({ Icon, title, description }) => (
            <motion.article
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="group flex flex-col gap-6 p-8 bg-bg cursor-default"
            >
              {/* Icon badge */}
              <div className="w-11 h-11 flex items-center justify-center border border-fg/20 rounded-xl group-hover:border-fg transition-colors duration-300">
                <Icon size={20} strokeWidth={1.5} className="text-fg" />
              </div>

              <div>
                <h3 className="font-oswald font-semibold text-xl uppercase tracking-wide text-fg mb-3">
                  {title}
                </h3>
                <p className="font-poppins text-sm leading-relaxed text-fg/60">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
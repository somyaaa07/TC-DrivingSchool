'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const INSTRUCTORS = [
  {
    initials:   'RS',
    name:       'Rahul Sharma',
    title:      'Lead Instructor',
    exp:        '15 Yrs',
    sessions:   '2,400+',
    speciality: 'Highway & Defensive Driving',
  },
  {
    initials:   'PM',
    name:       'Priya Mehta',
    title:      'Senior Instructor',
    exp:        '10 Yrs',
    sessions:   '1,800+',
    speciality: 'Beginner & City Driving',
  },
  {
    initials:   'AS',
    name:       'Arjun Singh',
    title:      'Advanced Instructor',
    exp:        '12 Yrs',
    sessions:   '2,100+',
    speciality: 'Terrain & Night Driving',
  },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Instructors() {
  return (
    <section id="instructors" className="bg-bg py-20 px-6 md:px-8 lg:px-12 xl:px-20 ">
      <div className="max-w-7xl mx-auto">

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
              Meet the Team
            </p>
            <h2
              className="font-oswald font-bold uppercase leading-[0.9] text-fg"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
            >
              Your Expert<br />Instructors.
            </h2>
          </div>
          <p className="font-poppins text-sm leading-relaxed text-fg/55 max-w-xs">
            Every instructor is RTO-certified, background-verified, and fully committed to your success.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {INSTRUCTORS.map(({ initials, name, title, exp, sessions, speciality }) => (
            <motion.article
              key={name}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex flex-col gap-6 p-8 rounded-xl bg-bg border border-fg/15 hover:border-fg cursor-default transition-colors duration-300"
            >
              {/* Avatar row */}
              <div className="flex items-center gap-5">
                <div
                  className="w-[72px] h-[72px] md:h-[50px] md:w-[50px] rounded-full flex items-center justify-center shrink-0 border-2 border-fg"
                  style={{ backgroundColor: '#3B3B3B' }}
                >
                  <span className="font-oswald font-bold text-2xl md:text-[16px] tracking-wider text-bg">
                    {initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-oswald font-semibold text-xl md:text-[14px] uppercase tracking-wide text-fg">
                    {name}
                  </h3>
                  <p className="font-poppins text-xs text-fg/45 mt-1">{title}</p>
                </div>
              </div>

              <div className="border-t border-fg/10" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-oswald text-2xl md:text-xl font-bold text-fg">{exp}</p>
                  <p className="font-poppins text-xs text-fg/45 mt-1">Experience</p>
                </div>
                <div>
                  <p className="font-oswald text-2xl md:text-xl font-bold text-fg">{sessions}</p>
                  <p className="font-poppins text-xs text-fg/45 mt-1">Sessions</p>
                </div>
              </div>

              {/* Speciality */}
              <div className="flex items-center gap-2">
                <Award size={13} strokeWidth={1.5} className="text-fg/45 shrink-0" />
                <span className="font-poppins text-xs text-fg/55">{speciality}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
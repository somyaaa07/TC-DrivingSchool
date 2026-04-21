'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, BookOpen, Navigation, Trophy } from 'lucide-react';

const STEPS = [
  {
    num:         '01',
    Icon:        MousePointerClick,
    title:       'Book Online',
    description: 'Pick your course and preferred time slot through our quick booking form. Instant confirmation, zero hassle.',
  },
  {
    num:         '02',
    Icon:        BookOpen,
    title:       'Orientation',
    description: 'A one-hour induction covering vehicle familiarisation, road code, and your personalised training plan.',
  },
  {
    num:         '03',
    Icon:        Navigation,
    title:       'Training Sessions',
    description: 'Progress through structured on-road sessions with your dedicated RTO-certified instructor.',
  },
  {
    num:         '04',
    Icon:        Trophy,
    title:       'Test & Licence',
    description: 'We prepare you fully for the RTO test and accompany you on test day for maximum confidence.',
  },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: '#3B3B3B' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-16"
        >
          <p
            className="font-poppins text-xs tracking-[0.22em] uppercase mb-3"
            style={{ color: 'rgba(250,250,239,0.45)' }}
          >
            The Process
          </p>
          <h2
            className="font-oswald font-bold uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', color: '#FAFAEF' }}
          >
            Zero to<br />Licensed.
          </h2>
        </motion.div>

        {/* ── Steps grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            gap:             '1px',
            backgroundColor: 'rgba(250,250,239,0.08)',
          }}
        >
          {STEPS.map(({ num, Icon, title, description }) => (
            <motion.div
              key={num}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative flex flex-col gap-5 p-8 cursor-default"
              style={{ backgroundColor: '#3B3B3B' }}
            >
              {/* Ghost number */}
              <span
                className="font-oswald font-black leading-none select-none"
                style={{
                  fontSize: '5.5rem',
                  color:    'rgba(250,250,239,0.06)',
                  lineHeight: 1,
                }}
              >
                {num}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl"
                style={{ border: '1px solid rgba(250,250,239,0.18)' }}
              >
                <Icon size={20} strokeWidth={1.5} style={{ color: '#FAFAEF' }} />
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-oswald font-semibold text-xl uppercase tracking-wide mb-3"
                  style={{ color: '#FAFAEF' }}
                >
                  {title}
                </h3>
                <p
                  className="font-poppins text-sm leading-relaxed"
                  style={{ color: 'rgba(250,250,239,0.52)' }}
                >
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
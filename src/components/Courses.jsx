'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';

const COURSES = [
  {
    tag:         'Beginner',
    title:       'Foundation Drive',
    duration:    '12 Sessions',
    price:       '₹8,999',
    description: 'Built for first-time drivers. Vehicle controls, road rules, parking, and basic city navigation structured over 4 focused weeks.',
    features: [
      '12 × 45-min practical sessions',
      'Theory & road-sign classes',
      'Parking & reversing drills',
      'Mock RTO test preparation',
    ],
  },
  {
    tag:         'Popular',
    title:       'Confidence Course',
    duration:    '20 Sessions',
    price:       '₹14,999',
    description: 'Our most-booked programme. Combines beginner foundations with highway, night driving, and defensive techniques.',
    features: [
      '20 × 1-hr practical sessions',
      'Highway & night driving',
      'Defensive driving module',
      'RTO test escort included',
    ],
    highlighted: true,
  },
  {
    tag:         'Advanced',
    title:       'Mastery Programme',
    duration:    '30 Sessions',
    price:       '₹21,999',
    description: 'The elite comprehensive package. Performance control, terrain driving, hill starts, emergency brakes, and international licence coaching.',
    features: [
      '30 sessions across 6 weeks',
      'Hill & terrain driving',
      'Emergency brake control',
      'International licence coaching',
    ],
  },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14 } },
};
const card = {
  hidden: { opacity: 0, y: 45 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.68, ease: 'easeOut' } },
};

export default function Courses() {
  return (
    <section id="courses" className="bg-bg py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-16"
        >
          <div>
            <p className="font-poppins text-[10px] sm:text-xs tracking-[0.22em] uppercase text-fg/40 mb-3">
              Training Programmes
            </p>
            <h2
              className="font-oswald font-bold uppercase leading-[0.9] text-fg"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.8rem)' }}
            >
              Choose Your<br />Course.
            </h2>
          </div>
          <p className="font-poppins text-sm leading-relaxed text-fg/55 max-w-xs">
            Structured programmes engineered for every stage of your driving journey.
          </p>
        </motion.div>

        {/* ── Cards grid ──
              mobile  : 1 column, cards stack vertically
              sm–md   : 1 column still, but cards grow wider
              lg+     : 3 columns side-by-side                  */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {COURSES.map(({ tag, title, duration, price, description, features, highlighted }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`
                relative flex flex-col rounded-xl bg-bg
                p-6 sm:p-7 md:p-8
                transition-colors duration-300
                ${highlighted ? 'lg:-translate-y-2' : ''}
              `}
              style={{
                border: highlighted
                  ? '2px solid #3B3B3B'
                  : '1px solid rgba(59,59,59,0.18)',
              }}
            >
              {/* ── Tag row ── */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span
                  className="font-poppins text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                  style={
                    highlighted
                      ? { backgroundColor: '#3B3B3B', color: '#FAFAEF' }
                      : { border: '1px solid rgba(59,59,59,0.28)', color: 'rgba(59,59,59,0.65)' }
                  }
                >
                  {tag}
                </span>
                <span className="font-poppins text-xs text-fg/35">{duration}</span>
              </div>

              {/* On mobile: lay title + price side-by-side for a compact look;
                  on sm+ they stack again naturally */}
              <div className="flex flex-row sm:flex-col items-baseline sm:items-start justify-between sm:justify-start gap-2 sm:gap-0 mb-3 sm:mb-2">
                <h3 className="font-oswald font-bold text-2xl sm:text-3xl uppercase tracking-wide text-fg">
                  {title}
                </h3>
               
              </div>

              {/* Divider */}
              <div className="border-t border-fg/10 my-4 sm:my-5" />

              {/* Description */}
              <p className="font-poppins text-xs sm:text-sm leading-relaxed text-fg/58 mb-5 sm:mb-6">
                {description}
              </p>

              {/* Features — 2-col on mid-sized cards, 1-col on small & large */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 mb-7 sm:mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={13}
                      strokeWidth={1.8}
                      className="text-fg mt-0.5 shrink-0"
                    />
                    <span className="font-poppins text-xs leading-relaxed text-fg/65">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/#contact" size="sm" className="w-full justify-center">
                <span className="flex items-center justify-center gap-2">
                  Enrol Now <ArrowRight size={13} />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
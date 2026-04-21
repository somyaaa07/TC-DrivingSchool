'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section id="courses" className="bg-bg py-20 px-6 md:px-12">
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
              Training Programmes
            </p>
            <h2
              className="font-oswald font-bold uppercase leading-[0.9] text-fg"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
            >
              Choose Your<br />Course.
            </h2>
          </div>
          <p className="font-poppins text-sm leading-relaxed text-fg/55 max-w-xs">
            Structured programmes engineered for every stage of your driving journey.
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
          {COURSES.map(({ tag, title, duration, price, description, features, highlighted }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative flex flex-col p-8 rounded-xl bg-bg transition-colors duration-300"
              style={{
                border: highlighted ? '2px solid #3B3B3B' : '1px solid rgba(59,59,59,0.18)',
              }}
            >
              {/* Tag row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-poppins text-[11px] tracking-[0.18em] uppercase px-3 py-1 rounded-full"
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

              {/* Title */}
              <h3 className="font-oswald font-bold text-3xl uppercase tracking-wide text-fg mb-2">
                {title}
              </h3>

              {/* Price */}
              <p className="font-oswald text-4xl font-light text-fg mb-4">{price}</p>

              {/* Divider */}
              <div className="border-t border-fg/10 mb-5" />

              {/* Description */}
              <p className="font-poppins text-sm leading-relaxed text-fg/58 mb-6">
                {description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      strokeWidth={1.8}
                      className="text-fg mt-0.5 shrink-0"
                    />
                    <span className="font-poppins text-xs leading-relaxed text-fg/65">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button size="sm" className="w-full justify-center">
                <span className="flex items-center justify-center gap-2">
                  Enrol Now <ArrowRight size={13} />
                </span>
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
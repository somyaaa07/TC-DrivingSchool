'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const PLANS = [
  {
    name:     'Essential',
    price:    '₹8,999',
    period:   '10 sessions',
    tagline:  'Ideal for beginners',
    features: [
      '10 practical sessions',
      'Theory class included',
      'Parking & basic manoeuvres',
      'WhatsApp instructor support',
      '2 free reschedules',
    ],
  },
  {
    name:     'Standard',
    price:    '₹14,999',
    period:   '20 sessions',
    tagline:  'Most popular choice',
    features: [
      'Everything in Essential',
      'Highway & night driving',
      'Defensive driving module',
      'RTO test accompaniment',
      'Unlimited rescheduling',
      'Priority instructor access',
    ],
    highlighted: true,
  },
  {
    name:     'Premium',
    price:    '₹21,999',
    period:   '30 sessions',
    tagline:  'Complete mastery',
    features: [
      'Everything in Standard',
      'Terrain & hill driving',
      'Emergency brake control',
      'International licence coaching',
      'Alumni lifetime support',
      'Dedicated instructor (fixed)',
    ],
  },
];

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.68, ease: 'easeOut' } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-xs tracking-[0.22em] uppercase text-fg/40 mb-3">
            Transparent Pricing
          </p>
          <h2
            className="font-oswald font-bold uppercase leading-[0.9] text-fg"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
          >
            Simple Plans.<br />Zero Surprises.
          </h2>
        </motion.div>

        {/* ── Plans ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {PLANS.map(({ name, price, period, tagline, features, highlighted }) => (
            <motion.article
              key={name}
              variants={card}
              whileHover={{ y: highlighted ? -10 : -6 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="relative flex flex-col p-8 rounded-xl"
              style={{
                backgroundColor: highlighted ? '#3B3B3B' : '#FAFAEF',
                border:          highlighted
                  ? '2px solid #3B3B3B'
                  : '1px solid rgba(59,59,59,0.18)',
                transform: highlighted ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {/* Popular badge */}
              {highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-poppins text-[11px] tracking-[0.14em] uppercase font-medium"
                  style={{ backgroundColor: '#FAFAEF', color: '#3B3B3B' }}
                >
                  Most Popular
                </div>
              )}

              {/* Tagline + name */}
              <p
                className="font-poppins text-[11px] tracking-[0.18em] uppercase mb-2"
                style={{ color: highlighted ? 'rgba(250,250,239,0.52)' : 'rgba(59,59,59,0.45)' }}
              >
                {tagline}
              </p>
              <h3
                className="font-oswald font-bold text-3xl uppercase tracking-wide mb-4"
                style={{ color: highlighted ? '#FAFAEF' : '#3B3B3B' }}
              >
                {name}
              </h3>

              {/* Price */}
              <div className="mb-5">
                <span
                  className="font-oswald font-light text-5xl"
                  style={{ color: highlighted ? '#FAFAEF' : '#3B3B3B' }}
                >
                  {price}
                </span>
                <span
                  className="font-poppins text-xs ml-2"
                  style={{ color: highlighted ? 'rgba(250,250,239,0.48)' : 'rgba(59,59,59,0.45)' }}
                >
                  / {period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="border-t mb-5"
                style={{
                  borderColor: highlighted
                    ? 'rgba(250,250,239,0.14)'
                    : 'rgba(59,59,59,0.1)',
                }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0"
                      style={{ color: highlighted ? 'rgba(250,250,239,0.75)' : '#3B3B3B' }}
                    />
                    <span
                      className="font-poppins text-sm"
                      style={{
                        color: highlighted ? 'rgba(250,250,239,0.7)' : 'rgba(59,59,59,0.68)',
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {highlighted ? (
                <button
                  className="w-full py-3.5 font-poppins text-sm font-medium tracking-[0.18em] uppercase border cursor-pointer transition-opacity duration-200 hover:opacity-80"
                  style={{
                    backgroundColor: '#FAFAEF',
                    color:           '#3B3B3B',
                    borderColor:     '#FAFAEF',
                  }}
                >
                  Get Started
                </button>
              ) : (
                <Button size="sm" className="w-full justify-center">Get Started</Button>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
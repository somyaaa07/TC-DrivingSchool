'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'Do I need any prior experience to join?',
    a: 'Not at all. Our Foundation Drive programme is built for complete beginners — from understanding vehicle controls to your first solo drive. Instructors tailor the pace to your comfort level.',
  },
  {
    q: 'What documents are required to enrol?',
    a: 'Youll need a valid photo ID (Aadhaar / Passport / Voter ID), a passport-sized photograph, and your Learning Licence. We can guide you through the LL application if needed.',
  },
  {
    q: 'How long does a course take to complete?',
    a: 'Foundation Drive (10 sessions) takes 2–3 weeks. The Confidence Course (20 sessions) takes 4–5 weeks. The Mastery Programme (30 sessions) spans 6–8 weeks — all flexible around your schedule.',
  },
  {
    q: 'Can I reschedule or skip a session?',
    a: 'Yes. Reschedule with 6+ hours notice at no charge. Essential plan students get 2 free reschedules; Standard and Premium students get unlimited rescheduling.',
  },
  {
    q: 'Are vehicles equipped with dual controls?',
    a: 'Absolutely. Every training vehicle in our fleet has instructor-side dual-control pedals installed, ensuring complete safety throughout all practical sessions.',
  },
  {
    q: 'Do you help with the RTO driving test?',
    a: 'Yes. Confidence Course and Mastery Programme include dedicated RTO prep sessions, mock tests, and an instructor escort on the day of your official test.',
  },
  {
    q: 'Is there an instalment / EMI option?',
    a: 'We offer a 2-instalment plan for Standard and Premium courses — 60% at enrolment and 40% midway through. Contact us to arrange this.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Our primary centre is in Greater Noida, Noida. We also operate in Greater Noida West — each covering a 15 km training radius.',
  },
];

function Item({ q, a, open, toggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      className="border-b border-fg/10"
    >
      {/* Question row */}
      <button
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group cursor-pointer"
      >
        <span className="font-oswald font-medium text-lg uppercase tracking-wide text-fg group-hover:text-fg/65 transition-colors duration-200 leading-snug">
          {q}
        </span>

        <span className="shrink-0 mt-0.5">
          {open
            ? <Minus size={17} strokeWidth={1.5} className="text-fg" />
            : <Plus  size={17} strokeWidth={1.5} className="text-fg" />
          }
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-poppins text-sm leading-relaxed text-fg/60 pb-6 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-bg py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14"
        >
          <div className="shrink-0">
            <p className="font-poppins text-xs tracking-[0.22em] uppercase text-fg/40 mb-3">
              Questions
            </p>
            <h2
              className="font-oswald font-bold uppercase leading-[0.9] text-fg"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
            >
              Frequently<br />Asked.
            </h2>
          </div>
          <p className="font-poppins text-sm leading-relaxed text-fg/55 max-w-xs md:pt-14">
            Cant find an answer?{' '}
            <a
              href="mailto:hello@apexdrive.in"
              className="underline underline-offset-4 text-fg/75 hover:text-fg transition-colors duration-200"
            >
              info@tcdrivingschools.in
            </a>
          </p>
        </motion.div>

        {/* ── Accordion ── */}
        <div className="border-t border-fg/10">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              q={faq.q}
              a={faq.a}
              open={open === i}
              toggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Gauge, Users } from 'lucide-react';

const FLEET = [
  { name: 'Maruti Swift',     type: 'Hatchback',    transmission: 'Manual',       seats: 5, useCase: 'Beginner'  ,img:"https://i.pinimg.com/736x/e1/3b/a5/e13ba57a642a79f3071a1a110caf90a7.jpg" },
  { name: 'Hyundai i20',     type: 'Premium Hatch', transmission: 'Manual / Auto',seats: 5, useCase: 'Intermediate' ,img:"https://i.pinimg.com/1200x/c2/62/f1/c262f17abef677e0beece7d00ebd11ad.jpg"},
  { name: 'Honda City',      type: 'Sedan',         transmission: 'Manual / CVT', seats: 5, useCase: 'Highway' ,img:"https://i.pinimg.com/1200x/1f/a9/d4/1fa9d4223bfee77565fb993904ccb1cf.jpg"   },
  { name: 'Maruti Baleno',   type: 'Premium Hatch', transmission: 'Manual / AMT', seats: 5, useCase: 'City'    ,img:"https://i.pinimg.com/736x/e4/57/a9/e457a925ec961abdc595fffacf838f9c.jpg"   },
  { name: 'Hyundai Creta',   type: 'Compact SUV',   transmission: 'Manual / Auto',seats: 5, useCase: 'SUV & Terrain',img:"https://i.pinimg.com/736x/d0/aa/6b/d0aa6bb7064b4d1541c71d7a9fc1142c.jpg" },
  { name: 'Tata Nexon',      type: 'Compact SUV',   transmission: 'Manual / Auto',seats: 5, useCase: 'Advanced' ,img:"https://i.pinimg.com/736x/b4/45/71/b44571d3759c28db055e372e3e5a1bf3.jpg"  },
];

/* ── Inline SVG car silhouette ── */
function CarSVG() {
  return (
    <svg
      viewBox="0 0 220 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Body shell */}
      <path
        d="M22 72 L32 50 L66 34 L152 34 L178 50 L198 72 Z"
        stroke="#FAFAEF"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.75"
      />
      {/* Cabin */}
      <path
        d="M70 50 L84 35 L138 35 L152 50 Z"
        stroke="#FAFAEF"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* A-pillar / B-pillar */}
      <line x1="86"  y1="35" x2="74"  y2="50" stroke="#FAFAEF" strokeWidth="1" opacity="0.35" />
      <line x1="136" y1="35" x2="148" y2="50" stroke="#FAFAEF" strokeWidth="1" opacity="0.35" />
      {/* Wheels */}
      <circle cx="62"  cy="73" r="13" stroke="#FAFAEF" strokeWidth="1.4" fill="none" opacity="0.75" />
      <circle cx="62"  cy="73" r="5"  stroke="#FAFAEF" strokeWidth="1"   fill="none" opacity="0.4" />
      <circle cx="158" cy="73" r="13" stroke="#FAFAEF" strokeWidth="1.4" fill="none" opacity="0.75" />
      <circle cx="158" cy="73" r="5"  stroke="#FAFAEF" strokeWidth="1"   fill="none" opacity="0.4" />
      {/* Ground shadow line */}
      <line x1="8" y1="86" x2="212" y2="86" stroke="#FAFAEF" strokeWidth="0.8" opacity="0.1" />
      {/* Headlight */}
      <rect x="186" y="58" width="9" height="6" rx="1.5" stroke="#FAFAEF" strokeWidth="1" opacity="0.55" />
      {/* Taillight */}
      <rect x="18"  y="58" width="9" height="6" rx="1.5" stroke="#FAFAEF" strokeWidth="1" opacity="0.55" />
    </svg>
  );
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Fleet() {
  return (
    <section
      id="fleet"
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p
              className="font-poppins text-xs tracking-[0.22em] uppercase mb-3"
              style={{ color: 'rgba(250,250,239,0.42)' }}
            >
              Our Vehicles
            </p>
            <h2
              className="font-oswald font-bold uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', color: '#FAFAEF' }}
            >
              The Fleet.
            </h2>
          </div>
          <p
            className="font-poppins text-sm leading-relaxed max-w-xs"
            style={{ color: 'rgba(250,250,239,0.52)' }}
          >
            Modern, well-maintained vehicles with dual controls for maximum safety on every session.
          </p>
        </motion.div>

        {/* ── Car grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FLEET.map(({ name, type, transmission, seats, useCase,img }) => (
            <motion.article
              key={name}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="group flex flex-col gap-0 rounded-xl overflow-hidden cursor-default"
              style={{
                border:          '1px solid rgba(250,250,239,0.1)',
                backgroundColor: 'rgba(250,250,239,0.04)',
              }}
            >
              {/* Car illustration */}
              <div className="px-6 pt-8 pb-4 opacity-85 hover:opacity-90 transition-opacity duration-300">
                <img src={img} alt="" className='h-40 w-full rounded-xl'/>
              </div>

              {/* Meta */}
              <div
                className="flex flex-col gap-3 p-6 border-t"
                style={{ borderColor: 'rgba(250,250,239,0.1)' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="font-oswald font-semibold text-xl uppercase tracking-wide"
                      style={{ color: '#FAFAEF' }}
                    >
                      {name}
                    </h3>
                    <p
                      className="font-poppins text-xs mt-1"
                      style={{ color: 'rgba(250,250,239,0.4)' }}
                    >
                      {type}
                    </p>
                  </div>
                  <span
                    className="font-poppins text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border shrink-0"
                    style={{ color: 'rgba(250,250,239,0.6)', borderColor: 'rgba(250,250,239,0.2)' }}
                  >
                    {useCase}
                  </span>
                </div>

                <div className="flex gap-5">
                  <div className="flex items-center gap-1.5">
                    <Gauge size={12} style={{ color: 'rgba(250,250,239,0.42)' }} />
                    <span className="font-poppins text-xs" style={{ color: 'rgba(250,250,239,0.52)' }}>
                      {transmission}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={12} style={{ color: 'rgba(250,250,239,0.42)' }} />
                    <span className="font-poppins text-xs" style={{ color: 'rgba(250,250,239,0.52)' }}>
                      {seats} Seats
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
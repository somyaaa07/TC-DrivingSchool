'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Button — sliding skewed overlay on hover.
 *
 * Props:
 *  children  — label
 *  type      — 'button' | 'submit'
 *  size      — 'sm' | 'md' | 'lg'
 *  inverted  — flips fg/bg so it works on dark sections
 *  onClick
 *  className — extra Tailwind classes
 */
export default function Button({
  children,
  type      = 'button',
  size      = 'md',
  inverted  = false,
  onClick,
  className = '',
}) {
  const [hovered, setHovered] = useState(false);

  /* ── Size map ── */
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-9 py-3.5 text-sm',
    lg: 'px-12 py-4  text-base',
  };

  /* ── Colour logic ── */
  const borderColor  = inverted ? '#FAFAEF' : '#3B3B3B';
  const defaultText  = inverted ? '#FAFAEF' : '#3B3B3B';
  const hoveredText  = inverted ? '#3B3B3B' : '#FAFAEF';
  const overlayBg    = inverted ? '#FAFAEF' : '#3B3B3B';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()  => setHovered(false)}
      whileHover={{ scale: 1.04 }}
      whileTap={{   scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={`
        relative overflow-hidden border cursor-pointer select-none
        font-poppins font-medium tracking-[0.18em] uppercase
        ${sizes[size]} ${className}
      `}
      style={{
        borderColor,
        color: hovered ? hoveredText : defaultText,
        transition: 'color 0.1s ease',
      }}
    >
      {/* ── Skewed sliding overlay ── */}
      <motion.span
        aria-hidden="true"
        className="absolute block inset-0"
        style={{
          backgroundColor: overlayBg,
          skewX:  -20,
          width:  '135%',
          left:   '-18%',
        }}
        initial={{ x: '-115%' }}
        animate={{ x: hovered ? '0%' : '-115%' }}
        transition={{
          duration: 0.42,
          ease:     [0.25, 0.46, 0.45, 0.94],
        }}
      />

      {/* ── Label (always straight) ── */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
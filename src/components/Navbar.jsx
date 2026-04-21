'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/ui/Button';
import Link from 'next/link';
const NAV = ['About', 'Courses', 'Fleet', 'Pricing', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Subtle shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`sticky top-0 z-50 backdrop-blur-2xl transition-shadow border-b border-fg/10 bg-bg/80 duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* ── Main bar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4  h-16 sm:h-18 md:h-20"
      >
        {/* Wordmark */}
        <Link href="#" aria-label="Home" className="shrink-0 z-10">
          <img src="/logo.png" alt="Logo" className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain ml-0 md:-ml-6" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 md:gap-5">
          {NAV.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                className="font-poppins text-sm lg:text-[13px] md:text-[10px] tracking-[0.16em] uppercase text-fg/80 hover:text-fg transition-colors duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm">Book Now</Button>
        </div>

        {/* Hamburger — mobile & tablet */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/40"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-fg origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[2px] bg-fg origin-center"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-fg origin-center"
          />
        </button>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 top-16 bg-black/40 md:hidden z-40"
            />

            {/* Slide-down panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="absolute inset-x-0 top-full bg-bg/95 backdrop-blur border-b border-fg/10 md:hidden z-50 shadow-xl"
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {NAV.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.22 }}
                  >
                    <Link
                      href={`#${link.toLowerCase()}`}
                      onClick={closeMenu}
                      className="flex items-center py-3 font-poppins text-xs tracking-[0.16em] uppercase text-fg/80 hover:text-fg border-b border-fg/5 last:border-none transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}

                {/* Mobile CTA */}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV.length * 0.06, duration: 0.22 }}
                  className="pt-4 pb-2"
                >
                  <Button size="sm" className="w-full justify-center" onClick={closeMenu}>
                    Book Now
                  </Button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
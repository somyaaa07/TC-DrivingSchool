'use client';

import { motion } from 'framer-motion'
import Button from '@/ui/Button';

    const NAV = ['About','Courses', 'Fleet', 'Pricing', 'Contact'];

 
export default function Navbar() {
  return (
    <div className='sticky top-0 z-50 backdrop-blur'>
             <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-fg/10 bg-bg/80 h-20"
      >
        {/* Wordmark */}
       <img src="/logo.png" alt="" className='h-40 w-40'/>

        {/* Links — desktop only */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-poppins text-xs tracking-[0.16em] uppercase text-fg/80 hover:text-fg transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button size="sm">Book Now</Button>
      </motion.nav>
    </div>
  )
}

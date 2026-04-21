import { Oswald, Poppins } from 'next/font/google';
import './globals.css';

/* ── Oswald — headings ── */
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--next-font-oswald',   // maps to --font-oswald in @theme
  display: 'swap',
});

/* ── Poppins — body ── */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--next-font-poppins',  
  display: 'swap',
});

export const metadata = {
  title:       'Car Driving — Premium Driving Academy',
  description: 'Train with certified expert instructors in state-of-the-art vehicles. Your journey to confident, safe driving starts here.',
  keywords:    'driving school, learn to drive, driving lessons, RTO test preparation',
  openGraph: {
    title:       'Apex Drive — Premium Driving Academy',
    description: 'Confidence. Control. Class.',
    type:        'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
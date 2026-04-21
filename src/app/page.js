import Hero         from '../components/Hero';
import WhyChooseUs  from '../components/WhyChooseUs.jsx';
import Courses      from '../components/Courses';
import HowItWorks   from '../components/HowItWorks';
import Instructors  from '../components/Instructor';
import Fleet        from '../components/Fleet';
import Testimonials from '../components/Testimonal.jsx';
import Pricing      from '../components/Pricing';
import Booking      from '../components/Booking';
import FAQ          from '../components/FAQ';
import Footer       from '../components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="bg-bg text-fg">
      <Navbar/>
      
      <Hero />
      <WhyChooseUs />
      <About/>
      <Courses />
      <HowItWorks />
      <Instructors />
      <Fleet />
      <Testimonials />
      <Pricing />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}
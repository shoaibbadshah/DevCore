
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Brands from '@/components/sections/Brands';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import TopAreas from '@/components/sections/TopAreas';
import Cta from '@/components/sections/Cta';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Stats />
        <Services />
        <Projects />
        <TopAreas />
        <Cta />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

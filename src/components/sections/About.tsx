
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 wow fadeInUp flex items-center justify-center">
             <Image
                src="/img/about/01.jpg"
                alt="About DevCore"
                width={306}
                height={450}
                className="rounded-lg object-cover w-auto mx-auto"
                style={{ height: '450px' }}
              />
          </div>
          <div className="lg:col-span-7 wow fadeInUp" data-wow-delay=".3s">
            <div className="pl-0 lg:pl-16">
              <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Transforming Dubai Real Estate</h2>
              <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight mb-6">
                Where Transparency Builds Trust And Strategy Delivers Results
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our approach goes beyond transactions. We focus on building long-term trust, guiding clients with transparency, and applying proven strategies that deliver measurable results. Whether you are searching for your family home, expanding your portfolio, or entering Dubai’s market for the first time, we ensure every step is clear, seamless, and designed for success.
              </p>
              <Button>More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

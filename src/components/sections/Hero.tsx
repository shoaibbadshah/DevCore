import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20 md:py-32 px-4 md:px-6">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Innovative Solutions for a Digital World
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0">
          We are a team of passionate developers and designers creating cutting-edge web and mobile applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" asChild><a href="#services">Our Services</a></Button>
          <Button size="lg" variant="outline" asChild><a href="#contact">Contact Us</a></Button>
        </div>
      </div>
      <div className="relative h-64 md:h-auto md:aspect-square">
        <Image
          src="https://picsum.photos/800/800"
          alt="Team working on a project"
          width={800}
          height={800}
          className="rounded-xl object-cover shadow-2xl"
          data-ai-hint="teamwork collaboration"
        />
      </div>
    </section>
  );
}

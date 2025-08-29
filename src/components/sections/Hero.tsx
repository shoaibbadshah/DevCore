
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/hero/Real Estate Dubai - Final.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <h2 className="text-sm uppercase tracking-widest text-accent mb-4 wow fadeInUp" data-wow-delay=".2s">
          Welcome to DevCore
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-teko font-light leading-tight wow fadeInUp" data-wow-delay=".3s">
          Invest in <span className="font-bold text-white">Dubai</span>, <br /> Invest in the <span className="font-bold text-white">Future</span>
        </h1>
        <div className="mt-8 max-w-2xl mx-auto wow fadeInUp" data-wow-delay=".4s">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for properties, locations, and more..."
              className="w-full h-14 pl-6 pr-16 rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/80 backdrop-blur-sm focus:bg-white/30 focus:ring-accent"
            />
            <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

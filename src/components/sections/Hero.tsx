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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <h1 className="text-sm uppercase tracking-widest text-accent mb-4">
          Welcome to DevCore
        </h1>
        <p className="text-4xl md:text-6xl lg:text-7xl font-teko font-light leading-tight">
          Invest in <span className="font-bold">Dubai</span>, <br /> Invest in the <span className="font-bold">Future</span>
        </p>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for properties, locations, and more..."
              className="w-full h-14 pl-6 pr-16 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm"
            />
            <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-accent hover:bg-accent/90">
              <Search className="h-5 w-5 text-accent-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

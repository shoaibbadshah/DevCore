import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="relative h-64 lg:h-auto lg:self-end">
            <Image
              src="/img/brand/guide.png"
              alt="Provident's Top Branded Development Guide"
              width={400}
              height={500}
              className="object-contain h-full lg:absolute bottom-0"
            />
          </div>
          <div className="py-12 lg:py-24">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">Top Branded</h2>
            <p className="text-3xl md:text-4xl font-teko font-semibold leading-tight mb-6">
              Provident's Top <span className="text-accent">Branded</span> Development In The UAE Coffee Table Book
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The first-ever dedicated platform for branded developments in the UAE. Discover an exclusive collection of the finest properties in Provident's branded projects coffee table book.
            </p>
            <Button>Download Digital Edition</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

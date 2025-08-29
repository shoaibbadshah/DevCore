
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="relative h-64 lg:h-[550px] lg:self-end">
            <Image
              src="/img/brand/guide.png"
              alt="Provident's Top Branded Development Guide"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="py-12 lg:py-24">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Top Branded</h2>
            <p className="text-3xl md:text-4xl font-teko font-semibold leading-tight text-foreground mb-6">
              Provident's Top <span className="text-primary">Branded</span> Development In The UAE Coffee Table Book
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

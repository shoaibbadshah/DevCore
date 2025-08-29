import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
      <div className="space-y-6">
          <p className="text-sm">Top Branded</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Provident's Top Branded Developement In The UAE Coffee Table Book</h2>
          <p className="text-foreground/80">
            The first-ever dedicated platform for branded developments in the UAE. Discover more about this exciting new venture with our exclusive coffee table book.
          </p>
          <Button className="bg-primary text-primary-foreground">Download Digital Edition</Button>
        </div>
        <div className="relative aspect-[3/4]">
           <Image
             src="https://picsum.photos/450/600"
             alt="Coffee Table Book"
             fill
             className="rounded-xl object-cover shadow-lg"
             data-ai-hint="book cover design"
           />
        </div>
      </div>
    </section>
  );
}

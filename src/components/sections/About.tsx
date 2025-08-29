import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden">
           <Image
             src="https://picsum.photos/600/450"
             alt="About Devcore"
             fill
             className="object-cover"
             data-ai-hint="dubai architecture"
           />
        </div>
        <div className="space-y-6">
          <p className='text-sm text-primary-foreground/80'>About us</p>
          <h2 className="text-3xl md:text-4xl font-bold">Precision, Innovation & Seamless Execution</h2>
          <p className="text-primary-foreground/80">
            Devcore Reimagined is a dynamic and forward-thinking software development company. We specialize in delivering high-quality, scalable, and innovative solutions to clients across various industries. Our team of experts is dedicated to understanding your needs and crafting software that not only meets but exceeds your expectations.
          </p>
          <Button variant='outline' className='bg-white text-primary hover:bg-gray-200'>Read More</Button>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="wow fadeInUp">
            <Image
              src="/img/about/01.jpg"
              alt="About DevCore"
              width={347}
              height={450}
              className="rounded-lg object-cover w-auto h-[450px] mx-auto"
            />
          </div>
          <div className="wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">About Us</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight mb-6">
              Precision, <span className="text-accent">Innovation</span> & Seamless Execution
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At DEVCORE, we revolutionize real estate with integrated solutions that enhance efficiency, deliver impactful marketing, and provide expert development and design consultancy. We build lasting partnerships with developers and brokerages, empowering them to navigate industry complexities with confidence and success.
            </p>
            <Button>More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

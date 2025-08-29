import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#171717]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="wow fadeInUp">
            <div className="relative">
              <Image
                src="/img/about/01.jpg"
                alt="About DevCore"
                width={526}
                height={550}
                className="rounded-lg object-cover w-full h-[550px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-lg shadow-lg w-64">
                <h3 className="text-4xl font-teko font-bold text-accent">25+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".3s">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4">About Us</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight text-white mb-6">
              Precision, <span className="text-accent underline">Innovation</span> & Seamless <span className="text-accent underline">Execution</span>
            </p>
            <p className="text-lg text-white/80 mb-8">
              At DEVCORE, we revolutionize real estate with integrated solutions that enhance efficiency, deliver impactful marketing, and provide expert development and design consultancy. We build lasting partnerships with developers and brokerages, empowering them to navigate industry complexities with confidence and success.
            </p>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold">More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

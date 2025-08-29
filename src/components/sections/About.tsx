
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#171717]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 wow fadeInUp flex items-center justify-center">
            <div className="relative">
              <Image
                src="/img/about/01.jpg"
                alt="About DevCore"
                width={400}
                height={450}
                className="rounded-lg object-cover h-[450px] w-auto mx-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-7 wow fadeInUp" data-wow-delay=".3s">
            <div className="pl-0 lg:pl-12">
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
      </div>
    </section>
  );
}

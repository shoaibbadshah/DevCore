import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const features = [
  { text: 'Expert Team of Developers' },
  { text: 'Agile Development Methodology' },
  { text: 'Transparent Communication' },
  { text: 'On-Time Delivery' },
  { text: 'Client-Centric Approach' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-card py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us?</h2>
          <p className="text-foreground/80">
            We are committed to delivering excellence. Our focus on quality, innovation, and customer satisfaction sets us apart from the competition.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span className="font-medium">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-video md:aspect-square">
           <Image
             src="https://picsum.photos/600/600"
             alt="Why Choose Us"
             width={600}
             height={600}
             className="rounded-xl object-cover shadow-lg"
             data-ai-hint="business strategy"
           />
        </div>
      </div>
    </section>
  );
}

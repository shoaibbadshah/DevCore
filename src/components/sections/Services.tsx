import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, Handshake, Megaphone, Search, Users } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    image: 'https://picsum.photos/400/300?random=1',
    hint: 'handshake deal',
    title: 'Land Acquisition',
    description: 'Complete transparency on the process of acquiring land for our clients.',
  },
  {
    image: 'https://picsum.photos/400/300?random=2',
    hint: 'architectural design',
    title: 'Design & Development',
    description: 'We move forward with our clients, from architectural design to handover.',
  },
  {
    image: 'https://picsum.photos/400/300?random=3',
    hint: 'marketing graph',
    title: 'Sales & Marketing',
    description: 'Ensuring your property is sold to the right investors through our large agent network.',
  },
  {
    image: 'https://picsum.photos/400/300?random=4',
    hint: 'digital content',
    title: 'Content Creation',
    description: 'We produce high-quality content that engages with your target audience.',
  },
  {
    image: 'https://picsum.photos/400/300?random=5',
    hint: 'data collection',
    title: 'CRM & Collections',
    description: 'Our team handles all the paperwork, from the first transaction until the last.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-primary-foreground/80">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">We Shape The Perfect Solution</h2>
          </div>
          <button className="bg-white text-primary px-6 py-2 rounded-md hover:bg-gray-200">
            View All Services
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-primary border-primary-foreground/20 text-primary-foreground overflow-hidden">
               <div className="relative aspect-[4/3]">
                <Image src={service.image} alt={service.title} fill className="object-cover" data-ai-hint={service.hint} />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/70 mb-4">{service.description}</p>
                <a href="#" className="flex items-center text-white hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

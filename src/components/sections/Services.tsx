
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

const services = [
  {
    title: 'LAND ACQUISITION',
    description: 'Strategic sourcing of prime real estate opportunities, ensuring high-value investments for developers and investors.',
    image: '/img/services/s1.jpg',
  },
  {
    title: 'DESIGN & DEVELOPMENT',
    description: 'Innovative, future-ready projects built with precision, sustainability, and market appeal in mind.',
    image: '/img/services/s2.jpg',
  },
  {
    title: 'SALES & MARKETING',
    description: 'Maximizing property exposure and sales velocity through cutting-edge branding, digital campaigns, and strategic sales execution.',
    image: '/img/services/s3.jpg',
  },
  {
    title: 'CONTENT CREATION',
    description: 'Elevating real estate storytelling with high-quality visuals, immersive media, and powerful narratives that captivate buyers.',
    image: '/img/services/s4.jpg',
  },
  {
    title: 'CRM & COLLECTIONS',
    description: 'Seamless client relationship management & financial oversight to ensure efficient transactions & optimized revenue streams.',
    image: '/img/services/s5.jpg',
  },
   {
    title: 'MORTGAGE & CONVEYANCE',
    description: 'Expert guidance through financing and legal processes, ensuring a smooth and secure property transfer experience from start to finish.',
    image: '/img/services/s5.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Our Services</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight">
              We Shape the <span className="text-primary">Perfect</span> Solution
            </p>
          </div>
          <Button asChild className="hidden md:flex">
            <Link href="#">See All Services</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary border-border/50 overflow-hidden group">
              <CardHeader className="p-0">
                <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-teko mb-4">{service.title}</CardTitle>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href="#" className="flex items-center text-primary font-semibold hover:underline">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

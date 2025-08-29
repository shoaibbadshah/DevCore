import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Palette, ShoppingCart, TestTube2, Users } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Web Development',
    description: 'Creating responsive and powerful websites tailored to your business needs.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Mobile App Development',
    description: 'Building intuitive and high-performance mobile apps for iOS and Android.',
  },
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: 'UI/UX Design',
    description: 'Designing beautiful and user-friendly interfaces that enhance user experience.',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-accent" />,
    title: 'E-commerce Solutions',
    description: 'Developing robust e-commerce platforms to grow your online business.',
  },
  {
    icon: <TestTube2 className="h-10 w-10 text-accent" />,
    title: 'Software Testing',
    description: 'Ensuring your software is bug-free and performs flawlessly with our QA services.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Dedicated Team',
    description: 'Augmenting your team with our skilled and dedicated development experts.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer a wide range of services to help you achieve your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

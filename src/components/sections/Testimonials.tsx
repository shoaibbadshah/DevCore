import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Working with Devcore Reimagined has been a game-changer for our business. Their team is professional, knowledgeable, and incredibly responsive. The final product exceeded all our expectations!",
    name: 'Jane Doe',
    title: 'CEO, Tech Innovations Inc.',
    avatar: 'https://picsum.photos/150/150?random=1',
    initials: 'JD'
  },
  {
    quote: "The level of detail and commitment to quality from Devcore Reimagined is outstanding. They transformed our vision into a reality with a seamless and intuitive application.",
    name: 'John Smith',
    title: 'CTO, Future Solutions',
    avatar: 'https://picsum.photos/150/150?random=2',
    initials: 'JS'
  },
  {
    quote: "We were impressed by their technical expertise and the agile approach they took. Communication was clear and constant. Highly recommended for any software development needs.",
    name: 'Emily Johnson',
    title: 'Product Manager, Creative Co.',
    avatar: 'https://picsum.photos/150/150?random=3',
    initials: 'EJ'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We are proud to have worked with amazing clients. Here's what they think about us.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <p className="text-lg text-foreground/90 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

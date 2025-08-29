
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John D.',
    role: 'Real Estate Investor',
    testimonial:
      "DevCore's market insights and strategic approach to land acquisition have been instrumental in my investment success. Their team's expertise is unmatched.",
    avatar: '/DevCoreWeb/assets/img/testimonial/author-1.png',
  },
  {
    name: 'Sarah L.',
    role: 'Lead Architect',
    testimonial:
      'Working with DevCore on the design and development of our latest project was a game-changer. Their vision and execution are top-notch.',
    avatar: '/DevCoreWeb/assets/img/testimonial/author-2.png',
  },
  {
    name: 'Michael P.',
    role: 'Marketing Director',
    testimonial:
      "The sales and marketing campaign DevCore crafted for our luxury apartments exceeded all expectations. We sold out in record time!",
    avatar: '/DevCoreWeb/assets/img/testimonial/author-3.png',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 section-padding section-bg">
      <div className="container">
        <div className="section-title-area">
            <div className="section-title">
                <h6 className="wow fadeInUp">Testimonials</h6>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">What Our <span>Client’s</span> Say</h2>
            </div>
            <a href="#" className="theme-btn white-btn wow fadeInUp" data-wow-delay=".5s">See All Testimonials</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 border-border/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


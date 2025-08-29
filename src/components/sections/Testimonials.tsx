import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const news = [
  {
    title: 'The Power Of Visual Branding',
    date: 'August 11, 2021',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    aiHint: 'team presentation'
  },
  {
    title: 'The Power Of Visual Branding',
    date: 'August 11, 2021',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    aiHint: 'business award'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-foreground/80">Our Feed</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest News &</h2>
          </div>
          <Button variant='outline'>View all news</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={item.aiHint}
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm text-foreground/70 mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                  <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">View details</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

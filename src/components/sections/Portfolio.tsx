import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Umm Al Quwain',
    imageUrl: 'https://picsum.photos/400/500?random=1',
    aiHint: 'modern building'
  },
  {
    title: 'White Bay Umm Al Quwain',
    imageUrl: 'https://picsum.photos/400/500?random=2',
    aiHint: 'luxury villa'
  },
  {
    title: 'White Bay Umm Al Quwain',
    imageUrl: 'https://picsum.photos/400/500?random=3',
    aiHint: 'island resort'
  },
  {
    title: 'White Bay Umm Al Quwain',
    imageUrl: 'https://picsum.photos/400/500?random=4',
    aiHint: 'beachfront property'
  },
  {
    title: 'White Bay Umm Al Quwain',
    imageUrl: 'https://picsum.photos/400/500?random=5',
    aiHint: 'skyscraper city'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-foreground/80">Our Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Recent</h2>
          </div>
          <Button variant='outline'>
            View all projects
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="absolute bottom-0 p-4">
                <h3 className="font-bold text-lg text-white">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

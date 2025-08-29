import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    aiHint: 'online store'
  },
  {
    title: 'Social Media App',
    category: 'Mobile App',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    aiHint: 'social app'
  },
  {
    title: 'Corporate Website',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    aiHint: 'corporate design'
  },
  {
    title: 'Project Management Tool',
    category: 'Web Application',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    aiHint: 'dashboard project'
  },
    {
    title: 'Healthcare CRM',
    category: 'Software Development',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    aiHint: 'medical software'
  },
  {
    title: 'Booking System',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    aiHint: 'travel booking'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Portfolio</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Check out some of our recent projects that showcase our expertise and commitment to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-lg text-primary">{project.title}</h3>
                  <p className="text-sm text-foreground/70">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

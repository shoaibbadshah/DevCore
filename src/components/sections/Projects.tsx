
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'White Bay Umm Al Quwain',
    image: '/img/project/project-one-img-1.jpg',
  },
  {
    title: 'Modern Villa, Dubai Hills',
    image: '/img/project/project-one-img-2.jpg',
  },
  {
    title: 'Downtown Luxury Apartments',
    image: '/img/project/project-one-img-3.jpg',
  },
  {
    title: 'Jumeirah Beach Residence',
    image: '/img/project/project-one-img-4.jpg',
  },
  {
    title: 'The Palm Tower',
    image: '/img/project/project-one-img-5.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Our Work</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight">
              Our Recent <span className="text-primary">Projects</span>
            </p>
          </div>
          <Button asChild>
            <Link href="#">See All Projects</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-lg">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl font-teko font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

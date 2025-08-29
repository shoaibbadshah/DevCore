
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Power of Visual Branding',
    date: 'August 17, 2024',
    image: '/img/news/blog-one-img-1.jpg',
  },
  {
    title: 'Top 5 Up-and-Coming Neighborhoods',
    date: 'August 15, 2024',
    image: '/img/news/blog-one-img-2.jpg',
  },
  {
    title: 'Navigating the Dubai Property Market',
    date: 'August 12, 2024',
    image: '/img/news/blog-one-img-3.jpg',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Blog & News</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight">Latest News & <span className="text-primary">Blog</span></p>
          </div>
          <Button asChild className="hidden md:flex">
            <Link href="#">See All Blog</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden group bg-card border-border">
              <div className="relative">
                <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-2xl font-teko font-semibold mb-4 hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                <Link href="#" className="flex items-center font-semibold text-primary">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

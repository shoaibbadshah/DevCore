import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-card py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="relative aspect-video md:aspect-square">
           <Image
             src="https://picsum.photos/600/600"
             alt="About Devcore"
             width={600}
             height={600}
             className="rounded-xl object-cover shadow-lg"
             data-ai-hint="office meeting"
           />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
          <p className="text-foreground/80">
            Devcore Reimagined is a dynamic and forward-thinking software development company. We specialize in delivering high-quality, scalable, and innovative solutions to clients across various industries. Our team of experts is dedicated to understanding your needs and crafting software that not only meets but exceeds your expectations.
          </p>
          <p className="text-foreground/80">
            From mobile apps to complex enterprise systems, we leverage the latest technologies to build robust and user-friendly products. Our commitment to excellence and our passion for technology drive us to deliver the best results for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

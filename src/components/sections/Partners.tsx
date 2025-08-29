import Image from 'next/image';

const partners = [
  { name: 'Innovate Corp', logoUrl: 'https://picsum.photos/150/50?random=1', hint: 'company logo' },
  { name: 'Tech Solutions', logoUrl: 'https://picsum.photos/150/50?random=2', hint: 'company logo' },
  { name: 'Creative Minds', logoUrl: 'https://picsum.photos/150/50?random=3', hint: 'company logo' },
  { name: 'Future Systems', logoUrl: 'https://picsum.photos/150/50?random=4', hint: 'company logo' },
  { name: 'Alpha Projects', logoUrl: 'https://picsum.photos/150/50?random=5', hint: 'company logo' },
  { name: 'Global Ventures', logoUrl: 'https://picsum.photos/150/50?random=6', hint: 'company logo' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Partners</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We are proud to collaborate with leading companies and technology partners.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative h-[50px] w-[150px]">
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                data-ai-hint={partner.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

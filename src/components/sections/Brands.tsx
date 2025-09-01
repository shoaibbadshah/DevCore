import Image from 'next/image';

const brandLogos = [
  { src: '/img/brand/01.png', alt: 'Reliance Insurance Group' },
  { src: '/img/brand/02.png', alt: 'Holdings' },
  { src: '/img/brand/03.png', alt: 'Mobile Tech' },
  { src: '/img/brand/04.png', alt: 'Western' },
  { src: '/img/brand/05.png', alt: 'AudioWave' },
  { src: '/img/brand/06.png', alt: 'Pandora' },
];

export default function Brands() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 flex justify-center items-center mx-8">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

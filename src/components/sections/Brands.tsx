import Image from 'next/image';

const brandLogos = [
  { src: '/DevCoreWeb/assets/img/brand/01.png', alt: 'Brand 1' },
  { src: '/DevCoreWeb/assets/img/brand/02.png', alt: 'Brand 2' },
  { src: '/DevCoreWeb/assets/img/brand/03.png', alt: 'Brand 3' },
  { src: '/DevCoreWeb/assets/img/brand/04.png', alt: 'Brand 4' },
  { src: '/DevCoreWeb/assets/img/brand/05.png', alt: 'Brand 5' },
  { src: '/DevCoreWeb/assets/img/brand/06.png', alt: 'Brand 6' },
];

export default function Brands() {
  return (
    <section className="py-8 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-around items-center gap-8 flex-wrap">
          {brandLogos.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              width={150}
              height={50}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

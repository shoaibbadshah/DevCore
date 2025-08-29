
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const areas = [
    { name: "Dubai Marina", image: "/img/project/a1.jpg" },
    { name: "Downtown Dubai", image: "/img/project/a2.jpg" },
    { name: "Palm Jumeirah", image: "/img/project/a3.jpg" },
    { name: "Jumeirah Village Circle", image: "/img/project/a4.jpg" },
    { name: "Business Bay", image: "/img/project/a5.jpg" },
];

export default function TopAreas() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Our Coverage</h2>
                        <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight">Top areas in <span className="text-primary">Dubai</span></p>
                    </div>
                    <Button asChild>
                        <Link href="#">See All</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {areas.map((area) => (
                        <div key={area.name} className="relative group overflow-hidden rounded-lg">
                            <Image
                                src={area.image}
                                alt={area.name}
                                width={400}
                                height={500}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                                <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

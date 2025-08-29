import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative h-[500px] text-white">
      <Image
        src="https://picsum.photos/1920/500"
        alt="Investment background"
        fill
        className="object-cover"
        data-ai-hint="investment cityscape"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center space-y-6 px-4 md:px-6">
        <p className="text-lg">Welcome To DevCore</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Invest In Dubai, Invest In The Future
        </h1>
        <div className="flex w-full max-w-md items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex h-10 w-full rounded-md border border-input bg-background/80 px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="submit" className="bg-white text-primary hover:bg-gray-200">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}

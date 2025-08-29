import VisualStyleGeneratorForm from '@/components/visual-style-generator/Form';

export default function VisualStyleGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
                AI Visual Style Generator
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Enter a website URL to get modern visual style suggestions. Our AI will analyze the site and propose a new color scheme, font choices, and layout ideas.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <VisualStyleGeneratorForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Paintbrush, Type, LayoutTemplate, Sparkles } from 'lucide-react';
import { generateVisualDesign, type GenerateVisualDesignOutput } from '@/ai/flows/generate-visual-design';

const formSchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export default function VisualStyleGeneratorForm() {
  const [result, setResult] = useState<GenerateVisualDesignOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: 'http://travsol.com.pk/devcore4/',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const output = await generateVisualDesign({ url: values.url });
      setResult(output);
    } catch (e: any) {
      setError('Failed to generate visual design. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Enter URL to Analyze</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Style'
              )}
            </Button>
          </form>
        </Form>
        {error && <p className="mt-4 text-center text-destructive">{error}</p>}
        {isLoading && !result && (
            <div className="mt-8 text-center">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                <p className="mt-2 text-foreground/80">Analyzing and generating suggestions...</p>
            </div>
        )}
        {result && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-center text-primary">Generated Visual Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Paintbrush className="h-8 w-8 text-accent" />
                  <CardTitle>Color Scheme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{result.colorScheme}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Type className="h-8 w-8 text-accent" />
                  <CardTitle>Font Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{result.fontChoices}</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center gap-4">
                  <LayoutTemplate className="h-8 w-8 text-accent" />
                  <CardTitle>Layout Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{result.layoutIdeas}</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                  <CardTitle>Overall Style</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{result.overallStyle}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

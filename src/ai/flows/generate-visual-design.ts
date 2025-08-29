'use server';

/**
 * @fileOverview An AI agent that suggests a modern visual style for a website based on a given URL.
 *
 * - generateVisualDesign - A function that handles the visual design generation process.
 * - GenerateVisualDesignInput - The input type for the generateVisualDesign function.
 * - GenerateVisualDesignOutput - The return type for the generateVisualDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVisualDesignInputSchema = z.object({
  url: z.string().describe('The URL of the website to analyze.'),
});
export type GenerateVisualDesignInput = z.infer<typeof GenerateVisualDesignInputSchema>;

const GenerateVisualDesignOutputSchema = z.object({
  colorScheme: z.string().describe('Suggested color scheme for the website.'),
  fontChoices: z.string().describe('Suggested font choices for the website.'),
  layoutIdeas: z.string().describe('Suggested layout ideas for the website.'),
  overallStyle: z.string().describe('Overall suggested visual style.'),
});
export type GenerateVisualDesignOutput = z.infer<typeof GenerateVisualDesignOutputSchema>;

export async function generateVisualDesign(input: GenerateVisualDesignInput): Promise<GenerateVisualDesignOutput> {
  return generateVisualDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVisualDesignPrompt',
  input: {schema: GenerateVisualDesignInputSchema},
  output: {schema: GenerateVisualDesignOutputSchema},
  prompt: `You are a visual design expert. Analyze the website at the given URL and suggest a modern visual style to differentiate a new website from it.

URL: {{{url}}}

Consider the following aspects:

- Color Scheme: Suggest a color scheme that is modern and visually appealing.
- Font Choices: Suggest font choices that are appropriate for the website's content and target audience.
- Layout Ideas: Suggest layout ideas that are user-friendly and visually engaging.

Provide an overall suggested visual style that incorporates these aspects.`,
});

const generateVisualDesignFlow = ai.defineFlow(
  {
    name: 'generateVisualDesignFlow',
    inputSchema: GenerateVisualDesignInputSchema,
    outputSchema: GenerateVisualDesignOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

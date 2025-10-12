'use server';

/**
 * @fileOverview A flow for generating legal commentary snippets using AI.
 *
 * - generateLegalCommentary - A function that generates legal commentary snippets.
 * - GenerateLegalCommentaryInput - The input type for the generateLegalCommentary function.
 * - GenerateLegalCommentaryOutput - The return type for the generateLegalCommentary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLegalCommentaryInputSchema = z.object({
  topic: z
    .string()
    .describe('The legal topic to generate commentary on, e.g., recent court rulings, new legislation, or trending legal issues.'),
  style: z
    .string()
    .default('scholarly and authoritative')
    .describe('The style of the commentary, e.g., scholarly, approachable, or concise.'),
  publicationTitles: z
    .array(z.string())
    .optional()
    .describe('A list of publication titles to use as context for generating the commentary.'),
});
export type GenerateLegalCommentaryInput = z.infer<typeof GenerateLegalCommentaryInputSchema>;

const GenerateLegalCommentaryOutputSchema = z.object({
  commentary: z.string().describe('The generated legal commentary snippet.'),
});
export type GenerateLegalCommentaryOutput = z.infer<typeof GenerateLegalCommentaryOutputSchema>;

export async function generateLegalCommentary(
  input: GenerateLegalCommentaryInput
): Promise<GenerateLegalCommentaryOutput> {
  return generateLegalCommentaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLegalCommentaryPrompt',
  input: {schema: GenerateLegalCommentaryInputSchema},
  output: {schema: GenerateLegalCommentaryOutputSchema},
  prompt: `You are an AI assistant tasked with generating short, engaging legal commentary snippets for Professor Chigbo's website.

  The goal is to enhance his thought leadership presence by providing insightful commentary on trending legal topics.

  Consider his areas of expertise: Property & Conveyancing, Corporate & Commercial Law, and International Arbitration.

  Here are some publication titles you can use as context: {{#each publicationTitles}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Topic: {{topic}}
  Style: {{style}}

  Generate a single, concise commentary snippet suitable for display on a website homepage. The snippet should be no more than 100 words.
  `,
});

const generateLegalCommentaryFlow = ai.defineFlow(
  {
    name: 'generateLegalCommentaryFlow',
    inputSchema: GenerateLegalCommentaryInputSchema,
    outputSchema: GenerateLegalCommentaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

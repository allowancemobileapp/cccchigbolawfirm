'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { generateCommentaryAction } from '@/app/actions';
import { commentarySchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heading } from './ui/heading';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Commentary
    </Button>
  );
}

export default function LegalCommentaryGenerator() {
  const [state, formAction] = useFormState(generateCommentaryAction, initialState);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof commentarySchema>>({
    resolver: zodResolver(commentarySchema),
    defaultValues: {
      topic: 'Recent Supreme Court rulings on data privacy',
      style: 'scholarly and authoritative',
    },
  });

  useEffect(() => {
    if (state.message && state.message.startsWith('Error:')) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }

    if (state.errors) {
      if (state.errors.topic) {
        form.setError('topic', { type: 'server', message: state.errors.topic.join(', ') });
      }
      if (state.errors.style) {
        form.setError('style', { type: 'server', message: state.errors.style.join(', ') });
      }
    } else {
      form.clearErrors();
    }
  }, [state, form, toast]);

  const isSuccess = state.message && !state.errors && !state.message.startsWith('Error:');

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Heading as="h2" variant="section" className="text-primary">
          Generate Legal Commentary
        </Heading>
        <p className="mt-4 text-lg text-muted-foreground">
          Leverage AI to generate insightful commentary snippets on trending legal topics. Enhance thought leadership by exploring different angles and styles.
        </p>
        <Card className="mt-8">
          <Form {...form}>
            <form action={formAction}>
              <CardHeader>
                <CardTitle>Commentary Generator Tool</CardTitle>
                <CardDescription>Enter a topic and select a style to begin.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Legal Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., The impact of AI on contract law" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="style"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Commentary Style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="scholarly and authoritative">Scholarly & Authoritative</SelectItem>
                          <SelectItem value="approachable and engaging">Approachable & Engaging</SelectItem>
                          <SelectItem value="concise and punchy">Concise & Punchy</SelectItem>
                          <SelectItem value="formal and academic">Formal & Academic</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>

      <div className="h-full">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Generated Snippet</CardTitle>
            <CardDescription>The AI-powered commentary will appear below.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="bg-secondary rounded-md p-4 min-h-[200px] text-muted-foreground italic">
              {isSuccess ? (
                <p className="text-foreground not-italic">{state.message}</p>
              ) : (
                'Awaiting generation...'
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

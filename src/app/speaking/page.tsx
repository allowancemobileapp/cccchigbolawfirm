import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { speakingEvents } from '@/lib/data';
import { Calendar, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speaking Engagements',
  description: 'A list of speaking engagements, workshops, and media appearances by Professor Clement C. Chigbo.',
};

export default function SpeakingPage() {
  return (
    <Section>
      <Heading as="h1" variant="section" className="text-center text-primary">
        Speaking & Media
      </Heading>
      <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
        Engaging with the legal community and the public through talks, workshops, and media appearances.
      </p>

      <div className="mt-12 max-w-3xl mx-auto space-y-8">
        {speakingEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{event.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

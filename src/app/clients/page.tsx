import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { clientTypes } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'An overview of the types of clients served, including corporations, foreign investors, and private individuals.',
};

export default function ClientsPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'clients-hero');

  return (
    <>
      <Section className="pt-0 -mt-20">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-20"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-primary/70 -z-10"></div>
          <div className="container">
            <Heading as="h1" variant="section" className="text-4xl md:text-6xl text-white">
              Clientele
            </Heading>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Providing dedicated legal services to a diverse range of clients.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" variant="section" className="text-center text-primary">
          Who We Serve
        </Heading>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
          With a commitment to excellence and integrity, we offer specialized legal counsel to a diverse clientele. Our approach is tailored to the unique needs and objectives of each client, ensuring strategic and effective representation.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="flex">
              <div className="p-6 bg-accent/10 flex items-center justify-center rounded-l-lg">
                <CheckCircle className="h-8 w-8 text-accent"/>
              </div>
              <div className="p-6">
                <CardTitle>{client.title}</CardTitle>
                <CardDescription className="mt-2">{client.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

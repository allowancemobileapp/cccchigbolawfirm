import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { practiceAreas } from '@/lib/data';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = practiceAreas.find((p) => p.slug === params.slug);
  if (!area) {
    return {
      title: 'Practice Area Not Found',
    };
  }
  return {
    title: area.title,
    description: area.summary,
  };
}

export default function PracticeAreaDetailPage({ params }: { params: { slug: string } }) {
  const area = practiceAreas.find((p) => p.slug === params.slug);

  if (!area) {
    notFound();
  }

  const areaImage = PlaceHolderImages.find((img) => img.id === area.image);
  const otherAreas = practiceAreas.filter((a) => a.id !== area.id);

  return (
    <>
      <Section className="pt-12 pb-0">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Heading as="h1" variant="section" className="text-primary !text-4xl">
              {area.title}
            </Heading>
            <div className="mt-6 space-y-6 text-muted-foreground prose prose-lg max-w-none">
              {area.fullDescription.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
          <div className="md:col-span-2">
            {areaImage && (
              <Image
                src={areaImage.imageUrl}
                alt={areaImage.description}
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={areaImage.imageHint}
              />
            )}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Other Practice Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {otherAreas.map(other => (
                    <li key={other.id}>
                       <Link href={`/practice/${other.slug}`} className="flex items-center gap-2 text-primary hover:underline">
                        <Check className="h-4 w-4 text-accent"/>
                        <span>{other.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

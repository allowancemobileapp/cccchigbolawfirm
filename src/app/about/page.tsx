import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { fullBio, education } from '@/lib/data';
import { Download, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Professor Clement C. Chigbo',
  description: "Explore the biography, qualifications, and distinguished career of Professor Clement C. Chigbo, a multi-jurisdictional lawyer and academic.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-page-hero');

  return (
    <>
      <Section className="pt-0 -mt-20">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden flex items-center justify-center text-center text-white">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover -z-20"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-primary/70 -z-10"></div>
          <div className="container">
            <Heading as="h1" variant="section" className="text-4xl md:text-6xl text-white">
              About The Professor
            </Heading>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              A distinguished career in law and academia across multiple jurisdictions.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-0 md:py-0 -mt-16 md:-mt-24 z-10 relative">
        <Card className="max-w-4xl mx-auto p-6 md:p-10 shadow-xl">
          <Heading as="h2" variant="sub" className="text-primary">
            Biography
          </Heading>
          <div className="mt-6 space-y-4 text-muted-foreground prose prose-lg max-w-none">
            {fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Academic CV
            </Button>
          </div>
        </Card>
      </Section>
      
      <Section id="education" className="bg-secondary">
        <Heading as="h2" variant="section" className="text-center text-primary">
          Education & Qualifications
        </Heading>
        <div className="mt-12 max-w-2xl mx-auto">
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-accent/10 p-2 rounded-full">
                    <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}

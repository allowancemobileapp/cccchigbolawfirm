import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { practiceAreas } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Areas of Practice',
  description: 'Explore the legal services and areas of practice offered by Professor Clement C. Chigbo, including Property & Conveyancing, Corporate & Commercial Law, and International Arbitration.',
};

export default function PracticeAreasPage() {
  return (
    <Section>
      <Heading as="h1" variant="section" className="text-center text-primary">
        Areas of Practice
      </Heading>
      <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
        Delivering expert legal counsel and strategic advice across a diverse range of specialized fields to clients worldwide.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {practiceAreas.map((area) => (
          <Link href={`/practice/${area.slug}`} key={area.id} className="block group">
            <Card className="h-full transition-shadow duration-300 group-hover:shadow-xl">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <area.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <CardTitle>{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.summary}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

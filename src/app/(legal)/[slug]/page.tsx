import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { legalPages } from '@/lib/data';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';

type LegalPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const page = legalPages[params.slug];
  if (!page) {
    return {};
  }
  return {
    title: page.title,
    description: `Read the ${page.title} for Professor Clement C. Chigbo's website.`,
  };
}

export default function LegalPage({ params }: LegalPageProps) {
  const page = legalPages[params.slug];

  if (!page) {
    notFound();
  }

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <Heading as="h1" variant="section" className="text-primary text-center">
          {page.title}
        </Heading>
        <div className="mt-8 prose lg:prose-lg max-w-none mx-auto text-muted-foreground">
          {page.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

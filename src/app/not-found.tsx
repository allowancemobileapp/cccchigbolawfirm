import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center text-center">
      <Heading as="h1" variant="section" className="text-5xl md:text-7xl text-primary">
        404
      </Heading>
      <Heading as="h2" variant="sub" className="mt-4">
        Page Not Found
      </Heading>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </Section>
  );
}

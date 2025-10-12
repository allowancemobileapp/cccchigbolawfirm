import Image from 'next/image';
import Link from 'next/link';
import {
  practiceAreas,
  publications,
  shortBio,
  siteNavLinks,
} from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <>
      <Section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center text-white py-20 md:py-32 -mt-20">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover -z-20"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline !leading-tight text-white">
              Professor Clement C. Chigbo
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Barrister, Solicitor & Associate Professor of Law. Expert counsel
              in Property & Conveyancing, Corporate Law, and International
              Arbitration.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="about-snippet">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Heading as="h2" variant="section" className="text-primary">
              Multi-Jurisdictional Lawyer & Academic
            </Heading>
            <p className="mt-4 text-lg text-muted-foreground">{shortBio}</p>
            <Button asChild className="mt-6" variant="link" size="lg">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Jurisdictions</CardTitle>
              <CardDescription className="text-primary-foreground/80">Admitted to practice in multiple jurisdictions, offering global legal expertise.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="fi fi-ng rounded-sm"></span> Nigeria
                </li>
                <li className="flex items-center gap-3">
                  <span className="fi fi-gb rounded-sm"></span> England & Wales
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="practice-areas" className="bg-secondary">
        <Heading as="h2" variant="section" className="text-center text-primary">
          Areas of Practice
        </Heading>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          Providing strategic legal advice across a range of complex practice areas.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area) => (
            <Link href={`/practice/${area.slug}`} key={area.id}>
              <Card className="h-full text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <area.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="publications">
        <Heading as="h2" variant="section" className="text-center text-primary">
          Featured Publications
        </Heading>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          Authored and co-authored texts contributing to legal education and practice.
        </p>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {publications.map((pub) => {
                const pubImage = PlaceHolderImages.find(p => p.id === pub.coverImage);
                return (
                  <CarouselItem key={pub.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                           {pubImage && (
                            <Image
                              src={pubImage.imageUrl}
                              alt={`Cover of ${pub.title}`}
                              width={400}
                              height={600}
                              className="rounded-md object-cover aspect-[2/3] w-full"
                              data-ai-hint={pubImage.imageHint}
                            />
                           )}
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <CardTitle>{pub.title}</CardTitle>
                          <p className="text-muted-foreground mt-2">{pub.year}</p>
                          <p className="mt-2 text-sm">{pub.summary}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="/publications">View All Publications</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

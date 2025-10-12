'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { publications } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  
  const years = useMemo(() => ['all', ...Array.from(new Set(publications.map(p => p.year.toString()))).sort((a, b) => Number(b) - Number(a))], []);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || pub.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [searchTerm, selectedYear]);

  return (
    <Section>
      <Heading as="h1" variant="section" className="text-center text-primary">
        Publications
      </Heading>
      <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
        A collection of authored and co-authored texts contributing to legal education and practice.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Input 
          placeholder="Search publications..."
          className="flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent>
            {years.map(year => (
              <SelectItem key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPublications.map((pub) => {
          const pubImage = PlaceHolderImages.find(p => p.id === pub.coverImage);
          return (
            <Card key={pub.id} className="flex flex-col">
              {pubImage && (
                <Image
                  src={pubImage.imageUrl}
                  alt={`Cover of ${pub.title}`}
                  width={400}
                  height={600}
                  className="rounded-t-lg object-cover aspect-[2/3] w-full"
                  data-ai-hint={pubImage.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle>{pub.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {pub.coAuthor ? `${pub.coAuthor} • ${pub.year}` : pub.year}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm">{pub.summary}</p>
                {pub.isbn && <p className="text-xs text-muted-foreground mt-4">ISBN: {pub.isbn}</p>}
              </CardContent>
              <CardFooter>
                {pub.downloadUrl ? (
                  <Button asChild className="w-full">
                    <a href={pub.downloadUrl} download>
                      <Download className="mr-2 h-4 w-4"/> Download
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full">Download Unavailable</Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
        {filteredPublications.length === 0 && (
          <p className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-12">
            No publications found matching your criteria.
          </p>
        )}
      </div>
    </Section>
  );
}

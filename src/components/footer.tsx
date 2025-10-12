import Link from 'next/link';
import { Linkedin } from 'lucide-react';

import { siteNavLinks, shortBio } from '@/lib/data';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Logo } from './logo';
import { Separator } from './ui/separator';

export function Footer() {
  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-primary-foreground/70">
              {shortBio.substring(0, 150)}...
            </p>
            <div className="mt-4 flex space-x-4">
              <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {siteNavLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/70">
              <p>123 Law Street, Legal District</p>
              <p>Lagos, Nigeria</p>
              <p>Email: <a href="mailto:contact@lexprofile.com" className="hover:text-primary-foreground hover:underline">contact@lexprofile.com</a></p>
              <p>Phone: +234 123 456 7890</p>
            </address>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Stay updated with legal insights and news.
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Professor Clement C. Chigbo. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-foreground hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

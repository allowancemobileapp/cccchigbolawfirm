import { Scale } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Scale className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-primary">
        LexProfile
      </span>
    </Link>
  );
}

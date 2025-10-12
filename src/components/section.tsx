import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

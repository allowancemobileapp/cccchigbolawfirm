import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'section' | 'sub';
  centered?: boolean;
}

export function Heading({
  as: Comp = 'h2',
  className,
  variant,
  centered,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        'font-headline tracking-tight',
        {
          'text-3xl md:text-4xl font-bold': variant === 'section',
          'text-2xl md:text-3xl font-bold': variant === 'sub',
          'text-center': centered,
        },
        className
      )}
      {...props}
    />
  );
}

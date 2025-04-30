'use client';

import Image from 'next/image';
import { cn } from 'fumadocs-ui/utils/cn';

export interface SponsorCardProps {
  name: string;
  description?: string;
  imageSrc: string;
  href: string;
  data_plausible_event_name?: string;
  className?: string;
  [key: string]: any;
}

export function SponsorCard({
  name,
  description,
  imageSrc,
  href,
  data_plausible_event_name,
  className,
  ...rest
}: SponsorCardProps) {
  const handleClick = () => {
    if (
      data_plausible_event_name &&
      typeof window !== 'undefined' &&
      typeof window.plausible === 'function'
    ) {
      window.plausible(data_plausible_event_name);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-card
      className={cn(
        'block rounded-lg border bg-fd-card text-fd-card-foreground shadow-md transition-colors hover:bg-fd-card/30 hover:scale-105 transition-transform',
        className
      )}
      {...rest}
    >
      {/* Image section */}
      <div className="flex justify-center pt-6 mb-[8px]">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${name} logo`}
            width={96}
            height={96}
            className="w-full h-full object-cover object-center !m-0"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="px-4 py-4 text-center">
        <h3 className="not-prose mb-2 text-sm font-medium">{name}</h3>
        {description && (
          <p className="text-sm text-fd-muted-foreground">{description}</p>
        )}
      </div>
    </a>
  );
}
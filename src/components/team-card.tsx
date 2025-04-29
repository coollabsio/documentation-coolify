'use client';

import Image from 'next/image';
import { cn } from 'fumadocs-ui/utils/cn';
import { X, Globe, Youtube } from 'lucide-react';

// Map social prop keys to Lucide icons
const socialIconMap = {
  x: X,
  web: Globe,
  youtube: Youtube,
} as const;

type SocialKey = keyof typeof socialIconMap;

export interface TeamCardProps {
  name: string;
  position: string;
  imageSrc: string;
  imageAlt?: string;
  data_plausible_event_name?: string;
  x?: string;
  web?: string;
  youtube?: string;
  [key: string]: any;
}

export function TeamCard({
  name,
  position,
  imageSrc,
  imageAlt,
  data_plausible_event_name,
  className,
  ...rest
}: TeamCardProps) {
  const socials = (Object.keys(socialIconMap) as SocialKey[])
    .filter((key) => typeof rest[key] === 'string')
    .map((key) => {
      const Icon = socialIconMap[key];
      const url = rest[key] as string;
      const handleSocialClick = () => {
        if (
          data_plausible_event_name &&
          typeof window !== 'undefined' &&
          typeof window.plausible === 'function'
        ) {
          window.plausible(data_plausible_event_name);
          console.log(`[Plausible] Tracked event: ${data_plausible_event_name}`);
        }
      };
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener"
          onClick={handleSocialClick}
          className="not-prose w-fit rounded-xl border bg-fd-muted p-1.5 text-fd-muted-foreground hover:bg-fd-accent/90"
        >
          <Icon className="size-5" />
        </a>
      );
    });

  return (
    <div
      data-card
      className={cn(
        'block rounded-lg border bg-fd-card text-fd-card-foreground shadow-md transition-colors hover:bg-fd-card/30',
        className
      )}
    >
      {/* Image section */}
      <div className="flex justify-center pt-6 mb-[8px]">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            width={96}
            height={96}
            className="w-full h-full object-cover object-center !m-0"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="px-4 py-4 text-center">
        <h3 className="not-prose mb-2 text-sm font-medium">{name}</h3>
        <p className="!my-0 text-sm text-fd-muted-foreground">{position}</p>
        {socials.length > 0 && (
          <div className="mt-4 flex justify-center space-x-4 mb-4">{socials}</div>
        )}
      </div>
    </div>
  );
}

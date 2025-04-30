'use client';

import Image from 'next/image';
import Link from 'fumadocs-core/link';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from 'fumadocs-ui/utils/cn';
import { ArrowUpRight } from 'lucide-react';

export type BigCardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  icon?: ReactNode;
  imgSrc?: string;
  title: ReactNode;
  description?: ReactNode;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  data_plausible_event_name?: string;
};

export function BigCard({
  icon,
  imgSrc,
  title,
  description,
  arrow,
  data_plausible_event_name,
  ...props
}: BigCardProps) {
  const E = props.href ? Link : 'div';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (
      data_plausible_event_name &&
      typeof window !== 'undefined' &&
      typeof window.plausible === 'function'
    ) {
      window.plausible(data_plausible_event_name);
    }
  };

  const media = (
    <div className="w-16 h-16 flex items-center justify-center">
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt="Card image"
          width={64}
          height={64}
          className="object-cover w-16 h-16 rounded-md"
        />
      ) : icon ? (
        <div className="w-full h-full rounded-md border bg-fd-muted text-fd-muted-foreground flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10">
          {icon}
        </div>
      ) : null}
    </div>
  );

  return (
    <E
      {...props}
      onClick={props.href ? handleClick : undefined}
      data-big-card
      className={cn(
        'flex flex-col justify-between aspect-square rounded-lg border bg-fd-card pt-8 pb-6 px-8 text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80',
        'block no-underline text-inherit',
        props.className
      )}
    >
      {media}
      <div className="mt-7">
        <h3 className="not-prose mb-1 text-base font-semibold flex items-center gap-1">
          {title}
          {arrow && <ArrowUpRight className="size-5" />}
        </h3>
        {description && (
          <p className="!my-0 text-sm text-fd-muted-foreground">{description}</p>
        )}
      </div>
      {props.children && (
        <div className="text-sm text-fd-muted-foreground prose-no-margin mt-2">
          {props.children}
        </div>
      )}
    </E>
  );
}

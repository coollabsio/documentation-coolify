'use client';

import { Card } from "fumadocs-ui/components/card";
import Image from "next/image";
import React from "react";

interface ImageCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  plausibleEventName?: string;
}

export function ImageCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt = title,
  plausibleEventName,
}: ImageCardProps) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (plausibleEventName && typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible(plausibleEventName); // Trigger the Plausible event
      console.log(`[Plausible] Tracked event: ${plausibleEventName}`);
    }
  };

  return (
    <Card
      title={
        <a
          href={href}
          onClick={handleClick}
          className="block"
        >
          <div className="flex flex-col">
            <div className="-mx-4 -mt-4 mb-4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-t-xl"
              />
            </div>
            <div>{title}</div>
          </div>
        </a>
      }
      description={description}
    />
  );
}
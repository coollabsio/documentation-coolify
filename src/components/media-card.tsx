'use client';

import { Card } from "fumadocs-ui/components/card";
import { ImageZoom } from "fumadocs-ui/components/image-zoom"; 
import { trackEvent } from "@/lib/plausible"; 

interface MediaCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  plausibleEventName?: string;
}

export function MediaCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt = title,
  plausibleEventName,
}: MediaCardProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    if (plausibleEventName) {
      trackEvent(plausibleEventName); // Track event when clicked
    }
  };

  return (
    <Card
      href={href}
      onClick={handleClick} // Attach the handleClick to the onClick event
      title={
        <div className="flex flex-col">
          <div className="-mx-4 -mt-4 mb-4">
            <ImageZoom src={imageSrc} alt={imageAlt}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover rounded-t-xl cursor-zoom-in"
              />
            </ImageZoom>
          </div>
          <div>{title}</div>
        </div>
      }
      description={description}
    />
  );
} 

import { Card } from "fumadocs-ui/components/card"; // Adjust import if needed
import Image from "next/image";


interface CardImageProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
}

export function CardImage({
  title,
  description,
  href,
  imageSrc,
  imageAlt = title,
}: CardImageProps) {
  return (
    <Card
      href={href}
      // Override the title section to include the image on top
      title={
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
      }
      description={description}
    />
  );
}
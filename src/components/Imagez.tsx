'use client'; // Add this directive to enable client-side rendering

import { useState } from "react";
import { Card } from "fumadocs-ui/components/card"; // Adjust import if needed
import Image from "next/image";

// Modal component to show the full-size image
function Modal({ imageSrc, imageAlt, onClose }: { imageSrc: string; imageAlt: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative p-4 rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white rounded-full p-2 cursor-pointer" // Added cursor-pointer here
        >
          x
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1080}
          height={800}
          className="max-w-full max-h-screen object-contain" // Ensuring no border, and image is contained
        />
      </div>
    </div>
  );
}

interface ImagezProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
}

export function Imagez({
  title,
  description,
  href,
  imageSrc,
  imageAlt = title,
}: ImagezProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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
                className="w-full h-auto object-cover rounded-t-xl cursor-pointer"
                onClick={openModal} // Open modal when image is clicked
              />
            </div>
            <div>{title}</div>
          </div>
        }
        description={description}
      />

      {/* Modal for displaying full-size image */}
      {isModalOpen && <Modal imageSrc={imageSrc} imageAlt={imageAlt} onClose={closeModal} />}
    </>
  );
}

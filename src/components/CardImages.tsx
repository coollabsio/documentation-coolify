import { ReactNode } from "react";

interface CardImagesProps {
  children: ReactNode;
}

export function CardImages({ children }: CardImagesProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-5">
      {children}
    </div>
  );
}

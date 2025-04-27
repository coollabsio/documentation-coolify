import { ReactNode } from "react";

interface ImageCardsProps {
  children: ReactNode;
}

export function ImageCards({ children }: ImageCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-5">
      {children}
    </div>
  );
}

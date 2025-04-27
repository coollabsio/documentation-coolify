import { ReactNode } from "react";

interface ImageCardGroupProps {
  children: ReactNode;
}

export function ImageCardGroup({ children }: ImageCardGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-5">
      {children}
    </div>
  );
}

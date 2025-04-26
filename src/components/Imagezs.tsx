import { ReactNode } from "react";

interface ImagezsProps {
  children: ReactNode;
}

export function Imagezs({ children }: ImagezsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-5">
      {children}
    </div>
  );
}

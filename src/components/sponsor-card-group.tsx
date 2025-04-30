import { ReactNode } from "react";

interface SponsorCardGroupProps {
  children: ReactNode;
}

export function SponsorCardGroup({ children }: SponsorCardGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mt-5">
      {children}
    </div>
  );
}

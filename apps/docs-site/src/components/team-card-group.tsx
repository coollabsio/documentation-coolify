import { ReactNode } from "react";

interface TeamCardGroupProps {
  children: ReactNode;
}

export function TeamCardGroup({ children }: TeamCardGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mt-5">
      {children}
    </div>
  );
}

import { ReactNode } from "react";

interface BigCardGroupProps {
  children: ReactNode;
}

export function BigCardGroup({ children }: BigCardGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-5">
      {children}
    </div>
  );
}

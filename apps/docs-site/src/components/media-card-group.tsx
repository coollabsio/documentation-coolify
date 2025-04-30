import { ReactNode } from "react";

interface MediaCardGroupProps {
  children: ReactNode;
}

export function MediaCardGroup({ children }: MediaCardGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-5">
      {children}
    </div>
  );
}

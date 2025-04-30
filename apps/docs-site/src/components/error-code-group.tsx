import { ReactNode } from "react";

interface ErrorCodeGroupProps {
  children: ReactNode;
}

export function ErrorCodeGroup({ children }: ErrorCodeGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
      {children}
    </div>
  );
}

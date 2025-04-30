import { ReactNode } from "react";

export interface DetailProps {
  label: string;
  value: string;
  icon?: ReactNode;
}

export function Detail({ label, value, icon }: DetailProps) {
  return (
    <li className="flex items-center gap-2">
      {icon && <span className="text-foreground dark:text-white">{icon}</span>}
      <span className="font-medium text-foreground dark:text-white">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </li>
  );
}

export interface DetailsProps {
  className?: string;
  children: ReactNode;
}

/**
 * A card-like container for a list of details, matching the Card styling.
 */
function Details({ className = "", children }: DetailsProps) {
  return (
    <div className={`rounded-2xl border border-border bg-background py-0 px-2 ${className}`}>
  <ul className="flex flex-col gap-0">
    {children}
  </ul>
</div>

  );
}

// Attach Detail as a static member so you can use Details.Detail
Details.Detail = Detail;

export default Details;

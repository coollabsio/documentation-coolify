import React, { ReactNode } from "react";

interface ChangelogSection {
  title: string;
  items: ReactNode[];
}

interface ChangelogEntryProps {
  date: string;
  description?: ReactNode;
  sections: ChangelogSection[];
}

export const ChangelogEntry: React.FC<ChangelogEntryProps> = ({
  date,
  description,
  sections,
}) => {
  return (
    <div className="relative pl-10 ml-4 border-l-2 border-gray-600 space-y-2">
      {/* Dot Indicator */}
      <div className="absolute top-1 left-[-7px] w-3 h-3 rounded-full bg-purple-300 dark:bg-purple-600 border-2 border-white dark:border-gray-900" />

      {/* Date chip */}
      <div className="flex items-center">
        <span className="inline-flex items-center justify-center bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-lg text-sm font-medium h-6 px-3">
          {date}
        </span>
      </div>


      {/* Optional description */}
      {description && <p className="text-fd-foreground">{description}</p>}

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((sec, index) => (
          <div key={index}>
            <div className="text-lg font-semibold text-fd-card-foreground-muted">
              {sec.title}
            </div>
            <ul className="list-disc list-inside space-y-1 mt-1">
              {sec.items.map((itm, i) => (
                <li key={i} className="text-fd-muted-foreground">
                  {itm}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

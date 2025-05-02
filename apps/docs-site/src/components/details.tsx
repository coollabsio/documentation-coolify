import React, { ReactNode, ReactElement, isValidElement, cloneElement } from "react";

export interface DetailProps {
  /**
   * The label remains a simple string.
   */
  label: string;
  /**
   * The value can be any ReactNode (e.g. backticks, JSX).
   */
  value: ReactNode;
  /**
   * Optional icon element. If provided, will be cloned to apply sizing classes.
   */
  icon?: ReactElement<{ className?: string }>; 
  /**
   * Optional size string for the icon (e.g. "h-5 w-5").
   * Defaults to "h-5 w-5" if not provided.
   */
  iconSize?: string;
}

export function Detail({ label, value, icon, iconSize = "h-5 w-5" }: DetailProps) {
  let renderedIcon: ReactNode = null;

  if (icon && isValidElement(icon)) {
    renderedIcon = cloneElement(icon, {
      className: `${iconSize} ${(icon.props as any).className || ""}`,
    });
  }

  return (
    <li className="flex items-center gap-2 whitespace-nowrap pr-4">
      {renderedIcon && (
        <span className="text-sm shrink-0 text-foreground dark:text-white flex items-center">
          {renderedIcon}
        </span>
      )}
      <div className="min-w-0 flex items-center">
        <span className="font-semibold text-foreground dark:text-white mr-2">
          {label}:
        </span>
        <span className="text-muted-foreground whitespace-nowrap flex-shrink-0 pr-8">
          {value}
        </span>
      </div>
    </li>
  );
}

export interface DetailsProps {
  className?: string;
  children: ReactNode;
}

/**
 * Container for a list of details with an always-visible, faint scrollbar when overflowing.
 * Ensures items won’t wrap by using non-shrinking value spans.
 */
function Details({ className = "", children }: DetailsProps) {
  return (
    <div
      className={
        `rounded-xl border border-border bg-background pl-2 pr-4 py-2 overflow-x-auto ` +
        `scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-600 ` +
        `${className}`
      }
      style={{
        // Firefox: thin track + thumb coloring
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(156, 163, 175, 0.5) rgba(229, 231, 235, 0.3)',
      }}
    >
      <ul className="flex flex-col gap-2 min-w-full pr-4">{children}</ul>
    </div>
  );
}

// Attach subcomponent for convenient namespacing
Details.Detail = Detail;

export default Details;

"use client";

import { ReactNode } from "react";
import React from 'react';

import { cn } from "fumadocs-ui/utils/cn";

export interface UpdatesProps {
  children: ReactNode;
  className?: string;
}

export interface UpdateProps {
  children: ReactNode;
  label: string;
  id?: string;
  className?: string;
}

export function Updates({ children, className }: UpdatesProps) {
  return (
    <div className={cn("flex flex-col space-y-4 fd-updates", className)}>{children}</div> 
  );
}

export function Update({ children, label, id, className }: UpdateProps) {
  const updateId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      id={updateId}
      className={cn(
        "flex flex-col relative items-start w-full lg:flex-row gap-4 lg:gap-6 py-6 fd-update",
        className
      )}
    >
      <div className="lg:sticky top-[112px] group flex flex-col w-full lg:w-[160px] items-start flex-shrink-0 justify-start">
        {/* Background color for light and dark mode */}
        <div className="cursor-pointer px-4 py-2 rounded-lg text-sm flex items-center flex-grow-0 justify-center font-medium bg-[#8f57ff] dark:bg-[#a982f8] text-white dark:text-primary-light">
          {label}
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-0.5 max-w-full prose prose-gray dark:prose-invert space-y-1">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === "h2") {
              // Adjust margin-bottom of h2 (reduce gap between h2 and paragraph)
              return React.cloneElement(child, {
                className: cn(child.props.className, "mb-2"),
              });
            }
            if (child.type === "p") {
              // Adjust margin-top of paragraphs (reduce gap above the paragraph)
              return React.cloneElement(child, {
                className: cn(child.props.className, "mt-1"), 
              });
            }
          }
          return child;
        })}
      </div>
    </div>
  );
}

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from 'fumadocs-ui/utils/cn';

type ErrorCodeProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  title?: ReactNode;
  code?: string | number;
  children?: ReactNode;
  href?: string; // NEW
};

export const ErrorCode = forwardRef<HTMLDivElement, ErrorCodeProps>(
  ({ className, children, title, code, href, ...props }, ref) => {
    const statusCode = code ? (
      <span className="ml-5 inline-flex items-center justify-center bg-[#ffe4e4] dark:bg-[#3c2525] text-[#ff6166] dark:text-[#ff6166] rounded-lg text-sm font-medium mr-3 h-8 w-12">
        {code}
      </span>
    ) : null;    

    const customTitle = title ? (
      <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded font-medium text-fd-card-foreground break-words">
        {title}
      </code>
    ) : null;

    const cardContent = (
      <div
        className={cn(
          'flex flex-row items-center gap-1 rounded-lg bg-fd-card p-1 text-sm text-fd-card-foreground shadow-md transition hover:shadow-lg hover:bg-fd-muted cursor-pointer overflow-hidden',
          className,
        )}
        {...props}
      >
        {statusCode}
        <div className="min-w-0 flex flex-col flex-1 gap-2 py-4">
          {customTitle ? <p className="font-medium !my-0 break-words">{customTitle}</p> : null}
          <div className="text-fd-muted-foreground prose-no-margin empty:hidden pl-1">
            {children}
          </div>
        </div>
      </div>
    );

    if (href) {
      return (
        <a ref={ref as any} href={href} className="block no-underline text-inherit">
          {cardContent}
        </a>
      );
    }
    

    return (
      <div ref={ref} className="block">
        {cardContent}
      </div>
    );
  },
);

ErrorCode.displayName = 'ErrorCode';

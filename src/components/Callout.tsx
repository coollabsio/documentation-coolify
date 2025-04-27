import { CircleOff, Info, TriangleAlert, AlertTriangle, Star, BadgeCheck } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from 'fumadocs-ui/utils/cn';
import { cva } from 'class-variance-authority';

type CalloutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'type' | 'icon'
> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: 'info' | 'warn' | 'danger' | 'caution' | 'tip' | 'success';

  /**
   * Force an icon
   */
  icon?: ReactNode;
};

const calloutVariants = cva(
  'my-4 flex flex-row gap-2 rounded-lg border border-s-2 bg-fd-card p-3 text-sm text-fd-card-foreground shadow-md',
  {
    variants: {
      type: {
        info: 'border-s-blue-500/50',
        warn: 'border-s-orange-500/50',
        danger: 'border-s-red-500/50',
        caution: 'border-s-yellow-500/50',
        tip: 'border-s-teal-500/50',
        success: 'border-s-green-500/50',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, title, type = 'info', icon, ...props }, ref) => {
    const icons: Record<string, ReactNode> = {
      info: <Info className="size-5 fill-blue-500 text-fd-card" />,       
      warn: <TriangleAlert className="size-5 fill-orange-500 text-fd-card" />,
      danger: <CircleOff className="size-5 fill-red-500 text-fd-card" />,
      caution: <AlertTriangle className="size-5 fill-yellow-500 text-fd-card" />,
      tip: <Star className="size-5 fill-teal-500 text-fd-card" />,
      success: <BadgeCheck className="size-5 fill-green-500 text-fd-card" />,
    };

    return (
      <div
        ref={ref}
        className={cn(
          calloutVariants({ type }),
          className,
        )}
        {...props}
      >
        {icon ?? icons[type]}
        <div className="min-w-0 flex flex-col gap-2 flex-1">
          {title ? <p className="font-medium !my-0">{title}</p> : null}
          <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Callout.displayName = 'Callout';

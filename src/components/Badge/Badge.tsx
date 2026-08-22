import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const badgeVariants = cva("fathom-badge", {
  variants: {
    variant: {
      neutral: "fathom-badge--neutral",
      success: "fathom-badge--success",
      warning: "fathom-badge--warning",
      danger: "fathom-badge--danger",
      info: "fathom-badge--info",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

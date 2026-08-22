import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const buttonVariants = cva("fathom-btn", {
  variants: {
    variant: {
      primary: "fathom-btn--primary",
      secondary: "fathom-btn--secondary",
      ghost: "fathom-btn--ghost",
      danger: "fathom-btn--danger",
    },
    size: {
      sm: "fathom-btn--sm",
      md: "fathom-btn--md",
      lg: "fathom-btn--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. an anchor) instead of a <button>. */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        // Only a real <button> gets a default type; Slot forwards to its child.
        type={asChild ? undefined : type ?? "button"}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

import * as React from "react";
import { cn } from "../../lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Marks the field invalid and sets aria-invalid for assistive tech. */
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, "aria-invalid": ariaInvalid, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("fathom-input", invalid && "fathom-input--invalid", className)}
      aria-invalid={ariaInvalid ?? (invalid ? true : undefined)}
      {...props}
    />
  )
);

Input.displayName = "Input";

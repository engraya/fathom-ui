import * as React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "../../lib/cn";

/**
 * A toggle switch backed by Radix — renders with role="switch", reflects
 * aria-checked, and is fully keyboard-operable. Works controlled (`checked` +
 * `onCheckedChange`) or uncontrolled (`defaultChecked`). Pass an `aria-label`
 * or associate a `<label>` via `id` for an accessible name.
 */
export type SwitchProps = React.ComponentPropsWithoutRef<typeof RadixSwitch.Root>;

export const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <RadixSwitch.Root ref={ref} className={cn("fathom-switch", className)} {...props}>
    <RadixSwitch.Thumb className="fathom-switch__thumb" />
  </RadixSwitch.Root>
));

Switch.displayName = "Switch";

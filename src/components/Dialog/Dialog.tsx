import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { cn } from "../../lib/cn";

/**
 * Dialog wraps Radix's accessible dialog primitive — focus trapping, Esc to
 * close, scroll lock, and correct ARIA wiring come for free. A visible title is
 * required (Radix warns without one, and screen readers need it); pass a
 * description when the dialog needs more context.
 */
export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;
export const DialogPortal = RadixDialog.Portal;

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixDialog.Content> {
  title: string;
  description?: string;
}

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogContentProps
>(({ className, children, title, description, ...props }, ref) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="fathom-dialog__overlay" />
    <RadixDialog.Content
      ref={ref}
      className={cn("fathom-dialog__content", className)}
      {...props}
    >
      <RadixDialog.Title className="fathom-dialog__title">{title}</RadixDialog.Title>
      {description ? (
        <RadixDialog.Description className="fathom-dialog__description">
          {description}
        </RadixDialog.Description>
      ) : null}
      {children}
      <RadixDialog.Close className="fathom-dialog__close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </RadixDialog.Close>
    </RadixDialog.Content>
  </RadixDialog.Portal>
));

DialogContent.displayName = "DialogContent";

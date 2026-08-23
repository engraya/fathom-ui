import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../../lib/cn";

/**
 * Provider that controls tooltip timing/behavior across a subtree. Mount once
 * near the app root, or rely on the one `Tooltip` sets up for standalone use.
 */
export const TooltipProvider = RadixTooltip.Provider;

export interface TooltipProps {
  /** The tooltip bubble content. */
  content: React.ReactNode;
  /** The trigger element (must accept a ref / forward props). */
  children: React.ReactNode;
  side?: React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>["side"];
  /** Delay before showing, in ms. */
  delayDuration?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 200,
  className,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={6}
            className={cn("fathom-tooltip__content", className)}
          >
            {content}
            <RadixTooltip.Arrow className="fathom-tooltip__arrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-sm border border-border-strong bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-ink resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

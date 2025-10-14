import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className, 
  hoverScale = true,
  delay = 0 
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border-4 border-foreground bg-card p-8",
        "shadow-[8px_8px_0px_0px_rgba(1,50,1,1)]",
        "transition-all duration-300",
        hoverScale && "hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(1,50,1,1)]",
        "animate-slide-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

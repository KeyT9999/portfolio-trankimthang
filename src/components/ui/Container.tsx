import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps<T extends ElementType = "div"> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || "div";
  return (
    <Component
      className={cn("mx-auto w-full max-w-[var(--page-max-width)] px-4 md:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

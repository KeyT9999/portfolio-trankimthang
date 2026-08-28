import { cn } from "@/lib/cn";

export interface EditorialRuleProps {
  variant?: "single" | "double" | "thick-thin" | "light";
  className?: string;
}

export function EditorialRule({
  variant = "single",
  className,
}: EditorialRuleProps) {
  const variantClass = {
    single: "rule-single",
    double: "rule-double",
    "thick-thin": "rule-thick-thin",
    light: "rule-light",
  }[variant];

  return <hr className={cn(variantClass, className)} />;
}

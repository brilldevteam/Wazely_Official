import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#15131e] text-white hover:bg-[#2c2a36] dark:bg-white dark:text-[#15131e] dark:hover:bg-slate-200",
        secondary:
          "bg-[#f3f3f4] text-[#15131e] hover:bg-[#e7e7ea] dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
        gradient:
          "bg-[#15131e] text-white hover:bg-[#2c2a36] dark:bg-white dark:text-[#15131e] dark:hover:bg-slate-200",
        ghost: "text-navy hover:bg-slate-100",
      },
      size: {
        default: "h-11",
        lg: "h-13 px-6 text-[15px]",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

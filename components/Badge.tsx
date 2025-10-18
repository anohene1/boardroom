import React, { ReactNode } from "react";

export default function Badge({
  label,
  variant = "bordered",
  className,
}: {
  label: string;
  variant?: "bordered" | "filled";
  className?: string;
}) {
  return (
    <span
      className={`text-[8px] py-1 px-2 rounded-full uppercase ${
        variant === "bordered" ? "border" : "bg-neutral-200"
      } ${className}`}
    >
      {label}
    </span>
  );
}

import React from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  titleClassName = "text-brand-purple",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"
      } ${className}`}
    >
      {subtitle && (
        <p className="text-xs md:text-sm font-medium tracking-wide uppercase text-brand-red">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

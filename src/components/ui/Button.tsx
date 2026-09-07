import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "pill" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-5 py-2 text-sm rounded-md gap-2",
    lg: "px-6 py-2.5 text-base rounded-md gap-2.5",
  };

  const variants = {
    primary:
      "bg-brand-purple text-white hover:bg-brand-purple-light focus:ring-brand-purple shadow-xs",
    accent:
      "bg-brand-red text-white hover:bg-red-600 focus:ring-brand-red shadow-xs",
    outline:
      "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    pill:
      "bg-brand-purple text-white rounded-md px-5 py-2 hover:bg-brand-purple-light focus:ring-brand-purple",
    dark:
      "bg-brand-purple-dark text-white hover:bg-brand-purple focus:ring-brand-purple-dark",
  };


  return (
    <button
      className={`${baseStyle} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

import React from "react";
import { Zap } from "lucide-react";

export interface FeatureListItemProps {
  text: string;
  className?: string;
  iconColor?: string;
  highlighted?: boolean;
}

export function FeatureListItem({
  text,
  className = "",
  iconColor = "text-brand-red",
  highlighted = false,
}: FeatureListItemProps) {
  return (
    <li
      className={`flex items-center gap-3 text-slate-800 transition-colors ${
        highlighted ? "border border-brand-purple rounded-md p-1.5 bg-brand-pink-bg/50" : ""
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`flex items-center justify-center shrink-0 ${iconColor}`}
      >
        <Zap className="w-4 h-4 fill-current stroke-none" />
      </span>
      <span className="font-normal text-sm md:text-base leading-relaxed text-slate-700">
        {text}
      </span>
    </li>
  );
}

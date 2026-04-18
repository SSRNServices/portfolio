import React from "react";
import { cn } from "@/lib/utils";

export const Section = ({ 
  children, 
  id, 
  className,
  dark = false 
}: { 
  children: React.ReactNode; 
  id?: string; 
  className?: string;
  dark?: boolean;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-32 overflow-hidden",
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-900",
        className
      )}
    >
      {children}
    </section>
  );
};

export const Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-12", className)}>
      {children}
    </div>
  );
};

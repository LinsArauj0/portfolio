import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: LucideIcon;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  icon: Icon,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100",
    outline:
      "border border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-300 hover:text-emerald-400",
  };

  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http"); // só http/https abre em nova aba
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
};

export const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight mb-2"
    >
      {children}
    </motion.h2>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 48 }}
      viewport={{ once: true }}
      className="h-1 bg-emerald-500 mt-4 rounded-full"
    />
  </div>
);
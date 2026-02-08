import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-md px-4 py-2",
    secondary: "btn", // сюда добавляем твои CSS классы
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400 rounded-md px-4 py-2",
  };

  const buttonClassName = twMerge(clsx(base, variants[variant], className));

  return (
    <button className={buttonClassName} {...props}>
      <span className="txt">{children}</span>
    </button>
  );
}

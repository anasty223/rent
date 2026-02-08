
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1440px] px-[80px] mx-auto bg-[#ffffff] dark:bg-black antialiased min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
}

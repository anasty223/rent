import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-[#111111] text-[16px] font-[600] hover:text-underline transition-colors"
    >
      {children}
    </Link>
  );
}

import NavItem from "./NavItem";

const links = [
  { label: "Главная", href: "/" },
  { label: "Объекты", href: "/#properties" },
  { label: "Контакты", href: "/contact" },
];

export default function Navigation() {
  return (
    <nav className="flex gap-[40px]">
      {links.map((link) => (
        <NavItem key={link.href} href={link.href}>
          {link.label}
        </NavItem>
      ))}
    </nav>
  );
}

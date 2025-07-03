"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Heart,
  Sparkles,
  Bot,
  Calendar,
  BarChart,
} from "lucide-react";

interface NavItemProps {
  name: string;
  href: string;
  iconName: string;
}

const iconMap = {
  Home: Home,
  BookOpen: BookOpen,
  Heart: Heart,
  Sparkles: Sparkles,
  Bot: Bot,
  Calendar: Calendar,
  BarChart: BarChart,
};

export function NavItem({ name, href, iconName }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 px-2 md:px-2.5 py-2 text-xs font-medium whitespace-nowrap
      ${isActive ? "text-[#38b6ff]" : "text-gray-600 hover:text-[#38b6ff]"} 
      transition-all duration-200 group`}
    >
      <Icon
        className={`min-w-5 w-5 h-5 transition-transform duration-300 
        ${isActive ? "text-[#38b6ff]" : ""}`}
      />
      <span className="whitespace-nowrap lg:block md:hidden xl:block">
        {name}
      </span>
    </Link>
  );
}

export function MobileNavItem({ name, href, iconName }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-1 py-2 text-xs font-medium touch-manipulation
      ${isActive ? "text-[#38b6ff]" : "text-gray-600"} 
      active:bg-gray-50 active:scale-95 rounded-lg transition-all w-full`}
    >
      <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-[#38b6ff]" : ""}`} />
      <span className="text-[10px]">{name}</span>
    </Link>
  );
}

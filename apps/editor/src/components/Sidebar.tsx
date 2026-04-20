"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@harness/ui";
import { 
  LayoutDashboard, 
  Settings, 
  Layers, 
  DollarSign, 
  Users, 
  MessageSquare, 
  Navigation,
  FileText,
  HelpCircle
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Site Settings", href: "/settings", icon: Settings },
  { label: "Solutions", href: "/solutions", icon: Layers },
  { label: "Pricing", href: "/pricing", icon: DollarSign },
  { label: "Leads", href: "/leads", icon: Users },
  { label: "AI Settings", href: "/ai-settings", icon: MessageSquare },
  { label: "Navigation", href: "/navigation", icon: Navigation },
  { label: "Pages", href: "/pages", icon: FileText },
  { label: "FAQs", href: "/faqs", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen border-r border-accent/20 flex flex-col p-6 bg-accent/5">
      <div className="text-xl font-bold mb-10 px-4">Editor</div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              pathname === item.href ? "bg-foreground text-background" : "text-foreground/60 hover:bg-accent/10"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-accent/20">
        <div className="px-4 text-xs font-bold uppercase tracking-widest opacity-40 mb-2">User</div>
        <div className="px-4 text-sm font-medium">Admin</div>
      </div>
    </div>
  );
}

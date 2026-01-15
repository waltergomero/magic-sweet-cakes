"use client";

import { LayoutDashboard, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className={`${isExpanded ? 'w-[260px]' : 'w-[80px]'} bg-gray-800 text-white p-6 transition-all duration-300 relative`}>
      <div className="flex items-center justify-between mb-6">
        {isExpanded && <h2 className="text-xl font-bold">Admin Panel</h2>}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded hover:bg-gray-700 ml-auto"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      <nav className="space-y-2">
        <Link href="/admin/dashboard" className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 relative group ${!isExpanded ? 'justify-center px-2' : ''} ${isActive('/admin/dashboard') ? 'bg-gray-700' : ''}`}>
          <LayoutDashboard size={20} className="flex-shrink-0" />
          {isExpanded ? (
            <span>Dashboard</span>
          ) : (
            <span className="absolute left-full ml-2 px-3 py-2 bg-gray-700 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              Dashboard
            </span>
          )}
        </Link>
        <Link href="/admin/users" className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 relative group ${!isExpanded ? 'justify-center px-2' : ''} ${isActive('/admin/users') ? 'bg-gray-700' : ''}`}>
          <Users size={20} className="flex-shrink-0" />
          {isExpanded ? (
            <span>Users</span>
          ) : (
            <span className="absolute left-full ml-2 px-3 py-2 bg-gray-700 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              Users
            </span>
          )}
        </Link>
        <Link href="/admin/settings" className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 relative group ${!isExpanded ? 'justify-center px-2' : ''} ${isActive('/admin/settings') ? 'bg-gray-700' : ''}`}>
          <Settings size={20} className="flex-shrink-0" />
          {isExpanded ? (
            <span>Settings</span>
          ) : (
            <span className="absolute left-full ml-2 px-3 py-2 bg-gray-700 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              Settings
            </span>
          )}
        </Link>
      </nav>
    </aside>
  );
}

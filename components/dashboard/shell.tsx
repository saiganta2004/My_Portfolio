import type React from "react"
import { cn } from "@/lib/utils"
import { DashboardNav } from "./nav"

interface DashboardShellProps {
  children: React.ReactNode
  className?: string
}

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="font-bold">Dashboard</div>
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="/dashboard/settings" className="text-sm font-medium">
                  Settings
                </a>
              </li>
              <li>
                <a href="/api/auth/logout" className="text-sm font-medium">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className={cn("flex w-full flex-col overflow-hidden", className)}>
          <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

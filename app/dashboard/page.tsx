import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { DashboardCards } from "@/components/dashboard/cards"
import { CardSkeleton } from "@/components/dashboard/card-skeleton"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Monitor your key metrics and performance indicators." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <DashboardCards />
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Suspense fallback={<div className="col-span-4 h-[350px] rounded-xl border border-dashed"></div>}>
          <Overview className="col-span-4" />
        </Suspense>
        <Suspense fallback={<div className="col-span-3 h-[350px] rounded-xl border border-dashed"></div>}>
          <RecentActivity className="col-span-3" />
        </Suspense>
      </div>
    </DashboardShell>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RecentActivityProps {
  className?: string
}

export function RecentActivity({ className }: RecentActivityProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions and updates.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className={cn("flex h-8 w-8 items-center justify-center rounded-full", activity.bgColor)}>
                <activity.icon className="h-4 w-4 text-white" />
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

import { User, FileText, AlertCircle, CheckCircle } from "lucide-react"

const activities = [
  {
    icon: User,
    title: "New customer registered",
    description: "John Doe created a new account",
    timestamp: "2 hours ago",
    bgColor: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "New report available",
    description: "Q2 Performance Report is ready to view",
    timestamp: "5 hours ago",
    bgColor: "bg-green-500",
  },
  {
    icon: AlertCircle,
    title: "System alert",
    description: "Server load reached 92%",
    timestamp: "1 day ago",
    bgColor: "bg-red-500",
  },
  {
    icon: CheckCircle,
    title: "Task completed",
    description: "Weekly backup completed successfully",
    timestamp: "2 days ago",
    bgColor: "bg-purple-500",
  },
]

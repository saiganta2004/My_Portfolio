import { NextResponse } from "next/server"

export async function GET() {
  // Simulate fetching data from a database
  await new Promise((resolve) => setTimeout(resolve, 500))

  const stats = {
    totalRevenue: 45231.89,
    newCustomers: 34,
    salesCount: 245,
    activeUsers: 573,
    revenueGrowth: 20.1,
    customerGrowth: 10.5,
    salesGrowth: 12.2,
    userGrowth: 19.4,
  }

  return NextResponse.json(stats)
}

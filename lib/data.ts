// Mock data functions
// In a real app, these would fetch from your API or database

export async function getStats() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 750))

  return {
    totalRevenue: 45231.89,
    newCustomers: 34,
    salesCount: 245,
    activeUsers: 573,
  }
}

export async function getRecentOrders() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      customer: "John Doe",
      status: "completed",
      date: "2023-06-10",
      total: 125.99,
    },
    {
      id: "2",
      customer: "Jane Smith",
      status: "processing",
      date: "2023-06-09",
      total: 89.5,
    },
    {
      id: "3",
      customer: "Robert Johnson",
      status: "completed",
      date: "2023-06-08",
      total: 245.0,
    },
    {
      id: "4",
      customer: "Emily Davis",
      status: "pending",
      date: "2023-06-07",
      total: 154.25,
    },
    {
      id: "5",
      customer: "Michael Wilson",
      status: "completed",
      date: "2023-06-06",
      total: 78.99,
    },
  ]
}

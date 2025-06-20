export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}

export interface Order {
  id: string
  customer: string
  status: "pending" | "processing" | "completed" | "cancelled"
  date: string
  total: number
}

export interface Customer {
  id: string
  name: string
  email: string
  orders: number
  totalSpent: number
  lastOrder: string
}

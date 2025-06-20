import type { User } from "./types"

// Mock authentication functions
// In a real app, these would connect to your auth provider

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<User> {
  // This is a mock implementation
  // In a real app, you would validate credentials against your auth provider

  return new Promise((resolve, reject) => {
    // Simulate network request
    setTimeout(() => {
      // For demo purposes, accept any email/password with basic validation
      if (!email || !password) {
        return reject(new Error("Email and password are required"))
      }

      if (!email.includes("@")) {
        return reject(new Error("Invalid email format"))
      }

      if (password.length < 6) {
        return reject(new Error("Password must be at least 6 characters"))
      }

      // Mock successful login
      const user: User = {
        id: "1",
        name: email.split("@")[0],
        email,
        role: "user",
      }

      // Store in localStorage for demo purposes
      // In a real app, you'd use cookies or tokens
      localStorage.setItem("user", JSON.stringify(user))

      resolve(user)
    }, 1000)
  })
}

export async function logout(): Promise<void> {
  // Clear user from localStorage
  localStorage.removeItem("user")
  return Promise.resolve()
}

export async function getCurrentUser(): Promise<User | null> {
  // In a real app, this would validate the session/token
  // and return the current user

  return new Promise((resolve) => {
    // Simulate network request
    setTimeout(() => {
      const userJson = localStorage.getItem("user")
      if (!userJson) {
        resolve(null)
        return
      }

      try {
        const user = JSON.parse(userJson) as User
        resolve(user)
      } catch (error) {
        resolve(null)
      }
    }, 500)
  })
}

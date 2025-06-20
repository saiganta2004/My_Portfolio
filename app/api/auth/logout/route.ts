import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  // Clear auth cookie
  cookies().delete("auth-token")

  // Redirect to home page
  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_APP_URL))
}

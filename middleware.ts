import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Add the pathname to the request headers
  requestHeaders.set("x-pathname", request.nextUrl.pathname)

  // Return the response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}


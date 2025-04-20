import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value;

  const loggedUserCantAccessPaths = request.nextUrl.pathname == "/admin/login";
  if (loggedUserCantAccessPaths) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/admin/login"],
};

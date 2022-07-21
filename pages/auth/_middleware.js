import { NextResponse } from "next/server";

export default function middleware(req) {
  console.log(req.cookies.token);
  const { pathname, origin } = req.nextUrl
  let token = req.cookies.token;
  if (token) {
    return NextResponse.redirect(`${origin}/`)
  }
 
}

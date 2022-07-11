import { NextResponse } from "next/server";
import React, { useEffect } from "react";

export default function middleware(req) {
  console.log(req.cookies.token);
  const { pathname, origin } = req.nextUrl
  let token = req.cookies.token;
  if (token) {
    return NextResponse.redirect(`${origin}/`)
  }
 
}

import { IParamsWithId } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // TODO: authorization
  // if (request.nextUrl.pathname !== '/login') {
  //     return NextResponse.redirect(new URL('/login', request.url));
  // }
  //
  // return NextResponse.next();
}

export const config = {
  matcher: ['/*'],
};

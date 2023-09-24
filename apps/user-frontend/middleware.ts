import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

    let cookie = request.cookies.get('leetcodeToken');

    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/problemSet/:path*'],
};

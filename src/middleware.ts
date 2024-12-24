import { NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('/login')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/i', url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/login', url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/i/:path*', '/login/:path']
}

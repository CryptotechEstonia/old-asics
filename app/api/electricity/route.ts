import { NextResponse } from "next/server"

export function GET() {
	return NextResponse.json({
		price: 0.125
	})
}
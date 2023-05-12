'use client'

import AsicsLaout from "../components/AsicsLayout"
import AsicsTable from "../components/Table"
import Logo from "../components/Logo"
import ShopLink from "../components/ShopLink"
import useSWR from 'swr'
import { useEffect, useState } from "react"

export interface ASIC {
	id: number
	timestamp: string
	name: string
	model: string
	producer: string
	full: string
	release: string
	hashrate: number
	power: number
	noise: number
	algo: string
	income: number
	profit: number
	price: number
	electricity: number
}

export default function Page() {
	const [data, setData] = useState([])

	useEffect(() => {
		const interval = window.setInterval(() => {
			fetch('/api/asics')
				.then(response => response.json())
				.then(result => setData(result))
		}, 10 * 60 * 1000)

		return () => window.clearInterval(interval)
	}, [])

	return <AsicsLaout>
		<Logo />
		<ShopLink />
		<AsicsTable asics={data} />
	</AsicsLaout>
}
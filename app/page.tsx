'use client'

import AsicsLaout from "../components/AsicsLayout"
import AsicsTable from "../components/Table"
import Logo from "../components/Logo"
import ShopLink from "../components/ShopLink"
import useSWR from 'swr'

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

export default async function Page() {
	const fetcher = (url: string) => fetch(url).then(response => response.json())
	const { data } = useSWR('/api/asics', fetcher)

	return <AsicsLaout>
		<Logo />
		<ShopLink />
		<AsicsTable asics={data} />
	</AsicsLaout>
}
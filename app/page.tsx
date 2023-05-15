'use client'

import AsicsLaout from "../components/AsicsLayout"
import AsicsTable from "../components/Table"
import Logo from "../components/Logo"
import ShopLink from "../components/ShopLink"
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
	const [updated, setUpdated] = useState<Date>()

	useEffect(() => {
		setUpdated(new Date())
	}, [data])

	const update = () => {
		fetch('/api/asics')
			.then(response => response.json())
			.then(result => setData(result))
	}

	useEffect(() => {
		update()
	}, [])

	useEffect(() => {
		const interval = window.setInterval(() => {
			update()
		}, 10 * 60 * 1000)

		return () => window.clearInterval(interval)
	}, [])

	return <AsicsLaout>
		<Logo />
		<ShopLink />
		<AsicsTable asics={data} />
		<div style={{
			color: 'gray',
			textAlign: 'center'
		}}>Last updated: {updated === undefined ? 'updating...' : updated.toISOString().replace('T', ' ').split('.')[0] + ' UTC'}</div>
	</AsicsLaout>
}
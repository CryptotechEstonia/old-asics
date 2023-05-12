import AsicsLaout from "./AsicsLayout"
import AsicsTable from "./Table"

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
	profit: number
	price: number
	electricity: number
}

export default async function Page() {
	const asics: ASIC[] = await fetch(`${process.env.APP_BASE_URL}/api/asics`, { next: { revalidate: 10 } })
		.then(response => response.json())

	return <AsicsLaout>
		<AsicsTable asics={asics} />
	</AsicsLaout>
}
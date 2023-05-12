import AsicsLaout from "../components/AsicsLayout"
import AsicsTable from "../components/Table"
import Logo from "../components/Logo"
import ShopLink from "../components/ShopLink"

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
	const asics: ASIC[] = await fetch(`${process.env.APP_BASE_URL}/api/asics`, { next: { revalidate: 10 } })
		.then(response => response.json())

	return <AsicsLaout>
		<Logo />
		<ShopLink />
		<AsicsTable asics={asics} />
	</AsicsLaout>
}
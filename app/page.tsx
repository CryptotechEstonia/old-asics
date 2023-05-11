'use client'

import AsicsLaout from "./AsicsLayout"
import AsicsTable from "./Table"
import useSWR from 'swr'

export default async function Page() {
	const fetcher = (url: string) => fetch(url).then(response => response.json())
	const { data: electricity, error: electricityError, isLoading: electricityLoading } = useSWR('/api/electricity', fetcher)
	const { data: asics, error: asicsError, isLoading: asicsLoading } = useSWR('/api/asics', fetcher, { refreshInterval: 10 * 60 * 1000 })

	return <div>
		<pre>{electricity}</pre>
		<pre>{asics}</pre>
	</div>

	// return <AsicsLaout>
	// 	<AsicsTable electricity={electricity} meta={asics} models={models} />
	// </AsicsLaout>
}
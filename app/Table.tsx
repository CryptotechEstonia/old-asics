'use client'

import type { asicminervalue } from "@prisma/client"

import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import AsicsRow from "./AsicsRow"

export interface Props {
	electricity: number
	meta: { model: string, price: number }[]
	models: asicminervalue[]
}

export function AsicsTableHeader() {
	return <Tr>
		<Th>Producer</Th>
		<Th>Model</Th>
		<Th>Profit</Th>
		<Th textAlign={'center'}>Price</Th>
		<Th textAlign={'center'}>ROI</Th>
	</Tr>
}

export default function AsicsTable({ electricity, meta, models }: Props) {
	return <TableContainer>
		<Table variant='simple'>
			<Thead>
				<AsicsTableHeader />
			</Thead>
			<Tbody>
				{models.map((model) => {
					const search = meta.find(({ model: search }) => model.model === search)

					const price = search?.price || 0

					return <AsicsRow
						key={model.id}
						electricity={electricity}
						model={model}
						price={price} />
				})}
			</Tbody>
			<Tfoot>
				<AsicsTableHeader />
			</Tfoot>
		</Table>
	</TableContainer>
}
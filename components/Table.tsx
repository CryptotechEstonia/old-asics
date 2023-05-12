'use client'

import type { ASIC } from "../app/page"

import { Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import AsicsRow from "./AsicsRow"

export interface Props {
	asics: ASIC[]
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

const byPrice = (a: ASIC, b: ASIC) => b.profit - a.profit

export default function AsicsTable({ asics }: Props) {
	return <TableContainer>
		<Table variant='simple'>
			<Thead>
				<AsicsTableHeader />
			</Thead>
			<Tbody>
				{asics.sort(byPrice).map((asic) =>
					<AsicsRow
					key={asic.id}
					data={asic} />
				)}
			</Tbody>
			<Tfoot>
				<AsicsTableHeader />
			</Tfoot>
		</Table>
	</TableContainer>
}
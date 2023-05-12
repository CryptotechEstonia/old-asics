'use client'

import type { ASIC } from "./page"

import { Tr, Td } from "@chakra-ui/react"
import { getColor } from "./colors"

export interface Props {
	data: ASIC
}

export default function AsicsRow({ data: { profit: income, producer, model, price, power, electricity } }: Props) {
	const consumption = power / 1000 * 24 * electricity
	const profit = income / 100 - consumption
	const roi = profit > 0 ? Math.floor(price / profit) + ' days' : 'never'

	console.log({power, electricity})

	return <Tr>
		<Td>{producer}</Td>
		<Td>{model}</Td>
		<Td isNumeric color={getColor(profit)}>{profit.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{price.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{roi}</Td>
	</Tr>
}
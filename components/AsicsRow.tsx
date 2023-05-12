'use client'

import type { ASIC } from "../app/page"

import { Tr, Td } from "@chakra-ui/react"
import { getColor } from "./colors"

export interface Props {
	data: ASIC
}

export default function AsicsRow({ data: { profit, producer, model, price, power, electricity } }: Props) {
	const roi = profit > 0 ? Math.floor(price / profit) : 'n/a'

	return <Tr>
		<Td>{producer}</Td>
		<Td>{model}</Td>
		<Td isNumeric color={getColor(profit)}>{profit.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{price.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{roi} days</Td>
	</Tr>
}
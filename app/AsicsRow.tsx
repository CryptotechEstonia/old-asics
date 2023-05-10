'use client'

import type { asicminervalue } from "@prisma/client"

import { Tr, Td } from "@chakra-ui/react"

export interface Props {
	price: number
	model: asicminervalue
}

export default function AsicsRow({ price, model: { producer, model, profit } }: Props) {
	const eur_to_usd = 1.09
	const roi = price / (profit / eur_to_usd / 100)
	return <Tr>
		<Td>{producer}</Td>
		<Td>{model}</Td>
		<Td isNumeric>{(profit / eur_to_usd / 100).toFixed(2)} €</Td>
		<Td textAlign={'right'}>{price.toFixed(2)} €</Td>
		<Td textAlign={'right'}>{roi.toFixed(0)} days</Td>
	</Tr>
}
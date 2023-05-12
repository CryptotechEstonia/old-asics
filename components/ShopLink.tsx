'use client'

import { Link } from "@chakra-ui/next-js"
import { Center, Text } from "@chakra-ui/react"

export default function ShopLink() {
	return <Center mb={4}>
		<Link href={'https://shop.cryptotech.ee/'} target="_blank">
			<Text>Click here to browse our Shop!</Text>
		</Link>
	</Center>
}
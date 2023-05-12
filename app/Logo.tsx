'use client'

import { Link } from "@chakra-ui/next-js"
import { Center, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

export default function Logo() {
	return <Center mb={4}>
		<Link href={'https://cryptotech.ee/'} target="_blank">
			<Image alt="Cryptotech Logo" src="/logo-1.png" height={66} width={273} style={{ filter: useColorModeValue('', 'invert(100%)') }} />
		</Link>
	</Center>
}
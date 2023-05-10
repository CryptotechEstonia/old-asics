'use client'

import { Center, Container, Box } from "@chakra-ui/react"

export interface Props {
	children: React.ReactNode
}

export default function AsicsLaout({ children }: Props) {
	return <Container>
		<Center height={'100vh'}>
			<Box>
				{children}
			</Box>
		</Center>
	</Container>
}
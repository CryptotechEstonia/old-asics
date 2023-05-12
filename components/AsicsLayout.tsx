'use client'

import { Center, Container, Box } from "@chakra-ui/react"

export interface Props {
	children: React.ReactNode
}

export default function AsicsLaout({ children }: Props) {
	return <Container maxW='container.lg'>
		<Center height={'100vh'}>
			<Box width={'100%'}>
				{children}
			</Box>
		</Center>
	</Container>
}
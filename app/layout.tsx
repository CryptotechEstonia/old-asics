import { Inter } from 'next/font/google'
import { Providers } from '../components/providers'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Profitability | Cryptotech',
	description: 'Live ASIC profitability stats and prices',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={inter.className}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}

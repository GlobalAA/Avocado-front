import MainLayout from '@components/layout/MainLayout'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '400', '700', '600'],
})

export const metadata: Metadata = {
	title: 'Avocado Clicker',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}

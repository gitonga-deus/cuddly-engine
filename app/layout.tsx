import './globals.css'

import clsx from 'clsx'

import CustomToaster from './toaster'
import localFont from 'next/font/local'

const operatorMono = localFont({
	src: '../public/fonts/OperatorMono-Book.woff2',
	weight: '400',
	variable: '--font-operator',
});

export const metadata = {
	title: 'Cuddly Engine',
	description: 'MDX Blog with Contentlayer and Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={clsx(operatorMono.variable, 'scroll-smooth')}
		>
			<body className='overflow-x-hidden bg-gitonga-bg font-default antialiased select-text selection:bg-gray-300'>

				<main className='relative mx-auto mb-4 max-w-3xl px-8 py-24'>
					{children}
				</main>
				<CustomToaster />

			</body>
		</html>
	)
}

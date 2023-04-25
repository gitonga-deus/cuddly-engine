import './globals.css'

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
		<html lang="en">
			<body className=''>{children}</body>
		</html>
	)
}

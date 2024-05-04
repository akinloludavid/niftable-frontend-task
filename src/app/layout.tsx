import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Creon',
    description: 'Niftable Frontend test by Akinlolu',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.svg' sizes='any' />
            </head>
            <body>{children}</body>
        </html>
    )
}

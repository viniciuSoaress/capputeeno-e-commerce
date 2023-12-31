import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Provider } from './components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'e-commerce de camisetas e canecas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

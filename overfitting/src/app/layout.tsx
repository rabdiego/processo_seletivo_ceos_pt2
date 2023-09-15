import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'OverFitting',
  description: 'Truly Smart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes='any'/>
      </head>
      <body className='body'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

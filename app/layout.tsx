import { Urbanist } from 'next/font/google'

import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'ZHORUS',
  description: 'ZHORUS es tu tienda online de confianza para comprar proteínas y suplementos en España. Ofrecemos una amplia gama de productos de alta calidad diseñados para ayudarte a alcanzar tus objetivos de salud y fitness. Nuestro equipo de expertos en nutrición te brinda asesoramiento personalizado y recomendaciones basadas en tus necesidades individuales. ¡Descubre ZHORUS y potencia tus resultados hoy mismo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

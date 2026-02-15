import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const metadata = {
  description: '',
  title: 'BrightFuture Energy',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config: configPromise })
  const footerData = await payload.findGlobal({ slug: 'footer' })

  return (
    <html lang="en">
      <head>
        {/* <!-- Google Fonts css--> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Rubik:wght@400;500&display=swap"
        />
        {/* <!-- Bootstrap css --> */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" media="screen" />
        {/* <!-- SlickNav css --> */}
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        {/* <!-- Swiper css --> */}
        <link rel="stylesheet" href="css/swiper-bundle.min.css" />
        {/* <!-- Font Awesome icon css--> */}
        <link rel="stylesheet" href="/css/all.min.css" media="screen" />
        {/* <!-- Animated css --> */}
        <link rel="stylesheet" href="/css/animate.css" />
        {/* <!-- Magnific css --> */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* <!-- CDN Toastr css --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
        />
        {/* <!-- Main custom css --> */}
        <link rel="stylesheet" href="/css/custom.css" media="screen" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  )
}

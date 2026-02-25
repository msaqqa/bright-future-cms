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
  const headerData = await payload.findGlobal({ slug: 'header' })
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
        {/* <!-- Font Awesome icon css--> */}
        <link rel="stylesheet" href="/css/all.min.css" media="screen" />
        {/* <!-- Main custom css --> */}
        <link rel="stylesheet" href="/css/custom.css" media="screen" />
      </head>
      <body>
        <Header data={headerData as any} />
        <main>{children}</main>
        <Footer data={footerData as any} />
      </body>
    </html>
  )
}

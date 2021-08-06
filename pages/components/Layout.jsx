import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'

export const siteName = 'PrudentWords'

function Layout({children}) {
    return (
        <div>
             <Head>
                 <title>{siteName}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteName
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar/>
      <div>{children}</div>
        </div>
    )
}

export default Layout

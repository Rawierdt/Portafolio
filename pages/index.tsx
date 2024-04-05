import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { About } from '../components'
import { config } from "../config/index"


const Home: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Rawier</title>
        <link rel="shortcut icon" type="image/png" href="./Rawier-icon.png" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://vercel.com https://vitals.vercel-insights.com https://i.ibb.co https://raw.githubusercontent.com; font-src 'self';"
        />
        <meta name="theme-color:" content="#8e52f5"></meta>
        <meta property="og:image"
          content={config.github.url} />
        <meta name="description"
          content="I am passionate about cybersecurity. I am also a person who is eager to progress, learn and develop the skills that today's world needs."></meta>
        <meta property="og:description"
          content="I am passionate about cybersecurity. I am also a person who is eager to progress, learn and develop the skills that today's world needs." />
        <meta property="og:title" content="Rawier - Cybersecurity" />
        <meta property="og:url" content="https://Rawier.vercel.app" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  )
}

export default Home

/**
 * React
 */
import React from 'react'

/**
 * Next
 */
import Head from 'next/head'

/**
 * UI Components
 */
import Layout from '../components/Layout'

export default function Home () {
  return (
    <div className={'websiteContainer'}>
      <Head>
        {/* Website meta data */}
        {/* TODO: Add OG and schema markup */}
        <title>Hoekstra & Veldhuis - Samen vertellen we uw verhaal</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta name="description"
              content="Bij Hoekstra & Veldhuis draait alles om tekst. Of het nu gaat om tekstschrijven, vertalen of SEO optimalisatie. U bent bij ons aan het juiste adres."/>

              {/* Custom fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Prata&display=swap" rel="stylesheet" />
      </Head>

      <Layout>
          Test
      </Layout>
    </div>
  )
}

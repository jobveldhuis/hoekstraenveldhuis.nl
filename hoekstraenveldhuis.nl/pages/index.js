import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        {/* Website meta data */}
        {/* TODO: Add OG and schema markup */}
        <meta charset="UTF-8"/>
        <title>Hoekstra & Veldhuis - Samen vertellen we uw verhaal</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta name="description"
              content="Bij Hoekstra & Veldhuis draait alles om tekst. Of het nu gaat om tekstschrijven, vertalen of SEO optimalisatie. U bent bij ons aan het juiste adres."/>
      </Head>

      <Layout>
          Test
      </Layout>
    </div>
  )
}

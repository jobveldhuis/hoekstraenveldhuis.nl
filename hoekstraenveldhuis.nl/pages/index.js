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
import AboutUsComponent from '../components/AboutUsComponent'

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

          <AboutUsComponent
          title={'Wat we doen'}
          services={[
            {
              title: 'Tekstschrijven',
              link: '/onze-diensten/tekstschrijven'
            },
            {
              title: 'Zoekmachineoptimalisatie',
              link: '/onze-diensten/zoekmachineoptimalisatie'
            },
            {
              title: 'Vertalingen',
              link: '/onze-diensten/vertalingen'
            },
            {
              title: 'Communicatieadvies',
              link: '/onze-diensten/communicatieadvies'
            },
            {
              title: 'Tekstcontrole',
              link: '/onze-diensten/tekstcontrole'
            }
          ]}
          description={[
            'We helpen met het vinden van de juiste woorden voor uw verhaal. Of het gaat om een vacaturetekst of een vertaling van een boek: bij Hoekstra & Veldhuis bent u aan het juiste adres.',
            'We geloven in persoonlijke aandacht. Wanneer u daar prijs op stelt, denken we graag met u mee. Neem vandaag nog contact op voor een vrijblijvend adviesgesprek.'
          ]}
          />
      </Layout>
    </div>
  )
}

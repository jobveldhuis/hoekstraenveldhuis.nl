/**
 * React
 */
import React from 'react'

/**
 * Next
 */
import Head from 'next/head'

/**
 * Styles
 */
import styles from '../styles/Home.module.css'

/**
 * UI Components
 */
import Layout from '../components/Layout'
import AboutUsComponent from '../components/AboutUsComponent'
import ProjectOverviewComponent from '../components/ProjectOverviewComponent'
import ScrollDownComponent from '../components/ScrollDownComponent'

export default function Home () {
  return (
    <div className={'websiteContainer'}>
      <Head>
        {/* Website meta data */}
        {/* TODO: Add OG and schema markup */}
        <title>Hoekstra & Veldhuis - Samen vertellen we uw verhaal</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta
            name="description"
            content="Bij Hoekstra & Veldhuis draait alles om tekst. Of het nu gaat om tekstschrijven, vertalen of SEO optimalisatie. U bent bij ons aan het juiste adres."
        />

        {/* Custom fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Prata&display=swap" rel="stylesheet" />
      </Head>

      <Layout fullWidth={true}>
          <div className={styles.scrollDownContainer}>
              <ScrollDownComponent
                  title='Wij zijn Hoekstra & Veldhuis'
                  description='Een tekstbureau waar het nog écht draait om tekst. Waar de woorden centraal staan en waar we iedere dag samenwerken aan het schrijven van teksten die inspireren, imponeren en motiveren. Samen vertellen we uw verhaal.'
              anchor='scrollDownAnchor'
              />
          </div>
          <div className={styles.projectOverviewBackground} id='scrollDownAnchor'>
              <div className={styles.elementContainer}>
                  <ProjectOverviewComponent
                  title={'Onze werkzaamheden'}
                  projects={[
                    {
                      title: 'Logopediepraktijk Urk',
                      description: 'Van wollige taal en jargon, naar leesbare taal voor kinderen en volwassenen.',
                      image: 'images/henv-client-highlight-1.svg'
                    },
                    {
                      title: 'Esthegi',
                      description: 'Wervende teksten over gevoelige onderwerpen, geoptimaliseerd voor zoekmachines.',
                      image: 'images/henv-client-highlight-2.svg'
                    },
                    {
                      title: 'TomTom Interim Management',
                      description: 'Adviezen en bijstand op het gebied van visuele communicatie van kernwaarden.',
                      image: 'images/henv-client-highlight-3.svg'
                    },
                    {
                      title: 'ISG Arcus',
                      description: 'Toneelstukken, scripts en auditiemateriaal voor verschillende uitvoeringen.',
                      image: 'images/henv-client-highlight-4.svg'
                    }
                  ]}
                  />
              </div>
          </div>
          <div className={styles.elementContainer}>
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
          </div>
      </Layout>
    </div>
  )
}

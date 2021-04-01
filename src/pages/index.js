/**
 * React
 */
import React from 'react'

/**
 * Styles
 */
import styles from '../styles/pages/Home.module.css'

/**
 * UI Components
 */
import Layout from '../components/Layout'
import Meta from '../components/MetaHeadComponent'
import AboutUsComponent from '../components/AboutUsComponent'
import ProjectOverviewComponent from '../components/ProjectOverviewComponent'
import ScrollDownComponent from '../components/ScrollDownComponent'

export default function Home () {
  const services = [
    {
      title: 'Tekstschrijven',
      link: '/onze-diensten/tekstschrijven'
    },
    {
      title: 'Zoekmachineoptimalisatie',
      link: '/onze-diensten/seo-optimalisatie'
    },
    {
      title: 'Vertalingen',
      link: '/onze-diensten/vertalen'
    },
    {
      title: 'Communicatieadvies',
      link: '/onze-diensten/communicatieadvies'
    },
    {
      title: 'Tekstcontrole',
      link: '/onze-diensten/tekstcontrole'
    }
  ]

  return (
      <Meta
        pageTitle='Hoekstra & Veldhuis - Samen vertellen we uw verhaal'
      >
          <div className={'websiteContainer'}>
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
                          services={services}
                          description={[
                            'We helpen met het vinden van de juiste woorden voor uw verhaal. Of het gaat om een vacaturetekst of een vertaling van een boek: bij Hoekstra & Veldhuis bent u aan het juiste adres.',
                            'We geloven in persoonlijke aandacht. Wanneer u daar prijs op stelt, denken we graag met u mee. Neem vandaag nog contact op voor een vrijblijvend adviesgesprek.'
                          ]}
                      />
                  </div>
              </Layout>
          </div>
      </Meta>
  )
}

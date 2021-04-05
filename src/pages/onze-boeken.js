/**
 * React
 */
import React from 'react'

/**
 * UI Components
 */
import Layout from '../components/layouts/Layout'
import Meta from '../components/layouts/MetaHeadComponent'
import BookComponent from '../components/atoms/BookComponent'

export default function OurBooks () {
  return (
      <Meta
      pageName={'Inspecteur Vos - Onze boeken'}
      description={'In de afgelopen jaren schreven we meerdere boeken, o.a. over Inspecteur Vos. Ze zijn te koop in de boekhandel en via bol.com.'}
      >
          <Layout>
              <BookComponent
                  title={'Inspecteur Vos'}
                  description={[
                    'Op een koude winteravond wordt het levenloze lichaam van pater Abraham Doornbosch bij de Dom in Utrecht gevonden. De striemen in zijn nek laten weinig aan de verbeelding over. Moord. Maar met welke reden? Door wie? En waarom juist hij?',
                    "Maak kennis met rechercheur Vos, een eigengereide detective met een voorliefde voor complexe koffie en dito moordzaken. Samen met zijn collega's van de Nationale Recherche lukt het hem keer op keer de moordenaar een stap voor te blijven, maar deze zaak komt dichterbij dan gedacht. Lukt het Vos en de zijnen om het hoofd koel te houden wanneer juist de moordenaar hén een stap voor weet te zijn?"
                  ]}
                  types={{
                    paperback: {
                      link: 'https://www.bol.com/nl/p/inspecteur-vos/9200000120774060/'
                    },
                    ebook: {
                      link: 'https://www.kobo.com/nl/nl/ebook/inspecteur-vos'
                    }
                  }}
                  image={'/images/omslag-inspecteur-vos.png'}
              />
              <BookComponent
                  title={'De Laatste Dag'}
                  description={[
                    'Op een koude winteravond wordt het levenloze lichaam van pater Abraham Doornbosch bij de Dom in Utrecht gevonden. De striemen in zijn nek laten weinig aan de verbeelding over. Moord. Maar met welke reden? Door wie? En waarom juist hij?',
                    "Maak kennis met rechercheur Vos, een eigengereide detective met een voorliefde voor complexe koffie en dito moordzaken. Samen met zijn collega's van de Nationale Recherche lukt het hem keer op keer de moordenaar een stap voor te blijven, maar deze zaak komt dichterbij dan gedacht. Lukt het Vos en de zijnen om het hoofd koel te houden wanneer juist de moordenaar hén een stap voor weet te zijn?"
                  ]}
                  types={{
                    paperback: {
                      link: 'https://www.bol.com/nl/p/de-laatste-dag/9300000007440350/'
                    },
                    ebook: {
                      link: 'https://www.kobo.com/nl/nl/ebook/de-laatste-dag-4'
                    }
                  }}
                  image={'/images/omslag-de-laatste-dag.png'}
              />
          </Layout>
      </Meta>
  )
}

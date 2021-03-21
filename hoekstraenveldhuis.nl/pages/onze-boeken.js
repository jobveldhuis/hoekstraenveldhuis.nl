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
import BookComponent from '../components/BookComponent'

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
                <BookComponent
                    title={'Inspecteur Vos'}
                    description={[
                      'Op een koude winteravond wordt het levenloze lichaam van pater Abraham Doornbosch bij de Dom in Utrecht gevonden. De striemen in zijn nek laten weinig aan de verbeelding over. Moord. Maar met welke reden? Door wie? En waarom juist hij?',
                      "Maak kennis met rechercheur Vos, een eigengereide detective met een voorliefde voor complexe koffie en dito moordzaken. Samen met zijn collega's van de Nationale Recherche lukt het hem keer op keer de moordenaar een stap voor te blijven, maar deze zaak komt dichterbij dan gedacht. Lukt het Vos en de zijnen om het hoofd koel te houden wanneer juist de moordenaar hén een stap voor weet te zijn?"
                    ]}
                    price={{
                      paperback: 15.00,
                      ebook: 4.95
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
                        link: 'https://www.bol.com/nl/p/inspecteur-vos/9200000120774060/'
                      },
                      ebook: {
                        link: 'https://www.kobo.com/nl/nl/ebook/inspecteur-vos'
                      }
                    }}
                    image={'/images/omslag-de-laatste-dag.png'}
                />
            </Layout>
        </div>
  )
}

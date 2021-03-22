import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import PeopleComponent from '../components/PeopleComponent'

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
                <PeopleComponent
                 name={'Paul Hoekstra'}
                 description={'Paul behaalde in 2013 zijn Master of Arts aan de Vrije Universiteit te Amsterdam en wist die daarna aan te vullen met een Master of Education. Inmiddels is hij al meer dan tien jaar werkzaam in het middelbaar onderwijs, waar hij gaandeweg een passie voor schrijven ontwikkelde. Tien jaar lang schreef hij onder meer toneelstukken voor de school. Gedurende een paar jaar was hij daarnaast nauw betrokken bij het onderhouden van de sociale media op zijn school.'}
                 image={'images/paul-hoekstra.jpeg'}
                />
                <PeopleComponent
                    name={'Job Veldhuis'}
                    description={'Job maakte kennis met sociale media als beheerder van een van de grootste Wie is de Mol-fanaccounts van Nederland. Hij (mede-)beheerde na zijn middelbare schooltijd onder andere de Facebook, Instagram en Twitteraccounts van een theater, een bioscoop en van Luchthaven Schiphol. De afgelopen vijf jaar schreef hij samen met Paul verschillende toneelstukken. Inmiddels werkt hij als Marketing & Communicatiemanager voor EetSmakelijk.'}
                    image={'images/job-veldhuis.jpg'}
                />
            </Layout>
        </div>
  )
}

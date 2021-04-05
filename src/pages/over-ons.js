/**
 * React
 */
import React from 'react'

/**
 * UI Components
 */
import Layout from '../components/layouts/Layout'
import Meta from '../components/layouts/MetaHeadComponent'
import PeopleComponent from '../components/atoms/PeopleComponent'

export default function AboutUs () {
  return (
      <Meta
      pageName={'Wie we zijn en wat we doen'}
      description={'We zijn gespecialiseerd in het schrijven van teksten voor ieder project, maar wie zijn wij? We stellen ons graag aan u voor.'}
      >
          <Layout>
              <PeopleComponent
                  name={'Paul Hoekstra'}
                  description={'Paul behaalde in 2013 zijn Master of Arts aan de Vrije Universiteit te Amsterdam en wist die daarna aan te vullen met een Master of Education. Inmiddels is hij al meer dan tien jaar werkzaam in het middelbaar onderwijs, waar hij gaandeweg een passie voor schrijven ontwikkelde. Tien jaar lang schreef hij onder meer toneelstukken voor de school. Gedurende een paar jaar was hij daarnaast nauw betrokken bij het onderhouden van de sociale media op zijn school.'}
                  image={'images/paul-hoekstra.jpeg'}
              />
              <PeopleComponent
                  name={'Job Veldhuis'}
                  description={'Job maakte kennis met sociale media als beheerder van een van de grootste Wie is de Mol-fanaccounts van Nederland. Hij werkte later aan de sociale media van het lokale theater, een bioscoop en Luchthaven Schiphol. Inmiddels werkt hij al drie jaar als marketingconsultant voor Sluijmer Multimedia en als marketing- & communicatiemanager voor EetSmakelijk.nl. De afgelopen vijf jaar schreef hij samen met Paul verschillende toneelstukken en boeken.'}
                  image={'images/job-veldhuis.jpg'}
              />
          </Layout>
      </Meta>
  )
}

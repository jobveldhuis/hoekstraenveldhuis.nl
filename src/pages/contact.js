/**
 * React
 */
import React from 'react'

/**
 * UI Components
 */
import Layout from '../components/layouts/Layout'
import Meta from '../components/layouts/MetaHeadComponent'
import ContactForm from '../components/forms/ContactFormComponent'
import Map from '../components/atoms/MapComponent'

/**
 * Styling
 */
import styles from '../styles/pages/ContactPage.module.css'

export default function Contact () {
  return (
      <Meta
          pageName={'Contact opnemen'}
          description={'Vrijblijvend contact opnemen. Bent u klaar voor de volgende stap of benieuwd naar de verschillende mogelijkheden? Neem contact met ons op!'}
      >
          <Layout
              showFooterCTA={false}
          >
              <div className={styles.contactPage}>
                  <div>
                      <h1>Vrijblijvend contact opnemen</h1>
                      <div className={styles.contactText}>
                          Bent u klaar voor de volgende stap of benieuwd naar de verschillende mogelijkheden? Neem contact met ons op en vertel ons over uw project!
                      </div>
                      <ContactForm />
                  </div>
                  <div className={`${styles.mapContainer} hideMobile`}>
                      <Map />
                  </div>
              </div>

          </Layout>
      </Meta>
  )
}

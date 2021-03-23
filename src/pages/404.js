/**
 * React
 */
import React from 'react'

/**
 * UI Elements
 */
import Layout from '../components/Layout'
import Meta from '../components/MetaHeadComponent'

export default function PageNotFound () {
  return (
        <Meta
            pageName='404'
        >
            <Layout showFooterCTA={false}>
                <div style={{ paddingTop: '10%' }}>
                    <h1>Die pagina bestaat niet...</h1>
                    <p><a href='/' className={'underlined'}>Klik hier</a> om terug naar de homepagina te gaan.</p>
                </div>
            </Layout>
        </Meta>
  )
}

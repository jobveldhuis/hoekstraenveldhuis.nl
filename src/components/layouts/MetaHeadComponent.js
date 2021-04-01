/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Next
 */
import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = (props) => {
  const router = useRouter()
  return (
        <>
            <Head>
                <title>{props.pageTitle ? props.pageTitle : `${props.pageName} ${props.separator} ${props.websiteTitle}`}</title>
                <link rel="icon" type="image/png" href="../favicon.png" />
                <meta name="description" content={props.description} />

                {/* Custom fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Prata&family=Shadows+Into+Light&display=swap" rel="stylesheet" />

                {/* Open Graph */}
                <meta property='og:title' content={props.pageTitle ? props.pageTitle : `${props.pageName} ${props.separator} ${props.websiteTitle}`} />
                <meta property='og:description' content={props.description} />
                <meta property='og:type' content={props.openGraph.type} />
                <meta property='og:image' content={props.openGraph.image} />
                <meta property='og:url' content={`https://hoekstraenveldhuis.nl${router.pathname}`} />

                {/* Schema markup */}

            </Head>
            { props.children }
        </>
  )
}

Meta.defaultProps = {
  pageTitle: '',
  pageName: 'Pagina',
  websiteTitle: 'Hoekstra & Veldhuis',
  separator: '-',
  description: 'Bij Hoekstra & Veldhuis draait alles om tekst. Of het nu gaat om tekstschrijven, vertalen of SEO optimalisatie. U bent bij ons aan het juiste adres.',
  openGraph: {
    type: 'website',
    image: ''
  },
  schema: {

  }
}

Meta.propTypes = {
  pageTitle: PropTypes.string,
  pageName: PropTypes.string,
  websiteTitle: PropTypes.string,
  separator: PropTypes.string,
  description: PropTypes.string,
  openGraph: PropTypes.shape({
    type: PropTypes.string,
    image: PropTypes.string
  }),
  schema: PropTypes.shape({}),
  children: PropTypes.node.isRequired
}

export default Meta

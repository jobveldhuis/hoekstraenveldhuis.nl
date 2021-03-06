/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Styling
 */
import styles from '../../styles/pages/LandingPage.module.css'

/**
 * UI Components
 */
import Layout from '../../components/layouts/Layout'
import ContactBadgeComponent from '../../components/atoms/ContactBadgeComponent'
import Meta from '../../components/layouts/MetaHeadComponent'

const LandingPage = (props) => (
    <Meta
        pageTitle={props.pageTitle}
        pageName={props.pageName}
        description={props.description}
        openGraph={props.openGraph}
        schema={props.schema}
    >
        <Layout>
            <div className={styles.landingPageContainer}>
                <h1>{props.heading}</h1>
                {props.children}
            </div>
            { props.showContactBadge && (
                <ContactBadgeComponent />
            )}
        </Layout>
    </Meta>
)

LandingPage.defaultProps = {
  showContactBadge: true
}

LandingPage.propTypes = {
  heading: PropTypes.string,
  pageTitle: PropTypes.string,
  pageName: PropTypes.string,
  description: PropTypes.string,
  openGraph: PropTypes.shape({
    type: PropTypes.string,
    image: PropTypes.string
  }),
  schema: PropTypes.shape({}),
  showContactBadge: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default LandingPage

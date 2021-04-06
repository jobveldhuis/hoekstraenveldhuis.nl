/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Styles
 */
import styles from '../../styles/atoms/AboutUsComponent.module.css'

const AboutUsComponent = (props) => (
    <div className={styles.aboutUsContainer}>
        <h2>{props.title}</h2>

        <div className={styles.aboutUsGrid}>
            <div className={`${styles.servicesMenu} hideMobile`}>
                {props.services.map((service, index) => (
                    <React.Fragment key={index}>
                        <a href={service.link} className={'underlined'}>
                            <h3>{service.title}</h3>
                        </a><br />
                    </React.Fragment>
                ))}
            </div>
            <div>
                {props.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    </div>
)

AboutUsComponent.defaultProps = {
  title: 'Over Ons',
  description: [],
  services: []
}

AboutUsComponent.propTypes = {
  title: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  })),
  description: PropTypes.arrayOf(PropTypes.string)
}

export default AboutUsComponent

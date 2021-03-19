import React from 'react'

/**
 * NextJS
 */
import Link from 'next/link'

/**
 * Styles
 */
import styles from '../styles/Footer.module.css'


const Footer = props => (
    <div className={styles.footerComponent}>
        { props.showCTA && (
          <Link href="/contact">
              <a>
                  <div className={`${styles.ctaContainer} container-fluid d-flex`} id="cta">
                        <div className={styles.ctaContent}>
                            <h2>Klaar voor de volgende stap?</h2>
                            <p>Neem direct vrijblijvend contact op. We denken graag mee.</p>
                        </div>
                  </div>
              </a>
          </Link>
        )}
        <div className={styles.footerContainer}>

        </div>
    </div>
)

Footer.defaultProps = {
    'showCTA': true
}

export default Footer;
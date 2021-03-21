import React from 'react'

/**
 * NextJS
 */
import Link from 'next/link'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

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
            <div className={styles.footerContent}>
                <div className={styles.footerGrid}>
                    <div>
                        <strong>Hoekstra & Veldhuis B.V.</strong><br />
                        <a className={`${styles.underlined} underlined`} href={'mailto:info@henv.online'}>info@henv.online</a><br />
                        Copyright 2021
                    </div>
                    <div>
                        <strong>Volg ons op</strong><br />
                        <a className={`${styles.underlined} underlined`} href={'https://facebook.com/hoekstraenveldhuis'} rel={'nofollow'}>Facebook</a><br />
                        <a className={`${styles.underlined} underlined`} href={'https://instagram.com/hoekstraenveldhuis'} rel={'nofollow'}>Instagram</a><br />
                    </div>
                    <div>
                        <strong>Kantoor</strong><br />
                        Ekenstein 38<br />
                        8226RH te Lelystad
                    </div>
                    <div>
                        KvK 71210229 <br />
                        BTW NL858624205B01 <br />
                        <a className={`${styles.underlined} underlined`} href='/documents/hoekstra-en-veldhuis-algemene-voorwaarden.pdf' target='_blank'>Algemene Voorwaarden</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Footer.defaultProps = {
  showCTA: true
}

Footer.propTypes = {
  showCTA: PropTypes.bool
}

export default Footer

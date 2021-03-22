/**
 * React
 */
import React from 'react'

/**
 * Styles
 */
import styles from '../styles/ContactBadgeComponent.module.css'

const ContactBadgeComponent = (props) => (
    <div className={styles.contactBadgeComponentContainer}>
        <span className={styles.badgeText}>
            Neem direct contact op
        </span>
        <div className={styles.badgeContainer}>
            <a href='/contact'>
                <img src={'/images/bubble.svg'} />
            </a>
        </div>
        <img className={styles.badgeArrow} src={'/images/arrow.svg'} />
    </div>
)

ContactBadgeComponent.defaultProps = {

}

export default ContactBadgeComponent

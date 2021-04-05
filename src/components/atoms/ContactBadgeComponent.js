/**
 * React
 */
import React from 'react'

/**
 * Styles
 */
import styles from '../../styles/atoms/ContactBadgeComponent.module.css'

const ContactBadgeComponent = () => (
    <div className={styles.contactBadgeComponentContainer}>
        <span className={styles.badgeText}>
            Neem direct contact op
        </span>
        <div className={styles.badgeContainer}>
            <a href='/contact'>
                <img src={'/images/bubble.svg'} alt={'Chat Bubble Icon'}/>
            </a>
        </div>
        <img className={styles.badgeArrow} src={'/images/arrow.svg'} alt={'Arrow icon'} />
    </div>
)

ContactBadgeComponent.defaultProps = {

}

export default ContactBadgeComponent

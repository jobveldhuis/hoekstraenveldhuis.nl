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
import styles from '../styles/Header.module.css'

const Header = props => (
    <div className={styles.navigation}>
        <nav className={`${styles.navbar} navbar-expand-lg d-flex navbar-light`}>
        <span className={'navbar-brand'}>
            <Link href="/">
                <a><img src="/images/henv_logo.png" className={styles.logo} alt="Logo Hoekstra & Veldhuis"/></a>
            </Link>
        </span>
            <button className={`${styles.navbarToggler} ${styles.collapsed} navbar-toggler`} type="button"
                    data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`${styles.iconBar} ${styles.topBar}`}/>
                <span className={`${styles.iconBar} ${styles.middleBar}`}/>
                <span className={`${styles.iconBar} ${styles.bottomBar}`}/>
            </button>
            <div className={`collapse navbar-collapse ${styles.navbarCollapse} flex-grow-1`} id="navbar">
                <ul className={`${styles.nav} navbar-nav justify-content-end flex-grow-1`}>
                    {
                        props.menu?.map((item, index) => {
                          const classes = `${styles.navLink} nav-item`
                          if (index === 0) classes.concat(' first')
                          if (index === props.menu.length - 1) classes.concat(' last')
                          return (
                                <li className={classes} key={index}>
                                    <Link href={item.link}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                          )
                        })
                    }
                </ul>
            </div>
        </nav>
    </div>
)

/**
 * Default props for header
 */
Header.defaultProps = {
  menu: []
}

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }))
}

export default Header

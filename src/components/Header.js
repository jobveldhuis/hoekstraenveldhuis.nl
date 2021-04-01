import React from 'react'

/**
 * NextJS
 */
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Styles
 */
import styles from '../styles/layouts/Header.module.css'

const Header = props => {
  const router = useRouter()
  return (
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
                              let classes = `${styles.navLink} nav-item underlined`
                              if (item.link === router.pathname) classes = `${styles.navLink} ${styles.current} nav-item`
                              return (
                                    <li className={classes} key={index}>
                                        <Link href={item.link}>
                                            <a className='underlined'>{item.title}</a>
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
}

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

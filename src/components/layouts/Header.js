import React from 'react'

/**
 * NextJS
 */
import { useRouter } from 'next/router'

/**
 * Bootstrap
 */
import { Nav, Navbar } from 'react-bootstrap'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Styles
 */
import styles from '../../styles/layouts/Header.module.css'

const Header = props => {
  const router = useRouter()
  return (
        <div className={styles.navigation}>
            <Navbar collapseOnSelect expand={'lg'}>
                <Navbar.Brand href={'/'}>
                    <img src="/images/henv_logo.png" className={styles.logo} alt="Logo Hoekstra & Veldhuis"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.nav}>
                        {
                            props.menu?.map((item, index) => {
                              let classes = `${styles.navLink} nav-item underlined`
                              if (item.link === router.pathname) classes = `${styles.navLink} current nav-item`
                              return (
                                  <Nav.Link className={classes} key={index} href={item.link}>{item.title}</Nav.Link>
                              )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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

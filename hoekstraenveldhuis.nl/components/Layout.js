/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Components
 */
import Header from './Header'
import Footer from './Footer'

const menu = [
  {
    title: 'over ons',
    link: '/over-ons'
  },
  {
    title: 'onze boeken',
    link: '/onze-boeken'
  },
  {
    title: 'contact opnemen',
    link: '/contact'
  }
]

const Layout = props => (
    <div className="layout">
        <Header menu={menu}/>
        <div className="content">
            {props.children}
        </div>
        <Footer
            showCTA={props.showFooterCTA}
        />
    </div>
)

Layout.defaultProps = {
  showFooterCTA: true
}

Layout.propTypes = {
  showFooterCTA: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Layout

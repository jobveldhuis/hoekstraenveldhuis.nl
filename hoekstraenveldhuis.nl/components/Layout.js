import React from 'react'

/**
 * Components
 */
import Header from './Header'
import Footer from './Footer'

const menu = [
    {
        'title': 'over ons',
        'link': '/about'
    },
    {
        'title': 'onze boeken',
        'link': '/books'
    },
    {
        'title': 'contact opnemen',
        'link': '/contact'
    }
]


const Layout = props => (
    <div className="layout">
        <Header menu={menu}/>
        <div className="content">
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout;
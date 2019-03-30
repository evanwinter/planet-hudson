/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import LogoWhite from "./logo-white"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <div className="nav-spacer" />
        <div className="layout-container">
          <main>{children}</main>
          <footer>
            <section
              id="footer-top"
              className="w-100 bg-brand-blue flex flex-column flex-row-ns sans-serif"
            >
              <div className="dt-ns dt--fixed-ns mw7 center">
                <div className="dtc-ns tc v-mid white td-none pt3 pt0-ns">
                  <div className="flex flex-column tc">
                    <Link className="no-underline pv1" to="/services">
                      Services
                    </Link>
                    <Link className="no-underline pv1" to="/about">
                      About
                    </Link>
                    <Link className="no-underline pv1" to="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="dtc-ns tc v-mid white td-none">
                  <div className="center">
                    <Link className="no-underline db pv3 pv4-ns center" to="/">
                      <LogoWhite />
                    </Link>
                  </div>
                </div>
                <div className="dtc-ns tc v-mid white td-none pb3 pb0-ns">
                  <div className="flex flex-column tc">
                    <span className="b pv1">Contact</span>
                    <Link className="no-underline pv1" to="/contact">
                      via Email
                    </Link>
                    <a className="no-underline pv1" href="tel:(651) 279-4469">
                      (651) 279-4469
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="footer-bottom"
              className="w-100 pa3 tc f7 bg-brand-darkblue sans-serif white"
            >
              Copyright © Planet Hudson, LLC {new Date().getFullYear()}
            </section>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*






<section className="w-onethird-l w-100 flex items-center justify-center white">
  <div className="flex flex-column tc">
    <Link to="/">
      Services
    </Link>
    <Link to="/">
      About
    </Link>
    <Link to="/">
      Contact
    </Link>
  </div>
</section>
<section className="w-onethird-l w-100">
  <div className="center pv4">
    <Link to="/">
      <LogoWhite />
    </Link>
  </div>
</section>
<section className="w-onethird-l w-100 flex items-center justify-center white">
  <div className="flex flex-column tc">
    <span className="b">Contact</span>
    <Link to="/contact-page/">
      via Email
    </Link>
    <a href="tel:(651) 279-4469">(651) 279-4469</a>
  </div>
</section>










 */

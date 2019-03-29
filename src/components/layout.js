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
import "./layout.css"

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
        <div className="nav-spacer"></div>
        <div className="layout-container">
          <main>{children}</main>
          <footer className="w-100 ba bg-blue flex">
            <section className="w-onethird-l w-100 flex items-center justify-center">
              <div className="flex flex-column">
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
              <div className="center">
                <LogoWhite />
              </div>
            </section>
            <section className="w-onethird-l w-100 flex items-center justify-center">
              <div className="flex flex-column">
                <Link to="/">
                  Link
                </Link>
                <Link to="/">
                  Link
                </Link>
                <Link to="/">
                  Link
                </Link>
              </div>
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

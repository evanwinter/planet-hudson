import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
  <header className="bg-white fixed w-100 pa3 shadow-1 sans-serif">
    <nav className="f6 fw6 flex items-center justify-between ph2-m">
      <div>
        <Link className="logo-wrap-sm dib" to="/"><Logo /></Link>
      </div>
      <div>
        <Link className="link dim black dib mr3" to="/services-page" title="Store">Services</Link>
        <Link className="link dim black dib mr3" to="/about-page" title="About">About</Link>
        <Link className="link dim black dib" to="/contact-page" title="Contact">Contact</Link>
      </div>
    </nav>
  </header>
)

export default Header

import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"

import MenuIcon from "../icons/menu-outline.svg"
import CloseIcon from "../icons/close-outline.svg"

class Header extends React.Component {
  handleMenuToggle(event) {
    event.preventDefault()
    document.querySelector(".links").classList.toggle("open")
  }
  render() {
    return (
      <header id="top-header" className="bg-white fixed w-100 pa3 sans-serif">
        <nav className="f6 fw6 flex items-center justify-between ph3-ns">
          <div>
            <Link className="logo-wrap-sm dib" to="/">
              <Logo />
            </Link>
          </div>
          <div
            id="hamburger"
            className="dn-ns w2 pointer"
            onClick={this.handleMenuToggle}
          >
            <MenuIcon />
          </div>
          <div className="links">
            <div
              id="close"
              className="dn-ns w2 absolute right-1 top-2 pointer"
              onClick={this.handleMenuToggle}
            >
              <CloseIcon />
            </div>
            <Link
              className="link pb1 dib mr3-ns"
              to="/services"
              title="Store"
            >
              Services
            </Link>
            <Link
              className="link pb1 dib mr3-ns"
              to="/about"
              title="About"
            >
              About
            </Link>
            <Link
              className="link pb1 dib mr3-ns"
              to="/contact"
              title="Contact"
            >
              Contact
            </Link>
            <Link
              className="link pb1 dib"
              to="/recycling"
              title="Recycling"
            >
              Recycling
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

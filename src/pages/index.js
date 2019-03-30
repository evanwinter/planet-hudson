import React from "react"
import { Link } from "gatsby"

import Splash from "../components/splash"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Splash>
    <SEO title="Home" keywords={[`recycling`, `wisconsin`, `company`]} />
    <div className="w-80 center logo-wrap">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div className="flex justify-center">
      <Link className="ma2 link pb1 b" to="/services">
        Services
      </Link>
      <Link className="ma2 link pb1 b" to="/about">
        About
      </Link>
      <Link className="ma2 link pb1 b" to="/contact">
        Contact
      </Link>
      <Link className="ma2 link pb1 b" to="/recycling">
        Recycling
      </Link>
    </div>
  </Splash>
)

export default IndexPage

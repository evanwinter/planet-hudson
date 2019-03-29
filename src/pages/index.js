import React from "react"
import { Link } from "gatsby"

import Splash from "../components/splash"
import Logo from "../components/logo"
import SEO from "../components/seo"

import tachyons from "tachyons"

const IndexPage = () => (
  <Splash>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="w-80 center logo-wrap"><Link to="/"><Logo /></Link></div>
    <div className="flex justify-center">
      <Link className="ma2" to="/services-page">Services</Link>
      <Link className="ma2" to="/about-page">About</Link>
      <Link className="ma2" to="/contact-page">Contact</Link>
    </div>
  </Splash>
)

export default IndexPage

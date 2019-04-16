import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flier from "../components/flier"

const ServicesPage = () => {
  const clientPhoneNumStr = process.env.CLIENT_PHONE_NUMBER
  const clientPhoneNumRef = "tel:" + clientPhoneNumStr
  return (
    <Layout>
      <SEO title="Services" />
      <section id="services-section" className="pt4-l sans-serif">
        <p className="black-20 f6 b pt4 mb0 w-100 center ">Services</p>
        <div className="flex flex-column flex-row-l">
          <article className="w-100-s w-100-m center w-50-l pr2-l">
            <h1 className="mt0-l f1 mt2 mt3-l">
              Planet Hudson takes the hassle out of recycling.
            </h1>
            <h3 className="f3">Here's how it works, in five steps.</h3>
            <h4 className="mb1 gray">Step 1</h4>
            <p>
              Contact Planet Hudson through{" "}
              <Link className="b" to="/contact/">
                this form
              </Link>{" "}
              or by calling{" "}
              <a href={clientPhoneNumRef} className="b dib">
                {clientPhoneNumStr}
              </a>
              .
            </p>
            <h4 className="mb1 gray">Step 2</h4>
            <p>
              We will drop off a Planet Hudson recycling bin at your business or
              home.
            </p>
            <h4 className="mb1 gray">Step 3</h4>
            <p>
              Throughout the week, toss any recyclables into the bin.{" "}
              <em>(Yep, any!)</em>
            </p>
            <h4 className="mb1 gray">Step 4</h4>
            <p>
              Sam and his caregiver will stop by as often as you need to empty
              your bin
            </p>
            <h4 className="mb1 gray">Step 5</h4>
            <p>
              Sam will sort your recycling for you, and ensure that everything
              gets to its proper facility!
            </p>

            <hr />

            <p className="f4 b near-black">
              And that's that! Recycling made easy — for just $40 per month.{" "}
              <br />
              <Link className="db mt2 brand-blue" to="/contact/">
                Click here to get started.
              </Link>
            </p>

            <hr className="dn-l" />
          </article>
          <article className="w-100-s w-80-m w-50-l pl2-l logo-wrap center">
            <Flier />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage

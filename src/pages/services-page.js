import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import flier from "../images/flier.jpg"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <section className="flex flex-column flex-row-l pt4-l">
    	<article className="w-100-s w-80-m center w-50-l pr2-l">
    		<h1 className="mt0-l">Planet Hudson takes the hassle out of recycling.</h1>
    		<h3>Here's how it works, in five steps.</h3>
    		<h4 className="mb1 gray">Step 1</h4>
    		<p>Contact Planet Hudson through <Link to="/contact-page/">this form</Link> or by calling (651) 279-4469.</p>
    		<h4 className="mb1 gray">Step 2</h4>
    		<p>We will drop off a Planet Hudson recycling bin at your business or home.</p>
    		<h4 className="mb1 gray">Step 3</h4>
    		<p>Throughout the week, toss any recyclables into the bin. (Yep, any!)</p>
    		<h4 className="mb1 gray">Step 4</h4>
    		<p>Sam and his caregiver will stop by as often as you need to empty your bin</p>
    		<h4 className="mb1 gray">Step 5</h4>
    		<p>Sam will sort your recycling for you, and ensure that everything gets to its proper facility!</p>

    		<hr />

    		<p className="f4 b">
    			And that's that! Recycling made easy — for just $40 per month.
    			<Link className="db mt2" to="/contact-page/">Click here to get started.</Link>
    		</p>
    	</article>
    	<article className="w-100-s w-80-m w-50-l pl2-l logo-wrap center">
    		<img src={flier} />
    	</article>
    </section>
  </Layout>
)

export default ServicesPage
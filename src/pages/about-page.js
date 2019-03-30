import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { GalleryImages } from "../components/images"

class AboutPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="About" />
				<section>
					<article className="sans-serif mw7 center">
						<p className="black-20 mb0 f6 b pt4">About</p>
						<h1 className="f1 mt2 mt3-l">About Planet Hudson</h1>
						<p className="lh-copy">
							<strong>Sam Datt has autism.</strong> There are traits inherent in
							autism that make it difficult to obtain and keep a job. Many
							people with disabilities want to work, but don't have the
							opportunity.{" "}
							<strong>
								Employment for people with disabilities was 17.5 percent in 2015
							</strong>
							, compared to 65 percent for those with no disability.
						</p>
						<p className="lh-copy">
							We know that people with different abilities can work hard and are
							reliable — and, like everyone, they deserve the same quality of
							life that a meaningful job can help them attain.
						</p>
						<p className="lh-copy">
							Sam has many wonderful attributes: he’s a hard worker; his smile
							and laugh will brighten your day; he enjoys spending time with his
							friends; and he has also always loved to{" "}
							<strong>
								sort objects into their proper categories — which is why he
								loves to recycle
							</strong>
							! Our family, too, has always strongly believed and actively
							participated in recycling to help our environment.
						</p>
						<p className="lh-copy">
							All of these factors led us to create the recycling company,{" "}
							<strong>Planet Hudson, LLC</strong>, in the hopes that it can help
							provide a <strong>higher quality of life</strong> for both our
							employees and our customers.
						</p>
						<hr />
						<h3>Mission Statement</h3>
						<p>At Planet Hudson, our mission is as follows:</p>
						<ul>
							<li>
								Provide superior customer service in gathering recyclables from
								customers as often as needed.
							</li>
							<li>
								Provide interesting and meaningful employment to people with
								different abilities.
							</li>
							<li>
								Help our environment, by getting recyclables into the proper
								channels instead of landfills.
							</li>
						</ul>
						<hr />
						<h3>Photo Gallery</h3>
						<div className="my-slider">
							{GalleryImages.map(src => (
								<div key={src}>
									<img alt="Planet Hudson LLC at work" src={src} />
								</div>
							))}
						</div>
					</article>
				</section>
			</Layout>
		)
	}
}
export default AboutPage

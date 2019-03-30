import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class RecyclingPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Recycling" />
        <section id="recycling-section" className="sans-serif mw7 center">
          <p className="black-20 f6 mb0 b pt4 ">Recycling</p>
          <article className="center sans-serif lh-copy">
            <h1 className="f1 mt2 mt3-l">Recycling &ndash; How &amp; Why</h1>
            <p>
              Recycling is one of the best things a society can do to improve
              the environment, the economy, sustainable manufacturing and to
              prevent waste from polluting the oceans. Recycling is a $200
              billion industry that generates more jobs than landfills and
              waste-to-energy plants, and it conserves finite natural resources
              that will be essential as our population continues to grow
              exponentially.
            </p>
            <p>
              Today Americans only recycle 35% of their waste. This level has
              not changed since the late 1980's. Recycling of plastic bottles
              has actually decreased. Even this relatively low rate of recycling
              has reduced annual CO2 emissions by 186 million metric tons, which
              is comparable to the annual greenhouse emissions of over 36
              million cars.
            </p>
            <p>
              The biggest thing holding recycling rates down is public confusion
              about what and how to recycle. Not properly sorting and having
              food and other materials in with recycling can contaminate huge
              batches of recycled material.
            </p>
            <p>
              Planet Hudson, LLC is dedicated to making it clear what to recycle
              and making it easy and convenient for businesses. The following
              information is provided as a general overview of the recycling we
              do and what you can do to make the recycling process better and
              have less contamination in batches of recycling.
            </p>
            <div class="row">
              <div class="col-sm-4">
                <p>
                  <strong>
                    With plastic containers, cans, bottles, jars, etc
                  </strong>
                  :
                </p>
                <ul>
                  <li>Pour out any remaining fluid or material</li>
                  <li>Rinse out well</li>
                  <li>Remove and discard caps and labels</li>
                </ul>
              </div>
              <div class="col-sm-4">
                <p>
                  <strong className="green">We recycle</strong>:
                </p>
                <ul>
                  <li>Aluminum cans</li>
                  <li>Other metal cans</li>
                  <li>All glass</li>
                  <li>Plastics 1, 2, and 5</li>
                  <li>Cardboard</li>
                  <li>All types of paper</li>
                </ul>
              </div>
              <div class="col-sm-4">
                <p>
                  <strong className="red">We can't recycle</strong>:
                </p>
                <ul>
                  <li>Food-contaminated items such as pizza boxes</li>
                  <li>Plastics with other numbers or no numbers</li>
                  <li>Styrofoam</li>
                  <li>Cellophane</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    )
  }
}
export default RecyclingPage

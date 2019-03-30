import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const clientPhoneNumStr = process.env.CLIENT_PHONE_NUMBER
  const clientPhoneNumRef = "tel:" + clientPhoneNumStr
  const clientEmailAddress = process.env.CLIENT_EMAIL_ADDRESS
  const formActionStr = "https://formspree.io/" + clientEmailAddress
  return (
    <Layout>
      <SEO title="Contact" />
      <section id="contact-section" className="sans-serif mw7 center">
        <p className="black-20 mb0 f6 b pt4 ">Contact</p>
        <h1 className="f1 mt2 mt3-l">Contact Us</h1>
        <p className="lh-copy mb2">
          Either give us a call at{" "}
          <a className="b" href={clientPhoneNumRef}>
            {clientPhoneNumStr}
          </a>{" "}
          or fill out the form below and we'll get back to you as soon as we
          can!
        </p>
        <article className="sans-serif">
          <form action={formActionStr} method="POST">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Contact Us</legend>
              <div className="mt3">
                <label className="db fw5 mb1 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure br1"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label
                  className="db fw5 mb1 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure br1"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mt3">
                <label className="db fw5 mb1 lh-copy f6" htmlFor="phone-number">
                  Phone number
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure br1"
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                />
              </div>
              <div className="mt3">
                <label className="db fw5 mb1 lh-copy f6" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="b pa2 br1 input-reset w-100 measure ba bg-transparent"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 br1 bn shadow05 input-reset white bg-brand-blue glow pointer f6"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default ContactPage

/*
<form name="sentMessage" id="contactForm" novalidate="novalidate">
	<div className="control-group">
		<div className="form-group floating-label-form-group controls mb-0 pb-2">
			<label>Name</label>
			<input
				className="form-control"
				id="name"
				type="text"
				placeholder="Name"
				required="required"
				data-validation-required-message="Please enter your name."
			/>
			<p className="help-block text-danger" />
		</div>
	</div>
	<div className="control-group">
		<div className="form-group floating-label-form-group controls mb-0 pb-2">
			<label>Email Address</label>
			<input
				className="form-control"
				id="email"
				type="email"
				placeholder="Email Address"
				required="required"
				data-validation-required-message="Please enter your email address."
			/>
			<p className="help-block text-danger" />
		</div>
	</div>
	<div className="control-group">
		<div className="form-group floating-label-form-group controls mb-0 pb-2">
			<label>Phone Number</label>
			<input
				className="form-control"
				id="phone"
				type="tel"
				placeholder="Phone Number"
				required="required"
				data-validation-required-message="Please enter your phone number."
			/>
			<p className="help-block text-danger" />
		</div>
	</div>
	<div className="control-group">
		<div className="form-group floating-label-form-group controls mb-0 pb-2">
			<label>Message</label>
			<textarea
				className="form-control"
				id="message"
				rows="2"
				placeholder="Message"
				required="required"
				data-validation-required-message="Please enter a message."
			/>
			<p className="help-block text-danger" />
		</div>
	</div>
	<br />
	<div id="success" />
	<div className="form-group">
		<button
			type="submit"
			className="btn btn-primary btn-xl"
			id="sendMessageButton"
		>
			Send
		</button>
	</div>
</form>
 */

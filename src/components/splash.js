import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import tachyons from "tachyons"

const Splash = ({ children }) => (
	<div className="Splash">
		<div className="vh-100 flex justify-center items-center">
			<main className="w-100">{children}</main>
		</div>
		<footer className="fixed bottom-0 w-100 pa3 tc ba">
			Copyright © Planet Hudson, LLC 2017 {new Date().getFullYear()}
		</footer>
	</div>
)

Splash.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Splash
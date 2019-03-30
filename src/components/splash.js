import React from "react"

import "./layout.scss"

const Splash = ({ children }) => (
  <div className="Splash sans-serif">
    <div className="vh-100 flex justify-center items-center">
      <main className="w-100">{children}</main>
    </div>
    <footer className="fixed bottom-0 w-100 pa3 tc f7 ba bg-brand-darkblue white">
      Copyright © Planet Hudson, LLC {new Date().getFullYear()}
    </footer>
  </div>
)

export default Splash

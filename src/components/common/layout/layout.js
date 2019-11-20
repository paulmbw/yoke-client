import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/fonts/fonts.css"
import Navigation from "../navigation/navigation"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Navigation />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="top" className="main-grid">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer>
          <ul className="nav-page">
            <li>
              <a href="#top">.top</a>
            </li>
            <li>
              <a href="#projects">.projects</a>
            </li>
            <li>
              <a href="#about">.about me</a>
            </li>
          </ul>
          <ul className="social-links inline-list">
            <li>
              <a href="https://github.com/tomhicz">
                <span className="github">github</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tomhicz">
                <span className="twitter">twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tomhickie/">
                <span className="linkedin">linkedin</span>
              </a>
            </li>
          </ul>
        </footer>
        <div id="footer"></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

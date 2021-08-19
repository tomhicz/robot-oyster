import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*     <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> 
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
*/}
    <section id="intro">
      <h1>
        Hi! I'm Tom and I'm a <span className="highlight">web / </span>
        <span className="highlight">front end / </span>
        <span className="highlight">full stack</span> developer
      </h1>
      <p>from the UK, living and working in Tokyo, Japan.</p>
    </section>
    <section id="projects">
      <h2>.projects</h2>
      <div className="projects-grid">
        <div className="project" id="one">
          <a href="">
            <StaticImage
              src="../images/placeholder-300x200.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Project Screenshot"
            />
            <h3>Project 1 &gt;</h3>
          </a>
        </div>
        <div className="project" id="two">
          <a href="">
            <StaticImage
              src="../images/placeholder-300x200.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Project Screenshot"
            />
            <h3>Project 2 &gt;</h3>
          </a>
        </div>
        <div className="project" id="three">
          <a href="">
            <StaticImage
              src="../images/placeholder-300x200.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Project Screenshot"
            />
            <h3>Project 3 &gt;</h3>
          </a>
        </div>
        <div className="project" id="four">
          <a href="">
            <StaticImage
              src="../images/placeholder-300x200.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Project Screenshot"
            />
            <h3>Project 4 &gt;</h3>
          </a>
        </div>
      </div>
    </section>
    <section id="about">
      <h2>.about me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim culpa
        sapiente minima dolorum necessitatibus porro temporibus aliquam! Aperiam
        distinctio ipsum aliquam, unde ratione iure voluptatem porro voluptates
        magnam sunt!
      </p>
    </section>
  </Layout>
)

export default IndexPage

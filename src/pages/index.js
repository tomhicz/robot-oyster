import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    const changeText = document.getElementById("changeText")
    const changingText = ["front end", "full stack", "web"]
    let textIndex = 0
    let textTimer = setInterval(() => {
      if (textIndex < changingText.length) {
        changeText.innerHTML = changingText[textIndex]
      } else {
        textIndex = 0
        changeText.innerHTML = changingText[textIndex]
      }
      textIndex++
    }, 4000)
    return function cleanUp() {
      clearInterval(textTimer)
    }
  })

  return (
    <Layout>
      <Seo title="Home" />
      <section id="intro">
        <div className="hero">
          <h1>
            Hi! I'm Tom and I'm a{" "}
            <span id="changeText" className="highlight">
              web{" "}
            </span>{" "}
            developer
          </h1>
          <p>from the UK, living and working in Tokyo, Japan.</p>
        </div>
      </section>
      <section id="projects">
        <h2>.projects</h2>
        <div className="projects-grid">
          <div className="project" id="one">
            <a href="https://github.com/tomhicz">
              <StaticImage
                src="../images/placeholder-300x200.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Project 1 &gt;</h3>
              <p>[ React, APIs ]</p>
            </a>
          </div>
          <div className="project" id="two">
            <a href="https://github.com/tomhicz">
              <StaticImage
                src="../images/placeholder-300x200.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Project 2 &gt;</h3>
              <p>[ HTML, CSS ]</p>
            </a>
          </div>
          <div className="project" id="three">
            <a href="https://github.com/tomhicz">
              <StaticImage
                src="../images/placeholder-300x200.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Project 3 &gt;</h3>
              <p>[ Vue ]</p>
            </a>
          </div>
          <div className="project" id="four">
            <a href="https://github.com/tomhicz">
              <StaticImage
                src="../images/placeholder-300x200.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Project 4 &gt;</h3>
              <p>[ Node, APIs ]</p>
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>.about me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim
          culpa sapiente minima dolorum necessitatibus porro temporibus aliquam!
          Aperiam distinctio ipsum aliquam, unde ratione iure voluptatem porro
          voluptates magnam sunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim
          culpa sapiente minima dolorum necessitatibus porro temporibus aliquam!
          Aperiam distinctio ipsum aliquam.
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage

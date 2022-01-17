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
            <a href="https://github.com/YACT-jp/e-mina-mobile-frontend">
              <StaticImage
                src="../images/emina-screens.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>E-Mina - Pop Culture Tourism App &gt;</h3>
              <p>[ React, React Native, Android, APIs, JWT Tokens ]</p>
            </a>
          </div>
          <div className="project" id="two">
            <a href="https://github.com/tomhicz/kids-book-share">
              <StaticImage
                src="../images/kidsbrary.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Kidsbrary - Kids Book Sharing Library &gt;</h3>
              <p>[ React, React Router, Firebase, noSQL ]</p>
            </a>
          </div>
          <div className="project" id="three">
            <a href="https://github.com/tomhicz/ccp2-project.continuous-delivery-react">
              <StaticImage
                src="../images/truck-stop.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Truck Stop Finder App &gt;</h3>
              <p>[ React, Axios, PostgreSQL, Heroku, CI/CD ]</p>
            </a>
          </div>
          <div className="project" id="four">
            <a href="https://github.com/tomhicz/robot-oyster">
              <StaticImage
                src="../images/portfolio.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Project Screenshot"
              />
              <h3>Personal Website &gt;</h3>
              <p>[ Gatsby, HTML, CSS, Netlify ]</p>
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <div>
          <h2>.about me</h2>
          <p>
            I am a{" "}
            <span className="highlight2">full-stack software engineer</span>{" "}
            from the UK, with a background in web design and development, and in
            education. I'm a big fan of{" "}
            <span className="highlight2">UI/UX</span> and{" "}
            <span className="highlight2">usability</span>, and a big believer in{" "}
            <span className="highlight2">accessibility</span> and using
            technology to make the world a better place.
          </p>

          <p>
            As a web designer and developer I have developed a number of
            commercial and non-profit websites in both full-time and freelance
            roles. Most recently, I have developed a number of full stack web
            apps using <span className="highlight2">Javascript</span>,{" "}
            <span className="highlight2">React</span>,{" "}
            <span className="highlight2">Node.js</span> as well as{" "}
            <span className="highlight2">SQL/noSQL databases</span> and{" "}
            <span className="highlight2">GraphQL/REST APIs</span>. A recent
            challenge was building a native mobile application using{" "}
            <span className="highlight2">React Native</span>.
          </p>

          <p>I am currently based in Tokyo.</p>
        </div>
        <div>
          <h2>.skills</h2>
          <ul className="equalizer">
            <li className="p100">Javascript</li>
            <li className="p100">Semantic HTML</li>
            <li className="p100">CSS / SCSS</li>
            <li className="p100">React</li>
            <li className="p80">React Native</li>
            <li className="p80">Node.js</li>
            <li className="p80">Git</li>
            <li className="p60">Express.js</li>
            <li className="p60">Vue</li>
            <li className="p60">GraphQL</li>
            <li className="p60">Mocha</li>
            <li className="p60">Typescript</li>
            <li className="p80">PHP</li>
            <li className="p40">Python</li>
            <li className="p60">Bash</li>
            <li className="p60">Google Firebase</li>
            <li className="p40">PostgreSQL</li>
            <li className="p40">TypeORM</li>
            <li className="p40">Heroku</li>
            <li className="p40">MongoDB</li>
            <li className="p100">APIs</li>
            <li className="p100">Responsive Design</li>
            <li className="p80">Accessibility</li>
            <li className="p60">Design</li>
            <li className="p60">Typography</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { StyledArticle } from "../styles/style-components"
import portrait from "../images/portrait.png"
import iconGithub from "../images/icon-github.png"
import iconLinkedin from "../images/icon-linkedin.png"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <StyledArticle>
        <article>
          <img src={portrait} alt="" className="portrait" />
          <p>Hello, my name is: [Jordan Lee]</p>
          <p>I am a software developer ever working towards aesthetic and efficient solutions to problems of all complexities, driven to create intuitive, visually pleasing, and user friendly products for all to enjoy. My experience as a game designer and artist gives me an eye for detail and a mind for tackling problems from multiple angles.</p>
          <a href="https://github.com/SpicyMeatloaf"><img src={iconGithub} alt="Github" className="icons"/></a>
          <a href="https://www.linkedin.com/in/jordan-wc-lee/"><img src={iconLinkedin} alt="LinkedIn" className="icons" /></a>
        </article>
      </StyledArticle>
    </Layout>
  )
}

export default IndexPage

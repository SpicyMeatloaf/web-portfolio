import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { StyledArticle } from "../styles/style-components"
import portrait from "../images/portrait.png"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <StyledArticle>
        <article>
          <img src={portrait} alt="" />
          <p>Hello, my name is: [Jordan Lee]</p>
        </article>
      </StyledArticle>
    </Layout>
  )
}

export default IndexPage

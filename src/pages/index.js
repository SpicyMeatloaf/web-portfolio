import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { StyledArticle } from "../styles/style-components"
import { PlaceholderCircle } from "../styles/style-components"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head page="Home" />
      <StyledArticle>
        <article>
          <PlaceholderCircle>
            <span>Picture here</span>
          </PlaceholderCircle>
          <p>Hello, my name is: [Jordan Lee]</p>
        </article>
      </StyledArticle>
    </Layout>
  )
}

export default IndexPage

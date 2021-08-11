import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"

import data from "../data/projects.json"
import { StyledRow } from "../styles/style-components"
// import {StaticImage} from "gatsby-plugin-image"

const Projects = (props) => {

    return (
      <Layout>
        <Head page="Projects" />
        <h1>My Work</h1>
        <StyledRow>
            <section>
                {
                    data.map((project, idx) =>
                        <Project props={project} id={idx} />
                    )
                }
            </section>
        </StyledRow>
      </Layout>
    )
}

export default Projects
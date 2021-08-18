import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Project from "../components/project"

import data from "../data/projects.json"
// import {StaticImage} from "gatsby-plugin-image"

const Projects = (props) => {

    return (
      <Layout>
        <Head page="Projects" />
        <section>
            {
                data.map((project, idx) =>
                    <Project props={project} id={idx} />
                )
            }
        </section>
      </Layout>
    )
}

export default Projects
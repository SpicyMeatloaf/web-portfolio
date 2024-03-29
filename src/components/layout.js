import React from "react"

import Header from "./header"
import Head from "./head"

import "../styles/reset.css"

import { StyledLayout } from "../styles/style-components"
import { graphql, useStaticQuery } from "gatsby"

const Layout = (props) => {
    const {site: {siteMetadata: {title, /*description*/}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    description
                    siteUrl
                    title
                }
            }
        } 
    `)
    return (
        <StyledLayout>
            <Head title={title}/>
            <Header />
            <div>
                <main>
                    {props.children}
                </main>
            </div>
            {/* <Footer author={author} title={title}/> */}
        </StyledLayout>
    )
}

export default Layout
import React, {useState} from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {navigate} from "gatsby-link"

const Contact = () => { 
    
    return (
        <Layout>
            <h1>Contact</h1>
            <form action="" method="post">
                <label>
                    Name
                    <input type="text" />
                </label>
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Message
                    <textarea />
                </label>
            </form>
        </Layout>
    )
}

export default Contact
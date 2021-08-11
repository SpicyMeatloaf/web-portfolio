import React, {useState} from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {navigate} from "gatsby-link"

const Contact = () => { 

    return (
        <Layout>
            <h1>Contact</h1>
            <form name="contact" method="POST" data-netlify="true" >
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Message
                    <textarea name="message" />
                </label>
            </form>
            <input type="submit" value="Contact Me" />
        </Layout>
    )
}

export default Contact
import React, {useState} from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {StyledForm} from "../styles/style-components"
import {navigate} from "gatsby-link"

const Contact = () => { 
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    // const encode = (data) => {
    //     return
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `form-name=contact&name=${encodeURIComponent(formState.name)}&email=${encodeURIComponent(formState.email)}&message=${encodeURIComponent(formState.message)}`
        })
        setFormState({
            name: "",
            email: "",
            message: ""
        })
        navigate('/')
    }

    return (
        <Layout>
            <Head page="Contact" />
            <StyledForm>
            <h1>Contact</h1>
            <form className="contact" name="contact" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name
                    <input type="text" name="name" onChange={handleChange} value={formState.name}/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={handleChange} value={formState.email} />
                </label>
                <label>
                    Message
                    <textarea name="message" onChange={handleChange} value={formState.message} />
                </label>
                <input type="submit" value="Contact Me" />
            </form>
            </StyledForm>
        </Layout>
    )
}

export default Contact
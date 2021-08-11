import React from "react"

import { StyledProject } from "../styles/style-components"

const Project = ({props, id}) => {
    return (
        <StyledProject>
            <article key={id} >
                {/* <img src={props.image} alt={props.title}/> */}
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.githubLink}>View on Github</a>
                <br />
                <a href={props.deployedLink}>View Deployed Project</a>
            </article>
        </StyledProject>
    )
}


export default Project
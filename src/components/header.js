import React from 'react'
import { Link } from 'gatsby'

import { StyledHeader } from '../styles/style-components'
import "../styles/style.css"

const Header = (props) => (
    <StyledHeader>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header
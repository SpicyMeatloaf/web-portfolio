import React from 'react'
import { Link } from 'gatsby'

import { StyledHeader } from '../styles/style-components'

const Header = (props) => (
    <StyledHeader>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header
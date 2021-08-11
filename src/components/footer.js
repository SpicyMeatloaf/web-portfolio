import React from 'react'

import { StyledFooter } from '../styles/style-components'

const Footer = ({title, author}) => (
    <StyledFooter>
        <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()}</p>
    </StyledFooter>
)

export default Footer
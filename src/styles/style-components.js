import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #258bdf;
    color: #fff;
    height: 4rem;
    padding: 0 1rem;
    box-shadow: 1px 1px 3px 1px #808080;
    h1 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        margin: 0;
        display: flex;
        align-items: center;
        li {
            margin: 0 1rem 0 0;
            a {
                font-weight: 700;
            }
        }
    }
`

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
`
export const StyledLayout = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    min-height: 100vh;
    & > div {
        flex-grow: 1;
    }
`

export const StyledProject = styled.article`

`

export const StyledRow = styled.section`
    display: grid;
    grid-template-columns:repeat(3, 1fr);
`
export const StyledForm = styled.form`
    width:200px;
    padding:20px;
`
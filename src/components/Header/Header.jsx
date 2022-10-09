import {  StyledLink, Nav } from './Header.styled'

export const Header = () => {
    return (
    <header>
        <Nav>
            <StyledLink to="/" >Home</StyledLink>
            <StyledLink to="/movies" >Movies</StyledLink>
        </Nav>
    </header>
    )
}
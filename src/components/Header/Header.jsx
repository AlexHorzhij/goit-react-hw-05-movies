import { StyledLink, Nav, HeaderBox } from './Header.styled';

export const Header = () => {
    return (
        <HeaderBox>
            <Nav>
                <StyledLink to="/" end>Home</StyledLink>
                <StyledLink to="/movies" >Movies</StyledLink>
            </Nav>
        </HeaderBox>
    )
};
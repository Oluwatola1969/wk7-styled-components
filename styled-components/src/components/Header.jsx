import React from 'react'
import { StyledHeader, Nav} from './styles/Header.styles';
import { Container } from './styles/Container.styles';

const Header = () => {
  return (
    <>
        <StyledHeader bg='#F8F9FA'>
            <Container>
                <Nav>
                    <a href="/" className="logo">LOGO</a>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </Nav>
            </Container>
        </StyledHeader>
    </>
  )
}

export default Header
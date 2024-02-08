
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../tags/logo-transparent-png.png';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto; /* Adjusted to extend background color till the end */
  background-color: darkblue;
  z-index: 1000;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  width: 80px;
  height: auto;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavLinksDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: darkblue;
    z-index: 999;
  }
`;

const NavbarItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
  margin: 5px;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjusted font size for mobile view */
  }
`;

const MobileNavButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translate(-70%, -70%);
  }
`;


const NavBar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuLink = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <Root>
      <Container>
        <LogoLink href="#Home" onClick={scrollToTop}>
          <Logo src={logo} alt="Logo" />
        </LogoLink>
        <MobileNavButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </MobileNavButton>
        <NavLinksDiv menuOpen={menuOpen}>
          <NavbarItem onClick={() => handleMenuLink('aboutme')}>About</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink('skills')}>Skills</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink('projects')}>Projects</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink('contact')}>Contact</NavbarItem>
        </NavLinksDiv>
      </Container>
    </Root>
  );
};

export default NavBar;












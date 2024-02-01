import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import logo from '../tags/logo-transparent-png.png'; // Import your logo image

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: darkblue; /* Use the same background color as your footer */
  z-index: 1000; /* Ensure it's on top of other content */
  color: white;
`;

const Container = styled.div`
  /* Define styles for Container component */
  margin: 0 auto;
  padding: 5px 10px; /* Adjust padding as needed */
  display: flex; /* Add flexbox */
  justify-content: space-between; /* Align items at the start and end of the container */
  align-items: center; /* Align items vertically */
  background-color: darkblue; /* Use the same background color as your footer */
  color: white;
`;

const LogoLink = styled.a`
  /* Define styles for LogoLink component */
  width: 80px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const Logo = styled.img`
  /* Define styles for Logo component */
  width: 100%; /* Ensure the logo fills its container */
`;

const MenuBackground = styled.div`
  /* Define styles for MenuBackground component */
`;

const NavLinksDiv = styled.div`
  /* Define styles for NavLinksDiv component */
  position: relative;
  margin-top: 5px; /* Adjust margin as needed */
  flex-grow: 1; /* Grow to take available space */
  display: flex;
  justify-content: flex-end; /* Move links to the right */
  align-items: center; /* Center vertically */
`;

const NavbarItem = styled.a`
  /* Define styles for NavbarItem component */
  text-decoration: none;
  color: white; /* Change the color to white */
  font-size: 12px; /* Adjust font size */
  margin-right: 10px; /* Adjust margin as needed */
  cursor: pointer; /* Add cursor pointer */
`;

const NavBar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const closeDrawer = event => {
    if (drawerRef.current && drawerRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const handleMenuLink = (sectionId) => {
    console.log("Handling menu link:", sectionId);
    const section = document.getElementById(sectionId);
    console.log("Found section:", section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <Root>
      <Container>
        <LogoLink href="#Home">
          <Logo src={logo} alt="Logo" /> {/* Use the Logo component with your logo image */}
        </LogoLink>
        <MenuBackground menuOpen={menuOpen}></MenuBackground>
        <NavLinksDiv ref={drawerRef} menuOpen={menuOpen}>
          <NavbarItem onClick={() => handleMenuLink("aboutme")}>About</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink("skills")}>Skills</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink("projects")}>Projects</NavbarItem>
          <NavbarItem onClick={() => handleMenuLink("contact")}>Contact</NavbarItem>
        </NavLinksDiv>
      </Container>
    </Root>
  );
};

export default NavBar;

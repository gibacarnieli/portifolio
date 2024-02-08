// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import logo from '../tags/logo-transparent-png.png'; 

// const Root = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: darkblue;
//   z-index: 1000;
//   color: white;
//   transition: transform 0.3s ease;
// `;

// const Container = styled.div`
//   /* Define styles for Container component */
//   margin: 0 auto;
//   padding: 5px 10px; /* Adjust padding as needed */
//   display: flex; /* Add flexbox */
//   justify-content: space-between; /* Align items at the start and end of the container */
//   align-items: center; /* Align items vertically */
//   background-color: darkblue; /* Use the same background color as your footer */
//   color: white;
// `;

// const LogoLink = styled.a`
//   /* Define styles for LogoLink component */
//   width: 80px; /* Adjust width as needed */
//   height: auto; /* Maintain aspect ratio */
// `;

// const Logo = styled.img`
//   /* Define styles for Logo component */
//   width: 100%; /* Ensure the logo fills its container */
// `;

// const MenuBackground = styled.div`
//   /* Define styles for MenuBackground component */
// `;

// const NavLinksDiv = styled.div`
//   /* Define styles for NavLinksDiv component */
//   position: relative;
//   margin-top: 5px; /* Adjust margin as needed */
//   flex-grow: 1; /* Grow to take available space */
//   display: flex;
//   justify-content: flex-end; /* Move links to the right */
//   align-items: center; /* Center vertically */
//   @media (max-width: 768px) {
//     display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
//     flex-direction: column;
//     position: absolute;
//     top: 50px;
//     left: 0;
//     width: 100%;
//     background-color: darkblue;
//     z-index: 999;
//   }
// `;

// const NavbarItem = styled.a`
//   /* Define styles for NavbarItem component */
//   text-decoration: none;
//   color: white; /* Change the color to white */
//   font-size: 14px; /* Adjust font size */
//   margin-right: 10px; /* Adjust margin as needed */
//   cursor: pointer; /* Add cursor pointer */
//   @media (max-width: 768px) {
//     margin: 5px;
//   }
// `;

// const MobileNavButton = styled.div`
//   font-size: 24px;
//   cursor: pointer;
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const NavBar = ({ children }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState('up');
//   const drawerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.scrollY;
//       setScrollDirection(currentPosition > scrollPosition ? 'down' : 'up');
//       setScrollPosition(currentPosition);
//     };

//     const throttleScroll = () => {
//       handleScroll();
//     };

//     window.addEventListener('scroll', throttleScroll);

//     return () => {
//       window.removeEventListener('scroll', throttleScroll);
//     };
//   }, [scrollPosition]);

//   useEffect(() => {
//     if (scrollDirection === 'down') {
//       setMenuOpen(false);
//     } else if (scrollDirection === 'up') {
//       setMenuOpen(true);
//     }
//   }, [scrollDirection]);


//   const handleMenuLink = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setMenuOpen(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     // You can keep the menu open if you remove the next line
//     // setMenuOpen(false);
//   };

//   return (
//     <Root style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)' }}>
//       <Container>
//         <LogoLink href="#Home" onClick={scrollToTop}>
//           <Logo src={logo} alt="Logo" />
//         </LogoLink>
//         <MobileNavButton onClick={() => setMenuOpen(!menuOpen)}>
//           &#9776; Menu
//         </MobileNavButton>
//         <MenuBackground menuOpen={menuOpen}></MenuBackground>
//         <NavLinksDiv ref={drawerRef} menuOpen={menuOpen}>
//           <NavbarItem onClick={() => handleMenuLink('aboutme')}>About</NavbarItem>
//           <NavbarItem onClick={() => handleMenuLink('skills')}>Skills</NavbarItem>
//           <NavbarItem onClick={() => handleMenuLink('projects')}>Projects</NavbarItem>
//           <NavbarItem onClick={() => handleMenuLink('contact')}>Contact</NavbarItem>
//         </NavLinksDiv>
//       </Container>
//     </Root>
//   );
// };

// export default NavBar;

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
    display: block;
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












import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute to handle the change of the year

    return () => clearInterval(intervalId); // Cleanup interval
  }, []);

  return (
    <FooterContainer isVisible={isVisible} ref={footerRef}>
      <ContactMe>Contact</ContactMe>
      <FooterLinks>
        <Icon target="blank" href="mailto:gilbertocarnieli@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Icon>
        <Icon target="blank" href="https://www.linkedin.com/in/gilberto-carnieli">
          <FontAwesomeIcon icon={faLinkedin} />
        </Icon>
        <Icon target="blank" href="https://github.com/gibacarnieli">
          <FontAwesomeIcon icon={faGithub} />
        </Icon>
      </FooterLinks>
      <Contact>I'm currently available to work, contact me for a chat!</Contact>
      <Copy>&copy; Gilberto Carnieli {currentYear}</Copy>
    </FooterContainer>
  );
};

const Copy = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  justify-content: center;
  font-size: 12px; /* Adjust font size */
`

const ContactMe = styled.div`
  font-size: 24px; /* Adjust font size */
  display: flex;
  justify-content: center;
  margin: 10px 20px 10px;
  color: ${props => props.theme.headline};
  transition: color 0.3s, background-color 0.3s;
`

const Icon = styled.a`
  font-size: 30px; /* Adjust font size */
  color: white;
  margin: 0 20px; /* Adjust margin */
  transition: transform 150ms;
  &:hover{
    transform: scale(1.3); /* Adjust scale */
  }
`

const FooterLinks = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`

const Contact = styled.div`
  font-size: 14px; /* Adjust font size */
  padding: 0 20px 20px; /* Adjust padding */
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  text-align: center;
`

const FooterContainer = styled.div`
  background-color: darkblue;
  color: white;
  display: ${props => (props.isVisible ? "flex" : "none")}; /* Show/hide footer based on visibility */
  flex-direction: column;
  position: fixed; /* Fixed position */
  bottom: 0; /* Stick to the bottom */
  left: 0;
  width: 100%;
  padding: 10px; /* Adjust padding */
  animation: ${props => (props.isVisible ? "fadeIn" : "fadeOut")} 0.5s ease-in-out;
  z-index: 999; /* Ensure the footer is above other content */
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

export default Footer;

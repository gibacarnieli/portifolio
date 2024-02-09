/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { device } from '../components.style/sizes';
import { animated, useSpring } from "react-spring";

import JavaScript from "../tags/javaScript.svg";
import Html5 from "../tags/html-5.svg";
import Css3 from "../tags/css3.svg";
import ReactIcon from "../tags/react.svg";
import NodeJs from "../tags/node-js.svg";
import MongoDB from "../tags/mongodb.svg";
import Npm from "../tags/npm.svg";
import Python from "../tags/python.svg";
import Django from "../tags/django.svg";
import Bootstrap from "../tags/bootstrap.svg";
import Figma from "../tags/figma.svg";
import GitHub from "../tags/github.svg";
import PostgreSQL from "../tags/postgresql.svg";
import Sass from "../tags/sass.svg";
import Next from "../tags/next-js.svg";
import Heroku from "../tags/heroku.svg";
import ISO from "../tags/iso9001.png";
import ISO14001 from "../tags/iso14001.png";
import ISO45001 from "../tags/iso45001.png";
import profileImage1 from '../tags/carnieli2.png';
import profileImage2 from '../tags/Gil.jpg'


// Define your styled components here...

const projects = [
  {
    type: "right",
    title: `Kitchen Standard Checks`,
    description: 
    "The project that I created as my last for this course, is a kitchen standard check to be implemented in any restaurant and the owner be able to record his fridge temperature and cooked meat as per law in Food Safety.",
    videoUrl: "/videos/Kitchen-Standard.mov",
    url: "https://kitchen-standard-checks-bbd60a709900.herokuapp.com/",
    github: "https://github.com/gibacarnieli/Kitchen_standard_checks",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "Styled Components",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "Next.js",
        imageSrc: Next,
      },
    ],
  },
  {
    type: "left",
    title: `The Tasty Palette`,
    description:
      "The project is a recipe website where users can discover cooking instructions for preparing meals at home. Additionally, users have the option to contribute new recipes, receive reviews, and share their culinary creations with both existing and new users.",
    videoUrl: "/videos/Tasty-Palette.mov",
    url: "https://tasty-pallete-3748066eacad.herokuapp.com/",
    github: "https://github.com/gibacarnieli/The-Tasty-Palette",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "NodeJs",
        imageSrc: NodeJs,
      },
      {
        name: "Sass",
        imageSrc: Sass,
      },
      {
        name: "Mongoose",
        imageSrc: MongoDB,
      },
    ],
  },
  {
    type: "right",
    title: `Rick and Morty`,
    description:
      "The project was designed to retrieve data from the Rick and Morty API and display it in a web format. The web application showcases characters from the show, and upon selecting a character from the list, it displays the episodes in which that character appears. Additionally, a search bar is provided to allow users to easily select their favourite character.",
    videoUrl: '/videos/Ricky-Morty.mov',
    url: "https://showmewhatyougot.netlify.app/",
    github: "https://github.com/gibacarnieli/SEI-P2",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "CSS3",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "React",
        imageSrc: ReactIcon,
      },
      {
        name: "Bootstrap",
        imageSrc: Bootstrap,
      },
    ],
  },
  {
    type: "left",
    title: `The Frogger`,
    description: 
    "Frogger is an arcade game where the objective is to navigate through traffic without being hit by obstacles. If you are fortunate enough to reach the final destination, where the winners are, you will score 100 points for each successful attempt, until you exhaust your lives.",
    videoUrl: '/videos/The-Frogger.mov',
    url: "https://gibacarnieli.github.io/Frogger/",
    github: "https://github.com/gibacarnieli/Frogger",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "CSS3",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
    ],
  },
];

const tags = [
  {
    name: "HTML5",
    imageSrc: Html5,
  },
  {
    name: "CSS3",
    imageSrc: Css3,
  },
  {
    name: "Styled Components",
    imageSrc: Css3,
  },
  {
    name: "JavaScript",
    imageSrc: JavaScript,
  },
  {
    name: "React",
    imageSrc: ReactIcon,
  },
  {
    name: "Next.js",
    imageSrc: Next,
  },
  {
    name: "NodeJs",
    imageSrc: NodeJs,
  },
  {
    name: "MongoDB",
    imageSrc: MongoDB,
  },
  {
    name: "NPM",
    imageSrc: Npm,
  },
  {
    name: "Python",
    imageSrc: Python,
  },
  {
    name: "Django",
    imageSrc: Django,
  },
  {
    name: "Bootstrap",
    imageSrc: Bootstrap,
  },
  {
    name: "Figma",
    imageSrc: Figma,
  },
  {
    name: "GitHub",
    imageSrc: GitHub,
  },
  {
    name: "Sass",
    imageSrc: Sass,
  },
  {
    name: "Express",
    imageSrc: NodeJs,
  },
  {
    name: "Mongoose",
    imageSrc: MongoDB,
  },
  {
    name: "PostgreSQL",
    imageSrc: PostgreSQL,
  },
  {
    name: "Heroku",
    imageSrc: Heroku,
  },
  {
    name: "ISO 9001",
    imageSrc: ISO,
    description: "ISO 9001 - Quality management system standard",
  },
  {
    name: "ISO 14001",
    imageSrc: ISO14001,
    description: "ISO 14001 - Environmental management system standard",
  },
  {
    name: "ISO 45001",
    imageSrc: ISO45001,
    description: "ISO 45001 - Occupational health and safety management system standard",
  },
];
const names = ['Hi, I am Gilberto! Welcome to my Portfolio', 'Web Developer', 'Full Stack', 'Software Developer'];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Change image every 5 seconds

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []);

  const profileImageSrc = currentImageIndex === 0 ? profileImage1 : profileImage2;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  // Set up the animation
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    onRest: () => {
      if (index < names.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    },
    config: { duration: 200 }, // Adjust the duration for the typing effect
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < names.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000); // Adjust the timeout for when to switch to the next name
    return () => clearTimeout(timeout);
  }, [index]);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    // Construct email content
    const subject = "Message from Portfolio Website";
    const body = `Email: ${email}\n\nMessage: ${message}`;

    // Open default email provider with pre-filled subject and body
    window.location.href = `mailto:carnieligilberto86@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
    <BackgroundContainer>
      {/* Add your existing content structure here */}
      <ContainerHead>
      <ProfileImage src={profileImageSrc} alt="Profile" />
      <div className="text-center mt-8 bg-gray-200 p-8">
      {names.map((name, i) => (
  <animated.div
    key={i}
    style={{
      ...props,
      display: i === index ? 'inline-block' : 'none',
      fontSize: i === index ? '2rem' : '1rem',
      fontWeight: 'bold',
      color: i === index ? 'darkblue' : 'transparent',
    }}
  >
    {name.includes(" ") ? name : name.split('').map((char, charIndex) => (
      <animated.span
        key={charIndex}
        style={{
          opacity: props.opacity.interpolate((o) => o),
          display: 'inline-block',
          transform: 'translateX(0%)',
        }}
        className="text-[#969fa5] bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
      >
        {char}
      </animated.span>
    ))}
  </animated.div>
))}
</div>
    </ContainerHead>
      
      <ContainerAbout id="aboutme">
        <Container width="850px">
        <AboutMe>About Me</AboutMe>
          <AboutMeText>
            At my Portfolio you will found a bit about me, starting from the picture of my Family Crest that I'm very proud of.
          </AboutMeText>
          <AboutMeText>
          With a background spanning Chef, Auditor, and Administration, I've transitioned into <b>Web Development</b> driven by a passion for exploring new possibilities. My diverse experience has honed skills in organisation, collaboration, and problem-solving, all vital for success as a Software Engineer.
          </AboutMeText>
          <AboutMeText>
          Completing a Software Engineering bootcamp with <b>General Assembly</b> has further enhanced my technical and soft skills.
          </AboutMeText>
          <AboutMeText>
          I’m now seeking to apply this knowledge across various industries, bridging the gap between hospitality and technology to deliver impactful solutions for clients.
          </AboutMeText>
        </Container>
      </ContainerAbout>
      <ContainerSkills id="skills">
      <AboutMe>Technologies and Skills</AboutMe>
          <Tags width="950px">
            {tags.map((tag, index) => (
              <Tag key={index} width="60px" height="60px" data-description={tag.description}>
                <Skills src={tag.imageSrc} alt={tag.name} />
                <SkillsName>{tag.name}</SkillsName>
              </Tag>
            ))}
        </Tags>
      </ContainerSkills>
      <ContainerProjects id="projects">
        <AboutMe>Projects</AboutMe>
        <Container>
          {projects.map((project, index) => (
            // <ScrollAnimation animateIn="fadeInRight" animateOnce key={index}>
              <Card type={project.type}>
                <ImageWrapper>
                  <ProjectVideo
                    src={project.imageSrc}
                    alt="ProjectVideo"
                    muted
                    autoPlay
                    loop
                  >
                    <source src={project.videoUrl}></source>
                  </ProjectVideo>
                </ImageWrapper>
                <ProjectContent>
                  <Title>{project.title}</Title>
                  <Info>{project.description}</Info>

                  <TagsProjects>
                    {project.tags.map((tags, index) => (
                      <Tag key={index}>
                        <Skills src={tags.imageSrc} alt="HTML5" />
                        <SkillsName>{tags.name}</SkillsName>
                      </Tag>
                    ))}
                  </TagsProjects>

                  <Buttons>
                    {project.github && (
                      <ViewCode href={project.github} target="_blank">
                        VIEW SOURCE CODE
                      </ViewCode>
                    )}
                    {project.url && (
                      <ViewWebsite href={project.url} target="_blank">
                        VIEW WEBSITE
                      </ViewWebsite>
                    )}
                  </Buttons>
                </ProjectContent>
              </Card>
          ))}
        </Container>
      </ContainerProjects>
      
      <Hobbies>
        <AboutMe>Hobbies & Interests</AboutMe>
        <List>
          <AboutMeText>
            I love <b>traveling</b>. It's the most amazing feeling in the World.
          </AboutMeText>
          <AboutMeText>
            I like to sightseeing, tasty new <b>Food</b>, make new friends and I absolutely love to cook.
          </AboutMeText>
          <AboutMeText>
            When I have free time, I like to be update with the new technologies.
          </AboutMeText>
          <InterestsPic>
            <ImagesInterests1> <WhiteCover>View of Amazing Malaga</WhiteCover></ImagesInterests1>
            <ImagesInterests2> <WhiteCover>Been a chef 🍔👨🏼‍🍳</WhiteCover></ImagesInterests2>
            <ImagesInterests3> <WhiteCover>Swimming in Malaga 🛟</WhiteCover></ImagesInterests3>
          </InterestsPic>
        </List>
      </Hobbies>
      <ContainerContact id="contact">
          
      </ContainerContact>
      </BackgroundContainer>
    </>
  );
};



const ProfileImage = styled.img`
  position: absolute;
  left: 20px;
  top: 60%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: none;
  
  @media (max-width: 768px) {
    right: 10px;
    width: 80px;
    height: 80px;
  }
`;

const MobileNavButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 18px;
    margin-bottom: 10px;
  }
  input[type="email"],
  textarea {
    width: 300px; /* Set a specific width */
    max-width: 100%; /* Ensure it doesn't exceed the container's width */
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box; /* Ensure padding and border are included in the width */
  }
  textarea {
    height: 100px; /* Adjust height as needed */
  }
  button {
    background-color: #007bff; /* Change color as needed */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #0056b3; /* Change color as needed */
  }
`;

const BackgroundContainer = styled.div`
  background-image: url('/pictures/carnieli.png');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: left top;
  filter: brightness(100%);
  width: 100%; /* Ensure container fills the entire viewport width */
`;

const ContainerContact = styled.div`
  background-color: white; /* Change background color to white */
  margin-top: -100px; /* Adjust as needed */
`;

const InterestsPic = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
font-family: 'Courier New', Courier, monospace;
@media ${device.desktop} {
  }
`

const ImagesInterests = styled.div`
  overflow: hidden;
  background-size: cover;
  width: 300px;
  height: 370px;
  margin: 35px 20px 0;
  border-radius: 5px;
  position: relative;

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* Adjust width for tablets */
  }

  @media (max-width: 480px) {
    width: 100%; /* Set width to 100% for mobile */
  }
`;

const WhiteCover = styled.div`
  background: rgba(255, 255, 255, 1);
  font-family: 'Arial', cursive;
  letter-spacing: 1.5px;
  opacity: 0;
  position: absolute;
  height: 50px;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  transform: translate(0, 100%);
  transition: all 0.5s;
  ${ImagesInterests}:hover & {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const ImagesInterests1 = styled(ImagesInterests)`
background-image: url(/hobbie4.jpg);
`
const ImagesInterests2 = styled(ImagesInterests)`
background-image: url(/robbies1.jpg);
`
const ImagesInterests3 = styled(ImagesInterests)`
background-image: url(/robbies3.JPG);

`

const Hobbies = styled.div`
  background-color: white; /* Change background color to white */
  transition: color 0.3s, background-color 0.3s;
  padding: 0 0 300px; /* Adjust bottom padding as needed */
`;

const List = styled.ul`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 10px 30px 10px;
`;


const VisitWebsite = styled.a`
  font: inherit;
  color: inherit;
  border-radius: 7px;
  outline: 0 none;
  border: 0 none;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 15px 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: transform 150ms;
  background-color: #2ecc71; /* Change color as needed */
  color: white;
  margin-top: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const VisitWebsiteButton = styled.a`
background-color: #e2e2e2;
color: black;
margin-top: 25px;
@media ${device.tablet} {
  margin: 10px 10px 0;
}
@media ${device.desktop} {
  margin: 10px 10px 0;
}
@media ${device.wide} {
  margin: 10px 10px 0;
}
`;

const TagsProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tags = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tag = styled.div`
  margin: 20px 17px;
  position: relative;
  display: flex;
  flex-direction: column; // Ensure tag names are displayed below the images
  align-items: center; // Center align tag names
  text-align: center; // Center align text within tags

  img {
    width: ${(props) => props.width || "48px"};
    height: ${(props) => props.height || "48px"};
    cursor: pointer;
  }

  &:hover::after {
    content: attr(data-description); // Display the description when hovering
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 9999;
  }
`;

const ContainerSkills = styled.div`
  background-color: white; /* Change background color to white */
  transition: color 0.3s, background-color 0.3s;
  padding: 100px 0 100px; /* Adjusted padding */
  margin-top: -30px; /* Adjusted margin-top */
  padding-top: 80px; /* Add padding to the top */
  position: auto;
`;
const Skills = styled.img`
  max-width: 48px;
  }
`
const SkillsName = styled.div``;
const Buttons = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Button = styled.a`
  font: inherit;
  color: inherit;
  border-radius: 7px;
  outline: 0 none;
  border: 0 none;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 15px 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const ViewCode = styled(Button)`
  background-color: #e2e2e2;
  color: black;
  margin-top: 25px;
  @media ${device.tablet} {
    margin: 10px 10px 0;
  }
  @media ${device.desktop} {
    margin: 10px 10px 0;
  }
  @media ${device.wide} {
    margin: 10px 10px 0;
  }
`;
const ViewWebsite = styled(Button)`
  background-color: #e2e2e2;
  color: black;
  margin-top: 25px;
  @media ${device.tablet} {
    margin: 10px 10px 0;
  }
  @media ${device.desktop} {
    margin: 10px 10px 0;
  }
  @media ${device.wide} {
    margin: 10px 10px 0;
  }
`;

const Info = styled.div`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  flex: 1;
  line-height: 1.3;
`;
const Title = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center; /* Align items vertically */
  margin-bottom: 20px; /* Add some margin between title and image */
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProjectVideo = styled.video`
  width: 95%;
  border-radius: 8px;
  
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.aboutBackground};transition: color 0.3s, background-color 0.3s;
  padding: 20px;
  display: flex;
  border-radius: 15px;
  margin: 30px 0;
  flex-direction: column;
  z-index: 0;

  @media ${device.desktop} {
    flex-direction: ${(props) =>
    props.type === "left" ? "row" : "row-reverse"};
  }

`
const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white; /* Change background color to white */
  transition: color 0.3s, background-color 0.3s;
  padding: 30px 10px;
`;
const AboutMeText = styled.div`
  font-size: 20px;
  margin: 10px 0;

`
const AboutMe = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.subHeader};
  transition: color 0.3s, background-color 0.3s;
  margin: 0 0 20px;
  padding: 0 10px;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    font-size: 40px; /* Change font size for tablets */
  }

  @media ${device.mobile} {
    font-size: 30px; /* Change font size for mobile devices */
  }
`;

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.aboutBackground};transition: color 0.3s, background-color 0.3s;
  padding: 100px 0;
`

const Subtext = styled.p`
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
`
const HeadLine = styled.div`
  color: ${(props) => props.theme.headline};transition: color 0.3s, background-color 0.3s;
  font-size: 45px;
  display: flex;
`
const ProfileImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Background = styled(ProfileImg)``;
const Foreground = styled(ProfileImg)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1) translateY(-8px);
  }
`
const HeadImage = styled.div`
  width: 210px;
  height: 210px;
  overflow: hidden;
  border-radius: 105px;
  margin: 0 20px 20px;
  position: relative;
`
const ContainerHead = styled.div`
  background-color: white; /* Change background color to white */
  color: #fff; /* Set text color to white or any suitable color */
  transition: color 0.3s, background 0.3s;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px; /* Increase padding-top for a taller container */
  height: 200px; /* Adjust the height as needed */
  position: relative;
  text-align: right; /* Align text to the right side */

  @media (max-width: 768px) {
    padding-top: 80px; /* Adjusted padding for mobile view */
    width: 100%; /* Ensure container fills the viewport width on mobile */
    box-sizing: border-box; /* Include padding in width calculation */
    padding-right: 10px; /* Add some padding to the right to avoid content being too close to the edge */
    padding-left: 10px; /* Add some padding to the left to avoid content being too close to the edge */
    font-size: 16px; /* Make font size smaller for mobile view */
    align-items: flex-end;
  }
`;



const AnimatedText = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px; /* Adjusted margin-top */
  position: absolute;
  bottom: 10; /* Position the text at the bottom */
  right: 2px; /* Position the text at the right side of the page */
  
  @media (max-width: 768px) {
    font-size: 6px; /* Adjusted font size for mobile view */
    margin-top: 10px; /* Adjusted margin-top for mobile view */
    right: auto; /* Remove the right positioning */
    left: 2px; /* Position the text at the left side of the page */
    bottom: 2px; /* Adjust bottom positioning for mobile view */
    text-align: right; /* Align text to the right for mobile view */
  }

  @media (max-width: 480px) {
    font-size: 6px; /* Further adjusted font size for smaller mobile view */
    margin-top: 2px; /* Further adjusted margin-top for smaller mobile view */
  }
`;

const Profile = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
export default Main;






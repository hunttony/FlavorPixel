import React from 'react';
import styled from 'styled-components';
import App from './../App';

const PortfolioSection = styled.section`
  padding: 80px 0;
  background-color: orange;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #667;ont-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 20px black;
  text-shadow: 1px 1px 5px black ;
  border-color: black;
  border-style: solid;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  color: #667;
`;

const ProjectCard = styled.div`
justify-content: center;
align-items: center;
font-size: 18px;
line-height: 1.6;
margin: 20px;
color: white;
background-color: rgba(0, 0, 0, 0.5);
box-shadow: 1px 1px 10px black;
text-shadow: 1px 1px 5px black ;
border-color: black;
border-style: solid;
padding: 20px 20px 0 10px;
border-radius: 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  
  border-radius: 10px;
  box-shadow: 5px 4px 20px black;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  transition: transform 0.3s ease;
  

  &:hover {
    transform: scale(1.27);
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
    
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
font-size: 36px;
margin-bottom: 40px;
color: #667;ont-size: 36px;
text-align: center;
margin-bottom: 20px;
color: white;
background-color: rgba(0, 0, 0, 0.5);
box-shadow: 2px 2px 20px black;
text-shadow: 1px 1px 5px black ;
border-color: black;
border-style: solid;
padding: 5px 20px 5px 20px;
border-radius: 20px;
  
`;

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title>Portfolio</Title>
        <ProjectsContainer>
          <ProjectCard >
          <ProjectImage src="/images/Screenshot restaurantsite.png" alt="Restaurant" />
            <ProjectTitle>Project 1: Restaurant</ProjectTitle>
            <ProjectDescription><a href="https://restaurant-9xcg.onrender.com/" target="_blank" >Thynk Cafe</a></ProjectDescription>
          </ProjectCard>
          <ProjectCard>
          <ProjectImage src="/images/Screenshot 2024-04-27 112355.png" alt="Drip Shop" />
            <ProjectTitle>Project 2: Clothing Store</ProjectTitle>
            <ProjectDescription>Drip Shop</ProjectDescription>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Project 3: Foodie Site</ProjectTitle>
            <ProjectDescription>Food Genie</ProjectDescription>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Project 4: Influencer</ProjectTitle>
            <ProjectDescription>Chef Tennisha W.</ProjectDescription>
          </ProjectCard>
          {/* Add more ProjectCard components as needed */}
        </ProjectsContainer>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;

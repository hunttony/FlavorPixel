import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 80vh;
  background-image: url('/images/Flavor Pixel productions.png');
  background-size: cover; /* Optional: adjust background size */
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const ContentContainer = styled.div`
  max-width: 850px;
  padding: 0 20px;
  transform: translateY(185px); 
`;

const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 20px red;
  text-shadow: 1px 1px 5px black ;
  padding: 30px 30px; /* Increase padding for better visibility */
  border-radius: 20px;
  letter-spacing: 5px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 20px red;
  text-shadow: 1px 1px 5px black ;
  padding: 25px 25px; /* Increase padding for better visibility */
  border-radius: 20px;
  letter-spacing: 10px;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <ContentContainer>
        
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;

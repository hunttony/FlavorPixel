import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const AboutSection = styled.section`
  padding: 10px 0;
  background-color: orange;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
`;

const Title = styled.h2`
  font-size: 36px;
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

const Description = styled.div`
  padding: 5px;
`;

const Subsection = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 10px black;
  text-shadow: 1px 1px 5px black ;
  border-color: black;
  border-style: solid;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  `;

  const Subsection1 = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: black;
  text-shadow: 1px 1px 2px grey ;
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  `;
  

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Description>
          <Subsection1>Hello and welcome to Flavor Pixel! My name is Antonio Hunt, and I'm passionate about programming and creating delightful digital experiences. With a strong work ethic and a dedication to excellence, I strive to bring creativity, innovation, and precision to every project I undertake.</Subsection1>
         
          <Subsection>Ever since I wrote my first "Hello, World!" program, I've been captivated by the endless possibilities of coding. What started as a hobby quickly evolved into a lifelong passion. I love diving deep into complex problems, crafting elegant solutions, and pushing the boundaries of what's possible with technology.</Subsection>
          
          <Subsection1>At Flavor Pixel, I believe in delivering nothing but the best. Whether it's building a sleek website, developing a powerful web application, or optimizing for SEO, I approach every task with meticulous attention to detail and a commitment to excellence. I take pride in my work and strive to exceed expectations at every turn.</Subsection1>
          
          <Subsection>I thrive in collaborative environments where ideas flow freely and innovation flourishes. I enjoy working closely with clients and teammates to bring visions to life, leveraging my technical expertise and creative intuition to turn concepts into reality. Together, we can create something truly exceptional.</Subsection>
          
          <Subsection1>In the ever-evolving world of technology, there's always something new to learn. I'm committed to continuous growth and development, constantly expanding my skill set, exploring emerging technologies, and staying up-to-date with the latest trends and best practices. I believe that learning is a lifelong journey, and I'm excited to embark on it each day.</Subsection1>
          
          <Subsection>Thank you for visiting Flavor Pixel! Whether you're looking to collaborate on a project, explore new opportunities, or simply connect with fellow enthusiasts, I'm thrilled to be on this journey with you. Let's create something amazing together!</Subsection>
        </Description>
      </Container>
    </AboutSection>
  );
};

export default About;

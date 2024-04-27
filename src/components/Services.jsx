import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 20px 0;
  
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
ont-size: 36px;
text-align: center;
margin-bottom: 20px;
color: orange;
background-color: rgba(0, 0, 0, 0.5);
box-shadow: 2px 2px 20px orange;
text-shadow: 2px 2px 4px white ;
border-color: black;
border-style: solid;
padding: 5px 20px 5px 20px;
border-radius: 20px;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceCard = styled(motion.div)`
  width: calc(33.33% - 20px);
  margin: 40px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  box-shadow: 1px 1px 10px orange;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: black;
  text-shadow: 0 1px 4px orange;
`;

const ServiceDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
`;

const Services = () => {
  const controls = useAnimation();

  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');

    const handleScroll = () => {
      serviceCards.forEach((card) => {
        const { top, bottom } = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8 && bottom > 0) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 },
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <ServicesSection id="services">
      <Container>
        <Title>Our Services</Title>
        <ServiceContainer>
          <ServiceCard className="service-card" initial={{ opacity: 0, y: 100 }} animate={controls}>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>We specialize in creating custom websites and web applications tailored to your specific needs. From simple landing pages to complex e-commerce platforms, we've got you covered.</ServiceDescription>
          </ServiceCard>
          <ServiceCard className="service-card" initial={{ opacity: 0, y: 100 }} animate={controls}>
            <ServiceTitle>SEO Optimization</ServiceTitle>
            <ServiceDescription>Improve your website's visibility and ranking on search engines with our SEO optimization services. We'll help you increase organic traffic and reach your target audience more effectively.</ServiceDescription>
          </ServiceCard>
          <ServiceCard className="service-card" initial={{ opacity: 0, y: 100 }} animate={controls}>
            <ServiceTitle>Digital Marketing</ServiceTitle>
            <ServiceDescription>Reach new customers and grow your online presence with our digital marketing strategies. From social media marketing to email campaigns, we'll help you connect with your audience and drive conversions.</ServiceDescription>
          </ServiceCard>
        </ServiceContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;

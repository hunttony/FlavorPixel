import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>
        Created by Your Antonio Hunt |{' '}
        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
          Phone: 346-316-6075
        </Link>
        {' | '}
        For inquiries, contact me at{' '}
        <Link href="mailto:antonioh@flavorpixel.work.gd"> @ Flavor Pixel</Link>
      </Text>
    </FooterContainer>
  );
};

export default Footer;

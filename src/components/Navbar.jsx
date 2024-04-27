import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  
  color: #fff;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled(motion.li)`
  margin: 0 10px;
  cursor: pointer;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <List>
        <ListItem
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <NavLink href="#home">Home</NavLink>
        </ListItem>
        <ListItem
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <NavLink href="#about">About</NavLink>
        </ListItem>
        <ListItem
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <NavLink href="#services">Services</NavLink>
        </ListItem>
        <ListItem
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <NavLink href="#portfolio">Portfolio</NavLink>
        </ListItem>
        <ListItem
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <NavLink href="#contact">Contact</NavLink>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navbar;

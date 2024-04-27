// Contact.js

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import axios for making HTTP requests

const ContactSection = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  color: #667;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #667;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Server response:', response.data);
      // Optionally, handle success response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle error
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contact Me</Title>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit">Send</Button>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;

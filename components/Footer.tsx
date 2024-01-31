import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-style: italic;
  text-align: center;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <footer>
        <p> Thank you for staying up with the latest news!</p>
        <Text>&copy; 2024 Headlines App.</Text>
    </footer>
  );
};

export default Footer;
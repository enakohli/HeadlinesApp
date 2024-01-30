import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  text-align: center;
`;

const Name = styled.h3`
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  text-align: center;
  font-style: italic;
`;

const Header = () => {
  return (
    <header>
      <Title>Headlines App</Title>
      <Name>By: Ena Kohli</Name>
    </header>
  );
};

export default Header;
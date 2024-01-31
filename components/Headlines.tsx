import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  background-color: black;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: inherit;
`;

const Text = styled.p`
  font-weight: 550;
  font-style: italic;
`;

function HeadlinesGrid({headlines}) {
  return (
    <div>
        {headlines.map((headline, index) => (
            <div key={index}>
            <h3>{headline.title}</h3>
            <p>{headline.description}</p>
            <a href={headline.url} target="_blank" rel="noopener noreferrer">
                <Button>Click to read more</Button>
            </a>
            <Text>From: {headline.source.name}</Text>
            <hr></hr>
            </div>
        ))}
    </div>
  );
}

export default HeadlinesGrid;

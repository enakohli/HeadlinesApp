import React from "react";

interface Headline {
  title: string;
  description: string;
  url: string;
  source: {
    name: string;
  };
}

interface HeadlinesProps {
  headlines: Headline[];
}

function HeadlinesGrid(props: HeadlinesProps) {
  const { headlines } = props;

  return (
    <div>
      <div>
        {headlines.map((headline, index) => (
          <div key={index}>
            <h3>{headline.title}</h3>
            <p>{headline.description}</p>
            <a href={headline.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <p>Source: {headline.source.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadlinesGrid;

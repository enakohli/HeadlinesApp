import React from 'react';
import { useLanguage } from './LanguageComponent';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: white;
  background-color: black;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  text-align: right;
  font-weight: bold;
`;
const Container = styled.div`
   text-align: right; 
   padding-right: 20px;
`;

const LanguageSelector: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <Container>
        <Button onClick={toggleLanguage}>
            {language === 'en' ? 'Français' : 'English'}
        </Button>
      </Container>
    </div>
  );
};

export default LanguageSelector;

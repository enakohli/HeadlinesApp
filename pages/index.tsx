import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadlinesGrid from '../components/Headlines';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgrey;
  padding-left: 20px;
  padding-top: 5px;
  border-radius: 5px;
`;

const Heading = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 25px;
`;

const InputField = styled.input`
  width: 200px;
  padding: 8px;
  box-sizing: border-box;
  margin: 5px 0;
  border: 0;
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
`;

const Button = styled.button`
  border: none;
  color: white;
  background-color: black;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
`;

const Select = styled.div`
  outline: 0;
  color: black;
  padding-right: 10px;
  text-align: right;
`;

const Label = styled.label`
  padding-right: 10px;
  font-weight: bold;
`;

const Dropdown = styled.select`
  margin-bottom: 10px;
  font-size: 14px;
  padding: 5px 5px 5px 5px;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: inherit;
`;

const HomePage = () => {
  const [language, setLanguage] = useState<string>('en');
  const [headlines, setHeadlines] = useState([]);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=a7426a23db4741169e99d5cda094ff44`
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };
    fetchHeadlines();
  }, [language]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Headlines - Main Page</title>
        <meta property="og:title" content="Headlines - Main Page" key="title"/>
      </Head>
      <Header/>
      <Heading>General</Heading>
      <Select>
        <Label htmlFor="language">Select Language:</Label>
        <Dropdown id="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </Dropdown>
      </Select>
      <hr></hr>
      <HeadlinesGrid headlines={headlines}/>
      <InputField
        type="text"
        value={categoryName}
        onChange={handleChange}
        placeholder="Please enter category name"
      />&nbsp;&nbsp;
      <Link href={`/category?name=${encodeURIComponent(categoryName)}`}>
        <Button>Go to Category Page</Button>
      </Link>
      <Footer/>
    </Container>
  );
};

export default HomePage;

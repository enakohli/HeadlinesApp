import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadlinesGrid from '../components/Headlines';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';
import { LanguageProvider } from '../components/LanguageComponent';
import LanguageSelector from '../components/LanguageSelector';

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

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?language=en&apiKey=a7426a23db4741169e99d5cda094ff44`
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };
    fetchHeadlines();
  }, []);

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  return (
    <LanguageProvider>
      <Container>
        <Head>
          <title>Headlines - Main Page</title>
          <meta property="og:title" content="Headlines - Main Page" key="title"/>
        </Head>
        <Header/>
        <Heading>General</Heading>
        <LanguageSelector/>
        <hr></hr>
        <main>
          <HeadlinesGrid headlines={headlines}/>
        </main>
        <InputField
          type="text"
          value={categoryName}
          onChange={handleCategoryNameChange}
          placeholder="Enter category name"
        />&nbsp;&nbsp;
        <Link href={`/category?name=${encodeURIComponent(categoryName)}`}>
          <Button>Go to Category Page</Button>
        </Link>
        <Footer/>
      </Container>
    </LanguageProvider>
  );
};

export default HomePage;

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadlinesGrid from '../components/Headlines';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
`;

const CategoryPage = () => {
  const router = useRouter();
  const categoryName = router.query.name as string;
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchCategoryHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?language=en&category=${categoryName}&apiKey=a7426a23db4741169e99d5cda094ff44`
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };
    fetchCategoryHeadlines();
  }, []);

  return (
    <Container>
      <Head>
        <title>Headlines - Category Page</title>
        <meta property="og:title" content="Category - Main Page" key="title" />
      </Head>
      <Header/>
      <Heading>Category: {categoryName}</Heading>
      <hr></hr>
      <main>
        <HeadlinesGrid headlines={headlines}/>
      </main>
      <Link href="/">
        <Button>Go to Main Page</Button>
      </Link>
      <Footer/>
    </Container>
  );
};

export default CategoryPage;

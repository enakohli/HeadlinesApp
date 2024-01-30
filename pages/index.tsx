import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadlinesGrid from '../components/Headlines';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
    <div>
      <Head>
        <title>Headlines - Main Page</title>
        <meta property="og:title" content="Headlines - Main Page" key="title" />
      </Head>
      <Header />
      <h2>General</h2>
      <main>
        <HeadlinesGrid headlines={headlines} />
      </main>
       <input
        type="text"
        value={categoryName}
        onChange={handleCategoryNameChange}
        placeholder="Enter category name"
      />
      <br></br>
      <br></br>
      <Link href={`/category?name=${encodeURIComponent(categoryName)}`}>
        Go to Category Page
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;

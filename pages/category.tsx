import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadlinesGrid from '../components/Headlines';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    <div>
      <Head>
        <title>Headlines - Category Page</title>
        <meta property="og:title" content="Category - Main Page" key="title" />
      </Head>
      <Header />
      <h2>Category: {categoryName}</h2>
      <main>
        <HeadlinesGrid headlines={headlines} />
      </main>
      <Link href="/">
        Go to Main Page
      </Link>
      <Footer />
    </div>
  );
};

export default CategoryPage;

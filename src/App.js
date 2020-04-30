import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=100f408c9e284473b34a7da7fc9c6397`;

      const response = await fetch(url);
      const data = await response.json();

      setNews(data.articles);

    };

    fetchData();

  }, [category])

  return (
    <>
    <Header title="Buscador de noticias" />

    <div className="container white">
      <Form
        setCategory={setCategory}
      />

      <NewsList 
      news={news}
      />
    </div>
    </>

  );
}

export default App;

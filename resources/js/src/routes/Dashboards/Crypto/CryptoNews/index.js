import React, { useEffect, useState } from 'react';

import Collapse from '@material-ui/core/Collapse';

import NewsDetail from './NewsDetail';
import NewsList from './NewsList';
import { crypto } from '../../../../@fake-db';

const { cryptoNews, newsCategories } = crypto;

const CryptoNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [categoryData, setCategoryData] = useState(cryptoNews);
  const [currentTab, setCurrentTab] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText('');
    setCategoryData(currentTab ? cryptoNews.filter(item => item.category === currentTab) : cryptoNews);
  }, [currentTab]);

  const onSearchText = e => {
    setSearchText(e.target.value);
  };

  const getFilteredData = () => {
    if (searchText) {
      return categoryData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else return categoryData;
  };

  const onNewsClick = news => setSelectedNews(news);

  const toggleFavorite = item => {
    item.favorite = !item.favorite;
    setCategoryData(cryptoNews => cryptoNews.map(news => (news.id === item.id ? item : news)));
  };

  const onBackClick = () => setSelectedNews(null);

  const data = getFilteredData();

  return (
    <React.Fragment>
      <Collapse in={selectedNews} timeout="auto" unmountOnExit>
        {selectedNews && (
          <NewsDetail selectedNews={selectedNews} onBackClick={onBackClick} toggleFavorite={toggleFavorite} />
        )}
      </Collapse>

      <Collapse in={!selectedNews} timeout="auto" unmountOnExit>
        <NewsList
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          onNewsClick={onNewsClick}
          data={data}
          newsCategories={newsCategories}
          searchText={searchText}
          onSearchText={onSearchText}
          toggleFavorite={toggleFavorite}
        />
      </Collapse>

      {/*{selectedNews ? (
        <NewsDetail selectedNews={selectedNews} onBackClick={onBackClick} toggleFavorite={toggleFavorite} />
      ) : (
        <NewsList
          getSelectedNews={getSelectedNews}
          onTabChange={onTabChange}
          data={data}
          newsCategories={newsCategories}
          searchText={searchText}
          onSearchText={onSearchText}
          toggleFavorite={toggleFavorite}
        />
      )}*/}
    </React.Fragment>
  );
};

export default CryptoNews;

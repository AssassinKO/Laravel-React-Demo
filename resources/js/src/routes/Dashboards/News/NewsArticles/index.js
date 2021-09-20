import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ArticlesGraph from './ArticlesGraph';
import StatisticsCardWithBg from '../../../../@jumbo/components/Common/StatisticsCardWithBg';

const NewsArticles = () => {
  return (
    <StatisticsCardWithBg
      backgroundColor="#00C4B4"
      icon={<BookmarkIcon style={{ color: '#fff' }} />}
      title="526"
      subTitle="News Articles">
      <ArticlesGraph />
    </StatisticsCardWithBg>
  );
};

export default NewsArticles;

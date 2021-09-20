import React from 'react';
import StatisticsModernCard from '../../../../@jumbo/components/Common/StatisticsModernCard';
import StarsIcon from '@material-ui/icons/Stars';
import AuthorsChart from './AuthorsChart';
import Box from '@material-ui/core/Box';

const NewAuthors = () => {
  return (
    <StatisticsModernCard
      backgroundColor="#E00930"
      titleIcon={<StarsIcon style={{ color: '#fff' }} />}
      title="232"
      subTitle="New Authors">
      <Box mt={-7.5}>
        <AuthorsChart />
      </Box>
    </StatisticsModernCard>
  );
};

export default NewAuthors;

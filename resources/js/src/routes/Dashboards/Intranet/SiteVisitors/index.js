import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtList from '../../../../@coremat/CmtList';

import GridContainer from '../../../../@jumbo/components/GridContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import VisitorChart from './VisitorChart';
import CountryListItem from './CountryCell';
import { intranet } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
}));

const SiteVisitors = () => {
  const classes = useStyles();
  const { siteVisitors } = intranet;
  const [country, setCountry] = useState(siteVisitors.countryList[0]);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={siteVisitors.title} subTitle={siteVisitors.description} />
      <CmtCardContent>
        <GridContainer>
          <Grid item xs={12} md={4}>
            <Box className={classes.textUppercase} fontSize={10} mb={2}>
              Countries
            </Box>

            <CmtList
              data={siteVisitors.countryList}
              renderRow={(item, index) => (
                <CountryListItem key={index} country={item} onClick={() => setCountry(item)} flagCode={country.flagCode} />
              )}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <VisitorChart data={country.data} color={country.badgeColor} chartGradientColor={country.chartGradientColor} />
          </Grid>
        </GridContainer>
      </CmtCardContent>
    </CmtCard>
  );
};

export default SiteVisitors;

import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CmtCard from '../../../../@coremat/CmtCard';
import { PageHeader } from '../index';
import GridContainer from '../../GridContainer';
import PageContainer from './PageContainer';

const CorematComponentDemo = ({ SourceCodeComponent, SettingsComponent, children }) => {
  return (
    <PageContainer>
      <GridContainer>
        <Grid item xs={12} md={7}>
          <PageHeader heading="Preview" />
          <Box mb={8}>{children}</Box>
          <CmtCard>{SourceCodeComponent}</CmtCard>
        </Grid>
        <Grid item xs={12} md={5}>
          {SettingsComponent}
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default CorematComponentDemo;

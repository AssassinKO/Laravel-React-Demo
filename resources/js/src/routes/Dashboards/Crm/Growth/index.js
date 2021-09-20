import React from 'react';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';

import GrowthGraph from './GrowthGraph';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  contentTitleRoot: {
    color: theme.palette.success.main,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 6,
    '& .MuiSvgIcon-root': {
      fontSize: 18,
      marginLeft: 8,
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  growthGraphRoot: {
    margin: '-37px -24px -24px -24px',
  },
}));

const Growth = () => {
  const classes = useStyles();
  return (
    <CmtAdvCard>
      <CmtCardHeader
        titleProps={{
          variant: 'h4',
          component: 'div',
        }}
        title={'Growth'}
      />
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        columnSizes={[4, 8]}
        title={
          <Typography component="div" variant="h3" className={classes.contentTitleRoot}>
            37% <ArrowUpwardIcon />
          </Typography>
        }
        subTitle={'This year'}
        subTitleProps={{
          variant: 'body2',
          component: 'p',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <div className={classes.growthGraphRoot}>
          <GrowthGraph />
        </div>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default Growth;

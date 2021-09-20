import React from 'react';
import Box from '@material-ui/core/Box';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../../@coremat/CmtSearch';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import PropertyTabs from './PropertyTabs';
import PropertiesDataList from './PropertiesDataList';
import Button from '@material-ui/core/Button';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    paddingBottom: 0,
    paddingTop: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 24,
        top: 5,
      },
    },
  },
  cardContentRoot: {
    padding: '0 !important',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    marginTop: -1,
  },
  scrollbarRoot: {
    height: 590,
    '& .CmtList-EmptyResult': {
      backgroundColor: 'transparent',
      border: '0 none',
    },
  },
  searchAction: {
    position: 'relative',
    width: 38,
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
    right: 0,
    top: 2,
    zIndex: 1,
  },
  btnRoot: {
    backgroundColor: theme.palette.lightBtn.bgColor,
    color: theme.palette.lightBtn.textColor,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 1.25,
    padding: '3px 10px',
    '&:hover, &:focus': {
      backgroundColor: alpha(theme.palette.lightBtn.bgColor, 0.8),
      color: theme.palette.lightBtn.textColor,
    },
  },
  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
    },
  },
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const PropertiesList = ({
  onPropertyClick,
  tabValue,
  onChangeTab,
  data,
  searchText,
  handleSearchTextChange,
  handlePageChange,
}) => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.headerRoot}
        title={
          <Box display="flex" alignItems={{ md: 'center' }} flexDirection={{ xs: 'column', md: 'row' }}>
            <Typography component="div" variant="h4" className={classes.titleRoot}>
              Properties
            </Typography>
            <PropertyTabs tabValue={tabValue} onChangeTab={onChangeTab} />
          </Box>
        }
        actionsPos="top-corner"
        actions={actions}>
        <Box className={classes.searchAction}>
          <Box className={classes.searchActionBar}>
            <CmtSearch onlyIcon border={false} value={searchText} onChange={handleSearchTextChange} />
          </Box>
        </Box>
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <PropertiesDataList data={data} onPropertyClick={onPropertyClick} />
          {data.length > 0 && (
            <Box p={6} textAlign="center">
              <Button className={classes.btnRoot} onClick={handlePageChange}>
                Load More
              </Button>
            </Box>
          )}
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PropertiesList;

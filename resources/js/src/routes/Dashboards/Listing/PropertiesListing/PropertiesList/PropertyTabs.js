import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { propertyTabCategories } from '../../../../../@fake-db';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tabsRoot: {
    position: 'relative',
    minHeight: 66,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
      },
    },
    '& .MuiTab-root': {
      maxWidth: 'none',
      minWidth: 10,
      fontSize: 12,
      minHeight: 66,
      letterSpacing: 1.5,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 10,
      },
    },
  },
}));

const PropertyTabs = ({ tabValue, onChangeTab }) => {
  const classes = useStyles();
  const a11yProps = index => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  };

  return (
    <Tabs
      value={tabValue}
      onChange={(e, newValue) => onChangeTab(newValue)}
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable auto tabs example"
      className={classes.tabsRoot}>
      <Tab key={0} label="All" value="" />
      {propertyTabCategories.map((tab, index) => {
        return <Tab key={index} label={tab.name} value={tab.slug} {...a11yProps(index)} />;
      })}
    </Tabs>
  );
};

export default PropertyTabs;

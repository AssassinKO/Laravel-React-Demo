import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tabsRoot: {
    position: 'relative',
    minHeight: 66,
    flex: 1,
    paddingRight: 10,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 10,
    },
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

const NewsTabs = ({ currentTab, setCurrentTab, newsCategories }) => {
  const classes = useStyles();

  const a11yProps = index => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  };

  const onTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Tabs
      value={currentTab}
      onChange={onTabChange}
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable auto tabs example"
      className={classes.tabsRoot}>
      <Tab key={0} label="All" value="" />
      {newsCategories.map((tab, index) => {
        return <Tab key={tab.id} label={tab.name} value={tab.slug} {...a11yProps(index)} />;
      })}
    </Tabs>
  );
};

export default NewsTabs;

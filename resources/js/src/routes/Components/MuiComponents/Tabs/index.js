import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleTabs from './demo/SimpleTabs';
import TabsWrappedLabel from './demo/TabsWrappedLabel';
import DisabledTabs from './demo/DisabledTabs';
import CenteredTabs from './demo/CenteredTabs';
import ScrollableTabsButtonAuto from './demo/ScrollableTabsButtonAuto';
import ScrollableTabsButtonForce from './demo/ScrollableTabsButtonForce';
import ScrollableTabsButtonPrevent from './demo/ScrollableTabsButtonPrevent';
import VerticalTabs from './demo/VerticalTabs';
import NavTabs from './demo/NavTabs';
import IconTabs from './demo/IconTabs';
import IconLabelTabs from './demo/IconLabelTabs';
import AccessibleTabs from './demo/AccessibleTabs';
import LabTabs from './demo/LabTabs';
import FullWidthTabs from './demo/FullWidthTabs';
import CustomizedTabs from './demo/CustomizedTabs';

const useStyles = makeStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/tabs', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Tabs',
    link: 'simple-tabs',
    component: <SimpleTabs />,
    filename: './SimpleTabs.txt',
  },
  {
    label: 'Wrapped Labels',
    link: 'wrapped-labels',
    component: <TabsWrappedLabel />,
    filename: './TabsWrappedLabel.txt',
  },
  {
    label: 'Disabled Tab',
    link: 'disabled-tab',
    component: <DisabledTabs />,
    filename: './DisabledTabs.txt',
  },
  {
    label: 'Full width',
    link: 'full-width',
    component: <FullWidthTabs />,
    filename: './FullWidthTabs.txt',
  },
  {
    label: 'Centered',
    link: 'centered',
    component: <CenteredTabs />,
    filename: './CenteredTabs.txt',
  },
  {
    label: 'Automatic Scroll Buttons',
    link: 'automatic-scroll-buttons',
    component: <ScrollableTabsButtonAuto />,
    filename: './ScrollableTabsButtonAuto.txt',
  },
  {
    label: 'Forced Scroll Buttons',
    link: 'forced-scroll-buttons',
    component: <ScrollableTabsButtonForce />,
    filename: './ScrollableTabsButtonForce.txt',
  },
  {
    label: 'Prevent Scroll Buttons',
    link: 'prevent-scroll-buttons',
    component: <ScrollableTabsButtonPrevent />,
    filename: './ScrollableTabsButtonPrevent.txt',
  },
  {
    label: 'Customized tabs',
    link: 'customized-tabs',
    component: <CustomizedTabs />,
    filename: './CustomizedTabs.txt',
  },
  {
    label: 'Vertical tabs',
    link: 'vertical-tabs',
    component: <VerticalTabs />,
    filename: './VerticalTabs.txt',
  },
  {
    label: 'Nav Tabs',
    link: 'nav-tabs',
    component: <NavTabs />,
    filename: './NavTabs.txt',
  },
  {
    label: 'Icon Tabs',
    link: 'icon-tabs',
    component: <IconTabs />,
    filename: './IconTabs.txt',
  },
  {
    label: 'Icon Tabs with label',
    link: 'icon-tabs-with-label',
    component: <IconLabelTabs />,
    filename: './IconLabelTabs.txt',
  },
  {
    label: 'Accessibility',
    link: 'accessibility',
    component: <AccessibleTabs />,
    filename: './AccessibleTabs.txt',
  },
  {
    label: 'Experimental API',
    link: 'experimental-api',
    component: <LabTabs />,
    filename: './LabTabs.txt',
  },
];

export default function Tabs() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Tabs" menus={demos}>
      {demos.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard code={requireRaw(menu.filename).default} language="jsx">
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
    </MuiComponentDemo>
  );
}

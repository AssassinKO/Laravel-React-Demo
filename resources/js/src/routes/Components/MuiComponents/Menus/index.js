import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleMenu from './demo/SimpleMenu';
import SimpleListMenu from './demo/SimpleListMenu';
import MenuListComposition from './demo/MenuListComposition';
import CustomizedMenus from './demo/CustomizedMenus';
import LongMenu from './demo/LongMenu';
import TypographyMenu from './demo/TypographyMenu';
import FadeMenu from './demo/FadeMenu';
import ContextMenu from './demo/ContextMenu';
import MenuPopupState from './demo/MenuPopupState';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/menus', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Menu',
    link: 'simple-menu',
    component: <SimpleMenu />,
    filename: './SimpleMenu.txt',
  },
  {
    label: 'Selected menus',
    link: 'selected-menus',
    component: <SimpleListMenu />,
    filename: './SimpleListMenu.txt',
  },
  {
    label: 'MenuList composition',
    link: 'menu-list-composition',
    component: <MenuListComposition />,
    filename: './MenuListComposition.txt',
  },
  {
    label: 'Customized menus',
    link: 'customized-menus',
    component: <CustomizedMenus />,
    filename: './CustomizedMenus.txt',
  },
  {
    label: 'Max height menus',
    link: 'max-height-menus',
    component: <LongMenu />,
    filename: './LongMenu.txt',
  },
  {
    label: 'Limitations',
    link: 'limitations',
    component: <TypographyMenu />,
    filename: './TypographyMenu.txt',
  },
  {
    label: 'Change transition',
    link: 'change-transition',
    component: <FadeMenu />,
    filename: './FadeMenu.txt',
  },
  {
    label: 'Context menu',
    link: 'context-menu',
    component: <ContextMenu />,
    filename: './ContextMenu.txt',
  },
  {
    label: 'PopupState helper',
    link: 'popup-state-helper',
    component: <MenuPopupState />,
    filename: './MenuPopupState.txt',
  },
];

export default function Menus() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Menus" menus={demos}>
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

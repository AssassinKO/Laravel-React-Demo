import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FloatingActionButtons from './demos/FloatingActionButtons';
import FloatingActionButtonSize from './demos/FloatingActionButtonSize';
import FloatingActionButtonZoom from './demos/FloatingActionButtonZoom';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';

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

const requireRaw = require.context(
  '!raw-loader!../../../../@fake-db/mui-components/floating-action-button',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Floating Action Button',
    link: 'floating-action-button',
    component: <FloatingActionButtons />,
    filename: './FloatingActionButtons.txt',
  },
  {
    label: 'Size',
    link: 'size',
    component: <FloatingActionButtonSize />,
    filename: './FloatingActionButtonSize.txt',
  },
  {
    label: 'Animation',
    link: 'animation',
    component: <FloatingActionButtonZoom />,
    filename: './FloatingActionButtonZoom.txt',
  },
];
export default function FloatingActionButton() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Floating action button" menus={demos}>
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

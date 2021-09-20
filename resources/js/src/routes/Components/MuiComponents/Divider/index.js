import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ListDividers from './demo/ListDividers';
import InsetDividers from './demo/InsetDividers';
import SubheaderDividers from './demo/SubheaderDividers';
import MiddleDividers from './demo/MiddleDividers';
import VerticalDividers from './demo/VerticalDividers';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/divider', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'List Dividers',
    link: 'list-dividers',
    component: <ListDividers />,
    filename: './ListDividers.txt',
  },
  {
    label: 'Inset Dividers',
    link: 'inset-dividers',
    component: <InsetDividers />,
    filename: './InsetDividers.txt',
  },
  {
    label: 'Subheader Dividers',
    link: 'subheader-dividers',
    component: <SubheaderDividers />,
    filename: './SubheaderDividers.txt',
  },
  {
    label: 'Middle Dividers',
    link: 'middle-dividers',
    component: <MiddleDividers />,
    filename: './MiddleDividers.txt',
  },
  {
    label: 'Vertical Dividers',
    link: 'vertical-dividers',
    component: <VerticalDividers />,
    filename: './VerticalDividers.txt',
  },
];

export default function Divider() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Divider" menus={demos}>
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

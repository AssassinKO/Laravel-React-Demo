import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import Chips from './demo/Chips';
import OutlinedChips from './demo/OutlinedChips';
import SmallOutlinedChips from './demo/SmallOutlinedChips';
import SmallChips from './demo/SmallChips';
import ChipsArray from './demo/ChipsArray';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/chip', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Chips',
    link: 'chips',
    component: <Chips />,
    filename: './Chips.txt',
  },
  {
    label: 'Outlined Chips',
    link: 'outlined-chips',
    component: <OutlinedChips />,
    filename: './OutlinedChips.txt',
  },
  {
    label: 'Chip array',
    link: 'chip-array',
    component: <ChipsArray />,
    filename: './ChipsArray.txt',
  },
  {
    label: 'Small chip default variant',
    link: 'small-chip-default-variant',
    component: <SmallChips />,
    filename: './SmallChips.txt',
  },
  {
    label: 'Small chip outlined variant',
    link: 'small-chip-outlined-variant',
    component: <SmallOutlinedChips />,
    filename: './SmallChips.txt',
  },
];

export default function Chip() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Chip" menus={demos}>
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

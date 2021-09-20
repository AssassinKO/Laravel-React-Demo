import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import EmptyTextarea from './demo/EmptyTextarea';
import MinHeightTextarea from './demo/MinHeightTextarea';
import MaxHeightTextarea from './demo/MaxHeightTextarea';

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
  '!raw-loader!../../../../@fake-db/mui-components/textarea-autosize',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Empty',
    link: 'empty',
    component: <EmptyTextarea />,
    filename: './EmptyTextarea.txt',
  },
  {
    label: 'Minimum height',
    link: 'minimum-height',
    component: <MinHeightTextarea />,
    filename: './MinHeightTextarea.txt',
  },
  {
    label: 'Maximum height',
    link: 'maximum-height',
    component: <MaxHeightTextarea />,
    filename: './MaxHeightTextarea.txt',
  },
];

export default function TextareaAutosize() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Textarea Autosize" menus={demos}>
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

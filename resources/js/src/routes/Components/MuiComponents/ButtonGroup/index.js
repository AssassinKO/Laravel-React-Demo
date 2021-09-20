import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DisableElevation from './demos/DisableElevation';
import BasicButtonGroup from './demos/BasicButtonGroup';
import GroupSizesColors from './demos/GroupSizesColors';
import GroupOrientation from './demos/GroupOrientation';
import SplitButton from './demos/SplitButton';
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
  '!raw-loader!../../../../@fake-db/mui-components/button-group',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Basic button group',
    link: 'basic-button-group',
    component: <BasicButtonGroup />,
    filename: './BasicButtonGroup.txt',
  },
  {
    label: 'Sizes and colors',
    link: 'sizes-and-colors',
    component: <GroupSizesColors />,
    filename: './GroupSizesColors.txt',
  },
  {
    label: 'Vertical group',
    link: 'vertical-group',
    component: <GroupOrientation />,
    filename: './GroupOrientation.txt',
  },
  {
    label: 'Split button',
    link: 'split-button',
    component: <SplitButton />,
    filename: './SplitButton.txt',
  },
  {
    label: 'Disabled elevation',
    link: 'disabled-elevation',
    component: <DisableElevation />,
    filename: './DisableElevation.txt',
  },
];

export default function ButtonGroup() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Button group" menus={demos}>
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

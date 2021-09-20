import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleBadge from './demo/SimpleBadge';
import CustomizedBadges from './demo/CustomizedBadges';
import ShowZeroBadge from './demo/ShowZeroBadge';
import BadgeMax from './demo/BadgeMax';
import DotBadge from './demo/DotBadge';
import BadgeOverlap from './demo/BadgeOverlap';
import BadgeAlignment from './demo/BadgeAlignment';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/badge', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic badges',
    link: 'basic-badges',
    component: <SimpleBadge />,
    filename: './SimpleBadge.txt',
  },
  {
    label: 'Customized badges',
    link: 'customized-badges',
    component: <CustomizedBadges />,
    filename: './CustomizedBadges.txt',
  },
  {
    label: 'Badge visibility',
    link: 'badge-visibility',
    component: <CustomizedBadges />,
    filename: './CustomizedBadges.txt',
  },
  {
    label: 'Show Zero Badge',
    link: 'show-zero-badge',
    component: <ShowZeroBadge />,
    filename: './ShowZeroBadge.txt',
  },
  {
    label: 'Maximum value',
    link: 'maximum-value',
    component: <BadgeMax />,
    filename: './BadgeMax.txt',
  },
  {
    label: 'Dot badge',
    link: 'Dot badge',
    component: <DotBadge />,
    filename: './DotBadge.txt',
  },
  {
    label: 'Badge overlap',
    link: 'badge-overlap',
    component: <BadgeOverlap />,
    filename: './BadgeOverlap.txt',
  },
  {
    label: 'Badge alignment',
    link: 'badge-alignment',
    component: <BadgeAlignment />,
    filename: './BadgeAlignment.txt',
  },
];

export default function Badge() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Badge" menus={demos}>
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

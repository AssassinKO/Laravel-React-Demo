import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ImageAvatars from './demo/ImageAvatars';
import LetterAvatars from './demo/LetterAvatars';
import SizeAvatars from './demo/SizeAvatars';
import IconAvatars from './demo/IconAvatars';
import VariantAvatars from './demo/VariantAvatars';
import FallbackAvatars from './demo/FallbackAvatars';
import GroupAvatars from './demo/GroupAvatars';
import BadgeAvatars from './demo/BadgeAvatars';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/avatar', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Image avatars',
    link: 'image-avatars',
    component: <ImageAvatars />,
    filename: './ImageAvatars.txt',
  },
  {
    label: 'Letter avatars',
    link: 'letter-avatars',
    component: <LetterAvatars />,
    filename: './LetterAvatars.txt',
  },
  {
    label: 'Letter avatars',
    link: 'letter-avatars',
    component: <SizeAvatars />,
    filename: './SizeAvatars.txt',
  },
  {
    label: 'Icon Avatars',
    link: 'icon-avatars',
    component: <IconAvatars />,
    filename: './IconAvatars.txt',
  },
  {
    label: 'Variants',
    link: 'variants',
    component: <VariantAvatars />,
    filename: './VariantAvatars.txt',
  },
  {
    label: 'Fallbacks',
    link: 'fallbacks',
    component: <FallbackAvatars />,
    filename: './FallbackAvatars.txt',
  },
  {
    label: 'Grouped',
    link: 'grouped',
    component: <GroupAvatars />,
    filename: './GroupAvatars.txt',
  },
  {
    label: 'With badge',
    link: 'with-badge',
    component: <BadgeAvatars />,
    filename: './BadgeAvatars.txt',
  },
];

export default function Avatar() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Avatar" menus={demos}>
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

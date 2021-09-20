import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import ContainedButtons from './demos/ContainedButtons';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextButtons from './demos/TextButtons';
import OutlinedButtons from './demos/OutlinedButtons';
import UploadButtons from './demos/UploadButtons';
import ButtonSizes from './demos/ButtonSizes';
import IconLabelButtons from './demos/IconLabelButtons';
import IconButtons from './demos/IconButtons';
import CustomizedButtons from './demos/CustomizedButtons';
import ComplexButtons from './demos/ComplexButtons';
import DisableElevation from './demos/DisableElevation';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/buttons', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Contained Buttons',
    link: 'contained-buttons',
    component: <ContainedButtons />,
    filename: './ContainedButtons.txt',
  },
  {
    label: 'DisableElevation',
    link: 'disable-elevation',
    component: <DisableElevation />,
    filename: './DisableElevation.txt',
  },
  {
    label: 'Text Buttons',
    link: 'text-buttons',
    component: <TextButtons />,
    filename: './TextButtons.txt',
  },
  {
    label: 'Outlined Buttons',
    link: 'outlined-buttons',
    component: <OutlinedButtons />,
    filename: './OutlinedButtons.txt',
  },
  {
    label: 'Upload Buttons',
    link: 'upload-buttons',
    component: <UploadButtons />,
    filename: './UploadButtons.txt',
  },
  {
    label: 'Sizes Buttons',
    link: 'sizes-buttons',
    component: <ButtonSizes />,
    filename: './ButtonSizes.txt',
  },
  {
    label: 'Buttons with icons and label',
    link: 'buttons-with-icons-and-label',
    component: <IconLabelButtons />,
    filename: './IconLabelButtons.txt',
  },
  {
    label: 'Icon Buttons',
    link: 'icon-buttons',
    component: <IconButtons />,
    filename: './IconButtons.txt',
  },
  {
    label: 'Customized buttons',
    link: 'customized-buttons',
    component: <CustomizedButtons />,
    filename: './CustomizedButtons.txt',
  },
  {
    label: 'Complex Buttons',
    link: 'complex-buttons',
    component: <ComplexButtons />,
    filename: './ComplexButtons.txt',
  },
];

export default function Buttons() {
  const classes = useStyles();

  return (
    <MuiComponentDemo pageTitle="Buttons" menus={demos}>
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

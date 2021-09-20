import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RadioButtons from './demos/RadioButtons';
import RadioButtonsGroup from './demos/RadioButtonsGroup';
import FormControlLabelPlacement from './demos/FormControlLabelPlacement';
import ErrorRadios from './demos/ErrorRadios';
import CustomizedRadios from './demos/CustomizedRadios';
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
  '!raw-loader!../../../../@fake-db/mui-components/radio-button',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'RadioGroup',
    link: 'radio-group',
    component: <RadioButtonsGroup />,
    filename: './RadioButtonsGroup.txt',
  },
  {
    label: 'Standalone radio buttons',
    link: 'standalone-radio-buttons',
    component: <RadioButtons />,
    filename: './RadioButtons.txt',
  },
  {
    label: 'Label placement',
    link: 'label-placement',
    component: <FormControlLabelPlacement />,
    filename: './FormControlLabelPlacement.txt',
  },
  {
    label: 'Show error',
    link: 'show-error',
    component: <ErrorRadios />,
    filename: './ErrorRadios.txt',
  },
  {
    label: 'Customized radios',
    link: 'customized-radios',
    component: <CustomizedRadios />,
    filename: './CustomizedRadios.txt',
  },
];
export default function RadioButton() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Radio" menus={demos}>
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

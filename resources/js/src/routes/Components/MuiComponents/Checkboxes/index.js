import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Checkboxes from './demos/Checkboxes';
import CheckboxLabels from './demos/CheckboxLabels';
import CheckboxesGroup from './demos/CheckboxesGroup';
import FormControlLabelPosition from './demos/FormControlLabelPosition';
import CustomizedCheckbox from './demos/CustomizedCheckbox';
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
  '!raw-loader!../../../../@fake-db/mui-components/checkboxes',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Basic checkboxes',
    link: 'basic-checkboxes',
    component: <Checkboxes />,
    filename: './Checkboxes.txt',
  },
  {
    label: 'Checkbox with FormControlLabel',
    link: 'checkbox-with-form-control-label',
    component: <CheckboxLabels />,
    filename: './CheckboxLabels.txt',
  },
  {
    label: 'Checkboxes with FormGroup',
    link: 'checkboxes-with-form-group',
    component: <CheckboxesGroup />,
    filename: './CheckboxesGroup.txt',
  },
  {
    label: 'Label placement',
    link: 'label-placement',
    component: <FormControlLabelPosition />,
    filename: './FormControlLabelPosition.txt',
  },
  {
    label: 'Customized checkbox',
    link: 'customized-checkbox',
    component: <CustomizedCheckbox />,
    filename: './CustomizedCheckbox.txt',
  },
];

export default function CheckBoxes() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Checkbox" menus={demos}>
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

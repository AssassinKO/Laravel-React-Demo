import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import BasicTextFields from './demos/BasicTextFields';
import FormPropsTextFields from './demos/FormPropsTextFields';
import ValidationTextFields from './demos/ValidationTextFields';
import MultilineTextFields from './demos/MultilineTextFields';
import InputWithIcon from './demos/InputWithIcon';
import InputAdornments from './demos/InputAdornments';
import TextFieldSizes from './demos/TextFieldSizes';
import LayoutTextFields from './demos/LayoutTextFields';
import StateTextFields from './demos/StateTextFields';
import ComposedTextField from './demos/ComposedTextField';
import Inputs from './demos/Inputs';
import ColorTextFields from './demos/ColorTextFields';
import CustomizedInputs from './demos/CustomizedInputs';
import CustomizedInputBase from './demos/CustomizedInputBase';
import FormattedInputs from './demos/FormattedInputs';
import SelectTextFields from './demos/SelectTextFields';

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
  '!raw-loader!../../../../@fake-db/mui-components/text-fields',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Basic TextFields',
    link: 'basic-text-fields',
    component: <BasicTextFields />,
    filename: './BasicTextFields.txt',
  },
  {
    label: 'Form props',
    link: 'form-props',
    component: <FormPropsTextFields />,
    filename: './FormPropsTextFields.txt',
  },
  {
    label: 'Validation',
    link: 'validation',
    component: <ValidationTextFields />,
    filename: './ValidationTextFields.txt',
  },
  {
    label: 'Multiline',
    link: 'multiline',
    component: <MultilineTextFields />,
    filename: './MultilineTextFields.txt',
  },
  {
    label: 'Select',
    link: 'select',
    component: <SelectTextFields />,
    filename: './SelectTextFields.txt',
  },
  {
    label: 'Icons',
    link: 'icons',
    component: <InputWithIcon />,
    filename: './InputWithIcon.txt',
  },
  {
    label: 'Input Adornments',
    link: 'input-adornments',
    component: <InputAdornments />,
    filename: './InputWithIcon.txt',
  },
  {
    label: 'Sizes',
    link: 'sizes',
    component: <TextFieldSizes />,
    filename: './TextFieldSizes.txt',
  },
  {
    label: 'Layout',
    link: 'Layout',
    component: <LayoutTextFields />,
    filename: './LayoutTextFields.txt',
  },
  {
    label: 'Uncontrolled vs Controlled',
    link: 'uncontrolled-vs-controlled',
    component: <StateTextFields />,
    filename: './StateTextFields.txt',
  },
  {
    label: 'Components',
    link: 'components',
    component: <ComposedTextField />,
    filename: './ComposedTextField.txt',
  },
  {
    label: 'Inputs',
    link: 'inputs',
    component: <Inputs />,
    filename: './Inputs.txt',
  },
  {
    label: 'Color',
    link: 'color',
    component: <ColorTextFields />,
    filename: './ColorTextFields.txt',
  },
  {
    label: 'Customized inputs',
    link: 'customized-inputs',
    component: <CustomizedInputs />,
    filename: './CustomizedInputs.txt',
  },
  {
    label: 'Customized input base',
    link: 'customized-input-base',
    component: <CustomizedInputBase />,
    filename: './CustomizedInputBase.txt',
  },
  {
    label: 'Integration with 3rd party input libraries',
    link: 'integration-with-3rd-party-input-libraries',
    component: <FormattedInputs />,
    filename: './FormattedInputs.txt',
  },
];

export default function TextFields() {
  const classes = useStyles();

  return (
    <MuiComponentDemo pageTitle="Text Fields" menus={demos}>
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

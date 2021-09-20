import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import HorizontalLinearStepper from './demo/HorizontalLinearStepper';
import HorizontalLabelPositionBelowStepper from './demo/HorizontalLabelPositionBelowStepper';
import CustomizedSteppers from './demo/CustomizedSteppers';
import HorizontalNonLinearStepper from './demo/HorizontalNonLinearStepper';
import HorizontalNonLinearAlternativeLabelStepper from './demo/HorizontalNonLinearAlternativeLabelStepper';
import HorizontalNonLinearStepperWithError from './demo/HorizontalNonLinearStepperWithError';
import VerticalLinearStepper from './demo/VerticalLinearStepper';
import TextMobileStepper from './demo/TextMobileStepper';
import SwipeableTextMobileStepper from './demo/SwipeableTextMobileStepper';
import DotsMobileStepper from './demo/DotsMobileStepper';
import ProgressMobileStepper from './demo/ProgressMobileStepper';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/stepper', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Linear',
    link: 'linear',
    component: <HorizontalLinearStepper />,
    filename: './HorizontalLinearStepper.txt',
  },
  {
    label: 'Linear - Alternative Label',
    link: 'linear-alternative-label',
    component: <HorizontalLabelPositionBelowStepper />,
    filename: './HorizontalLabelPositionBelowStepper.txt',
  },
  {
    label: 'Customized Stepper',
    link: 'customized-stepper',
    component: <CustomizedSteppers />,
    filename: './CustomizedSteppers.txt',
  },
  {
    label: 'Non-linear',
    link: 'non-linear',
    component: <HorizontalNonLinearStepper />,
    filename: './HorizontalNonLinearStepper.txt',
  },
  {
    label: 'Non-linear - Alternative Label',
    link: 'non-linear-alternative-label',
    component: <HorizontalNonLinearAlternativeLabelStepper />,
    filename: './HorizontalNonLinearAlternativeLabelStepper.txt',
  },
  {
    label: 'Non-linear - Error Step',
    link: 'non-linear-error-step',
    component: <HorizontalNonLinearStepperWithError />,
    filename: './HorizontalNonLinearStepperWithError.txt',
  },
  {
    label: 'Vertical Stepper',
    link: 'vertical-stepper',
    component: <VerticalLinearStepper />,
    filename: './VerticalLinearStepper.txt',
  },
  {
    label: 'Text',
    link: 'text',
    component: <TextMobileStepper />,
    filename: './TextMobileStepper.txt',
  },
  {
    label: 'Text with Carousel effect',
    link: 'text-with-carousel-effect',
    component: <SwipeableTextMobileStepper />,
    filename: './SwipeableTextMobileStepper.txt',
  },
  {
    label: 'Dots',
    link: 'dots',
    component: <DotsMobileStepper />,
    filename: './DotsMobileStepper.txt',
  },
  {
    label: 'Progress',
    link: 'progress',
    component: <ProgressMobileStepper />,
    filename: './ProgressMobileStepper.txt',
  },
];

export default function Stepper() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Stepper" menus={demos}>
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

import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ContinuousSlider from './demos/ContinuousSlider';
import DiscreteSlider from './demos/DiscreteSlider';
import DiscreteSliderSmall from './demos/DiscreteSliderSmall';
import DiscreteSliderMarkers from './demos/DiscreteSliderMarks';
import DiscreteSliderValues from './demos/DiscreteSliderValues';
import DiscreteSliderLabel from './demos/DiscreteSliderLabel';
import RangeSlider from './demos/RangeSlider';
import InputSlider from './demos/InputSlider';
import CustomizedSlider from './demos/CustomizedSlider';
import VerticalSlider from './demos/VerticalSlider';
import TrackFalseSlider from './demos/TrackFalseSlider';
import TrackInvertedSlider from './demos/TrackInvertedSlider';
import NonLinearSlider from './demos/NonLinearSlider';
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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/slider', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Continuous sliders',
    link: 'continuous-sliders',
    component: <ContinuousSlider />,
    filename: './ContinuousSlider.txt',
  },
  {
    label: 'Discrete sliders',
    link: 'discrete-sliders',
    component: <DiscreteSlider />,
    filename: './DiscreteSlider.txt',
  },
  {
    label: 'Small steps',
    link: 'small-steps',
    component: <DiscreteSliderSmall />,
    filename: './DiscreteSliderSmall.txt',
  },
  {
    label: 'Custom marks',
    link: 'custom-marks',
    component: <DiscreteSliderMarkers />,
    filename: './DiscreteSliderMarks.txt',
  },
  {
    label: 'Restricted values',
    link: 'restricted-values',
    component: <DiscreteSliderValues />,
    filename: './DiscreteSliderValues.txt',
  },
  {
    label: 'Label always visible',
    link: 'label-always-visible',
    component: <DiscreteSliderLabel />,
    filename: './DiscreteSliderLabel.txt',
  },
  {
    label: 'Range slider',
    link: 'range-slider',
    component: <RangeSlider />,
    filename: './RangeSlider.txt',
  },
  {
    label: 'Slider with input field',
    link: 'slider-with-input-field',
    component: <InputSlider />,
    filename: './InputSlider.txt',
  },
  {
    label: 'customized-sliders',
    link: 'customized-sliders',
    component: <CustomizedSlider />,
    filename: './CustomizedSlider.txt',
  },
  {
    label: 'Vertical sliders',
    link: 'vertical-sliders',
    component: <VerticalSlider />,
    filename: './VerticalSlider.txt',
  },
  {
    label: 'Removed track',
    link: 'removed-track',
    component: <TrackFalseSlider />,
    filename: './TrackFalseSlider.txt',
  },
  {
    label: 'Inverted track',
    link: 'inverted-track',
    component: <TrackInvertedSlider />,
    filename: './TrackInvertedSlider.txt',
  },
  {
    label: 'Non-linear scale',
    link: 'non-linear-scale',
    component: <NonLinearSlider />,
    filename: './NonLinearSlider.txt',
  },
];
export default function Slider() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Slider" menus={demos}>
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

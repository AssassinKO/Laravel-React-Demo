import React from 'react';
import Badge from '@material-ui/core/Badge';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';
import { HighlightedCode } from '../../../../../@jumbo/components/Common';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(6),
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(4),
  },
}));

export default function BadgeAlignment() {
  const classes = useStyles();
  const [horizontal, setHorizontal] = React.useState('right');
  const [vertical, setVertical] = React.useState('top');

  const handleHorizontalChange = event => {
    setHorizontal(event.target.value);
  };

  const handleVerticalChange = event => {
    setVertical(event.target.value);
  };

  const jsx = `
<Badge
  anchorOrigin={{
    vertical: '${vertical}',
    horizontal: '${horizontal}',
  }}
>
`;

  return (
    <Box className={classes.root}>
      <Box className={classes.row}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Vertical</FormLabel>
          <RadioGroup name="vertical" value={vertical} onChange={handleVerticalChange}>
            <FormControlLabel value="top" control={<Radio />} label="Top" />
            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Horizontal</FormLabel>
          <RadioGroup name="horizontal" value={horizontal} onChange={handleHorizontalChange}>
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className={classes.row}>
        <Badge
          color="secondary"
          variant="dot"
          badgeContent={1}
          anchorOrigin={{
            horizontal,
            vertical,
          }}
          className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge
          color="secondary"
          badgeContent={1}
          anchorOrigin={{
            horizontal,
            vertical,
          }}
          className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge
          color="secondary"
          badgeContent={12}
          anchorOrigin={{
            horizontal,
            vertical,
          }}
          className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge
          color="secondary"
          badgeContent={123}
          anchorOrigin={{
            horizontal,
            vertical,
          }}
          className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge
          color="secondary"
          max={999}
          badgeContent={1337}
          anchorOrigin={{
            horizontal,
            vertical,
          }}
          className={classes.margin}>
          <MailIcon />
        </Badge>
      </Box>
      <HighlightedCode code={jsx} language="jsx" />
    </Box>
  );
}

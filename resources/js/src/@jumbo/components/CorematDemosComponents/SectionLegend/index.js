import React from 'react';
import { Box } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  legendRoot: {
    fontSize: 10,
    color: theme.palette.text.disabled,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    position: 'relative',
    marginBottom: 10,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      width: '100%',
      height: 1,
      backgroundColor: alpha(theme.palette.common.dark, 0.12),
    },
    '& span': {
      backgroundColor: theme.palette.background.paper,
      display: 'inline-block',
      position: 'relative',
      zIndex: 1,
      paddingRight: 10,
    },
  },
}));

const SectionLegend = ({ title, children, displayAsColumn, ...rest }) => {
  const classes = useStyles();

  return (
    <Box color="text.secondary" mb={2} width="100%" {...rest}>
      {title && (
        <Box component="legend" className={classes.legendRoot}>
          <Box component="span">{title}</Box>
        </Box>
      )}
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems={displayAsColumn ? 'flex-start' : 'center'}
        flexDirection={displayAsColumn ? 'column' : 'row'}>
        {children}
      </Box>
    </Box>
  );
};

export default SectionLegend;

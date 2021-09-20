import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme => ({
  AccordionRoot: {
    margin: '0 -16px !important',
    paddingLeft: 16,
    paddingRight: 16,
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary-content': {
      marginBottom: 24,
    },
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
      marginBottom: '24px !important',
    },
    '&:last-child .MuiAccordionSummary-content': {
      marginBottom: 0,
      '&.Mui-expanded': {
        marginBottom: 24,
      },
    },
  },
  AccordionSummaryRoot: {
    padding: 0,
    minHeight: '10px !important',
    '& .Mui-expanded, & .MuiAccordionSummary-content': {
      marginTop: 0,
    },
  },
  expandSummaryText: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: 12,
    },
  },
  AccordionDetailsRoot: {
    padding: 0,
  },
}));

const CollapsibleSection = ({ heading, open, children }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(open);

  const onAccordionClick = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion className={classes.AccordionRoot} square expanded={expanded} onChange={onAccordionClick}>
      <AccordionSummary className={classes.AccordionSummaryRoot}>
        <Typography className={classes.expandSummaryText}>
          {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.AccordionDetailsRoot}>
        <Box pl={5} width="100%">
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapsibleSection;

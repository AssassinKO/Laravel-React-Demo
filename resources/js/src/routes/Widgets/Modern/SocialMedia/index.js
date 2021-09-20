import React from 'react';
import Button from '@material-ui/core/Button';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Box } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  btnGroupRoot: {
    '& button': {
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}));

const SocialMedia = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box mb={5} fontSize={10} color="text.secondary" component="span" className={classes.textUppercase}>
          Social Media
        </Box>
        <Typography component="div" variant="h2">
          Digital Media Marketing Online Webbinar
        </Typography>
        <Box component="p" color="text.secondary" mt={4} mb={{ xs: 5, xl: 7 }}>
          27th Aug, 09:30 pm EST
        </Box>
        <Box component="p" color="text.secondary" mb={{ xs: 5, xl: 7 }}>
          Learn from experts. This webinar explains right..
        </Box>
        <Box mt="auto">
          <Box component="p" mb={4}>
            Are You ready to join?
          </Box>
          <ButtonGroup className={classes.btnGroupRoot} color="primary" aria-label="outlined primary button group">
            <Button>Yes</Button>
            <Button>May be</Button>
            <Button>No</Button>
          </ButtonGroup>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default SocialMedia;

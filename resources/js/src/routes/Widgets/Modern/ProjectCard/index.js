import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtImage from '../../../../@coremat/CmtImage';
import { Box, Button } from '@material-ui/core';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const actions = [
  {
    icon: 'info',
    label: 'More Detail',
  },
  {
    icon: 'close',
    label: 'Close',
  },
];

const avatars = [
  {
    title: 'info',
    src: 'https://via.placeholder.com/150',
  },
  {
    title: 'info',
    src: 'https://via.placeholder.com/150',
  },
  {
    title: 'info',
    src: 'https://via.placeholder.com/150',
  },
  {
    title: 'info',
    src: 'https://via.placeholder.com/150',
  },
];

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .Cmt-header-root': {
      paddingTop: 20,
    },
  },
  userTitle: {
    marginBottom: 16,
    [theme.breakpoints.up('sm')]: {
      marginBottom: 24,
    },
  },
  progressBarRoot: {
    marginBottom: 16,
    '& .Cmt-fill-progress': {
      backgroundColor: `${theme.palette.success.main} !important`,
    },
    '& .Cmt-label-container': {
      color: theme.palette.text.disabled,
      fontSize: 12,
      letterSpacing: 0.4,
    },
  },
}));

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Project Widget" actions={actions} />
      <Box flex={1} ali="center" display="flex" flexDirection="column">
        <Box mb={2} display="flex" alignItems="center" flexDirection="column" justifyContent="center">
          <Box mb={{ xs: 4, xl: 6 }}>
            <CmtImage src={'/images/dashboard/icon-german.png'} alt="logo" />
          </Box>

          <Typography component="div" variant="h4" className={classes.userTitle}>
            Eagal Hunt App
          </Typography>

          <Box mb={{ xs: 5, xl: 8 }}>
            <CmtAvatarGroup avatarSize={24} spacing items={avatars} />
          </Box>

          <Box className={classes.progressBarRoot}>
            <CmtProgressBar value={40} label="12/45 Task completed" labelPos="bottom-center" />
          </Box>
        </Box>
        <Box mt="auto" width={1}>
          <Button color="primary" variant="contained" fullWidth>
            Go to project
          </Button>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default ProjectCard;

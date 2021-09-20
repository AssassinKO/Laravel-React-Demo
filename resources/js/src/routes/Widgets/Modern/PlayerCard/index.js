import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .Cmt-card-content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      [theme.breakpoints.up('xl')]: {
        padding: 21,
      },
    },
  },
  avatarRoot: {
    position: 'relative',
    width: 52,
    height: 52,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: alpha(theme.palette.common.dark, 0.35),
      borderRadius: '50%',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: -8,
      top: -8,
      zIndex: 1,
      width: 68,
      height: 68,
      border: `solid 3px ${theme.palette.borderColor.main}`,
      borderRadius: '50%',
    },
  },
  iconBtn: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    padding: 5,
  },
}));

const PlayerCard = () => {
  const classes = useStyles();
  const [isPlaying, setPlaying] = useState(false);
  return (
    <CmtCard backgroundColor="#6200EE" className={classes.cardRoot}>
      <CmtCardContent>
        <Box className={classes.avatarRoot}>
          <CmtAvatar size={52} src={'https://via.placeholder.com/150'} />
          <IconButton className={classes.iconBtn} onClick={() => setPlaying(!isPlaying)} style={{ color: 'white' }}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PlayerCard;

import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

import CmtImage from '../../../../@coremat/CmtImage';
import InviteFriendForm from '../../../../@jumbo/components/Common/InviteFriendForm';
import CmtRevealCard from '../../../../@coremat/CmtRevealCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  revealCard: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    height: '100%',
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .Cmt-content-head': {
      paddingBottom: 18,
    },
  },
  titleRoot: {
    marginBottom: 16,
  },
  subTitileRoot: {
    fontSize: 14,
    marginBottom: 16,
    letterSpacing: 0.25,
  },
}));

const InviteFriend = () => {
  const [revealed, setRevealed] = useState(false);
  const classes = useStyles();

  const revelCard = () => {
    setRevealed(true);
  };

  const handleOnClose = () => {
    setRevealed(false);
  };

  return (
    <CmtRevealCard
      className={classes.root}
      revealComponentTitle="Invite your friend"
      revealComponent={<InviteFriendForm />}
      titleProps={{ component: 'div', variant: 'h4' }}
      revealed={revealed}
      onClose={handleOnClose}>
      <CmtAdvCardContent
        className={classes.revealCard}
        avatar={<CmtImage src={'/images/dashboard/Friend-icon.svg'} />}
        title="Refer and Get Reward"
        titleProps={{
          variant: 'h3',
          component: 'div',
          className: classes.titleRoot,
        }}
        subTitle="Refer us to your friends and earn bonus when they join."
        subTitleProps={{
          component: 'p',
          variant: 'subtitle1',
          className: classes.subTitileRoot,
        }}
        extraContent={
          <Button variant="contained" color="primary" onClick={revelCard}>
            Invite A Friend
          </Button>
        }
        alignCenter
      />
    </CmtRevealCard>
  );
};

export default InviteFriend;

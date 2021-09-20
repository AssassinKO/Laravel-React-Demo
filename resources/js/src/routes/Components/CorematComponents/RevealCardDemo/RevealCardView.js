import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import CmtRevealCard from '../../../../@coremat/CmtRevealCard';
import InviteFriendForm from '../../../../@jumbo/components/Common/InviteFriendForm';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import { Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getBackground, getOverlay } from '../../../../@jumbo/utils/corematDemoHelper';
import { coremat } from '../../../../@fake-db/coremat-components';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
const cardLogo = '/images/dashboard/Friend-icon.svg';

const useStyles = makeStyles(theme => ({
  revealCard: {
    height: 350,
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
  textWhite: {
    color: theme.palette.common.white,
    '& $cardLogo': {
      backgroundColor: theme.palette.common.white,
    },
  },
  cardLogo: {
    mask: `URL(${cardLogo})`,
    backgroundColor: theme.palette.primary.main,
    width: 70,
    height: 70,
  },
}));

const ChildrenComponent = ({ revelCard, showBackground, backgroundStyle, showOverlay, overlayOpacity }) => {
  const classes = useStyles();

  const textDyanimicClass = () => {
    if ((showBackground && backgroundStyle !== 'color') || (showOverlay && overlayOpacity > 0.5)) {
      return classes.textWhite;
    }
  };

  return (
    <CmtAdvCardContent
      className={clsx(classes.revealCard, textDyanimicClass())}
      avatar={<Box className={classes.cardLogo} />}
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
  );
};

const RevealCardView = () => {
  const { background, overlay } = coremat;
  const { revealed, setRevealed, showBackground, backgroundStyle, showOverlay, overlayStyle, overlayOpacity } = useContext(
    CorematContext,
  );
  overlay.opacity = overlayOpacity;

  const revelCard = () => {
    setRevealed(true);
  };

  const handleOnClose = () => {
    setRevealed(false);
  };

  return (
    <CmtRevealCard
      {...getBackground(showBackground, backgroundStyle, background)}
      {...getOverlay(showOverlay, overlayStyle, overlay)}
      revealComponentTitle="Invite your friend"
      revealComponent={<InviteFriendForm />}
      revealed={revealed}
      onClose={handleOnClose}>
      <ChildrenComponent
        revelCard={revelCard}
        showBackground={showBackground}
        backgroundStyle={backgroundStyle}
        showOverlay={showOverlay}
        overlayOpacity={overlayOpacity}
      />
    </CmtRevealCard>
  );
};

export default RevealCardView;

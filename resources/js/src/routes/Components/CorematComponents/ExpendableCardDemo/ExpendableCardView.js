import React, { useContext } from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { Button } from '@material-ui/core';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../../../@coremat/CmtCard';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import { getBackground, getOverlay } from '../../../../@jumbo/utils/corematDemoHelper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CmtCardExpendableContent from '../../../../@coremat/CmtCardExpendableContent';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/styles';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    color: theme.palette.text.secondary,
    '& .Cmt-title': {
      color: theme.palette.text.primary,
    },
    '& .MuiCollapse-entered': {
      borderTop: `solid 1px ${theme.palette.borderColor.dark}`,
    },
  },
  textWhite: {
    color: theme.palette.common.white,
    '& .Cmt-sub-title, & .Cmt-title, & .MuiIconButton-root': {
      color: theme.palette.common.white,
    },
    '& .MuiCollapse-entered': {
      borderTop: 'solid 1px rgba(255, 255, 255, 0.12)',
    },
    '& .Cmtfooter-root': {
      borderTopColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
}));

const actions = [
  {
    icon: <InfoIcon />,
    label: 'More Detail',
  },
  {
    icon: <CloseIcon />,
    label: 'Close',
  },
];

const ExpendableCardView = () => {
  const classes = useStyles();
  const {
    extraActions,
    avatarType,
    showAvatar,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    overlayOpacity,
    showMainContent,
    showExpendableContent,
    showSocialButtons,
  } = useContext(CorematContext);

  const { basicCard, background, overlay } = coremat;
  const { header, content, expendableContent } = basicCard;
  overlay.opacity = overlayOpacity;

  const textDyanimicClass = () => {
    if ((showBackground && backgroundStyle !== 'color') || (showOverlay && overlayOpacity > 0.5)) {
      return classes.textWhite;
    }
  };

  const headerView = () => {
    return (
      <CmtCardHeader
        avatar={
          showAvatar && avatarType === 'icon-avatar' ? (
            <CmtAvatar color="primary" size="large">
              <AllInclusiveIcon fontSize="small" />
            </CmtAvatar>
          ) : showAvatar && avatarType === 'avatar' ? (
            <CmtAvatar src={header.avatar} alt="Avatar" size="large" />
          ) : null
        }
        icon={showAvatar && avatarType === 'icon' ? <AllInclusiveIcon /> : null}
        title={header.title}
        subTitle={header.subTitle}
        actions={actions}
        actionHandleIcon={<MoreVertIcon />}>
        {extraActions && <Button color="primary">View Demo</Button>}
      </CmtCardHeader>
    );
  };

  const expendableContentView = () => {
    return (
      <CmtCardExpendableContent
        actionsComponent={
          showSocialButtons && (
            <React.Fragment>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </React.Fragment>
          )
        }>
        <Typography paragraph variant="body2">
          Method:
        </Typography>
        <Typography paragraph variant="body2">
          {expendableContent.text1}
        </Typography>
        <Typography paragraph variant="body2">
          {expendableContent.text2}
        </Typography>
        <Typography paragraph variant="body2">
          {expendableContent.text3}
        </Typography>
        <Typography variant="body2">{expendableContent.text4}</Typography>
      </CmtCardExpendableContent>
    );
  };

  return (
    <CmtCard
      className={clsx(classes.cardRoot, textDyanimicClass())}
      {...getBackground(showBackground, backgroundStyle, background)}
      {...getOverlay(showOverlay, overlayStyle, overlay)}>
      {headerView()}
      {showMainContent && (
        <CmtCardContent>
          <Typography variant="body2" component="p">
            {content.description}
          </Typography>
        </CmtCardContent>
      )}
      {showExpendableContent && expendableContentView()}
    </CmtCard>
  );
};

export default ExpendableCardView;

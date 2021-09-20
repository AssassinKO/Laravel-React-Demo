import React, { useContext, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Button } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';

import CustomizerContent from './CustomizerContent';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtDrawer from '../../../../../@coremat/CmtDrawer';

const useStyles = makeStyles(theme => ({
  customizerBtn: {
    position: 'fixed',
    right: 0,
    top: 160,
    zIndex: 999,
    backgroundColor: theme.palette.primary.main,
    backgroundImage: 'linear-gradient(90deg, #D62DF1 -7.69%, #0F3CB0 92.31%)',
    color: theme.palette.common.white,
    width: 34,
    height: 34,
    minWidth: 10,
    borderRadius: '30px 0 0 30px',
    boxShadow: '0px 5px 9px rgba(72, 27, 169, 0.3)',
    '&:hover, &:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
      backgroundImage: 'linear-gradient(90deg, #0F3CB0 -7.69%, #D62DF1 92.31%)',
      color: theme.palette.common.white,
    },
    [theme.breakpoints.up('lg')]: {
      width: 45,
      height: 45,
    },
    [theme.breakpoints.up('xl')]: {
      width: 60,
      height: 60,
    },
  },
  '@keyframes rotation': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  iconSetting: {
    animation: '$rotation 2s infinite linear',
    [theme.breakpoints.up('lg')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 36,
    },
  },
  customizerOption: {
    width: 300,
    [theme.breakpoints.up('sm')]: {
      width: 380,
    },
  },
}));

const CustomizerBody = props => {
  const { showTourGuide } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (showTourGuide) {
      setOpen(false);
    }
  }, [showTourGuide]);

  return (
    <React.Fragment>
      <Button
        className={clsx(classes.customizerBtn, 'Cmt-customizerBtn')}
        onClick={() => setOpen(true)}
        data-tut="reactour__customizer">
        <SettingsIcon className={classes.iconSetting} />
      </Button>
      <CmtDrawer
        variant="temporary"
        open={isOpen}
        anchor="right"
        onClose={() => setOpen(false)}
        classes={{
          paper: 'drawer-sidebar',
        }}>
        <div className={classes.customizerOption}>
          <CustomizerContent onClose={() => setOpen(false)} {...props} />
        </div>
      </CmtDrawer>
    </React.Fragment>
  );
};

export default CustomizerBody;

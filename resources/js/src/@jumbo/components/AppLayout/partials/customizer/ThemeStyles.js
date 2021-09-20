import React, { useContext } from 'react';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CmtImage from '../../../../../@coremat/CmtImage';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import { HEADER_TYPE } from '../../../../constants/ThemeOptions';
import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: '4px 16px',
    },
    '& .Cmt-card-content': {
      padding: 16,
    },
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: theme.palette.success.main,
  },
}));

const ThemeStyles = () => {
  const classes = useStyles();
  const { headerType, setHeaderType, isSidebarFixed, setSidebarFixed, headerFixed, sidebarFixed } = useContext(
    LayoutContext,
  );

  const isHeaderFixed = headerType === HEADER_TYPE.FIXED;

  const onFixHeaderClick = () => {
    setHeaderType(isHeaderFixed ? HEADER_TYPE.STATIC : HEADER_TYPE.FIXED);
  };

  const onResetStyle = () => {
    setHeaderType(headerFixed);
    setSidebarFixed(sidebarFixed);
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Style">
        <Button onClick={onResetStyle}>RESET</Button>
      </CmtCardHeader>
      <CmtCardContent>
        <div style={{ display: 'flex' }}>
          <div className="pointer" onClick={() => onFixHeaderClick()}>
            <div style={{ position: 'relative' }}>
              <CmtImage src={'/images/customizer/fix_header.png'} alt="Fix Header" />
              {isHeaderFixed && <CheckCircleIcon className={classes.checkIcon} />}
            </div>
            <div className="mt-2">Fix Header</div>
          </div>

          <div className={clsx('pointer', 'ml-5')} onClick={() => setSidebarFixed(!isSidebarFixed)}>
            <div style={{ position: 'relative' }}>
              <CmtImage src={'/images/customizer/fix_sidebar.png'} alt="Fix Sidebar" />
              {isSidebarFixed && <CheckCircleIcon className={classes.checkIcon} />}
            </div>
            <div className="mt-2">Fix Sidebar</div>
          </div>
        </div>
      </CmtCardContent>
    </CmtCard>
  );
};

export default ThemeStyles;

import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import AppRadioButton from '../../../Common/formElements/AppRadioButton';
import { SIDEBAR_WIDTH } from '../../../../constants/ThemeOptions';
import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(() => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: '4px 16px',
    },
    '& .Cmt-card-content': {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
    },
  },
}));

const sizes = [
  { label: 'Small', value: SIDEBAR_WIDTH.SMALL },
  { label: 'Default', value: SIDEBAR_WIDTH.DEFAULT },
  { label: 'Wide', value: SIDEBAR_WIDTH.WIDE },
];

const SidebarSize = () => {
  const classes = useStyles();
  const { sidebarWidth, setSidebarWidth } = useContext(LayoutContext);

  const onResetSize = () => {
    setSidebarWidth(SIDEBAR_WIDTH.DEFAULT);
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Sidebar size">
        <Button onClick={onResetSize}>RESET</Button>
      </CmtCardHeader>
      <CmtCardContent>
        {sizes.map((item, index) => (
          <AppRadioButton
            key={index}
            name="size-style"
            label={item.label}
            value={item.value}
            checked={sidebarWidth === item.value}
            onChange={() => setSidebarWidth(item.value)}
          />
        ))}
      </CmtCardContent>
    </CmtCard>
  );
};

export default SidebarSize;

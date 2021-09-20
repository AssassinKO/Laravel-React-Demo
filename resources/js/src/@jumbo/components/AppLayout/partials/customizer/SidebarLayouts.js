import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import CmtGridView from '../../../../../@coremat/CmtGridView';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../../@coremat/CmtImage';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { SIDEBAR_LAYOUT_OPTIONS } from '../../../../constants/CustomizerOptions';
import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: 16,
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

const SidebarLayouts = () => {
  const classes = useStyles();
  const { sidebarType, setSidebarType } = useContext(LayoutContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Sidebar Layouts" />
      <CmtCardContent>
        <CmtGridView
          itemPadding={16}
          data={SIDEBAR_LAYOUT_OPTIONS}
          renderRow={(item, index) => (
            <Box key={index} className="pointer" onClick={() => setSidebarType(item.id)}>
              <Box position="relative">
                <CmtImage src={item.image} alt={item.layoutName} />
                {item.id === sidebarType && <CheckCircleIcon className={classes.checkIcon} />}
              </Box>
              <Box mt={2}>{item.layoutName}</Box>
            </Box>
          )}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default SidebarLayouts;
